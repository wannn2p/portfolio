"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#footer" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = ["work", "about", "footer"];
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.3 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 px-6 md:px-16 py-6 ${isScrolled ? "bg-[#0a0a0a]/80 backdrop-blur-md py-4 border-b border-white/10" : "bg-transparent"}`}>
        <div className="container mx-auto flex justify-between items-center">
          {/* --- logo --- */}
          <Link href="/" className="text-xl font-bold tracking-tighter text-white z-50 relative">
            Muhammad Ridwan<span className="text-gray-500">.</span>
          </Link>

          {/* --- desktop menu --- */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm uppercase tracking-widest transition-colors relative pb-0.5 ${
                    isActive ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 w-full h-px bg-white"
                    />
                  )}
                </Link>
              );
            })}

            <Link href="#footer" className="bg-white text-black px-6 py-2 rounded-full text-sm font-bold hover:bg-gray-200 transition-all cursor-pointer">
              LET&apos;S TALK
            </Link>
          </div>

          {/* --- mobile hamburger button --- */}
          <button className="md:hidden text-white z-50 relative p-2 focus:outline-none" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* --- mobile menu overlay --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="fixed inset-0 z-40 bg-[#0a0a0a] pt-24 px-6 flex flex-col md:hidden">
            <div className="flex flex-col gap-8">
              {navLinks.map((item) => (
                <Link key={item.name} href={item.href} onClick={() => setIsOpen(false)} className="text-3xl font-medium text-gray-400 hover:text-white transition-colors border-b border-white/10 pb-4">
                  {item.name}
                </Link>
              ))}

              <Link href="#footer" className="mt-4 bg-white text-black py-4 rounded-full text-lg font-bold hover:bg-gray-200 transition-all text-center" onClick={() => setIsOpen(false)}>
                LET&apos;S TALK
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
