import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Muhammad Ridwan",
  description: "Modern portfolio built with Next.js",
  icons: {
    icon: "/iconn.png",
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
