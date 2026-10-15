import { ChevronRight, MapPin, Phone } from 'lucide-react';
import { locations, site } from '@/data/content';
import { MotionRoot, Reveal } from '../shared/Motion';

type Props = {
  crumb: string;
  eyebrow: string;
  title: [string, string, string];
  lead: string;
  showContact?: boolean;
};

/** Compact dark page hero with breadcrumbs. Optional quick contact cards. */
export default function PageHero({ crumb, eyebrow, title, lead, showContact }: Props) {
  return (
    <MotionRoot>
      <section data-dark className="relative overflow-hidden bg-ink pb-14 pt-28 text-ivory lg:pb-20 lg:pt-36">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 top-0 h-[34rem] w-[34rem] rounded-full bg-gold/15 blur-[120px]"
        />
        <div className="container-x relative">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-mist">
              <li className="flex items-center gap-2">
                <a href="/" className="underline-offset-4 transition-colors hover:text-gold hover:underline">
                  Home
                </a>
                <ChevronRight size={14} aria-hidden className="text-mist/60" />
              </li>
              <li aria-current="page" className="font-semibold text-ivory">
                {crumb}
              </li>
            </ol>
          </nav>
          <Reveal className="max-w-3xl">
            <p className="eyebrow eyebrow-dark">{eyebrow}</p>
            <h1 className="h-section mt-5">
              {title[0]} <em className="text-gold">{title[1]}</em> {title[2]}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-mist sm:text-lg">{lead}</p>
            {!showContact && (
              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
                <a href="/contact" className="btn btn-gold">
                  Book a Consultation
                </a>
                <a href={site.phoneHref} className="inline-flex min-h-11 items-center gap-2 font-semibold hover:text-gold">
                  <Phone size={18} aria-hidden /> {site.phone}
                </a>
              </div>
            )}
          </Reveal>
          {showContact && (
            <Reveal delay={0.1}>
              <ul className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
                <li>
                  <a
                    href={site.phoneHref}
                    className="flex h-full items-start gap-4 rounded-2xl border border-white/15 bg-white/5 p-6 transition-colors hover:border-gold/60"
                  >
                    <Phone size={22} className="mt-1 shrink-0 text-gold" aria-hidden />
                    <span>
                      <span className="block text-xs font-bold uppercase tracking-[0.16em] text-gold">Call us</span>
                      <span className="mt-1 block font-serif text-2xl">{site.phone}</span>
                    </span>
                  </a>
                </li>
                {locations.map((l) => (
                  <li key={l.id}>
                    <a
                      href={`/locations/${l.id}`}
                      className="flex h-full items-start gap-4 rounded-2xl border border-white/15 bg-white/5 p-6 transition-colors hover:border-gold/60"
                    >
                      <MapPin size={22} className="mt-1 shrink-0 text-gold" aria-hidden />
                      <span>
                        <span className="block text-xs font-bold uppercase tracking-[0.16em] text-gold">
                          {l.name} clinic
                        </span>
                        <span className="mt-1 block text-lg leading-snug">
                          {l.street}, {l.city}, FL {l.zip}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          )}
        </div>
      </section>
    </MotionRoot>
  );
}
