// src/components/Navbar.js
import { useState, useEffect } from "react";
import Resume from "../assets/Rawhi Al-far - Resume.pdf"; // Adjust path to your resume
import ParticlesComponent from "./ParticlesComponent";
import Font, { Text } from "react-font";
import VaraText from "./VaraText";
import Logo from "./Logo";
const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		const handleScroll = () => {
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
	return (
		<nav
			className={`flex h-20 justify-between items-center py-5 px-10 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
				isScrolled ? "bg-gray-900 bg-opacity-40" : "bg-transparent"
			}`}
		>
			{/* <Font family="Mr De Haviland" onAllLoad={() => console.log("all loaded")}> */}
			<Font family="Whisper" onAllLoad={() => console.log("all loaded")}>
				{/* <Font family="Alex Brush" onAllLoad={() => console.log("all loaded")}> */}

				<div
					id="logo"
					className="hover:text-gray-400  w-full max-h-20 max-w-[1200px] mx-auto ws-nowrap hover:opacity-80 top-[20px] text-nowrap cursor-pointer  flex relative transition-transform duration-300 ease-in-out hover:-translate-y-1"
					style={{ height: "200px", textAlign: "center", whiteSpace: "nowrap" }}
					onClick={() =>
						document
							.getElementById("hero")
							.scrollIntoView({ behavior: "smooth" })
					}
				>
					<Logo text="Rawhi Alfar" />
				</div>
			</Font>

			{/* Menu for larger screens */}
			<div className="relative hidden md:flex space-x-8 ml-[-8rem]">
				<a
					href="#about"
					onClick={(e) => {
						e.preventDefault(); // Prevent default jump behavior
						const element = document.getElementById("about");
						const yOffset = -100; // Set your desired offset (e.g., 100px above)
						const y =
							element.getBoundingClientRect().top +
							window.pageYOffset +
							yOffset;
						window.scrollTo({ top: y, behavior: "smooth" });
					}}
					className="hover:text-gray-400 transition-transform duration-300 ease-in-out hover:-translate-y-1"
				>
					About Me
				</a>

				<a
					href="#experience"
					onClick={(e) => {
						e.preventDefault();
						const element = document.getElementById("experience");
						const yOffset = -100;
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
						const yOffset = -100;
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
			<div className="relative z-50 hidden md:flex items-center space-x-4">
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
					className="bg-gray-700 py-2 px-4 rounded-lg hover:bg-gray-600 hover:text-lg transition-all duration-300 ease-in-out"
				>
					Resume
				</a>
			</div>

			{/* Hamburger Icon for mobile */}
			<div className="md:hidden right-0 fixed p-2">
				<button onClick={toggleMenu} className="text-white focus:outline-none">
					<i
						className={isOpen ? "bx bx-x text-3xl" : "bx bx-menu text-3xl"}
					></i>
				</button>
			</div>

			{/* Mobile Menu */}
			<div
				className={`${
					isOpen ? "block" : "hidden"
				} md:hidden fixed top-16 left-0 w-full bg-gray-900 py-5 space-y-4 flex flex-col items-center z-50`}
			>
				<a
					onClick={(e) => {
						e.preventDefault();
						const element = document.getElementById("hero");
						const yOffset = -100;
						const y =
							element.getBoundingClientRect().top +
							window.pageYOffset +
							yOffset;
						window.scrollTo({ top: y, behavior: "smooth" });
					}}
					className="text-xl hover:text-gray-400"
				>
					Hero
				</a>
				<a
					href="#about"
					onClick={(e) => {
						e.preventDefault();
						const element = document.getElementById("about");
						const yOffset = -100;
						const y =
							element.getBoundingClientRect().top +
							window.pageYOffset +
							yOffset;
						window.scrollTo({ top: y, behavior: "smooth" });
					}}
					className="text-xl hover:text-gray-400"
				>
					About Me
				</a>
				<a
					href="#experience"
					onClick={(e) => {
						e.preventDefault();
						const element = document.getElementById("experience");
						const yOffset = -100;
						const y =
							element.getBoundingClientRect().top +
							window.pageYOffset +
							yOffset;
						window.scrollTo({ top: y, behavior: "smooth" });
					}}
					className="text-xl hover:text-gray-400"
				>
					Experience
				</a>
				<a
					href="#projects"
					onClick={(e) => {
						e.preventDefault();
						const element = document.getElementById("projects");
						const yOffset = -100;
						const y =
							element.getBoundingClientRect().top +
							window.pageYOffset +
							yOffset;
						window.scrollTo({ top: y, behavior: "smooth" });
					}}
					className="text-xl hover:text-gray-400"
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
				</div>
				<a
					href={Resume}
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

export default Navbar;
