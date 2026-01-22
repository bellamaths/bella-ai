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
  title: "BellaMaths",
  description: "Advanced Agentic Coding with BellaMaths",
  icons: {
    icon: "/bellamaths_logo.webp",
  },
  facebook: {
    appId: "1607009570450587",
  },
  openGraph: {
    title: "BellaMaths",
    description: "Advanced Agentic Coding with BellaMaths",
    url: "https://bellamaths.com",
    siteName: "BellaMaths",
    images: [
      {
        url: "https://bellamaths.com/bellamaths_logo.webp",
        width: 1200,
        height: 630,
        alt: "BellaMaths Preview Image",
      },
    ],
    type: "website",
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
