import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";

const geist = GeistSans;

export const metadata: Metadata = {
  title: "Anandh Sellamuthu",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geist.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
