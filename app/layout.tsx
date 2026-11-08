import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muhammad Ridwan | Front-End Developer — React, Next.js",
  description: "Front-end developer (Informatics Engineering, GPA 3.74) with experience building interfaces in React.js, TypeScript, and Next.js for live university systems. Open to full-time front-end roles.",
  openGraph: {
    title: "Muhammad Ridwan | Front-End Developer — React, Next.js",
    description: "Front-end developer (Informatics Engineering, GPA 3.74) with experience building interfaces in React.js, TypeScript, and Next.js for live university systems. Open to full-time front-end roles.",
    // TODO: Add image if one exists in /public
    // images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Ridwan | Front-End Developer — React, Next.js",
    description: "Front-end developer (Informatics Engineering, GPA 3.74) with experience building interfaces in React.js, TypeScript, and Next.js for live university systems. Open to full-time front-end roles.",
    // TODO: Add image if one exists in /public
    // images: ["/twitter-image.png"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased selection:bg-white selection:text-black`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
