import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import TechStack from './components/Skills';
import Experience from './components/Experience';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-vscode-bg text-vscode-text flex flex-col md:flex-row">
      <Navbar />
      <main className="flex-1 md:ml-16 w-full">
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Education />
        <Footer />
      </main>
    </div>
  );
};

export default App;