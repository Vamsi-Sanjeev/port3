import React, { useState, useEffect, lazy, Suspense } from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';

// Lazy load components
const About = lazy(() => import('./components/sections/About'));
const Skills = lazy(() => import('./components/sections/Skills'));
const Projects = lazy(() => import('./components/sections/Projects'));
const Contact = lazy(() => import('./components/sections/Contact'));
const Footer = lazy(() => import('./components/layout/Footer'));

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    let isScrolling = false;

    const handleScroll = () => {
      if (!isScrolling) {
        window.requestAnimationFrame(() => {
          const sections = document.querySelectorAll('section');
          const scrollPosition = window.scrollY + 100;

          sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (
              scrollPosition >= sectionTop &&
              scrollPosition < sectionTop + sectionHeight &&
              sectionId
            ) {
              setActiveSection(sectionId);
            }
          });
          isScrolling = false;
        });
      }
      isScrolling = true;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header activeSection={activeSection} />
      <main>
        <Hero />
        <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </Suspense>
      </main>
    </div>
  );
}

export default App;