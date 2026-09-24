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

    const recipientEmail = process.env.RECIPIENT_EMAIL || "1b2b0f8347faf7b1c5eafa74f055e816";

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

    // Attempt 1: Direct JSON fetch to FormSubmit
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formSubmitPayload),
      });

      const textData = await response.text();

      // Detect Cloudflare Bot Challenge HTML string
      if (textData.includes("<!DOCTYPE") || textData.includes("Just a moment") || textData.includes("challenge-error") || textData.includes("cf_chl_opt")) {
        console.warn("FormSubmit returned Cloudflare challenge. Falling back to browser direct submission...");
        return NextResponse.json({
          success: false,
          useClientFallback: true,
          error: "Cloudflare security challenge detected on serverless proxy.",
        });
      }

      let data: any = {};
      try {
        data = JSON.parse(textData);
      } catch {
        data = { success: response.ok, message: textData };
      }

      if (response.ok && (data.success === "true" || data.success === true || response.status === 200)) {
        return NextResponse.json({
          success: true,
          message: `Inquiry successfully sent to ${recipientEmail}`,
          data,
        });
      }
    } catch (fsErr) {
      console.warn("FormSubmit JSON endpoint failed, trying URL encoded fallback...", fsErr);
    }

    // Attempt 2: Form-urlencoded fallback to FormSubmit
    try {
      const urlParams = new URLSearchParams();
      Object.entries(formSubmitPayload).forEach(([key, val]) => urlParams.append(key, String(val)));

      const fallbackResponse = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
        body: urlParams.toString(),
      });

      const fallbackText = await fallbackResponse.text();

      if (fallbackText.includes("<!DOCTYPE") || fallbackText.includes("Just a moment") || fallbackText.includes("challenge-error")) {
        return NextResponse.json({
          success: false,
          useClientFallback: true,
          error: "Cloudflare security challenge detected on form-urlencoded attempt.",
        });
      }

      let fallbackData: any = {};
      try {
        fallbackData = JSON.parse(fallbackText);
      } catch {
        fallbackData = { success: fallbackResponse.ok, message: fallbackText };
      }

      if (fallbackResponse.ok || fallbackData.success === "true" || fallbackData.success === true) {
        return NextResponse.json({
          success: true,
          message: `Inquiry successfully sent to ${recipientEmail}`,
          data: fallbackData,
        });
      }
    } catch (fbErr) {
      console.warn("Urlencoded fallback error:", fbErr);
    }

    // Fallback response instructing client to execute direct browser submit
    return NextResponse.json({
      success: false,
      useClientFallback: true,
      error: "Server delivery fallback triggered.",
    });

  } catch (error: any) {
    console.error("Error in contact API route:", error);
    return NextResponse.json({
      success: false,
      useClientFallback: true,
      error: "Server route error. Using direct browser delivery...",
    });
  }
}

