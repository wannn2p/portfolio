"use client";

import { useState } from "react";
import Image from "next/image";
import { Lock, Github, ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { PROJECTS } from "@/constants";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const activeProject = PROJECTS[currentIndex];

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % PROJECTS.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
  };

  const selectProject = (idx: number) => {
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.45, ease: "easeOut" as const },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -50 : 50,
      opacity: 0,
      transition: { duration: 0.35, ease: "easeIn" as const },
    }),
  };

  return (
    <>
      {/* --- Lightbox Modal --- */}
      <AnimatePresence>
        {lightboxOpen && activeProject.images && activeProject.images.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              className="absolute top-5 right-5 p-2 text-white/70 hover:text-white transition-colors"
              onClick={() => setLightboxOpen(false)}
              aria-label="Close lightbox"
            >
              <X size={28} />
            </button>
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-5xl max-h-[88vh] rounded-xl overflow-hidden shadow-2xl flex items-center justify-center bg-black/60 border border-white/10 p-1"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={activeProject.images[0]}
                alt={activeProject.title}
                width={1920}
                height={1080}
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
                priority
              />
            </motion.div>
            <p className="absolute bottom-6 text-white/40 text-xs tracking-wider uppercase">
              Click anywhere to close
            </p>
          </motion.div>
        )}
      </AnimatePresence>

    <section id="work" className="bg-[#f7f7f5] text-black py-20 px-6 md:px-16 overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        {/* --- header & navigation --- */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-gray-400 uppercase tracking-widest text-xs font-semibold">Featured Work</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mt-1 text-black">Selected Projects.</h2>
          </motion.div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
            <span className="text-xs font-mono text-gray-400 mr-1 whitespace-nowrap">
              0{currentIndex + 1} / 0{PROJECTS.length}
            </span>
            <button
              onClick={handlePrev}
              aria-label="Previous project"
              className="p-2 rounded-full border border-gray-300 hover:border-black hover:bg-black hover:text-white text-gray-500 transition-all cursor-pointer"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next project"
              className="p-2 rounded-full border border-gray-300 hover:border-black hover:bg-black hover:text-white text-gray-500 transition-all cursor-pointer"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* --- Project Card --- */}
        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeProject.id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="rounded-2xl overflow-hidden bg-white shadow-[0_4px_40px_rgba(0,0,0,0.08)] border border-black/5"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
                {/* --- visual / image side with browser mockup --- */}
                {activeProject.images && activeProject.images.length > 0 && (
                  <div
                    className="relative md:col-span-6 p-5 md:p-8 bg-gradient-to-br from-neutral-100 via-neutral-100/90 to-neutral-200/60 flex flex-col items-center justify-center cursor-zoom-in group select-none"
                    onClick={() => setLightboxOpen(true)}
                    title="Click to enlarge screenshot"
                  >
                    {/* Browser Mockup Window - Widescreen 16:10 Proportion */}
                    <div className="w-full max-w-[500px] bg-white rounded-xl border border-neutral-300/80 shadow-[0_8px_30px_rgb(0,0,0,0.08)] overflow-hidden flex flex-col transition-all duration-300 group-hover:shadow-[0_16px_45px_rgb(0,0,0,0.14)] group-hover:border-neutral-400">
                      {/* Window Header Bar */}
                      <div className="h-8 bg-neutral-100/90 border-b border-neutral-200/80 px-3 flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                        </div>
                        <div className="bg-white border border-neutral-200/80 rounded px-2.5 py-0.5 text-[10px] font-mono text-neutral-400 max-w-[160px] truncate">
                          {activeProject.title.toLowerCase().replace(/[^a-z0-9]/g, "-").slice(0, 20)}.local
                        </div>
                        <div className="w-8 flex justify-end">
                          {activeProject.isPrivate && (
                            <span className="flex items-center gap-1 text-[10px] text-neutral-500 font-medium">
                              <Lock size={10} />
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Window Viewport - Widescreen Natural Aspect Ratio */}
                      <div className="relative w-full aspect-[16/10] bg-neutral-900/5 overflow-hidden">
                        <Image
                          src={activeProject.images[0]}
                          alt={activeProject.title}
                          fill
                          className="object-cover object-left-top transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 450px"
                          priority
                        />
                        {/* Hover Overlay Hint */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/75 backdrop-blur-sm text-white text-[11px] font-medium px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-xl">
                            <ZoomIn size={13} /> View full resolution
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Subtext under mockup */}
                    <div className="mt-3 flex items-center gap-1.5 text-neutral-400 text-[11px]">
                      <ZoomIn size={12} />
                      <span>Click screenshot to open fullscreen preview</span>
                    </div>
                  </div>
                )}

                {/* --- content side --- */}
                <div className="md:col-span-6 p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    {/* badges & tech */}
                    <div className="flex flex-wrap items-center gap-1.5 mb-3">
                      {activeProject.badge && (
                        <span className="text-[11px] font-semibold tracking-wide bg-black text-white px-2.5 py-0.5 rounded-full">
                          {activeProject.badge}
                        </span>
                      )}
                      {activeProject.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[11px] font-medium border border-gray-200 bg-gray-50 px-2 py-0.5 rounded-full text-gray-500"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* title */}
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-2 text-black leading-snug">
                      {activeProject.title}
                    </h3>

                    {activeProject.role && (
                      <p className="text-gray-600 text-xs font-medium mb-2.5 bg-gray-50 border-l-2 border-black pl-2.5 py-0.5">
                        {activeProject.role}
                      </p>
                    )}

                    <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-3">
                      {activeProject.description}
                    </p>

                    {/* features */}
                    {activeProject.features && (
                      <ul className="list-disc list-outside ml-4 text-gray-400 space-y-1 text-xs mb-3">
                        {activeProject.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    )}

                    {activeProject.status && (
                      <p className="text-gray-400 italic text-[11px] mb-0.5">
                        {activeProject.status}
                      </p>
                    )}
                  </div>

                  {/* bottom: link & navigation dots */}
                  <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      {activeProject.isPrivate ? (
                        <span className="text-gray-400 text-xs italic">
                          Source code is private.
                        </span>
                      ) : activeProject.repoLink ? (
                        <a
                          href={activeProject.repoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider border-b border-black pb-0.5 hover:text-gray-500 hover:border-gray-500 transition-all"
                        >
                          View Code <Github size={13} />
                        </a>
                      ) : (
                        <span className="text-gray-400 text-xs italic">
                          Repository will be available soon.
                        </span>
                      )}
                    </div>

                    {/* Dots indicator */}
                    <div className="flex items-center gap-1.5">
                      {PROJECTS.map((_, dotIdx) => (
                        <button
                          key={dotIdx}
                          onClick={() => selectProject(dotIdx)}
                          aria-label={`Go to project ${dotIdx + 1}`}
                          className={`h-1.5 rounded-full transition-all cursor-pointer ${
                            dotIdx === currentIndex ? "w-5 bg-black" : "w-1.5 bg-gray-300 hover:bg-gray-500"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
    </>
  );
}
