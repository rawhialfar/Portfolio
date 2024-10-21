import { useCallback, useEffect, useState, useMemo, memo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim";
import { loadSnowPreset } from "@tsparticles/preset-snow";

const ParticlesComponent = memo((any) => {
	const [init, setInit] = useState(false);
	const particlesOptions = useMemo(
		() => ({
			autoPlay: true,
			fpsLimit: 140,
			fullScreen: {
				enable: false
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
		<div className="w-full h-screen absolute top-0 left-0 z-10 overflow-hidden">
			<Particles
				id="tsparticles"
				init={particlesInit}
				options={particlesOptions}
			/>
		</div>
	);
});

export default ParticlesComponent;
