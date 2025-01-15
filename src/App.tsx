import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects/Projects';
import Tech from './components/Tech/Tech';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-gray-900">
      <Navbar />
      <Header />
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="tech">
        <Tech />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;