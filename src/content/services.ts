/**
 * Alle Leistungen – zentrale Quelle für:
 *  - die Leistungs-Karten auf der Startseite
 *  - die vier Unterseiten unter /leistungen/…
 *  - das Leistungen-Dropdown in der Navigation
 *  - die Checkboxen im Kontaktformular
 *  - die strukturierten Daten (SEO)
 *
 * Texte basieren auf den Angaben des Kunden und sind redaktionell überarbeitet.
 * Stellen mit [PRÜFEN] bitte vor dem Livegang bestätigen lassen.
 */

export interface ServiceItem {
  /** Name der Leistung – erscheint in Listen und als Checkbox-Label */
  name: string;
  /** Kurzbeschreibung für die Unterseite */
  text: string;
}

export interface ProcessStep {
  title: string;
  text: string;
}

export interface ServiceCategory {
  slug: string;
  href: string;
  /** Vollständiger Titel, z. B. "Reinigung & Versiegelung" */
  title: string;
  /** Kurzform für Navigation und Chips */
  shortTitle: string;
  /** Kurztext auf der Startseiten-Karte */
  teaser: string;
  /** Bild für die Karte auf der Startseite (16:11) */
  image: string;
  /** Großes Bild für den Hero der Unterseite (16:9) */
  heroImage: string;
  /** Alt-Text der Leistungskarte */
  imageAlt: string;
  /** Alt-Text des Hero-Bildes – kann sich vom Kartenbild unterscheiden */
  heroImageAlt: string;
  icon: 'spray' | 'roof' | 'brush' | 'garden';
  seo: { title: string; description: string };
  hero: {
    eyebrow: string;
    headline: string;
    /** Wort/Teil der Headline, das grün hervorgehoben wird */
    highlight: string;
    text: string;
  };
  /** Einleitung über der Leistungsliste */
  intro: string;
  services: ServiceItem[];
  steps: ProcessStep[];
  /** Verweist auf eine `id` aus src/content/beforeAfter.ts */
  beforeAfterId: string;
  /** Bildunterschrift für den Vergleich auf der Unterseite */
  beforeAfterCaption: string;
}

export const serviceCategories: ServiceCategory[] = [
  {
    slug: 'reinigung',
    href: '/leistungen/reinigung',
    title: 'Reinigung & Versiegelung',
    shortTitle: 'Reinigung',
    teaser:
      'Stein, Terrasse, Treppe, Holz und Glas – schonend gereinigt und anschließend mit Nano-Langzeitschutz versiegelt.',
    image: '/images/leistungen/reinigung.webp',
    heroImage: '/images/leistungen/reinigung-hero.webp',
    imageAlt:
      'Zwei Fachkräfte reinigen von einer Hebebühne aus die Glasfassade eines Gebäudes mit Einwaschern an Teleskopstangen',
    heroImageAlt:
      'Gereinigte Pflasterfläche einer Einfahrt mit deutlich sichtbarer Kante zum ungereinigten Bereich',
    icon: 'spray',
    seo: {
      title: 'Steinreinigung & Pflasterreinigung in Bad Hersfeld | KRAUS',
      description:
        'Steinreinigung, Terrassen- und Treppenreinigung, Steinverfugung und Nano-Versiegelung. Schonend ohne aggressive Chemie. Kostenlose Probefläche vor Ort – Bad Hersfeld und bundesweit.',
    },
    hero: {
      eyebrow: 'Leistungen',
      headline: 'Stein, Holz und Glas – gründlich gereinigt',
      highlight: 'gereinigt',
      text: 'Wir entfernen Algen, Moos, Grünbelag und Verschmutzungen von Pflaster, Terrasse, Treppe, Holz und Glas – ohne die Oberfläche anzugreifen. Auf Wunsch versiegeln wir im Anschluss für dauerhaften Schutz.',
    },
    intro:
      'Von der Einfahrt bis zum Wintergarten: Wir reinigen alle Außenflächen rund um Ihr Haus und schützen sie anschließend gegen neuen Bewuchs.',
    services: [
      {
        name: 'Steinreinigung',
        text: 'Pflaster, Naturstein und Betonstein werden materialschonend von Algen, Moos und eingewachsenem Schmutz befreit – ohne die Oberfläche aufzurauen.',
      },
      {
        name: 'Steinverfugen',
        text: 'Wir verfugen mit einer speziellen Kunststofffuge: Sie hält die Fläche unkrautfrei, bleibt dabei aber wasserdurchlässig, sodass Regenwasser weiterhin versickern kann.',
      },
      {
        name: 'Terrassenreinigung',
        text: 'Ob Naturstein, Betonplatten, Keramik oder WPC – Ihre Terrasse wird wieder gleichmäßig sauber und ist danach sofort wieder nutzbar.',
      },
      {
        name: 'Treppenreinigung',
        text: 'Außentreppen und Podeste reinigen wir auch in Fugen und Ecken. Auf Wunsch mit rutschhemmender Nachbehandlung.',
      },
      {
        name: 'Holzreinigung',
        text: 'Holzterrassen, Zäune und Carports werden schonend gereinigt, sodass die Maserung wieder sichtbar wird – ohne ausgefranste Fasern.',
      },
      {
        name: 'Mauerreinigung',
        text: 'Gartenmauern, Sichtmauerwerk und Sockel befreien wir von Grünbelag, Ausblühungen und Verschmutzungen.',
      },
      {
        name: 'Glas- und Wintergartenreinigung',
        text: 'Scheiben, Rahmen und Wintergartendächer – innen wie außen. Mit Nanoversiegelung perlt Regenwasser danach einfach ab.',
      },
      {
        name: 'Dachrinnenreinigung',
        text: 'Wir entfernen Laub und Schlamm aus Rinnen und Fallrohren und prüfen dabei gleich den Wasserablauf.',
      },
      {
        name: 'Nano-Versiegelung',
        text: 'Der Langzeitschutz mit Lotuseffekt lässt Wasser und Schmutz abperlen und erschwert neuen Algen- und Moosbewuchs deutlich.',
      },
    ],
    steps: [
      {
        title: 'Kostenlose Probefläche',
        text: 'Wir kommen vorbei, reinigen eine kleine Testfläche und Sie sehen das Ergebnis, bevor Sie sich entscheiden.',
      },
      {
        title: 'Reinigung ohne Chemie',
        text: 'Unsere Spezialmaschine arbeitet mit einem Luft-Wasser-Gemisch und ganz ohne aggressive Zusätze – auch ohne umherspritzendes Wasser.',
      },
      {
        title: 'Schutz für Jahre',
        text: 'Nach dem Trocknen tragen wir Algen- und Moosentferner sowie den Nano-Langzeitschutz auf.',
      },
    ],
    beforeAfterId: 'pflaster',
    beforeAfterCaption: 'Pflastereinfahrt – Reinigung und anschließende Versiegelung',
  },
  {
    slug: 'dach-fassade',
    href: '/leistungen/dach-fassade',
    title: 'Dach & Fassade',
    shortTitle: 'Dach & Fassade',
    teaser:
      'Dachreinigung, Fassadenreinigung und Beschichtung – schonend, ohne Chemie, mit langjährigem Nano-Schutz.',
    image: '/images/leistungen/dach-fassade.webp',
    heroImage: '/images/leistungen/dach-fassade-hero.webp',
    imageAlt:
      'Handwerker reinigt mit einer Teleskop-Waschbürste ein Fenster an der Klinkerfassade eines Wohnhauses',
    heroImageAlt:
      'Fachkraft reinigt ein Ziegeldach mit einer Spezialmaschine, eine Dachhälfte ist bereits sauber',
    icon: 'roof',
    seo: {
      title: 'Dachreinigung & Fassadenreinigung Bad Hersfeld | KRAUS',
      description:
        'Dachreinigung, Dachbeschichtung und Fassadenreinigung ohne aggressive Chemie – für Klinker und Reibeputz. Mit Nano-Langzeitschutz. Kostenlose Beratung vor Ort in Bad Hersfeld und bundesweit.',
    },
    hero: {
      eyebrow: 'Leistungen',
      headline: 'Dach und Fassade wieder wie neu',
      highlight: 'wie neu',
      text: 'Moos auf dem Dach und Grünbelag an der Fassade sind nicht nur ein optisches Problem – sie halten Feuchtigkeit in der Oberfläche. Wir reinigen schonend und schützen anschließend dauerhaft.',
    },
    intro:
      'Dach und Fassade sind die größten Flächen Ihres Hauses – und die, die am stärksten der Witterung ausgesetzt sind. Wir behandeln beide mit demselben schonenden Verfahren.',
    services: [
      {
        name: 'Dachreinigung',
        text: 'Moos, Flechten und Algen werden vollständig entfernt – ohne die Ziegeloberfläche zu beschädigen. Anschließend folgt der Langzeitschutz.',
      },
      {
        name: 'Dachbeschichtung',
        text: 'Nach der Reinigung bringen wir eine farbige Beschichtung auf, die das Dach versiegelt und ihm ein gleichmäßiges Erscheinungsbild gibt. Mit Zertifikat. [PRÜFEN: Garantiedauer – 12 Jahre?]',
      },
      {
        name: 'Fassadenreinigung',
        text: 'Ob Klinker oder Reibeputz: Wir reinigen schonend und ohne Chemie mit einem Luft-Wasser-Gemisch [PRÜFEN: ca. 90 % Luft / 10 % Wasser] und versiegeln anschließend mit Nano-Langzeitschutz.',
      },
      {
        name: 'Fassadensanierung',
        text: 'Risse, abplatzender Putz oder verwitterte Flächen – wir setzen die Fassade instand und bringen sie farblich wieder auf einen Stand.',
      },
      {
        name: 'Dachsanierung',
        text: 'Von einzelnen defekten Ziegeln bis zur Erneuerung größerer Flächen. Wir sehen uns den Zustand vor Ort an und beraten offen.',
      },
      {
        name: 'Dachrinnenreinigung',
        text: 'Passend zur Dachreinigung befreien wir Rinnen und Fallrohre von Laub und Moosresten.',
      },
    ],
    steps: [
      {
        title: 'Zustand vor Ort prüfen',
        text: 'Wir schauen uns Dach und Fassade persönlich an und besprechen, was wirklich nötig ist – kostenlos und unverbindlich.',
      },
      {
        title: 'Schonend reinigen',
        text: 'Die Spezialmaschine löst Moos und Grünbelag ohne chemische Zusätze und ohne Spritzwasser an Nachbarflächen.',
      },
      {
        title: 'Versiegeln oder beschichten',
        text: 'Je nach Wunsch folgt der Nano-Langzeitschutz mit Lotuseffekt oder eine farbige Dachbeschichtung mit Zertifikat.',
      },
    ],
    beforeAfterId: 'dach',
    beforeAfterCaption: 'Ziegeldach – Reinigung und Nano-Versiegelung',
  },
  {
    slug: 'sanierung',
    href: '/leistungen/sanierung',
    title: 'Sanierung & Malerarbeiten',
    shortTitle: 'Sanierung',
    teaser:
      'Fassade, Treppe, Mauer, Parkett und Teich instand setzen – dazu Maler-, Putz- und Trockenbauarbeiten.',
    image: '/images/leistungen/sanierung.webp',
    heroImage: '/images/leistungen/sanierung-hero.webp',
    imageAlt:
      'Innenraum während der Sanierung: freigelegtes Ziegelmauerwerk, abgestützter Durchbruch und ein Handwerker auf einer Leiter',
    heroImageAlt:
      'Maler streicht eine frisch verputzte Innenwand mit einer Rolle in hellem Farbton',
    icon: 'brush',
    seo: {
      title: 'Fassadensanierung, Malerarbeiten & Trockenbau | KRAUS Bad Hersfeld',
      description:
        'Fassadensanierung, Dachsanierung, Treppen- und Mauersanierung, Parkettsanierung, Malerarbeiten, Putz und Trockenbau. Saubere Ausführung aus Bad Hersfeld – bundesweit im Einsatz.',
    },
    hero: {
      eyebrow: 'Leistungen',
      headline: 'Instand gesetzt statt nur überstrichen',
      highlight: 'Instand gesetzt',
      text: 'Wo Reinigen allein nicht mehr reicht, sanieren wir: Fassade, Treppe, Mauerwerk, Parkett oder Teich. Dazu Maler-, Putz- und Trockenbauarbeiten aus einer Hand.',
    },
    intro:
      'Sanierung heißt für uns: erst die Ursache beheben, dann die Optik. So hält das Ergebnis deutlich länger.',
    services: [
      {
        name: 'Fassadensanierung',
        text: 'Wir bessern Risse und Fehlstellen aus, erneuern schadhaften Putz und bringen die Fassade farblich wieder in Form.',
      },
      {
        name: 'Dachsanierung',
        text: 'Defekte Ziegel, undichte Stellen und schadhafte Anschlüsse werden fachgerecht instand gesetzt.',
      },
      {
        name: 'Dachbeschichtung',
        text: 'Farbige Versiegelung nach der Reinigung – für ein gleichmäßiges Dachbild und zusätzlichen Schutz. Mit Zertifikat.',
      },
      {
        name: 'Treppensanierung',
        text: 'Ausgetretene Stufen, lose Beläge oder abgeplatzte Kanten an Innen- und Außentreppen bringen wir wieder in Ordnung.',
      },
      {
        name: 'Mauersanierung',
        text: 'Wir erneuern Fugen, sichern lose Steine und behandeln Feuchtigkeitsschäden an Mauerwerk und Sockel.',
      },
      {
        name: 'Teichsanierung',
        text: 'Von der Reinigung des Beckens bis zur Erneuerung der Abdichtung – wir bringen Ihren Gartenteich wieder in Ordnung.',
      },
      {
        name: 'Parkettsanierung',
        text: 'Abschleifen, ausbessern und neu versiegeln – Ihr Parkett bekommt eine frische, belastbare Oberfläche.',
      },
      {
        name: 'Terrassensanierung',
        text: 'Lockere Platten, abgesackte Bereiche oder schadhafter Unterbau werden gerichtet, damit die Terrasse wieder eben und dicht ist.',
      },
      {
        name: 'Malerarbeiten aller Art',
        text: 'Innen wie außen. Auf Wunsch mit Nano-/Lotus-Farbe, auf die wir 10 Jahre Garantie geben. [PRÜFEN]',
      },
      {
        name: 'Putzarbeiten',
        text: 'Innen- und Außenputz, Ausbesserungen und strukturierte Oberflächen in der gewünschten Körnung.',
      },
      {
        name: 'Trockenbau',
        text: 'Wände, Vorsatzschalen, Decken und Dachschrägen – sauber gespachtelt und streichfertig übergeben.',
      },
      {
        name: 'Entrümpelung',
        text: 'Keller, Dachboden, Garage oder ganze Haushalte – wir räumen, trennen und entsorgen fachgerecht.',
      },
      {
        name: 'Abrissarbeiten',
        text: 'Rückbau von Anbauten, Mauern, Estrichen und Innenwänden inklusive Entsorgung.',
      },
    ],
    steps: [
      {
        title: 'Schaden gemeinsam ansehen',
        text: 'Wir kommen vorbei, beurteilen den Zustand und sagen Ihnen ehrlich, was sinnvoll ist – und was nicht.',
      },
      {
        title: 'Festes Angebot',
        text: 'Sie erhalten ein nachvollziehbares Angebot mit klaren Positionen. Erst danach beginnen wir.',
      },
      {
        title: 'Sauber ausführen',
        text: 'Wir arbeiten in abgestimmten Zeitfenstern, decken sorgfältig ab und übergeben besenrein.',
      },
    ],
    beforeAfterId: 'fassade',
    beforeAfterCaption: 'Fassade – Sanierung und Neuanstrich',
  },
  {
    slug: 'garten-pflaster',
    href: '/leistungen/garten-pflaster',
    title: 'Garten & Pflaster',
    shortTitle: 'Garten & Pflaster',
    teaser:
      'Einfahrten und Wege pflastern, Rollrasen verlegen, Hecken und Bäume schneiden, Zäune bauen.',
    image: '/images/leistungen/garten-pflaster.webp',
    heroImage: '/images/leistungen/garten-pflaster-hero.webp',
    imageAlt:
      'Gepflasterter Gartenweg aus rotem Klinker im Fischgrätmuster, links eine Rasenkante, rechts Farne und Stauden',
    heroImageAlt:
      'Frisch verlegtes Betonsteinpflaster einer Hofeinfahrt mit sauber gesetzter Randbegrenzung',
    icon: 'garden',
    seo: {
      title: 'Pflasterarbeiten & Gartengestaltung Bad Hersfeld | KRAUS',
      description:
        'Pflasterarbeiten für Einfahrten, Gehwege, Terrassen und Stellplätze. Dazu Rollrasen, Heckenschnitt, Baumschnitt, Wurzelbeseitigung, Gartengestaltung und Zaunbau. Bad Hersfeld und bundesweit.',
    },
    hero: {
      eyebrow: 'Leistungen',
      headline: 'Der Außenbereich, wie Sie ihn sich vorstellen',
      highlight: 'Außenbereich',
      text: 'Wir pflastern Einfahrten, Wege und Stellplätze, verlegen Rollrasen, schneiden Hecken und Bäume und bauen Zäune – von der Planung bis zur letzten Fuge.',
    },
    intro:
      'Ein gepflegter Außenbereich fängt beim Unterbau an. Wir arbeiten tragfähig auf, damit Pflaster und Rasen dauerhaft halten.',
    services: [
      {
        name: 'Pflasterarbeiten',
        text: 'Einfahrten, Gehwege, Terrassen und Stellplätze – mit fachgerechtem Unterbau, sauberen Randabschlüssen und dem Pflaster Ihrer Wahl.',
      },
      {
        name: 'Rollrasen-Verlegung',
        text: 'Boden vorbereiten, planieren, Rollrasen verlegen und anwalzen – Sie haben sofort eine fertige Rasenfläche.',
      },
      {
        name: 'Heckenschnitt',
        text: 'Form- und Rückschnitt in der richtigen Höhe, inklusive Abfuhr des Schnittguts.',
      },
      {
        name: 'Baumschnitt',
        text: 'Auslichten, Kroneneinkürzung und Totholzentfernung – fachgerecht und unter Beachtung der Schnittzeiten.',
      },
      {
        name: 'Wurzelbeseitigung',
        text: 'Wir fräsen und entfernen Wurzelstöcke, damit die Fläche neu genutzt werden kann.',
      },
      {
        name: 'Gartengestaltung',
        text: 'Beete, Wege, Randsteine, Kies- und Pflanzflächen – wir setzen Ihre Vorstellung um.',
      },
      {
        name: 'Zaunbau aller Art',
        text: 'Doppelstabmatten, Holz, Sichtschutz oder Gabionen – gerade gesetzt und stabil gegründet.',
      },
      {
        name: 'Entrümpelung',
        text: 'Gartenabfälle, alte Gartenhäuser und Unrat räumen wir mit ab.',
      },
    ],
    steps: [
      {
        title: 'Aufmaß vor Ort',
        text: 'Wir messen die Fläche, klären Gefälle und Entwässerung und besprechen Material und Verlegemuster.',
      },
      {
        title: 'Unterbau herstellen',
        text: 'Aushub, Tragschicht und Bettung werden fachgerecht aufgebaut – die Grundlage dafür, dass nichts absackt.',
      },
      {
        title: 'Verlegen und abrütteln',
        text: 'Pflaster verlegen, Randsteine setzen, verfugen und abrütteln. Auf Wunsch gleich mit unkrautfreier Kunststofffuge.',
      },
    ],
    beforeAfterId: 'einfahrt',
    beforeAfterCaption: 'Hofeinfahrt – neu gepflastert',
  },
];

/** Kategorie per Slug finden (für die Unterseiten). */
export function getCategory(slug: string): ServiceCategory | undefined {
  return serviceCategories.find((c) => c.slug === slug);
}

/**
 * Gruppierte Leistungen für die Checkboxen im Kontaktformular.
 * Bewusst kompakter gehalten als die Unterseiten, damit das Formular
 * auf dem Handy nicht endlos lang wird.
 */
export const serviceCheckboxGroups = [
  {
    label: 'Reinigung',
    options: [
      'Steinreinigung',
      'Pflaster-/Terrassenreinigung',
      'Dachreinigung',
      'Fassadenreinigung',
      'Treppenreinigung',
      'Holzreinigung',
      'Glas-/Wintergartenreinigung',
      'Dachrinnenreinigung',
      'Steinverfugen',
    ],
  },
  {
    label: 'Sanierung',
    options: [
      'Fassadensanierung',
      'Dachsanierung',
      'Dachbeschichtung',
      'Treppensanierung',
      'Mauersanierung',
      'Parkettsanierung',
      'Terrassensanierung',
      'Teichsanierung',
      'Malerarbeiten',
      'Putzarbeiten',
      'Trockenbau',
    ],
  },
  {
    label: 'Garten & Außenbereich',
    options: [
      'Pflasterarbeiten',
      'Rollrasen verlegen',
      'Heckenschnitt',
      'Baumschnitt',
      'Wurzelbeseitigung',
      'Gartengestaltung',
      'Zaunbau',
    ],
  },
  {
    label: 'Sonstiges',
    options: ['Entrümpelung', 'Abrissarbeiten', 'Noch unklar – bitte beraten'],
  },
];

/** Flache Liste aller Leistungsnamen – für schema.org und interne Prüfungen. */
export const allServiceNames: string[] = Array.from(
  new Set(serviceCategories.flatMap((c) => c.services.map((s) => s.name)))
);
