import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muhammad Ridwan | Web Developer — React, Next.js, Node.js",
  description: "Muhammad Ridwan — Informatics graduate from Universitas Ibn Khaldun Bogor with real production experience. Built a full-stack thesis module integrated into a live university system and a faculty e-office system during internship. Specializes in React, Next.js, Express.js, and PostgreSQL.",
  openGraph: {
    title: "Muhammad Ridwan | Web Developer — React, Next.js, Node.js",
    description: "Informatics graduate with real production experience in academic administration systems. Open to full-time web developer roles.",
    // TODO: Add image if one exists in /public
    // images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Ridwan | Web Developer — React, Next.js, Node.js",
    description: "Informatics graduate with real production experience in academic administration systems. Open to full-time web developer roles.",
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
