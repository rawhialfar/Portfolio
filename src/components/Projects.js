import React from "react";
import webserver from "../assets/img/Webserver.png";
import CourseManager from "../assets/img/CourseManager.png";
import CourseTable from "../assets/img/CourseTable.png";
import WeatherApp from "../assets/img/WeatherApp.png";

const Projects = () => {
	return (
		<section
			id="projects"
			className="flex flex-col items-center py-20 px-10 bg-gray-800 text-white"
		>
			<h2 className="text-4xl font-bold mb-8 w-[110rem] text-center">
				Projects
			</h2>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[120rem]">
				<div className="bg-gray-700 p-6 rounded-lg shadow-lg 3xl:h-[51rem] flex flex-col items-center flex-grow-0">
					<h3 className="text-xl font-semibold mb-1">Molecule Viewer</h3>
					<h4 className="text-[14px] mb-3 italic">
						C, Python, JS, HTML, CSS, and SQL
					</h4>
					<div className="flex justify-center w-full">
						<img
							src={webserver}
							alt="Molecule Viewer"
							className="h-[450px] object-fill rounded-lg mb-4"
						/>
					</div>
					<ul className="list-disc ml-8">
						<li>
							Developed a full-stack application with a C backend parser to
							convert SDF files into molecule data stored in an SQL database.
						</li>
						<li>
							Utilized a Python3-based web server to process data into SVG
							images, with a JavaScript, HTML, CSS, and SWIG frontend for
							seamless integration.
						</li>
						<li>
							Enabled data storage, editing, rotation, and viewing, hosting the
							server with jQuery to enhance functionality.
						</li>
					</ul>
					<a
						href="https://github.com/rawhialfar/Jquery-Webserver"
						className="mt-4 inline-block bg-gray-600 py-2 px-4 rounded-lg hover:bg-gray-500"
						target="_blank"
						rel="noopener noreferrer"
					>
						View on GitHub
					</a>
				</div>

				<div className="bg-gray-700 p-6 rounded-lg shadow-lg flex flex-col items-center ">
					<h3 className="text-xl font-semibold mb-1">Course Manager</h3>
					<h4 className="text-[14px] italic mb-3">
						PHP, JavaScript, HTML, CSS, Python, Figma
					</h4>
					<img
						src={CourseManager}
						alt="Course Manager"
						className="w-full h-[310px] object-fill rounded-lg mb-4"
					/>
					<img
						src={CourseTable}
						alt="Course Manager"
						className="w-full h-[150px] object-fill rounded-lg mb-4"
					/>
					<ul className="list-disc ml-8 ">
						<li>
							{" "}
							Collaborated with a team of six to design and program a web-based
							university portal, enabling students to search and manage courses
							from a database linked to WebAdvisor–Guelph's primary portal
							application.
						</li>
						<li>
							Utilized a server-side REST API to handle data operations,
							including adding, modifying, and deleting student information.
						</li>
						<li>
							Implemented vis.js to create a visual course path optimization
							tool.
						</li>
						<li>
							Worked in a weekly sprint format over nine sprints with rotating
							sprint leadership to ensure project progress.
						</li>
					</ul>
					<a
						href="https://github.com/rawhialfar/Course-Manager"
						className="mt-4 inline-block bg-gray-600 py-2 px-4 rounded-lg hover:bg-gray-500"
						target="_blank"
						rel="noopener noreferrer"
					>
						View on GitHub
					</a>
				</div>
				<div className="bg-gray-700 p-6 3xl:h-[49rem] rounded-lg shadow-lg flex flex-col items-center flex-grow-0">
					<h3 className="text-xl font-semibold mb-1">Weather App</h3>
					<h4 className="text-[14px] italic mb-3">
						JavaScript, HTML, CSS, React
					</h4>
					<img
						src={WeatherApp}
						alt="Weather App"
						className=" h-[30rem] object-fill rounded-lg mb-4"
					/>
					<ul className="list-disc ml-8 ">
						<li>
							Developed a cross-platform weather-checking app for mobile and
							desktop that prompts users for a city input in the format "City,
							Country Code."
						</li>
						<li>
							Integrated the Open Weather API for real-time data retrieval and
							efficient weather updates.
						</li>
					</ul>
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
