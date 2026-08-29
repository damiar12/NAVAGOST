import React, { useState } from 'react';
import { CheckCircle2, HardHat, Factory, Wind, Play, X } from 'lucide-react';

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

const FeaturedProjectCard: React.FC<ProjectCardProps & { posterSrc: string }> = ({
  title,
  subtitle,
  description,
  tags,
  benefits,
  videoSrc,
  posterSrc,
  icon,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="bg-white border border-slate-200 overflow-hidden mb-12 shadow-xl">
      <button
        type="button"
        onClick={() => setIsPlaying(true)}
        aria-label={`Reproducir vídeo: ${title}`}
        className="relative w-full aspect-video lg:aspect-[21/9] bg-slate-900 overflow-hidden flex items-center justify-center group cursor-pointer"
      >
        <img
          src={posterSrc}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-95 transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/10 transition-colors" />

        <div className="relative z-10 w-20 h-20 rounded-full bg-orange-600 group-hover:bg-orange-500 group-hover:scale-110 flex items-center justify-center shadow-2xl transition-all">
          <Play size={30} className="text-white ml-1" fill="currentColor" />
        </div>

        <div className="absolute top-6 left-6 bg-orange-600 text-white p-3 z-20">{icon}</div>
        <div className="absolute top-6 right-6 bg-slate-950/80 text-red-500 text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 border border-red-600/50 z-20">
          Tubería Sector Cerámico
        </div>
      </button>

      {isPlaying && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/95 flex items-center justify-center p-4 sm:p-8"
          onClick={() => setIsPlaying(false)}
        >
          <button
            type="button"
            onClick={() => setIsPlaying(false)}
            aria-label="Cerrar vídeo"
            className="absolute top-6 right-6 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors z-10"
          >
            <X size={24} />
          </button>
          <video
            key={videoSrc}
            autoPlay
            controls
            playsInline
            onClick={(e) => e.stopPropagation()}
            className="max-w-full max-h-full h-full sm:h-auto sm:max-h-[90vh] w-auto object-contain"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      )}

      <div className="p-10 lg:p-14">
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

        <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2 uppercase tracking-tight">{title}</h3>
        <p className="text-orange-600 font-bold text-base mb-8 italic">{subtitle}</p>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <p className="text-slate-600 text-base leading-relaxed italic">"{description}"</p>

          <div className="space-y-3 lg:border-l lg:border-slate-100 lg:pl-10">
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
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="proyectos" className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 border-l-8 border-orange-600 pl-8">
          <h2 className="text-orange-600 font-bold tracking-[0.3em] text-sm mb-2 uppercase">Casos de éxito</h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter">PROYECTOS</h3>
          <p className="text-slate-500 mt-4 max-w-2xl font-medium">
            En Navagost no solo diseñamos soluciones, las hacemos realidad a pie de obra. Aquí mostramos algunos de nuestros últimos trabajos destacados.
          </p>
        </div>

        <FeaturedProjectCard
          icon={<Wind size={24} />}
          title="Tubería de aspiración en altura"
          subtitle="Montaje industrial en altura para el sector cerámico"
          description="Diseño, fabricación y montaje en altura de una línea completa de tubería de aspiración para un cliente del sector cerámico, coordinando los trabajos verticales con la continuidad de la producción sin comprometer la seguridad ni los plazos."
          tags={["Tuberías", "Montaje en altura", "Sector cerámico"]}
          posterSrc="/tuberia.png"
          videoSrc="/tuberia.mp4"
          benefits={[
            'Recorrido completo de tubería de aspiración diseñado a medida',
            'Montaje en altura con máxima seguridad en todo el proceso',
            'Coordinación logística para minimizar el impacto en producción',
            'Ejecución integral: diseño, fabricación y puesta en marcha',
          ]}
        />

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

          <ProjectCard
            icon={<Factory size={24} />}
            title="Injertos y complementos a medida"
            subtitle="Calderería técnica para integración en planta"
            description="Fabricamos injertos y complementos metálicos listos para montaje, diseñados para encajar a la primera con tus tuberías y estructuras existentes."
            tags={["Calderería", "Tuberías", "Integración"]}
            videoSrc="/injerto-web.mp4"
            benefits={[
              'Integración perfecta con instalaciones existentes',
              'Soldadura técnica y acabado industrial de alta resistencia',
              'Mayor agilidad en obra y menos incidencias de montaje',
              'Adaptación exacta para evitar soluciones improvisadas',
            ]}
          />

          <ProjectCard
            icon={<HardHat size={24} />}
            title="Reparación de pistón de prensa"
            subtitle="Mantenimiento industrial para evitar paradas"
            description="Recuperamos la tolerancia y fiabilidad del pistón para devolver operatividad a la prensa en menos tiempo que un recambio nuevo."
            tags={["Mantenimiento", "Prensas", "Retrofitting"]}
            videoSrc="/reparacionpistonprensa-web.mp4"
            benefits={[
              'Reducción de tiempos frente a sustitución completa',
              'Precisión de ajuste pistón-camisa para evitar desgaste prematuro',
              'Ahorro de costes y extensión de vida útil del activo',
              'Supervisión técnica directa con experiencia industrial',
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;