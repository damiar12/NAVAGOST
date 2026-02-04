
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Sectors from './components/Sectors';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section id="inicio">
          <Hero />
        </section>
        <section id="servicios" className="industrial-grid">
          <Services />
        </section>
        <section id="sectores" className="bg-slate-100">
          <Sectors />
        </section>
        <section id="nosotros">
          <WhyUs />
        </section>
        <section id="contacto">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
