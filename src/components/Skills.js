import React from "react";
import { ThemeContext } from "./ThemeContext";
import { useContext, useRef, useState, useEffect } from "react";
import {
	FaAws,
	FaJs,
	FaHtml5,
	FaCss3Alt,
	FaReact,
	FaNodeJs,
	FaJava,
	FaPython,
	FaBootstrap,
	FaGitAlt,
	FaGithub,
	FaPhp,
	FaDatabase,
	FaGit
} from "react-icons/fa";
import {
	SiTypescript,
	SiHtml5,
	SiCss3,
	SiC,
	SiGraphql,
	SiRedux,
	SiNextdotjs,
	SiJest,
	SiAwsamplify,
	SiTailwindcss,
	SiPostman,
	SiJira,
	SiFigma,
	SiCakephp,
	SiMysql,
	SiPostgresql,
	SiSqlite,
	SiZoho,
	SiJunit5,
	SiJquery,
	SiTrello,
	SiFirebase,
	SiAsana,
	SiGooglecloud,
	SiFlutter
} from "react-icons/si";
import { IoCarOutline, IoFootballOutline } from "react-icons/io5";
const Tooltip = ({ text }) => (
	<div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm py-1 px-2 rounded shadow-lg z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
		{text}
	</div>
);

const SkillIcon = ({ Icon, name }) => (
	<div className="relative group flex flex-col items-center">
		<Icon className="text-5xl" />
		<Tooltip text={name} />
	</div>
);
const Skills = () => {
	const sectionRef = useRef(null);
	const { isDarkMode } = useContext(ThemeContext);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsVisible(entry.isIntersecting);
			},
			{ threshold: 0.1 }
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => {
			if (sectionRef.current) {
				observer.unobserve(sectionRef.current);
			}
		};
	}, []);
	return (
		<section
			id="skills"
			ref={sectionRef}
			className={`z-[-1] pb-10 pt-10 text-white flex flex-col items-center justify-center overflow-x-hidden transition-opacity duration-500 ${
				isDarkMode ? "dark-theme" : "light-theme"
			} ${isVisible ? "fade-in" : "fade-out"}`}
		>
			<h2 className="xs:text-4xl text-[200%] font-bold mb-8 text-center">
				Skills and Technologies
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
				<div className="flex flex-col items-center space-y-4">
					<h3 className="text-2xl font-semibold">Languages</h3>
					<div className="flex flex-wrap gap-6 justify-center">
						<SkillIcon Icon={FaJs} name="JavaScript" />
						<SkillIcon Icon={SiTypescript} name="TypeScript" />
						<SkillIcon Icon={FaJava} name="Java" />
						<SkillIcon Icon={FaPython} name="Python" />
						<SkillIcon Icon={SiC} name="C" />
						<SkillIcon Icon={SiHtml5} name="HTML" />
						<SkillIcon Icon={SiCss3} name="CSS" />
						<SkillIcon Icon={SiCakephp} name="PHP" />
						<SkillIcon Icon={FaDatabase} name="SQL" />
					</div>
				</div>

				{/* Technologies Section */}
				<div className="flex flex-col items-center space-y-4">
					<h3 className="text-2xl font-semibold">Technologies</h3>
					<div className="flex flex-wrap gap-6 justify-center">
						<SkillIcon Icon={FaReact} name="React.js" />
						<SkillIcon Icon={FaNodeJs} name="Node.js" />
						<SkillIcon Icon={SiNextdotjs} name="Next.js" />
						<SkillIcon Icon={SiFlutter} name="Flutter" />
						<SkillIcon Icon={SiPostgresql} name="PostgreSQL" />
						<SkillIcon Icon={SiMysql} name="MySQL" />
						<SkillIcon Icon={SiGraphql} name="GraphQL" />
						<SkillIcon Icon={FaBootstrap} name="Bootstrap" />
						<SkillIcon Icon={SiTailwindcss} name="Tailwind CSS" />
						<SkillIcon Icon={FaAws} name="AWS" />
						<SkillIcon Icon={SiJest} name="Jest" />
						<SkillIcon Icon={SiJunit5} name="JUnit" />
					</div>
				</div>

				{/* Tools Section */}
				<div className="flex flex-col items-center space-y-4">
					<h3 className="text-2xl font-semibold">Tools</h3>
					<div className="flex flex-wrap gap-6 justify-center">
						<SkillIcon Icon={FaGit} name="Git" />
						<SkillIcon Icon={FaGithub} name="Github" />
						<SkillIcon Icon={SiJira} name="Jira" />
						<SkillIcon Icon={SiPostman} name="Postman" />
						<SkillIcon Icon={SiFigma} name="Figma" />
						<SkillIcon Icon={SiTrello} name="Trello" />
						<SkillIcon Icon={SiZoho} name="Zoho" />
						<SkillIcon Icon={SiAsana} name="Asana" />
						<SkillIcon Icon={SiGooglecloud} name="Google Cloud" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
