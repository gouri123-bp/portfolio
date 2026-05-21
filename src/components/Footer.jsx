import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-white border-t border-cyan-500/20 py-12 mt-10 relative">

      {/* Glow effect */}
      <div className="absolute inset-0 bg-cyan-500/5 blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Left - Name */}
        <div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 text-transparent bg-clip-text">
            GOURI NANDA
          </h1>
          <p className="text-gray-400 mt-3 leading-6">
            Frontend Developer passionate about building modern, responsive
            and user-friendly web applications using React & Tailwind CSS.
          </p>
        </div>

        {/* Middle - Quick Links */}
        <div>
          <h2 className="text-xl font-semibold text-cyan-400 mb-4">
            Quick Links
          </h2>

          <ul className="space-y-2 text-gray-300">
            <li><a href="#about" className="hover:text-cyan-400">About</a></li>
            <li><a href="#skills" className="hover:text-cyan-400">Skills</a></li>
            <li><a href="#education" className="hover:text-cyan-400">Education</a></li>
            <li><a href="#projects" className="hover:text-cyan-400">Projects</a></li>
            <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>
          </ul>
        </div>

        {/* Right - Contact */}
        <div>
          <h2 className="text-xl font-semibold text-cyan-400 mb-4">
            Contact
          </h2>

          <p className="text-gray-300">📍 Attingal, Kerala</p>
          <p className="text-gray-300">📧 gourinanda@example.com</p>
          <p className="text-gray-300">📞 +91 81570 XXXXX</p>

          {/* Social */}
          <div className="flex gap-4 mt-4">
            <a
              href="#"
              className="px-3 py-2 border border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition"
            >
              GitHub
            </a>

            <a
              href="#"
              className="px-3 py-2 border border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition"
            >
              LinkedIn
            </a>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="relative mt-10 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} GOURI NANDA. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;