
import React from 'react';
import { Award, Ruler, Users, HardHat, Factory } from 'lucide-react';

const DepartmentCard: React.FC<{ 
  title: string, 
  subtitle: string,
  description: string, 
  icon: React.ReactNode 
}> = ({ title, subtitle, description, icon }) => (
  <div className="bg-slate-50 p-8 border-l-4 border-orange-600 hover:bg-white hover:shadow-xl transition-all duration-300">
    <div className="text-orange-600 mb-4">{icon}</div>
    <h4 className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-1">{subtitle}</h4>
    <h5 className="text-2xl font-bold text-slate-900 mb-4 uppercase tracking-tight">{title}</h5>
    <p className="text-slate-600 text-sm leading-relaxed">
      {description}
    </p>
  </div>
);

const WhyUs: React.FC = () => {
  return (
    <section id="nosotros" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-orange-600 font-bold tracking-widest text-sm mb-4 uppercase italic">Nuestra Estructura Técnica</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 uppercase tracking-tight">
            CAPACIDAD OPERATIVA Y DISEÑO BAJO UN MISMO TECHO
          </h3>
          <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
            En Navagost Metal Solutions integramos la solidez de la calderería tradicional con la ingeniería moderna para proyectar una solución industrial completa.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <DepartmentCard 
            subtitle="Liderazgo Operativo"
            title="DIRECCIÓN DE TALLER Y MONTAJES"
            description="Nuestro departamento de ejecución cuenta con una trayectoria acumulada de más de 27 años en el sector metalmecánico de Castellón. Gestionamos montajes estructurales complejos y reparaciones críticas, aplicando la experiencia adquirida en proyectos de alta exigencia para garantizar la fiabilidad en cada soldadura y ensamblaje."
            icon={<HardHat size={32} />}
          />
          <DepartmentCard 
            subtitle="Diseño y Optimización"
            title="OFICINA TÉCNICA E INGENIERÍA"
            description="Área responsable del desarrollo de maquinaria a medida y actualización tecnológica (retrofitting). Integramos diseño CAD avanzado y planificación de producción para transformar las necesidades del cliente en equipos eficientes, reduciendo los tiempos de entrega y asegurando la precisión milimétrica en la fabricación."
            icon={<Ruler size={32} />}
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-900 p-8 text-white relative overflow-hidden group">
            <Factory className="text-orange-500 mb-4" size={32} />
            <h4 className="text-xl font-bold mb-3 uppercase tracking-wider">Vocación de Taller</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              No somos solo consultores; somos fabricantes. Nos involucramos en el taller y en la puesta en marcha real de cada proyecto para asegurar el cumplimiento de los estándares más exigentes.
            </p>
            <div className="absolute -right-8 -bottom-8 text-slate-800 opacity-20 group-hover:scale-110 transition-transform">
               <Award size={140} />
            </div>
          </div>
          <div className="md:col-span-2">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
              alt="Instalaciones Industriales Navagost" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 rounded-sm shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
