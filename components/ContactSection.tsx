
import React from 'react';
import { Mail, Phone, MapPin, Send, Linkedin } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contacto" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-5">
            {/* Contact Info */}
            <div className="lg:col-span-2 bg-slate-900 p-10 lg:p-14 text-white">
              <h3 className="text-3xl font-bold mb-8 uppercase tracking-tight">CONTACTO TÉCNICO</h3>
              <p className="text-slate-400 mb-10 leading-relaxed font-light">
                ¿Necesitas un presupuesto para una nueva máquina o asistencia técnica urgente? Estamos operativos para atender tu planta.
              </p>

              <div className="space-y-10">
                <div className="flex items-start space-x-5">
                  <MapPin className="text-orange-500 mt-1 shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-lg uppercase tracking-wider">Taller y Oficinas</h4>
                    <p className="text-slate-400 text-sm mt-1">Polígono Industrial [Nombre], Calle [Nombre]<br />Castellón / Vila-real, España</p>
                  </div>
                </div>
                <div className="flex items-start space-x-5">
                  <Phone className="text-orange-500 mt-1 shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-lg uppercase tracking-wider">Teléfono Oficina</h4>
                    <p className="text-slate-400 text-sm">+34 964 00 00 00</p>
                    <div className="mt-3 bg-orange-600/20 border border-orange-600/30 p-3 rounded-sm">
                      <p className="text-orange-500 text-xs font-bold uppercase tracking-widest">Línea Urgencias 24h</p>
                      <p className="text-white font-bold text-lg">+34 600 00 00 00</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-5">
                  <Mail className="text-orange-500 mt-1 shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-lg uppercase tracking-wider">Correo Directo</h4>
                    <p className="text-slate-400 text-sm">proyectos@navagost.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 flex space-x-4">
                <a href="#" className="w-12 h-12 bg-slate-800 flex items-center justify-center rounded-sm hover:bg-orange-600 transition-colors">
                  <Linkedin size={22} />
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3 p-10 lg:p-14">
              <h4 className="text-2xl font-bold text-slate-900 mb-8 uppercase">Envía tu consulta técnica</h4>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Nombre y Apellidos</label>
                    <input 
                      type="text" 
                      className="w-full border-b-2 border-slate-100 px-0 py-3 focus:outline-none focus:border-orange-500 transition-colors text-slate-800 font-medium"
                      placeholder="Juan Pérez"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Empresa</label>
                    <input 
                      type="text" 
                      className="w-full border-b-2 border-slate-100 px-0 py-3 focus:outline-none focus:border-orange-500 transition-colors text-slate-800 font-medium"
                      placeholder="Cerámicas del Mediterráneo S.A."
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Email Profesional</label>
                  <input 
                    type="email" 
                    className="w-full border-b-2 border-slate-100 px-0 py-3 focus:outline-none focus:border-orange-500 transition-colors text-slate-800 font-medium"
                    placeholder="ingenieria@empresa.com"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Tipo de Servicio</label>
                  <select className="w-full border-b-2 border-slate-100 px-0 py-3 bg-transparent focus:outline-none focus:border-orange-500 transition-colors text-slate-800 font-medium cursor-pointer">
                    <option>Presupuesto Maquinaria a Medida</option>
                    <option>Plan de Mantenimiento Preventivo</option>
                    <option>Modernización (Retrofitting)</option>
                    <option>Asistencia Correctiva Urgente</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Descripción del Proyecto / Avería</label>
                  <textarea 
                    rows={4}
                    className="w-full border-b-2 border-slate-100 px-0 py-3 focus:outline-none focus:border-orange-500 transition-colors text-slate-800 font-medium resize-none"
                    placeholder="Detalla brevemente las especificaciones técnicas..."
                  />
                </div>
                <div className="pt-4">
                  <button className="bg-slate-900 hover:bg-orange-600 text-white font-bold py-5 px-10 flex items-center justify-center transition-all group w-full sm:w-auto uppercase tracking-widest text-xs">
                    ENVIAR SOLICITUD TÉCNICA
                    <Send className="ml-3 group-hover:translate-x-1 transition-transform" size={16} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
