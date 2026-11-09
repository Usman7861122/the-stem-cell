import type { APIRoute } from 'astro';
import { site, locations } from '../data/content';
import { treatments } from '../data/treatments';

// Lists every public page. Add new static pages to `staticPaths`.
const staticPaths = ['/', '/about/', '/locations/', '/contact/', '/rebuilding-brains/'];

export const GET: APIRoute = () => {
  const paths = [
    ...new Set([
      ...staticPaths,
      ...treatments.map((t) => `/${t.slug}/`),
      ...locations.map((l) => `/locations/${l.id}/`),
    ]),
  ];
  const urls = paths.map((p) => `  <url><loc>${new URL(p, site.url).href}</loc></url>`).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
