import React, { useContext, useRef, useEffect, useState } from "react";
import webserver from "../assets/img/Webserver.png";
import CourseManager from "../assets/img/CourseManager.png";
import CourseTable from "../assets/img/CourseTable.png";
import WeatherApp from "../assets/img/WeatherApp.png";
import AppstinenceHome from "../assets/img/Appstinence1.png"; 
import Dashboard1 from "../assets/img/dashboard1.png"; 
import Dashboard2 from "../assets/img/dashboard2.png"; 
import Dashboard3 from "../assets/img/dashboard3.png"; 
import Dashboard4 from "../assets/img/dashboard4.png"; 
import Dashboard5 from "../assets/img/dashboard5.png"; 
import Dashboard6 from "../assets/img/dashboard6.png"; 
import Dashboard7 from "../assets/img/dashboard7.png"; 
import Dashboard8 from "../assets/img/dashboard8.png"; 
import Dashboard9 from "../assets/img/dashboard9.png"; 
import Dashboard10 from "../assets/img/dashboard10.png"; 
import AppstinenceStats from "../assets/img/Appstinence4.png"; 
import PasswordManager from "../assets/img/PasswordManager.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { ThemeContext } from "./ThemeContext";

const Projects = () => {
	const [expandedCard, setExpandedCard] = useState(null);
	const { isDarkMode } = useContext(ThemeContext);
	const sectionRef = useRef(null);
	const cardRefs = [];
	const [cardVisibility, setCardVisibility] = useState([]);
	let numProjects = 5;
	for (let i = 0; i < numProjects; i++) {
		cardRefs[i] = useRef(null);
		setCardVisibility[i] = false;
	}

	const [currentImageIndexes, setCurrentImageIndexes] = useState({});

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
				{ threshold: 0.1 }
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

	const nextImage = (projectIndex, totalImages) => {
		setCurrentImageIndexes(prev => ({
			...prev,
			[projectIndex]: (prev[projectIndex] || 0) + 1 >= totalImages 
				? 0 
				: (prev[projectIndex] || 0) + 1
		}));
	};

	const prevImage = (projectIndex, totalImages) => {
		setCurrentImageIndexes(prev => ({
			...prev,
			[projectIndex]: (prev[projectIndex] || 0) - 1 < 0 
				? totalImages - 1 
				: (prev[projectIndex] || 0) - 1
		}));
	};

	const projectsData = [
		{
			title: "Genovation Voice Dashboard",
			tech: "TypeScript, React, Express, Stripe, Supabase, Retell AI",
			description: [
				"Built a full-stack voice agent dashboard with React/TypeScript frontend and Express backend, featuring real-time call monitoring, agent management, and billing systems.",
				"Implemented multi-service architecture connecting Stripe payments, Retell AI voice capabilities, and Supabase database with cohesive TypeScript APIs and React components.",
				"Designed modular UI components with theme switching, responsive layouts, and intuitive data visualization for agent performance and conversation analytics."
			],
			link: "https://github.com/rawhialfar/Voice-Dashboard",
			images: [Dashboard1, Dashboard10, Dashboard2, Dashboard3, Dashboard4, Dashboard5, Dashboard6, Dashboard7, Dashboard8, Dashboard9]
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
			images: [CourseManager, CourseTable]
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
			title: "Password Manager",
			tech: "Python, PySide6, Qt, SQL",
			description: [
				"Built a cross-platform password manager with a secure login system, collapsible category sections, password expiration tracking, and tooltip visibility toggles.",
				"Designed a responsive, user-friendly UI using PySide6 with dynamic theming for dark and light modes.",
				"Implemented an SQL-based storage system to manage passwords securely with master password authentication."
			],
			link: "https://github.com/rawhialfar/Passwordmanager",
			images: [PasswordManager]
		},
		{
			title: "Appstinence",
			tech: "Flutter, Kotlin, Dart, Android, Supabase, Native Integration",
			description: [
				"Developed a mobile application focused on reducing screen time by blocking distracting apps and tracking app usage patterns.",
				"Implemented a custom app-blocking system using native Kotlin code combined with Flutter overlays for real-time app blocking.",
				"Integrated Supabase for backend authentication and data storage, ensuring secure and efficient user management."
			],
			link: "https://github.com/rawhialfar/Appstinence",
			images: [AppstinenceHome, AppstinenceStats]
		}
	];

	return (
		<section
			id="projects"
			ref={sectionRef}
			className={`flex flex-col items-center py-20 xs:px-10 justify-center px-2 text-white ${
				isDarkMode ? "dark-theme" : "light-theme"
			}`}
		>
			<h2 className="xsxs:text-4xl text-3xl font-bold mb-8 text-center">
				Projects
			</h2>

			<div className="flex flex-col gap-6 max-w-[120rem] w-full justify-center items-center">
				{projectsData.map((project, index) => {
					const currentIndex = currentImageIndexes[index] || 0;
					const hasMultipleImages = project.images.length > 1;
					
					return (
						<div
							key={index}
							ref={cardRefs[index]}
							className={`p-6 md:w-5/6 rounded-lg shadow-xl flex md:flex-row flex-col justify-between transition-opacity duration-500 ${
								isDarkMode
									? "bg-gradient-opacity-60-dark"
									: "bg-gradient-opacity-60-light"
							} ${cardVisibility[index] ? "fade-in" : "fade-out"}`}
						>
							<div className="md:flex-col w-full md:w-1/2">
								<div className="flex-col w-full">
									<h3 className="xs:text-3xl text-2xl font-semibold mb-2 items-start">
										{project.title}
									</h3>
									<h4 className="xs:text-xl mb-4 italic">{project.tech}</h4>
								</div>
								<div className="w-full flex flex-col justify-center">
									<ul className="list-disc ml-8 xs:text-xl">
										{project.description.map((item, idx) => (
											<li key={idx} className="mb-2">{item}</li>
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
										} inline-block py-2 px-4 rounded-lg transition-colors duration-200`}
										target="_blank"
										rel="noopener noreferrer"
									>
										{project.title === "Weather App"
											? "View Live App"
											: "View on GitHub"}
									</a>
								</div>
							</div>
							
							{/* Image Slideshow Section */}
							<div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center space-y-4 relative pl-0 md:pl-8">
								<div className="relative w-full flex justify-center items-center min-h-[300px]">
									{/* Main Image Display */}
									<img
										src={project.images[currentIndex]}
										alt={`${project.title} - Screenshot ${currentIndex + 1}`}
										className="object-contain rounded-lg w-full max-w-full max-h-[400px] border border-gray-300 dark:border-gray-700"
									/>
									
									{/* Navigation Arrows (only show if multiple images) */}
									{hasMultipleImages && (
										<>
											<button
												onClick={() => prevImage(index, project.images.length)}
												className={`absolute left-2 top-1/2 transform -translate-y-1/2 p-3 rounded-full shadow-lg ${
													isDarkMode 
														? "bg-gray-800 hover:bg-gray-700 text-white" 
														: "bg-white hover:bg-gray-100 text-gray-800 border border-gray-300"
												} transition-colors duration-200 z-10`}
												aria-label="Previous image"
											>
												<FaChevronLeft className="text-lg" />
											</button>
											
											<button
												onClick={() => nextImage(index, project.images.length)}
												className={`absolute right-2 top-1/2 transform -translate-y-1/2 p-3 rounded-full shadow-lg ${
													isDarkMode 
														? "bg-gray-800 hover:bg-gray-700 text-white" 
														: "bg-white hover:bg-gray-100 text-gray-800 border border-gray-300"
												} transition-colors duration-200 z-10`}
												aria-label="Next image"
											>
												<FaChevronRight className="text-lg" />
											</button>
										</>
									)}
								</div>
								
								{/* Image Counter and Dots Indicator */}
								{hasMultipleImages && (
									<div className="flex flex-col items-center space-y-2 w-full">
										{/* Image Counter */}
										<div className="text-sm font-medium opacity-70">
											{currentIndex + 1} / {project.images.length}
										</div>
										
										{/* Image Dots Indicator - Scrollable if too many dots */}
										<div className="flex space-x-1 overflow-x-auto max-w-full py-1">
											{project.images.map((_, imgIndex) => (
												<button
													key={imgIndex}
													onClick={() => setCurrentImageIndexes(prev => ({
														...prev,
														[index]: imgIndex
													}))}
													className={`flex-shrink-0 w-2 h-2 rounded-full transition-all duration-200 ${
														imgIndex === currentIndex
															? isDarkMode ? "bg-white scale-125" : "bg-gray-800 scale-125"
															: isDarkMode ? "bg-gray-600 hover:bg-gray-500" : "bg-gray-300 hover:bg-gray-400"
													}`}
													aria-label={`View image ${imgIndex + 1}`}
												/>
											))}
										</div>
										
										{/* Mini Thumbnails - Optional, shows a row of small previews */}
										{project.images.length <= 6 && (
											<div className="flex space-x-1 mt-2">
												{project.images.map((image, imgIndex) => (
													<button
														key={imgIndex}
														onClick={() => setCurrentImageIndexes(prev => ({
															...prev,
															[index]: imgIndex
														}))}
														className={`flex-shrink-0 w-12 h-12 rounded border transition-all duration-200 overflow-hidden ${
															imgIndex === currentIndex
																? "border-blue-500 ring-2 ring-blue-300 dark:ring-blue-700"
																: "border-gray-300 dark:border-gray-600 opacity-70 hover:opacity-100"
														}`}
													>
														<img 
															src={image} 
															alt={`Thumbnail ${imgIndex + 1}`}
															className="w-full h-full object-cover"
														/>
													</button>
												))}
											</div>
										)}
									</div>
								)}
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Projects;