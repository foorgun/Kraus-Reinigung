/**
 * Kundenbewertungen.
 *
 * ⚠️  Diese Sektion ist bewusst DEAKTIVIERT (siehe src/config/features.ts →
 *     showReviews: false) und das Array ist leer.
 *
 *     Es werden hier keine Bewertungen, Sterne oder Kundenzahlen erfunden.
 *     Sobald echte Google-Bewertungen vorliegen:
 *       1. Einträge unten ergänzen (wörtliches Zitat, Vorname + Ort, Datum)
 *       2. In src/config/features.ts `showReviews: true` setzen
 *
 *     Hinweis: Bewertungen dürfen nur mit Einverständnis bzw. aus öffentlich
 *     einsehbaren Quellen zitiert werden. AggregateRating-Schema erst
 *     ausgeben, wenn die Bewertungen tatsächlich auf der Seite stehen.
 */

export interface Review {
  quote: string;
  author: string;
  location: string;
  /** 1–5 */
  rating: number;
  date: string;
  service?: string;
}

// <!-- TODO: echte Daten vom Kunden – echte Google-Bewertungen eintragen -->
export const reviews: Review[] = [];

export const reviewsSection = {
  label: 'Bewertungen',
  headline: 'Was Kundinnen und Kunden sagen',
  text: 'Rückmeldungen aus abgeschlossenen Aufträgen.',
};
