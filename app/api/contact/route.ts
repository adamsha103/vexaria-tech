import { NextResponse } from "next/server";
import { siteConfig } from "@/config/site";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields: Name, Email, and Message are required." },
        { status: 400 }
      );
    }

    const recipientEmail = process.env.RECIPIENT_EMAIL || siteConfig.email || "aadhamshah@gmail.com";

    // Extract request headers for Origin and Referer so FormSubmit recognizes web server source
    const requestOrigin = request.headers.get("origin") || request.headers.get("referer") || "http://localhost:3000";

    const formSubmitPayload = {
      _subject: `⚡ New Project Inquiry from ${name} - ${siteConfig.name}`,
      _template: "table",
      _captcha: "false",
      _replyto: email,
      "Full Name": name,
      "Work Email": email,
      "Phone Number": phone || "Not Provided",
      "Company Name": company || "Not Provided",
      "Service Requirement": service || "General Inquiry",
      "Project Message": message,
      "Submission Time": new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }),
    };

    const response = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Referer: requestOrigin,
        Origin: requestOrigin,
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
      body: JSON.stringify(formSubmitPayload),
    });

    const data = await response.json();

    if (response.ok && (data.success === "true" || data.success === true)) {
      return NextResponse.json({
        success: true,
        message: `Inquiry successfully sent to ${recipientEmail}`,
        data,
      });
    } else {
      console.error("FormSubmit API response error:", data);
      return NextResponse.json(
        {
          success: false,
          error: data.message || "Email service returned an error.",
        },
        { status: response.status || 500 }
      );
    }
  } catch (error: any) {
    console.error("Error sending inquiry email:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to send inquiry email" },
      { status: 500 }
    );
  }
}

