import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

// ============================================================
// METADATA - Update with your information
// Prompt: "Update the page title and description for SEO"
// ============================================================
export const metadata: Metadata = {
  title: "Echoes of Change | Personal I-Ching & WRITITATION™ Companion",
  description: "Find harmony in every change. Your private, local-first guide for daily I-Ching reflection and meditative journaling.",
  keywords: ["I-Ching", "Writitation", "Mindfulness", "Journaling", "Meditation", "Personal Growth", "Privacy"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
