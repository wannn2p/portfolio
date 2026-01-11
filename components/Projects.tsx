"use client";

import Image from "next/image";
import { Lock, Github, Hammer, Loader2 } from "lucide-react";
import { PROJECTS } from "@/constants";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="work" className="bg-white text-black py-24 px-6 md:px-16">
      <div className="container mx-auto">
        {/* --- header --- */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16 max-w-2xl">
          <span className="text-gray-400 uppercase tracking-widest text-sm font-medium">Featured Project</span>
          <h2 className="text-5xl md:text-6xl font-medium tracking-tighter mt-4 leading-tight">Selected Work.</h2>
          <p className="mt-6 text-gray-500 text-lg leading-relaxed">A highlight of my professional journey. Solving real-world problems through code.</p>
        </motion.div>

        {/* --- projects list --- */}
        <div className="flex flex-col gap-20">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
            >
              <div className="relative w-full aspect-video overflow-hidden rounded-3xl shadow-sm group-hover:shadow-2xl transition-all duration-500 border border-gray-100">
                <Image src={project.image} alt={project.title} fill className="object-cover" />
                {project.isPrivate && (
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full flex items-center gap-2 border border-white/20 z-10">
                    <Lock size={12} />
                    <span>Internal System</span>
                  </div>
                )}
              </div>

              <div className="flex flex-col justify-center">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs font-bold uppercase tracking-wider border border-gray-200 px-3 py-1 rounded-full text-gray-600">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 group-hover:underline decoration-2 underline-offset-4 decoration-gray-300">{project.title}</h3>
                <p className="text-gray-500 text-lg leading-relaxed mb-8">{project.description}</p>
                <div className="flex items-center gap-6">
                  {project.isPrivate ? (
                    <span className="text-gray-400 text-sm italic flex items-center gap-2">*Project protected by NDA / Internal Access Only</span>
                  ) : (
                    <a
                      href={project.repoLink || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider border-b border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-all"
                    >
                      View Source <Github size={16} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}

          {/* --- placeholder project --- */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center opacity-50 hover:opacity-100 transition-opacity duration-500"
          >
            {/* --- placeholder image ---*/}
            <div className="relative w-full aspect-video rounded-3xl border-2 border-dashed border-gray-300 bg-gray-50 flex flex-col items-center justify-center gap-4 text-gray-400">
              <div className="p-4 bg-white rounded-full shadow-sm">
                <Hammer size={32} />
              </div>
              <span className="font-medium tracking-widest uppercase text-sm">Under Development</span>
            </div>

            {/* --- placeholder copywriting */}
            <div className="flex flex-col justify-center">
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-xs font-bold uppercase tracking-wider border border-gray-200 px-3 py-1 rounded-full text-gray-400">Coming Soon</span>
                <span className="text-xs font-bold uppercase tracking-wider border border-gray-200 px-3 py-1 rounded-full text-gray-400 flex items-center gap-1">
                  Brainstorming <Loader2 size={12} className="animate-spin" />
                </span>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-gray-400">Personal Project.</h3>

              {/* --- placeholder description --- */}
              <p className="text-gray-400 text-lg leading-relaxed mb-8">Currently exploring new ideas and technologies to sharpen my frontend skills. Focusing on building interactive, accessible, and high-performance web applications.</p>

              <div className="flex items-center gap-2 text-gray-300 text-sm font-bold uppercase tracking-wider cursor-not-allowed">Stay Tuned...</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
