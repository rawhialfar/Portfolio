import React, { useState } from "react";
import webserver from "../assets/img/Webserver.png";
import CourseManager from "../assets/img/CourseManager.png";
import CourseTable from "../assets/img/CourseTable.png";
import WeatherApp from "../assets/img/WeatherApp.png";
import StockPortfolio from "../assets/img/StockPortfolio.png";

const Projects = () => {
	const [expandedCard, setExpandedCard] = useState(null); // Tracks the expanded card

	// Toggle card expansion
	const toggleCard = (cardIndex) => {
		setExpandedCard((prev) => (prev === cardIndex ? null : cardIndex));
	};

	return (
		<section
			id="projects"
			className="flex flex-col items-center py-20 px-10 justify-center  bg-gray-800 text-white"
		>
			<h2 className="text-[50px] font-bold mb-8 text-center">Projects</h2>

			<div className="flex flex-col gap-6 max-w-[120rem] w-full justify-center items-center">
				{/* Molecule Viewer */}
				<div className="bg-gray-700 p-6 md:w-5/6 rounded-lg shadow-lg flex md:flex-row flex-col justify-between">
					{/* Left Section - Text */}
					<div className="md:flex-col w-full md:w-1/2">
						<div className="flex-col w-full md:w-[60%]">
							<h3 className="text-3xl font-semibold mb-2 items-start">
								Molecule Viewer
							</h3>
							<h4 className="text-xl mb-4 italic text-gray-300">
								C, Python, JS, HTML, CSS, AJAX, JQuery, and SQL
							</h4>
						</div>
						<div className="w-full flex flex-col justify-center">
							<ul className="list-disc ml-8 text-xl">
								<li>
									Developed a full-stack application with a C backend parser to
									convert SDF files into organized molecule data stored in an
									SQL database.
								</li>
								<li>
									Utilized a Python3-based web server to process data into SVG
									images, combined with a JavaScript, HTML, CSS, and SWIG
									frontend for seamless integration.
								</li>
								<li>
									Enabled data storage, editing, rotation, and viewing, hosting
									the server with jQuery to enhance functionality.
								</li>
							</ul>
						</div>
						<div className="flex gap-4 pt-10 pb-10">
							<a
								href="https://github.com/rawhialfar/Jquery-Webserver"
								className="inline-block bg-gray-600 py-2 px-4 rounded-lg hover:bg-gray-500"
								target="_blank"
								rel="noopener noreferrer"
							>
								View on GitHub
							</a>
						</div>
					</div>
					{/* Right Section - Image */}
					<div className="w-full md:w-1/2 flex justify-end items-end">
						<img
							src={webserver}
							alt="Molecule Viewer"
							className="object-cover rounded-lg md:w-[70%] h-auto self-center"
						/>
					</div>
				</div>

				{/* Course Manager */}
				<div className="bg-gray-700 p-6 md:w-5/6 rounded-lg shadow-lg flex md:flex-row flex-col justify-between">
					{/* Left Section - Text */}
					<div className="md:flex-col w-full md:w-1/2">
						<div className="flex-col w-full md:w-[60%]">
							<h3 className="text-3xl font-semibold mb-2 items-start">
								Course Manager
							</h3>
							<h4 className="text-xl mb-4 italic text-gray-300">
								PHP, JavaScript, HTML, CSS, Python, Figma
							</h4>
						</div>
						<div className="w-full flex flex-col justify-center">
							<ul className="list-disc ml-8 text-xl">
								<li>
									Collaborated with a team of six to design and program a
									web-based university portal.
								</li>
								<li>
									Utilized a server-side REST API to handle data operations,
									including adding, modifying, and deleting student information.
								</li>
								<li>
									Implemented vis.js to create a visual course path optimization
									tool.
								</li>
							</ul>
						</div>
						<div className="flex gap-4 pt-10 pb-10">
							<a
								href="https://github.com/rawhialfar/Course-Manager"
								className="inline-block bg-gray-600 py-2 px-4 rounded-lg hover:bg-gray-500"
								target="_blank"
								rel="noopener noreferrer"
							>
								View on GitHub
							</a>
						</div>
					</div>
					{/* Right Section - Image */}
					<div className="w-full md:w-1/2 flex justify-end items-end">
						<div className="flex flex-col">
							<img
								src={CourseManager}
								alt="Course Manager"
								className="object-cover rounded-lg w-[70%] mb-4 self-end"
							/>
							<img
								src={CourseTable}
								alt="Course Table"
								className="object-cover rounded-lg w-[70%] mb-4 self-end"
							/>
						</div>
					</div>
				</div>

				{/* Weather App */}
				<div className="bg-gray-700 p-6 md:w-5/6 rounded-lg shadow-lg flex md:flex-row flex-col justify-between">
					{/* Left Section - Text */}
					<div className="md:flex-col w-full md:w-1/2">
						<div className="flex-col w-full md:w-[60%]">
							<h3 className="text-3xl font-semibold mb-2 items-start">
								Weather App
							</h3>
							<h4 className="text-xl mb-4 italic text-gray-300">
								JavaScript, HTML, CSS, React
							</h4>
						</div>
						<div className="w-full flex flex-col justify-center">
							<ul className="list-disc ml-8 text-xl">
								<li>
									Developed a cross-platform weather-checking app for mobile and
									desktop that prompts users for a city input in the format
									"City, Country Code."
								</li>
								<li>
									Integrated the Open Weather API for real-time data retrieval
									and efficient weather updates.
								</li>
							</ul>
						</div>
						<div className="flex gap-4 pt-10 pb-10">
							<a
								href="https://weatherapp-pr.netlify.app/"
								className="inline-block bg-gray-600 py-2 px-4 rounded-lg hover:bg-gray-500"
								target="_blank"
								rel="noopener noreferrer"
							>
								View Live App
							</a>
						</div>
					</div>
					{/* Right Section - Image */}
					<div className="w-full md:w-1/2 flex justify-end items-end">
						<img
							src={WeatherApp}
							alt="Weather App"
							className="object-cover rounded-lg md:w-[40%] h-auto self-center"
						/>
					</div>
				</div>
				{/* {Stock Portofolio} */}
				<div className="bg-gray-700 p-6 md:w-5/6 rounded-lg shadow-lg flex md:flex-row flex-col justify-between">
					{/* Left Section - Text */}
					<div className="md:flex-col w-full md:w-1/2">
						<div className="flex-col w-full md:w-[60%]">
							<h3 className="text-3xl font-semibold mb-2 items-start">
								Stock Portofolio
							</h3>
							<h4 className="text-xl mb-4 italic text-gray-300">Java</h4>
						</div>
						<div className="w-full flex flex-col justify-center">
							<ul className="list-disc ml-8 text-xl">
								<li>
									Developed a stock portofolio software that allows a user to
									buy, sell, update and gain stocks/mutual funds.
								</li>
								<li>
									Built using a Java swing application that utilized a GUI
									environment to make the user experience seamless and easy.
								</li>
								<li>
									Maintaned using Continuos development strategies and refined
									code.
								</li>
							</ul>
						</div>
						<div className="flex gap-4 pt-10 pb-10">
							<a
								href="https://github.com/rawhialfar/ePortfolio"
								className="inline-block bg-gray-600 py-2 px-4 rounded-lg hover:bg-gray-500"
								target="_blank"
								rel="noopener noreferrer"
							>
								View On Github
							</a>
						</div>
					</div>
					{/* Right Section - Image */}
					<div className="w-full md:w-1/2 flex justify-end items-end">
						<img
							src={StockPortfolio}
							alt="Stock Portfolio"
							className="object-cover rounded-lg md:w-[70%] h-auto self-center"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
