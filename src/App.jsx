import React from 'react';
import { Navbar } from './components/navbar';
import { Hero } from './components/hero';
import { About } from './components/about';
import { Experience } from './components/experience';
import { Skills } from './components/skills';
import { Projects } from './components/projects';
import { Contact } from './components/contact';
import { Footer } from './components/footer';


import { WhatsAppSimple } from "./components/whatsapp-float-simple"


function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
     
      <WhatsAppSimple />
      <Hero />
      
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      
      <Footer />
    </div>
  );
}

export default App;