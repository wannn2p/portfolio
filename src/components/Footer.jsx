import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 text-center p-6">
      <p>&copy; {new Date().getFullYear()} [Nama Anda]. Dibuat dengan ❤️ menggunakan React & Tailwind CSS.</p>
    </footer>
  );
};

export default Footer;
