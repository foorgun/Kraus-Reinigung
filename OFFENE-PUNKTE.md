# Offene Punkte vor dem Livegang

Alles, was noch vom Kunden bestätigt oder geliefert werden muss.
Sortiert nach Dringlichkeit.

---

## 🔴 Blockierend – ohne das darf die Seite nicht online

### 1. Impressum
**Datei:** `src/pages/impressum.astro` · 14 Platzhalter

Pflichtangaben nach § 5 DDG (ehem. TMG) und § 18 Abs. 2 MStV:

- [ ] Vollständige Firmierung inkl. Rechtsform
- [ ] Vertretungsberechtigte Person
- [ ] Registergericht + Registernummer (falls eingetragen)
- [ ] USt-IdNr. bzw. Steuernummer
- [ ] Zuständige Handwerkskammer + Kammerbezirk
- [ ] Gesetzliche Berufsbezeichnung + Staat der Verleihung
- [ ] Berufsrechtliche Regelungen (i. d. R. HwO)
- [ ] Verantwortlich nach § 18 Abs. 2 MStV
- [ ] Berufshaftpflichtversicherung (Name, Anschrift, Geltungsraum)
- [ ] Erklärung zur Verbraucherstreitbeilegung
- [ ] Bildnachweise (sobald echte Fotos eingesetzt sind)

### 2. Datenschutzerklärung
**Datei:** `src/pages/datenschutz.astro` · 11 Platzhalter

- [ ] Verantwortlicher (Firmierung + vertretungsberechtigte Person)
- [ ] Datenschutzbeauftragter – benötigt? Sonst Abschnitt löschen
- [ ] Hosting-Anbieter: Name, Anschrift, AV-Vertrag, Serverstandort
- [ ] Speicherdauer der Server-Logfiles
- [ ] Empfangsdienst des Formulars (n8n o. ä.): Name, Anschrift, Serverstandort,
      AV-Vertrag; bei Drittland zusätzlich die Transfergrundlage
- [ ] Speicherdauer der Formularanfragen
- [ ] Anschrift der zuständigen Aufsichtsbehörde (Hessen)
- [ ] **Juristische Prüfung** beider Seiten

> Beide Seiten stehen aktuell auf `noindex` und sind aus der Sitemap
> ausgenommen. Nach dem Befüllen: `noindex` in `src/layouts/LegalLayout.astro`
> entfernen und den Filter in `astro.config.mjs` anpassen.

### 3. E-Mail-Adresse
**Datei:** `src/config/site.ts` · Zeile 21

Aktuell steht überall der Platzhalter `info@kraus-xxx.de` – sichtbar im Footer,
im Kontaktbereich, im Impressum, in der Datenschutzerklärung und in den
strukturierten Daten.

- [ ] Echte E-Mail-Adresse eintragen

### 4. Garantieangaben
**Datei:** `src/content/guarantees.ts`

Garantiezusagen sind rechtlich bindende Werbeaussagen. Alle Werte stammen aus
dem Flyer und müssen **schriftlich bestätigt** werden:

| Leistung                                | Angabe im Flyer             | Status |
| --------------------------------------- | --------------------------- | ------ |
| Dachreinigung / -versiegelung           | 7–8 Jahre Schutz            | [ ] bestätigen |
| Fassadenreinigung                       | 7–8 Jahre Schutz            | [ ] bestätigen |
| Wintergarten / Glas mit Nanoversiegelung| 4–5 Jahre Schutz            | [ ] bestätigen |
| Pflaster / Stein                        | **unleserlich** → „auf Anfrage“ | [ ] Jahreszahl erfragen |
| Dachbeschichtung                        | Garantie mit Zertifikat – 12 Jahre? | [ ] Laufzeit bestätigen |
| Malerarbeiten mit Nano-/Lotus-Farbe     | 10 Jahre Garantie           | [ ] bestätigen |

Die beiden unklaren Werte werden auf der Seite derzeit in einem gelben
Hinweiskasten angezeigt – **das muss vor dem Livegang weg.**

### 5. Domain
**Dateien:** `astro.config.mjs`, `public/robots.txt`, Hosting-Umgebungsvariablen

Aktueller Platzhalter: `https://www.kraus-reinigung.de`

- [ ] `PUBLIC_SITE_URL` im Hosting setzen
- [ ] Sitemap-Zeile in `public/robots.txt` anpassen

### 6. Formular-Webhook testen
**Datei:** `.env` / Hosting-Umgebungsvariablen

- [ ] `PUBLIC_FORM_WEBHOOK_URL` setzen
- [ ] CORS am Webhook konfigurieren (siehe README) und **echten Testversand
      aus dem Browser** durchführen – nicht nur per curl

---

## 🟡 Wichtig – Inhalte, die die Seite unvollständig wirken lassen

### 7. Logo
**Dateien:** `public/logo.svg`, `public/logo-invers.svg`, `public/favicon.svg`,
`public/apple-touch-icon.png`

Aktuell Text-Platzhalter „KRAUS“ mit stilisiertem K.

- [ ] Original-Logo als SVG liefern (Dunkel- und Hellversion)
- [ ] Favicon + Apple-Touch-Icon daraus ableiten

### 8. Fotos
**Ordner:** `public/images/`

Stand: 7 echte Fotos eingesetzt, 4 Platzhalter offen (plus 8 Vorher/Nachher,
solange die Galerie aus ist).

**Bereits mit echtem Foto belegt**

| Datei | Motiv |
| ----- | ----- |
| `hero.webp` | Handwerker mit Hochdruckreiniger auf Pflaster |
| `og-default.jpg` | gleiches Motiv, Social-Vorschau |
| `leistungen/reinigung.webp` | Glasfassadenreinigung von der Hebebühne |
| `leistungen/dach-fassade.webp` | Fensterreinigung an Klinkerfassade |
| `leistungen/sanierung.webp` | Innenraum während der Kernsanierung |
| `leistungen/garten-pflaster.webp` | Klinker-Gartenweg im Fischgrätmuster |
| `verfahren.webp` | Flächenreiniger im Einsatz auf Steinbelag |

**Noch als Platzhalter offen**

- [ ] `leistungen/reinigung-hero.webp` – 1920 × 1080
- [ ] `leistungen/dach-fassade-hero.webp` – 1920 × 1080
- [ ] `leistungen/garten-pflaster-hero.webp` – 1920 × 1080
- [ ] `leistungen/sanierung-hero.webp` – 1920 × 1080
- [ ] 4 Vorher/Nachher-Paare 1600 × 1000 (erst nötig, wenn die Galerie an soll)

**Qualitätshinweise zu den eingesetzten Fotos**

- `leistungen/dach-fassade.webp` liegt nur in 500 × 344 px vor und ist auf
  hochauflösenden Displays merklich weicher als die Nachbarkarten.
  Bei Gelegenheit gegen eine größere Fassadenaufnahme tauschen.
- `leistungen/reinigung.webp` zeigt ein Gewerbeobjekt mit Glasfassade, nicht
  das typische Privathaus. Die fremde Firmenbeschriftung wurde weggeschnitten.
- `hero.webp` hat 1920 px Breite. Für gestochen scharfe Darstellung auf
  Retina-Displays wäre eine Fassung ab 2560 px besser.
- `verfahren.webp` liegt in 687 × 859 px vor, wird am Desktop aber 576 CSS-px
  breit dargestellt – das entspricht nur 1,2-facher Pixeldichte und wirkt dort
  etwas weich. Auf dem Handy (350 CSS-px) ist es scharf. Für den Desktop wäre
  eine Fassung ab 1200 px Breite besser.
- `verfahren.webp` zeigt eine US-Straßenszene (Palmen, amerikanische Ampeln).
  Auf dem Foto ist außerdem deutlich Sprühnebel zu sehen, während direkt
  daneben „Ohne Spritzwasser" steht. Beides spricht dafür, hier mittelfristig
  eine eigene Aufnahme der tatsächlich eingesetzten Maschine zu verwenden.
- Alle vier Karten-Motive sind Stockfotos. Sobald eigene Projektfotos
  vorliegen, diese bevorzugen – sie wirken glaubwürdiger und vermeiden die
  Frage, ob gezeigte Objekte eigene Referenzen sind.

### 9. Verfahrensangaben
**Dateien:** `src/content/home.ts` (Zeile 89), `src/content/services.ts` (Zeile 175)

Zwei unterschiedliche Mischungsverhältnisse aus dem Flyer:

- [ ] Allgemeine Reinigung: „ca. 80 % Luft / 20 % Wasser“ – korrekt?
- [ ] Fassadenreinigung: „ca. 90 % Luft / 10 % Wasser“ – korrekt?
- [ ] Falls identisch: auf einen Wert vereinheitlichen

Steht derzeit als `[PRÜFEN: …]` **sichtbar auf der Seite**.

### 10. Dachbeschichtung
**Datei:** `src/content/services.ts` · Zeile 171

- [ ] `[PRÜFEN: Garantiedauer – 12 Jahre?]` klären (siehe Punkt 4)

### 11. FAQ-Antwort zu Schutzdauern
**Datei:** `src/content/faq.ts` · Zeile 21

Enthält `[PRÜFEN]` im sichtbaren Antworttext.

- [ ] Nach Punkt 4 aktualisieren und Marker entfernen

### 12. Aktionszeitraum
**Datei:** `src/config/promo.ts`

Aktuell: 01.01.2026 – 31.12.2026, 30 % Rabatt.

- [ ] Tatsächlichen Zeitraum abstimmen
- [ ] Rabattbedingungen im Kleingedruckten prüfen lassen
- [ ] Geplanten Rebuild einrichten, damit das Banner nach Ablauf verschwindet

---

## 🟢 Optional / später

### 13. Vorher/Nachher-Galerie
**Dateien:** `src/config/features.ts`, `public/images/vorher-nachher/`

Die Galerie ist **ausgeblendet** (`showBeforeAfter: false`), weil nur
Platzhalterbilder vorliegen – sonst würde die Seite einen Vergleich zeigen,
den es real nicht gibt. Die Navigations- und Footer-Links darauf werden
automatisch mit ausgeblendet.

- [ ] 4 echte Bildpaare aufnehmen (gleiche Perspektive, gleicher Ausschnitt)
- [ ] In `public/images/vorher-nachher/` ablegen
- [ ] `showBeforeAfter: true` setzen

### 14. Bewertungen
**Dateien:** `src/content/reviews.ts`, `src/config/features.ts`

Sektion ist vorbereitet, aber ausgeblendet. Es wurden bewusst keine
Bewertungen erfunden.

- [ ] Echte Google-Bewertungen eintragen
- [ ] `showReviews: true` setzen

### 15. Über-uns-Angaben
**Datei:** `src/content/home.ts` · Zeile 143

Die vier Kennzahlen sind bewusst nur belegbare USPs (60 km, Mo–Sa, bundesweit,
0 €) – keine erfundenen Kunden- oder Projektzahlen.

- [ ] Optional ergänzen: Gründungsjahr, Teamgröße, Referenzobjekte

### 16. Stammdaten-Feinschliff
**Datei:** `src/config/site.ts`

- [ ] Zeile 9: vollständige Firmierung inkl. Rechtsform (`legalName`)
- [ ] Zeile 33: exakte Geokoordinaten statt Näherungswerten für Bad Hersfeld
- [ ] Zeile 58: Social-Media-Profile ergänzen oder Einträge entfernen

### 17. Einsatzgebiete
**Datei:** `src/config/site.ts` · `areasServed`

Aktuell: Bad Hersfeld, Hersfeld-Rotenburg, Fulda, Kassel, Eisenach, Hessen,
Thüringen, Deutschland. Fließt in die strukturierten Daten ein.

- [ ] Mit dem tatsächlichen Schwerpunkt abgleichen

---

## Schnelltest vor dem Livegang

```bash
# 1. Keine Marker mehr im sichtbaren Text?
grep -rn "PRÜFEN\|platzhalter" src/content src/config src/pages

# 2. Keine Platzhalterbilder mehr?
grep -rl "PLATZHALTER" public/images 2>/dev/null

# 3. Build + Typprüfung
npm run check && npm run build

# 4. Formular im echten Browser absenden und im Zielsystem prüfen
```
