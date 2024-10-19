// src/components/ParticleBackground.js
import React from "react";
import Particles from "react-tsparticles";

const ParticleBackground = () => {
	return (
		<Particles
			id="tsparticles"
			options={{
				background: {
					color: {
						value: "#000", // Background color of the particles
					},
				},
				fpsLimit: 60,
				particles: {
					number: {
						value: 100, // Number of particles
						density: {
							enable: true,
							value_area: 800,
						},
					},
					color: {
						value: "#ffffff", // Particle color
					},
					shape: {
						type: ["circle", "square", "triangle"], // Only use shapes
						stroke: {
							width: 0,
							color: "#000",
						},
					},
					opacity: {
						value: 0.5, // Opacity of the particles
						random: false,
						anim: {
							enable: false,
						},
					},
					size: {
						value: 5,
						random: true,
						anim: {
							enable: false,
						},
					},
					move: {
						enable: true,
						speed: 3,
						direction: "none",
						random: false,
						straight: false,
						out_mode: "out",
						bounce: false,
					},
				},
				interactivity: {
					detect_on: "canvas",
					events: {
						onHover: {
							enable: true,
							mode: "repulse",
						},
						onClick: {
							enable: true,
							mode: "push",
						},
						resize: true,
					},
					modes: {
						grab: {
							distance: 400,
							line_linked: {
								opacity: 1,
							},
						},
						bubble: {
							distance: 400,
							size: 40,
							duration: 2,
							opacity: 8,
							speed: 3,
						},
						repulse: {
							distance: 200,
							duration: 0.4,
						},
						push: {
							particles_nb: 4,
						},
						remove: {
							particles_nb: 2,
						},
					},
				},
				retina_detect: true,
			}}
		/>
	);
};

export default ParticleBackground;
