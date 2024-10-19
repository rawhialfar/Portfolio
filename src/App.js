import React from "react";
import Navbar from "./components/Header";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

function App() {
	return (
		<div>
			<Navbar />
			<Hero />
			<AboutMe />
			{/* <Skills /> */}
			<Experience />
			<Projects />
			{/* <Contact /> */}
		</div>
	);
}

export default App;
