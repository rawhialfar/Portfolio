import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import ParticlesComponent from "./components/ParticlesComponent";
import { ThemeProvider } from "./components/ThemeContext"; // Adjust the path accordingly
/**
 * The main app component, which is the topmost component and is responsible for rendering all other components.
 *
 * The App component renders the following components in order:
 * 1. Hero: The hero section of the website, which contains the greeting and the background image.
 * 2. AboutMe: The about me section of the website, which contains information about me.
 * 3. Skills: The skills section of the website, which contains a list of my skills. (Currently commented out)
 * 4. Experience: The experience section of the website, which contains a list of my work experience.
 * 5. Projects: The projects section of the website, which contains a list of my projects.
 * 6. Contact: The contact section of the website, which contains a form to contact me. (Currently commented out)
 *
 * The App component is the topmost component, and is the parent component for all other components.
 */
function App() {
	return (
		<ThemeProvider>
			<Hero />
			<AboutMe />
			{/* <Skills /> */}
			<Experience />
			<Projects />
			{/* <Contact /> */}
		</ThemeProvider>
	);
}

export default App;
