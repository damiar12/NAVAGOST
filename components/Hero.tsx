
import React from 'react';
import { ChevronRight, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center pt-24 pb-32 overflow-hidden bg-slate-900">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-30 bg-cover bg-center grayscale"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')" }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-slate-950 via-slate-900/95 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl">
          <div className="inline-flex items-center space-x-2 bg-orange-500/10 border border-orange-500/20 px-4 py-1.5 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping"></span>
            <span className="text-orange-500 text-[10px] font-bold tracking-[0.2em] uppercase">Asistencia Técnica Inmediata Castellón</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[2] tracking-normal uppercase">
            SOLUCIONES DE <br />
            <span className="text-orange-500">MANTENIMIENTO</span> <br />
            <span className="text-orange-500">INDUSTRIAL</span> <br />
            EN CASTELLÓN
          </h1>

          <p className="text-lg md:text-xl text-slate-300 mb-12 leading-relaxed max-w-2xl font-light">
            Ingeniería de precisión y asistencia técnica inmediata. Unimos la experiencia operativa con el diseño mecánico avanzado para minimizar las paradas en tu línea de producción.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-20">
            <button
              onClick={() => scrollToSection('contacto')}
              className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-5 rounded-sm font-bold flex items-center justify-center transition-all group shadow-2xl uppercase tracking-wider text-sm"
            >
              <Zap className="mr-2" size={18} />
              SOLICITAR ASISTENCIA TÉCNICA
            </button>
            <button
              onClick={() => scrollToSection('servicios')}
              className="border-2 border-slate-600 hover:border-white text-white px-10 py-5 rounded-sm font-bold flex items-center justify-center transition-all bg-white/5 hover:bg-white/10 uppercase tracking-wider text-sm"
            >
              VER SERVICIOS
            </button>
          </div>

          {/* Estadísticas */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 border-t border-slate-700/50 pt-12">
            <div>
              <p className="text-4xl md:text-5xl font-bold text-white mb-2">+27 Años</p>
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em]">Trayectoria Técnica</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-white mb-2">24/7</p>
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em]">Respuesta Urgente</p>
            </div>
            <div className="hidden md:block">
              <p className="text-4xl md:text-5xl font-bold text-white mb-2">3D</p>
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em]">Oficina Técnica Avanzada</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
