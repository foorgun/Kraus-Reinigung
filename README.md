# KRAUS – Website

Statische Website für den Handwerks- und Reinigungsbetrieb **KRAUS** (Bad Hersfeld).
Ziel der Seite: Anrufe und Anfragen generieren.

Gebaut mit **Astro** + **Tailwind CSS v4**, statisch generiert, ohne Cookies,
ohne Tracking und ohne externe CDNs.

---

## Schnellstart

```bash
npm install
cp .env.example .env     # Webhook-URL eintragen
npm run dev              # http://localhost:4321
```

| Befehl                 | Zweck                                                |
| ---------------------- | ---------------------------------------------------- |
| `npm run dev`          | Entwicklungsserver                                    |
| `npm run build`        | Produktions-Build nach `dist/`                        |
| `npm run preview`      | Build lokal ansehen                                   |
| `npm run check`        | TypeScript-/Astro-Prüfung                             |
| `npm run placeholders` | Platzhalterbilder neu erzeugen                        |

---

## Wo ändere ich was?

Alle Texte liegen zentral – **keine Texte in Komponenten suchen**:

| Datei                        | Inhalt                                                          |
| ---------------------------- | --------------------------------------------------------------- |
| `src/config/site.ts`         | Adresse, Telefon, E-Mail, Öffnungszeiten, Navigation, Einsatzgebiete |
| `src/config/promo.ts`        | Aktions-Banner: an/aus, Laufzeit, Prozentsatz, Texte             |
| `src/config/features.ts`     | Sektionen ein-/ausblenden (Bewertungen, Vorher/Nachher, Sticky-Leiste) |
| `src/content/home.ts`        | Alle Texte der Startseite (Hero, Trust-Leiste, Verfahren, Über uns) |
| `src/content/services.ts`    | Alle Leistungen, die 4 Unterseiten, Checkboxen im Formular       |
| `src/content/faq.ts`         | Häufige Fragen                                                   |
| `src/content/guarantees.ts`  | Garantie-/Schutzdauern                                           |
| `src/content/beforeAfter.ts` | Vorher/Nachher-Paare                                             |
| `src/content/reviews.ts`     | Bewertungen (aktuell leer und ausgeblendet)                      |
| `src/styles/global.css`      | Farben, Schriften, Radien, Schatten (`@theme`-Block ganz oben)   |

### Farben anpassen

In `src/styles/global.css` im `@theme`-Block. Alles andere zieht automatisch nach.

```css
--color-brand-logo: #3a8f3c;  /* unverändertes Logo-Grün, für Grafiken */
--color-brand-500:  #358236;  /* Buttons & Highlights */
--color-navy-700:   #1e3a8a;  /* Sekundärfarbe */
--color-ink-50:     #f4f6f8;  /* helles Grau */
--color-ink-900:    #171b21;  /* Text */
```

> **Warum ist `brand-500` nicht exakt `#3A8F3C`?**
> Weiße Schrift auf `#3A8F3C` erreicht nur 4,06:1 und verfehlt damit WCAG AA
> (4,5:1) für normale Textgrößen – betrifft alle gefüllten Buttons. `#358236`
> erreicht 4,78:1 und ist optisch praktisch identisch. Das Original-Grün bleibt
> als `--color-brand-logo` erhalten.

---

## Kontaktformular

Das Formular schickt einen **JSON-POST** an `PUBLIC_FORM_WEBHOOK_URL`
(z. B. ein n8n-Webhook).

```json
{
  "name": "Max Mustermann",
  "telefon": "0172 1234567",
  "email": "max@beispiel.de",
  "ort": "36251 Bad Hersfeld",
  "leistungen": ["Steinreinigung", "Dachreinigung"],
  "nachricht": "Terrasse 40 m², bitte Angebot.",
  "datenschutz": true,
  "quelle": "https://…/",
  "gesendetAm": "2026-09-24T09:12:00.000Z"
}
```

### ⚠️ CORS – bitte vor dem Livegang testen

Der Webhook wird **aus dem Browser** aufgerufen. Er muss CORS erlauben, sonst
blockiert der Browser den Versand:

```
Access-Control-Allow-Origin:  https://<ihre-domain>
Access-Control-Allow-Methods: POST, OPTIONS
Access-Control-Allow-Headers: Content-Type
```

Die `OPTIONS`-Vorabanfrage muss mit Status `204` beantwortet werden.
In **n8n**: Webhook-Node → *Options* → *Allowed Origins (CORS)*.

Schlägt der Versand trotzdem fehl, zeigt das Formular automatisch einen
Fallback mit Anruf-Button und einer **vorausgefüllten E-Mail** – so geht keine
Anfrage verloren.

### Spam-Schutz

Ohne Cookies, ohne externe Dienste, ohne Captcha:

1. Honeypot-Feld `website` (unsichtbar, `tabindex="-1"`, `aria-hidden`)
2. Mindest-Ausfüllzeit von 2,5 Sekunden

---

## Aktions-Banner

`src/config/promo.ts`. Das Banner erscheint nur, wenn `enabled: true` **und**
das heutige Datum zwischen `startDate` und `endDate` liegt. Kein künstlicher
Countdown.

> **Wichtig:** Die Seite ist statisch. Damit das Banner nach dem Enddatum
> verschwindet, muss **einmal neu gebaut** werden. Empfehlung: bei Netlify/Vercel
> einen geplanten Build (Deploy-Hook / Cron) einrichten, z. B. nachts.

---

## Bilder ersetzen

Alle Bilder unter `public/images/` sind **Platzhalter**. Zum Austauschen einfach
eine Datei mit gleichem Namen ablegen:

| Datei                                     | Empfohlene Größe | Verwendung                      |
| ----------------------------------------- | ---------------- | ------------------------------- |
| `hero.webp`                               | 1920 × 1080      | Startseiten-Hero                |
| `verfahren.webp`                          | 900 × 1125 (4:5) | Sektion „So reinigen wir“       |
| `og-default.jpg`                          | 1200 × 630       | Vorschaubild für Social Media   |
| `leistungen/<slug>.webp`                  | 800 × 550        | Leistungskarte                  |
| `leistungen/<slug>-hero.webp`             | 1920 × 1080      | Hero der Unterseite             |
| `vorher-nachher/<id>-vorher.webp`         | 1600 × 1000      | Vorher-Bild                     |
| `vorher-nachher/<id>-nachher.webp`        | 1600 × 1000      | Nachher-Bild                    |

**Vorher/Nachher:** Die Galerie ist derzeit ausgeblendet
(`features.showBeforeAfter: false`), weil nur Platzhalter vorliegen – die Links
in Navigation und Footer verschwinden dadurch automatisch mit. Beide Bilder
eines Paares brauchen dieselbe Perspektive und dasselbe Seitenverhältnis,
sonst „springt“ der Vergleich.

**Format:** WebP. Umwandlung z. B. mit
`npx sharp-cli -i foto.jpg -o hero.webp --format webp --quality 82`.

Alt-Texte stehen bei den jeweiligen Inhalten in `src/content/`.

Logo: `public/logo.svg` (dunkel), `public/logo-invers.svg` (hell, Footer),
`public/favicon.svg`. Alle drei sind aktuell Text-Platzhalter.

---

## Deployment

Funktioniert ohne Anpassung auf **Netlify** (`netlify.toml`) und **Vercel**
(`vercel.json`). Build: `npm run build`, Ausgabe: `dist/`.

Environment-Variablen im Hosting-Dashboard setzen:

| Variable                  | Beispiel                                    |
| ------------------------- | ------------------------------------------- |
| `PUBLIC_FORM_WEBHOOK_URL` | `https://n8n.example.com/webhook/kraus`     |
| `PUBLIC_SITE_URL`         | `https://www.kraus-reinigung.de`            |

`PUBLIC_SITE_URL` fließt in `sitemap.xml`, Canonical-URLs und Open-Graph-Tags.
**Vor dem Livegang setzen** – sonst zeigen diese auf die Platzhalter-Domain.
Danach auch `public/robots.txt` (Sitemap-Zeile) anpassen.

---

## Technische Eckdaten

- **Lighthouse** (lokaler Produktions-Build, Stand 24.09.2026):

  | Seite                         | Performance | Barrierefreiheit | Best Practices | SEO   |
  | ----------------------------- | ----------- | ---------------- | -------------- | ----- |
  | `/` (mobil)                   | 98          | 100              | 100            | 100   |
  | `/` (Desktop)                 | 100         | 100              | 100            | 100   |
  | `/leistungen`                 | 100         | 100              | 100            | 100   |
  | `/leistungen/reinigung`       | 100         | 100              | 100            | 100   |
  | `/leistungen/garten-pflaster` | 99          | 100              | 100            | 100   |
  | `/impressum`                  | 100         | 100              | 100            | 69¹   |

  ¹ Nur wegen des gesetzten `noindex` – beabsichtigt, solange Platzhalter drin stehen.

- **Schriften** lokal unter `public/fonts/` (Inter + Plus Jakarta Sans, nur
  latin/latin-ext). Kein Google-Fonts-CDN → DSGVO-konform.
- **Kein JavaScript-Framework.** Die Interaktionen (Menü, Akkordeon,
  Vorher/Nachher-Regler, Scroll-Reveal, Formular) sind einzelne, inline
  ausgelieferte Module.
- **`prefers-reduced-motion`** wird respektiert: Animationen aus, alle Inhalte
  sofort sichtbar.
- **Strukturierte Daten:** `HomeAndConstructionBusiness`, `WebSite`, `FAQPage`,
  je Unterseite `Service` + `BreadcrumbList`.
  Bewusst **ohne** `aggregateRating`, solange keine echten Bewertungen vorliegen.
- Impressum und Datenschutz stehen auf `noindex` und sind aus der Sitemap
  ausgenommen, solange sie Platzhalter enthalten.

---

## Bewertungen aktivieren

1. Echte Google-Bewertungen in `src/content/reviews.ts` eintragen
   (wörtliches Zitat, Vorname + Ort, Datum, Sterne).
2. In `src/config/features.ts` → `showReviews: true`.

Es wurden bewusst **keine** Bewertungen, Sterne, Kundenzahlen oder
Partnerlogos erfunden.

---

## Offene Punkte

Siehe **[OFFENE-PUNKTE.md](./OFFENE-PUNKTE.md)** – vollständige Liste aller
`[PRÜFEN]`- und `TODO`-Stellen, die vor dem Livegang geklärt werden müssen.
