import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Web, Web App & Mobile App Development Studio`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Website Development",
    "Web Applications",
    "Mobile Applications",
    "Custom Software Development",
    "Next.js Developer India",
    "Tamil Nadu Software Company",
    "VEXARIA TECHNOLOGIES",
  ],
  authors: [{ name: "VEXARIA TECHNOLOGIES", url: "https://vexaria.tech" }],
  creator: "VEXARIA TECHNOLOGIES",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vexaria.tech",
    title: `${siteConfig.name} | Web, Web App & Mobile App Development Studio`,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Digital Products. Built Better.`,
    description: siteConfig.description,
    creator: "@vexariatech",
  },
  icons: {
    icon: [
      { url: "/images/alv.webp", type: "image/webp" },
    ],
    shortcut: "/images/alv.webp",
    apple: "/images/alv.webp",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#0B1220] text-slate-100 font-sans antialiased selection:bg-cyan-500 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}
