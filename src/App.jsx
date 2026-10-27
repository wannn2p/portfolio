import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt } from "react-icons/fa";

// --- 1. GANTI DENGAN NAMA FILE GAMBAR ANDA ---
import profilePic from "./assets/wt.jpeg";
import thumbInventaris from "./assets/wt.jpeg";
import thumbChat from "./assets/wt.jpeg";
// Tambahkan import untuk thumbnail proyek lainnya jika ada

// --- 2. ISI DENGAN DATA PROYEK ANDA ---
const projects = [
  {
    image: thumbInventaris,
    title: "Sistem Manajemen Inventaris",
    description: "Aplikasi web full-stack untuk melacak inventaris barang secara real-time. Dibangun dengan arsitektur modern dan UI yang responsif.",
    tech: ["React", "Node.js", "PostgreSQL", "Tailwind CSS", "Docker"],
    github: "https://github.com/username/proyek-inventaris", // Ganti link GitHub
    live: "https://proyek-inventaris.com", // Ganti link Live Demo
  },
  {
    image: thumbChat,
    title: "Aplikasi Mobile Chat",
    description: "Aplikasi chat real-time untuk platform Android & iOS menggunakan React Native dan Firebase untuk backend.",
    tech: ["React Native", "Firebase", "Expo"],
    github: "https://github.com/username/proyek-chat", // Ganti link GitHub
    live: "https://proyek-chat.com", // Ganti link Live Demo
  },
  // Tambahkan objek proyek lainnya di sini
];

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="aurora-background"></div>

      {/* Efek Spotlight Cursor */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      ></div>

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-16">
          {/* === KOLOM KIRI (STICKY) === */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-5/12 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <img src={profilePic} alt="Foto Profil" className="rounded-full w-32 h-32 mb-6 border-2 border-slate-500" />

              <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                {/* 3. Ganti dengan nama Anda */}
                <a href="/">Nama Anda</a>
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                {/* 4. Ganti dengan jabatan/status Anda */}
                Mahasiswa Informatika di Universitas XYZ
              </h2>
              <p className="mt-4 max-w-xs leading-normal text-slate-400">
                {/* 5. Ganti dengan bio singkat Anda */}
                Saya merancang dan membangun aplikasi web yang fungsional dan memiliki pengalaman pengguna yang luar biasa.
              </p>
              <nav className="hidden lg:block mt-12">
                <ul className="flex flex-col space-y-4 text-xs font-bold tracking-widest uppercase">
                  <li>
                    <a className="group flex items-center py-3" href="#about">
                      <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200"></span>
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200">Tentang Saya</span>
                    </a>
                  </li>
                  <li>
                    <a className="group flex items-center py-3" href="#projects">
                      <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200"></span>
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200">Proyek</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            {/* 6. Ganti dengan link sosial media Anda */}
            <ul className="ml-1 mt-8 flex items-center gap-4">
              <a href="https://github.com/username" target="_blank" rel="noreferrer">
                <FaGithub className="h-6 w-6 text-slate-400 hover:text-slate-200 transition-colors" />
              </a>
              <a href="https://linkedin.com/in/username" target="_blank" rel="noreferrer">
                <FaLinkedin className="h-6 w-6 text-slate-400 hover:text-slate-200 transition-colors" />
              </a>
              <a href="mailto:email@anda.com">
                <FaEnvelope className="h-6 w-6 text-slate-400 hover:text-slate-200 transition-colors" />
              </a>
            </ul>
          </header>

          {/* === KOLOM KANAN (SCROLLABLE) === */}
          <main className="pt-24 lg:w-7/12 lg:py-24">
            <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <h3 className="text-lg font-bold uppercase tracking-widest text-slate-200 mb-6">Tentang Saya</h3>
              {/* 7. Ganti dengan paragraf tentang diri Anda */}
              <p className="mb-4">
                Dulu saat pertama kali mencoba membuat "Hello World" di web, saya langsung jatuh cinta dengan proses development. Kini, saya bersemangat mendalami teknologi seperti React dan Node.js untuk membangun solusi digital yang
                inovatif.
              </p>
              <p>Di luar coding, saya suka membaca artikel teknologi, berkontribusi di proyek open-source kecil, dan bereksperimen dengan desain UI/UX.</p>
            </section>

            <section id="projects" className="scroll-mt-16 lg:scroll-mt-24">
              <h3 className="text-lg font-bold uppercase tracking-widest text-slate-200 mb-6">Proyek</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-800 rounded-lg p-4 transition-all duration-300 hover:-translate-y-2 hover:border-teal-400/50 flex flex-col">
                    <img src={project.image} alt={project.title} className="rounded mb-3 border border-slate-700" />
                    <h4 className="text-lg font-bold text-slate-200 mb-2">{project.title}</h4>
                    <p className="text-slate-400 text-xs mb-3 flex-grow">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="bg-teal-400/10 text-teal-300 text-xs font-medium px-3 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 text-slate-400 mt-auto">
                      <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-teal-300 transition-colors flex items-center gap-1 text-sm">
                        <FaGithub /> GitHub
                      </a>
                      <a href={project.live} target="_blank" rel="noreferrer" className="hover:text-teal-300 transition-colors flex items-center gap-1 text-sm">
                        <FaExternalLinkAlt /> Live
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
