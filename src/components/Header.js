import { useState } from "react";
import Resume from "../assets/Rawhi Al-far - Resume.pdf"; // Adjust path to your resume

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="flex justify-between items-center py-5 px-10 bg-gray-900">
			{/* Logo */}
			<div className="text-3xl font-bold">Rawhi Alfar</div>

			{/* Menu for larger screens */}
			<div className="hidden md:flex space-x-8">
				<a href="#about" className="hover:text-gray-400">
					About Me
				</a>
				<a href="#experience" className="hover:text-gray-400">
					Experience
				</a>
				<a href="#projects" className="hover:text-gray-400">
					Projects
				</a>
			</div>

			{/* Icons and Resume link for larger screens */}
			<div className="hidden md:flex items-center space-x-4">
				<a href="https://www.linkedin.com/in/rawhi-alfar" className="text-xl">
					<i className="bx bxl-linkedin"></i>
				</a>
				<a href="https://github.com/rawhialfar" className="text-xl">
					<i className="bx bxl-github"></i>
				</a>
				<a href="mailto:alfarrawhi@gmail.com" className="text-xl">
					<i className="bx bx-envelope"></i>
				</a>
				<a
					href={Resume}
					target="_blank"
					rel="noopener noreferrer"
					className="bg-gray-700 py-2 px-4 rounded-lg hover:bg-gray-600"
				>
					Resume
				</a>
			</div>

			{/* Hamburger Icon for mobile */}
			<div className="md:hidden">
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
				} md:hidden absolute top-16 left-0 w-full bg-gray-900 py-5 space-y-4 flex flex-col items-center z-0`}
			>
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
