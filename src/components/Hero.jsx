import React from "react";
import { Typewriter } from "react-simple-typewriter";
import profilePic from "../assets/wt.jpeg";

const Hero = () => {
  return (
    <section className="bg-gray-900 text-white min-h-screen flex items-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Halo, Saya [Nama Anda]!</h1>
          <h2 className="text-2xl md:text-4xl text-cyan-400 font-semibold mb-6">
            <Typewriter words={["Mahasiswa Informatika", "Web Developer", "Mobile Enthusiast"]} loop={true} cursor cursorStyle="_" typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-lg">Seorang mahasiswa informatika dengan passion untuk membangun aplikasi web yang fungsional dan menarik.</p>
          <a href="#projects" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105">
            Lihat Proyek Saya
          </a>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src={profilePic} alt="Foto Profil" className="w-64 h-64 md:w-96 md:h-96 rounded-full object-cover shadow-2xl border-4 border-cyan-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
