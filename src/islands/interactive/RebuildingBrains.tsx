import { ArrowRight, Phone } from 'lucide-react';
import { brains, site } from '@/data/content';
import type { Photo } from '@/lib/images';
import { MotionRoot, Pic, Reveal } from '../shared/Motion';

/** Homepage feature: Rebuilding Brains™ */
export default function RebuildingBrains({ photo }: { photo: Photo }) {
  return (
    <MotionRoot>
      <section id="rebuilding-brains" data-dark className="section-pad relative overflow-hidden bg-navy text-ivory">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-gold/15 blur-[120px]"
        />
        <div className="container-x relative grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-2xl">
              <Pic
                photo={photo}
                sizes="(min-width: 1024px) 40vw, 92vw"
                className="aspect-[4/5] w-full object-cover"
                style={{ objectPosition: '62% 50%' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
              <p className="absolute inset-x-6 bottom-6 font-serif text-xl leading-snug text-ivory sm:text-2xl">
                “{brains.quote}”
              </p>
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow eyebrow-dark">New · Memory &amp; Brain Health</p>
              <h2 className="h-section mt-5">
                Rebuilding <em className="text-gold">Brains™</em>
              </h2>
              <p className="mt-4 font-serif text-2xl text-mist">{brains.tagline}</p>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-mist">
                Alzheimer’s doesn’t only steal memories. It steals confidence, independence and
                relationships. Dr. Cole asks a different question: not “how do we manage it?” but{' '}
                <strong className="font-semibold text-ivory">“why is the brain failing in the first place?”</strong>{' '}
                Our Rebuild Your Brain™ Program looks for the causes and supports the body in
                repairing itself.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <dl className="mt-10 grid gap-6 border-y border-white/15 py-8 sm:grid-cols-3">
                {brains.stats.map((s) => (
                  <div key={s.value}>
                    <dt className="font-serif text-3xl text-gold sm:text-4xl">{s.value}</dt>
                    <dd className="mt-1 text-sm leading-snug text-mist">{s.label}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
                <a href={brains.href} className="btn btn-gold">
                  Read the full story <ArrowRight size={18} aria-hidden />
                </a>
                <a
                  href={site.phoneHref}
                  className="inline-flex min-h-11 items-center gap-2 font-semibold text-ivory transition-colors hover:text-gold"
                >
                  <Phone size={18} aria-hidden /> {site.phone}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </MotionRoot>
  );
}
