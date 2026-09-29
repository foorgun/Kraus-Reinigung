/**
 * Garantie- und Schutzdauern laut Angaben des Kunden (Flyer).
 *
 * ⚠️  Alle Werte sind mit [PRÜFEN] markiert und müssen vor dem Livegang
 *     vom Kunden schriftlich bestätigt werden – Garantieangaben sind
 *     rechtlich bindende Werbeaussagen.
 */

export interface Guarantee {
  service: string;
  duration: string;
  note?: string;
  /** true = Wert unsicher oder unleserlich, muss bestätigt werden */
  needsCheck: boolean;
}

export const guaranteesSection = {
  label: 'Garantien',
  headline: 'Wie lange der Schutz hält',
  text: 'Nach Reinigung und Versiegelung bleiben die Flächen über Jahre geschützt. Die genaue Dauer hängt von Material, Lage und Witterung ab – wir nennen sie Ihnen verbindlich im Angebot.',
};

export const guarantees: Guarantee[] = [
  {
    service: 'Dachreinigung & Dachversiegelung',
    duration: '7 – 8 Jahre',
    note: 'Schutz vor erneutem Moos- und Algenbewuchs',
    needsCheck: true,
  },
  {
    service: 'Fassadenreinigung',
    duration: '7 – 8 Jahre',
    note: 'Mit Nano-Langzeitschutz',
    needsCheck: true,
  },
  {
    service: 'Wintergarten & Glas mit Nanoversiegelung',
    duration: '4 – 5 Jahre',
    note: 'Lotuseffekt, Wasser perlt ab',
    needsCheck: true,
  },
  {
    service: 'Pflaster & Stein',
    // [PRÜFEN] Jahreszahl auf dem Flyer war nicht lesbar
    duration: 'auf Anfrage',
    note: '[PRÜFEN] Jahreszahl im Flyer unleserlich – Wert vom Kunden erfragen',
    needsCheck: true,
  },
  {
    service: 'Dachbeschichtung',
    // [PRÜFEN] 12 Jahre?
    duration: 'Garantie mit Zertifikat',
    note: '[PRÜFEN] Laufzeit bestätigen – 12 Jahre?',
    needsCheck: true,
  },
  {
    service: 'Malerarbeiten mit Nano-/Lotus-Farbe',
    duration: '10 Jahre Garantie',
    needsCheck: true,
  },
];
