import React, { useContext, useRef, useEffect, useState } from "react";
import webserver from "../assets/img/Webserver.png";
import CourseManager from "../assets/img/CourseManager.png";
import CourseTable from "../assets/img/CourseTable.png";
import WeatherApp from "../assets/img/WeatherApp.png";
import StockPortfolio from "../assets/img/StockPortfolio.png";
import { ThemeContext } from "./ThemeContext";

const Projects = () => {
	const [expandedCard, setExpandedCard] = useState(null); // Tracks the expanded card
	const { isDarkMode } = useContext(ThemeContext);
	const sectionRef = useRef(null);
	const cardRefs = [useRef(null), useRef(null), useRef(null), useRef(null)]; // Refs for each card
	const [cardVisibility, setCardVisibility] = useState([
		false,
		false,
		false,
		false
	]); // Track visibility of each card

	useEffect(() => {
		const observers = cardRefs.map((ref, index) => {
			return new IntersectionObserver(
				([entry]) => {
					setCardVisibility((prevVisibility) => {
						const newVisibility = [...prevVisibility];
						newVisibility[index] = entry.isIntersecting;
						return newVisibility;
					});
				},
				{ threshold: 0.1 } // Adjust threshold for visibility timing
			);
		});

		cardRefs.forEach((ref, index) => {
			if (ref.current) {
				observers[index].observe(ref.current);
			}
		});

		return () => {
			observers.forEach((observer, index) => {
				if (cardRefs[index].current) {
					observer.unobserve(cardRefs[index].current);
				}
			});
		};
	}, []);

	// Toggle card expansion
	const toggleCard = (cardIndex) => {
		setExpandedCard((prev) => (prev === cardIndex ? null : cardIndex));
	};

	return (
		<section
			id="projects"
			ref={sectionRef}
			className={`flex flex-col items-center py-20 xs:px-10 justify-center px-2 text-white ${
				isDarkMode ? "dark-theme" : "light-theme"
			}`}
		>
			<h2 className="xsxs:text-4xl text-[150%] font-bold mb-8 text-center">
				Projects
			</h2>

			<div className="flex flex-col gap-6 max-w-[120rem] w-full justify-center items-center">
				{/* Project cards */}
				{[
					{
						title: "Molecule Viewer",
						tech: "C, Python, JS, HTML, CSS, AJAX, JQuery, SQL",
						description: [
							"Developed a full-stack application with a C backend parser to convert SDF files into organized molecule data stored in an SQL database.",
							"Utilized a Python3-based web server to process data into SVG images, combined with a JavaScript, HTML, CSS, and SWIG frontend for seamless integration.",
							"Enabled data storage, editing, rotation, and viewing, hosting the server with jQuery to enhance functionality."
						],
						link: "https://github.com/rawhialfar/Jquery-Webserver",
						images: [webserver]
					},
					{
						title: "Course Manager",
						tech: "PHP, JavaScript, HTML, CSS, Python, Figma",
						description: [
							"Collaborated with a team of six to design and program a web-based university portal.",
							"Utilized a server-side REST API to handle data operations, including adding, modifying, and deleting student information.",
							"Implemented vis.js to create a visual course path optimization tool."
						],
						link: "https://github.com/rawhialfar/Course-Manager",
						images: [CourseManager, CourseTable] // Multiple images
					},
					{
						title: "Weather App",
						tech: "JavaScript, HTML, CSS, React",
						description: [
							"Developed a cross-platform weather-checking app for mobile and desktop that prompts users for a city input in the format 'City, Country Code.'",
							"Integrated the Open Weather API for real-time data retrieval and efficient weather updates."
						],
						link: "https://weatherapp-pr.netlify.app/",
						images: [WeatherApp]
					},
					{
						title: "Stock Portfolio",
						tech: "Java",
						description: [
							"Developed a stock portfolio software that allows a user to buy, sell, update, and gain stocks/mutual funds.",
							"Built using a Java swing application that utilized a GUI environment to make the user experience seamless and easy.",
							"Maintained with continuous development strategies and refined code."
						],
						link: "https://github.com/rawhialfar/ePortfolio",
						images: [StockPortfolio]
					}
				].map((project, index) => (
					<div
						key={index}
						ref={cardRefs[index]}
						className={`p-6 md:w-5/6 rounded-lg shadow-xl flex md:flex-row flex-col justify-between transition-opacity duration-500 ${
							isDarkMode
								? "bg-gradient-opacity-60-dark"
								: "bg-gradient-opacity-60-light"
						} ${cardVisibility[index] ? "fade-in" : "fade-out"}`}
					>
						{/* Left Section - Text */}
						<div className="md:flex-col w-full">
							<div className="flex-col w-full">
								<h3 className="xs:text-3xl text-2xl font-semibold mb-2 items-start">
									{project.title}
								</h3>
								<h4 className="xs:text-xl mb-4 italic">{project.tech}</h4>
							</div>
							<div className="w-full flex flex-col justify-center">
								<ul className="list-disc ml-8 xs:text-xl">
									{project.description.map((item, idx) => (
										<li key={idx}>{item}</li>
									))}
								</ul>
							</div>
							<div className="flex gap-4 pt-10 pb-10">
								<a
									href={project.link}
									className={`${
										isDarkMode
											? "text-white bg-gray-700 hover:bg-gray-600"
											: "text-black bg-gray-100 hover:bg-slate-200"
									} inline-block py-2 px-4 rounded-lg`}
									target="_blank"
									rel="noopener noreferrer"
								>
									View on GitHub
								</a>
							</div>
						</div>
						{/* Bottom Section - Images */}
						<div className="w-full h-full flex flex-col justify-end items-end space-x-4">
							{project.images.map((image, imgIndex) => (
								<img
									key={imgIndex}
									src={image}
									alt={`${project.title} ${imgIndex + 1}`}
									className={`object-cover rounded-lg self-end ${
										project.title === "Weather App"
											? "md:w-[50%]" // Custom width for Weather App image
											: "md:w-[70%]" // Default width for other project images
									} h-auto`}
								/>
							))}
						</div>
						{/* <div className="w-full   justify-end items-end ">
							{project.images.map((image, imgIndex) => (
								<img
									key={imgIndex}
									src={image}
									alt={`${project.title} ${imgIndex + 1}`}
									className="object-cover flex flex-col rounded-lg md:w-[70%] self-end h-auto"
								/>
							))}
						</div> */}
					</div>
				))}
			</div>
		</section>
	);
};

export default Projects;
