/**
 * Vorher/Nachher-Galerie.
 *
 * Die Bilder liegen unter /public/images/vorher-nachher/.
 * Zum Austauschen einfach die Dateien mit gleichem Namen ersetzen –
 * oder hier Pfad, Alt-Text und Beschriftung anpassen.
 *
 * Wichtig: Vorher- und Nachher-Bild sollten dieselbe Perspektive und
 * dasselbe Seitenverhältnis haben (empfohlen: 1600 × 1000 px, 16:10).
 */

export interface BeforeAfterPair {
  id: string;
  title: string;
  category: string;
  before: string;
  after: string;
  /** Alt-Text beschreibt das Motiv, nicht den Vergleich */
  altBefore: string;
  altAfter: string;
}

// <!-- TODO: echte Daten vom Kunden – Platzhalter durch eigene Projektfotos ersetzen -->
export const beforeAfterPairs: BeforeAfterPair[] = [
  {
    id: 'pflaster',
    title: 'Pflastereinfahrt',
    category: 'Steinreinigung',
    before: '/images/vorher-nachher/pflaster-vorher.webp',
    after: '/images/vorher-nachher/pflaster-nachher.webp',
    altBefore: 'Pflastereinfahrt mit starkem Grünbelag und Moos in den Fugen',
    altAfter: 'Dieselbe Pflastereinfahrt nach der Reinigung, Steinfarbe wieder sichtbar',
  },
  {
    id: 'dach',
    title: 'Ziegeldach',
    category: 'Dachreinigung',
    before: '/images/vorher-nachher/dach-vorher.webp',
    after: '/images/vorher-nachher/dach-nachher.webp',
    altBefore: 'Ziegeldach mit flächigem Moos- und Flechtenbewuchs',
    altAfter: 'Dasselbe Ziegeldach nach Reinigung und Versiegelung',
  },
  {
    id: 'fassade',
    title: 'Hausfassade',
    category: 'Fassadenreinigung',
    before: '/images/vorher-nachher/fassade-vorher.webp',
    after: '/images/vorher-nachher/fassade-nachher.webp',
    altBefore: 'Verputzte Hausfassade mit grauen Verschmutzungen und Algenbelag',
    altAfter: 'Dieselbe Fassade nach der schonenden Reinigung',
  },
  {
    id: 'einfahrt',
    title: 'Hofeinfahrt',
    category: 'Pflasterarbeiten',
    before: '/images/vorher-nachher/einfahrt-vorher.webp',
    after: '/images/vorher-nachher/einfahrt-nachher.webp',
    altBefore: 'Alte, ausgefahrene Hofeinfahrt mit lockeren Steinen und Unkraut',
    altAfter: 'Dieselbe Hofeinfahrt nach dem Neuaufbau mit frisch verlegtem Pflaster',
  },
];
