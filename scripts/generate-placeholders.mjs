/**
 * Erzeugt die Platzhalterbilder unter /public/images.
 *
 * Aufruf:  node scripts/generate-placeholders.mjs
 *
 * Die erzeugten Bilder sind klar als Platzhalter erkennbar und sollen durch
 * echte Fotos des Kunden ersetzt werden – einfach gleichnamige Dateien in
 * denselben Ordner legen (Format: WebP, empfohlene Größen siehe unten).
 */
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const out = join(root, 'public', 'images');

const GREEN = '#3A8F3C';
const GREEN_DARK = '#265C28';
const NAVY = '#1E3A8A';
const NAVY_DEEP = '#0B1533';

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** Dezente diagonale Struktur, damit die Flächen nicht flach wirken */
function texture(id, opacity = 0.06) {
  return `
    <pattern id="${id}" width="26" height="26" patternUnits="userSpaceOnUse" patternTransform="rotate(38)">
      <rect width="26" height="26" fill="none"/>
      <rect width="13" height="26" fill="#ffffff" opacity="${opacity}"/>
    </pattern>`;
}

function svg({ w, h, from, to, label, sub, tone = 'light' }) {
  const text = tone === 'light' ? '#ffffff' : '#171B21';
  const fontSize = Math.round(Math.min(w, h) * 0.062);
  const subSize = Math.round(fontSize * 0.46);

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${from}"/>
      <stop offset="100%" stop-color="${to}"/>
    </linearGradient>
    <radialGradient id="glow" cx="72%" cy="22%" r="68%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
    </radialGradient>
    ${texture('tex')}
  </defs>

  <rect width="${w}" height="${h}" fill="url(#g)"/>
  <rect width="${w}" height="${h}" fill="url(#tex)"/>
  <rect width="${w}" height="${h}" fill="url(#glow)"/>

  <circle cx="${w * 0.14}" cy="${h * 0.86}" r="${Math.min(w, h) * 0.3}" fill="#ffffff" opacity="0.05"/>
  <circle cx="${w * 0.88}" cy="${h * 0.12}" r="${Math.min(w, h) * 0.2}" fill="#ffffff" opacity="0.07"/>

  <g text-anchor="middle" font-family="'Plus Jakarta Sans','Inter','Helvetica Neue',Arial,sans-serif">
    <text x="${w / 2}" y="${h / 2}" fill="${text}" font-size="${fontSize}" font-weight="800" letter-spacing="0.5">${esc(label)}</text>
    <text x="${w / 2}" y="${h / 2 + fontSize * 0.95}" fill="${text}" opacity="0.7" font-size="${subSize}" font-weight="600" letter-spacing="2.4">${esc(sub)}</text>
  </g>
</svg>`;
}

async function write(relPath, options, format = 'webp') {
  const file = join(out, relPath);
  await mkdir(dirname(file), { recursive: true });
  const buffer = Buffer.from(svg(options));
  const pipeline = sharp(buffer);
  if (format === 'webp') await pipeline.webp({ quality: 82 }).toFile(file);
  else await pipeline.jpeg({ quality: 82, mozjpeg: true }).toFile(file);
  console.log('✓', relPath);
}

// Vorher = stumpf und grau, Nachher = klar und frisch.
// So ist der Effekt des Vergleichsreglers schon mit Platzhaltern sichtbar.
const BEFORE = { from: '#6b6f66', to: '#3d4440' };
const AFTER = { from: GREEN, to: GREEN_DARK };

const jobs = [
  // Hero – 3:2, wird großflächig angezeigt
  ['hero.webp', { w: 1920, h: 1280, from: NAVY, to: NAVY_DEEP, label: 'Hero-Bild', sub: 'PLATZHALTER · 1920 × 1280' }],
  // Verfahren – Hochformat 4:5
  ['verfahren.webp', { w: 900, h: 1125, from: GREEN, to: GREEN_DARK, label: 'Reinigungsverfahren', sub: 'PLATZHALTER · 900 × 1125' }],

  // Leistungskarten – 16:11
  ['leistungen/reinigung.webp', { w: 800, h: 550, from: GREEN, to: '#1f4f21', label: 'Reinigung', sub: 'PLATZHALTER · 800 × 550' }],
  ['leistungen/dach-fassade.webp', { w: 800, h: 550, from: NAVY, to: '#0d1c46', label: 'Dach & Fassade', sub: 'PLATZHALTER · 800 × 550' }],
  ['leistungen/sanierung.webp', { w: 800, h: 550, from: '#4a5568', to: '#242b38', label: 'Sanierung', sub: 'PLATZHALTER · 800 × 550' }],
  ['leistungen/garten-pflaster.webp', { w: 800, h: 550, from: '#58AD5C', to: '#265C28', label: 'Garten & Pflaster', sub: 'PLATZHALTER · 800 × 550' }],

  // Heros der Unterseiten – 16:9, werden vollflächig hinter dunklem Overlay gezeigt
  ['leistungen/reinigung-hero.webp', { w: 1920, h: 1080, from: GREEN, to: '#16331a', label: 'Reinigung', sub: 'PLATZHALTER · 1920 × 1080' }],
  ['leistungen/dach-fassade-hero.webp', { w: 1920, h: 1080, from: NAVY, to: NAVY_DEEP, label: 'Dach & Fassade', sub: 'PLATZHALTER · 1920 × 1080' }],
  ['leistungen/sanierung-hero.webp', { w: 1920, h: 1080, from: '#4a5568', to: '#1b2029', label: 'Sanierung', sub: 'PLATZHALTER · 1920 × 1080' }],
  ['leistungen/garten-pflaster-hero.webp', { w: 1920, h: 1080, from: '#58AD5C', to: '#1b3d1d', label: 'Garten & Pflaster', sub: 'PLATZHALTER · 1920 × 1080' }],

  // Open Graph – 1200 × 630 als JPG (breiteste Kompatibilität)
  ['og-default.jpg', { w: 1200, h: 630, from: NAVY, to: NAVY_DEEP, label: 'KRAUS', sub: 'BUNDESWEIT UNTERWEGS' }, 'jpeg'],
];

// Vorher/Nachher-Paare – 16:10
for (const [id, title] of [
  ['pflaster', 'Pflastereinfahrt'],
  ['dach', 'Ziegeldach'],
  ['fassade', 'Hausfassade'],
  ['einfahrt', 'Hofeinfahrt'],
]) {
  jobs.push([
    `vorher-nachher/${id}-vorher.webp`,
    { w: 1600, h: 1000, ...BEFORE, label: `${title} – vorher`, sub: 'PLATZHALTER · 1600 × 1000' },
  ]);
  jobs.push([
    `vorher-nachher/${id}-nachher.webp`,
    { w: 1600, h: 1000, ...AFTER, label: `${title} – nachher`, sub: 'PLATZHALTER · 1600 × 1000' },
  ]);
}

for (const [path, options, format] of jobs) {
  await write(path, options, format);
}

// Apple-Touch-Icon aus dem Platzhalter-Favicon
const iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 64 64">
  <rect width="64" height="64" fill="#3A8F3C"/>
  <path d="M22 18v28M22 32l15-14M22 32l16 14" stroke="#fff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</svg>`;
await sharp(Buffer.from(iconSvg))
  .resize(180, 180)
  .png()
  .toFile(join(root, 'public', 'apple-touch-icon.png'));
console.log('✓ apple-touch-icon.png');

console.log('\nFertig. Alle Dateien sind Platzhalter und sollen durch echte Fotos ersetzt werden.');
