// src/components/Hero.js
import React from "react";
import portrait from "../assets/img/portrait.jpg";
import Particles from "react-particles";
import { Engine } from "@tsparticles/engine";
import { useCallback } from "react";
import { ReactTyped } from "react-typed";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import Navbar from "./Navbar";
import "./sky.scss";
const tsParticles = require("@tsparticles/engine");
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
	const [colorIndex, setColorIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
		}, 2500);

		return () => clearInterval(interval); // Clear the interval on unmount
	}, [colors.length]);

	return (
		<section id="hero">
			<Navbar />

			<div id="stars"></div>
			<div id="stars2"></div>
			<div id="stars3"></div>
			<section className="static md:h-full h-[60rem] py-20 mt-[-6px] px-10 bg-gray-900 text-white flex items-start justify-center">
				<div className="flex flex-col  justify-center items-center space-y-10 lg:space-y-0 ">
					<div className="static transform -translate-x-4/5 flex justify-center">
						<img
							src={portrait}
							alt="Picture of me"
							className="w-[400px] rounded-lg shadow-lg"
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
								typeSpeed={80}
								backSpeed={80}
								loop
							/>
						</h2>
					</div>
					<Link
						to="about" // Make sure the About section has this id
						smooth={true}
						duration={500}
						className="arrow-icon text-4xl lg:pt-10 cursor-pointer transition-transform duration-300 ease-in-out hover:translate-y-2 hover:opacity-75"
					>
						<i className="bx bxs-chevron-down"></i> {/* Arrow Icon */}
					</Link>
				</div>
			</section>
		</section>
	);
};

export default Hero;
