import { site, locations } from '../data/content';

type Loc = (typeof locations)[number];

/** MedicalBusiness data for one clinic. geo and sameAs appear only when real values are set in content.ts. */
export function clinicSchema(l: Loc, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    '@id': `${url}#clinic`,
    name: `${site.name} – ${l.name}`,
    url,
    image: new URL('/images/og-image.jpg', site.url).href,
    logo: new URL('/images/Logo.webp', site.url).href,
    telephone: site.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: l.street,
      addressLocality: l.city,
      addressRegion: 'FL',
      postalCode: l.zip,
      addressCountry: 'US',
    },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${site.name}, ${l.full}`)}`,
    ...(l.geo ? { geo: { '@type': 'GeoCoordinates', latitude: l.geo.lat, longitude: l.geo.lng } } : {}),
    ...(l.sameAs.length ? { sameAs: l.sameAs } : {}),
    areaServed: l.nearby.map((n) => ({ '@type': 'City', name: n })),
    openingHoursSpecification: l.hours
      .filter((h) => h.open && h.close)
      .map((h) => ({ '@type': 'OpeningHoursSpecification', dayOfWeek: h.day, opens: h.open, closes: h.close })),
  };
}
