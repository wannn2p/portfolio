import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-800 py-20 px-6 text-white text-center">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-4">Hubungi Saya</h2>
        <p className="text-gray-400 mb-8 text-lg">Saya tertarik dengan kesempatan magang atau proyek freelance. Jangan ragu untuk menghubungi saya!</p>
        <a href="mailto:emailanda@example.com" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-lg text-lg">
          Kirim Email
        </a>
        <div className="mt-10 flex justify-center space-x-6">
          <a href="https://github.com/usernameanda" className="text-gray-400 hover:text-white">
            GitHub
          </a>
          <a href="https://linkedin.com/in/usernameanda" className="text-gray-400 hover:text-white">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
