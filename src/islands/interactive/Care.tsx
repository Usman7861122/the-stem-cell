import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Check } from 'lucide-react';
import { concerns, services } from '@/data/content';
import type { Photo } from '@/lib/images';
import { MotionRoot, Pic, Reveal } from '../shared/Motion';
import { ease } from '@/lib/motion/variants';

/** Swaps "built around you" and "built for you". Both phrases share one grid cell, so the heading never jumps. */
function SwapPhrase() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setI((n) => (n + 1) % 2), 3200);
    return () => clearInterval(id);
  }, [reduce]);
  const phrases = ['built around you', 'built for you'];
  const shown = reduce ? 1 : i;
  return (
    <em className="inline-grid text-gold-deep">
      <span className="sr-only">built for you</span>
      {phrases.map((p, k) => (
        <motion.span
          key={p}
          aria-hidden
          className="col-start-1 row-start-1"
          initial={false}
          animate={{ opacity: shown === k ? 1 : 0, y: shown === k ? 0 : shown > k ? '-0.35em' : '0.35em', filter: shown === k ? 'blur(0px)' : 'blur(6px)' }}
          transition={{ duration: 0.7, ease }}
        >
          {p}
        </motion.span>
      ))}
    </em>
  );
}

export default function Care({ photos }: { photos: Record<string, Photo> }) {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const current = services[active];

  const onKey = (e: React.KeyboardEvent, i: number) => {
    let next = i;
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') next = (i + 1) % services.length;
    else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') next = (i - 1 + services.length) % services.length;
    else return;
    e.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  };

  return (
    <MotionRoot>
      <section id="care" className="section-pad">
        <div className="container-x">
          <Reveal className="max-w-4xl">
            <p className="eyebrow">A New Generation of Personalized Care</p>
            <h2 className="h-section mt-5">
              The Future of medicine, <SwapPhrase />
            </h2>
            <p className="lead mt-6">
              Six areas of care, one team. Every treatment starts with testing and a clear plan.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-12 lg:gap-14">
            {/* Tabs */}
            <div
              role="tablist"
              aria-orientation="vertical"
              aria-label="Our treatments"
              className="lg:col-span-5"
            >
              {services.map((s, i) => {
                const on = active === i;
                return (
                  <button
                    key={s.id}
                    ref={(el) => {
                      tabs.current[i] = el;
                    }}
                    role="tab"
                    id={`tab-${s.id}`}
                    aria-selected={on}
                    aria-controls={`panel-${s.id}`}
                    tabIndex={on ? 0 : -1}
                    onClick={() => setActive(i)}
                    onMouseEnter={() => window.matchMedia('(hover: hover)').matches && setActive(i)}
                    onKeyDown={(e) => onKey(e, i)}
                    className="group relative block w-full cursor-pointer border-t border-ink/15 py-5 text-left last:border-b"
                  >
                    <span className="flex items-baseline gap-5">
                      <span className={`font-serif text-base transition-colors ${on ? 'text-gold-deep' : 'text-slate'}`}>
                        0{i + 1}
                      </span>
                      <span
                        className={`font-serif text-[1.55rem] leading-tight transition-colors duration-500 sm:text-3xl ${
                          on ? 'text-ink' : 'text-ink/55 group-hover:text-ink'
                        }`}
                      >
                        {s.title}
                      </span>
                    </span>
                    <motion.span
                      className="block overflow-hidden"
                      initial={false}
                      animate={{ height: on ? 'auto' : 0, opacity: on ? 1 : 0 }}
                      transition={{ duration: 0.5, ease }}
                    >
                      <span className="block pl-11 pt-3 text-[0.98rem] text-slate">{s.blurb}</span>
                    </motion.span>
                    {on && (
                      <motion.span
                        layoutId="care-indicator"
                        className="absolute -top-px left-0 h-px w-full bg-gold-deep"
                        transition={{ duration: 0.5, ease }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Panel */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  role="tabpanel"
                  id={`panel-${current.id}`}
                  aria-labelledby={`tab-${current.id}`}
                  tabIndex={0}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.55, ease }}
                  className="overflow-hidden rounded-[2rem] bg-navy text-ivory shadow-[0_40px_80px_-40px_rgba(14,39,71,0.7)]"
                  data-dark
                >
                  <div className="relative h-56 sm:h-72">
                    <Pic
                      photo={photos[current.image]}
                      sizes="(min-width: 1024px) 55vw, 100vw"
                      className="h-full w-full object-cover"
                      style={{ objectPosition: '50% 40%' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />
                  </div>
                  <div className="p-7 sm:p-10">
                    <h3 className="font-serif text-2xl sm:text-3xl">{current.title}</h3>
                    <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                      {current.items.map((it, k) => (
                        <motion.li
                          key={it}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.15 + k * 0.06, duration: 0.5, ease }}
                          className="flex items-start gap-3 text-[0.98rem] text-ivory/90"
                        >
                          <Check size={18} className="mt-1 shrink-0 text-gold" aria-hidden />
                          {it}
                        </motion.li>
                      ))}
                    </ul>
                    {'href' in current && current.href && (
                      <a
                        href={current.href}
                        className="btn btn-gold mt-9 !min-h-11 !px-6 text-sm"
                      >
                        Learn more about {current.title}
                      </a>
                    )}
                    <a
                      href="/#contact"
                      className={`group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-gold ${
                        'href' in current && current.href ? 'mt-6 sm:ml-8' : 'mt-9'
                      }`}
                    >
                      Ask about this care
                      <ArrowUpRight
                        size={18}
                        aria-hidden
                        className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Concerns */}
          <Reveal className="mt-20">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate">Explore by concern</p>
            <ul className="mt-5 flex flex-wrap gap-3">
              {concerns.map((c) => (
                <li key={c}>
                  <a
                    href="/#contact"
                    className="inline-flex min-h-11 items-center rounded-full border border-ink/20 px-5 text-[0.92rem] font-semibold transition-colors duration-300 hover:border-navy hover:bg-navy hover:text-ivory"
                  >
                    {c}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </MotionRoot>
  );
}
