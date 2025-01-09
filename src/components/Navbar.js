// src/components/Navbar.js
import { useState, useEffect, useContext } from "react";
import Resume from "../assets/Rawhi Alfar- Resume.pdf";
import Font from "react-font";
import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "./ThemeContext";
const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const [windowScroll, setWindowScroll] = useState(false);
	const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		const handleScroll = () => {
			setWindowScroll(window.scrollY);
			if (window.scrollY > 0) {
				setIsScrolled(true); // User has scrolled down
			} else {
				setIsScrolled(false); // User is at the top of the page
			}
		};

		window.addEventListener("scroll", handleScroll);

		// Cleanup listener on component unmount
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	// Toggle between light and dark mode
	const toggleMode = () => {
		toggleDarkMode(!isDarkMode);
	};

	const bodyGradient = isDarkMode
		? "linear-gradient(to top right, rgba(30, 58, 138, 0.3), rgba(33, 67, 168, 0.3), rgba(59, 35, 211, 0.3), rgba(204, 0, 255, 0.3))"
		: "linear-gradient(to top right, rgba(30, 58, 138, 0.1), rgba(33, 67, 168, 0.1), rgba(59, 35, 211, 0.2), rgba(128, 0, 255, 0.2))";

	const bodyBackgroundColor = isDarkMode ? "black" : "white";

	const heroGradient = isDarkMode
		? "linear-gradient(to top right, rgba(30, 58, 138, 0.3), rgba(33, 67, 168, 0.3), rgba(59, 35, 211, 0.3), rgba(204, 0, 255, 0.3))"
		: "linear-gradient(to top right, rgba(30, 58, 138, 0.4), rgba(33, 67, 168, 0.4), rgba(59, 35, 211, 0.4), rgba(204, 0, 255, 0.4))";

	return (
		<nav
			className={`flex h-20 gradient-transition text-shadow-lg justify-between items-center py-5 px-10 fixed top-0 left-0 right-0 z-50 transition-all duration-10000 ease-in-out
    		${
					windowScroll > 800
						? isDarkMode
							? "bg-gradient-opacity-100-dark"
							: "bg-gradient-opacity-100-light"
						: ` ${
								isDarkMode
									? "bg-gradient-opacity-50-dark"
									: "bg-gradient-opacity-50-light"
						  }`
				} ${isDarkMode ? "dark-theme" : "light-theme"} `}
		>
			<div className="flex flex-row h-full w-full justify-between">
				<Font>
					<div
						id="logo"
						className="hover:text-gray-400 text-shadow xss:ml-0 ml-[-20px] xss:w-full top-[0px] w-[160%] max-h-20 mx-auto ws-nowrap hover:opacity-80  cursor-pointer  flex relative transition-transform duration-300 ease-in-out hover:-translate-y-1"
						style={{
							height: "200px",
							textAlign: "center",
							whiteSpace: "nowrap"
						}}
						onClick={() =>
							document
								.getElementById("hero")
								.scrollIntoView({ behavior: "smooth" })
						}
					>
						<Logo />
					</div>
				</Font>

				{/* Menu for larger screens */}
				<div className="relative hidden lg:flex space-x-8 top-[10px] ml-[-8rem] text-lg font-semibold">
					<a
						href="#about"
						onClick={(e) => {
							e.preventDefault(); // Prevent default jump behavior
							const element = document.getElementById("about");
							const yOffset = -50; // Set your desired offset (e.g., 100px above)
							const y =
								element.getBoundingClientRect().top +
								window.pageYOffset +
								yOffset;
							window.scrollTo({ top: y, behavior: "smooth" });
						}}
						className="hover:text-gray-400  transition-transform duration-300 ease-in-out hover:-translate-y-1"
					>
						About Me
					</a>
					<a
						href="#skills"
						onClick={(e) => {
							e.preventDefault();
							const element = document.getElementById("skills");
							const yOffset = -60;
							const y =
								element.getBoundingClientRect().top +
								window.pageYOffset +
								yOffset;
							window.scrollTo({ top: y, behavior: "smooth" });
						}}
						className="hover:text-gray-400  transition-transform duration-300 ease-in-out hover:-translate-y-1"
					>
						Skills
					</a>
					<a
						href="#experience"
						onClick={(e) => {
							e.preventDefault();
							const element = document.getElementById("experience");
							const yOffset = -50;
							const y =
								element.getBoundingClientRect().top +
								window.pageYOffset +
								yOffset;
							window.scrollTo({ top: y, behavior: "smooth" });
						}}
						className="hover:text-gray-400 transition-transform duration-300 ease-in-out hover:-translate-y-1"
					>
						Experience
					</a>
					<a
						href="#projects"
						onClick={(e) => {
							e.preventDefault();
							const element = document.getElementById("projects");
							const yOffset = -50;
							const y =
								element.getBoundingClientRect().top +
								window.pageYOffset +
								yOffset;
							window.scrollTo({ top: y, behavior: "smooth" });
						}}
						className="hover:text-gray-400 transition-transform duration-300 ease-in-out hover:-translate-y-1"
					>
						Projects
					</a>
				</div>

				{/* Icons and Resume link for larger screens */}
				<div className="relative z-50 hidden lg:flex items-center space-x-4">
					<div
						style={{
							color: isDarkMode ? "white" : "black"
						}}
					>
						<button
							onClick={toggleMode}
							className={`px-[1px] py-[1px] w-[30px] h-[30px] flex items-center justify-center rounded-2xl text-white ${
								isDarkMode ? "bg-gray-100" : "bg-gray-600"
							} hover:bg-opacity-80`}
						>
							{/* Icon that switches between sun and moon */}
							<FontAwesomeIcon
								icon={isDarkMode ? faSun : faMoon}
								size="xl"
								style={{
									color: isDarkMode ? "black" : "white",
									marginRight: isDarkMode ? "0px" : "2px"
								}} // Sun is black, Moon is white
							/>
						</button>

						<style>{`
						body {
						background-image: ${bodyGradient};
						background-color: ${bodyBackgroundColor};
						}
					`}</style>
					</div>
					<a
						href="https://www.linkedin.com/in/rawhi-alfar"
						className="hover:text-gray-400 text-xl transition-transform duration-300 ease-in-out hover:-translate-y-1"
					>
						<i className="bx bxl-linkedin"></i>
					</a>
					<a
						href="https://github.com/rawhialfar"
						className="hover:text-gray-400 text-xl transition-transform duration-300 ease-in-out hover:-translate-y-1"
					>
						<i className="bx bxl-github"></i>
					</a>
					<a
						href="mailto:alfarrawhi@gmail.com"
						className="hover:text-gray-400 text-xl transition-transform duration-300 ease-in-out hover:-translate-y-1"
					>
						<i className="bx bx-envelope"></i>
					</a>
					<a
						href={Resume}
						target="_blank"
						rel="noopener noreferrer"
						className={` py-2 px-4 rounded-lg shadow-lg font-semibold hover:text-lg transition-all duration-300 ease-in-out ${
							isDarkMode
								? "text-white bg-gray-700 hover:bg-gray-600"
								: "text-black bg-gray-100 hover:bg-slate-300"
						}`}
					>
						Resume
					</a>
				</div>

				{/* Hamburger Icon for mobile */}
				<div className="lg:hidden right-0 fixed  p-2 mr-[10px]">
					<button
						onClick={toggleMenu}
						className={`focus:outline-none ${
							isDarkMode ? "text-white" : "text-[#333333] hover:text-[#f0f0f0]"
						}`}
					>
						<i
							className={`text-3xl ${
								isOpen
									? isDarkMode
										? "bx bx-x text-[#333333] hover:text-[#f0f0f0]"
										: "bx bx-x text-white"
									: ` ${
											isDarkMode
												? "bx bx-menu text-[#333333] hover:text-[#f0f0f0]"
												: "bx bx-menu text-white"
									  }`
							} ${isDarkMode ? "dark-theme" : "light-theme"} `}
						></i>
					</button>
				</div>
			</div>
			{/* Mobile Menu */}
			<div
				className={`${
					isOpen ? "block" : "hidden"
				} lg:hidden fixed top-[80px] left-0 w-full  ${
					windowScroll > 800
						? isDarkMode
							? "bg-gradient-opacity-100-dark"
							: "bg-gradient-opacity-100-light"
						: ` ${
								isDarkMode
									? "bg-gradient-opacity-50-dark"
									: "bg-gradient-opacity-50-light"
						  }`
				} ${
					isDarkMode ? "dark-theme" : "light-theme"
				}  py-5 space-y-4 flex flex-col items-center z-50`}
			>
				<a
					href="#about"
					onClick={(e) => {
						e.preventDefault();
						const element = document.getElementById("about");
						const yOffset = -50;
						const y =
							element.getBoundingClientRect().top +
							window.pageYOffset +
							yOffset;
						window.scrollTo({ top: y, behavior: "smooth" });
					}}
					className="text-xl  justify-center transition-transform duration-300 ease-in-out hover:-translate-y-1"
				>
					About Me
				</a>
				<a
					href="#skills"
					onClick={(e) => {
						e.preventDefault();
						const element = document.getElementById("skills");
						const yOffset = -50;
						const y =
							element.getBoundingClientRect().top +
							window.pageYOffset +
							yOffset;
						window.scrollTo({ top: y, behavior: "smooth" });
					}}
					className="text-xl justify-center transition-transform duration-300 ease-in-out hover:-translate-y-1"
				>
					Skills
				</a>
				<a
					href="#experience"
					onClick={(e) => {
						e.preventDefault();
						const element = document.getElementById("experience");
						const yOffset = -50;
						const y =
							element.getBoundingClientRect().top +
							window.pageYOffset +
							yOffset;
						window.scrollTo({ top: y, behavior: "smooth" });
					}}
					className="text-xl "
				>
					Experience
				</a>
				<a
					href="#projects"
					onClick={(e) => {
						e.preventDefault();
						const element = document.getElementById("projects");
						const yOffset = -50;
						const y =
							element.getBoundingClientRect().top +
							window.pageYOffset +
							yOffset;
						window.scrollTo({ top: y, behavior: "smooth" });
					}}
					className="text-xl "
				>
					Projects
				</a>
				<div className="flex items-center space-x-4">
					<a href="https://www.linkedin.com/in/rawhi-alfar" className="text-xl">
						<i className="bx bxl-linkedin"></i>
					</a>
					<a href="https://github.com/rawhialfar" className="text-xl">
						<i className="bx bxl-github"></i>
					</a>
					<a href="mailto:alfarrawhi@gmail.com" className="text-xl">
						<i className="bx bx-envelope"></i>
					</a>
					<div
						style={{
							color: isDarkMode ? "white" : "black"
						}}
					>
						<button
							onClick={toggleMode}
							className={`px-1 py-1 w-[33px] h-[33px] flex items-center justify-center rounded-2xl text-white ${
								isDarkMode ? "bg-gray-100" : "bg-gray-600"
							} hover:bg-opacity-80`}
						>
							{/* Icon that switches between sun and moon */}
							<FontAwesomeIcon
								icon={isDarkMode ? faSun : faMoon}
								size="xl"
								style={{
									color: isDarkMode ? "black" : "white",
									marginRight: isDarkMode ? "0.5px" : "2px"
								}} // Sun is black, Moon is white
							/>
						</button>

						<style>{`
							body {
							background-image: ${bodyGradient};
							background-color: ${bodyBackgroundColor};
							}
						`}</style>
					</div>
				</div>
				<a
					href={Resume}
					target="_blank"
					rel="noopener noreferrer"
					className={` py-2 px-4 rounded-lg font-semibold shadow-lg ${
						isDarkMode ? "bg-gray-600" : "bg-gray-100"
					}`}
				>
					Resume
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
