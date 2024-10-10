import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-10 bg-gray-800 text-white">
      <h2 className="text-4xl font-bold mb-8 w-[110rem] text-center">Experience</h2>
      <div className="space-y-8">
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">TD Bank - Quality Engineer Intern (May 2022 - August 2022)</h3>
          <p>Performed manual and regression testing, automated testing scripts, and collaborated with QA team in an Agile and Scrum environment.</p>
        </div>
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">TAMVOES - QA Analyst Intern (Sept 2022 - December 2022)</h3>
          <p>Performed manual testing for mobile apps, wrote unit tests using Pytest, and ensured high code coverage and platform stability.</p>
        </div>
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Fill it Forward - Software Development Intern (January 2024 - August 2024)</h3>
          <p>Developed features for mobile app using React, contributed to SaaS migration, and managed backend scripts and queries.</p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
