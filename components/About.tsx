"use client";

import { motion } from "framer-motion";

const STACK = [
  { label: "React.js",     color: "bg-sky-500/10    text-sky-400    border-sky-500/20" },
  { label: "Next.js",      color: "bg-white/10      text-gray-200   border-white/20" },
  { label: "TypeScript",   color: "bg-blue-500/10   text-blue-400   border-blue-500/20" },
  { label: "Express.js",   color: "bg-green-500/10  text-green-400  border-green-500/20" },
  { label: "Nest.js",      color: "bg-red-500/10    text-red-400    border-red-500/20" },
  { label: "PostgreSQL",   color: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20" },
  { label: "Sequelize",    color: "bg-teal-500/10   text-teal-400   border-teal-500/20" },
  { label: "Tailwind CSS", color: "bg-cyan-500/10   text-cyan-400   border-cyan-500/20" },
  { label: "Bootstrap",    color: "bg-purple-500/10 text-purple-400 border-purple-500/20" },
  { label: "Git",          color: "bg-orange-500/10 text-orange-400 border-orange-500/20" },
  { label: "REST API",     color: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20" },
  { label: "Node.js",      color: "bg-lime-500/10   text-lime-400   border-lime-500/20" },
];

export default function About() {
  return (
    <section id="about" className="bg-[#0a0a0a] text-white py-24 px-6 md:px-16 border-t border-white/5 relative overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-5xl">
        {/* --- Header --- */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-gray-500 uppercase tracking-widest text-xs font-semibold font-mono">
            02 // Profile & Capabilities
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mt-2 text-white">
            Engineering Background.
          </h2>
        </motion.div>

        {/* --- Bento Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* Bento Item 1: Bio & Core Focus (Span 7) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-7 rounded-2xl bg-white/3 border border-white/10 p-6 md:p-8 flex flex-col justify-between hover:border-white/20 transition-colors"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 font-mono mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for Full-Time Roles
              </div>
              <h3 className="text-xl md:text-2xl font-medium text-white leading-snug mb-3">
                Frontend-focused web developer building interactive interfaces with backend understanding.
              </h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                Specializing in React and Next.js, with hands-on experience integrating REST APIs and backend modules. Experienced in turning operational university workflows into responsive, reliable web interfaces.
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-gray-500 font-mono">Based in Bogor, Indonesia</span>
              <a
                href="https://linkedin.com/in/wannn2p"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold uppercase tracking-wider text-white hover:text-gray-300 border-b border-white pb-0.5 transition-colors"
              >
                Connect on LinkedIn →
              </a>
            </div>
          </motion.div>

          {/* Bento Item 2: Education & GPA Metric (Span 5) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-5 rounded-2xl bg-linear-to-br from-white/5 to-white/1 border border-white/10 p-6 md:p-8 flex flex-col justify-between hover:border-white/20 transition-colors"
          >
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-gray-500">
                Education
              </span>
              <h4 className="text-lg md:text-xl font-semibold text-white mt-2">
                Informatics Engineering · S.T.
              </h4>
              <p className="text-gray-400 text-sm mt-1">
                Universitas Ibn Khaldun Bogor
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Class of 2022 · Defended August 2026
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <span className="text-xs font-mono uppercase tracking-wider text-gray-500">
                Academic Performance
              </span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                  3.74
                </span>
                <span className="text-gray-400 text-sm font-mono">
                  / 4.00 Cumulative GPA
                </span>
              </div>
              <p className="text-xs text-gray-400 mt-1.5">
                Thesis defended · Completing final revision
              </p>
            </div>
          </motion.div>

          {/* Bento Item 3: Categorized Skills & Stack (Span 12) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-12 rounded-2xl bg-white/3 border border-white/10 p-6 md:p-8 hover:border-white/20 transition-colors"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 pb-4 border-b border-white/10 gap-2">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-gray-500">
                  Technical Stack
                </span>
                <h4 className="text-base font-semibold text-white mt-0.5">
                  Technologies Applied in Real Production Workflows
                </h4>
              </div>
              <span className="text-xs font-mono text-gray-500">
                Hands-on Production & Thesis Verified
              </span>
            </div>

            {/* Categorized Tech Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Frontend */}
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-gray-400 block mb-2.5">
                  // Frontend & UI
                </span>
                <div className="flex flex-wrap gap-2">
                  {["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Bootstrap"].map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/15 text-gray-200 hover:border-white/40 hover:bg-white/10 transition-all"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend & API */}
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-gray-400 block mb-2.5">
                  // Backend & Systems
                </span>
                <div className="flex flex-wrap gap-2">
                  {["Node.js", "Express.js", "Nest.js", "REST API"].map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/15 text-gray-200 hover:border-white/40 hover:bg-white/10 transition-all"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Database & Tooling */}
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-gray-400 block mb-2.5">
                  // Database & Workflow
                </span>
                <div className="flex flex-wrap gap-2">
                  {["PostgreSQL", "Sequelize ORM", "Git", "GitHub"].map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/15 text-gray-200 hover:border-white/40 hover:bg-white/10 transition-all"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
