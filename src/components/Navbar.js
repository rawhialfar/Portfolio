// src/components/Navbar.js
import { useState } from "react";
import Resume from "../assets/Rawhi Al-far - Resume.pdf"; // Adjust path to your resume

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="flex h-20 justify-between items-center py-5 px-10 fixed top-0 left-0 right-0 z-20">
			<div className="text-3xl font-bold space-x-8 flex">
				<a
					href="#hero"
					className="hover:text-gray-400 relative transition-transform duration-300 ease-in-out hover:-translate-y-1"
				>
					Rawhi Alfar
				</a>
			</div>

			{/* Menu for larger screens */}
			<div className="relative hidden md:flex space-x-8 ">
				<a
					href="#about"
					className="hover:text-gray-400 transition-transform duration-300 ease-in-out hover:-translate-y-1"
				>
					About Me
				</a>
				<a
					href="#experience"
					className="hover:text-gray-400 transition-transform duration-300 ease-in-out hover:-translate-y-2"
				>
					Experience
				</a>
				<a
					href="#projects"
					className="hover:text-gray-400 transition-transform duration-300 ease-in-out hover:-translate-y-2"
				>
					Projects
				</a>
			</div>

			{/* Icons and Resume link for larger screens */}
			<div className="relative z-50 hidden md:flex items-center space-x-4">
				<a
					href="https://www.linkedin.com/in/rawhi-alfar"
					className="text-xl transition-transform duration-300 ease-in-out hover:-translate-y-1"
				>
					<i className="bx bxl-linkedin"></i>
				</a>
				<a
					href="https://github.com/rawhialfar"
					className="text-xl transition-transform duration-300 ease-in-out hover:-translate-y-1"
				>
					<i className="bx bxl-github"></i>
				</a>
				<a
					href="mailto:alfarrawhi@gmail.com"
					className="text-xl transition-transform duration-300 ease-in-out hover:-translate-y-1"
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
			<div className="md:hidden right-0 fixed bg-gray-900 p-2">
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
				<a href="#hero" className="text-xl hover:text-gray-400">
					Hero
				</a>
				<a href="#about" className="text-xl hover:text-gray-400">
					About Me
				</a>
				<a href="#experience" className="text-xl hover:text-gray-400">
					Experience
				</a>
				<a href="#projects" className="text-xl hover:text-gray-400">
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
