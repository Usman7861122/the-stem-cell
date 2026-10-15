import { ArrowRight, Check, ChevronRight, MapPin, Phone, Plus } from 'lucide-react';
import { locations, site } from '@/data/content';
import { nearbyAreas, type Treatment } from '@/data/treatments';
import type { Photo } from '@/lib/images';
import { MotionRoot, Pic, Reveal } from '../shared/Motion';

type Props = { t: Treatment; hero: Photo; process: Photo; why: Photo; local: Photo };

const mapsUrl = (q: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

function Breadcrumbs({ name }: { name: string }) {
  const items = [
    { label: 'Home', href: '/' },
    { label: 'Treatments', href: '/#care' },
    { label: name, href: null },
  ];
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-mist">
        {items.map((it, i) => (
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
            {i < items.length - 1 && <ChevronRight size={14} aria-hidden className="text-mist/60" />}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default function TreatmentPage({ t, hero, process, why, local }: Props) {
  return (
    <MotionRoot>
      {/* Hero */}
      <section data-dark className="relative overflow-hidden bg-ink pb-12 pt-28 text-ivory lg:pb-16 lg:pt-32">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 top-0 h-[34rem] w-[34rem] rounded-full bg-gold/15 blur-[120px]"
        />
        <div className="container-x relative">
          <Breadcrumbs name={t.name} />
          <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch lg:gap-14">
            <Reveal className="flex flex-col justify-center lg:col-span-6">
              <p className="eyebrow eyebrow-dark">Sarasota · Venice · Florida</p>
              <h1 className="h-section mt-5">
                {t.name} in <em className="text-gold">Sarasota &amp; Venice</em>, FL
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-mist sm:text-lg">
                {t.heroLead}
              </p>
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
                  <span>
                    {t.name} in Sarasota and Venice, with patients welcome from across Siesta Key, Osprey,
                    Nokomis, North Port, Lakewood Ranch and the greater Southwest Florida area.
                  </span>
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
                  style={{ objectPosition: t.heroPos }}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What it is */}
      <section className="section-pad bg-ivory text-ink">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-6">
            <p className="eyebrow">{t.whatEyebrow}</p>
            <h2 className="h-section mt-5">
              {t.whatTitle[0]}
              <em className="text-gold-deep">{t.whatTitle[1]}</em>
              {t.whatTitle[2]}
            </h2>
            <div className="lead mt-6 space-y-5">
              {t.whatParas.map((para) => (
                <p key={para.slice(0, 24)}>{para}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-6">
            <div className="rounded-2xl bg-sand p-8 lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold-deep">
                {t.signsTitle}
              </p>
              <ul className="mt-5 grid gap-x-8 sm:grid-cols-2">
                {t.signs.map((t) => (
                  <li key={t} className="flex items-start gap-3 border-b border-ink/10 py-3.5">
                    <Check size={18} className="mt-0.5 shrink-0 text-gold-deep" aria-hidden />
                    {t}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm text-slate">{t.signsNote}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Men and women */}
      <section data-dark className="section-pad bg-navy text-ivory">
        <div className="container-x">
          <Reveal className="max-w-3xl">
            <p className="eyebrow eyebrow-dark">{t.groupsEyebrow}</p>
            <h2 className="h-section mt-5">
              {t.groupsTitle[0]}
              <em className="text-gold">{t.groupsTitle[1]}</em>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {t.groups.map((g, i) => (
              <Reveal key={g.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-white/15 bg-white/5 p-8 lg:p-10">
                  <h3 className="font-serif text-3xl">{g.title}</h3>
                  <p className="mt-4 text-lg leading-relaxed text-mist">{g.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-pad bg-sand text-ink">
        <div className="container-x">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
            <Reveal className="lg:col-span-6">
              <div className="overflow-hidden rounded-2xl">
                <Pic photo={process} sizes="(min-width: 1024px) 45vw, 92vw" className="aspect-[4/3] w-full object-cover" />
              </div>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-6">
              <p className="eyebrow">How it works</p>
              <h2 className="h-section mt-5">
                {t.processTitle[0]}
                <em className="text-gold-deep">{t.processTitle[1]}</em>
              </h2>
              <p className="lead mt-6">
                {t.processLead}
              </p>
            </Reveal>
          </div>
          <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {t.steps.map((st, i) => (
              <Reveal key={st.title} delay={i * 0.06}>
                <li className="h-full rounded-2xl bg-ivory p-7">
                  <span className="font-serif text-4xl text-gold-deep">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="mt-4 font-serif text-2xl">{st.title}</h3>
                  <p className="mt-3 text-slate">{st.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Why us */}
      <section className="section-pad bg-ivory text-ink">
        <div className="container-x grid items-start gap-12 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
            <p className="eyebrow">Why patients choose us</p>
            <h2 className="h-section mt-5">
              {t.whyTitle[0]}
              <em className="text-gold-deep">{t.whyTitle[1]}</em>
              {t.whyTitle[2]}
            </h2>
            <div className="mt-8 overflow-hidden rounded-2xl">
              <Pic photo={why} sizes="(min-width: 1024px) 40vw, 92vw" className="aspect-[4/3] w-full object-cover" />
            </div>
          </Reveal>
          <div className="lg:col-span-7">
            <ul>
              {t.why.map((w, i) => (
                <Reveal key={w.title} delay={i * 0.06}>
                  <li className="border-t border-ink/15 py-8 first:border-t-0 first:pt-0">
                    <h3 className="font-serif text-2xl sm:text-3xl">{w.title}</h3>
                    <p className="lead mt-3">{w.text}</p>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-sand text-ink">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow">Questions</p>
            <h2 className="h-section mt-5">
              {t.name} <em className="text-gold-deep">FAQ</em>
            </h2>
          </Reveal>
          <div className="lg:col-span-8">
            {t.faqs.map((f) => (
              <details key={f.q} className="group border-t border-ink/15 py-6 last:border-b">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-serif text-xl sm:text-2xl [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <Plus
                    size={22}
                    aria-hidden
                    className="shrink-0 text-gold-deep transition-transform duration-300 group-open:rotate-45"
                  />
                </summary>
                <p className="lead mt-4 max-w-2xl">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Local */}
      <section data-dark className="section-pad relative overflow-hidden bg-ink text-ivory">
        <div aria-hidden className="absolute inset-0">
          <Pic photo={local} sizes="100vw" className="h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/70 to-ink" />
        </div>
        <div className="container-x relative">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow eyebrow-dark justify-center">Find us</p>
            <h2 className="h-section mt-5">
              {t.name} near you in <em className="text-gold">Sarasota &amp; Venice</em>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-mist">
              We welcome patients from across Sarasota County and nearby communities, including{' '}
              {nearbyAreas.join(', ')}.
            </p>
          </Reveal>
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
            {locations.map((l, i) => (
              <Reveal key={l.id} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-white/15 bg-white/5 p-8 backdrop-blur">
                  <MapPin size={22} className="text-gold" aria-hidden />
                  <h3 className="mt-4 font-serif text-3xl">{l.name} clinic</h3>
                  <address className="mt-3 not-italic leading-relaxed text-mist">
                    {l.street}
                    <br />
                    {l.city}, FL {l.zip}
                  </address>
                  <a href={site.phoneHref} className="mt-4 inline-block font-semibold hover:text-gold">
                    {site.phone}
                  </a>
                  <a
                    href={mapsUrl(`${site.name}, ${l.full}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-gold"
                  >
                    Get directions <ArrowRight size={16} aria-hidden />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 text-center">
            <a href="/#contact" className="btn btn-gold">
              {t.ctaLabel}
            </a>
            <p className="mx-auto mt-8 max-w-2xl text-sm text-mist">
              This page is for general information and is not medical advice. Treatment is directed
              by a licensed physician after an evaluation. Results vary and are not guaranteed.
            </p>
          </Reveal>
        </div>
      </section>
    </MotionRoot>
  );
}
