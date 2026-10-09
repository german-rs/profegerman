const SITE = "https://profegerman.cl";

export const IDS = {
  website: `${SITE}/#website`,
  business: `${SITE}/#business`,
  person: `${SITE}/#person`,
};

const areaServed = {
  "@type": "AdministrativeArea",
  name: "Región Metropolitana de Santiago",
};

// Nodos que van en TODAS las páginas
export const siteGraph = [
  {
    "@type": "WebSite",
    "@id": IDS.website,
    url: `${SITE}/`,
    name: "Profe Germán",
    inLanguage: "es-CL",
    publisher: { "@id": IDS.business },
  },
  {
    "@type": ["LocalBusiness", "EducationalOrganization"],
    "@id": IDS.business,
    name: "Profe Germán",
    url: `${SITE}/`,
    image: `${SITE}/og.png`,
    description:
      "Clases particulares de computación, celular y alfabetización digital a domicilio para adultos y personas mayores, con atención en Lengua de Señas Chilena.",
    telephone: "+56982960453",
    areaServed,
    knowsLanguage: ["es-CL", "LSCh"],
    founder: { "@id": IDS.person },
    sameAs: ["https://germanriveros.cl"],
  },
  {
    "@type": "Person",
    "@id": IDS.person,
    name: "Germán Riveros",
    jobTitle: "Profesor de computación y alfabetización digital",
    url: "https://germanriveros.cl",
    worksFor: { "@id": IDS.business },
  },
];

// Para las páginas de cada clase
export const serviceSchema = (s: {
  name: string;
  description: string;
  path: string;
}) => ({
  "@type": "Service",
  name: s.name,
  description: s.description,
  url: `${SITE}${s.path}`,
  provider: { "@id": IDS.business },
  areaServed,
  audience: { "@type": "Audience", audienceType: "Adultos y personas mayores" },
  offers: {
    "@type": "Offer",
    price: "20000",
    priceCurrency: "CLP",
    description: "Clase de 1 hora a domicilio",
  },
});

// Para el home (o donde muestres las preguntas frecuentes)
export const faqSchema = (faqs: { q: string; a: string }[]) => ({
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
});