export type Language = "es" | "en";

export interface Project {
  id: string;
  client: string;
  title: string;
  role: string;
  year: string;
  image: string;
  link: string;
}

export interface Credential {
  number: string;
  label: string;
}

export interface ServiceItem {
  num: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface TranslationData {
  metaTitle: string;
  metaDescription: string;
  header: {
    brandSubtitle: string;
    nav: {
      works: string;
      services: string;
      about: string;
      skills: string;
      contact: string;
    };
    cta: string;
    mobileCta: string;
    ariaMenuOpen: string;
    ariaMenuClose: string;
  };
  hero: {
    tag: string;
    headlinePart1: string;
    headlinePart2: string;
    subheadline: string;
    subheadlineHighlight: string;
    credentials: Credential[];
  };
  works: {
    tag: string;
    title: string;
    hoverHint: string;
    tableHeaders: {
      client: string;
      campaign: string;
      role: string;
      year: string;
      link: string;
    };
    projects: Project[];
    archive: {
      tag: string;
      title: string;
      button: string;
    };
  };
  services: {
    tag: string;
    title: string;
    subtitle: string;
    items: ServiceItem[];
  };
  about: {
    tag: string;
    titleMain: string;
    titleItalic: string;
    quote: string;
    description: string;
    profilesTag: string;
    santiago: {
      name: string;
      role: string;
      specialty: string;
    };
    adrian: {
      name: string;
      role: string;
      specialty: string;
    };
  };
  skills: {
    tag: string;
    title: string;
    list: string[];
  };
  contact: {
    tag: string;
    title: string;
    subtitle: string;
    whatsapp: string;
    email: string;
  };
  footer: {
    brandSubtitle: string;
    copyright: string;
  };
}

export const translations: Record<Language, TranslationData> = {
  es: {
    metaTitle: "Bermúdez & Montefusco — Directores Creativos Freelance",
    metaDescription:
      "Directores Creativos Freelance. Rescate de cuentas, sprints de pitch y fortalecimiento creativo para agencias de publicidad.",
    header: {
      brandSubtitle: "Directores Creativos",
      nav: {
        works: "[ 01 / TRABAJOS ]",
        services: "[ 02 / SERVICIOS ]",
        about: "[ 03 / NOSOTROS ]",
        skills: "[ 04 / SKILLS ]",
        contact: "[ 05 / CONTACTO ]",
      },
      cta: "CONTACTO",
      mobileCta: "CONTACTAR POR WHATSAPP",
      ariaMenuOpen: "Abrir menú",
      ariaMenuClose: "Cerrar menú",
    },
    hero: {
      tag: "DUPLA CREATIVA FREELANCE",
      headlinePart1: "Directores Creativos",
      headlinePart2: "Freelance",
      subheadline:
        "Llegamos a tu agencia para destrabar cuentas mesetadas, ganar licitaciones decisivas y aportar ideas de alto voltaje.",
      subheadlineHighlight: "Sin egos y jugando en equipo.",
      credentials: [
        { number: "+20", label: "AÑOS EN PUBLICIDAD" },
        { number: "10", label: "AÑOS COMO DUPLA" },
        { number: "DOCENTES", label: "LA ESCUELITA DE CREATIVOS" },
        { number: "PREMIOS", label: "CANNES / EFFIE / LÁPIZ DE PLATINO" },
      ],
    },
    works: {
      tag: "[ 01 / INDEX DE PROYECTOS ]",
      title: "Trabajos Seleccionados",
      hoverHint: "PASA EL CURSOR SOBRE CADA FILA PARA PREVISUALIZAR",
      tableHeaders: {
        client: "CLIENTE",
        campaign: "CAMPAÑA",
        role: "ROL / CATEGORÍA",
        year: "AÑO",
        link: "LINK",
      },
      projects: [
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
      ],
      archive: {
        tag: "ARCHIVO COMPLETO DE PROYECTOS",
        title: "Explorá el archivo completo de campañas y premios en nuestro Behance",
        button: "VER ARCHIVO EN BEHANCE",
      },
    },
    services: {
      tag: "[ 02 / SERVICIOS ]",
      title: "El Squad Creativo Freelance para tu Agencia",
      subtitle:
        "Flexibilidad senior de choque cuando la exigencia del negocio demanda resultados inmediatos.",
      items: [
        {
          num: "01",
          tag: "SOLUCIÓN SENIOR",
          title: "Rescate de Cuentas",
          subtitle: "Renovación de aire estratégico & creativo",
          description:
            "Cuando en la agencia ya se recorrieron todos los caminos internos y el cliente necesita una idea fresca que vuelva a enamorarlo de la agencia.",
        },
        {
          num: "02",
          tag: "SOLUCIÓN SENIOR",
          title: "Sprints de Pitch",
          subtitle: "Refuerzo senior de alto impacto",
          description:
            "Refuerzo senior de choque para licitaciones decisivas donde hay que salir a ganar sin sobrecargar la estructura fija del equipo.",
        },
        {
          num: "03",
          tag: "SOLUCIÓN SENIOR",
          title: "Potenciar al Equipo",
          subtitle: "Mentoría en el campo de juego",
          description:
            "Trasladamos la experiencia docente de La Escuelita: coacheamos y elevamos el estándar de los talentos juniors y semiseniores mientras sacamos el brief adelante.",
        },
      ],
    },
    about: {
      tag: "[ 03 / SOBRE NOSOTROS ]",
      titleMain: "Más que una dupla externa: ",
      titleItalic: "socios creativos.",
      quote:
        "“Somos Santi Bermúdez y Adri Montefusco. Nos conocemos de memoria: más de 20 años de recorrido en agencias líderes y una década rodando como dupla DC.”",
      description:
        "Venimos del cruce entre dirección de arte, redacción y estrategia. No venimos a figuretear ni a competir con tu equipo: venimos a blindar la relación con el cliente y sacar briefs difíciles adelante con ideas que funcionan.",
      profilesTag: "PERFILES PROFESIONALES",
      santiago: {
        name: "Santiago Bermúdez",
        role: "Director Creativo & Estratega de Marca",
        specialty: "ESPECIALIDAD: Dirección de Arte, Visual Identity & Concepting",
      },
      adrian: {
        name: "Adrián Montefusco",
        role: "Director Creativo & Redactor Senior",
        specialty: "ESPECIALIDAD: Redacción, Narrative Strategy & Brand Voice",
      },
    },
    skills: {
      tag: "[ 04 / SKILLS ]",
      title: "Skills & Especialidades",
      list: [
        "IA",
        "MÚSICA",
        "REDACCIÓN",
        "DIRECCIÓN DE ARTE",
        "FILMMAKING",
        "CONTENIDO REDES",
        "EDICIÓN DE VIDEO",
        "PRESENTACIONES",
        "INGLÉS",
      ],
    },
    contact: {
      tag: "DISPONIBILIDAD INMEDIATA PARA SPRINTS",
      title: "¿Tenés ese brief sobre la mesa? Hablemos.",
      subtitle:
        "Contanos el desafío, armamos un sprint y nos sumamos a pensar con tu equipo.",
      whatsapp: "WHATSAPP",
      email: "MAIL",
    },
    footer: {
      brandSubtitle: "Directores Creativos Freelance",
      copyright: "© 2026 BERMÚDEZ & MONTEFUSCO. BUENOS AIRES, ARGENTINA.",
    },
  },
  en: {
    metaTitle: "Bermúdez & Montefusco — Freelance Creative Directors",
    metaDescription:
      "Freelance Creative Directors. Account turnaround, pitch sprints, and high-impact creative reinforcement for advertising agencies.",
    header: {
      brandSubtitle: "Creative Directors",
      nav: {
        works: "[ 01 / WORK ]",
        services: "[ 02 / SERVICES ]",
        about: "[ 03 / ABOUT ]",
        skills: "[ 04 / SKILLS ]",
        contact: "[ 05 / CONTACT ]",
      },
      cta: "CONTACT",
      mobileCta: "CONTACT VIA WHATSAPP",
      ariaMenuOpen: "Open menu",
      ariaMenuClose: "Close menu",
    },
    hero: {
      tag: "FREELANCE CREATIVE DUO",
      headlinePart1: "Creative Directors",
      headlinePart2: "Freelance",
      subheadline:
        "We step into your agency to unlock stalled accounts, win high-stakes pitches, and deliver high-voltage creative work.",
      subheadlineHighlight: "Zero ego, pure teamwork.",
      credentials: [
        { number: "+20", label: "YEARS IN ADVERTISING" },
        { number: "10", label: "YEARS AS A DUO" },
        { number: "FACULTY", label: "LA ESCUELITA DE CREATIVOS" },
        { number: "AWARDS", label: "CANNES / EFFIE / LÁPIZ DE PLATINO" },
      ],
    },
    works: {
      tag: "[ 01 / PROJECT INDEX ]",
      title: "Selected Works",
      hoverHint: "HOVER OVER EACH ROW TO PREVIEW",
      tableHeaders: {
        client: "CLIENT",
        campaign: "CAMPAIGN",
        role: "ROLE / CATEGORY",
        year: "YEAR",
        link: "LINK",
      },
      projects: [
        {
          id: "flybondi",
          client: "Flybondi",
          title: "#NoTeDibujesLaRaya",
          role: "Campaign / Activation / PR",
          year: "2024",
          image: "/flybondi.jpg",
          link: "https://www.behance.net/gallery/86034619/NoTeDibujesLaRaya",
        },
        {
          id: "bpn",
          client: "Banco Provincia del Neuquén",
          title: "Acá está tu banco",
          role: "Integrated Campaign / Banking",
          year: "2023",
          image: "/bpn.jpg",
          link: "https://www.behance.net/gallery/87702101/Banco-Provincial-del-Neuqun",
        },
        {
          id: "playstation",
          client: "Sony PlayStation",
          title: "Children's Day",
          role: "Campaign / Gaming",
          year: "2023",
          image: "/playstation.jpg",
          link: "https://www.behance.net/gallery/125932763/Playstation-Childrens-Day",
        },
        {
          id: "cocos",
          client: "Coco's Capital",
          title: "Santi Manotea",
          role: "PR / Content / FinTech",
          year: "2024",
          image: "/cocos.png",
          link: "https://www.behance.net/gallery/241343073/Santi-Manotea",
        },
      ],
      archive: {
        tag: "FULL PROJECT ARCHIVE",
        title: "Explore our complete archive of campaigns and awards on Behance",
        button: "VIEW ARCHIVE ON BEHANCE",
      },
    },
    services: {
      tag: "[ 02 / SERVICES ]",
      title: "The Freelance Creative Squad for Your Agency",
      subtitle:
        "High-impact senior flexibility when business pressure demands immediate results.",
      items: [
        {
          num: "01",
          tag: "SENIOR SOLUTION",
          title: "Account Rescue",
          subtitle: "Strategic & creative rejuvenation",
          description:
            "When internal avenues have been exhausted and the client needs a fresh breakthrough idea to fall back in love with the agency.",
        },
        {
          num: "02",
          tag: "SENIOR SOLUTION",
          title: "Pitch Sprints",
          subtitle: "High-impact senior firepower",
          description:
            "Specialized senior strike team for make-or-break pitches where you need to win without overburdening your permanent staff.",
        },
        {
          num: "03",
          tag: "SENIOR SOLUTION",
          title: "Team Empowerment",
          subtitle: "Hands-on field mentorship",
          description:
            "Carrying over our teaching tenure at La Escuelita: coaching and elevating junior and mid-level talent while nailing the brief.",
        },
      ],
    },
    about: {
      tag: "[ 03 / ABOUT US ]",
      titleMain: "More than an external duo: ",
      titleItalic: "creative partners.",
      quote:
        "“We are Santi Bermúdez and Adri Montefusco. We know each other inside out: over 20 years in leading agencies and a decade partnering as a CD duo.”",
      description:
        "We blend art direction, copywriting, and brand strategy. We’re not here to stroke egos or compete with your team: we step in to safeguard client trust and solve demanding briefs with ideas that deliver real impact.",
      profilesTag: "PROFESSIONAL PROFILES",
      santiago: {
        name: "Santiago Bermúdez",
        role: "Creative Director & Brand Strategist",
        specialty: "SPECIALTY: Art Direction, Visual Identity & Concepting",
      },
      adrian: {
        name: "Adrián Montefusco",
        role: "Creative Director & Senior Copywriter",
        specialty: "SPECIALTY: Copywriting, Narrative Strategy & Brand Voice",
      },
    },
    skills: {
      tag: "[ 04 / SKILLS ]",
      title: "Skills & Specialties",
      list: [
        "AI",
        "MUSIC",
        "COPYWRITING",
        "ART DIRECTION",
        "FILMMAKING",
        "SOCIAL CONTENT",
        "VIDEO EDITING",
        "PRESENTATIONS",
        "BILINGUAL (EN/ES)",
      ],
    },
    contact: {
      tag: "IMMEDIATE AVAILABILITY FOR SPRINTS",
      title: "Got that brief on your desk? Let’s talk.",
      subtitle:
        "Share your challenge, let’s schedule a sprint, and join forces to crack it with your team.",
      whatsapp: "WHATSAPP",
      email: "EMAIL",
    },
    footer: {
      brandSubtitle: "Freelance Creative Directors",
      copyright: "© 2026 BERMÚDEZ & MONTEFUSCO. BUENOS AIRES, ARGENTINA.",
    },
  },
};
