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
	"software engineer",
	"developer",
	"tester",
	"programmer",
	"passionate coder",
	"tech enthusiast",
	"student",
	"traveller"
];

const colors = [
	"#ff0000", // red
	"#ff7f00", // orange
	"#ffff00", // yellow
	"#00ff00", // green
	"#0060ff", // blue
	"#8b00ff" // violet
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
			<div className="fixed top-0 left-0 w-full h-20 bg-gray-900 z-0">
				{/* Transparent banner background */}
			</div>
			<Navbar />
			<ParticlesComponent />

			<section className="mt-[76px] sm:h-[calc(100vh-76px)] py-20  px-10 bg-gray-900 text-white flex items-start justify-center">
				<div className="flex flex-col  justify-center items-center space-y-10 lg:space-y-0 ">
					<div className="static transform -translate-x-4/5 flex justify-center z-40">
						<img
							src={selfie}
							alt="Picture of me"
							className="w-[400px] rounded-lg shadow-xl h-[400px] object-cover"
						/>
					</div>

					<div className="w-full  text-start flex flex-col space-y-3 px-5">
						{/* Static Text */}
						<h1 className="text-3xl mt-5 font-bold w-full text-center mb-[-15px]">
							Hi, my name is Rawhi and I'm a
						</h1>
						{/* <div class="text-container">
						<h1>Rawhi Alfar</h1>
					</div> */}
						{/* Dynamic Typed Text */}
						<h2
							className=" text-3xl font-bold w-full text-center"
							style={{
								color: colors[colorIndex],
								transition: "color 2s ease"
							}}
						>
							<ReactTyped
								strings={stringsToRender}
								typeSpeed={90}
								backSpeed={90}
								loop
							/>
						</h2>
					</div>
					<Link
						to="about"
						smooth={true}
						duration={500}
						className="relative z-40 arrow-icon text-4xl xl:pt-[10rem] pt-[5rem] cursor-pointer transition-transform duration-300 ease-in-out hover:translate-y-2 hover:opacity-75"
					>
						<i className="bx bxs-chevron-down"></i>
					</Link>
				</div>
			</section>
		</section>
	);
};

export default Hero;
