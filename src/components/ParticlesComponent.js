import {
	useCallback,
	useEffect,
	useState,
	useMemo,
	memo,
	useContext
} from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { ThemeContext } from "./ThemeContext";

const ParticlesComponent = memo((any) => {
	const [init, setInit] = useState(false);
	const { isDarkMode } = useContext(ThemeContext);

	// Dynamically update particles options when isDarkMode changes
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
					color: isDarkMode ? "#ffffff" : "#333333", // Change color based on the theme
					distance: 200,
					width: 1,
					opacity: 1.2,
					enable: true,
					shadow: {
						enable: isDarkMode // Shadow enabled in dark mode
					}
				},
				color: {
					value: isDarkMode ? "#ffffff" : "#333333" // Change particle color based on the theme
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
					direction: "right",
					outModes: {
						default: "out"
					}
				}
			},
			detectRetina: true // Adjust for Retina displays
		}),
		[isDarkMode] // Dynamically update when isDarkMode changes
	);

	useEffect(() => {
		initParticlesEngine(async (engine) => {
			await loadFull(engine);
		}).then(() => {
			setInit(true);
		});
	}, []);

	const particlesInit = async (engine) => {
		await loadFull(engine); // Ensures the engine is loaded once
	};

	const particlesLoaded = useCallback(async (container) => {}, []);

	return (
		<div className="w-full xss:h-screen h-[120vh] absolute top-0 left-0 z-10 overflow-hidden">
			<Particles
				id="tsparticles"
				init={particlesInit}
				options={particlesOptions}
				responsive={[true]}
				loaded={particlesLoaded}
			/>
		</div>
	);
});

export default ParticlesComponent;
