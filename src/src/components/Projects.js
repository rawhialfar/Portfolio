import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-10 bg-gray-800 text-white">
      <h2 className="text-4xl font-bold mb-8 w-[110rem] text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Molecule Viewer</h3>
          <img src="path-to-your-molecule-viewer-image.jpg" alt="Molecule Viewer" className="w-full h-32 object-cover rounded-lg mb-4" />
          <p>Full-stack application using C, Python, HTML, CSS, and SQL to visualize molecule data.</p>
          <a 
            href="https://github.com/rawhialfar/Jquery-Webserver" 
            className="mt-4 inline-block bg-gray-600 py-2 px-4 rounded-lg hover:bg-gray-500"
            target="_blank" 
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Course Manager</h3>
          <img src="path-to-your-course-manager-image.jpg" alt="Course Manager" className="w-full h-32 object-cover rounded-lg mb-4" />
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
          <img src="path-to-your-weather-app-image.jpg" alt="Weather App" className="w-full h-32 object-cover rounded-lg mb-4" />
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
