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
    "hero.headline.0": "Aprobaciones desde la primera vez",
    "hero.headline.1": "Más autorizaciones completas",
    "hero.headline.2": "Ciclo de autorización más corto",
    "hero.subtitle":
      "Kurio es el agente de autorizaciones de tu hospital. Conoce los requisitos de cada aseguradora y ayuda a tu equipo a enviar cada caso correctamente desde la primera vez.",

    // Results
    "results.intro":
      "Los hospitales que gestionan bien sus autorizaciones reducen el tiempo entre atención y autorización, con menos fricción para todos los involucrados.",
    "results.card1.title": "Solicitudes completas",
    "results.card1.body":
      "Cada solicitud sale completa y con lo que la aseguradora necesita.",
    "results.card2.title": "Ciclo más corto",
    "results.card2.body": "Menos tiempo entre atención y autorización.",
    "results.card3.title": "Visibilidad total",
    "results.card3.body":
      "Estado en tiempo real de cada caso, sin perseguir información.",

    // HowItWorks
    "how.title": "Cómo funciona",
    "how.subtitle":
      "Desde la organización del expediente hasta el seguimiento de la autorización, Kurio guía cada paso.",
    "how.tab1.title": "Organiza el expediente",
    "how.tab1.body":
      "Checklist dinámico generado automáticamente según los requisitos de cada aseguradora.",
    "how.tab2.title": "Verifica con AI",
    "how.tab2.body":
      "El agente extrae información de los documentos, clasifica cada uno, y detecta lo que falta.",
    "how.tab3.title": "Envía con confianza",
    "how.tab3.body":
      "Confirmación de que todo está en orden antes de enviar a la aseguradora.",
    "how.tab4.title": "Da seguimiento",
    "how.tab4.body":
      "Trazabilidad del estado de la autorización hasta el cobro.",

    // Solution
    "solution.quote":
      "Kurio trabaja junto a la coordinación de seguros: organiza el expediente, verifica que todo esté en orden, envía el caso y da seguimiento hasta la autorización.",

    // LeadCapture
    "lead.title": "¿Quieres ver cómo funciona con tus propias aseguradoras?",
    "lead.subtitle": "Agenda una demo personalizada para tu hospital.",
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
    "hero.headline.0": "First-time approvals",
    "hero.headline.1": "More complete submissions",
    "hero.headline.2": "Shorter authorization cycle",
    "hero.subtitle":
      "Kurio is your hospital's authorizations agent. It knows each insurer's requirements and helps your team submit every case right the first time.",

    // Results
    "results.intro":
      "Hospitals that handle authorizations well reduce the time between care and authorization, with less friction for everyone involved.",
    "results.card1.title": "Complete submissions",
    "results.card1.body":
      "Every submission goes out complete with what the insurer needs.",
    "results.card2.title": "Shorter cycle",
    "results.card2.body":
      "Less time between care delivered and authorization received.",
    "results.card3.title": "Full visibility",
    "results.card3.body":
      "Real-time status on every case. No chasing for information.",

    // HowItWorks
    "how.title": "How it works",
    "how.subtitle":
      "From organizing the case file to tracking the authorization, Kurio guides every step.",
    "how.tab1.title": "Organize the case file",
    "how.tab1.body":
      "Dynamic checklist auto-generated from each insurer's requirements.",
    "how.tab2.title": "Verify with AI",
    "how.tab2.body":
      "The agent extracts data from documents, classifies each one, and flags what's missing.",
    "how.tab3.title": "Submit with confidence",
    "how.tab3.body":
      "Confirmation that everything is in order before sending to the insurer.",
    "how.tab4.title": "Track it",
    "how.tab4.body":
      "Traceability from authorization status all the way to reimbursement.",

    // Solution
    "solution.quote":
      "Kurio works alongside your insurance team: organizing the case file, verifying everything is in order, submitting the case, and tracking it through to authorization.",

    // LeadCapture
    "lead.title": "Want to see how it works with your insurers?",
    "lead.subtitle": "Schedule a custom demo for your hospital.",
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
