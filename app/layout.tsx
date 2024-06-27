import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

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
      <body className={geist.className}>{children}</body>
    </html>
  );
}
