/**
 * Schalter für Sektionen, die erst ausgespielt werden sollen,
 * wenn echte Inhalte vorliegen.
 */
export const features = {
  /**
   * Bewertungs-Sektion.
   * Bleibt aus, bis echte Google-Bewertungen vorliegen.
   * Zum Aktivieren: auf `true` setzen und `src/content/reviews.ts` befüllen.
   */
  showReviews: false,

  /**
   * Vorher/Nachher-Galerie.
   * Bleibt aus, solange nur Platzhalterbilder vorliegen – sonst würde die
   * Seite einen Vergleich zeigen, den es real nicht gibt.
   * Zum Aktivieren: echte Bildpaare in /public/images/vorher-nachher/ ablegen
   * (siehe src/content/beforeAfter.ts) und hier auf `true` setzen.
   *
   * Hinweis: Steht dies auf `false`, werden auch die Navigations- und
   * Footer-Links auf die Galerie automatisch ausgeblendet.
   */
  showBeforeAfter: false,

  /** Sticky-Leiste auf Mobilgeräten mit "Anrufen" / "Anfrage". */
  showMobileStickyBar: true,
} as const;
