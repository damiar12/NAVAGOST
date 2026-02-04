
import React from 'react';
import { Factory, Zap, FlaskConical, Settings2, PackageCheck } from 'lucide-react';

const SectorCard: React.FC<{ icon: React.ReactNode, title: string, detail: string }> = ({ icon, title, detail }) => (
  <div className="bg-white p-8 border border-slate-100 hover:border-orange-500 transition-all group">
    <div className="text-slate-300 group-hover:text-orange-600 transition-colors mb-6">{icon}</div>
    <h4 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-tight">{title}</h4>
    <p className="text-sm text-slate-500 leading-relaxed">{detail}</p>
  </div>
);

const Sectors: React.FC = () => {
  return (
    <section id="sectores" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-orange-600 font-bold tracking-widest text-sm mb-4 uppercase italic">Sectores de Actuación</h2>
          <h3 className="text-4xl font-bold text-slate-900 uppercase">ADAPTACIÓN TÉCNICA ESPECIALIZADA</h3>
          <p className="text-slate-600 mt-4 max-w-3xl">
            Adaptamos nuestros protocolos de seguridad y calidad a la exigencia específica de tu industria en la provincia de Castellón.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SectorCard 
            icon={<Factory size={48} />} 
            title="Sector Cerámico" 
            detail="Maquinaria de transporte, mantenimiento de hornos, prensas y sistemas de esmaltado." 
          />
          <SectorCard 
            icon={<Zap size={48} />} 
            title="Energía" 
            detail="Plantas de cogeneración, mantenimiento de conductos y estructuras de soporte críticas." 
          />
          <SectorCard 
            icon={<PackageCheck size={48} />} 
            title="Agroalimentario" 
            detail="Equipos en acero inoxidable, líneas de envasado y soluciones para industria cítrica." 
          />
          <SectorCard 
            icon={<Settings2 size={48} />} 
            title="Metalmecánica" 
            detail="Mecanizado industrial, calderería media-pesada y soldadura de alta precisión." 
          />
        </div>
      </div>
    </section>
  );
};

export default Sectors;
