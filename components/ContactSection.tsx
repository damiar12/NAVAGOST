
import React from 'react';
import { Mail, Phone, MapPin, MessageCircle, Linkedin, Clock } from 'lucide-react';

const ContactSection: React.FC = () => {
  const PHONE = '+34652294082';
  const PHONE_DISPLAY = '+34 652 29 40 82';
  const EMAIL = 'proyectos@navagost.com';
  const WHATSAPP_MSG = encodeURIComponent('Hola, me gustaría solicitar información sobre vuestros servicios de mantenimiento industrial.');

  return (
    <section id="contacto" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-orange-500 font-bold text-xs uppercase tracking-[0.3em] mb-3">Contacto</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 uppercase tracking-tight">
            Estamos a tu disposición
          </h2>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto leading-relaxed">
            ¿Necesitas un presupuesto o asistencia técnica urgente? Contáctanos directamente por el canal que prefieras.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-0 bg-white shadow-2xl overflow-hidden">

          {/* Info Panel */}
          <div className="lg:col-span-1 bg-slate-900 p-10 lg:p-12 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-8 uppercase tracking-tight">NAVAGOST<br />Metal Solutions</h3>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-orange-500 mt-1 shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-widest text-slate-300">Taller y Oficinas</h4>
                    <p className="text-slate-400 text-sm mt-1 leading-relaxed">
                      Camí d'Artana Vila-Real, 63<br />
                      Vila-real, Castellón, España
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="text-orange-500 mt-1 shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-widest text-slate-300">Horario</h4>
                    <p className="text-slate-400 text-sm mt-1 leading-relaxed">
                      Lunes – Viernes: 08:00 – 18:00<br />
                      <span className="text-orange-400 font-semibold">Urgencias: 24h / 7 días</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="text-orange-500 mt-1 shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-widest text-slate-300">Email</h4>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="text-slate-400 text-sm mt-1 hover:text-orange-400 transition-colors"
                    >
                      {EMAIL}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="mt-12 pt-8 border-t border-slate-800">
              <p className="text-slate-500 text-xs uppercase tracking-widest mb-4">Síguenos</p>
              <a
                href="#"
                aria-label="LinkedIn de Navagost"
                className="w-11 h-11 bg-slate-800 flex items-center justify-center rounded-sm hover:bg-orange-600 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Action Cards */}
          <div className="lg:col-span-2 p-10 lg:p-12">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em] mb-8">
              Canales de contacto directo
            </h4>

            <div className="grid sm:grid-cols-1 gap-5">

              {/* Llamar */}
              <a
                href={`tel:${PHONE}`}
                id="contact-call-btn"
                className="group flex items-center space-x-6 border-2 border-slate-100 hover:border-orange-500 p-7 transition-all duration-200 hover:shadow-lg"
              >
                <div className="w-14 h-14 bg-orange-600 group-hover:bg-orange-700 flex items-center justify-center rounded-sm shrink-0 transition-colors">
                  <Phone className="text-white" size={26} />
                </div>
                <div className="flex-1">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Llámanos</p>
                  <p className="text-2xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                    {PHONE_DISPLAY}
                  </p>
                  <p className="text-slate-400 text-xs mt-1">Respuesta inmediata · Urgencias 24h</p>
                </div>
                <div className="text-slate-300 group-hover:text-orange-500 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${PHONE.replace('+', '')}?text=${WHATSAPP_MSG}`}
                id="contact-whatsapp-btn"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-6 border-2 border-slate-100 hover:border-green-500 p-7 transition-all duration-200 hover:shadow-lg"
              >
                <div className="w-14 h-14 bg-green-600 group-hover:bg-green-700 flex items-center justify-center rounded-sm shrink-0 transition-colors">
                  <MessageCircle className="text-white" size={26} />
                </div>
                <div className="flex-1">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">WhatsApp</p>
                  <p className="text-2xl font-bold text-slate-900 group-hover:text-green-600 transition-colors">
                    Escríbenos
                  </p>
                  <p className="text-slate-400 text-xs mt-1">Rápido · Cómodo · Sin esperas</p>
                </div>
                <div className="text-slate-300 group-hover:text-green-500 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${EMAIL}?subject=Consulta técnica - Navagost`}
                id="contact-email-btn"
                className="group flex items-center space-x-6 border-2 border-slate-100 hover:border-slate-900 p-7 transition-all duration-200 hover:shadow-lg"
              >
                <div className="w-14 h-14 bg-slate-800 group-hover:bg-slate-900 flex items-center justify-center rounded-sm shrink-0 transition-colors">
                  <Mail className="text-white" size={26} />
                </div>
                <div className="flex-1">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Email</p>
                  <p className="text-2xl font-bold text-slate-900 group-hover:text-slate-700 transition-colors break-all">
                    {EMAIL}
                  </p>
                  <p className="text-slate-400 text-xs mt-1">Consultas y presupuestos técnicos</p>
                </div>
                <div className="text-slate-300 group-hover:text-slate-700 transition-colors shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </div>
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
