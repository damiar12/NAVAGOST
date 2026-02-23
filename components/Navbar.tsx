
import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', id: 'inicio' },
    { name: 'Servicios', id: 'servicios' },
    { name: 'Sectores', id: 'sectores' },
    { name: 'Nosotros', id: 'nosotros' },
    { name: 'Contacto', id: 'contacto' },
  ];

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-xl py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img
              src="/logo.png"
              alt="Navagost Metal Solutions - Logo"
              className="h-16 w-auto object-contain brightness-0 invert hover:opacity-80 transition-opacity"
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={(e) => handleNavClick(e, link.id)}
                className="text-slate-300 hover:text-orange-500 text-xs font-bold transition-colors uppercase tracking-widest"
              >
                {link.name}
              </button>
            ))}
            <a
              href="tel:+34652294082"
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-sm flex items-center space-x-2 text-xs font-bold transition-all shadow-lg border border-orange-500/20"
            >
              <Phone size={14} />
              <span>ASISTENCIA INMEDIATA</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-orange-500 p-2 transition-colors"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 absolute top-full left-0 w-full shadow-2xl">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                className="block w-full text-left px-4 py-3 text-slate-300 hover:bg-slate-800 hover:text-orange-500 font-bold uppercase tracking-widest text-sm transition-all"
                onClick={(e) => handleNavClick(e, link.id)}
              >
                {link.name}
              </button>
            ))}
            <a
              href="tel:+34652294082"
              className="block w-full bg-orange-600 text-white px-4 py-4 rounded-sm flex items-center justify-center space-x-3 font-bold uppercase tracking-widest text-sm shadow-xl"
            >
              <Phone size={18} />
              <span>ASISTENCIA INMEDIATA</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
