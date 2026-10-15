import { useEffect, useState } from 'react';
import { ArrowRight, ChevronRight, Clock, MapPin, Phone } from 'lucide-react';
import { clinicTz, locations, site, type HoursRow } from '@/data/content';
import { nearbyAreas } from '@/data/treatments';
import type { Photo } from '@/lib/images';
import { MotionRoot, Pic, Reveal } from '../shared/Motion';

type Props = { hero: Photo };

const mapsUrl = (q: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
const embedUrl = (q: string) => `https://www.google.com/maps?q=${encodeURIComponent(q)}&output=embed`;

const toMins = (t: string) => {
  const [h, m] = t.split(':').map(Number);
  return h * 60 + m;
};
const fmt = (t: string) => {
  const [h, m] = t.split(':').map(Number);
  const ap = h >= 12 ? 'PM' : 'AM';
  const hh = h % 12 === 0 ? 12 : h % 12;
  return `${hh}:${String(m).padStart(2, '0')} ${ap}`;
};

/** Current weekday and minutes in the clinic's time zone (Florida). */
export function useClinicNow() {
  const [now, setNow] = useState<{ day: string; mins: number } | null>(null);
  useEffect(() => {
    const read = () => {
      try {
        const parts = new Intl.DateTimeFormat('en-US', {
          timeZone: clinicTz,
          weekday: 'long',
          hour: 'numeric',
          minute: 'numeric',
          hour12: false,
        }).formatToParts(new Date());
        const get = (t: string) => parts.find((p) => p.type === t)?.value ?? '';
        const h = Number(get('hour')) % 24;
        setNow({ day: get('weekday'), mins: h * 60 + Number(get('minute')) });
      } catch {
        setNow(null);
      }
    };
    read();
    const id = setInterval(read, 60_000);
    return () => clearInterval(id);
  }, []);
  return now;
}

function Breadcrumbs() {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-mist">
        <li className="flex items-center gap-2">
          <a href="/" className="underline-offset-4 transition-colors hover:text-gold hover:underline">
            Home
          </a>
          <ChevronRight size={14} aria-hidden className="text-mist/60" />
        </li>
        <li>
          <span aria-current="page" className="font-semibold text-ivory">
            Locations
          </span>
        </li>
      </ol>
    </nav>
  );
}

export function Hours({ rows, now }: { rows: HoursRow[]; now: { day: string; mins: number } | null }) {
  const today = rows.find((r) => r.day === now?.day);
  let status: { text: string; open: boolean } | null = null;
  if (now && today) {
    if (!today.open || !today.close) status = { text: 'Closed today', open: false };
    else if (now.mins >= toMins(today.open) && now.mins < toMins(today.close))
      status = { text: `Open now · closes ${fmt(today.close)}`, open: true };
    else if (now.mins < toMins(today.open)) status = { text: `Closed now · opens ${fmt(today.open)}`, open: false };
    else status = { text: 'Closed for today', open: false };
  }
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-gold-deep">
          <Clock size={16} aria-hidden /> Working hours
        </p>
        {status && (
          <span
            className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${
              status.open ? 'bg-emerald-100 text-emerald-800' : 'bg-ink/10 text-slate'
            }`}
          >
            <span aria-hidden className={`h-2 w-2 rounded-full ${status.open ? 'bg-emerald-500' : 'bg-slate/60'}`} />
            {status.text}
          </span>
        )}
      </div>
      <ul className="mt-4">
        {rows.map((r) => {
          const isToday = now?.day === r.day;
          return (
            <li
              key={r.day}
              aria-current={isToday ? 'date' : undefined}
              className={`flex items-center justify-between gap-4 border-b border-ink/10 px-3 py-3 first:border-t ${
                isToday ? 'rounded-lg bg-gold/10 font-semibold text-ink' : 'text-slate'
              }`}
            >
              <span className="flex items-center gap-3">
                {r.day}
                {isToday && (
                  <span className="rounded-full bg-gold px-2.5 py-0.5 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-white">
                    Today
                  </span>
                )}
              </span>
              <span className="whitespace-nowrap">{r.open && r.close ? `${fmt(r.open)} – ${fmt(r.close)}` : 'Closed'}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function LocationsPage({ hero }: Props) {
  const now = useClinicNow();
  return (
    <MotionRoot>
      {/* Hero */}
      <section data-dark className="relative overflow-hidden bg-ink pb-12 pt-28 text-ivory lg:pb-16 lg:pt-32">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 top-0 h-[34rem] w-[34rem] rounded-full bg-gold/15 blur-[120px]"
        />
        <div className="container-x relative">
          <Breadcrumbs />
          <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch lg:gap-14">
            <Reveal className="flex flex-col justify-center lg:col-span-6">
              <p className="eyebrow eyebrow-dark">Sarasota · Venice · Florida</p>
              <h1 className="h-section mt-5">
                Our <em className="text-gold">locations</em> in Sarasota &amp; Venice
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-mist sm:text-lg">
                Two clinics, one caring team. Find the address, the working hours and directions for the
                clinic that is closest to you.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
                <a href="/#contact" className="btn btn-gold">
                  Book a Consultation
                </a>
                <a href={site.phoneHref} className="inline-flex min-h-11 items-center gap-2 font-semibold hover:text-gold">
                  <Phone size={18} aria-hidden /> {site.phone}
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-6">
              <div className="h-full overflow-hidden rounded-2xl">
                <Pic
                  photo={hero}
                  sizes="(min-width: 1024px) 48vw, 92vw"
                  eager
                  className="aspect-[16/10] h-full w-full object-cover lg:aspect-auto"
                  style={{ objectPosition: '50% 60%' }}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Clinics */}
      <section className="section-pad bg-ivory text-ink">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Visit us</p>
            <h2 className="h-section mt-5">
              Find the clinic <em className="text-gold-deep">closest to you</em>
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {locations.map((l, i) => (
              <Reveal key={l.id} delay={i * 0.08}>
                <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-sand">
                  <div className="aspect-[16/9] w-full bg-ink/5">
                    <iframe
                      title={`Map of the ${l.name} clinic`}
                      src={embedUrl(`${site.name}, ${l.full}`)}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="h-full w-full border-0"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-7 lg:p-9">
                    <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-gold-deep">
                      <MapPin size={16} aria-hidden /> {l.name} clinic
                    </p>
                    <h3 className="mt-3 font-serif text-3xl">{l.street}</h3>
                    <address className="mt-1 not-italic text-lg text-slate">
                      {l.city}, FL {l.zip}
                    </address>
                    <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
                      <a href={site.phoneHref} className="inline-flex items-center gap-2 font-semibold hover:text-gold-deep">
                        <Phone size={17} aria-hidden /> {site.phone}
                      </a>
                      <a
                        href={mapsUrl(`${site.name}, ${l.full}`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-gold-deep"
                      >
                        Get directions <ArrowRight size={16} aria-hidden />
                      </a>
                    </div>
                    <a
                      href={`/locations/${l.id}`}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-ink hover:text-gold-deep"
                    >
                      View {l.name} clinic details <ArrowRight size={16} aria-hidden />
                    </a>
                    <div className="mt-8 border-t border-ink/10 pt-7">
                      <Hours rows={l.hours} now={now} />
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Areas served + CTA */}
      <section data-dark className="section-pad bg-navy text-ivory">
        <div className="container-x">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow eyebrow-dark justify-center">Areas we serve</p>
            <h2 className="h-section mt-5">
              Patients welcome from across <em className="text-gold">Southwest Florida</em>
            </h2>
            <ul className="mt-8 flex flex-wrap justify-center gap-3">
              {nearbyAreas.map((a) => (
                <li key={a} className="rounded-full border border-white/20 bg-white/5 px-5 py-2 text-sm">
                  {a}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <a href="/#contact" className="btn btn-gold">
                Book a Consultation
              </a>
            </div>
            <p className="mx-auto mt-6 max-w-xl text-sm text-mist">
              Hours are shown in Eastern Time. Please call before you visit so we can make sure a member of
              our team is ready to welcome you.
            </p>
          </Reveal>
        </div>
      </section>
    </MotionRoot>
  );
}
