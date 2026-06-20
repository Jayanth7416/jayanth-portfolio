import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jayanth Kumar Panuganti — Senior Data Engineer",
  description:
    "Senior Data Engineer with 7+ years building large-scale ETL pipelines in the US health insurance domain. PySpark on AWS Glue/EMR, Redshift data marts, claims (837/835) and eligibility (270/271, 834) at scale.",
  keywords: [
    "Data Engineer",
    "PySpark",
    "AWS Glue",
    "EMR",
    "Redshift",
    "Health Insurance",
    "Claims",
    "HIPAA",
    "Jayanth Kumar",
  ],
  authors: [{ name: "Jayanth Kumar Panuganti" }],
  openGraph: {
    title: "Jayanth Kumar Panuganti — Senior Data Engineer",
    description:
      "AWS & Big Data engineer specializing in US health insurance claims pipelines.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-black text-neutral-200 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
