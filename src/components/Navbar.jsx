import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-cyan-400">
          NamaAnda
        </a>
        <div className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-cyan-400 transition-colors duration-300">
            Tentang Saya
          </a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors duration-300">
            Proyek
          </a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors duration-300">
            Kontak
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
