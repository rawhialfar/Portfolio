import { useEffect, useContext } from "react";
import Vara from "vara";
import { ThemeContext } from "./ThemeContext";

function VaraText() {
	const text = "Rawhi Alfar";
	const { isDarkMode } = useContext(ThemeContext); // Access the theme context
	let color = isDarkMode ? "#ffffff" : "#333333";
	useEffect(() => {
		// Initialize Vara once when the component mounts
		const vara = new Vara(
			"#logo",
			"https://raw.githubusercontent.com/akzhy/Vara/refs/heads/master/fonts/Satisfy/SatisfySL.json",
			[
				{
					text: text,
					fontSize: 50, // Original font size for the base width
					queued: true,
					strokeWidth: 1.1,
					color: color, // Initial color, can be anything
					autoAnimation: true,
					duration: 4000,
					letterSpacing: 2
				}
			],
			{
				autoAnimation: true
			}
		);

		// Function to scale the SVG text based on window size
		const scaleText = () => {
			const svgElement = document.querySelector("#logo svg");
			if (svgElement) {
				if (window.innerWidth < 400) {
					const scaleFactor = window.innerWidth / 400; // Calculate scale factor based on window width
					svgElement.style.transform = `scale(${scaleFactor})`;
					svgElement.style.transformOrigin = "top left"; // Ensure scaling happens from the top-left corner
				} else {
					svgElement.style.transform = `scale(${1})`;
					svgElement.style.transformOrigin = "top left"; // Ensure scaling happens from the top-left corner
				}
			}
		};

		// Set initial scaling
		scaleText();

		// Add resize event listener to scale text
		window.addEventListener("resize", scaleText);

		// Cleanup on component unmount
		return () => {
			window.removeEventListener("resize", scaleText);
		};
	}, []); // Initialize Vara only once, no theme dependency here

	useEffect(() => {
		// Function to change the color of the existing Vara text based on theme
		const changeTextColor = () => {
			const svgElements = document.querySelectorAll("#logo svg path");
			// console.log(svgElements[6]); // Check the element in console

			// Hide the 4th SVG element (the underscore)
			if (svgElements[7]) {
				svgElements[7].style.display = "none"; // Hide the element
			}

			// Change the color of the other elements
			svgElements.forEach((element, index) => {
				if (index !== 7) {
					// Skip the 4th element (underscore)
					element.setAttribute("stroke", isDarkMode ? "#fff" : "#000"); // Set color based on the theme
				}
			});
		};

		// Change the text color whenever the theme changes
		changeTextColor();
	}, [isDarkMode]); // Run this effect whenever the theme changes

	return <div id="logo"></div>;
}

export default VaraText;
