import { useState } from 'react';
import { motion } from 'framer-motion';
import { pillars } from '@/data/content';
import type { Photo } from '@/lib/images';
import { MotionRoot, Pic, Reveal } from '../shared/Motion';
import { ease } from '@/lib/motion/variants';

type Props = { photos: Record<(typeof pillars)[number]['image'], Photo> };

export default function Pillars({ photos }: Props) {
  const [active, setActive] = useState(0);

  return (
    <MotionRoot>
      <section id="pillars" className="section-pad">
        <div className="container-x">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Our Promise</p>
            <h2 className="h-section mt-5">
              Real Science. Real Results. <em className="text-gold-deep">Personalized to You.</em>
            </h2>
            <p className="lead mt-6">
              We pair advanced regenerative therapies with careful testing, so every plan stands on
              evidence, and on you.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-14 lg:mt-20">
            <div className="flex h-[680px] flex-col gap-3 md:h-[560px] md:flex-row">
              {pillars.map((p, i) => {
                const isActive = active === i;
                return (
                  <motion.button
                    key={p.n}
                    type="button"
                    aria-expanded={isActive}
                    onClick={() => setActive(i)}
                    onMouseEnter={() => window.matchMedia('(hover: hover)').matches && setActive(i)}
                    onFocus={() => setActive(i)}
                    className="group relative min-h-0 min-w-0 cursor-pointer overflow-hidden rounded-[1.75rem] bg-navy text-left text-ivory"
                    animate={{ flexGrow: isActive ? 3.4 : 1 }}
                    initial={false}
                    transition={{ duration: 0.8, ease }}
                    style={{ flexBasis: 0 }}
                  >
                    <Pic
                      photo={photos[p.image]}
                      sizes="(min-width: 768px) 55vw, 100vw"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                      style={{ objectPosition: i === 0 ? '50% 30%' : i === 1 ? '50% 70%' : '35% 35%' }}
                    />
                    <div
                      className={`absolute inset-0 transition-opacity duration-700 ${
                        isActive
                          ? 'bg-gradient-to-t from-ink/90 via-ink/30 to-transparent'
                          : 'bg-ink/60'
                      }`}
                    />
                    <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                      <span className="font-serif text-lg text-gold">{p.n}</span>
                      <span className="mt-1 block font-serif text-[1.65rem] leading-tight md:text-4xl">
                        {p.title}
                      </span>
                      <motion.span
                        className="block overflow-hidden"
                        animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0 }}
                        initial={false}
                        transition={{ duration: 0.6, ease }}
                      >
                        <span className="mt-3 block max-w-md text-base leading-relaxed text-ivory/90">
                          {p.text}
                        </span>
                      </motion.span>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>
    </MotionRoot>
  );
}
