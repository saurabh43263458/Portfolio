import React, { useState, useEffect } from 'react';
import NoiseAndOrbs from './components/NoiseAndOrbs';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Work from './components/Work';
import About from './components/About';
import Expertise from './components/Expertise';
import Experience from './components/Experience';
import Contact from './components/Contact';
import ContactModal from './components/ContactModal';
import Footer from './components/Footer';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [orbPosition, setOrbPosition] = useState(null);

  // Initialize scroll intersection observer for reveal animations
  useScrollReveal();

  useEffect(() => {
    const handleGlobalClick = (e) => {
      // Don't redirect the background orb when interacting inside the modal panel
      if (e.target.closest('.modal-panel')) {
        return;
      }

      setOrbPosition({
        x: e.pageX,
        y: e.pageY
      });
    };

    window.addEventListener('click', handleGlobalClick);
    return () => window.removeEventListener('click', handleGlobalClick);
  }, []);

  return (
    <>
      <NoiseAndOrbs orbPosition={orbPosition} />
      <Navbar />
      <main>
        <Hero onOpenContact={() => setIsContactOpen(true)} />
        <Marquee />
        <Work />
        <About />
        <Expertise />
        <Experience />
        <Contact />
      </main>
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
      <Footer />
    </>
  );
}
