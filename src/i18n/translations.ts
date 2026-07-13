import { useLanguage } from './LanguageContext'

export const ui = {
  nav: {
    work: { en: 'Work', es: 'Trabajo' },
    about: { en: 'About Me', es: 'Sobre Mí' },
    contact: { en: 'Contact Me', es: 'Contáctame' },
    hireMe: { en: 'Hire Me', es: 'Contrátame' },
  },
  hero: {
    badge: { en: 'Welcome to my creative studio!', es: '¡Bienvenido a mi estudio creativo!' },
    titleStart: { en: 'Crafting digital experiences with', es: 'Creando experiencias digitales con' },
    titleHighlight: { en: 'soul.', es: 'alma.' },
    body: {
      en: 'I design digital and visual brand experiences — from UX/UI and full-stack web platforms to logos and brand identities.',
      es: 'Diseño experiencias digitales y de marca visual — desde UX/UI y plataformas web full-stack hasta logos e identidades de marca.',
    },
    viewWork: { en: 'View My Work →', es: 'Ver Mi Trabajo →' },
    aboutMe: { en: 'About Me', es: 'Sobre Mí' },
  },
  work: {
    heading: { en: 'Selected', es: 'Trabajo' },
    headingHighlight: { en: 'work.', es: 'seleccionado.' },
    subtitle: {
      en: 'A few recent projects, spanning product design and development.',
      es: 'Algunos proyectos recientes, entre diseño de producto y desarrollo.',
    },
    allProjects: { en: 'All My Projects →', es: 'Todos Mis Proyectos →' },
    noProjects: {
      en: 'No projects in this category yet — check back soon.',
      es: 'Aún no hay proyectos en esta categoría — vuelve pronto.',
    },
    prev: { en: 'Previous project', es: 'Proyecto anterior' },
    next: { en: 'Next project', es: 'Proyecto siguiente' },
    filterAll: { en: 'All', es: 'Todos' },
  },
  categories: {
    'Graphic Design': { en: 'Graphic Design', es: 'Diseño Gráfico' },
    'UX/UI Design': { en: 'UX/UI Design', es: 'Diseño UX/UI' },
  },
  craftTools: {
    heading: { en: 'Craft &', es: 'Oficio y' },
    headingHighlight: { en: 'Tools.', es: 'Herramientas.' },
    subtitle: { en: 'What I bring to a project, end to end.', es: 'Lo que aporto a un proyecto, de principio a fin.' },
    uxui: { en: 'UX/UI Strategy', es: 'Estrategia UX/UI' },
    uxuiItems: {
      en: ['User Research & Synthesis', 'Information Architecture', 'Interactive Prototyping'],
      es: ['Investigación y síntesis de usuarios', 'Arquitectura de información', 'Prototipado interactivo'],
    },
    visual: { en: 'Visual Design', es: 'Diseño Visual' },
    visualItems: {
      en: ['Design Systems', 'Brand Identity & Logos', 'Typography & Color Theory'],
      es: ['Sistemas de diseño', 'Identidad de marca y logos', 'Tipografía y teoría del color'],
    },
    frontend: { en: 'Development', es: 'Desarrollo' },
    frontendItems: {
      en: ['React, TypeScript & Tailwind', 'Node.js / Express & PostgreSQL', 'Git, GitHub & Deployment'],
      es: ['React, TypeScript y Tailwind', 'Node.js / Express y PostgreSQL', 'Git, GitHub y despliegue'],
    },
  },
  experience: {
    heading: { en: 'My Professional', es: 'Mi Experiencia' },
    headingHighlight: { en: 'Experience.', es: 'Profesional.' },
    subtitle: {
      en: "A few of the projects I've worked on recently.",
      es: 'Algunos de los proyectos en los que he trabajado recientemente.',
    },
  },
  connect: {
    heading: { en: "Let's Connect!", es: '¡Conectemos!' },
    subtitle: {
      en: "I'm always open to new collaborations, creative projects, or just a friendly conversation over digital coffee.",
      es: 'Siempre estoy abierta a nuevas colaboraciones, proyectos creativos, o simplemente una charla amistosa con un café digital.',
    },
    linkedinSubtitle: { en: 'Professional Network & Updates', es: 'Red profesional y actualizaciones' },
    githubSubtitle: { en: 'Open Source Projects & Code', es: 'Proyectos y código abierto' },
    emailSubtitle: { en: 'Direct Inquiries & Collaborations', es: 'Consultas directas y colaboraciones' },
    quote: { en: '"Sometimes, less is more"', es: '"A veces, menos es más"' },
    locationLabel: { en: 'Currently based in', es: 'Actualmente en' },
  },
  allProjectsPage: {
    heading: { en: 'All My', es: 'Todos Mis' },
    headingHighlight: { en: 'Projects.', es: 'Proyectos.' },
    subtitle: { en: "Everything I've shipped, filterable by discipline.", es: 'Todo lo que he creado, filtrable por disciplina.' },
    goBack: { en: '← Go Back', es: '← Regresar' },
  },
  projectDetail: {
    overview: { en: 'Project', es: 'Resumen del' },
    overviewHighlight: { en: 'Overview.', es: 'Proyecto.' },
    details: { en: 'Project Details', es: 'Detalles del Proyecto' },
    timeline: { en: 'Timeline', es: 'Duración' },
    role: { en: 'Role', es: 'Rol' },
    tools: { en: 'Tools', es: 'Herramientas' },
    closeLook: { en: 'A Close', es: 'Una Mirada' },
    closeLookHighlight: { en: 'Look.', es: 'de Cerca.' },
    summary: { en: 'Project', es: 'Resumen' },
    summaryHighlight: { en: 'Summary.', es: 'del Proyecto.' },
    nextProject: { en: 'Next Project →', es: 'Siguiente Proyecto →' },
  },
  hire: {
    heading: { en: "Let's Work", es: 'Trabajemos' },
    headingHighlight: { en: 'Together.', es: 'Juntos.' },
    intro: {
      en: "I'm currently open to freelance and collaboration opportunities in both web design/development and graphic design. Here's how to reach me, when I'm available, and a starting reference for pricing.",
      es: 'Actualmente estoy abierta a oportunidades freelance y de colaboración, tanto en diseño/desarrollo web como en diseño gráfico. Aquí te dejo cómo contactarme, cuándo estoy disponible, y una referencia inicial de precios.',
    },
    contact: { en: 'Contact', es: 'Contacto' },
    availability: { en: 'Availability', es: 'Disponibilidad' },
    availabilityDays: { en: 'Monday - Friday', es: 'Lunes a Viernes' },
    availabilityHours: { en: '9:00 AM - 7:00 PM (Costa Rica time)', es: '9:00 AM - 7:00 PM (hora de Costa Rica)' },
    pricingHeading: { en: 'Base', es: 'Precios' },
    pricingHeadingHighlight: { en: 'Pricing.', es: 'Base.' },
    pricingSubtitle: {
      en: 'Starting prices for common project types. Final pricing depends on scope, timeline, and features — reach out for a quote tailored to your project.',
      es: 'Precios iniciales para tipos de proyecto comunes. El precio final depende del alcance, tiempo y funcionalidades — contáctame para una cotización a la medida de tu proyecto.',
    },
    webPackagesHeading: { en: 'Web Design & Development', es: 'Diseño y Desarrollo Web' },
    graphicPackagesHeading: { en: 'Graphic Design & Branding', es: 'Diseño Gráfico y Branding' },
    priceFrom: { en: 'From', es: 'Desde' },
    pricingNote: {
      en: 'Prices shown are a starting reference and may be adjusted per project. Not final quotes.',
      es: 'Los precios mostrados son una referencia inicial y pueden ajustarse según el proyecto. No son cotizaciones finales.',
    },
    termsHeading: { en: 'Terms of', es: 'Términos de' },
    termsHeadingHighlight: { en: 'Service.', es: 'Servicio.' },
    termsSubtitle: {
      en: 'A general summary of how I work — not a formal legal contract. For larger projects, a signed agreement will be provided.',
      es: 'Un resumen general de cómo trabajo — no es un contrato legal formal. Para proyectos más grandes, se entregará un acuerdo firmado.',
    },
  },
  footer: {
    tagline: { en: 'Personal Portfolio.', es: 'Portafolio Personal.' },
  },
}

export function useTranslations() {
  const { lang } = useLanguage()
  return {
    t: <T extends { en: string; es: string }>(entry: T) => entry[lang],
    tArr: <T extends { en: string[]; es: string[] }>(entry: T) => entry[lang],
    lang,
  }
}
