export const languages = {
  es: "Español",
  en: "English",
} as const;

export const defaultLang = "es";

export const showDefaultLang = false;

export const ui = {
  es: {
    // Layout / SEO
    "meta.title": "Kurio | Agente de autorizaciones para hospitales",
    "meta.description":
      "Kurio ayuda a tu hospital a enviar autorizaciones completas a cada aseguradora desde la primera vez. Más aprobaciones, ciclo de autorización más corto.",
    "meta.locale": "es_GT",

    // Navbar / Footer common
    "nav.login": "Iniciar sesión",
    "nav.request": "Solicitar acceso",

    // Hero
    "hero.headline.0": "Expedientes completos a la primera",
    "hero.headline.1": "Construye cada paso del expediente",
    "hero.headline.2": "Visibilidad financiera en tiempo real",
    "hero.subtitle":
      "Kurio es el agente de autorizaciones de tu hospital. Conoce los requisitos de cada aseguradora y ayuda a tu equipo a enviar cada caso correctamente desde la primera vez.",

    // Results
    "results.eyebrow": "Resultados",
    "results.title": "Lo que cambia con Kurio",
    "results.intro":
      "Los hospitales que gestionan bien sus autorizaciones reducen el tiempo entre atención y autorización, con menos fricción para todos los involucrados.",
    "results.card1.title": "Cada aseguradora pide distinto",
    "results.card1.body":
      "Kurio sabe qué documentos, qué formatos y qué detalles espera cada aseguradora, y construye el expediente acorde.",
    "results.card2.title": "Sabés qué falta en cada caso",
    "results.card2.body":
      "Cada expediente muestra el próximo paso: qué documento subir, qué dato corregir, qué espera la aseguradora. Tu equipo nunca pierde un caso en el camino.",
    "results.card3.title": "Del envío al cobro, en una sola vista",
    "results.card3.body":
      "Estado de cada caso, monto autorizado, ajustes y plazos de pago — sin perseguir información entre planillas.",

    // PaymentPulse (live financial-visibility demo, replaces HowItWorks)
    "pulse.eyebrow": "Visibilidad financiera",
    "pulse.headline.lead": "Para cada expediente,",
    "pulse.headline.middle": "ves dónde está",
    "pulse.headline.accent": "cada centavo.",
    "pulse.sublede":
      "Tu agente organiza, verifica, envía y sigue cada caso. Ves dónde está cada centavo: por aseguradora, por estado, por monto.",

    // InAction (live agent demo between Hero and Results)
    "inaction.eyebrow": "Expediente en vivo",
    "inaction.headline.lead": "De la realidad clínica al expediente,",
    "inaction.headline.accent": "en tiempo real.",
    "inaction.sublede":
      "Kurio convierte cada evento del paciente en un expediente estructurado, listo para la aseguradora correcta.",
    "inaction.label.journey": "Vida del paciente",
    "inaction.label.expediente": "Expediente Kurio",

    // Solution
    "solution.quote":
      "Kurio trabaja junto a la coordinación de seguros: organiza el expediente, verifica que todo esté en orden, envía el caso y da seguimiento hasta la autorización.",

    // LeadCapture
    "lead.eyebrow": "Demo",
    "lead.title": "¿Quieres ver cómo funciona con tus propias aseguradoras?",
    "lead.subtitle":
      "Agenda una demo personalizada para tu hospital. Te mostramos cómo se ven tus aseguradoras dentro del sistema.",
    "lead.iframeTitle": "Solicitar acceso a Kurio",
    "lead.noscript": "Escríbenos a",

    // Footer
    "footer.rights": "Todos los derechos reservados.",

    // Toggle
    "toggle.aria": "Cambiar idioma",
  },
  en: {
    // Layout / SEO
    "meta.title": "Kurio | Authorizations agent for hospitals",
    "meta.description":
      "Kurio helps your hospital submit complete authorizations to every insurer from the first try. More approvals, shorter authorization cycle.",
    "meta.locale": "en_US",

    // Navbar / Footer common
    "nav.login": "Sign in",
    "nav.request": "Request access",

    // Hero
    "hero.headline.0": "Complete cases on the first try",
    "hero.headline.1": "Builds the case file, step by step",
    "hero.headline.2": "Real-time financial visibility",
    "hero.subtitle":
      "Kurio is your hospital's authorizations agent. It knows each insurer's requirements and helps your team submit every case right the first time.",

    // Results
    "results.eyebrow": "Results",
    "results.title": "What changes with Kurio",
    "results.intro":
      "Hospitals that handle authorizations well reduce the time between care and authorization, with less friction for everyone involved.",
    "results.card1.title": "Every insurer has different requirements",
    "results.card1.body":
      "Kurio knows the documents, formats and details each insurer expects, and builds the case file accordingly.",
    "results.card2.title": "You know what's missing in every case",
    "results.card2.body":
      "Every case file shows the next step: which document to upload, which data to fix, what the insurer is waiting for. Your team never loses a case along the way.",
    "results.card3.title": "From submission to payment, in a single view",
    "results.card3.body":
      "Status of every case, authorized amount, adjustments and payment timelines — without chasing information across spreadsheets.",

    // PaymentPulse (live financial-visibility demo, replaces HowItWorks)
    "pulse.eyebrow": "Financial visibility",
    "pulse.headline.lead": "For every case file,",
    "pulse.headline.middle": "you see where",
    "pulse.headline.accent": "every cent is.",
    "pulse.sublede":
      "Your agent organizes, verifies, submits and follows every case. You see where every cent is: by insurer, by state, by amount.",

    // InAction (live agent demo between Hero and Results)
    "inaction.eyebrow": "Live case file",
    "inaction.headline.lead": "From clinical reality to the case file,",
    "inaction.headline.accent": "in real time.",
    "inaction.sublede":
      "Kurio turns every patient event into a structured case file, ready for the right insurer.",
    "inaction.label.journey": "Patient journey",
    "inaction.label.expediente": "Kurio case file",

    // Solution
    "solution.quote":
      "Kurio works alongside your insurance team: organizing the case file, verifying everything is in order, submitting the case, and tracking it through to authorization.",

    // LeadCapture
    "lead.eyebrow": "Demo",
    "lead.title": "Want to see how it works with your insurers?",
    "lead.subtitle":
      "Schedule a custom demo for your hospital. We'll show you how your insurers look inside the system.",
    "lead.iframeTitle": "Request access to Kurio",
    "lead.noscript": "Email us at",

    // Footer
    "footer.rights": "All rights reserved.",

    // Toggle
    "toggle.aria": "Switch language",
  },
} as const;

export type Lang = keyof typeof ui;
export type UIKey = keyof (typeof ui)[typeof defaultLang];
