import { useCallback, useEffect, useState, useMemo, memo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim";
import { loadSnowPreset } from "@tsparticles/preset-snow";

const ParticlesComponent = memo((any) => {
	const [init, setInit] = useState(false);
	const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
	const particlesOptions = useMemo(
		() => ({
			autoPlay: true,
			fpsLimit: 140,
			fullScreen: {
				enable: false,
				zIndex: 0
			},
			interactivity: {
				events: {
					onHover: {
						enable: true,
						mode: "repulse" // Particles move away from the mouse
					},
					onClick: {
						enable: true,
						mode: "push" // Add more particles on click
					},
					resize: true
				},
				modes: {
					repulse: {
						distance: 100 // How far particles move away from the mouse
					},
					push: {
						quantity: 3 // How many particles to add on click
					}
				}
			},
			particles: {
				number: {
					value: 150, // Number of snowflakes
					density: {
						enable: true,
						area: 800 // How tightly packed the snowflakes are
					}
				},
				color: {
					value: "#ffffff" // Snowflake color
				},
				shape: {
					type: "circle" // Snowflakes are round
				},
				opacity: {
					value: 0.8, // Opacity of snowflakes
					random: true // Make opacity random for a more natural effect
				},
				size: {
					value: { min: 2, max: 5 }, // Size of snowflakes
					random: true // Random size for variety
				},
				move: {
					enable: true,
					speed: 1, // Speed at which snowflakes fall
					direction: "bottom", // Make the snowflakes fall down
					outModes: {
						default: "out" // Make them disappear when they reach the bottom
					}
				}
			},
			interactivity: {
				events: {
					onHover: {
						enable: false // Disable interaction to keep it simple
					},
					onClick: {
						enable: false // No additional particles on click
					}
				}
			},
			detectRetina: true // Adjust for Retina displays
		}),
		[]
	);

	useEffect(() => {
		initParticlesEngine(async (engine) => {
			// await loadAll(engine);
			await loadFull(engine);
			// await loadSlim(engine);
			//await loadBasic(engine);
		}).then(() => {
			setInit(true);
		});
	}, []);

	const particlesInit = async (engine) => {
		await loadFull(engine); // Ensures the engine is loaded once
	};
	const particlesLoaded = useCallback(async (container) => {}, []);
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
	// (async () => {
	// 	await loadSnowPreset(tsParticles);
	// 	await tsParticles.load({
	// 		id: "tsparticles",
	// 		options: {
	// 			preset: "snow"
	// 		}
	// 	});
	// })();
	return (
		<div
			style={{
				width: "100%",
				height: "100vh", // Set height to 100vh to cover the Hero section
				height: `919px`,
				position: "absolute", // Ensure it's positioned correctly within the Hero section
				top: 0, // Align with the top of the Hero section
				left: 0,
				zIndex: 10, // Make sure it stays behind other content
				overflow: "hidden" // Prevent overflow issues
			}}
		>
			<Particles
				id="tsparticles"
				init={particlesInit}
				options={particlesOptions}
			/>
		</div>
	);
});

export default ParticlesComponent;
