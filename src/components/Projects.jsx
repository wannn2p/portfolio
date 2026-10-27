import React from "react";
// Import gambar thumbnail proyek Anda
// import thumb1 from '../assets/proyek1.png';

const ProjectCard = ({ title, description, tech, github, live }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
      {/* <img src={thumb1} alt={title} className="w-full h-48 object-cover" /> */}
      <div className="w-full h-48 bg-gray-700 flex items-center justify-center text-gray-400">Gambar Proyek</div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-cyan-400">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t) => (
            <span key={t} className="bg-gray-700 text-cyan-300 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
              {t}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          <a href={github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 transition-colors">
            GitHub
          </a>
          <a href={live} target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 transition-colors">
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projectData = [
    {
      title: "Proyek 1: Website E-Commerce",
      description: "Sebuah platform e-commerce fungsional yang dibangun dengan MERN stack.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/user/proyek1",
      live: "#",
    },
    // ... Tambahkan proyek lain di sini
  ];

  return (
    <section id="projects" className="bg-gray-900 py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Proyek Saya</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectData.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
