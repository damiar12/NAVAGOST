
import React from 'react';
import { Settings, Factory, Zap, Wrench, Shield, MonitorCheck, Layout } from 'lucide-react';

const ServiceItem: React.FC<{ title: string, points: string[], icon: React.ReactNode, dark?: boolean }> = ({ title, points, icon, dark }) => (
  <div className={`p-10 border shadow-2xl group transition-all duration-500 ${dark ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-100'}`}>
    <div className="flex items-center space-x-4 mb-8">
      <div className={`w-14 h-14 flex items-center justify-center rounded-sm ${dark ? 'bg-orange-600' : 'bg-slate-900'} text-white group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <h3 className={`text-2xl font-bold uppercase tracking-tight ${dark ? 'text-white' : 'text-slate-900'}`}>{title}</h3>
    </div>
    <ul className="space-y-4">
      {points.map((p, i) => (
        <li key={i} className={`flex items-start space-x-3 text-sm ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
          <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-1.5 flex-shrink-0" />
          <span className="font-medium">{p}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-24 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-3xl">
            <h2 className="text-orange-600 font-bold tracking-[0.2em] text-sm mb-4 uppercase italic">Soluciones Técnicas</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 uppercase">
              MANTENIMIENTO INDUSTRIAL INTEGRAL
            </h3>
            <p className="text-lg text-slate-600 mt-6 font-light">
              Aseguramos la continuidad operativa de tus instalaciones mediante ingeniería de mantenimiento de respuesta ágil.
            </p>
          </div>
          <div className="bg-slate-900 p-6 border-l-4 border-orange-500 flex items-center">
            <Zap className="text-orange-500 mr-4" size={40} />
            <div className="text-white">
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Respuesta Urgente</p>
              <p className="text-xl font-bold">Castellón / Vila-real / Almazora</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <ServiceItem 
            title="Asistencia y Planta"
            icon={<Wrench size={28} />}
            points={[
              "Preventivo Programado: Planes de revisión para evitar paradas no planificadas.",
              "Correctivo de Urgencia 24/7: Respuesta inmediata para averías críticas.",
              "Reparación Electromecánica: Diagnóstico y sustitución de componentes.",
              "Optimización de Líneas: Mejora de tiempos de ciclo en procesos existentes.",
              "Montajes Industriales: Desplazamiento de líneas y nuevas instalaciones."
            ]}
          />
          <ServiceItem 
            dark
            title="Ingeniería y Maquinaria"
            icon={<MonitorCheck size={28} />}
            points={[
              "Oficina Técnica: Diseño 3D, cálculo de estructuras y planimetría.",
              "Fabricación a Medida: Equipos llave en mano personalizados.",
              "Retrofitting: Modernización y actualización técnica de maquinaria obsoleta.",
              "Estructuras Metálicas: Bancadas, soportes y cerramientos industriales.",
              "Mecanizado de Precisión: Fabricación de piezas de repuesto especiales."
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
