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
  title: "BoostAI — Supercharge Your Productivity with Intelligent Automation",
  description:
    "BoostAI is a powerful AI-driven platform designed to help businesses and creators work smarter, faster, and more efficiently through smart automation, real-time insights, and seamless integrations.",
  keywords: [
    "AI automation",
    "productivity",
    "artificial intelligence",
    "workflow automation",
    "business intelligence",
    "real-time insights",
  ],
  authors: [{ name: "BoostAI Inc." }],
  creator: "BoostAI Inc.",
  publisher: "BoostAI Inc.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://boostai.com",
    siteName: "BoostAI",
    title:
      "BoostAI — Supercharge Your Productivity with Intelligent Automation",
    description:
      "Automate workflows, gain real-time insights, and scale faster with BoostAI — intelligent solutions built for modern teams.",
    images: [
      {
        url: "/image.png",
        width: 1605,
        height: 619,
        alt: "BoostAI Platform Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BoostAI — Supercharge Your Productivity",
    description:
      "Automate workflows, gain real-time insights, and scale faster with BoostAI.",
    images: ["/image.png"],
    creator: "@boostai",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  metadataBase: new URL("https://boostai.com"),
  alternates: {
    canonical: "https://boostai.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
