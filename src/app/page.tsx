"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Flame,
  Zap,
  GraduationCap,
  ExternalLink,
  MessageCircle,
  Mail,
  Menu,
  X,
  ChevronRight,
  Trophy,
  Award,
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  Users,
} from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const projects = [
    {
      title: "Flybondi – #NoTeDibujesLaRaya",
      client: "Flybondi",
      category: "Campaña / Activación / PR",
      image: "/flybondi.jpg",
      link: "https://www.behance.net/gallery/86034619/NoTeDibujesLaRaya",
      accent: "from-amber-500/20 to-yellow-500/5",
    },
    {
      title: "Banco Provincia del Neuquén – Acá está tu banco",
      client: "BPN",
      category: "Campaña Integral / Banca",
      image: "/bpn.jpg",
      link: "https://www.behance.net/gallery/87702101/Banco-Provincial-del-Neuqun",
      accent: "from-blue-500/20 to-cyan-500/5",
    },
    {
      title: "PlayStation – Children's Day",
      client: "Sony PlayStation",
      category: "Campaña / Gaming",
      image: "/playstation.jpg",
      link: "https://www.behance.net/gallery/125932763/Playstation-Childrens-Day",
      accent: "from-indigo-500/20 to-purple-500/5",
    },
    {
      title: "Coco's Capital – Santi Manotea",
      client: "Coco's Capital",
      category: "PR / Contenido / FinTech",
      image: "/cocos.png",
      link: "https://www.behance.net/gallery/241343073/Santi-Manotea",
      accent: "from-emerald-500/20 to-teal-500/5",
    },
  ];

  const credentials = [
    { label: "+20 años en publicidad", icon: Trophy },
    { label: "10 años como dupla", icon: Users },
    { label: "Docentes en La Escuelita de Creativos", icon: GraduationCap },
    { label: "Premios: Cannes, Effie, Lápiz de Platino, Círculo de Creativos", icon: Award },
  ];

  const solutions = [
    {
      title: "Rescate de Cuentas",
      subtitle: "Renovación de aire estratégico & creativo",
      description:
        "Cuando en la agencia ya se recorrieron todos los caminos internos y el cliente necesita una idea fresca que vuelva a enamorarlo de la agencia.",
      icon: Flame,
      tag: "SOLUCIÓN 01",
      badge: "Inyección de Ideas",
    },
    {
      title: "Sprints de Pitch",
      subtitle: "Refuerzo senior de alto impacto",
      description:
        "Refuerzo senior de choque para licitaciones decisivas donde hay que salir a ganar sin sobrecargar la estructura fija del equipo.",
      icon: Zap,
      tag: "SOLUCIÓN 02",
      badge: "Licitaciones & P pitches",
    },
    {
      title: "Potenciar al Equipo",
      subtitle: "Mentoría en el campo de juego",
      description:
        "Trasladamos la experiencia docente de La Escuelita: coacheamos y elevamos el estándar de los talentos juniors y semiseniores mientras sacamos el brief adelante.",
      icon: GraduationCap,
      tag: "SOLUCIÓN 03",
      badge: "Coaching & Mentoring",
    },
  ];

  return (
    <div className="relative bg-[#0B0B0D] text-gray-100 min-h-screen selection:bg-[#D4FF00] selection:text-black">
      {/* Background Decorative Glow Elements */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-[#D4FF00]/10 via-transparent to-transparent blur-3xl opacity-50" />
      <div className="pointer-events-none absolute top-1/3 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/4 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />

      {/* A. HEADER / NAVEGACIÓN (Sticky + Backdrop Blur) */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0B0B0D]/80 border-b border-white/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logotipo / Identidad */}
          <a
            href="#"
            className="group flex items-center space-x-3 transition-opacity hover:opacity-90"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#D4FF00] to-lime-400 text-black flex items-center justify-center font-black text-lg tracking-tighter shadow-lg shadow-[#D4FF00]/20 group-hover:scale-105 transition-transform duration-300">
              B&M
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-white tracking-tight leading-none group-hover:text-[#D4FF00] transition-colors">
                Bermúdez & Montefusco
              </span>
              <span className="text-xs text-neutral-400 tracking-wider uppercase mt-1 flex items-center gap-1.5 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00] animate-pulse" />
                Dupla DC Freelance
              </span>
            </div>
          </a>

          {/* Desktop Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#casos"
              className="text-sm font-medium text-neutral-300 hover:text-[#D4FF00] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#D4FF00] hover:after:w-full after:transition-all"
            >
              Casos
            </a>
            <a
              href="#propuesta"
              className="text-sm font-medium text-neutral-300 hover:text-[#D4FF00] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#D4FF00] hover:after:w-full after:transition-all"
            >
              Propuesta
            </a>
            <a
              href="#dupla"
              className="text-sm font-medium text-neutral-300 hover:text-[#D4FF00] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#D4FF00] hover:after:w-full after:transition-all"
            >
              Dupla
            </a>
          </nav>

          {/* CTA Directo (WhatsApp) */}
          <div className="hidden md:flex items-center">
            <a
              href="https://wa.me/5491155146718"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-black bg-[#D4FF00] rounded-full overflow-hidden shadow-lg shadow-[#D4FF00]/20 hover:shadow-[#D4FF00]/40 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-black fill-black" />
                Hablemos
              </span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Alternar navegación"
            className="md:hidden p-2 text-neutral-300 hover:text-white rounded-lg bg-white/5 border border-white/10"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0B0B0D]/95 border-b border-white/10 px-4 pt-4 pb-6 space-y-4 backdrop-blur-2xl">
            <a
              href="#casos"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-neutral-200 hover:text-[#D4FF00] hover:bg-white/5 rounded-lg"
            >
              Casos
            </a>
            <a
              href="#propuesta"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-neutral-200 hover:text-[#D4FF00] hover:bg-white/5 rounded-lg"
            >
              Propuesta
            </a>
            <a
              href="#dupla"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-neutral-200 hover:text-[#D4FF00] hover:bg-white/5 rounded-lg"
            >
              Dupla
            </a>
            <a
              href="https://wa.me/5491155146718"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full mt-4 px-5 py-3 text-xs font-bold uppercase tracking-wider text-black bg-[#D4FF00] rounded-full text-center"
            >
              <MessageCircle className="w-4 h-4 fill-black" />
              Hablemos por WhatsApp
            </a>
          </div>
        )}
      </header>

      <main>
        {/* B. HERO SECTION (Tesis de Impacto) */}
        <section className="relative pt-16 pb-20 md:pt-28 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Tag Superior */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/15 backdrop-blur-md shadow-inner">
              <Sparkles className="w-4 h-4 text-[#D4FF00]" />
              <span className="text-xs font-mono font-semibold tracking-widest text-[#D4FF00] uppercase">
                DUPLA CREATIVA
              </span>
            </div>

            {/* Headline Principal */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08] font-sans uppercase">
              Directores Creativos{" "}
              <span className="bg-gradient-to-r from-[#D4FF00] via-lime-300 to-emerald-400 bg-clip-text text-transparent block sm:inline">
                Freelance
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-2xl text-neutral-300 max-w-3xl mx-auto leading-relaxed font-normal">
              Llegamos a tu agencia para destrabar cuentas mesetadas, ganar licitaciones decisivas
              y aportar ideas de alto voltaje.{" "}
              <strong className="text-white font-semibold">
                Sin egos y jugando en equipo.
              </strong>
            </p>

            {/* Barra de credenciales / Social Proof */}
            <div className="pt-14 border-t border-white/10 mt-16">
              <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-6">
                TRAYECTORIA & RECONOCIMIENTOS
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
                {credentials.map((cred, idx) => {
                  const IconComp = cred.icon;
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-[#18181C]/60 border border-white/10 flex flex-col items-center justify-center text-center gap-2 hover:border-[#D4FF00]/40 transition-colors"
                    >
                      <IconComp className="w-5 h-5 text-[#D4FF00]" />
                      <span className="text-xs sm:text-sm font-medium text-neutral-200 leading-snug">
                        {cred.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* C. QUÉ RESOLVEMOS (El "Squad Creativo") */}
        <section id="propuesta" className="py-20 md:py-28 bg-[#0F0F12] border-y border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#D4FF00] font-semibold">
                [ QUÉ RESOLVEMOS ]
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                El Squad Creativo Freelance para tu Agencia
              </h2>
              <p className="text-base sm:text-lg text-neutral-400">
                Flexibilidad senior de choque cuando la exigencia del negocio demanda resultados
                inmediatos.
              </p>
            </div>

            {/* 3 Tarjetas con diseño limpio */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {solutions.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={idx}
                    className="glass-card group relative p-8 rounded-2xl flex flex-col justify-between overflow-hidden"
                  >
                    {/* Top gradient glow on hover */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4FF00] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#D4FF00]/50 group-hover:bg-[#D4FF00]/10 transition-all duration-300">
                          <IconComp className="w-7 h-7 text-[#D4FF00]" />
                        </div>
                        <span className="text-xs font-mono text-neutral-500 font-semibold">
                          {item.tag}
                        </span>
                      </div>

                      <div>
                        <div className="inline-block px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider bg-[#D4FF00]/10 text-[#D4FF00] rounded mb-3 border border-[#D4FF00]/20">
                          {item.badge}
                        </div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-[#D4FF00] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-xs font-mono text-neutral-400 mt-1">
                          {item.subtitle}
                        </p>
                      </div>

                      <p className="text-sm text-neutral-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-white/5 flex items-center text-xs font-semibold text-[#D4FF00] gap-2">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Solución Senior Garantizada</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* D. TRABAJOS SELECCIONADOS (Showcase de 4 Casos) */}
        <section id="casos" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#D4FF00] font-semibold">
                [ PORTFOLIO ]
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                Trabajos Seleccionados
              </h2>
            </div>
            <p className="text-sm sm:text-base text-neutral-400 max-w-md">
              Ideas potentes, estrategia y ejecución integral para marcas líderes de la región.
            </p>
          </div>

          {/* Grilla visual de 2 columnas (4 proyectos destacados) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group glass-card rounded-2xl overflow-hidden flex flex-col justify-between border border-white/10"
              >
                {/* Media Container */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-900">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    priority={idx < 2}
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#18181C] via-transparent to-transparent opacity-80" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 text-xs font-mono font-medium text-white bg-black/75 backdrop-blur-md rounded-full border border-white/20">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow space-y-6">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#D4FF00] font-bold">
                      Cliente: {project.client}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mt-2 group-hover:text-[#D4FF00] transition-colors leading-snug">
                      {project.title}
                    </h3>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs text-neutral-400 font-mono">
                      Ver en Behance
                    </span>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-white/10 hover:bg-[#D4FF00] hover:text-black rounded-lg transition-all duration-300"
                    >
                      <span>Ver Caso</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Cierre de Trabajos: Banner Full Width */}
          <div className="mt-16">
            <a
              href="https://www.behance.net/bermudezmontefusco"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-[#18181C] via-[#22222a] to-[#18181C] border border-white/15 hover:border-[#D4FF00]/50 transition-all duration-500 overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4FF00]/5 via-transparent to-[#D4FF00]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#D4FF00]">
                    ARCHIVO COMPLETO DE PROYECTOS
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    Explorá el archivo completo de campañas y premios en nuestro Behance
                  </h3>
                </div>
                <div className="inline-flex items-center gap-3 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-black bg-[#D4FF00] group-hover:bg-lime-300 rounded-xl shadow-lg shadow-[#D4FF00]/20 shrink-0 transition-all">
                  <span>Ir a Behance</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </a>
          </div>
        </section>

        {/* E. SOBRE NOSOTROS (Bio & Trayectoria) */}
        <section id="dupla" className="py-20 md:py-32 bg-[#0F0F12] border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Institutional Text */}
              <div className="lg:col-span-7 space-y-8">
                <span className="text-xs font-mono uppercase tracking-widest text-[#D4FF00] font-semibold">
                  [ SOBRE NOSOTROS ]
                </span>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  Más que una dupla externa:{" "}
                  <span className="text-[#D4FF00]">socios creativos.</span>
                </h2>
                
                <div className="p-8 rounded-2xl bg-[#18181C] border border-white/10 space-y-6">
                  <p className="text-lg sm:text-xl text-neutral-200 font-medium leading-relaxed">
                    &ldquo;Somos Santi Bermúdez y Adri Montefusco. Nos conocemos de memoria: más
                    de 20 años de recorrido en agencias líderes y una década rodando como dupla
                    DC.&rdquo;
                  </p>
                  <p className="text-base text-neutral-400 leading-relaxed">
                    Venimos del cruce entre dirección de arte, redacción y estrategia. No venimos a
                    figuretear ni a competir con tu equipo: venimos a blindar la relación con el
                    cliente y sacar briefs difíciles adelante con ideas que funcionan.
                  </p>
                </div>
              </div>

              {/* Right Column: Perfiles Profesionales (Tarjetas con link directo) */}
              <div className="lg:col-span-5 space-y-6">
                <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                  PERFILES PROFESIONALES
                </h3>

                {/* Card 1: Santiago Bermúdez */}
                <div className="glass-card p-6 rounded-2xl flex items-center justify-between border border-white/10">
                  <div className="space-y-1">
                    <h4 className="text-xl font-bold text-white">Santiago Bermúdez</h4>
                    <p className="text-xs font-mono text-[#D4FF00]">
                      Director Creativo & Estratega de Marca
                    </p>
                    <p className="text-xs text-neutral-400">
                      Dirección de Arte, Visual Identity & Concepting
                    </p>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/santiagobermudez/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/5 hover:bg-[#D4FF00] hover:text-black text-white transition-all border border-white/10 shrink-0"
                    aria-label="Perfil LinkedIn Santiago Bermúdez"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>

                {/* Card 2: Adrián Montefusco */}
                <div className="glass-card p-6 rounded-2xl flex items-center justify-between border border-white/10">
                  <div className="space-y-1">
                    <h4 className="text-xl font-bold text-white">Adrián Montefusco</h4>
                    <p className="text-xs font-mono text-[#D4FF00]">
                      Director Creativo & Redactor Senior
                    </p>
                    <p className="text-xs text-neutral-400">
                      Redacción, Narrative Strategy & Brand Voice
                    </p>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/adrianmontefusco/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/5 hover:bg-[#D4FF00] hover:text-black text-white transition-all border border-white/10 shrink-0"
                    aria-label="Perfil LinkedIn Adrián Montefusco"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* F. SECCIÓN SKILLS */}
        <section className="py-20 md:py-28 bg-[#0B0B0D] border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#D4FF00] font-semibold">
                [ SKILLS ]
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                Skills & Especialidades
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
              {[
                "IA",
                "Música",
                "Redacción",
                "Dirección de arte",
                "Filmmaking",
                "Contenido redes",
                "Edición de video",
                "Presentaciones",
                "Inglés",
              ].map((skill, idx) => (
                <div
                  key={idx}
                  className="px-6 py-3.5 rounded-xl bg-[#18181C] border border-white/10 text-neutral-200 text-sm sm:text-base font-medium hover:border-[#D4FF00]/50 hover:text-[#D4FF00] transition-all duration-300 shadow-md hover:scale-105"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* G. CONTACTO & CONVERSIÓN (Footer / CTA Final) */}
        <section className="relative py-24 md:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
          {/* Background Glow */}
          <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-80 bg-gradient-to-t from-[#D4FF00]/15 via-transparent to-transparent blur-3xl opacity-60" />

          <div className="relative z-10 p-8 sm:p-16 rounded-3xl bg-gradient-to-b from-[#18181C] to-[#121215] border border-white/15 text-center space-y-10 shadow-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4FF00]/10 border border-[#D4FF00]/30 text-[#D4FF00] text-xs font-mono font-bold tracking-widest uppercase">
              <Sparkles className="w-4 h-4" />
              DISPONIBILIDAD INMEDIATA PARA SPRINTS
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              <h2 className="text-3xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
                ¿Tenés ese brief sobre la mesa? Hablemos.
              </h2>
              <p className="text-lg sm:text-xl text-neutral-300">
                Contanos el desafío, armamos un sprint y nos sumamos a pensar con tu equipo.
              </p>
            </div>

            {/* Canales de contacto directo */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              {/* WhatsApp */}
              <a
                href="https://wa.me/5491155146718"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-bold uppercase tracking-wider text-black bg-[#D4FF00] hover:bg-lime-300 rounded-xl shadow-xl shadow-[#D4FF00]/25 hover:shadow-[#D4FF00]/40 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5 fill-black" />
                <span>WhatsApp</span>
              </a>

              {/* Email Directo */}
              <a
                href="mailto:sabermudez@gmail.com"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <Mail className="w-5 h-5 text-[#D4FF00]" />
                <span>MAIL</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#0B0B0D] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white">Bermúdez & Montefusco</span>
            <span className="text-neutral-500">•</span>
            <span className="text-xs font-mono text-neutral-400 uppercase">
              Directores Creativos Freelance
            </span>
          </div>

          <p className="text-xs font-mono text-neutral-500">
            © 2026 Bermúdez & Montefusco. Directores Creativos Freelance. Buenos Aires, Argentina.
          </p>
        </div>
      </footer>
    </div>
  );
}
