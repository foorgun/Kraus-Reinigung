import { site, areasServed } from '@/config/site';
import { serviceCategories, allServiceNames } from '@/content/services';
import type { FaqItem } from '@/content/faq';

/** Stabile @id für die Verknüpfung mehrerer Schema-Knoten */
export const businessId = (origin: string) => `${origin}/#business`;

/**
 * HomeAndConstructionBusiness (Unterklasse von LocalBusiness).
 * Enthält Adresse, Telefon, Öffnungszeiten, Einsatzgebiet und Leistungen.
 *
 * Bewusst OHNE aggregateRating – es liegen keine echten Bewertungen vor.
 */
export function localBusinessSchema(origin: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': businessId(origin),
    name: site.name,
    legalName: site.legalName,
    slogan: site.tagline,
    description: site.description,
    url: origin,
    telephone: site.phone.raw,
    email: site.email,
    image: `${origin}/images/hero.webp`,
    logo: `${origin}/logo.svg`,
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      postalCode: site.address.postalCode,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    openingHoursSpecification: site.openingHoursSpec.map((spec) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: spec.days.map((d) => `https://schema.org/${d}`),
      opens: spec.opens,
      closes: spec.closes,
    })),
    areaServed: areasServed.map((name) => ({ '@type': 'Place', name })),
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: site.geo.latitude,
        longitude: site.geo.longitude,
      },
      geoRadius: String(site.consultationRadiusKm * 1000),
    },
    knowsAbout: allServiceNames,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Leistungen',
      itemListElement: serviceCategories.map((cat) => ({
        '@type': 'OfferCatalog',
        name: cat.title,
        url: `${origin}${cat.href}`,
        itemListElement: cat.services.map((s) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: s.name },
        })),
      })),
    },
  };
}

/** WebSite-Knoten für die Startseite */
export function websiteSchema(origin: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${origin}/#website`,
    url: origin,
    name: `${site.name} – ${site.tagline}`,
    inLanguage: 'de-DE',
    publisher: { '@id': businessId(origin) },
  };
}

export function faqSchema(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        // Interne Prüfmarker gehören nicht in die strukturierten Daten
        text: f.answer.replace(/\s*\[PRÜFEN[^\]]*\]/g, '').trim(),
      },
    })),
  };
}

export function serviceSchema(origin: string, slug: string) {
  const cat = serviceCategories.find((c) => c.slug === slug);
  if (!cat) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: cat.title,
    description: cat.seo.description,
    url: `${origin}${cat.href}`,
    serviceType: cat.title,
    provider: { '@id': businessId(origin) },
    areaServed: areasServed.map((name) => ({ '@type': 'Place', name })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: cat.title,
      itemListElement: cat.services.map((s) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.name,
          description: s.text.replace(/\s*\[PRÜFEN[^\]]*\]/g, '').trim(),
        },
      })),
    },
  };
}

export function breadcrumbSchema(
  origin: string,
  crumbs: { name: string; href: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: `${origin}${c.href}`,
    })),
  };
}
