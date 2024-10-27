// src/components/Hero.js
import React from "react";
import portrait from "../assets/img/portrait.jpg";
import selfie from "../assets/img/selfie.png";
import { ReactTyped } from "react-typed";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-scroll";
import Navbar from "./Navbar";
import ParticlesComponent from "./ParticlesComponent";
import { ThemeContext } from "./ThemeContext";
const stringsToRender = [
	"developer",
	"quality engineer",
	"programmer",
	"tech enthusiast"
];

const colors = [
	"#1474f7", // rgba(30, 58, 138, 0.2)
	"#1945e7", // rgba(33, 67, 168, 0.2)
	"#8768ec", // rgba(59, 35, 211, 0.2)
	"#8000ff" // rgba(128, 0, 255, 0.2)
];

const Hero = () => {
	const [someState, setSomeState] = useState(false); // Example state
	const [colorIndex, setColorIndex] = useState(0);
	const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
	const { isDarkMode } = useContext(ThemeContext);
	let color = isDarkMode ? "dark" : "light";
	useEffect(() => {
		const interval = setInterval(() => {
			setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
		}, 2500);

		return () => clearInterval(interval); // Clear the interval on unmount
	}, [colors.length]);
	useEffect(() => {
		const handleResize = () => {
			setViewportHeight(window.innerHeight); // Set the viewport height dynamically
		};
		window.addEventListener("resize", handleResize); // Listen for window resize

		return () => {
			window.removeEventListener("resize", handleResize); // Cleanup event listener
		};
	}, []);

	return (
		<section id="hero">
			<div className="fixed top-0 left-0 w-[0%] h-20 z-0 navbar-blur">
				{/* Transparent banner background */}
			</div>
			<Navbar />
			<ParticlesComponent />

			<section
				className={`xss:h-screen h-[120vh] flex items-center justify-center bg-gradient-to-r ${
					isDarkMode ? "dark-theme" : "light-theme"
				} `}
			>
				<div className="flex md:flex-row flex-col justify-between md:m-[6rem] lg:ml-[20rem] items-center lg:gap-x-[10rem] gap-x-[5rem] 3xl:gap-x-[37rem]">
					<div
						id="blobbers"
						className="relative z-20  flex 2xl:w-[700px] 2xl:h-[400px] h-[300px] md:w-[400px] w-3/4 overflow-hidden border-2 border-gray-800 -mt-8" // Added negative top margin
					>
						<img
							src={selfie} // Use your image path here
							alt="Picture of me"
							className="absolute w-full h-full object-cover"
						/>
					</div>

					<div className="w-full z-20 flex flex-col gap-2 justify-center items-center  px-2  md:items-start md:text-left text-center">
						<hr className="md:hidden" />

						{/* Static Text */}
						<h1
							id="Hello"
							className="md:text-[13vh] text-shadow md:mr-8 text-4xl flex justify-center "
						>
							Hello{" "}
							<span role="img" aria-label="wave">
								👋
							</span>
						</h1>

						<div className="flex flex-col">
							<div
								className={`absolute md:border-l-4  h-[100px] ${
									isDarkMode ? "border-gray-300" : "border-gray-800"
								}`}
							></div>

							<h2 className="md:text-3xl md:ml-5 text-shadow  text-2xl md:w-[120%] w-full flex font-semibold justify-center md:justify-start">
								My name is Rawhi Alfar
							</h2>

							<h3 className="md:text-3xl md:ml-5 text-shadow text-2xl flex md:flex-row flex-col justify-center md:justify-start">
								I'm a
								<span
									className={`ml-[8px] text-gradient font-bold text-3xl ${color}`}
									style={{
										color: colors[colorIndex],
										transition: "color 3s ease"
									}}
								>
									<ReactTyped
										strings={stringsToRender}
										typeSpeed={100}
										backSpeed={100}
										loop
									/>
								</span>
							</h3>
						</div>
					</div>

					<Link
						to="about"
						duration={500}
						offset={-50}
						className="scroll-mt-16 md:absolute bottom-0 relative md:mt-0 mt-[50px] md:left-1/2 left-5 -translate-x-1/2 z-10 arrow-icon text-4xl 2xl:pt-[5rem] cursor-pointer"
					>
						<i className="bx bxs-chevron-down animate-jump animate-jump-hover text-4xl opacity-100 hover:opacity-70"></i>
					</Link>
				</div>
			</section>
		</section>
	);
};

export default Hero;
