import { ArrowRight, ChevronRight, MapPin, Phone } from 'lucide-react';
import { locations, services, site } from '@/data/content';
import type { Photo } from '@/lib/images';
import { MotionRoot, Pic, Reveal } from '../shared/Motion';
import { Hours, useClinicNow } from './LocationsPage';

type Loc = (typeof locations)[number];
type Props = { slug: string; hero: Photo };

const mapsUrl = (q: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
const embedUrl = (q: string) => `https://www.google.com/maps?q=${encodeURIComponent(q)}&output=embed`;

function Breadcrumbs({ name }: { name: string }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-mist">
        {[
          { label: 'Home', href: '/' },
          { label: 'Locations', href: '/locations' },
          { label: name, href: null as string | null },
        ].map((it, i, arr) => (
          <li key={it.label} className="flex items-center gap-2">
            {it.href ? (
              <a href={it.href} className="underline-offset-4 transition-colors hover:text-gold hover:underline">
                {it.label}
              </a>
            ) : (
              <span aria-current="page" className="font-semibold text-ivory">
                {it.label}
              </span>
            )}
            {i < arr.length - 1 && <ChevronRight size={14} aria-hidden className="text-mist/60" />}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default function LocationDetail({ slug, hero }: Props) {
  const now = useClinicNow();
  const l = locations.find((x) => x.id === slug) as Loc;
  const other = locations.find((x) => x.id !== slug) as Loc;
  const q = `${site.name}, ${l.full}`;
  return (
    <MotionRoot>
      {/* Hero */}
      <section data-dark className="relative overflow-hidden bg-ink pb-12 pt-28 text-ivory lg:pb-16 lg:pt-32">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 top-0 h-[34rem] w-[34rem] rounded-full bg-gold/15 blur-[120px]"
        />
        <div className="container-x relative">
          <Breadcrumbs name={l.name} />
          <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch lg:gap-14">
            <Reveal className="flex flex-col justify-center lg:col-span-6">
              <p className="eyebrow eyebrow-dark">{l.name} clinic</p>
              <h1 className="h-section mt-5">
                The Stem Cell Institute in <em className="text-gold">{l.city}</em>, FL
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-mist sm:text-lg">{l.intro}</p>
              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
                <a href="/#contact" className="btn btn-gold">
                  Book a Consultation
                </a>
                <a href={site.phoneHref} className="inline-flex min-h-11 items-center gap-2 font-semibold hover:text-gold">
                  <Phone size={18} aria-hidden /> {site.phone}
                </a>
              </div>
              <div className="mt-8 border-t border-ivory/15 pt-6">
                <p className="flex items-start gap-3 text-sm leading-relaxed text-mist sm:text-base">
                  <MapPin size={20} className="mt-0.5 shrink-0 text-gold" aria-hidden />
                  <span>{l.full}</span>
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-6">
              <div className="h-full overflow-hidden rounded-2xl">
                <Pic
                  photo={hero}
                  sizes="(min-width: 1024px) 48vw, 92vw"
                  eager
                  className="aspect-[16/10] h-full w-full object-cover lg:aspect-auto"
                  style={{ objectPosition: '50% 40%' }}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Visit */}
      <section className="section-pad bg-ivory text-ink">
        <div className="container-x grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow">Visit us</p>
            <h2 className="h-section mt-5">
              Address &amp; <em className="text-gold-deep">working hours</em>
            </h2>
            <address className="mt-6 not-italic">
              <p className="font-serif text-2xl">{l.street}</p>
              <p className="text-lg text-slate">
                {l.city}, FL {l.zip}
              </p>
            </address>
            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
              <a href={site.phoneHref} className="inline-flex items-center gap-2 font-semibold hover:text-gold-deep">
                <Phone size={17} aria-hidden /> {site.phone}
              </a>
              <a
                href={mapsUrl(q)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-gold-deep"
              >
                Get directions <ArrowRight size={16} aria-hidden />
              </a>
            </div>
            <div className="mt-8 rounded-2xl bg-sand p-6 lg:p-7">
              <Hours rows={l.hours} now={now} />
              <p className="mt-4 text-xs text-slate">Hours are in Eastern Time. Please call before you visit.</p>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="h-full min-h-[22rem] overflow-hidden rounded-2xl bg-sand">
              <iframe
                title={`Map of the ${l.name} clinic`}
                src={embedUrl(q)}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[22rem] w-full border-0"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Treatments */}
      <section data-dark className="section-pad bg-navy text-ivory">
        <div className="container-x">
          <Reveal className="max-w-3xl">
            <p className="eyebrow eyebrow-dark">Care at our {l.name} clinic</p>
            <h2 className="h-section mt-5">
              Treatments available in <em className="text-gold">{l.city}</em>
            </h2>
          </Reveal>
          <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.id} delay={i * 0.05}>
                <li className="h-full list-none">
                  <a
                    href={s.href}
                    className="group flex h-full flex-col rounded-2xl border border-white/15 bg-white/5 p-7 transition-colors hover:border-gold/60 hover:bg-white/10"
                  >
                    <h3 className="font-serif text-2xl">{s.title}</h3>
                    <p className="mt-3 text-mist">{s.blurb}</p>
                    <span className="mt-5 inline-flex items-center gap-2 pt-1 text-sm font-bold uppercase tracking-[0.16em] text-gold">
                      Learn more
                      <ArrowRight size={16} aria-hidden className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </a>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Nearby + FAQ */}
      <section className="section-pad bg-sand text-ink">
        <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow">Who we serve</p>
            <h2 className="h-section mt-5">
              Patients welcome from <em className="text-gold-deep">nearby areas</em>
            </h2>
            <p className="lead mt-6">
              Our {l.name} clinic welcomes patients from {l.nearby.slice(0, -1).join(', ')} and {l.nearby[l.nearby.length - 1]}, and
              from the wider Southwest Florida area.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {l.nearby.map((a) => (
                <li key={a} className="rounded-full border border-ink/15 bg-ivory px-4 py-1.5 text-sm">
                  {a}
                </li>
              ))}
            </ul>
          </Reveal>
          <div className="lg:col-span-7">
            {l.faqs.map((f) => (
              <details key={f.q} className="group border-t border-ink/15 py-6 last:border-b">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-serif text-xl sm:text-2xl [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span aria-hidden className="shrink-0 text-2xl text-gold-deep transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="lead mt-4 max-w-2xl">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Other clinic + CTA */}
      <section data-dark className="section-pad bg-ink text-ivory">
        <div className="container-x">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow eyebrow-dark justify-center">Another clinic</p>
            <h2 className="h-section mt-5">
              Closer to <em className="text-gold">{other.name}</em>?
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-mist">
              Our {other.name} clinic is at {other.full}.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              <a href={`/locations/${other.id}`} className="btn btn-gold">
                View the {other.name} clinic
              </a>
              <a href="/#contact" className="inline-flex items-center gap-2 font-semibold hover:text-gold">
                Book a Consultation <ArrowRight size={16} aria-hidden />
              </a>
            </div>
            <p className="mx-auto mt-8 max-w-2xl text-sm text-mist">
              This page is for general information and is not medical advice. Treatment is directed by a licensed
              physician after an evaluation. Results vary and are not guaranteed.
            </p>
          </Reveal>
        </div>
      </section>
    </MotionRoot>
  );
}
