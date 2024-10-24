import React from "react";
import ParticlesComponent from "./ParticlesComponent";
const AboutMe = () => {
	return (
		<section
			id="about"
			className="z-[-1] pb-10 pt-10 text-white flex flex-col items-center justify-center overflow-x-hidden"
		>
			<h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
			<div className="sm:w-full w-[140%] text-center space-y-5 ">
				<p className="text-xl mx-auto">
					I'm a passionate Software Engineering student enrolled in the
					Bachelor of Computing Program (co-op) at the University of Guelph.
					My journey in programming began in high school, where I found a love
					for coding and made lasting connections through the programming club.
					That experience inspired me to pursue software engineering as my
					career path. I thrive on meeting new people, building meaningful
					relationships, and embracing new opportunities. Whether it's for
					collaboration or a simple chat, feel free to connect with me on
					LinkedIn or send me an email. I'm always eager to engage and explore
					new possibilities!
				</p>
			</div>
		</section>
	);
};

export default AboutMe;
