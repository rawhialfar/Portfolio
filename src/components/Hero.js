// src/components/Hero.js
import React from "react";
import portrait from "../assets/img/portrait.jpg";
import selfie from "../assets/img/selfie.png";
import { ReactTyped } from "react-typed";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import Navbar from "./Navbar";
import ParticlesComponent from "./ParticlesComponent";

const stringsToRender = [
	"developer",
	"quality engineer",
	"programmer",
	"tech enthusiast"
];

const colors = [
	"#0066ff", // Bright blue
	"#3399ff", // Light blue
	"#66ccff", // Lighter blue
	"#99ccff" // Very light blue
];

const Hero = () => {
	const [someState, setSomeState] = useState(false); // Example state
	const [colorIndex, setColorIndex] = useState(0);
	const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

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
		console.log("viewportHeight", viewportHeight);
		window.addEventListener("resize", handleResize); // Listen for window resize

		return () => {
			window.removeEventListener("resize", handleResize); // Cleanup event listener
		};
	}, []);
	return (
		<section id="hero">
			<div className="fixed top-0 left-0 w-full h-20  from-gray-900 via-gray-800 to-gray-900 z-0">
				{/* Transparent banner background */}
			</div>
			<Navbar />
			<ParticlesComponent />

			<section
				className={`h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white`}
			>
				<div className="flex md:flex-row flex-col justify-between md:m-[6rem] lg:ml-[20rem] items-center lg:gap-x-[10rem] gap-x-[5rem] 3xl:gap-x-[37rem]">
					<div
						id="blobbers"
						className="relative z-20 flex 2xl:w-[700px] 2xl:h-[400px] h-[300px] md:w-[400px] w-3/4 overflow-hidden border-2 border-gray-200 -mt-8" // Added negative top margin
					>
						<img
							src={selfie} // Use your image path here
							alt="Picture of me"
							className="absolute w-full h-full object-cover"
						/>
					</div>

					<div className="w-full z-20 flex flex-col gap-2 justify-center items-center md:space-y-1 px-2  md:items-start md:text-left text-center">
						<hr className="md:hidden" />

						{/* Static Text */}
						<h1
							id="Hello"
							className="md:text-[10vh] md:mr-8 text-4xl flex justify-center md:justify-start"
						>
							Hello{" "}
							<span role="img" aria-label="wave">
								👋
							</span>
						</h1>

						<div className="flex flex-col">
							<div className="absolute md:border-l-4 border-gray-300 h-[100px]"></div>

							<h2 className="md:text-3xl md:ml-5 text-2xl md:w-[120%] w-full flex font-semibold justify-center md:justify-start">
								My name is Rawhi Alfar
							</h2>

							<h3 className="md:text-3xl md:ml-5 text-2xl flex md:flex-row flex-col justify-center md:justify-start">
								I'm a
								<span
									className="ml-[8px] text-gradient font-bold"
									style={{
										color: colors[colorIndex],
										transition: "color 2s ease"
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
