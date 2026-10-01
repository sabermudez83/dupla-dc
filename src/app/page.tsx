"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Sparkles,
  ArrowUpRight,
  Menu,
  X,
  MessageCircle,
  Mail,
  ExternalLink,
} from "lucide-react";

interface Project {
  id: string;
  client: string;
  title: string;
  role: string;
  year: string;
  image: string;
  link: string;
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const projects: Project[] = [
    {
      id: "flybondi",
      client: "Flybondi",
      title: "#NoTeDibujesLaRaya",
      role: "Campaña / Activación / PR",
      year: "2024",
      image: "/flybondi.jpg",
      link: "https://www.behance.net/gallery/86034619/NoTeDibujesLaRaya",
    },
    {
      id: "bpn",
      client: "Banco Provincia del Neuquén",
      title: "Acá está tu banco",
      role: "Campaña Integral / Banca",
      year: "2023",
      image: "/bpn.jpg",
      link: "https://www.behance.net/gallery/87702101/Banco-Provincial-del-Neuqun",
    },
    {
      id: "playstation",
      client: "Sony PlayStation",
      title: "Children's Day",
      role: "Campaña / Gaming",
      year: "2023",
      image: "/playstation.jpg",
      link: "https://www.behance.net/gallery/125932763/Playstation-Childrens-Day",
    },
    {
      id: "cocos",
      client: "Coco's Capital",
      title: "Santi Manotea",
      role: "PR / Contenido / FinTech",
      year: "2024",
      image: "/cocos.png",
      link: "https://www.behance.net/gallery/241343073/Santi-Manotea",
    },
  ];

  const credentials = [
    { number: "+20", label: "AÑOS EN PUBLICIDAD" },
    { number: "10", label: "AÑOS COMO DUPLA" },
    { number: "DOCENTES", label: "LA ESCUELITA DE CREATIVOS" },
    { number: "PREMIOS", label: "CANNES / EFFIE / LÁPIZ DE PLATINO" },
  ];

  const services = [
    {
      num: "01",
      title: "Rescate de Cuentas",
      subtitle: "Renovación de aire estratégico & creativo",
      description:
        "Cuando en la agencia ya se recorrieron todos los caminos internos y el cliente necesita una idea fresca que vuelva a enamorarlo de la agencia.",
    },
    {
      num: "02",
      title: "Sprints de Pitch",
      subtitle: "Refuerzo senior de alto impacto",
      description:
        "Refuerzo senior de choque para licitaciones decisivas donde hay que salir a ganar sin sobrecargar la estructura fija del equipo.",
    },
    {
      num: "03",
      title: "Potenciar al Equipo",
      subtitle: "Mentoría en el campo de juego",
      description:
        "Trasladamos la experiencia docente de La Escuelita: coacheamos y elevamos el estándar de los talentos juniors y semiseniores mientras sacamos el brief adelante.",
    },
  ];

  const skills = [
    "IA",
    "MÚSICA",
    "REDACCIÓN",
    "DIRECCIÓN DE ARTE",
    "FILMMAKING",
    "CONTENIDO REDES",
    "EDICIÓN DE VIDEO",
    "PRESENTACIONES",
    "INGLÉS",
  ];

  // Track mouse movement for hover preview positioning
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#F7F6F4] text-[#111111] selection:bg-[#111111] selection:text-[#F7F6F4] font-sans">
      {/* Floating Hover Image Preview (Desktop) */}
      {activeProject && (
        <div
          className="fixed pointer-events-none z-50 hidden lg:block transition-all duration-200 ease-out -translate-x-1/2 -translate-y-1/2"
          style={{
            left: `${cursorPos.x + 160}px`,
            top: `${cursorPos.y}px`,
          }}
        >
          <div className="w-80 h-52 relative overflow-hidden bg-[#111111] border border-[#111111] shadow-2xl">
            <Image
              src={activeProject.image}
              alt={activeProject.title}
              fill
              className="object-cover"
              sizes="320px"
              priority
            />
            <div className="absolute inset-0 bg-black/10" />
            <div className="absolute bottom-3 left-3 right-3 bg-[#111111]/90 backdrop-blur-sm p-2 text-white text-xs font-mono-meta">
              <span className="block font-bold">{activeProject.client}</span>
              <span className="text-neutral-300">{activeProject.title}</span>
            </div>
          </div>
        </div>
      )}

      {/* HEADER / NAVIGATION */}
      <header className="sticky top-0 z-40 bg-[#F7F6F4]/90 backdrop-blur-md border-b border-[#111111]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center space-x-3 group">
            <span className="font-serif-display text-2xl font-bold tracking-tight text-[#111111]">
              Bermúdez & Montefusco
            </span>
            <span className="hidden sm:inline-block font-mono-meta text-xs uppercase tracking-widest text-neutral-500 border-l border-[#111111]/20 pl-3">
              Directores Creativos
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 font-mono-meta text-xs tracking-wider uppercase">
            <a
              href="#trabajos"
              className="hover:text-[#111111] text-neutral-600 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#111111] hover:after:w-full after:transition-all"
            >
              [ 01 / TRABAJOS ]
            </a>
            <a
              href="#servicios"
              className="hover:text-[#111111] text-neutral-600 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#111111] hover:after:w-full after:transition-all"
            >
              [ 02 / SERVICIOS ]
            </a>
            <a
              href="#nosotros"
              className="hover:text-[#111111] text-neutral-600 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#111111] hover:after:w-full after:transition-all"
            >
              [ 03 / NOSOTROS ]
            </a>
            <a
              href="#skills"
              className="hover:text-[#111111] text-neutral-600 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#111111] hover:after:w-full after:transition-all"
            >
              [ 04 / SKILLS ]
            </a>
            <a
              href="#contacto"
              className="hover:text-[#111111] text-neutral-600 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#111111] hover:after:w-full after:transition-all"
            >
              [ 05 / CONTACTO ]
            </a>
          </nav>

          {/* Direct CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="https://wa.me/5491155146718"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono-meta text-xs font-bold uppercase tracking-widest px-5 py-2.5 bg-[#111111] text-[#F7F6F4] hover:bg-neutral-800 transition-colors border border-[#111111]"
            >
              CONTACTO
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#111111]"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#F7F6F4] border-b border-[#111111]/20 px-4 pt-4 pb-6 space-y-4 font-mono-meta text-xs uppercase tracking-wider">
            <a
              href="#trabajos"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[#111111] border-b border-[#111111]/10"
            >
              [ 01 / TRABAJOS ]
            </a>
            <a
              href="#servicios"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[#111111] border-b border-[#111111]/10"
            >
              [ 02 / SERVICIOS ]
            </a>
            <a
              href="#nosotros"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[#111111] border-b border-[#111111]/10"
            >
              [ 03 / NOSOTROS ]
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[#111111] border-b border-[#111111]/10"
            >
              [ 04 / SKILLS ]
            </a>
            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[#111111]"
            >
              [ 05 / CONTACTO ]
            </a>
            <a
              href="https://wa.me/5491155146718"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center w-full mt-4 py-3 bg-[#111111] text-[#F7F6F4] font-bold"
            >
              CONTACTAR POR WHATSAPP
            </a>
          </div>
        )}
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="pt-20 pb-20 md:pt-32 md:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#111111]/15">
          <div className="space-y-8 max-w-6xl">
            {/* Minimal Tag */}
            <div className="inline-flex items-center gap-2 font-mono-meta text-xs uppercase tracking-widest text-[#111111] border border-[#111111]/20 px-3 py-1.5">
              <Sparkles className="w-4 h-4 text-[#111111]" />
              <span>DUPLA CREATIVA FREELANCE</span>
            </div>

            {/* Main Editorial Display Headline */}
            <h1 className="font-serif-display text-5xl sm:text-7xl lg:text-9xl font-normal tracking-tight leading-[0.9] text-[#111111] uppercase">
              Directores Creativos{" "}
              <span className="italic block sm:inline font-serif-display">
                Freelance
              </span>
            </h1>

            {/* Editorial Subheadline */}
            <p className="text-xl sm:text-3xl text-neutral-800 max-w-3xl leading-relaxed font-normal pt-2">
              Llegamos a tu agencia para destrabar cuentas mesetadas, ganar licitaciones
              decisivas y aportar ideas de alto voltaje.{" "}
              <span className="font-semibold text-[#111111]">
                Sin egos y jugando en equipo.
              </span>
            </p>

            {/* Credential Grid (Sharp 1px Border Table) */}
            <div className="pt-12 grid grid-cols-2 md:grid-cols-4 border-t border-[#111111]/20 divide-x divide-[#111111]/15 divide-y md:divide-y-0 border-b border-[#111111]/20">
              {credentials.map((item, idx) => (
                <div key={idx} className="p-6 flex flex-col justify-between space-y-2">
                  <span className="font-serif-display text-3xl sm:text-4xl text-[#111111]">
                    {item.number}
                  </span>
                  <span className="font-mono-meta text-[11px] uppercase tracking-wider text-neutral-600">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 01: TRABAJOS (INDEX VIEW) */}
        <section id="trabajos" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#111111]/15">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="font-mono-meta text-xs uppercase tracking-widest text-neutral-500">
                [ 01 / INDEX DE PROYECTOS ]
              </span>
              <h2 className="font-serif-display text-4xl sm:text-6xl text-[#111111] mt-2">
                Trabajos Seleccionados
              </h2>
            </div>
            <p className="font-mono-meta text-xs text-neutral-500 uppercase tracking-wider">
              PASA EL CURSOR SOBRE CADA FILA PARA PREVISUALIZAR
            </p>
          </div>

          {/* Index View Table */}
          <div className="border-t border-b border-[#111111] divide-y divide-[#111111]/15">
            {/* Table Header Row */}
            <div className="hidden md:grid grid-cols-12 gap-4 py-3 px-4 font-mono-meta text-xs uppercase tracking-wider text-neutral-500 bg-[#EFECE6]/50">
              <div className="col-span-3">CLIENTE</div>
              <div className="col-span-4">CAMPAÑA</div>
              <div className="col-span-3">ROL / CATEGORÍA</div>
              <div className="col-span-1 text-center">AÑO</div>
              <div className="col-span-1 text-right">LINK</div>
            </div>

            {/* Project Items */}
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setActiveProject(project)}
                onMouseLeave={() => setActiveProject(null)}
                className="group grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 py-6 px-4 items-center editorial-row cursor-pointer transition-colors duration-200"
              >
                {/* Client Name */}
                <div className="col-span-3">
                  <span className="font-serif-display text-2xl md:text-3xl text-[#111111] group-hover:text-[#F7F6F4] transition-colors">
                    {project.client}
                  </span>
                </div>

                {/* Campaign Title */}
                <div className="col-span-4">
                  <span className="font-medium text-base md:text-lg text-neutral-800 group-hover:text-[#F7F6F4] transition-colors">
                    {project.title}
                  </span>
                </div>

                {/* Role / Category */}
                <div className="col-span-3">
                  <span className="font-mono-meta text-xs text-neutral-600 group-hover:text-neutral-300 transition-colors uppercase">
                    {project.role}
                  </span>
                </div>

                {/* Year */}
                <div className="col-span-1 text-left md:text-center">
                  <span className="font-mono-meta text-xs text-neutral-600 group-hover:text-neutral-300 transition-colors">
                    {project.year}
                  </span>
                </div>

                {/* Link Icon */}
                <div className="col-span-1 flex items-center justify-end">
                  <span className="inline-flex items-center gap-1 font-mono-meta text-xs uppercase group-hover:text-[#F7F6F4] transition-colors">
                    <span className="hidden lg:inline">BEHANCE</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>

                {/* Mobile Preview Image Inline */}
                <div className="block md:hidden col-span-1 mt-3">
                  <div className="relative aspect-[16/9] w-full overflow-hidden border border-[#111111]/20">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="100vw"
                    />
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Behance Full Archive Link */}
          <div className="mt-12">
            <a
              href="https://www.behance.net/bermudezmontefusco"
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-[#111111] p-8 flex flex-col sm:flex-row items-center justify-between gap-6 hover:bg-[#111111] hover:text-[#F7F6F4] transition-colors duration-300"
            >
              <div className="space-y-1 text-center sm:text-left">
                <span className="font-mono-meta text-xs uppercase tracking-widest text-neutral-500 group-hover:text-neutral-400">
                  ARCHIVO COMPLETO DE PROYECTOS
                </span>
                <h3 className="font-serif-display text-2xl sm:text-3xl font-normal">
                  Explorá el archivo completo de campañas y premios en nuestro Behance
                </h3>
              </div>
              <div className="font-mono-meta text-xs font-bold uppercase tracking-wider px-6 py-3 border border-[#111111] group-hover:border-[#F7F6F4] shrink-0 inline-flex items-center gap-2">
                <span>VER ARCHIVO EN BEHANCE</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </a>
          </div>
        </section>

        {/* SECTION 02: SERVICIOS / QUÉ RESOLVEMOS */}
        <section id="servicios" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#111111]/15">
          <div className="space-y-4 mb-16">
            <span className="font-mono-meta text-xs uppercase tracking-widest text-neutral-500">
              [ 02 / SERVICIOS ]
            </span>
            <h2 className="font-serif-display text-4xl sm:text-6xl text-[#111111]">
              El Squad Creativo Freelance para tu Agencia
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl font-normal">
              Flexibilidad senior de choque cuando la exigencia del negocio demanda resultados inmediatos.
            </p>
          </div>

          {/* 3 Sharp 1px Grid Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-b border-[#111111] divide-y md:divide-y-0 md:divide-x divide-[#111111]/15">
            {services.map((item, idx) => (
              <div key={idx} className="p-8 sm:p-10 flex flex-col justify-between space-y-8 bg-[#F7F6F4] hover:bg-[#EFECE6] transition-colors">
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-[#111111]/10 pb-4">
                    <span className="font-serif-display text-4xl text-[#111111]">
                      {item.num}
                    </span>
                    <span className="font-mono-meta text-xs uppercase tracking-wider text-neutral-500">
                      SOLUCIÓN SENIOR
                    </span>
                  </div>
                  <div>
                    <h3 className="font-serif-display text-3xl text-[#111111] leading-tight">
                      {item.title}
                    </h3>
                    <p className="font-mono-meta text-xs text-neutral-500 uppercase tracking-wider mt-2">
                      {item.subtitle}
                    </p>
                  </div>
                  <p className="text-base text-neutral-700 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 03: SOBRE NOSOTROS */}
        <section id="nosotros" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#111111]/15">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Bio Quote */}
            <div className="lg:col-span-7 space-y-8">
              <span className="font-mono-meta text-xs uppercase tracking-widest text-neutral-500">
                [ 03 / SOBRE NOSOTROS ]
              </span>
              <h2 className="font-serif-display text-4xl sm:text-6xl text-[#111111] leading-tight">
                Más que una dupla externa: <span className="italic">socios creativos.</span>
              </h2>

              <div className="border-l-2 border-[#111111] pl-6 py-2 space-y-4">
                <p className="font-serif-display text-2xl sm:text-3xl text-[#111111] leading-snug">
                  &ldquo;Somos Santi Bermúdez y Adri Montefusco. Nos conocemos de memoria: más de 20 años de recorrido en agencias líderes y una década rodando como dupla DC.&rdquo;
                </p>
                <p className="text-base text-neutral-700 leading-relaxed">
                  Venimos del cruce entre dirección de arte, redacción y estrategia. No venimos a figuretear ni a competir con tu equipo: venimos a blindar la relación con el cliente y sacar briefs difíciles adelante con ideas que funcionan.
                </p>
              </div>
            </div>

            {/* Right Column: Profiles */}
            <div className="lg:col-span-5 space-y-6 pt-4 lg:pt-12">
              <span className="font-mono-meta text-xs uppercase tracking-widest text-neutral-500 block">
                PERFILES PROFESIONALES
              </span>

              {/* Santiago Bermúdez Profile Card */}
              <div className="border border-[#111111] p-6 space-y-4 hover:bg-[#EFECE6] transition-colors">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-serif-display text-2xl text-[#111111]">
                      Santiago Bermúdez
                    </h3>
                    <p className="font-mono-meta text-xs uppercase tracking-wider text-neutral-600 mt-1">
                      Director Creativo & Estratega de Marca
                    </p>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/santiagobermudez/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-[#111111] hover:bg-[#111111] hover:text-[#F7F6F4] transition-colors"
                    aria-label="LinkedIn Santiago Bermúdez"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-xs text-neutral-600 font-mono-meta">
                  ESPECIALIDAD: Dirección de Arte, Visual Identity & Concepting
                </p>
              </div>

              {/* Adrián Montefusco Profile Card */}
              <div className="border border-[#111111] p-6 space-y-4 hover:bg-[#EFECE6] transition-colors">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-serif-display text-2xl text-[#111111]">
                      Adrián Montefusco
                    </h3>
                    <p className="font-mono-meta text-xs uppercase tracking-wider text-neutral-600 mt-1">
                      Director Creativo & Redactor Senior
                    </p>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/adrianmontefusco/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-[#111111] hover:bg-[#111111] hover:text-[#F7F6F4] transition-colors"
                    aria-label="LinkedIn Adrián Montefusco"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-xs text-neutral-600 font-mono-meta">
                  ESPECIALIDAD: Redacción, Narrative Strategy & Brand Voice
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 04: SKILLS */}
        <section id="skills" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#111111]/15">
          <div className="space-y-4 mb-12 text-center">
            <span className="font-mono-meta text-xs uppercase tracking-widest text-neutral-500">
              [ 04 / SKILLS ]
            </span>
            <h2 className="font-serif-display text-4xl sm:text-6xl text-[#111111]">
              Skills & Especialidades
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="font-mono-meta text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-4 border border-[#111111] bg-[#F7F6F4] hover:bg-[#111111] hover:text-[#F7F6F4] transition-colors duration-200"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 05: CONTACTO */}
        <section id="contacto" className="py-24 md:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="border border-[#111111] p-8 sm:p-16 text-center space-y-10 bg-[#EFECE6]/40">
            <div className="inline-flex items-center gap-2 font-mono-meta text-xs uppercase tracking-widest text-[#111111] border border-[#111111] px-4 py-2">
              <Sparkles className="w-4 h-4 text-[#111111]" />
              <span>DISPONIBILIDAD INMEDIATA PARA SPRINTS</span>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              <h2 className="font-serif-display text-4xl sm:text-7xl text-[#111111] leading-tight">
                ¿Tenés ese brief sobre la mesa? Hablemos.
              </h2>
              <p className="text-lg sm:text-xl text-neutral-700">
                Contanos el desafío, armamos un sprint y nos sumamos a pensar con tu equipo.
              </p>
            </div>

            {/* Contact Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <a
                href="https://wa.me/5491155146718"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 font-mono-meta text-xs font-bold uppercase tracking-widest text-[#F7F6F4] bg-[#111111] hover:bg-neutral-800 transition-colors border border-[#111111]"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WHATSAPP</span>
              </a>

              <a
                href="mailto:sabermudez@gmail.com"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 font-mono-meta text-xs font-bold uppercase tracking-widest text-[#111111] bg-transparent hover:bg-[#111111] hover:text-[#F7F6F4] transition-colors border border-[#111111]"
              >
                <Mail className="w-4 h-4" />
                <span>MAIL</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-[#111111] py-10 bg-[#F7F6F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-meta text-xs uppercase tracking-wider text-neutral-600">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#111111]">Bermúdez & Montefusco</span>
            <span>•</span>
            <span>Directores Creativos Freelance</span>
          </div>

          <p className="text-neutral-500">
            © 2026 BERMÚDEZ & MONTEFUSCO. BUENOS AIRES, ARGENTINA.
          </p>
        </div>
      </footer>
    </div>
  );
}
