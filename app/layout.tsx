import type { Metadata } from "next";
import { Geist_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const luxuryFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-luxury",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "For Faiza ❤️",
  description: "A Story Written By Destiny",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${luxuryFont.variable} ${geistMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}