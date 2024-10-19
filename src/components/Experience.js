import React from "react";
import tamvoes from "../assets/img/TAMVOES.png";
import TD from "../assets/img/TDBank.png";
import FIF from "../assets/img/FIF.jpg";
const Experience = () => {
	return (
		<section
			id="experience"
			className=" flex flex-col items-center py-10 px-10 bg-gray-800 text-white"
		>
			<h2 className="text-4xl font-bold mb-8 w-[110rem] text-center">
				Experience
			</h2>
			<div className="space-y-8">
				<div className="md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl">
					<div className="bg-gray-700 p-6 rounded-lg shadow-lg md:flex-row flex-col flex justify-between mt-5">
						<div>
							<div className="flex justify-between w-full">
								<h3 className="text-xl font-semibold">
									Software Development Intern
								</h3>
								<h4 className="text-xl font-semibold text-right ">
									(January 2024 - August 2024)
								</h4>
							</div>
							<div className="flex justify-between w-full">
								<h4 className="text-xl italic">Fill it Forward</h4>
								<h4 className="text-lg italic text-right mr-2 ">Guelph, ON</h4>
							</div>
							<ul className="list-disc ml-8 mt-3">
								<li>
									Developed features for the Fill it Forward mobile app using
									React, significantly enhancing the user experience and
									aligning with product design.
								</li>
								<li>
									Built key pages for the Fill it Forward client portal using
									React Native and TypeScript, enabling clients to manage groups
									and view real-time statistics of their impact, increasing
									client engagement and impact by 60%.
								</li>
								<li>
									Contributed to SaaS migration, ensuring smooth transition to a
									more scalable infrastructure and seamless database
									modification via a portal.
								</li>
								<li>
									Wrote backend scripts and queries with TypeScript and GraphQL
									to manage SaaS data, support new features and enhance
									performance.
								</li>
							</ul>
						</div>
						<img
							src={FIF}
							className="h-[225px] ml-4 rounded-lg w-[240px] object-fill self-center xs:mt-3"
							alt="Fill it Forward"
						/>
					</div>

					<div className="bg-gray-700 p-6 mt-5 rounded-lg md:flex-row flex-col shadow-lg flex justify-between items-start">
						<div className="items-center">
							<div className="flex justify-between w-full">
								<h3 className="text-xl font-semibold">QA Analyst Intern</h3>
								<h4 className="text-xl font-semibold text-right">
									(Sept 2022 - December 2022)
								</h4>
							</div>
							<div className="flex justify-between w-full">
								<h3 className="text-xl italic">TAMVOES</h3>
								<h4 className="text-lg italic text-right mr-2">Waterloo, ON</h4>
							</div>
							<ul className="list-disc ml-8 mt-3">
								<li>
									Performed manual and regression testing for TAMVOES’s mobile
									app, thoroughly identifying, documenting, and reporting
									critical bugs and issues to ensure platform stability and
									enhance user satisfaction.
								</li>
								<li>
									Developed and executed comprehensive test plans and scenarios,
									facilitating a smoother release cycle by catching defects
									early in the development process
								</li>
								<li>
									Wrote detailed and efficient unit tests using Pytest, ensuring
									high code coverage and functionality of core components.
								</li>
								<li>
									Collaborated with the QA team to maintain platform stability
									through thorough testing.
								</li>
							</ul>
						</div>
						<img
							src={tamvoes}
							className="h-[225px] object-fill rounded-lg ml-5 self-center xs:mt-3"
							alt="TAMVOES"
						/>
					</div>

					<div className="bg-gray-700 p-6 rounded-lg mt-5 md:flex-row flex-col shadow-lg flex justify-between items-start">
						<div className=" items-center">
							<div className="flex justify-between w-full">
								<h3 className="text-xl font-semibold">
									Quality Engineer Intern
								</h3>
								<h4 className="text-xl font-semibold text-right">
									(May 2022 - August 2022)
								</h4>
							</div>
							<div className="flex justify-between w-full">
								<h3 className="text-xl italic ">TD Bank</h3>
								<h4 className="text-lg italic text-right mr-2 ">Toronto, ON</h4>
							</div>
							<ul className="list-disc ml-8  mt-3">
								<li>
									Performed comprehensive manual and regression testing on TD's
									official website, ensuring strict compliance with quality
									standards and enhancing the user experience.
								</li>
								<li>
									Automated testing scripts to streamline repetitive processes,
									improving the efficiency and accuracy of the testing phase.
								</li>
								<li>
									Thoroughly documented and reported defects, providing clear
									analysis and actionable feedback.
								</li>
								<li>
									Collaborated closely with a professional QA team, using Agile
									and Scrum methodologies to ensure alignment with project goals
									and tight delivery timelines.
								</li>
								<li>
									Provided on-call support and guidance to ensure timely
									resolution of technical issues and ensure a smooth transition
									to new roles.
								</li>
							</ul>
						</div>
						<img
							src={TD}
							className="h-[200px] object-fill rounded-lg ml-5 self-center xs:mt-3"
							alt="TD Bank"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
