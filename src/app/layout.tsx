import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nguyễn Quốc Việt — AI Application Engineer",
  description:
    "Portfolio of Nguyễn Quốc Việt — AI Application Engineer. ARC Prize 2026 (ARC-AGI-3) solo top 13.4%, ~640,000+ lines of production code, multi-agent AI platforms and AI CRM systems serving 4,199+ customers.",
  keywords: [
    "AI Application Engineer",
    "Multi-agent AI",
    "GraphRAG",
    "LLM",
    "Machine Learning",
    "Next.js",
    "TypeScript",
    "Nguyen Quoc Viet",
  ],
  authors: [{ name: "Nguyễn Quốc Việt" }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "Nguyễn Quốc Việt — AI Application Engineer",
    description:
      "Building AI-powered apps that save businesses real hours. ARC Prize 2026 solo top 13.4% · 640K+ lines of production code.",
    siteName: "Nguyễn Quốc Việt Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
