import { useCallback, useEffect, useState, useMemo, memo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
import { loadFull } from "tsparticles";
import { loadSlim } from "@tsparticles/slim";

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
						mode: "repulse"
					},
					onClick: {
						enable: false,
						mode: "push"
					},
					resize: true
				},
				modes: {
					repulse: {
						distance: 100
					},
					push: {
						quantity: 3
					}
				}
			},
			particles: {
				number: {
					value: 150,
					density: {
						enable: true,
						area: 800
					}
				},
				links: {
					color: "#ffffff",
					distance: 150,
					width: 1,
					enable: true,
					shadow: {
						enable: true
					}
				},
				color: {
					value: "#ffffff"
				},
				shape: {
					type: "circle"
				},
				opacity: {
					value: 0.8,
					random: true
				},
				size: {
					value: { min: 2, max: 5 },
					random: true
				},
				move: {
					enable: true,
					speed: 1,
					direction: "bottom",
					outModes: {
						default: "out"
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
		<div className="w-full sm:h-screen xsxs:h-[798px] h-[66.5rem] absolute top-0 left-0 z-10 overflow-hidden">
			<Particles
				id="tsparticles"
				init={particlesInit}
				options={particlesOptions}
			/>
		</div>
	);
});

export default ParticlesComponent;
