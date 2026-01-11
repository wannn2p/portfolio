"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    id: "01",
    title: "Web Development",
    description: "Building fast and scalable web applications using modern technologies like React.js, Next.js, and Tailwind CSS.",
  },
  {
    id: "02",
    title: "UI Implementation",
    description: "Translating designs into clean code. Ensuring the website looks exactly as intended, paying attention to layout and spacing.",
  },
  {
    id: "03",
    title: "Responsive Design",
    description: "Ensuring websites look great and work perfectly on all devices, from large desktop screens to mobile phones.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services() {
  return (
    <section id="services" className="bg-white text-black py-24 px-6 md:px-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* --- left side: teks --- */}
          <div className="lg:sticky lg:top-32 h-fit">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <span className="text-gray-400 uppercase tracking-widest text-sm font-medium">What I Do</span>
              <h2 className="text-5xl md:text-6xl font-medium leading-[1.1] tracking-tighter mt-4">
                Code & <br /> Implementation.
              </h2>
              <p className="mt-8 text-gray-500 text-lg leading-relaxed max-w-md">Focusing on building functional and responsive interfaces. I turn concepts into working web applications.</p>
            </motion.div>
          </div>

          {/* --- right side: services --- */}
          <motion.div className="flex flex-col gap-6" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
            {services.map((service) => (
              <motion.div key={service.id} variants={itemVariants} className="group border border-gray-100 p-8 rounded-2xl hover:bg-gray-50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-default">
                <div className="flex justify-between items-start">
                  <span className="text-gray-300 font-bold text-xl group-hover:text-black transition-colors">{service.id}</span>
                  <ArrowUpRight className="text-gray-300 group-hover:text-black group-hover:rotate-45 transition-all duration-300" size={24} />
                </div>

                <h3 className="text-xl font-bold mt-6 tracking-tight uppercase">{service.title}</h3>
                <p className="mt-3 text-gray-500 leading-relaxed text-sm md:text-base">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
