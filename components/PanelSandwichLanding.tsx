import React, { useEffect } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Hammer,
  Home,
  Image as ImageIcon,
  MessageCircle,
  Phone,
  ShieldCheck,
  ThermometerSun,
  Waves,
} from 'lucide-react';
import Footer from './Footer';

const PHONE = '+34604817302';
const PHONE_DISPLAY = '604 81 73 02';
const WHATSAPP_URL =
  'https://wa.me/34604817302?text=Hola%2C%20he%20visto%20el%20folleto%20de%20panel%20s%C3%A1ndwich%20y%20quiero%20solicitar%20informaci%C3%B3n.';

const PANEL_SANDWICH_HERO_IMAGE_SRC = '/panel-sandwich/hero.webp';
const PANEL_SANDWICH_HERO_IMAGE_READY = false;

// Introducir aqui el enlace de YouTube no listado cuando este disponible.
// Ejemplo valido: https://www.youtube.com/watch?v=XXXXXXXXXXX
const PANEL_SANDWICH_VIDEO_URL = '';

// Anadir aqui fotografias reales de trabajos cuando existan en public/panel-sandwich/.
const PANEL_SANDWICH_GALLERY_IMAGES: Array<{ src: string; alt: string }> = [];

const getYouTubeEmbedUrl = (url: string): string | null => {
  if (!url) return null;

  try {
    const parsedUrl = new URL(url);
    const hostname = parsedUrl.hostname.replace('www.', '');
    const videoId =
      hostname === 'youtu.be'
        ? parsedUrl.pathname.slice(1)
        : parsedUrl.searchParams.get('v');

    return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
  } catch {
    return null;
  }
};

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

const usePanelSandwichSeo = () => {
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

    document.title = 'Panel sándwich en Castellón | Instalación de cubiertas | Navagost';
    setMetaContent(
      'meta[name="description"]',
      'Instalación y renovación de cubiertas con panel sándwich en Castellón y alrededores. Solicita información y presupuesto sin compromiso a Navagost.'
    );
    ensureCanonical('https://navagost.com/panel-sandwich');
    ensureMetaProperty('og:title', 'Panel sándwich para tejados en Castellón | Navagost');
    ensureMetaProperty(
      'og:description',
      'Renueva la cubierta de tu vivienda con panel sándwich. Aislamiento, protección e instalación profesional en Castellón.'
    );

    const serviceSchema = document.createElement('script');
    serviceSchema.type = 'application/ld+json';
    serviceSchema.dataset.panelSandwichSchema = 'true';
    serviceSchema.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Instalación de panel sándwich para cubiertas',
      provider: {
        '@type': 'LocalBusiness',
        name: 'Navagost',
      },
      areaServed: 'Castellón',
      telephone: PHONE,
      url: 'https://navagost.com/panel-sandwich',
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
  {
    title: 'Aislamiento térmico y acústico.',
    icon: <ThermometerSun size={30} />,
  },
  {
    title: 'Instalación rápida y limpia.',
    icon: <Clock3 size={30} />,
  },
  {
    title: 'Presupuesto sin compromiso.',
    icon: <CheckCircle2 size={30} />,
  },
];

const processSteps = [
  'Nos envías fotografías o concertamos una visita.',
  'Revisamos el estado y las medidas del tejado.',
  'Preparamos una propuesta adaptada.',
  'Realizamos la instalación.',
];

const otherServices = ['Estructuras metálicas.', 'Puertas y rejas.', 'Cerramientos.', 'Trabajos metálicos a medida.'];

const PanelSandwichLanding: React.FC = () => {
  usePanelSandwichSeo();

  const embedUrl = getYouTubeEmbedUrl(PANEL_SANDWICH_VIDEO_URL);
  const hasGalleryImages = PANEL_SANDWICH_GALLERY_IMAGES.length > 0;

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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.18),transparent_32%),linear-gradient(135deg,rgba(15,23,42,0.98),rgba(15,23,42,0.9)_48%,rgba(2,6,23,0.98))]" />
          <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-20">
            <div>
              <p className="mb-5 inline-flex border-l-4 border-orange-500 bg-white/5 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-orange-300">
                Cubiertas en Castellón
              </p>
              <h1 className="text-5xl font-black uppercase leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Panel sándwich para tu tejado
              </h1>
              <p className="mt-6 max-w-2xl text-xl font-semibold leading-relaxed text-slate-200">
                Instalación y renovación de cubiertas en Castellón y alrededores.
              </p>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
                Mejora el aislamiento, la protección y la estética de tu vivienda con una cubierta resistente, rápida de
                instalar y adaptada a tu tejado.
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

            <div className="relative">
              <div className="absolute -inset-4 border border-orange-500/20" />
              <div className="relative overflow-hidden border border-slate-700 bg-slate-900 shadow-2xl">
                <div
                  className="min-h-[360px] bg-cover bg-center"
                  style={{
                    backgroundImage: PANEL_SANDWICH_HERO_IMAGE_READY
                      ? `linear-gradient(135deg, rgba(15, 23, 42, 0.08), rgba(15, 23, 42, 0.38)), url("${PANEL_SANDWICH_HERO_IMAGE_SRC}")`
                      : 'linear-gradient(135deg, rgba(15, 23, 42, 0.25), rgba(2, 6, 23, 0.85))',
                  }}
                >
                  <div className="flex min-h-[360px] flex-col justify-between bg-gradient-to-br from-slate-950/90 via-slate-900/70 to-slate-950/50 p-8">
                    <div className="flex items-center justify-between gap-4">
                      <div className="inline-flex items-center gap-2 bg-white px-3 py-2 text-xs font-black uppercase tracking-widest text-slate-950">
                        <Home size={16} />
                        Viviendas y villas
                      </div>
                      <div className="h-12 w-12 border-2 border-orange-500 bg-orange-600/20" />
                    </div>
                    <div className="max-w-sm">
                      <ImageIcon className="mb-4 text-orange-400" size={34} />
                      <p className="text-sm font-semibold leading-relaxed text-slate-200">
                        Espacio preparado para una fotografía real de una vivienda con cubierta de panel sándwich.
                      </p>
                      <p className="mt-3 text-xs font-bold uppercase tracking-widest text-slate-400">
                        Sustituible en {PANEL_SANDWICH_HERO_IMAGE_SRC}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
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

        <section className="industrial-grid bg-slate-100 py-20 md:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-orange-600">Ventajas</p>
              <h2 className="text-4xl font-black uppercase tracking-tight text-slate-950 md:text-5xl">
                ¿Por qué panel sándwich?
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                Es una solución práctica para renovar cubiertas de viviendas y villas cuando se busca mejorar la
                protección del tejado y ganar confort interior con una intervención ordenada.
              </p>
            </div>
            <div className="grid gap-4">
              {[
                'Mejora el confort térmico.',
                'Ayuda a proteger frente a filtraciones y humedad.',
                'Tiene buena durabilidad.',
                'Permite renovar cubiertas con una instalación relativamente rápida.',
                'Está disponible en diferentes acabados.',
              ].map((text) => (
                <div key={text} className="flex items-start gap-4 bg-white p-5 shadow-sm">
                  <ShieldCheck className="mt-1 shrink-0 text-orange-600" size={22} />
                  <p className="text-base font-semibold leading-relaxed text-slate-700">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-950 py-20 text-white md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Trabajos realizados y vídeo"
              title="Descubre cómo trabajamos"
              description="Mira algunos de nuestros trabajos y consulta tu proyecto sin compromiso."
            />

            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="overflow-hidden border border-slate-800 bg-slate-900">
                {embedUrl ? (
                  <div className="aspect-video">
                    <iframe
                      src={embedUrl}
                      title="Trabajos de panel sándwich de Navagost"
                      className="h-full w-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="flex min-h-[320px] flex-col items-start justify-between gap-8 p-8">
                    <div>
                      <Waves className="mb-6 text-orange-500" size={42} />
                      <p className="max-w-xl text-2xl font-black leading-tight text-white">
                        Próximamente podrás ver aquí nuestros trabajos de panel sándwich.
                      </p>
                      <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-400">
                        La sección está preparada para insertar un vídeo de YouTube no listado en cuanto esté disponible.
                      </p>
                    </div>
                    <ActionButton href={WHATSAPP_URL} icon={<MessageCircle size={20} />} external>
                      Consultar por WhatsApp
                    </ActionButton>
                  </div>
                )}
              </div>

              <div className="border border-slate-800 bg-slate-900 p-6">
                <h3 className="text-2xl font-black uppercase text-white">Galería preparada</h3>
                {hasGalleryImages ? (
                  <div className="mt-6 grid gap-4">
                    {PANEL_SANDWICH_GALLERY_IMAGES.map((image) => (
                      <img key={image.src} src={image.src} alt={image.alt} className="aspect-video w-full object-cover" />
                    ))}
                  </div>
                ) : (
                  <div className="mt-6 border border-dashed border-slate-700 p-6">
                    <ImageIcon className="mb-4 text-orange-500" size={32} />
                    <p className="text-sm leading-relaxed text-slate-300">
                      Aquí se podrán añadir fotografías reales de cubiertas realizadas. No se muestran proyectos de
                      ejemplo para evitar atribuir trabajos no documentados.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader eyebrow="Proceso" title="Cómo empezamos" />
            <div className="grid gap-5 md:grid-cols-4">
              {processSteps.map((step, index) => (
                <div key={step} className="border-t-4 border-orange-600 bg-slate-50 p-6">
                  <p className="mb-6 text-5xl font-black text-slate-200">{index + 1}</p>
                  <p className="text-base font-bold leading-relaxed text-slate-800">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-100 py-16">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <div>
              <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-orange-600">También realizamos</p>
              <h2 className="text-3xl font-black uppercase text-slate-950 md:text-4xl">Trabajos metálicos</h2>
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
                <div key={service} className="flex items-center gap-4 bg-white p-5 shadow-sm">
                  <Hammer className="shrink-0 text-orange-600" size={22} />
                  <p className="font-bold text-slate-800">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-orange-600 py-20 text-white">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-4xl font-black uppercase tracking-tight md:text-6xl">¿Quieres renovar tu tejado?</h2>
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

export default PanelSandwichLanding;
