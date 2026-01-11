"use client";

import { useState, useEffect } from "react";
import { Github, Linkedin, Instagram, ArrowUp, Copy, Check } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [time, setTime] = useState<string>("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "Asia/Jakarta",
      });
      setTime(timeString);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("wannn2p@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer" className="bg-[#0a0a0a] text-white py-20 px-6 md:px-16 border-t border-white/5">
      <div className="container mx-auto max-w-6xl">
        {/* --- content --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-white/10 pb-12">
          {/* --- left side ---*/}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <span className="text-gray-500 uppercase tracking-[0.2em] text-sm font-medium">Let&apos;s Connect</span>

              {/* --- headline --- */}
              <h2 className="text-4xl md:text-6xl font-medium tracking-tighter mt-6 mb-8 leading-tight">
                Ready to collaborate? <br />
                <span className="text-gray-600">Let&apos;s get started.</span>
              </h2>

              <div className="flex items-center gap-4 group w-fit">
                <a href="mailto:wannn2p@gmail.com" className="text-xl md:text-3xl border-b border-white/30 pb-2 hover:text-gray-400 hover:border-gray-400 transition-all">
                  wannn2p@gmail.com
                </a>
                <button onClick={handleCopyEmail} className="p-3 bg-white/5 rounded-full hover:bg-white hover:text-black transition-all relative" title="Copy Email">
                  {copied ? <Check size={18} /> : <Copy size={18} />}
                </button>
              </div>
            </div>
          </div>

          {/* --- right side --- */}
          <div className="lg:col-span-5 flex flex-col justify-between lg:items-end gap-10">
            <div className="flex flex-col lg:items-end gap-4">
              <span className="text-gray-500 uppercase tracking-widest text-xs mb-2">Menu</span>
              {["Home", "Services", "Work", "About"].map((item) => (
                <Link key={item} href={item === "Home" ? "/" : `#${item.toLowerCase()}`} className="text-2xl md:text-3xl font-medium text-gray-400 hover:text-white transition-colors tracking-tight">
                  {item}
                </Link>
              ))}
            </div>

            {/* --- socials --- */}
            <div className="flex gap-4">
              <a href="https://github.com/wannn2p" target="_blank" className="p-4 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/wannn2p" target="_blank" className="p-4 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all">
                <Linkedin size={20} />
              </a>
              <a href="https://instagram.com/wannn2.p" target="_blank" className="p-4 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* --- copyright --- */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-10 text-gray-500 text-sm gap-6">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <p>© {currentYear} Muhammad Ridwan.</p>
            <span className="hidden md:block w-1 h-1 bg-gray-700 rounded-full"></span>
            <p className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Local time: <span className="text-gray-300 font-mono">{time} WIB</span>
            </p>
          </div>

          <button onClick={scrollToTop} className="flex items-center gap-2 uppercase tracking-widest text-xs hover:text-white transition-colors group">
            Back to Top
            <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
