import React from 'react';
import { ArrowRight } from 'lucide-react';

const gallery = [
  { src: '/carpinteria-metalica/soldador-carpinteria-metalica-navagost.png', alt: 'Soldador de Navagost fabricando carpintería metálica a medida en el taller de Castellón' },
  { src: '/carpinteria-metalica/reja-ventana-blanca.png', alt: 'Reja de ventana metálica blanca a medida instalada por Navagost' },
  { src: '/carpinteria-metalica/reja-ventana-negra.png', alt: 'Reja de ventana metálica negra a medida en vivienda de Castellón' },
  { src: '/carpinteria-metalica/rejas-metalicas-local-comercial.png', alt: 'Rejas metálicas de seguridad instaladas en local comercial' },
];

const CarpinteriaMetalicaSection: React.FC = () => {
  return (
    <section id="carpinteria-metalica" className="py-24 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-end mb-12">
          <div>
            <h2 className="text-orange-500 font-bold tracking-[0.3em] text-sm mb-2 uppercase">Otro de nuestros servicios</h2>
            <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Carpintería Metálica</h3>
            <p className="text-slate-400 mt-4 font-medium">
              Puertas, rejas y ventanas metálicas fabricadas e instaladas a medida en Castellón y alrededores, con la
              misma exigencia técnica que aplicamos en calderería industrial.
            </p>
          </div>
          <a
            href="/carpinteria-metalica"
            className="inline-flex items-center justify-center gap-3 self-start lg:justify-self-end bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-sm font-bold uppercase tracking-wider text-sm transition-all shadow-lg"
          >
            Ver carpintería metálica
            <ArrowRight size={18} />
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {gallery.map((image) => (
            <a
              key={image.src}
              href="/carpinteria-metalica"
              className="group block aspect-[3/4] overflow-hidden bg-slate-900"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-full w-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarpinteriaMetalicaSection;
