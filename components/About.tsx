"use client";

import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="bg-[#0a0a0a] text-white py-24 px-6 md:px-16 border-t border-white/5">
      <div className="container mx-auto max-w-4xl">
        {/* --- header --- */}
        <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-gray-500 uppercase tracking-widest text-sm font-medium">
          About Me
        </motion.span>

        {/* --- teks --- */}
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl md:text-4xl font-medium leading-tight mt-8">
          I&apos;m a final-year Computer Science student based in Indonesia.
          <span className="text-gray-500"> I combine logic with creativity to build functional web applications.</span>
        </motion.h2>

        {/* --- deskripsi --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 text-gray-400 text-lg leading-relaxed">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <p className="mb-6">
              Currently in my 7th semester, focusing on
              <span className="text-white font-bold"> Frontend Development </span>
              using React ecosystem. I love the process of turning complex problems into simple, beautiful interfaces.
            </p>
            <p>My journey started with a curiosity about how websites work, and now I&apos;m building systems used by real faculties.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <p className="mb-6">
              Outside of coding, I believe in the power of discipline. Just like in the
              <span className="text-white font-bold"> Gym</span>, I believe that consistency is key. Whether it&apos;s debugging code or hitting a new PR, I always push for progress.
            </p>

            {/* --- more about my resume --- */}
            {/* <a href="https://linkedin.com/in/wannn2p" target="_blank" className="inline-flex items-center gap-2 text-white font-bold border-b border-white pb-1 hover:text-gray-300 hover:border-gray-300 transition-all mt-4">
              More about my resume <ArrowRight size={18} />
            </a> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
