import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Secure Guard Security Services | Site Risk & Security Gap Assessment",
  description:
    "Uncover hidden property vulnerabilities with a professional security assessment. SGSS offers tailored security plans, mobile patrols, active monitoring, and access control in Southern California.",
  keywords: [
    "Security Assessment",
    "Security Gaps",
    "Property Protection",
    "Secure Guard Security Services",
    "Mobile Patrol",
    "Access Control",
    "Surveillance Towers",
    "Southern California Security",
  ],
  authors: [{ name: "Secure Guard Security Services" }],
  openGraph: {
    title: "Find Property Security Gaps Before an Incident Finds Them | SGSS",
    description:
      "A professional security walkthrough reveals vulnerabilities that easy-to-miss daily routines obscure. Schedule your free assessment today.",
    url: "https://secureguard.com",
    siteName: "Secure Guard Security Services",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Secure Guard Security Services - Site Risk Assessment",
    description: "Identify hidden security gaps with a professional site walkthrough.",
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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
