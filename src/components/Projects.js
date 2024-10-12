import React from 'react';
import webserver from "../assets/img/Webserver.png"
import CourseManager from "../assets/img/CourseManager.png"
import CourseTable from "../assets/img/CourseTable.png"
import WeatherApp from "../assets/img/WeatherApp.png"
const Projects = () => {
  return (
    <section id="projects" className="py-20 px-10 bg-gray-800 text-white">
      <h2 className="text-4xl font-bold mb-8 w-[110rem] text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        <div className="bg-gray-700 p-6 h-[45rem] rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Molecule Viewer</h3>
          <img src={webserver} alt="Molecule Viewer" className="w-full h-[450px] object-fill rounded-lg mb-4" />
          <p >Full-stack application using C, Python, HTML, CSS, and SQL to visualize molecule data.</p>
          <a 
            href="https://github.com/rawhialfar/Jquery-Webserver" 
            className="mt-4 inline-block bg-gray-600 py-2 px-4 rounded-lg hover:bg-gray-500"
            target="_blank" 
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
        <div className="bg-gray-700 p-6 h-[45rem] rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Course Manager</h3>
          <img src={CourseManager} alt="Course Manager" className="w-full h-[310px] object-fill rounded-lg mb-4" />
          <img src={CourseTable} alt="Course Manager" className="w-full h-[150px] object-fill rounded-lg mb-4" />
          <p>Web-based university portal developed with a team of six using PHP, JavaScript, and REST API.</p>
          <a 
            href="https://github.com/rawhialfar/Course-Manager" 
            className="mt-4 inline-block bg-gray-600 py-2 px-4 rounded-lg hover:bg-gray-500"
            target="_blank" 
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Weather App</h3>
          <img src={WeatherApp} alt="Weather App" className="w-full h-ful object-cover rounded-lg mb-4" />
          <p>Cross-platform weather-checking app built using JavaScript, React, and Open Weather API.</p>
          <a 
            href="https://weatherapp-pr.netlify.app/" 
            className="mt-4 inline-block bg-gray-600 py-2 px-4 rounded-lg hover:bg-gray-500"
            target="_blank" 
            rel="noopener noreferrer"
          >
            View Live App
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
