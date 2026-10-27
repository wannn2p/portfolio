"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Download } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-[#0a0a0a] flex flex-col justify-center px-6 md:px-16 pt-24 pb-16 md:pb-24 overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* --- left side: teks --- */}
        <div className="z-10 order-2 lg:order-1">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-[12vw] lg:text-[7vw] font-medium leading-[0.9] tracking-tighter text-white">
              Web <br />
              <span className="text-gray-500">Developer.</span>
            </h1>
          </motion.div>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="mt-8 text-gray-400 text-lg md:text-xl max-w-md leading-relaxed">
            I build web applications with a focus on{" "}
            <span className="text-white font-medium">responsive frontend interfaces</span>{" "}
            and API integration. Recently shipped an academic module integrated into a live university system as my undergraduate thesis.
          </motion.p>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }} className="mt-12 flex flex-wrap items-center gap-6">
            <Link href="#work" className="inline-flex items-center gap-4 text-gray-500 uppercase text-xs tracking-[0.2em] group cursor-pointer hover:text-white transition-colors">
              <div className="p-3 border border-white/20 rounded-full animate-bounce group-hover:border-white transition-colors">
                <ArrowDown size={16} />
              </div>
              <span>See My Projects</span>
            </Link>
            
            <a href="/CV_Muhammad_Ridwan.pdf" download className="inline-flex items-center gap-4 text-gray-500 uppercase text-xs tracking-[0.2em] group cursor-pointer hover:text-white transition-colors">
              <div className="p-3 border border-white/20 rounded-full group-hover:border-white transition-colors">
                <Download size={16} />
              </div>
              <span>Download CV</span>
            </a>
          </motion.div>
        </div>

        {/* --- right side: profile image --- */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative order-1 lg:order-2 h-[50vh] lg:h-[80vh] w-full overflow-hidden rounded-2xl group">
          <div className="relative w-full h-full">
            <Image
              src="/profile.png"
              alt="Portrait of Muhammad Ridwan"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top filter grayscale contrast-125 brightness-90 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-700"
            />

            <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />

            <div
              className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* --- background text --- */}
      <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.5 }} className="absolute bottom-10 left-0 hidden lg:block pointer-events-none">
        <span className="text-white/6 text-[15vw] font-bold select-none leading-none">PORTFOLIO</span>
      </motion.div>
    </section>
  );
}
