// src/components/Header.js
import React from "react";

const Header = () => {
  return (
    <nav className="flex justify-between items-center py-5 px-10 bg-gray-900">
      <div className="text-3xl font-bold">Rawhi Al-far</div>
      <div className="space-x-8">
        <a href="#about" className="hover:text-gray-400">About Me</a>
        <a href="#projects" className="hover:text-gray-400">Research Projects</a>
        <a href="#contact" className="hover:text-gray-400">Contact</a>
      </div>
      <div className="flex items-center space-x-4">
        <a href="https://www.linkedin.com/in/rawhi-alfar" className="text-xl">
          <i class='bx bxl-linkedin'></i>
        </a>
        <a href="https://github.com/rawhialfar" className="text-xl">
          <i class='bx bxl-github'></i>
        </a>
        <a href="mailto:alfarrawhi@gmail.com" className="text-xl">
          <i class='bx bx-envelope'></i>
        </a>
        <a
          href="../assets/Rawhi Al-far - Resume.pdf"
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-gray-700 py-2 px-4 rounded-lg hover:bg-gray-600"
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Header;
