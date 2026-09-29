/**
 * Alle Texte der Startseite an einer Stelle.
 * Überschriften, Teaser und Statements können hier ohne Code-Kenntnisse
 * angepasst werden.
 */

import { site } from '@/config/site';

export const hero = {
  headline: {
    before: 'Gründlich ',
    highlight: 'gereinigt',
    after: '. Dauerhaft geschützt.',
  },
  text: 'Stein-, Dach- und Fassadenreinigung sowie Sanierung – schonend, ohne aggressive Chemie und mit Nano-Langzeitschutz. Aus Bad Hersfeld, bundesweit unterwegs.',
  primaryCta: { label: 'Kostenloses Angebot anfordern', href: '/#kontakt' },
  secondaryCta: { label: 'Jetzt anrufen', href: 'tel:+491727821700' },
  image: {
    src: '/images/hero.webp',
    alt: 'Handwerker in blauer Arbeitskleidung reinigt eine Pflasterfläche vor einem Backsteinhaus mit einem Hochdruckreiniger, das Wasser sprüht auf den nassen Stein',
  },
  /** Glassmorphism-Karten rechts im Hero */
  teasers: [
    {
      title: 'Dachreinigung',
      text: 'Moos und Flechten runter, Langzeitschutz drauf.',
      href: '/leistungen/dach-fassade',
    },
    {
      title: 'Steinreinigung',
      text: 'Einfahrt, Terrasse und Treppe wie neu.',
      href: '/leistungen/reinigung',
    },
    {
      title: 'Pflasterarbeiten',
      text: 'Neu pflastern – vom Unterbau bis zur Fuge.',
      href: '/leistungen/garten-pflaster',
    },
  ],
};

/** Trust-Leiste direkt unter dem Hero */
export const trustItems = [
  {
    icon: 'map-pin' as const,
    title: 'Vor-Ort-Beratung',
    text: `Kostenlos im Umkreis von ${site.consultationRadiusKm} km`,
  },
  {
    icon: 'bolt' as const,
    title: 'Schnell & unverbindlich',
    text: 'Angebot ohne Verpflichtung',
  },
  {
    icon: 'calendar' as const,
    title: 'Termin nach Ihrem Wunsch',
    text: 'Wir kommen, wann Sie können',
  },
  {
    icon: 'droplet' as const,
    title: 'Kostenlose Probefläche',
    text: 'Ergebnis sehen, dann entscheiden',
  },
];

export const servicesSection = {
  label: 'Leistungen',
  headline: 'Alles rund um Haus, Hof und Garten',
  text: 'Vier Bereiche, ein Ansprechpartner. Wir reinigen, versiegeln, sanieren und gestalten – privat wie gewerblich.',
};

/** Sektion "So reinigen wir" */
export const method = {
  label: 'So reinigen wir',
  headline: 'Sauber ohne aggressive Chemie',
  text: 'Wir arbeiten mit einer Spezialmaschine, die ganz ohne chemische Zusätze auskommt. Statt hartem Wasserstrahl trifft ein fein dosiertes Luft-Wasser-Gemisch auf die Oberfläche – kraftvoll genug für festsitzenden Bewuchs und schonend genug für empfindliche Materialien.',
  image: {
    src: '/images/verfahren.webp',
    alt: 'Mitarbeiter führt einen gelben Flächenreiniger über einen Steinbelag, aus der Maschine steigt feiner Sprühnebel auf',
  },
  points: [
    {
      title: 'Ohne chemische Zusätze',
      text: 'Die Reinigungsleistung kommt aus dem Verfahren, nicht aus der Chemie.',
    },
    {
      title: 'Luft-Wasser-Gemisch',
      // [PRÜFEN] Mischungsverhältnis vom Kunden bestätigen lassen
      text: 'Der Großteil des Strahls besteht aus Luft [PRÜFEN: ca. 80 % Luft / 20 % Wasser], nur ein kleiner Teil aus Wasser.',
    },
    {
      title: 'Ohne Spritzwasser',
      text: 'Nachbarflächen, Fenster und Pflanzen bleiben trocken – kein Abkleben nötig.',
    },
    {
      title: 'Algen- und Moosentferner',
      text: 'Nach der Reinigung behandeln wir die Fläche gegen neuen Bewuchs.',
    },
    {
      title: 'Nano-Langzeitschutz',
      text: 'Die Versiegelung mit Lotuseffekt lässt Wasser und Schmutz abperlen.',
    },
    {
      title: 'Biologisch abbaubar',
      text: 'Die eingesetzten Reinigungsmittel sind biologisch abbaubar.',
    },
  ],
};

/** Über uns – Statement-Text mit Scroll-Reveal */
export const about = {
  label: 'Über uns',
  headline: 'Handwerk, das man sieht',
  /**
   * Dieser Text füllt sich beim Scrollen Wort für Wort von grau nach schwarz.
   * Wörter in {geschweiften Klammern} werden grün hervorgehoben.
   */
  statement:
    'Wir sind ein Handwerks- und Reinigungsbetrieb aus {Bad Hersfeld} und im ganzen Bundesgebiet unterwegs. Wir schauen uns jede Fläche persönlich an, reinigen auf Wunsch eine {kostenlose Probefläche} und sagen Ihnen offen, was sinnvoll ist. Termine richten wir nach Ihnen aus – {wir kommen, wann Sie können}.',
  /** Kennzahlen/USPs links – bewusst nur belegbare Angaben */
  facts: [
    {
      value: `${site.consultationRadiusKm} km`,
      label: 'Kostenlose Beratung',
      text: 'Im Umkreis von Bad Hersfeld beraten wir Sie kostenlos vor Ort.',
    },
    {
      value: 'Mo – Sa',
      label: '7:00 – 19:00 Uhr',
      text: 'Auch samstags erreichbar und im Einsatz.',
    },
    {
      value: 'Bundesweit',
      label: 'Einsatzgebiet',
      text: 'Für größere Aufträge sind wir in ganz Deutschland unterwegs.',
    },
    {
      value: '0 €',
      label: 'Probeflächenreinigung',
      text: 'Sie sehen das Ergebnis, bevor Sie sich entscheiden.',
    },
  ],
  // <!-- TODO: echte Daten vom Kunden – Gründungsjahr, Teamgröße, Referenzen -->
};

export const beforeAfterSection = {
  label: 'Vorher / Nachher',
  headline: 'Der Unterschied ist sofort sichtbar',
  text: 'Ziehen Sie den Regler, um das Ergebnis zu vergleichen.',
  // <!-- TODO: echte Daten vom Kunden – Platzhalterbilder durch eigene Projektfotos ersetzen -->
};

export const contactSection = {
  label: 'Kontakt',
  headline: 'Anfrage stellen – wir melden uns',
  text: 'Schreiben Sie uns kurz, worum es geht. Wir melden uns zeitnah und vereinbaren einen Termin für die kostenlose Beratung vor Ort.',
};
