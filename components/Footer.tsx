import React from 'react';
import { Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-white py-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex flex-col mb-8">
              <span className="text-3xl font-bold tracking-tighter text-white leading-none">
                NAVAGOST
              </span>
              <span className="text-[12px] text-orange-500 font-bold uppercase tracking-[0.2em]">
                Metal Solutions
              </span>
            </div>
            <p className="text-slate-400 text-sm max-w-md leading-relaxed">
              Integramos más de dos décadas de experiencia operativa en calderería y montaje con ingeniería de diseño avanzado.
              Somos el socio estratégico para la continuidad operativa de la industria en Castellón.
            </p>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-8 text-orange-500">Servicios</h4>
            <ul className="space-y-4 text-slate-400 text-sm uppercase tracking-wider font-medium">
              <li><button onClick={() => scrollTo('servicios')} className="hover:text-white transition-colors">Mantenimiento</button></li>
              <li><button onClick={() => scrollTo('servicios')} className="hover:text-white transition-colors">Maquinaria a medida</button></li>
              <li><button onClick={() => scrollTo('servicios')} className="hover:text-white transition-colors">Retrofitting</button></li>
              <li><button onClick={() => scrollTo('contacto')} className="hover:text-white transition-colors">Oficina Técnica</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-8 text-orange-500">Sede Central</h4>
            <ul className="space-y-4 text-slate-400 text-sm leading-relaxed mb-8">
              <li>Polígono Industrial<br />Provincia de Castellón, España</li>
              <li><span className="text-white font-bold">Urgencias:</span> +34 604817302</li>
              <li>proyectos@navagost.com</li>
            </ul>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-4 text-orange-500">Síguenos</h4>
            <a
              href="https://www.linkedin.com/in/navagost-metal-solutions-sl-3a04323b3"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Navagost"
              className="inline-flex items-center space-x-2 text-slate-400 hover:text-white transition-colors"
            >
              <Linkedin size={20} />
              <span className="text-sm font-semibold tracking-wider uppercase">LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-slate-600 text-[10px] uppercase tracking-[0.2em] font-bold">
          <p>© {new Date().getFullYear()} Navagost Metal Solutions S.L.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-orange-500">Privacidad</a>
            <a href="#" className="hover:text-orange-500">Legal</a>
            <a href="#" className="hover:text-orange-500">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
