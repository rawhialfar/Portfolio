import React from 'react';
import Navbar from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <Skills /> */}
      <Experience />
      <Projects />
      {/* <Contact /> */}
    </div>
  );
}

export default App;