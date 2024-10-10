// src/components/Hero.js
import React from "react";
import portrait from "../assets/img/portrait.jpg"

const Hero = () => {
  return (
    <section id="about" className="flex flex-col items-center py-20 px-10 bg-gray-800 text-white">
      <div className="flex flex-col lg:flex-row items-center justify-center space-y-10 lg:space-x-10">
        <div className="lg:w-2/4 flex-row ">
          <img
            src={portrait}
            alt="Your Name"
            className="w-2/3 rounded-lg shadow-lg"
          />
        </div>

        <div className="lg:w-[1600px] text-left space-y-5">
          <h1 className="text-5xl font-bold">Hi, my name is Rawhi Alfar.</h1>
          <p className="text-xl">
            I'm a passionate Co-op Software Engineering student at the University of Guelph. My journey in programming began in high school, where I found a love for coding and made lasting connections through the programming club. That experience inspired me to pursue software engineering as my career path. I thrive on meeting new people, building meaningful relationships, and embracing new opportunities. Whether it's for collaboration or a simple chat, feel free to connect with me on LinkedIn or send me an email. I'm always eager to engage and explore new possibilities!
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
