import { useCallback, useEffect, useState, useMemo, memo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "tsparticles"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
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
						mode: "push" // Pull particles towards the click point to create a connection effect
					},
					resize: true
				},
				modes: {
					repulse: {
						distance: 100,
						duration: 1
					},
					push: {
						quantity: 1 // Adds a few particles on click for network effect
					},
					connect: {
						distance: 100,
						radius: 200,
						links: {
							color: "#3395ff",
							opacity: 1, // Set initial opacity to max for clear visibility
							animate: {
								// Add animation for pulsing effect
								enable: true,
								speed: 1, // Speed of the pulsing effect
								opacity_min: 0.3, // Minimum opacity for the pulse
								sync: false // Makes the animation non-synchronized for a more organic effect
							}
						}
					}
				}
			},
			particles: {
				number: {
					value: 100,
					density: {
						enable: true,
						area: 500
					}
				},
				links: {
					color: "#ffffff",
					distance: 200,
					width: 1,
					opacity: 1.2,
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
					speed: 1.5,
					direction: "none",
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
	const [clickCount, setClickCount] = useState(0);
	const handleParticlesClick = useCallback(
		(e) => {
			console.log(clickCount);

			if (clickCount < clickLimit) {
				setClickCount((prevCount) => prevCount + 1);
			} else {
				// Disable click event mode when limit is reached
				e.container.interactivity.events.onClick.enable = false;
			}
		},
		[clickCount]
	);
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
		<div className="w-full sm:h-screen h-[830px] absolute top-0 left-0 z-10 overflow-hidden">
			<Particles
				id="tsparticles"
				init={particlesInit}
				options={particlesOptions}
				responsive={[true]}
				loaded={(container) => {
					container.interactivity.events.onClick.mode = "push";
					container.interactivity.events.onClick.callback =
						handleParticlesClick;
				}}
			/>
		</div>
	);
});

export default ParticlesComponent;
