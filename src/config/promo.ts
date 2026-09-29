/**
 * Aktions-Banner.
 *
 * Das Banner erscheint nur, wenn `enabled: true` ist UND das heutige Datum
 * zwischen `startDate` und `endDate` liegt. Nach dem Enddatum blendet es sich
 * automatisch aus – ohne künstlichen Countdown, der bei jedem Besuch neu
 * startet.
 *
 * Datumsformat: 'JJJJ-MM-TT'. `endDate` ist einschließlich, d. h. am Enddatum
 * läuft die Aktion noch bis 23:59 Uhr.
 */

/** Rabatt in Prozent – wird in Überschrift und Banner eingesetzt. */
const PERCENT = 30;

export const promo = {
  enabled: true,

  /** [PRÜFEN] Laufzeit mit dem Kunden abstimmen */
  startDate: '2026-01-01',
  endDate: '2026-12-31',

  percent: PERCENT,

  eyebrow: 'Aktion für Neukunden',
  headline: `${PERCENT} % Rabatt auf alle Arbeiten`,
  text: 'Gilt für Neukunden auf alle Reinigungs-, Sanierungs- und Pflasterarbeiten. Einfach bei der Anfrage erwähnen – wir rechnen den Rabatt direkt im Angebot ein.',
  ctaLabel: 'Angebot mit Rabatt anfordern',
  ctaHref: '/#kontakt',

  /** Feindruck unter dem Banner. Leer lassen, um ihn auszublenden. */
  finePrint:
    'Nicht mit anderen Rabatten kombinierbar. Gilt nur für neu beauftragte Aufträge innerhalb des Aktionszeitraums.',
} as const;

/**
 * Prüft, ob die Aktion an einem bestimmten Tag läuft.
 * Wird zur Build-Zeit ausgewertet (statische Seite).
 */
export function isPromoActive(today: Date = new Date()): boolean {
  if (!promo.enabled) return false;

  const start = new Date(`${promo.startDate}T00:00:00`);
  const end = new Date(`${promo.endDate}T23:59:59`);

  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) return false;

  return today >= start && today <= end;
}

/** Enddatum in deutscher Schreibweise, z. B. "31.12.2026". */
export function promoEndFormatted(): string {
  const end = new Date(`${promo.endDate}T00:00:00`);
  if (Number.isNaN(end.getTime())) return '';
  return new Intl.DateTimeFormat('de-DE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(end);
}
