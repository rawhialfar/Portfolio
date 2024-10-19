// src/components/Hero.js
import React from "react";
import portrait from "../assets/img/portrait.jpg";
import ParticleBg from "./ParticleBackground";
import Particles from "react-particles";
import { Engine } from "@tsparticles/engine";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import { ReactTyped } from "react-typed";
const stringsToRender = [
	"full stack developer",
	"software engineer",
	"mobile developer",
	"web developer",
	"front end developer",
	"quality engineer",
	"quality analyst",
	"test engineer",
	"traveller",
	"passionate coder"
];
// export function ParticlesContainer (props: any) {
//   // this customizes the component tsParticles installation
//   const customInit = useCallback(async (engine: Engine) => {
//     // this adds the bundle to tsParticles
//     await loadFull(engine);
//   });

//   const options = {
//     /* custom options */
//   };

//   return <Particles options={options} init={this.customInit} />;
// }
const Hero = () => {
	const particlesLoaded = useCallback(async (container) => {
		console.log("Particles container loaded", container);
	}, []);
	const customInit = useCallback(async (engine) => {
		// this adds the bundle to tsParticles
		await loadFull(engine);
	});

	return (
		<section
			id="hero"
			className="sticky py-20 px-10 bg-gray-800 text-white flex items-start justify-center"
		>
			{/* Background SVG */}
			<div className=" inset-0 h-[20px]"></div>
			<Particles
				id="tsparticles"
				particlesInit="particlesInit"
				loaded={particlesLoaded}
				options={{
					// background: {
					// 	color: {
					// 		value: "#1f2937",
					// 	},
					// },
					fpsLimit: 120,
					interactivity: {
						events: {
							onClick: {
								enable: true,
								mode: "push"
							},
							onHover: {
								enable: true,
								mode: "repulse"
							},
							resize: true
						},
						modes: {
							push: {
								quantity: 4
							},
							repulse: {
								distance: 200,
								duration: 0.4
							}
						}
					},
					particles: {
						shape: {
							type: "circle"
						},
						color: {
							value: "#ffffff"
						},
						links: {
							color: "#ffffff",
							distance: 150,
							enable: true,
							opacity: 0.5,
							width: 1
						},
						move: {
							direction: "none",
							enable: true,
							outMode: "bounce",
							random: false,
							speed: 2,
							straight: false
						},
						number: {
							density: {
								enable: true,
								area: 800
							},
							value: 80
						},
						opacity: {
							value: 0.5
						}
					}
				}}
			/>

			<div className="flex flex-col justify-center items-center space-y-10 lg:space-y-0 ">
				<div className="w-full flex justify-center">
					<img
						src={portrait}
						alt="Picture of me"
						className="w-[400px] rounded-lg shadow-lg"
					/>
				</div>

				<div className="w-full text-start lg:text-left space-y-5 px-5">
					<h1 className="text-4xl mt-5 font-bold w-full text-center">
						Hi, my name is Rawhi and I'm a{" "}
						<span
							style={{
								display: "inline-block",
								minHeight: "1.5em",
								lineHeight: "1.5em"
							}}
						>
							<ReactTyped
								strings={stringsToRender}
								typeSpeed={70}
								backSpeed={70}
								className="text-green-500 text-center"
								loop
							/>
						</span>
					</h1>
				</div>
			</div>
		</section>
	);
};

export default Hero;
