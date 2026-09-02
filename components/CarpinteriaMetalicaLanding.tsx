import React, { useEffect } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Phone,
  Ruler,
  ShieldCheck,
  Wrench,
} from 'lucide-react';
import Footer from './Footer';

const PHONE = '+34604817302';
const PHONE_DISPLAY = '604 81 73 02';
const WHATSAPP_URL =
  'https://wa.me/34604817302?text=Hola%2C%20he%20visto%20la%20p%C3%A1gina%20de%20carpinter%C3%ADa%20met%C3%A1lica%20y%20quiero%20solicitar%20informaci%C3%B3n.';

const HERO_IMAGE = '/carpinteria-metalica/soldador-carpinteria-metalica-navagost.png';

const gallery = [
  { src: '/carpinteria-metalica/soldador-carpinteria-metalica-navagost.png', alt: 'Soldador de Navagost fabricando carpintería metálica a medida en el taller de Castellón' },
  { src: '/carpinteria-metalica/puerta-ventana-metalica.png', alt: 'Puerta y ventana con carpintería metálica de seguridad fabricada por Navagost en Castellón' },
  { src: '/carpinteria-metalica/reja-ventana-blanca.png', alt: 'Reja de ventana metálica blanca a medida instalada por Navagost' },
  { src: '/carpinteria-metalica/reja-ventana-negra.png', alt: 'Reja de ventana metálica negra a medida en vivienda de Castellón' },
  { src: '/carpinteria-metalica/rejas-metalicas-local-comercial.png', alt: 'Rejas metálicas de seguridad instaladas en local comercial' },
];

const setMetaContent = (selector: string, content: string) => {
  const element = document.head.querySelector<HTMLMetaElement>(selector);
  if (element) element.content = content;
};

const ensureMetaProperty = (property: string, content: string): HTMLMetaElement => {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute('property', property);
    document.head.appendChild(element);
  }
  element.content = content;
  return element;
};

const ensureCanonical = (href: string): HTMLLinkElement => {
  let element = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!element) {
    element = document.createElement('link');
    element.rel = 'canonical';
    document.head.appendChild(element);
  }
  element.href = href;
  return element;
};

const useCarpinteriaMetalicaSeo = () => {
  useEffect(() => {
    const previousTitle = document.title;
    const previousDescription = document.head
      .querySelector<HTMLMetaElement>('meta[name="description"]')
      ?.content;
    const previousOgTitle = document.head
      .querySelector<HTMLMetaElement>('meta[property="og:title"]')
      ?.content;
    const previousOgDescription = document.head
      .querySelector<HTMLMetaElement>('meta[property="og:description"]')
      ?.content;
    const previousCanonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const previousCanonicalHref = previousCanonical?.href;
    const createdCanonical = !previousCanonical;

    document.title = 'Carpintería Metálica en Castellón | Puertas, Rejas y Ventanas | Navagost';
    setMetaContent(
      'meta[name="description"]',
      'Fabricación e instalación de carpintería metálica a medida en Castellón: puertas, rejas, ventanas y cerramientos de seguridad. Presupuesto sin compromiso.'
    );
    ensureCanonical('https://navagost.com/carpinteria-metalica');
    ensureMetaProperty('og:title', 'Carpintería Metálica a medida en Castellón | Navagost');
    ensureMetaProperty(
      'og:description',
      'Puertas, rejas y ventanas metálicas fabricadas e instaladas a medida en Castellón y alrededores. Seguridad y acabado industrial.'
    );

    const serviceSchema = document.createElement('script');
    serviceSchema.type = 'application/ld+json';
    serviceSchema.dataset.carpinteriaMetalicaSchema = 'true';
    serviceSchema.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Carpintería metálica a medida',
      provider: {
        '@type': 'LocalBusiness',
        name: 'Navagost',
      },
      areaServed: 'Castellón',
      telephone: PHONE,
      url: 'https://navagost.com/carpinteria-metalica',
    });
    document.head.appendChild(serviceSchema);

    return () => {
      document.title = previousTitle;
      if (previousDescription) setMetaContent('meta[name="description"]', previousDescription);
      if (previousOgTitle) setMetaContent('meta[property="og:title"]', previousOgTitle);
      if (previousOgDescription) setMetaContent('meta[property="og:description"]', previousOgDescription);
      if (createdCanonical) {
        document.head.querySelector('link[rel="canonical"]')?.remove();
      } else if (previousCanonicalHref) {
        ensureCanonical(previousCanonicalHref);
      }
      serviceSchema.remove();
    };
  }, []);
};

const ActionButton: React.FC<{
  href: string;
  children: React.ReactNode;
  icon: React.ReactNode;
  variant?: 'primary' | 'secondary';
  external?: boolean;
}> = ({ href, children, icon, variant = 'primary', external }) => (
  <a
    href={href}
    target={external ? '_blank' : undefined}
    rel={external ? 'noopener noreferrer' : undefined}
    className={`inline-flex min-h-14 items-center justify-center gap-3 rounded-sm px-6 py-4 text-center text-sm font-black uppercase tracking-wider transition-all focus:outline-none focus:ring-4 focus:ring-orange-300 sm:px-8 ${
      variant === 'primary'
        ? 'bg-orange-600 text-white shadow-xl shadow-orange-950/20 hover:bg-orange-700'
        : 'border-2 border-slate-700 bg-white text-slate-950 hover:border-orange-600 hover:text-orange-700'
    }`}
  >
    {icon}
    <span>{children}</span>
  </a>
);

const SectionHeader: React.FC<{ eyebrow?: string; title: string; description?: string }> = ({
  eyebrow,
  title,
  description,
}) => (
  <div className="mx-auto mb-12 max-w-3xl text-center">
    {eyebrow && <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-orange-600">{eyebrow}</p>}
    <h2 className="text-3xl font-black uppercase tracking-tight text-slate-950 md:text-5xl">{title}</h2>
    {description && <p className="mt-5 text-base leading-relaxed text-slate-600 md:text-lg">{description}</p>}
  </div>
);

const benefitItems = [
  { title: 'Fabricación 100% a medida.', icon: <Ruler size={30} /> },
  { title: 'Seguridad y acabado industrial.', icon: <ShieldCheck size={30} /> },
  { title: 'Presupuesto sin compromiso.', icon: <CheckCircle2 size={30} /> },
];

const processSteps = [
  'Nos envías fotos o medidas del hueco a cubrir.',
  'Estudiamos el espacio y tus necesidades de seguridad.',
  'Preparamos una propuesta a medida.',
  'Fabricamos e instalamos en obra.',
];

const otherServices = ['Mantenimiento industrial.', 'Calderería y estructuras.', 'Reparaciones urgentes 24/7.', 'Retrofitting de maquinaria.'];

const CarpinteriaMetalicaLanding: React.FC = () => {
  useCarpinteriaMetalicaSeo();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <a href="/" aria-label="Volver a la página principal de Navagost" className="shrink-0">
            <img src="/logo.png" alt="Navagost Metal Solutions" className="h-12 w-auto object-contain brightness-0 invert sm:h-14" />
          </a>

          <nav className="flex items-center gap-3">
            <a
              href="/"
              className="hidden text-xs font-bold uppercase tracking-widest text-slate-300 transition-colors hover:text-orange-500 sm:inline-flex"
            >
              Página principal
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-sm bg-orange-600 px-4 py-3 text-xs font-black uppercase tracking-wider text-white transition-colors hover:bg-orange-700 focus:outline-none focus:ring-4 focus:ring-orange-300"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-slate-950 text-white">
          <div className="absolute inset-0">
            <img
              src={HERO_IMAGE}
              alt="Fabricación de carpintería metálica a medida en el taller de Navagost, Castellón"
              className="h-full w-full object-cover opacity-45"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.18),transparent_32%),linear-gradient(135deg,rgba(15,23,42,0.98),rgba(15,23,42,0.85)_48%,rgba(2,6,23,0.95))]" />
          </div>
          <div className="relative mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
            <div className="max-w-4xl">
              <p className="mb-5 inline-flex border-l-4 border-orange-500 bg-white/5 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-orange-300">
                Carpintería Metálica en Castellón
              </p>
              <h1 className="text-5xl font-black uppercase leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Puertas, rejas y ventanas a medida
              </h1>
              <p className="mt-6 max-w-2xl text-xl font-semibold leading-relaxed text-slate-200">
                Fabricación e instalación de carpintería metálica en Castellón y alrededores.
              </p>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
                Aplicamos nuestra experiencia en calderería industrial a la carpintería metálica de tu vivienda o
                negocio: rejas de seguridad, puertas, ventanas y cerramientos fabricados a medida y con acabado
                resistente.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <ActionButton href={WHATSAPP_URL} icon={<MessageCircle size={20} />} external>
                  Pedir presupuesto por WhatsApp
                </ActionButton>
                <ActionButton href={`tel:${PHONE}`} icon={<Phone size={20} />} variant="secondary">
                  Llamar ahora
                </ActionButton>
              </div>
              <p className="mt-6 text-sm font-bold text-slate-300">
                Servicio en Castellón y alrededores · <span className="whitespace-nowrap">+34 {PHONE_DISPLAY}</span>
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
            {benefitItems.map((item) => (
              <div key={item.title} className="border-l-4 border-orange-600 bg-slate-50 p-7 shadow-sm">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-sm bg-slate-950 text-white">
                  {item.icon}
                </div>
                <h2 className="text-2xl font-black uppercase leading-tight text-slate-950">{item.title}</h2>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-100 py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Trabajos realizados"
              title="Carpintería metálica instalada en Castellón"
              description="Rejas, puertas y ventanas fabricadas a medida para viviendas y locales comerciales."
            />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {gallery.map((image) => (
                <div key={image.src} className="aspect-[3/4] overflow-hidden bg-slate-200 shadow-sm">
                  <img src={image.src} alt={image.alt} className="h-full w-full object-cover" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="industrial-grid bg-white py-20 md:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-orange-600">Ventajas</p>
              <h2 className="text-4xl font-black uppercase tracking-tight text-slate-950 md:text-5xl">
                ¿Por qué carpintería metálica a medida?
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                Fabricamos cada pieza a la medida exacta del hueco, sin soluciones estándar que no encajan, con la
                misma exigencia técnica que aplicamos en calderería industrial.
              </p>
            </div>
            <div className="grid gap-4">
              {[
                'Refuerza la seguridad de puertas y ventanas.',
                'Medidas exactas para cada hueco, sin ajustes improvisados.',
                'Materiales y soldadura de acabado resistente a la intemperie.',
                'Diseño adaptado al estilo de la fachada.',
                'Fabricación e instalación por el mismo equipo.',
              ].map((text) => (
                <div key={text} className="flex items-start gap-4 bg-slate-50 p-5 shadow-sm">
                  <ShieldCheck className="mt-1 shrink-0 text-orange-600" size={22} />
                  <p className="text-base font-semibold leading-relaxed text-slate-700">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-100 py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader eyebrow="Proceso" title="Cómo empezamos" />
            <div className="grid gap-5 md:grid-cols-4">
              {processSteps.map((step, index) => (
                <div key={step} className="border-t-4 border-orange-600 bg-white p-6">
                  <p className="mb-6 text-5xl font-black text-slate-200">{index + 1}</p>
                  <p className="text-base font-bold leading-relaxed text-slate-800">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <div>
              <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-orange-600">También realizamos</p>
              <h2 className="text-3xl font-black uppercase text-slate-950 md:text-4xl">Ingeniería industrial</h2>
              <a
                href="/#servicios"
                className="mt-8 inline-flex items-center gap-2 text-sm font-black uppercase tracking-wider text-orange-700 hover:text-orange-800"
              >
                Volver a los servicios
                <ArrowRight size={18} />
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {otherServices.map((service) => (
                <div key={service} className="flex items-center gap-4 bg-slate-50 p-5 shadow-sm">
                  <Wrench className="shrink-0 text-orange-600" size={22} />
                  <p className="font-bold text-slate-800">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-orange-600 py-20 text-white">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-4xl font-black uppercase tracking-tight md:text-6xl">
              ¿Necesitas carpintería metálica a medida?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg font-semibold leading-relaxed text-orange-50">
              Cuéntanos qué necesitas y te asesoraremos sin compromiso.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <ActionButton href={WHATSAPP_URL} icon={<MessageCircle size={20} />} external>
                Escribir por WhatsApp
              </ActionButton>
              <ActionButton href={`tel:${PHONE}`} icon={<Phone size={20} />} variant="secondary">
                Llamar al <span className="whitespace-nowrap">604 81 73 02</span>
              </ActionButton>
            </div>
            <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-orange-100">
              Servicio en Castellón y alrededores.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CarpinteriaMetalicaLanding;
