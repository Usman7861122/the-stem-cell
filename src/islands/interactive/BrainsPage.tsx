import { ArrowRight, Check, Phone, Quote } from 'lucide-react';
import { brains, site } from '@/data/content';
import type { Photo } from '@/lib/images';
import { MotionRoot, Pic, Reveal } from '../shared/Motion';

type Props = { hero: Photo; doctor: Photo; care: Photo; story: Photo; family: Photo; generations: Photo };

const bigQuote = 'font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl';

export default function BrainsPage({ hero, doctor, care, story, family, generations }: Props) {
  return (
    <MotionRoot>
      {/* Hero */}
      <section data-dark className="relative overflow-hidden bg-ink pb-20 pt-36 text-ivory lg:pb-28 lg:pt-44">
        <div aria-hidden className="absolute inset-0">
          <Pic photo={hero} sizes="100vw" eager className="h-full w-full object-cover object-right" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/65 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
        </div>
        <div className="container-x relative">
          <Reveal>
            <p className="eyebrow eyebrow-dark">Rebuild Your Brain™ Program</p>
            <h1 className="h-display mt-6 max-w-4xl">
              Rebuilding <em className="text-gold">Brains™</em>
            </h1>
            <p className="mt-5 max-w-2xl font-serif text-2xl text-mist sm:text-3xl">{brains.tagline}</p>
            <p className="mt-8 text-sm uppercase tracking-[0.18em] text-mist">
              <span className="font-semibold text-ivory">{brains.byline}</span>
              <span className="mt-1 block normal-case tracking-normal">{brains.credentials}</span>
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a href="/#contact" className="btn btn-gold">
                Book a Zoom Consultation
              </a>
              <a
                href={site.phoneHref}
                className="inline-flex min-h-11 items-center gap-2 font-semibold hover:text-gold"
              >
                <Phone size={18} aria-hidden /> {site.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="section-pad bg-ivory text-ink">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow">A son’s story</p>
            <div className="mt-8 space-y-1 font-serif text-3xl leading-snug sm:text-4xl">
              <p>The stove was on.</p>
              <p>The water was running.</p>
              <p>The back door was standing wide open.</p>
            </div>
            <div className="lead mt-10 max-w-2xl space-y-5">
              <p>
                That morning, Dr. Cole’s fears became real. His mother is 87, fragile and diabetic,
                living with dementia and memory loss. It was clear they could no longer ignore what
                was happening. They needed to do something. Now. Because this is our mom.
              </p>
              <p>
                If someone you love is living with Alzheimer’s dementia, memory loss, cognitive
                decline or another neurological disorder, you know this feeling well. Alzheimer’s
                doesn’t simply steal memories. It steals confidence. It steals independence. It
                steals relationships. And eventually, it can steal the very identity of the person
                you love.
              </p>
              <p>
                Nobody wants to lose their mind. Nobody wants to lose the memories that define who
                they are, or the ability to recognize a spouse, a child, a grandchild or a lifelong
                friend. Yet this heartbreaking reality is affecting families across Florida, across
                America and around the world.
              </p>
              <p>
                Every one of those numbers represents a person: a mother, a father, a grandparent, a
                spouse, a friend. And behind every patient stands a family desperately searching for
                answers.
              </p>
            </div>
            <p className="mt-10 max-w-2xl border-l-2 border-gold pl-6 font-serif text-2xl leading-snug text-ink sm:text-3xl">
              “For decades, families have been told there was little that could be done beyond
              managing symptoms and preparing for decline.”
            </p>
          </Reveal>

          <Reveal delay={0.1} className="lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
            <div className="mb-6 overflow-hidden rounded-2xl">
              <Pic
                photo={story}
                sizes="(min-width: 1024px) 40vw, 92vw"
                className="aspect-[16/9] w-full object-cover"
                style={{ objectPosition: '40% 40%' }}
              />
            </div>
            <dl className="grid gap-px overflow-hidden rounded-2xl bg-ink/10">
              {brains.stats.map((s) => (
                <div key={s.value} className="bg-sand p-7">
                  <dt className="font-serif text-4xl text-gold-deep sm:text-5xl">{s.value}</dt>
                  <dd className="mt-2 text-slate">{s.label}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-sm text-slate">
              Alzheimer’s accounts for roughly 60–70% of all dementia cases. Every number is a
              person, and behind every patient stands a family searching for answers.
            </p>
          </Reveal>
        </div>
      </section>

      {/* The right question */}
      <section data-dark className="section-pad bg-navy text-ivory">
        <div className="container-x">
          <Reveal className="mx-auto max-w-4xl text-center">
            <p className="eyebrow eyebrow-dark justify-center">What if we asked a different question?</p>
            <p className={`${bigQuote} mt-8`}>
              Not “How do we <em className="text-gold">manage</em> Alzheimer’s?”
              <br />
              But “Why is the brain <em className="text-gold">failing</em> in the first place?”
            </p>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-mist">
              For decades, families were told little could be done beyond managing symptoms. At The
              Stem Cell Institute we ask whether drugs, home health and physical therapy really are
              the only options, and whether there is a more advanced, safer, more effective way to
              address this life-stealing disorder.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Causes */}
      <section className="section-pad bg-ivory text-ink">
        <div className="container-x grid items-start gap-12 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow">Listening to the body</p>
            <h2 className="h-section mt-5">
              “The body tells you what is wrong… we just need to <em className="text-gold-deep">listen</em>.”
            </h2>
            <p className="lead mt-6">
              The brain may not be broken. It may be struggling because the systems it depends on have
              been weakened over time. When we find and address those contributors, we can create an
              environment that supports better communication between brain cells, better neurological
              performance and a better quality of life.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold-deep">
              Common contributors we look for
            </p>
            <ul className="mt-5 grid gap-x-8 sm:grid-cols-2">
              {brains.contributors.map((c) => (
                <li key={c} className="flex items-center gap-3 border-b border-ink/10 py-4 font-medium">
                  <Check size={18} className="shrink-0 text-gold-deep" aria-hidden />
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Neuroplasticity + approach */}
      <section className="section-pad bg-sand text-ink">
        <div className="container-x">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
            <Reveal className="lg:col-span-6">
              <p className="eyebrow">The science of rebuilding</p>
              <h2 className="h-section mt-5">
                The brain can make <em className="text-gold-deep">new connections</em>
              </h2>
              <div className="lead mt-6 space-y-5">
                <p>
                  The human brain holds about 86 billion neurons linked by trillions of pathways. It
                  stays remarkably adaptable throughout life through a process called neuroplasticity,
                  and regenerative approaches aim to amplify it.
                </p>
                <p>
                  Simply put, the brain can create new connections, strengthen existing pathways and
                  improve function. When pathways are damaged, inflamed or disconnected, memory, focus,
                  communication and safety decline. When they are rebooted and optimized, remarkable
                  things become possible.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-6">
              <div className="overflow-hidden rounded-2xl">
                <Pic
                  photo={care}
                  sizes="(min-width: 1024px) 45vw, 92vw"
                  className="aspect-[5/4] w-full object-cover"
                />
              </div>
            </Reveal>
          </div>

          <Reveal className="mt-20">
            <h3 className="font-serif text-3xl sm:text-4xl">How the program works</h3>
          </Reveal>
          <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {brains.approach.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.06}>
                <li className="h-full rounded-2xl bg-ivory p-8">
                  <span className="font-serif text-4xl text-gold-deep">{String(i + 1).padStart(2, '0')}</span>
                  <h4 className="mt-4 font-serif text-2xl">{a.title}</h4>
                  <p className="mt-3 text-slate">{a.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Philosophy */}
      <section data-dark className="section-pad bg-ink text-ivory">
        <div className="container-x grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-6">
            <div className="overflow-hidden rounded-2xl">
              <Pic
                photo={doctor}
                sizes="(min-width: 1024px) 45vw, 92vw"
                className="aspect-[4/5] w-full object-cover object-top"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-6">
            <p className="eyebrow eyebrow-dark">Dr. Cole’s philosophy</p>
            <p className={`${bigQuote} mt-6`}>
              Have the Body <em className="text-gold">Heal</em> the Body®
            </p>
            <p className="mt-7 text-lg leading-relaxed text-mist">
              Nothing heals the body better than the body itself. It has extraordinary regenerative
              abilities when given the proper tools, support, stimulus and biological environment.
              Combined with advanced regenerative technologies and natural nano-biologics, the body’s
              own healing systems can support rebuilding and restoration to different degrees, because
              every person is unique.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-mist">
              Dr. Cole has worked with thousands of patients from across the United States who were
              told little more could be done by traditional medicine. This is not traditional
              medicine. It is the future of medicine.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Outcomes */}
      <section className="section-pad bg-ivory text-ink">
        <div className="container-x">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">Transformational results</p>
            <h2 className="h-section mt-5">
              Stories of <em className="text-gold-deep">hope</em> and possibility
            </h2>
          </Reveal>
          <Reveal className="mt-12">
            <div className="overflow-hidden rounded-2xl">
              <Pic
                photo={family}
                sizes="(min-width: 1024px) 80vw, 92vw"
                className="aspect-[16/10] w-full object-cover sm:aspect-[21/9]"
                style={{ objectPosition: '50% 35%' }}
              />
            </div>
          </Reveal>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {brains.outcomes.map((o, i) => (
              <Reveal key={o.who} delay={i * 0.06}>
                <figure className="h-full rounded-2xl bg-sand p-8 lg:p-10">
                  <Quote size={28} className="text-gold-deep" aria-hidden />
                  <blockquote className="mt-4 font-serif text-2xl leading-snug sm:text-3xl">
                    “{o.quote}”
                  </blockquote>
                  <figcaption className="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-slate">
                    {o.who}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-sm text-slate">{brains.disclaimer}</p>
        </div>
      </section>

      {/* Who we help */}
      <section data-dark className="section-pad bg-navy text-ivory">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
            <p className="eyebrow eyebrow-dark">From anywhere in the country</p>
            <h2 className="h-section mt-5">
              Consult with Dr. Cole by <em className="text-gold">Zoom</em>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-mist">
              Through the Rebuild Your Brain™ Program, Dr. Cole meets with patients and their families
              by Zoom from across the nation to explore advanced regenerative options for:
            </p>
            <a href="/#contact" className="btn btn-gold mt-8">
              Book a Zoom Consultation
            </a>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7">
            <ul className="grid gap-x-8 sm:grid-cols-2">
              {brains.conditions.map((c) => (
                <li key={c} className="flex items-center gap-3 border-b border-white/15 py-4">
                  <Check size={18} className="shrink-0 text-gold" aria-hidden />
                  {c}
                </li>
              ))}
            </ul>
            <div className="mt-10 overflow-hidden rounded-2xl">
              <Pic
                photo={generations}
                sizes="(min-width: 1024px) 55vw, 92vw"
                className="aspect-[16/10] w-full object-cover"
                style={{ objectPosition: '55% 30%' }}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Closing CTA */}
      <section data-dark className="section-pad relative overflow-hidden bg-ink text-center text-ivory">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-96 w-[48rem] -translate-x-1/2 rounded-full bg-gold/15 blur-[120px]"
        />
        <div className="container-x relative max-w-4xl">
          <Reveal>
            <p className="eyebrow eyebrow-dark justify-center">Time is our most precious commodity</p>
            <h2 className="h-section mt-6">
              The goal isn’t only to add years to life. It’s to add <em className="text-gold">life to those years</em>.
            </h2>
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-mist">
              Once a memory is gone, we wish we had acted sooner. So make time: to ask questions, to
              explore your options, and to find out whether advanced regenerative medicine may be
              right for you or someone you love. Perhaps the most important call you ever make is the
              one you make today.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              <a href="/#contact" className="btn btn-gold">
                Book a Zoom Consultation <ArrowRight size={18} aria-hidden />
              </a>
              <a href={site.phoneHref} className="inline-flex min-h-11 items-center gap-2 font-semibold hover:text-gold">
                <Phone size={18} aria-hidden /> {site.phone}
              </a>
            </div>
            <p className="mt-12 font-serif text-xl text-mist">
              Sincerely,
              <span className="mt-1 block text-2xl text-ivory">Dr. William J. Cole, Jr., DO</span>
              <span className="text-base">The Stem Cell Institute</span>
            </p>
          </Reveal>
        </div>
      </section>
    </MotionRoot>
  );
}
