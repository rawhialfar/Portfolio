import React, { useState } from "react";
import webserver from "../assets/img/Webserver.png";
import CourseManager from "../assets/img/CourseManager.png";
import CourseTable from "../assets/img/CourseTable.png";
import WeatherApp from "../assets/img/WeatherApp.png";
import StockPortfolio from "../assets/img/StockPortfolio.png";
import { ThemeContext } from "./ThemeContext";
import { useContext } from "react";
const Projects = () => {
	const [expandedCard, setExpandedCard] = useState(null); // Tracks the expanded card
	const { isDarkMode } = useContext(ThemeContext);

	// Toggle card expansion
	const toggleCard = (cardIndex) => {
		setExpandedCard((prev) => (prev === cardIndex ? null : cardIndex));
	};

	return (
		<section
			id="projects"
			className={`flex flex-col items-center py-20 xs:px-10 justify-center px-2  text-white ${
				isDarkMode ? "dark-theme" : "light-theme"
			}`}
		>
			<h2 className="xs:text-4xl text-[200%] font-bold mb-8 text-center">
				Projects
			</h2>

			<div
				className={`flex flex-col gap-6 max-w-[120rem] w-full justify-center items-center `}
			>
				{/* Molecule Viewer */}
				<div
					className={` p-6 md:w-5/6 rounded-lg shadow-xl flex md:flex-row flex-col justify-between ${
						isDarkMode
							? "bg-gradient-opacity-60-dark"
							: "bg-gradient-opacity-60-light"
					} `}
				>
					{/* Left Section - Text */}
					<div className="md:flex-col w-full md:w-1/2">
						<div className="flex-col w-full md:w-[60%]">
							<h3 className="xs:text-3xl text-2xl font-semibold mb-2 items-start">
								Molecule Viewer
							</h3>
							<h4 className="xs:text-xl mb-4 italic text-gray-300">
								C, Python, JS, HTML, CSS, AJAX, JQuery, and SQL
							</h4>
						</div>
						<div className="w-full flex flex-col justify-center">
							<ul className="list-disc ml-8 xs:xs:text-xl">
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
								className={`${
									isDarkMode
										? "text-white bg-gray-700 hover:bg-gray-600"
										: "text-black bg-gray-100 hover:bg-slate-200"
								} inline-block  py-2 px-4 rounded-lg `}
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
				<div
					className={`${
						isDarkMode
							? "bg-gradient-opacity-60-dark"
							: "bg-gradient-opacity-60-light"
					} p-6 md:w-5/6 rounded-lg shadow-xl flex md:flex-row flex-col justify-between`}
				>
					{/* Left Section - Text */}
					<div className="md:flex-col w-full md:w-1/2">
						<div className="flex-col w-full md:w-[60%]">
							<h3 className="xs:text-3xl text-2xl font-semibold mb-2 items-start">
								Course Manager
							</h3>
							<h4 className="xs:text-xl mb-4 italic text-gray-300">
								PHP, JavaScript, HTML, CSS, Python, Figma
							</h4>
						</div>
						<div className="w-full flex flex-col justify-center">
							<ul className="list-disc ml-8 xs:text-xl">
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
								className={`${
									isDarkMode
										? "text-white bg-gray-700 hover:bg-gray-600"
										: "text-black bg-gray-100 hover:bg-slate-200"
								} inline-block  py-2 px-4 rounded-lg `}
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
								className="object-cover rounded-lg md:w-[70%] w-full mb-4 self-end"
							/>
							<img
								src={CourseTable}
								alt="Course Table"
								className="object-cover rounded-lg md:w-[70%] w-full mb-4 self-end"
							/>
						</div>
					</div>
				</div>

				{/* Weather App */}
				<div
					className={`${
						isDarkMode
							? "bg-gradient-opacity-60-dark"
							: "bg-gradient-opacity-60-light"
					} p-6 md:w-5/6 rounded-lg shadow-xl flex md:flex-row flex-col justify-between`}
				>
					{/* Left Section - Text */}
					<div className="md:flex-col w-full md:w-1/2">
						<div className="flex-col w-full md:w-[60%]">
							<h3 className="xs:text-3xl text-2xl font-semibold mb-2 items-start">
								Weather App
							</h3>
							<h4 className="xs:text-xl mb-4 italic text-gray-300">
								JavaScript, HTML, CSS, React
							</h4>
						</div>
						<div className="w-full flex flex-col justify-center">
							<ul className="list-disc ml-8 xs:text-xl">
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
								className={`${
									isDarkMode
										? "text-white bg-gray-700 hover:bg-gray-600"
										: "text-black bg-gray-100 hover:bg-slate-200"
								} inline-block  py-2 px-4 rounded-lg `}
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
				<div
					className={`${
						isDarkMode
							? "bg-gradient-opacity-60-dark"
							: "bg-gradient-opacity-60-light"
					} p-6 md:w-5/6 rounded-lg shadow-xl flex md:flex-row flex-col justify-between`}
				>
					{/* Left Section - Text */}
					<div className="md:flex-col w-full md:w-1/2">
						<div className="flex-col w-full md:w-[60%]">
							<h3 className="xs:text-3xl text-2xl font-semibold mb-2 items-start">
								Stock Portofolio
							</h3>
							<h4 className="xs:text-xl mb-4 italic text-gray-300">Java</h4>
						</div>
						<div className="w-full flex flex-col justify-center">
							<ul className="list-disc ml-8 xs:text-xl">
								<li>
									Developed a stock portofolio software that allows a user to
									buy, sell, update and gain stocks/mutual funds.
								</li>
								<li>
									Built using a Java swing application that utilized a GUI
									environment to make the user experience seamless and easy.
								</li>
								<li>
									Maintaned with continuos development strategies and refined
									code.
								</li>
							</ul>
						</div>
						<div className="flex gap-4 pt-10 pb-10">
							<a
								href="https://github.com/rawhialfar/ePortfolio"
								className={`${
									isDarkMode
										? "text-white bg-gray-700 hover:bg-gray-600"
										: "text-black bg-gray-100 hover:bg-slate-200"
								} inline-block  py-2 px-4 rounded-lg `}
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
