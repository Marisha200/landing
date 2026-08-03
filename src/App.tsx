/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { GraduationCap, Sparkles, ArrowRight, Instagram, Mail, MapPin, ChevronDown, Hand, X, CheckCircle, Smartphone, User, MessageCircle, Moon } from "lucide-react";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-light/95 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#inicio" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full border border-sage/40 flex items-center justify-center">
            <Moon className="text-sage w-4 h-4" />
          </div>
          <div>
            <span className="text-xl font-serif tracking-[0.08em] text-dark block leading-none">Rincón Zen</span>
            <span className="text-[9px] uppercase tracking-[0.28em] text-dark/45">Spa para el alma</span>
          </div>
        </a>

        <div className="hidden md:flex gap-7 text-[11px] font-medium text-dark/65 uppercase tracking-[0.16em] items-center">
          <a href="#calendario" className="hover:text-sage transition-colors">Agosto</a>
          <a href="#cursos" className="hover:text-sage transition-colors">Reiki</a>
          <a href="#beneficios" className="hover:text-sage transition-colors">La experiencia</a>
          <a href="#historia" className="hover:text-sage transition-colors">Sobre mí</a>
          <a href="#contacto" className="hover:text-sage transition-colors">Contacto</a>
          <a
            href="https://wa.me/5491149801624?text=Hola!%20Quisiera%20consultar%20por%20las%20actividades%20de%20agosto%20de%20Rinc%C3%B3n%20Zen."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-sage text-light px-5 py-3 rounded-full text-[10px] font-bold hover:bg-[#7a846c] transition-all flex items-center gap-2 shadow-md"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-light">
    <div className="absolute inset-0 z-0">
      <img
        src="https://images.unsplash.com/photo-1542640244-7e672d6cef4e?q=85&w=1800&auto=format&fit=crop"
        alt="Paisaje japonés sereno"
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1f211b]/90 via-[#283025]/65 to-[#283025]/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1f211b]/45 via-transparent to-transparent" />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pt-28 pb-16 grid lg:grid-cols-[1.15fr_0.55fr] gap-12 items-end">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="max-w-3xl"
      >
        <span className="text-beige font-medium tracking-[0.35em] uppercase text-xs mb-6 block">Calendario · Agosto 2026</span>
        <h1 className="text-6xl md:text-8xl font-serif text-light mb-7 leading-[0.94] tracking-tight">
          Agosto en <br /> <span className="italic text-beige">Rincón Zen</span>
        </h1>
        <p className="text-light/85 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl">
          Aprender también puede ser una forma de volver a vos. Encuentros, oráculos y formación en Reiki Tradicional Japonés, con contenido profundo y práctica real.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#calendario" className="inline-flex items-center justify-center bg-light text-dark px-8 py-4 rounded-full font-bold hover:bg-beige transition-all shadow-xl">
            Ver calendario de agosto
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
          <a
            href="https://wa.me/5491149801624?text=Hola!%20Quisiera%20consultar%20por%20las%20actividades%20de%20agosto%20de%20Rinc%C3%B3n%20Zen."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border border-light/40 bg-dark/20 text-light px-8 py-4 rounded-full font-bold hover:bg-light/10 transition-all backdrop-blur-sm"
          >
            <MessageCircle className="mr-2 w-5 h-5" />
            Consultar por WhatsApp
          </a>
        </div>
      </motion.div>

      <motion.aside
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="hidden lg:block bg-light/90 backdrop-blur-md p-8 rounded-[2rem] border border-light/50 shadow-2xl"
      >
        <Sparkles className="w-6 h-6 text-sage mb-5" />
        <p className="font-serif text-2xl text-dark leading-snug mb-4">“Hoy no hace falta entender todo. Alcanzará con dar un paso.”</p>
        <p className="text-[10px] text-sage font-bold uppercase tracking-[0.24em]">Omikuji del día</p>
      </motion.aside>
    </div>

    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 text-light/50 z-10"
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
          <div className="w-48 h-48 md:w-56 md:h-56 flex-shrink-0 rounded-full overflow-hidden shadow-2xl border-4 border-white">
            <img 
              src="/marina.jpg" 
              alt="Marina Rabino" 
              className="w-full h-full object-cover"
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

type EventCardProps = {
  day: string;
  title: string;
  time: string;
  location: string;
  description: string;
  price: string;
  image: string;
  link: string;
  promo?: string;
  extra?: string;
};

const EventCard = ({ day, title, time, location, description, price, image, link, promo, extra }: EventCardProps) => (
  <motion.article
    whileHover={{ y: -6 }}
    transition={{ duration: 0.25 }}
    className="bg-light border border-dark/10 shadow-sm overflow-hidden flex flex-col h-full"
  >
    <div className="relative h-56 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        referrerPolicy="no-referrer"
      />
      <div className="absolute top-0 left-0 bg-sage text-light px-5 py-4 text-center min-w-[76px]">
        <span className="block text-[10px] tracking-[0.22em] uppercase">Vie</span>
        <span className="block text-4xl font-serif leading-none my-1">{day}</span>
        <span className="block text-[10px] tracking-[0.22em] uppercase">Ago</span>
      </div>
    </div>

    <div className="p-7 flex flex-col flex-grow">
      <h3 className="text-3xl font-serif text-dark mb-3">{title}</h3>
      <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-dark/60 mb-6">
        <span className="flex items-center gap-2"><Sparkles className="w-3.5 h-3.5 text-sage" /> {time}</span>
        <span className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-sage" /> {location}</span>
      </div>

      <p className="text-dark/70 leading-relaxed mb-7">{description}</p>

      <div className="mt-auto space-y-4">
        <div className="bg-beige/55 border border-dark/5 px-5 py-4">
          <p className="text-sm text-dark/70">Valor: <strong className="text-dark text-base">{price}</strong></p>
          {promo && <p className="text-sm text-[#9a6a29] mt-1">{promo}</p>}
        </div>

        {extra && (
          <div className="flex items-start gap-3 border border-dark/10 px-5 py-4 text-sm text-dark/70">
            <Sparkles className="w-4 h-4 text-[#b4863e] mt-0.5 flex-shrink-0" />
            <span>{extra}</span>
          </div>
        )}

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center bg-sage text-light px-6 py-4 text-xs font-bold uppercase tracking-[0.08em] hover:bg-[#7a846c] transition-all"
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          Reservar por WhatsApp
        </a>
      </div>
    </div>
  </motion.article>
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
            <p className="text-3xl font-serif">Agosto 2026</p>
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
  <section id="calendario" className="py-24 bg-[#fbf8f2]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="text-sage font-medium tracking-[0.26em] uppercase text-xs mb-4 block">Calendario</span>
        <h2 className="text-5xl md:text-6xl font-serif text-dark mb-5">Encuentros de Agosto</h2>
        <div className="w-10 h-px bg-sage mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
        <EventCard
          day="08"
          title="Encuentro Oracular"
          time="15 a 20 hs"
          location="Caballito"
          description="Una tarde para abrir los oráculos, escucharte y descubrir nuevas formas de leer tu propio camino a través del Tarot y la Numerología."
          price="$50.000"
          promo="Promoción abonando hasta el 6/8: $40.000"
          extra="Se entrega e-book y cuadernillo interactivo para continuar explorando en casa."
          image="https://images.unsplash.com/photo-1601556428518-144e9d6f5ad9?q=85&w=1200&auto=format&fit=crop"
          link="https://wa.me/5491149801624?text=Hola!%20Me%20interesa%20reservar%20mi%20lugar%20para%20el%20Encuentro%20Oracular%20del%208%20de%20agosto%20en%20Caballito."
        />

        <EventCard
          day="22"
          title="Reiki Nivel I"
          time="14 a 20 hs"
          location="Boedo (CABA)"
          description="El inicio de un camino de práctica y transformación personal desde las raíces del Reiki Tradicional Japonés."
          price="$55.000"
          image="https://images.unsplash.com/photo-1545048702-79362596cdc9?q=85&w=1200&auto=format&fit=crop"
          link="https://wa.me/5491149801624?text=Hola!%20Me%20interesa%20reservar%20mi%20lugar%20para%20el%20Nivel%20I%20de%20Reiki%20del%2022%20de%20agosto%20en%20Boedo."
        />

        <EventCard
          day="29"
          title="Reiki Nivel I"
          time="14 a 20 hs"
          location="Lanús Oeste"
          description="Una formación intensiva, práctica y cercana para comenzar a integrar Reiki en tu vida cotidiana."
          price="$55.000"
          image="https://images.unsplash.com/photo-1611071536600-51d71142b25e?q=85&w=1200&auto=format&fit=crop"
          link="https://wa.me/5491149801624?text=Hola!%20Me%20interesa%20reservar%20mi%20lugar%20para%20el%20Nivel%20I%20de%20Reiki%20del%2029%20de%20agosto%20en%20Lan%C3%BAs%20Oeste."
        />
      </div>

      <div className="mt-10 text-center">
        <a
          href="https://wa.me/5491149801624?text=Hola!%20Quisiera%20hacer%20una%20consulta%20sobre%20las%20actividades%20de%20agosto%20de%20Rinc%C3%B3n%20Zen."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-[#9a6a29] font-medium hover:text-dark transition-colors"
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          Consultas generales por WhatsApp
          <ArrowRight className="w-4 h-4 ml-3" />
        </a>
      </div>
    </div>
  </section>
);

const GiftModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    recipientName: '',
    message: '',
    buyerName: '',
    buyerEmail: '',
    buyerPhone: '+54 9 '
  });
  const [phoneError, setPhoneError] = useState(false);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    
    // Always maintain prefix
    if (!value.startsWith('+54 9 ')) {
      value = '+54 9 ' + value.replace(/^\+54 9\s*/, '');
    }

    // Get only digits after the prefix, max 11 digits
    const suffix = value.slice(6).replace(/\D/g, '').slice(0, 11);
    
    // Format based on digits
    let formattedSuffix = '';
    if (suffix.length > 0) {
      // Check if it's a 2-digit or 3-digit area code (based on user's manual entry)
      // We'll support the format: [2-3 digits] [4 digits] [4 digits]
      
      // First chunk: 2nd or 3rd digit determines if we should space after 2 or 3
      // But user specifically wants us to allow 2 or 3 then 4 then 4.
      // Let's try to detect if they typed more than 2 digits.
      
      const chunk1 = suffix.slice(0, 3);
      const chunk2 = suffix.slice(3, 7);
      const chunk3 = suffix.slice(7, 11);
      
      // If the user has typed 11 digits total (3+4+4), we use the 3-digit area code format
      // Otherwise we default to 2-digit area code if they typed 10 digits
      // However, it's easier to just follow the flow: 
      // We'll allow up to 11 digits total in suffix.
      
      if (suffix.length <= 10) {
        // Assume 2-digit area code (like 11) for common case
        const area = suffix.slice(0, 2);
        const mid = suffix.slice(2, 6);
        const end = suffix.slice(6, 10);
        formattedSuffix = area + (mid ? ' ' + mid : '') + (end ? ' ' + end : '');
      } else {
        // 3-digit area code
        const area = suffix.slice(0, 3);
        const mid = suffix.slice(3, 7);
        const end = suffix.slice(7, 11);
        formattedSuffix = area + (mid ? ' ' + mid : '') + (end ? ' ' + end : '');
      }
    }

    setFormData({ ...formData, buyerPhone: '+54 9 ' + formattedSuffix.trim() });
    setPhoneError(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const digitsOnly = formData.buyerPhone.replace(/\D/g, '');
    const suffixDigits = formData.buyerPhone.slice(6).replace(/\D/g, '');
    
    // Validate: suffix must be 10 or 11 digits
    if ((suffixDigits.length !== 10 && suffixDigits.length !== 11) || !formData.buyerPhone.startsWith('+54 9')) {
      setPhoneError(true);
      return;
    }
    
    setPhoneError(false);
    setStep(2);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-6 bg-dark/95 backdrop-blur-md">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-light rounded-[2.5rem] w-full max-w-2xl max-h-[90vh] overflow-y-auto relative shadow-2xl"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 w-10 h-10 bg-dark/5 hover:bg-dark/10 rounded-full flex items-center justify-center transition-all z-10"
            >
              <X className="w-5 h-5 text-dark" />
            </button>

            {step === 1 ? (
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-sage/10 rounded-2xl flex items-center justify-center">
                    <Sparkles className="text-sage w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif text-dark">Un regalo con sentido</h3>
                    <p className="text-xs text-sage font-bold uppercase tracking-widest">Voucher de Nivel I de Reiki · $55.000</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-dark/40 uppercase tracking-widest ml-1">Tu Nombre</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-dark/20" />
                        <input 
                          required
                          type="text"
                          placeholder="Juan Pérez"
                          className="w-full bg-beige/30 border border-dark/5 rounded-2xl py-4 pl-12 pr-6 focus:outline-none focus:border-sage/50 transition-all text-dark"
                          value={formData.buyerName}
                          onChange={e => setFormData({...formData, buyerName: e.target.value})}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-dark/40 uppercase tracking-widest ml-1">Tu Email</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-dark/20" />
                        <input 
                          required
                          type="email"
                          placeholder="juan@ejemplo.com"
                          className="w-full bg-beige/30 border border-dark/5 rounded-2xl py-4 pl-12 pr-6 focus:outline-none focus:border-sage/50 transition-all text-dark"
                          value={formData.buyerEmail}
                          onChange={e => setFormData({...formData, buyerEmail: e.target.value})}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-dark/40 uppercase tracking-widest ml-1">Tu Celular</label>
                    <div className="relative">
                      <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-dark/20" />
                      <input 
                        required
                        type="tel"
                        placeholder="+54 9 11 1234 5678"
                        className={`w-full bg-beige/30 border ${phoneError ? 'border-red-400' : 'border-dark/5'} rounded-2xl py-4 pl-12 pr-6 focus:outline-none focus:border-sage/50 transition-all text-dark`}
                        value={formData.buyerPhone}
                        onChange={handlePhoneChange}
                      />
                    </div>
                    {phoneError && (
                      <p className="text-[10px] text-red-500 font-medium ml-1">
                        Por favor, ingresá el número completo (+54 9 [2 o 3] [4] [4])
                      </p>
                    )}
                  </div>

                  <div className="h-px bg-dark/5 my-8"></div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-dark/40 uppercase tracking-widest ml-1">Nombre del agasajado/a</label>
                    <input 
                      required
                      type="text"
                      placeholder="Nombre de quien recibe el regalo"
                      className="w-full bg-beige/30 border border-dark/5 rounded-2xl py-4 px-6 focus:outline-none focus:border-sage/50 transition-all text-dark"
                      value={formData.recipientName}
                      onChange={e => setFormData({...formData, recipientName: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <label className="text-xs font-bold text-dark/40 uppercase tracking-widest ml-1">Mensaje para el destinatario</label>
                      <span className="text-[10px] text-dark/30">{formData.message.length}/250</span>
                    </div>
                    <textarea 
                      maxLength={250}
                      rows={3}
                      placeholder="Escribí unas palabras lindas para tu regalo..."
                      className="w-full bg-beige/30 border border-dark/5 rounded-2xl py-4 px-6 focus:outline-none focus:border-sage/50 transition-all text-dark resize-none"
                      value={formData.message}
                      onChange={e => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>

                  <div className="bg-sage/5 p-6 rounded-2xl border border-sage/10 mb-8">
                    <p className="text-xs font-bold text-sage uppercase tracking-widest mb-3">Datos para el pago</p>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between group/item">
                        <p className="text-sm text-dark/70"><strong>CBU:</strong> 0110008230000808072479</p>
                        <button 
                          type="button"
                          onClick={() => {
                            navigator.clipboard.writeText("0110008230000808072479");
                          }}
                          className="text-[10px] bg-sage/10 text-sage px-2 py-1 rounded-md opacity-0 group-hover/item:opacity-100 transition-all hover:bg-sage hover:text-light"
                        >
                          Copiar
                        </button>
                      </div>
                      <div className="flex items-center justify-between group/item">
                        <p className="text-sm text-dark/70"><strong>Alias:</strong> rincon.zen</p>
                        <button 
                          type="button"
                          onClick={() => {
                            navigator.clipboard.writeText("rincon.zen");
                          }}
                          className="text-[10px] bg-sage/10 text-sage px-2 py-1 rounded-md opacity-0 group-hover/item:opacity-100 transition-all hover:bg-sage hover:text-light"
                        >
                          Copiar
                        </button>
                      </div>
                      <p className="text-sm text-dark/70"><strong>Titular:</strong> Marina Rabino</p>
                    </div>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-sage text-light py-5 rounded-2xl font-bold hover:bg-[#7a846c] shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
                  >
                    Confirmar datos y continuar
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            ) : (
              <div className="p-10 md:p-12 text-center flex flex-col items-center">
                <div className="w-20 h-20 bg-sage rounded-full flex items-center justify-center mb-8 shadow-lg shadow-sage/20">
                  <CheckCircle className="text-light w-10 h-10" />
                </div>
                <h3 className="text-3xl font-serif text-dark mb-4">¡Todo listo, {formData.buyerName}!</h3>
                <div className="space-y-6 text-dark/70 leading-relaxed mb-10 max-w-sm">
                  <p>
                    Para completar la compra, por favor, copiá el CBU o alias. Cuando hayas realizado la transferencia, hace click en el botón de enviar comprobante por whatsapp.
                  </p>
                  <div className="bg-beige/30 p-4 rounded-xl text-left text-xs border border-dark/5 space-y-3">
                    <div className="flex items-center justify-between group/success-item">
                      <p><strong>CBU:</strong> 0110008230000808072479</p>
                      <button 
                        type="button"
                        onClick={() => navigator.clipboard.writeText("0110008230000808072479")}
                        className="text-[10px] bg-sage text-light px-2 py-1 rounded-md hover:bg-[#7a846c] transition-all font-bold shadow-sm"
                      >
                        COPIAR
                      </button>
                    </div>
                    <div className="flex items-center justify-between group/success-item">
                      <p><strong>Alias:</strong> rincon.zen</p>
                      <button 
                        type="button"
                        onClick={() => navigator.clipboard.writeText("rincon.zen")}
                        className="text-[10px] bg-sage text-light px-2 py-1 rounded-md hover:bg-[#7a846c] transition-all font-bold shadow-sm"
                      >
                        COPIAR
                      </button>
                    </div>
                    <div className="pt-2 border-t border-dark/5 space-y-1 opacity-70">
                      <p><strong>Banco:</strong> Banco Nación</p>
                      <p><strong>Titular:</strong> Marina Rabino</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4 w-full max-w-xs">
                  <a 
                    href={`https://api.whatsapp.com/send?phone=5491149801624&text=${encodeURIComponent(
                      `¡Hola! Soy ${formData.buyerName}. ` +
                      `Compré este voucher de Reiki Nivel I por $55.000 para regalarle a ${formData.recipientName}. \n\n` +
                      `Dedicatoria: \n` +
                      `"${formData.message}" \n\n` +
                      `Adjunto también el comprobante de transferencia para confirmar la reserva del voucher.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] text-white py-5 rounded-2xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
                  >
                    <Smartphone className="w-5 h-5" />
                    Enviar datos por WhatsApp
                  </a>
                  <button 
                    onClick={onClose}
                    className="text-dark/40 text-sm hover:text-dark transition-colors py-2"
                  >
                    Cerrar ventana
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const GiftSection = ({ onOpenGiftModal }: { onOpenGiftModal: () => void }) => (
  <section id="regala-bienestar" className="bg-[#f4ede2] border-y border-dark/5">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 min-h-[620px]">
      <div className="relative min-h-[460px] lg:min-h-full overflow-hidden bg-[#ddd1c0]">
        <img
          src="/voucher-rincon-zen.png"
          alt="Voucher de regalo de Rincón Zen"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#f4ede2]/20" />
      </div>

      <div className="p-10 md:p-16 lg:p-20 flex flex-col justify-center bg-[#f8f4ed]">
        <span className="text-sage font-medium tracking-[0.3em] uppercase text-xs mb-4 block">Una experiencia para recordar</span>
        <h2 className="text-4xl md:text-6xl font-serif text-dark mb-6">Un regalo con sentido</h2>
        <div className="space-y-6 text-dark/80 text-lg leading-relaxed mb-10">
          <p className="italic font-serif text-2xl border-l-4 border-sage/30 pl-6 py-2">
            “Hay regalos que no ocupan espacio, pero permanecen.”
          </p>
          <p>
            Podés obsequiar el Nivel I de Reiki con un voucher personalizado por $55.000. Coordinamos todo por WhatsApp y te enviamos la pieza lista para regalar.
          </p>
          <ul className="space-y-4 text-base">
            <li className="flex items-center gap-3"><Sparkles className="w-4 h-4 text-sage" /> Sin fecha de vencimiento.</li>
            <li className="flex items-center gap-3"><MapPin className="w-4 h-4 text-sage" /> Válido para los cursos brindados en Boedo.</li>
            <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-sage" /> Voucher personalizado con dedicatoria.</li>
            <li className="flex items-center gap-3"><Sparkles className="w-4 h-4 text-sage" /> Valor del voucher: <strong className="text-dark">$55.000</strong>.</li>
          </ul>
        </div>

        <button
          onClick={onOpenGiftModal}
          className="inline-flex items-center justify-center bg-sage text-light px-10 py-5 rounded-xl font-bold hover:bg-[#7a846c] hover:shadow-xl hover:-translate-y-0.5 transition-all shadow-md group"
        >
          <MessageCircle className="mr-2 w-5 h-5" />
          Crear voucher de regalo
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>

        <a
          href="https://wa.me/5491149801624?text=Hola!%20Quisiera%20consultar%20por%20el%20voucher%20para%20regalar%20el%20Nivel%20I%20de%20Reiki."
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 text-center lg:text-left text-sm font-bold text-sage hover:text-dark transition-colors"
        >
          Prefiero consultar primero por WhatsApp →
        </a>
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
              <a href="https://wa.me/5491149801624?text=Hola!%20Quisiera%20consultar%20por%20Rinc%C3%B3n%20Zen." target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-light/20 flex items-center justify-center hover:bg-sage hover:border-sage hover:text-light transition-all" aria-label="WhatsApp">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="mailto:info@rinconzen.com.ar" className="w-10 h-10 rounded-full border border-light/20 flex items-center justify-center hover:bg-sage hover:border-sage hover:text-light transition-all" aria-label="Correo electrónico">
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
  const [isGiftModalOpen, setIsGiftModalOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans selection:bg-sage/30 selection:text-dark">
      <Navbar />
      <main>
        <Hero />
        <CalendarSection />
        <LearnSection />
        <BenefitsSection />
        <GiftSection onOpenGiftModal={() => setIsGiftModalOpen(true)} />
        <WhyTeachSection />
        <section className="py-24 bg-sage text-light overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
             <Sparkles className="w-full h-full -rotate-12 translate-x-1/4" />
          </div>
          <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-serif mb-8">¿Tenés dudas? Consultanos</h2>
            <p className="text-light/90 text-lg mb-10 max-w-2xl mx-auto">
              Escribinos por WhatsApp para consultar vacantes, formas de reserva o cuál de las propuestas de agosto puede acompañarte mejor.
            </p>
            <a 
              href="https://wa.me/5491149801624?text=Hola!%20Quisiera%20consultar%20por%20las%20actividades%20de%20agosto%20de%20Rinc%C3%B3n%20Zen." 
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
      <GiftModal isOpen={isGiftModalOpen} onClose={() => setIsGiftModalOpen(false)} />
    </div>
  );
}
