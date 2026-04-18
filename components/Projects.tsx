import React, { useState } from 'react';
import { CheckCircle2, HardHat, Factory } from 'lucide-react';

type ProjectCardProps = {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  benefits: string[];
  videoSrc: string;
  icon: React.ReactNode;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  subtitle,
  description,
  tags,
  benefits,
  videoSrc,
  icon,
}) => {
  const [videoError, setVideoError] = useState(false);

  return (
    <div className="bg-white border border-slate-200 overflow-hidden group hover:border-orange-500 transition-all duration-300 flex flex-col h-full shadow-sm hover:shadow-xl">
      <div className="relative aspect-video bg-slate-900 overflow-hidden flex items-center justify-center">
        {!videoError && (
          <video
            key={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            onError={() => setVideoError(true)}
            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        )}
        <div className="absolute top-4 left-4 bg-orange-600 text-white p-2 z-20">{icon}</div>
      </div>

      <div className="p-8 flex-grow flex flex-col">
        <div className="flex gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-bold uppercase tracking-tighter bg-slate-100 text-slate-500 px-2 py-1 border border-slate-200"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-2xl font-bold text-slate-900 mb-2 uppercase tracking-tight">{title}</h3>
        <p className="text-orange-600 font-bold text-sm mb-6 italic">{subtitle}</p>

        <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow italic">"{description}"</p>

        <div className="space-y-3 pt-6 border-t border-slate-100">
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">Aspectos técnicos:</p>
          {benefits.map((benefit) => (
            <div key={benefit} className="flex items-start space-x-3">
              <CheckCircle2 size={16} className="text-orange-600 mt-0.5 flex-shrink-0" />
              <span className="text-sm font-medium text-slate-700 italic">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="proyectos" className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 border-l-8 border-orange-600 pl-8">
          <h2 className="text-orange-600 font-bold tracking-[0.3em] text-sm mb-2 uppercase">Casos de éxito</h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter">PROYECTOS Y REALIDADES</h3>
          <p className="text-slate-500 mt-4 max-w-2xl font-medium">
            En Navagost no solo diseñamos soluciones, las hacemos realidad a pie de obra. Aquí mostramos algunos de nuestros últimos trabajos destacados.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <ProjectCard
            icon={<Factory size={24} />}
            title="Tolva lineal de recepción"
            subtitle="Calderería a medida para optimización de flujo"
            description="Adaptamos la maquinaria a tu producción, no tu producción a la maquinaria. Fabricada íntegramente a medida para optimizar el flujo de material y evitar atascos."
            tags={["Calderería", "Diseño a medida", "Industria"]}
            videoSrc="/tolva-web.mp4"
            benefits={[
              'Geometría calculada para flujo optimizado',
              'Seguridad integrada: rejilla electrosoldada',
              'Salida de descarga con brida de conexión rápida',
              'Tratamiento superficial de alta resistencia',
            ]}
          />

          <ProjectCard
            icon={<HardHat size={24} />}
            title="Supervisión y montaje crítico"
            subtitle="Precisión milimétrica a pie de obra"
            description="Eliminamos el riesgo de errores de cálculo. La dirección de proyecto supervisa personalmente cada ajuste para garantizar que el diseño y la realidad encajen a la primera."
            tags={["Montaje", "Estructuras", "Soldadura"]}
            videoSrc="/Soldarventana.mp4"
            benefits={[
              'Cero imprevistos mediante supervisión técnica',
              'Soldaduras y anclajes bajo normativa estricta',
              'Integración total con estructuras existentes',
              'Ahorro de costes por paradas de obra',
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;