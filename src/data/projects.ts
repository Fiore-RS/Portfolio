import type { Project } from './types'

// Swap `cardColor` for a real screenshot/mockup by adding an `image` path
// (drop the file in /public/projects/ and point to it, e.g. '/projects/reading-journal-cover.png').
// The card and detail hero both fall back to the solid color until you do.
export const projects: Project[] = [
  {
    id: '1',
    slug: 'reading-journal',
    title: { en: 'Reading Journal', es: 'Reading Journal' },
    type: { en: 'Web App', es: 'Aplicación Web' },
    category: 'UX/UI Design',
    cardColor: 'bg-terracotta',
    image: '/projects/reading-journal/cover.png',
    timeline: { en: '2 weeks', es: '2 semanas' },
    role: { en: 'Solo Designer & Developer', es: 'Diseñadora y Desarrolladora Única' },
    tools: { en: 'React, Tailwind, Express, Drizzle, Neon, Cloudinary', es: 'React, Tailwind, Express, Drizzle, Neon, Cloudinary' },
    overview: {
      en: [
        'A personal reading tracker that went from a Claude-generated prototype to a full-stack app: status tracking, series, star-rating reviews, and a stats page with year-by-year breakdowns.',
        'Built with authentication (JWT, bcrypt, user-scoped data) so the app could support multiple accounts, then deployed the frontend to GitHub Pages and the backend to Render with a Neon Postgres database.',
        'Later hardened it for production: cover images moved to Cloudinary after Render\'s free-tier disk was silently wiping them on restart, a GitHub Actions cron keeps the backend warm, and a public Gift List page lets friends and family browse the wishlist without logging in.',
      ],
      es: [
        'Un rastreador de lectura personal que pasó de ser un prototipo generado con Claude a una app full-stack: seguimiento de estado, series, reseñas con calificación por estrellas, y una página de estadísticas con desgloses año por año.',
        'Construida con autenticación (JWT, bcrypt, datos por usuario) para soportar múltiples cuentas, luego desplegada con el frontend en GitHub Pages y el backend en Render con una base de datos Neon Postgres.',
        'Más adelante la reforcé para producción: las portadas se movieron a Cloudinary tras descubrir que el disco gratuito de Render las borraba en cada reinicio, un cron de GitHub Actions mantiene el backend activo, y una página pública de Gift List permite a amigos y familia ver la lista de deseos sin iniciar sesión.',
      ],
    },
    gallery: [
      {
        color: 'bg-terracotta',
        image: '/projects/reading-journal/library.png',
        alt: { en: 'Reading Journal library grid view', es: 'Vista de cuadrícula de la biblioteca de Reading Journal' },
      },
      {
        color: 'bg-clay',
        image: '/projects/reading-journal/stats.png',
        alt: { en: 'Reading Journal stats page', es: 'Página de estadísticas de Reading Journal' },
      },
      {
        color: 'bg-espresso',
        image: '/projects/reading-journal/reading.png',
        alt: { en: 'Reading Journal reading progress view', es: 'Vista de progreso de lectura de Reading Journal' },
      },
      {
        color: 'bg-rust',
        image: '/projects/reading-journal/signin.png',
        alt: { en: 'Reading Journal sign in page', es: 'Página de inicio de sesión de Reading Journal' },
      },
    ],
    summary: {
      en: 'This was my first end-to-end deploy of a full-stack app I designed myself, and my first real lesson in production reliability, from persistent file storage to keeping a free-tier server awake.',
      es: 'Este fue mi primer despliegue completo de una app full-stack diseñada por mí misma, y mi primera lección real de confiabilidad en producción, desde almacenamiento persistente de archivos hasta mantener despierto un servidor de plan gratuito.',
    },
    liveUrl: {
      url: 'https://fiore-rs.github.io/ReadingJournal/',
      label: { en: 'View Live Site', es: 'Ver Sitio en Vivo' },
    },
  },
  {
    id: '2',
    slug: 'pycon-latam-2025',
    title: { en: 'PyCon LATAM 2025', es: 'PyCon LATAM 2025' },
    type: { en: 'Brand Manual & Identity', es: 'Manual de Marca e Identidad' },
    category: 'Graphic Design',
    cardColor: 'bg-clay',
    image: '/projects/pycon-latam-2025/cover.png',
    timeline: { en: '3 weeks', es: '3 semanas' },
    role: { en: 'Freelance Brand Designer', es: 'Diseñadora de Marca Freelance' },
    tools: { en: 'Figma, Adobe Creative Cloud', es: 'Figma, Adobe Creative Cloud' },
    overview: {
      en: [
        "PyCon LATAM 2025 was a Python conference held in Costa Rica at the Universidad de Costa Rica, Sede del Pacífico (my own campus) in August 2025. The event's design and advertising team needed extra support, and a friend already on the team recommended me as a freelance collaborator.",
        'My job was to take the existing logo and finalize it for official event use, then build out the complete brand manual: brand essence, imagotype construction, usage rules, and identity applications. My design professor, Verónica Solano, supervised the process and signed off on the final manual.',
      ],
      es: [
        'PyCon LATAM 2025 fue un evento de Python en Costa Rica realizado en la Universidad de Costa Rica, Sede del Pacífico (mi propia sede como estudiante activa) en agosto de 2025. El equipo de diseño y publicidad del evento necesitaba apoyo, y una amistad que ya era parte del equipo me recomendó como colaboradora freelance.',
        'Mi labor fue corregir el logo existente y darle los ajustes finales para su uso oficial en el evento, y luego construir el manual de marca completo: esencia de la marca, construcción del imagotipo, usos de la marca, y aplicaciones de identidad. Mi profesora de diseño, Verónica Solano, supervisó el proceso y dio luz verde al manual final.',
      ],
    },
    gallery: [
      {
        color: 'bg-clay',
        image: '/projects/pycon-latam-2025/logo-grid.png',
        alt: { en: 'PyCon LATAM 2025 imagotype construction grid', es: 'Retícula de construcción del imagotipo de PyCon LATAM 2025' },
      },
      {
        color: 'bg-rust',
        image: '/projects/pycon-latam-2025/monochrome.png',
        alt: { en: 'PyCon LATAM 2025 monochrome logo version', es: 'Versión monocromática del logo de PyCon LATAM 2025' },
      },
      {
        color: 'bg-terracotta',
        image: '/projects/pycon-latam-2025/signage.png',
        alt: { en: 'PyCon LATAM 2025 event signage', es: 'Señalización del evento PyCon LATAM 2025' },
      },
      {
        color: 'bg-espresso',
        image: '/projects/pycon-latam-2025/staff-shirts.png',
        alt: { en: 'PyCon LATAM 2025 staff shirts', es: 'Camisetas de staff de PyCon LATAM 2025' },
      },
    ],
    summary: {
      en: "My first freelance design project, and different from starting a brand from scratch. I had to work inside a logo and direction the team had already chosen, correct it, and extend it into a full manual and a set of physical applications, all while keeping it consistent enough to pass review before the event's August deadline.",
      es: 'Mi primer proyecto de diseño freelance, y distinto a crear una marca desde cero. Tuve que trabajar dentro de un logo y una dirección que el equipo ya había elegido, corregirlo, y extenderlo en un manual completo y un set de aplicaciones físicas, manteniendo la consistencia necesaria para pasar la revisión antes de la fecha límite de agosto.',
    },
    pdf: {
      path: '/projects/pycon-latam-2025/brand-manual.pdf',
      label: { en: 'View Brand Manual (PDF)', es: 'Ver Manual de Marca (PDF)' },
    },
  },
  {
    id: '3',
    slug: 'pixmatic-studios',
    title: { en: 'Pixmatic Studios', es: 'Pixmatic Studios' },
    type: { en: 'Brand Identity & Mascot', es: 'Identidad de Marca y Mascota' },
    category: 'Graphic Design',
    cardColor: 'bg-espresso',
    image: '/projects/pixmatic-studios/cover.png',
    timeline: { en: '6 weeks', es: '6 semanas' },
    role: { en: 'Personal Project — Solo Designer', es: 'Proyecto Personal — Diseñadora Única' },
    tools: {
      en: 'Figma, Adobe Creative Cloud, Medibang Paint',
      es: 'Figma, Adobe Creative Cloud, Medibang Paint',
    },
    overview: {
      en: [
        'A personal passion project imagining what it would be like to run my own 2D animation studio, in the spirit of Disney, DreamWorks, and Pixar; the name is a nod to the latter. The brief I set for myself: build the full identity for a fictional studio from the ground up.',
        "The brand needed to feel like a familiar, polished animation house while staying warm and local, so the studio's mascot, Coco, is a playful, friendly three-toed sloth (a national symbol of Costa Rica) wearing a collar tag with a simplified variation of the logo. In the wordmark itself, the X in PIXMATIC becomes a four-pointed star with Coco's simplified face at its center, tying the mascot directly into the logotype.",
      ],
      es: [
        'Un proyecto personal por diversión, imaginando cómo sería tener mi propio estudio de animación 2D al estilo Disney o DreamWorks; el nombre es un guiño a Pixar. El reto que me propuse: construir la identidad completa de un estudio ficticio desde cero.',
        'La marca necesitaba transmitir un aire familiar al estilo Pixar, pero manteniendo calidez local, así que la mascota del estudio, Coco, es un perezoso juguetón y amigable (símbolo nacional de Costa Rica) que lleva un collar con una chapita con una variación simplificada del logo. En el logotipo, la X de PIXMATIC se convierte en una estrella de cuatro puntas con la carita simplificada de Coco en el centro, conectando la mascota directamente con el logotipo.',
      ],
    },
    gallery: [
      {
        color: 'bg-rust',
        image: '/projects/pixmatic-studios/logo-formats.png',
        alt: { en: 'Pixmatic Studios logo formats and usage', es: 'Formatos y usos del logo de Pixmatic Studios' },
      },
      {
        color: 'bg-espresso',
        image: '/projects/pixmatic-studios/logo-colors.png',
        alt: { en: 'Pixmatic Studios logo color variations', es: 'Variaciones de color del logo de Pixmatic Studios' },
      },
      {
        color: 'bg-terracotta',
        image: '/projects/pixmatic-studios/icon-colors.png',
        alt: { en: 'Pixmatic Studios icon color variations', es: 'Variaciones de color del ícono de Pixmatic Studios' },
      },
      {
        color: 'bg-clay',
        image: '/projects/pixmatic-studios/mascot-coco.png',
        alt: { en: 'Coco the sloth mascot character design', es: 'Diseño del personaje Coco, la mascota perezoso' },
      },
    ],
    summary: {
      en: "Designing a full identity system and an original character at the same time pushed me to think about branding and illustration together, how a mascot's personality has to survive being simplified down into a single mark inside a logo, and how a playful character can still sit inside a disciplined brand system.",
      es: 'Diseñar un sistema de identidad completo y un personaje original al mismo tiempo me hizo pensar en branding e ilustración de forma conjunta, cómo la personalidad de una mascota debe sobrevivir al simplificarse en una sola marca dentro de un logo, y cómo un personaje juguetón puede convivir dentro de un sistema de marca disciplinado.',
    },
  },
  {
    id: '5',
    slug: 'happy-home',
    title: { en: 'Happy Home', es: 'Happy Home' },
    type: { en: 'Logo & Brand Identity', es: 'Logo e Identidad de Marca' },
    category: 'Graphic Design',
    cardColor: 'bg-terracotta',
    image: '/projects/happy-home/cover.png',
    timeline: { en: '1 week', es: '1 semana' },
    role: { en: 'Freelance Graphic Designer', es: 'Diseñadora Gráfica Freelance' },
    tools: { en: 'Figma, Adobe Creative Cloud', es: 'Figma, Adobe Creative Cloud' },
    overview: {
      en: [
        'Happy Home rents rooms to exchange students in Costa Rica. The business already had a logo, but wanted something more iconic and distinctly their own; an identity that could hold up as they started marketing to an international audience.',
        'The new mark is an icon + wordmark logo built around a simple idea: a happy face shaped like a house. Alongside the logo, I designed functional keychains carrying the mark, made for the actual room keys tenants use day to day.',
      ],
      es: [
        'Happy Home alquila habitaciones a estudiantes de intercambio en Costa Rica. El negocio ya tenía un logo, pero querían algo más icónico y propio; una identidad que resistiera al empezar a promocionarse frente a una audiencia internacional.',
        'La nueva marca es un logo de ícono + texto construido alrededor de una idea simple: una cara feliz con forma de casa. Junto al logo, diseñé llaveros funcionales con la marca, pensados para las llaves reales que los inquilinos usan día a día.',
      ],
    },
    gallery: [
      {
        color: 'bg-terracotta',
        image: '/projects/happy-home/logo-lockup.png',
        alt: { en: 'Happy Home logo and icon lockup', es: 'Logo e ícono de Happy Home' },
      },
      {
        color: 'bg-clay',
        image: '/projects/happy-home/icon-colors.png',
        alt: { en: 'Happy Home icon color variations', es: 'Variaciones de color del ícono de Happy Home' },
      },
      {
        color: 'bg-espresso',
        image: '/projects/happy-home/logo-colors.png',
        alt: { en: 'Happy Home full logo color variations', es: 'Variaciones de color del logo completo de Happy Home' },
      },
      {
        color: 'bg-rust',
        image: '/projects/happy-home/keychains.png',
        alt: { en: 'Happy Home room key keychain mockups', es: 'Mockups de llaveros de llaves de Happy Home' },
      },
    ],
    summary: {
      en: "A short, paid freelance turnaround taught me to move fast without losing the client's input. A one-week timeline meant getting the icon concept right early, since there wasn't room for many rounds of revisions.",
      es: 'Un proyecto freelance pagado y de entrega rápida me enseñó a avanzar rápido sin perder la retroalimentación del cliente. Un plazo de una semana significó acertar con el concepto del ícono desde temprano, ya que no había espacio para muchas rondas de revisión.',
    },
  },
  {
    id: '6',
    slug: 'hack-gb',
    title: { en: 'Hack GB', es: 'Hack GB' },
    type: { en: 'Event Branding', es: 'Identidad de Evento' },
    category: 'Graphic Design',
    cardColor: 'bg-rust',
    image: '/projects/hack-gb/cover.png',
    timeline: { en: '1 week', es: '1 semana' },
    role: { en: 'Design Team Support', es: 'Apoyo al Equipo de Diseño' },
    tools: {
      en: 'Figma, Adobe Creative Cloud, Medibang Paint',
      es: 'Figma, Adobe Creative Cloud, Medibang Paint',
    },
    overview: {
      en: [
        "HackGB is the University of Wisconsin-Green Bay's collegiate hackathon, a 24-hour weekend bringing together developers, hardware engineers, and designers. The event's design team needed the logo finished fast; they were about to launch their sponsor outreach campaign and couldn't wait.",
        'The mark centers on a phoenix, referencing UW-Green Bay\'s own mascot and school spirit, paired with the "Hack GB" wordmark. With sponsorship materials on a tight deadline, the priority was landing a strong, recognizable symbol in one week rather than exploring dozens of directions.',
      ],
      es: [
        'HackGB es el hackathon universitario de la Universidad de Wisconsin-Green Bay, un fin de semana de 24 horas que reúne a desarrolladores, ingenieros de hardware y diseñadores. El equipo de diseño del evento necesitaba el logo terminado rápido; estaban por lanzar su campaña de búsqueda de patrocinadores y no podían esperar.',
        'La marca se centra en un fénix, en referencia a la mascota de UW-Green Bay, junto al texto "Hack GB". Con los materiales de patrocinio bajo una fecha límite ajustada, la prioridad fue lograr un símbolo fuerte y reconocible en una semana, en vez de explorar docenas de direcciones.',
      ],
    },
    gallery: [
      {
        color: 'bg-clay',
        image: '/projects/hack-gb/logo-colors.png',
        alt: { en: 'Hack GB full logo color variations', es: 'Variaciones de color del logo completo de Hack GB' },
      },
      {
        color: 'bg-rust',
        image: '/projects/hack-gb/logo-formats.png',
        alt: { en: 'Hack GB logo and icon formats', es: 'Formatos del logo e ícono de Hack GB' },
      },
      {
        color: 'bg-terracotta',
        image: '/projects/hack-gb/icon-colors.png',
        alt: { en: 'Hack GB phoenix icon color variations', es: 'Variaciones de color del ícono fénix de Hack GB' },
      },
      {
        color: 'bg-espresso',
        image: '/projects/hack-gb/logo-colors-2.png',
        alt: { en: 'Hack GB additional logo color variations', es: 'Variaciones de color adicionales del logo de Hack GB' },
      },
    ],
    summary: {
      en: "Designing under a hard sponsor-outreach deadline meant trusting my first strong direction instead of iterating endlessly. A good exercise in delivering a clear, symbolic mark (the phoenix) quickly for a team I'd never worked with before.",
      es: 'Diseñar bajo una fecha límite estricta para la búsqueda de patrocinadores significó confiar en mi primera dirección fuerte en vez de iterar sin fin. Un buen ejercicio para entregar rápido una marca clara y simbólica (el fénix) para un equipo con el que nunca había trabajado.',
    },
  },
]

export const getProjectBySlug = (slug: string) => projects.find((p) => p.slug === slug)