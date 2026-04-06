/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Calendar, GraduationCap, Sparkles, ArrowRight, Instagram, Mail, MapPin, ChevronDown, Hand } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-light/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Sparkles className="text-sage w-6 h-6" />
          <span className="text-xl font-serif tracking-tight text-dark">Rincón Zen</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-dark/70 uppercase tracking-widest">
          <a href="#cursos" className="hover:text-sage transition-colors">Cursos Reiki</a>
          <a href="#beneficios" className="hover:text-sage transition-colors">Beneficios</a>
          <a href="#calendario" className="hover:text-sage transition-colors">Fechas</a>
          <a href="#historia" className="hover:text-sage transition-colors">¿Por qué enseño Reiki?</a>
          <a href="#contacto" className="hover:text-sage transition-colors">Contacto</a>
        </div>
      </div>
    </nav>
  );
};
const Hero = () => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden bg-light">
    <div className="absolute inset-0 z-0 opacity-20">
      <img 
        src="https://images.unsplash.com/photo-1542640244-7e672d6cef4e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="Sakura" 
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="relative z-10 text-center max-w-3xl px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-sage font-medium tracking-[0.3em] uppercase text-xs mb-4 block">Reiki Tradicional Japonés</span>
        <h1 className="text-5xl md:text-7xl font-serif text-dark mb-6 leading-tight">
          Reiki, un camino de ida <br /> <span className="italic text-sage">a una vida más plena</span>
        </h1>
        <p className="text-dark/80 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
          Aprendé a trabajar con la energía de forma consciente, a través de tus manos. 
          Cursos presenciales en Boedo y Lanús Oeste.
        </p>
      </motion.div>
    </div>
    <motion.div 
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 text-dark/30"
    >
      <ChevronDown className="w-6 h-6" />
    </motion.div>
  </section>
);

const WhyTeachSection = () => (
  <section id="historia" className="py-24 bg-beige/30">
    <div className="max-w-4xl mx-auto px-6">
      <div className="text-center mb-12">
        <span className="text-sage font-medium tracking-[0.2em] uppercase text-xs mb-4 block">Mi Camino</span>
        <h2 className="text-4xl md:text-5xl font-serif text-dark mb-6">¿Por qué enseño Reiki?</h2>
      </div>
      <div className="bg-beige p-10 md:p-16 rounded-3xl shadow-sm border border-dark/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-2 h-full bg-sage opacity-40"></div>
        <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
          <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0 rounded-2xl overflow-hidden shadow-md">
            <img 
              src="https://picsum.photos/seed/marina/400/400" 
              alt="Marina Rabino" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="space-y-6 text-dark/80 text-lg leading-relaxed italic flex-grow">
            <p>
              "Llegué a Reiki en uno de los momentos más difíciles de mi vida, atravesando ansiedad, ataques de pánico y mucho estrés. Sentía que algo tenía que cambiar, aunque no sabía bien cómo.
            </p>
            <p>
              Sin tener conocimientos previos, decidí probar. Esa primera sesión fue un punto de inflexión: no solo por lo que sentí, sino por lo que entendí después. Que el verdadero cambio dependía de mí.
            </p>
            <p>
              A partir de ahí, comencé a formarme y a transitar un camino de transformación personal que me llevó, con el tiempo, a enseñar.
            </p>
            <p>
              Hoy enseño Reiki desde ese lugar: no como una promesa, sino como una herramienta real de autoconocimiento y equilibrio. Porque lo viví, y porque sé que, con compromiso, las cosas pueden cambiar."
            </p>
            <div className="not-italic pt-4 text-right">
              <p className="font-serif text-xl text-dark">Marina Rabino</p>
              <p className="text-sage text-sm font-medium uppercase tracking-widest">Fundadora de Rincón Zen</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const LocationCard = ({ title, dates, location, description }: any) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-beige p-8 rounded-3xl shadow-sm border border-dark/5 flex flex-col h-full"
  >
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 bg-light rounded-xl flex items-center justify-center">
        <MapPin className="text-sage w-5 h-5" />
      </div>
      <h3 className="text-xl font-serif text-dark">{location}</h3>
    </div>
    {description && <p className="text-dark/60 text-sm mb-6 italic">{description}</p>}
    <div className="space-y-6 flex-grow">
      {dates.map((d: any, i: number) => (
        <div key={i} className="border-l-2 border-sage/30 pl-4 py-1 flex flex-col gap-3">
          <div>
            <div className="flex justify-between items-start">
              <p className="text-xs font-bold text-sage uppercase tracking-wider">{d.level}</p>
              {d.price && <p className="text-xs font-bold text-dark/60">{d.price}</p>}
            </div>
            <p className="text-dark/80 font-medium">{d.date} — {d.time}</p>
          </div>
          <a 
            href={d.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-light text-dark text-xs font-bold py-2 px-4 rounded-lg border border-dark/10 hover:bg-sage hover:text-light hover:border-sage transition-all"
          >
            Inscribirme al {d.level}
          </a>
        </div>
      ))}
    </div>
  </motion.div>
);

const LearnSection = () => (
  <section id="cursos" className="py-24 bg-light">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-sage font-medium tracking-[0.2em] uppercase text-xs mb-4 block">Formación Profesional</span>
          <h2 className="text-4xl md:text-5xl font-serif text-dark mb-6">Aprendé Reiki Tradicional Japonés</h2>
          <p className="text-dark/80 text-lg leading-relaxed mb-8">
            Reiki es una práctica desarrollada en Japón para trabajar con la energía de manera consciente. No requiere conocimientos previos, sino disposición para aprender y practicar.
          </p>
          <div className="space-y-6 mb-10">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-beige rounded-full flex items-center justify-center">
                <Hand className="text-sage w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif text-lg text-dark">Nivel I: El Despertar</h4>
                <p className="text-dark/60 text-sm">Aprendé a canalizar en forma consciente energía de alta vibración para vos, tus seres queridos, animales, plantas y proyectos.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-beige rounded-full flex items-center justify-center">
                <GraduationCap className="text-sage w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif text-lg text-dark">Nivel II: La Transformación</h4>
                <p className="text-dark/60 text-sm">Profundizá tu práctica con los 3 símbolos de Reiki que nos enseñó Mikao Usui, saná a distancia y experimentá con la caja Reiki.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-beige rounded-full flex items-center justify-center">
                <Sparkles className="text-sage w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif text-lg text-dark">Nivel III: Maestría Interior</h4>
                <p className="text-dark/60 text-sm">Último nivel de Reiki, preparación para quienes deseen hacer un profundo trabajo interior.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1707858565719-f94857adb9cc?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Sun and Hands" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-sage text-light p-8 rounded-2xl shadow-xl hidden lg:block">
            <p className="text-sm opacity-90 uppercase tracking-widest mb-2 text-light/80">Próximas fechas</p>
            <p className="text-3xl font-serif">Abril 2026</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const BenefitsSection = () => (
  <section id="beneficios" className="py-24 bg-beige">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-sage font-medium tracking-[0.2em] uppercase text-xs mb-4 block">Beneficios Exclusivos</span>
        <h2 className="text-4xl md:text-5xl font-serif text-dark mb-6">Lo que incluye tu formación</h2>
        <p className="text-dark/70">
          Queremos que tu experiencia sea completa y que tengas todo lo necesario para integrar Reiki en tu vida.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { title: "Refrigerio cuidado", desc: "Break saludable para personas con alguna intolerancia alimentaria." },
          { title: "Grupo pequeño", desc: "Grupos reducidos para una enseñanza personalizada y cercana." },
          { title: "Material en PDF", desc: "Manuales completos y guías de estudio descargables." },
          { title: "Audios", desc: "Meditaciones guiadas y material sonoro de apoyo." },
          { title: "App exclusiva", desc: "Acceso a nuestra aplicación para realizar tus prácticas diarias." },
          { title: "Certificado", desc: "Aval de tu formación en el linaje Tradicional Japonés." },
          { title: "Repetir sin cargo", desc: "Podés volver a cursar el mismo nivel cuando quieras, sin costo extra." },
          { title: "Acompañamiento", desc: "Seguimiento y soporte luego del curso para acompañarte en tu proceso." },
          { title: "Enfoque tradicional", desc: "Enseñanza basada en Reiki tradicional japonés, sin agregados ni adaptaciones modernas." }
        ].map((benefit, i) => (
          <div key={i} className="bg-light p-8 rounded-2xl shadow-sm border border-dark/5">
            <div className="w-10 h-10 bg-beige rounded-full flex items-center justify-center mb-4">
              <Sparkles className="text-sage w-5 h-5" />
            </div>
            <h4 className="text-lg font-serif text-dark mb-2">{benefit.title}</h4>
            <p className="text-dark/60 text-sm">{benefit.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CalendarSection = () => (
  <section id="calendario" className="py-24 bg-light">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-sage font-medium tracking-[0.2em] uppercase text-xs mb-4 block">Cronograma de Clases</span>
        <h2 className="text-4xl md:text-5xl font-serif text-dark mb-6">Elegí tu lugar y fecha</h2>
        <p className="text-dark/70">
          Dictamos los cursos en espacios armonizados para que tu experiencia sea única. 
          Anotate con tiempo, los cupos son limitados.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <LocationCard 
          location="Boedo (CABA)"
          dates={[
            { 
              level: "Nivel I", 
              date: "11 de Abril", 
              time: "14:00 a 20:00 hs",
              price: "$55.000",
              link: "https://www.rinconzen.com.ar/events/caba-reiki-nivel-i-linaje-tradicional-japones-11-de-abril"
            },
            { 
              level: "Nivel II", 
              date: "25 de Abril", 
              time: "14:00 a 20:00 hs",
              price: "$60.000",
              link: "https://www.rinconzen.com.ar/events/caba-reiki-nivel-ii-linaje-tradicional-japones-sabado-25-de-abril"
            }
          ]}
        />
        <LocationCard 
          location="Lanús Oeste (Lanusita)"
          dates={[
            { 
              level: "Nivel I", 
              date: "18 de Abril", 
              time: "14:00 a 20:00 hs",
              price: "$55.000",
              link: "https://www.rinconzen.com.ar/events/lanus-oeste-reiki-nivel-i-linaje-tradicional-japones-18-de-abril-lanus-oeste"
            },
            { 
              level: "Nivel II", 
              date: "2 de Mayo", 
              time: "14:00 a 20:00 hs",
              price: "$60.000",
              link: "https://www.rinconzen.com.ar/events/lanus-oeste-reiki-nivel-ii-linaje-tradicional-japones-sabado-2-de-mayo"
            }
          ]}
        />
      </div>
    </div>
  </section>
);

const Footer = () => {
  const [modalContent, setModalContent] = useState<{ title: string; text: string } | null>(null);

  const privacyText = `En Rincón Zen valoramos y respetamos tu privacidad.

Los datos personales que compartas (como nombre, email o teléfono) serán utilizados únicamente para brindarte información sobre nuestros cursos, responder consultas o mejorar tu experiencia.

No compartimos, vendemos ni cedemos tu información a terceros.

Podremos utilizar herramientas de análisis (como cookies) para entender cómo navegás en el sitio y mejorar nuestros contenidos.

Podés solicitar en cualquier momento la actualización o eliminación de tus datos escribiéndonos.

Al utilizar este sitio, aceptás esta política de privacidad.`;

  const termsText = `Al acceder a este sitio y participar de nuestras propuestas, aceptás los siguientes términos:

Los contenidos ofrecidos (cursos, materiales, textos) tienen fines educativos y de desarrollo personal.
Reiki es una práctica complementaria y no reemplaza la atención médica, psicológica ni otros tratamientos profesionales.
Cada persona es responsable de su propio proceso y de la aplicación de lo aprendido.
Nos reservamos el derecho de actualizar contenidos, fechas o condiciones de los cursos cuando sea necesario.
La participación en las actividades implica el respeto hacia el espacio, los docentes y los demás participantes.

El uso de este sitio implica la aceptación de estos términos.`;

  return (
    <footer id="contacto" className="bg-dark text-light/80 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="text-sage w-6 h-6" />
              <span className="text-2xl font-serif tracking-tight text-light">Rincón Zen</span>
            </div>
            <p className="max-w-md mb-8 leading-relaxed">
              Acompañándote en tu camino de crecimiento. Queremos darte herramientas reales para que te reconectes con tu bienestar y lo expandas hacia quienes forman parte de tu vida.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/rinconzen_reiki/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-light/20 flex items-center justify-center hover:bg-sage hover:border-sage hover:text-light transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="mailto:info@rinconzen.com.ar" className="w-10 h-10 rounded-full border border-light/20 flex items-center justify-center hover:bg-sage hover:border-sage hover:text-light transition-all">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-light font-medium mb-6 uppercase tracking-widest text-sm">Navegación</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="https://www.rinconzen.com.ar/aprender" className="hover:text-sage transition-colors">Cursos Reiki</a></li>
              <li><a href="https://www.rinconzen.com.ar/calendario" className="hover:text-sage transition-colors">Fechas y Sedes</a></li>
              <li><a href="https://wa.me/5491149801624" className="hover:text-sage transition-colors">Consultas WhatsApp</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-light font-medium mb-6 uppercase tracking-widest text-sm">Sedes</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3"><MapPin className="w-4 h-4" /> Boedo, CABA</li>
              <li className="flex items-center gap-3"><MapPin className="w-4 h-4" /> Lanús Oeste, Lanusita</li>
              <li className="flex items-center gap-3"><Mail className="w-4 h-4" /> info@rinconzen.com.ar</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-light/10 text-xs flex flex-col md:flex-row justify-between gap-4">
          <p>© {new Date().getFullYear()} Rincón Zen. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <button onClick={() => setModalContent({ title: 'Privacidad', text: privacyText })} className="hover:text-light transition-colors cursor-pointer">Privacidad</button>
            <button onClick={() => setModalContent({ title: 'Términos', text: termsText })} className="hover:text-light transition-colors cursor-pointer">Términos</button>
          </div>
        </div>
      </div>

      {modalContent && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-dark/90 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-light rounded-3xl p-8 md:p-12 max-w-2xl w-full max-h-[80vh] overflow-y-auto relative"
          >
            <button 
              onClick={() => setModalContent(null)}
              className="absolute top-6 right-6 text-dark/40 hover:text-dark transition-colors"
            >
              <ChevronDown className="w-6 h-6 rotate-180" />
            </button>
            <h3 className="text-3xl font-serif text-dark mb-8">{modalContent.title}</h3>
            <div className="text-dark/70 whitespace-pre-wrap leading-relaxed">
              {modalContent.text}
            </div>
            <button 
              onClick={() => setModalContent(null)}
              className="mt-10 w-full bg-dark text-light py-4 rounded-full font-medium hover:bg-dark/90 transition-all"
            >
              Cerrar
            </button>
          </motion.div>
        </div>
      )}
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-sage/30 selection:text-dark">
      <Navbar />
      <main>
        <Hero />
        <LearnSection />
        <BenefitsSection />
        <CalendarSection />
        <WhyTeachSection />
        <section className="py-24 bg-sage text-light overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
             <Sparkles className="w-full h-full -rotate-12 translate-x-1/4" />
          </div>
          <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-serif mb-8">¿Tenés dudas? Consultanos</h2>
            <p className="text-light/90 text-lg mb-10 max-w-2xl mx-auto">
              Escribinos por WhatsApp para recibir asesoramiento personalizado sobre los cursos de Reiki Tradicional Japonés.
            </p>
            <a 
              href="https://wa.me/5491149801624?text=Hola!%20Me%20interesa%20consultar%20por%20los%20cursos%20de%20Reiki." 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-light text-dark px-10 py-4 rounded-full font-bold hover:bg-beige transition-all shadow-xl"
            >
              Consultar por WhatsApp
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
