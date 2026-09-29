/**
 * Zentrale Stammdaten des Betriebs.
 * Änderungen hier wirken sich auf Header, Footer, Kontaktbereich,
 * Impressum und die strukturierten Daten (SEO) aus.
 */

export const site = {
  name: 'KRAUS',
  legalName: 'KRAUS', // TODO: echte Daten vom Kunden – vollständige Firmierung inkl. Rechtsform
  tagline: 'Bundesweit unterwegs',
  description:
    'KRAUS aus Bad Hersfeld: Dachreinigung, Fassadenreinigung, Steinreinigung und Pflasterarbeiten. Schonend, ohne aggressive Chemie, mit Nano-Langzeitschutz. Kostenlose Beratung vor Ort – bundesweit tätig.',

  // --- Kontakt -------------------------------------------------------------
  phone: {
    display: '0172 / 7821 700',
    href: 'tel:+491727821700',
    raw: '+491727821700',
  },

  // [PRÜFEN] Platzhalter – echte E-Mail-Adresse vom Kunden erfragen
  email: 'info@kraus-xxx.de',

  address: {
    street: 'Sandweg 3',
    postalCode: '36251',
    city: 'Bad Hersfeld',
    region: 'Hessen',
    country: 'DE',
    countryName: 'Deutschland',
  },

  // [PRÜFEN] Geokoordinaten sind ungefähre Werte für Bad Hersfeld.
  // Für exakte Kartendarstellung durch echte Koordinaten ersetzen.
  geo: {
    latitude: 50.8706,
    longitude: 9.7086,
  },

  openingHours: [
    { days: 'Montag – Samstag', time: '7:00 – 19:00 Uhr' },
    { days: 'Sonntag', time: 'geschlossen' },
  ],

  /** Maschinenlesbare Öffnungszeiten für schema.org */
  openingHoursSpec: [
    {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '07:00',
      closes: '19:00',
    },
  ],

  /** Radius für die kostenlose Vor-Ort-Beratung */
  consultationRadiusKm: 60,

  social: {
    // TODO: echte Daten vom Kunden – Profile ergänzen oder Einträge entfernen
    facebook: '',
    instagram: '',
  },
} as const;

/** Einsatzgebiete – fließen in areaServed (schema.org) und in die Texte ein. */
export const areasServed = [
  'Bad Hersfeld',
  'Hersfeld-Rotenburg',
  'Fulda',
  'Kassel',
  'Eisenach',
  'Hessen',
  'Thüringen',
  'Deutschland',
];

/** Hauptnavigation. `children` erzeugt das Leistungen-Dropdown. */
export const mainNav = [
  {
    label: 'Leistungen',
    href: '/#leistungen',
    children: [
      { label: 'Reinigung & Versiegelung', href: '/leistungen/reinigung' },
      { label: 'Dach & Fassade', href: '/leistungen/dach-fassade' },
      { label: 'Sanierung & Malerarbeiten', href: '/leistungen/sanierung' },
      { label: 'Garten & Pflaster', href: '/leistungen/garten-pflaster' },
    ],
  },
  // Wird ausgeblendet, solange features.showBeforeAfter false ist
  { label: 'Vorher / Nachher', href: '/#vorher-nachher', requiresBeforeAfter: true },
  { label: 'Über uns', href: '/#ueber-uns' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Kontakt', href: '/#kontakt' },
] as const;

export const footerLegal = [
  { label: 'Impressum', href: '/impressum' },
  { label: 'Datenschutz', href: '/datenschutz' },
] as const;
