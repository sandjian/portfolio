

export const heroContent = {
  newFeatureLinkText: 'Disponible para nuevos desafíos',
  newFeatureLinkHref: '#contact',

  headline: 'Alejandro Sandjian, Desarrollador Full Stack ',
  subheadline: 'Con más de dos años de experiencia como desarrollador web freelance, me especializo en la optimización de código y la creación de interfaces modernas y visualmente atractivas, siempre priorizando una buena experiencia de usuario',

  button1: {
    text: 'Contactar',
    href: '#contact',
  },
  button2: {
    text: 'Descargar CV',
  }
};


export const Aboutme = {
  breakout: {
    title: "Acerca de mí",
    description: "Me formé como Ingeniero Pesquero en la Universidad Tecnológica Nacional de Mar del Plata, lugar donde pude adquirir los conocimientos básicos de programación en sus laboratorios de informática. A partir de 2021, de forma autodidacta y durante la pandemia, me especialicé en el desarrollo web. Esta etapa me permitió colaborar en diversos proyectos que impulsaron mi trayectoria como programador.",
    buttonText: "Conoce más",
    buttonUrl: "#",
  },

  spotlightCards: [
    {
      title: "Disponibilidad Global",
      description: "Colaboración flexible con equipos globales, adaptándome a distintos husos horarios y requisitos del cliente.",
    },
    {
      title: "Enfoque Proactivo",
      description: "Búsqueda constante de nuevas soluciones y optimizaciones para lograr un rendimiento destacado.",
    },
    {
      title: "Aprendizaje Constante",
      description: "Compromiso con el aprendizaje de nuevas tecnologías para estar siempre a la vanguardia.",
    },
    {
      title: "Comunicación Transparente",
      description: "Comunicación clara y fluida con clientes y equipos para un desarrollo colaborativo y eficiente.",
    },
  ],

  images: {
    mainImage: {
      src: "/profile/01.jpg",
      alt: "Alejandro Sandjian profile",
    },
    secondaryImage: {
      src: "/profile/02.jpg",
      alt: "Alejandro Sandjian profile #2",
    },
  },

  achievementsSection: {
    title: "Mis Números",
    description: "A lo largo de mi trayectoria freelance, he logrado los siguientes hitos personales:",
    achievements: [
      { label: "Proyectos Entregados", value: "25+" },
      { label: "Clientes Satisfechos", value: "15+" },
      { label: "Horas de Código", value: "2000+" },
      { label: "Frameworks", value: "10+" },
    ],
  },

  secondBreakout: {
    title: "¿A qué me dedico?",
    description: "Mi formación como desarrollador Full Stack me otorga una visión completa de la arquitectura web. Domino un amplio espectro de tecnologías, lo que me permite aportar soluciones que van desde la gestión de bases de datos y lógica de servidor, hasta el diseño visual y la interactividad del lado del cliente.",
  },

  secondSpotlightCards: [
    {
      title: "Desarrollo Web",
      description: "Desde sitios estáticos para emprendimientos hasta plataformas complejas, construyo sitios web escalables y a medida del cliente.",
    },
    {
      title: "Software como Servicio (SaaS)",
      description: "Diseño y desarrollo enfocado en la funcionalidad, experiencia de usuario y eficiencia operativa.",
    },
    {
      title: "E-commerce",
      description: "Integro sistemas CMS Headless y soluciones de e-commerce robustas para una gestión de contenido flexible y ventas online.",
    },
    {
      title: "Optimización SEO",
      description: "Implementación de estrategias y mejores prácticas SEO para mejorar la visibilidad orgánica y el posicionamiento de tu sitio web en buscadores.",
    },
  ],
};

export const ProjectsContent = {
  title: "Mis Proyectos Destacados",
  description: "Te presento las herramientas y tecnologías que integro en mis proyectos. Conoce cómo aplico cada una para alcanzar cada objetivo propuesto.",
  projects: [
    {
      name: "Blog Personal",
      image: "/projects/s1.webp",
      resume: "Blog o sitio de noticias integrado con Contentful, un CMS Headless para la gestión de contenido.",
      description: "Desarrollado con Next.js y Contentful, este blog personal destaca por su contenido dinámico y optimización SEO. Integra funcionalidades clave para la creación y gestión eficiente de artículos, ofreciendo una experiencia de lectura rápida y amigable",
      technologies: ["Next.js", "Tailwind CSS", "Contentful"],
      href: "https://blog-next-opal-two.vercel.app",
      repository: "https://github.com/sandjian/blog-next"
    },
    {
      name: "Viralify Marketing",
      image: "/projects/s2.webp",
      resume: "Página web estática con formulario de contacto para agencia de marketing",
      description: "Desarrollo de una página web moderna y responsiva para una agencia de marketing digital. Construida con Next.js y Tailwind CSS, la web destaca por su diseño atractivo, animaciones fluidas y optimización para la captación de leads, ofreciendo una experiencia de usuario dinámica.",
      technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
      href: "https://viralify-marketing.vercel.app",
      repository: "https://github.com/sandjian/viralify-marketing"
    },
    {
      name: "Marketing platform",
      image: "/projects/s3.webp",
      resume: "Página web para agencia de marketing con admin para la gestión de citas o consultas",
      description: "Desarrollo de una plataforma integral para consultoría de marketing, que combina una moderna landing page con un panel de administración robusto. Permite la gestión de citas y la reserva de videollamadas con clientes",
      technologies: ["Next.js", "Appwrite", "twilio"],
      href: "https://marketing-web-pi.vercel.app",
      repository: "https://github.com/sandjian/marketing-web"
    },

  ],
};

export const CTAData = {
  title: "¿Listo para tu Próximo Gran Proyecto?",
  description: "Si tienes una idea o un desafío web en mente, hablemos. Transforma tu visión en una solución digital.",
  buttonText: "Contactame",
  buttonUrl: "#contact",
};

export const TechStackData = {
  title: "Mi Stack de Tecnológico",
  description: "Te presento las herramientas y tecnologías que integro en mis proyectos, las cuales me permiten ofrecer soluciones interesantes desde el lado de la escalabilidad, rendimiento y experiencia de usuario. Conoce cómo aplico cada una para alcanzar cada objetivo propuesto.",
 technologies: [
    {
      id: "node-js",
      name: "Node.js",
      description: "Utilizo Node.js para desarrollar servicios backend robustos y APIs escalables, gestionando la lógica de negocio y la interacción con bases de datos de manera eficiente.",
      image: "/stack/Nodejs.svg",
    },
    {
      id: "react-js",
      name: "React.js",
      description: "Mi elección para construir interfaces de usuario dinámicas e interactivas. Con React, desarrollo componentes reutilizables que aseguran una experiencia web fluida y atractiva.",
      image: "/stack/React.svg",
    },
    {
      id: "javascript",
      name: "JavaScript",
      description: "Como el pilar del desarrollo web, aplico JavaScript para dar interactividad al frontend y construir la lógica del backend, garantizando funcionalidades complejas y fluidas.",
      image: "/stack/JavaScript.svg",
    },
    {
      id: "typescript",
      name: "TypeScript",
      description: "Incorporo TypeScript para desarrollar código más seguro y mantenible, reduciendo errores en tiempo de desarrollo y facilitando la colaboración en proyectos complejos.",
      image: "/stack/TypeScript.svg",
    },
    {
      id: "html5",
      name: "HTML",
      description: "La base estructural de toda aplicación web. Utilizo HTML para crear marcados semánticos y accesibles, asegurando la correcta organización del contenido y la estructura fundamental.",
      image: "/stack/HTML5.svg",
    },
    {
      id: "css",
      name: "CSS",
      description: "Aplico CSS para el estilizado y diseño visual de interfaces, asegurando que cada proyecto no solo sea funcional, sino también atractivo y responsivo en cualquier dispositivo.",
      image: "/stack/CSS3.svg",
    },
    {
      id: "tailwindcss",
      name: "Tailwind CSS",
      description: "Mi framework CSS preferido para el desarrollo ágil de interfaces modernas y personalizadas, permitiendo una estilizado rápido y consistente directamente en el marcado.",
      image: "/stack/TailwindCSS.svg",
    },
    {
      id: "git",
      name: "Git",
      description: "Fundamental para el control de versiones y la colaboración en equipo. Utilizo Git para gestionar eficientemente el código, realizar seguimiento de cambios y mantener la integridad del proyecto.",
      image: "/stack/Git.svg",
    },
    {
      id: "github",
      name: "GitHub",
      description: "Plataforma esencial para el alojamiento y colaboración en mis repositorios, facilitando el trabajo en equipo, la revisión de código y la gestión de proyectos de forma organizada.",
      image: "/stack/GitHub.svg",
    },
    {
      id: "mysql",
      name: "MySQL",
      description: "Experiencia en el diseño y la gestión de bases de datos relacionales robustas con MySQL, optimizando el almacenamiento y la consulta de grandes volúmenes de datos estructurados.",
      image: "/stack/MySQL.svg",
    },
    {
      id: "postgresql", 
      name: "PostgreSQL",
      description: "Domino PostgreSQL para la creación de bases de datos relacionales avanzadas, aprovechando sus capacidades de escalabilidad, integridad de datos y extensibilidad para aplicaciones complejas.",
      image: "/stack/PostgresSQL.svg",
    },
    {
      id: "contentful",
      name: "Contentful",
      description: "Integro Contentful como CMS headless para ofrecer a mis clientes una gestión de contenido flexible y eficiente, permitiendo actualizaciones rápidas y un control total sobre la distribución del contenido.",
      image: "/stack/contentful.svg",
    },
    {
      id: "postman",
      name: "Postman",
      description: "Utilizo Postman para el diseño, prueba y documentación de APIs REST/GraphQL, agilizando el desarrollo y asegurando la correcta comunicación entre servicios.",
      image: "/stack/Postman.svg",
    },
    {
      id: "next-js",
      name: "Next.js",
      description: "Mi framework predilecto para desarrollar aplicaciones web de alto rendimiento y optimizadas para SEO. Combino SSR, SSG y RSC para crear experiencias rápidas, escalables y modernas.",
      image: "/stack/Nextjs.svg",
    },
    {
      id: "appwrite",
      name: "Appwrite",
      description: "Integro Appwrite como solución backend completa para autenticación, bases de datos y almacenamiento, acelerando el desarrollo y proporcionando un entorno seguro para mis aplicaciones.",
      image: "/stack/Appwrite.svg",
    },
    {
      id: "mongodb",
      name: "MongoDB",
      description: "Implemento MongoDB para la gestión de bases de datos NoSQL flexibles y escalables, ideal para manejar grandes volúmenes de datos no estructurados en aplicaciones dinámicas.",
      image: "/stack/MongoDB.svg",
    },
    {
      id: "vscode",
      name: "VS Code",
      description: "Mi editor de código principal, configurado con extensiones clave para maximizar la productividad y garantizar un entorno de desarrollo eficiente y personalizable.",
      image: "/stack/VSC.svg",
    },
    {
      id: "figma",
      name: "Figma",
      description: "Empleo Figma para el diseño de UI/UX, creando prototipos interactivos y facilitando la colaboración en tiempo real para visualizar y perfeccionar la experiencia del usuario antes de la implementación.",
      image: "/stack/figma.svg",
    },
    {
      id: "eslint",
      name: "ESLint",
      description: "Utilizo ESLint para mantener un código JavaScript/TypeScript limpio y consistente, aplicando reglas de linting que mejoran la calidad del código y previenen errores en el desarrollo.",
      image: "/stack/ESLint.svg",
    },
    {
      id: "powershell",
      name: "PowerShell",
      description: "Empleo PowerShell para la automatización de tareas de desarrollo y administración de sistemas, optimizando flujos de trabajo y mejorando la eficiencia en entornos Windows.",
      image: "/stack/Powershell.svg",
    },
  ],
};


export const ContactMethodsData = [
  {
    title: "WhatsApp", 
    description: "La forma más rápida de contactarme.", 
    iconKey: "FaWhatsapp", 
    value: "+54 9 223 5685711", 
    link: "https://wa.me/+5492235685711?text=Hola%20Alejandro,%20te%20contacto%20desde%20tu%20portfolio.",
  },
  {
    title: "Email",
    description: "Envíame un correo electrónico.",
    iconKey: "Mail",
    value: "alesandjian@gmail.com",
    link: "mailto:alesandjian@gmail.com",
  },
  {
    title: "Ubicación",
    description: "Mar del Plata, Buenos Aires, Argentina.",
    iconKey: "MapPin",
    value: "Mar del Plata, Argentina",
    link: "https://www.google.com/maps/place/Mar+del+Plata",
  },
];

export const ContactData = {
  formTitle: "¿Hablamos de tu proyecto?",
  formDescription: "Contame sobre tu idea o proyecto y me pondré en contacto contigo en menos de 24 horas.",
  namePlaceholder: "Tu Nombre",
  emailPlaceholder: "Tu Correo Electrónico",
  subjectPlaceholder: "Asunto (Opcional)",
  messagePlaceholder: "Contame sobre tu proyecto...",
  submitButtonText: "Enviar Mensaje",
  successTitle: "¡Mensaje Enviado!",
  successMessage: "Gracias por tu mensaje. Me pondré en contacto contigo en menos de 24 horas.",
  sendAnotherMessageButton: "Enviar Otro Mensaje",
  quickResponseTitle: "Garantía de Respuesta Rápida",
  quickResponseText: "Me enorgullece ofrecer tiempos de respuesta rápidos. Todas las consultas son respondidas en un plazo de 24 horas, y coordinaremos una llamada para discutir tu proyecto en detalle.",
  validation: {
    nameRequired: 'Por favor, ingresa tu nombre.',
    emailRequired: 'Por favor, ingresa tu correo electrónico.',
    emailInvalid: 'Por favor, ingresa un correo electrónico válido.',
    messageRequired: 'Por favor, escribe un mensaje.',
    messageMinLength: 'El mensaje debe tener al menos 10 caracteres.',
    submitError: 'Ocurrió un error inesperado. Por favor, intenta de nuevo.',
    failedToSend: 'Error al enviar el mensaje.',
  }
};