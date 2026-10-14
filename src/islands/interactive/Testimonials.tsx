import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '@/data/content';
import { MotionRoot, Reveal } from '../shared/Motion';
import { ease } from '@/lib/motion/variants';

export default function Testimonials() {
  const [[i, dir], setState] = useState<[number, number]>([0, 1]);
  const t = testimonials[i];
  const go = (d: number) => setState([(i + d + testimonials.length) % testimonials.length, d]);

  return (
    <MotionRoot>
      <section id="testimonials" className="section-pad overflow-hidden bg-sand">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Patient Stories</p>
            <h2 className="h-section mt-5">What our patients are saying</h2>
            <p className="lead mt-6">
              Real stories. Real results. See how our patients transformed their health with
              personalized care.
            </p>
          </Reveal>

          <div className="relative mx-auto mt-14 max-w-4xl lg:mt-20">
            <Quote
              aria-hidden
              size={96}
              strokeWidth={1}
              className="absolute -top-6 left-0 text-gold/40 sm:-left-6"
            />
            <div className="min-h-[340px] sm:min-h-[300px]" aria-live="polite">
              <AnimatePresence mode="wait" custom={dir}>
                <motion.figure
                  key={i}
                  custom={dir}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -70) go(1);
                    else if (info.offset.x > 70) go(-1);
                  }}
                  initial={{ opacity: 0, x: 60 * dir }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -60 * dir }}
                  transition={{ duration: 0.55, ease }}
                  className="px-2 pt-10 text-center sm:px-10"
                >
                  <blockquote className="font-serif text-[1.55rem] leading-snug sm:text-[2.1rem]">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-8">
                    <span className="block text-base font-bold">{t.name}</span>
                    <span className="block text-sm text-slate">{t.detail}</span>
                    {t.sample && (
                      <span className="mt-4 inline-block rounded-full border border-gold-deep/40 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold-deep">
                        Sample text · replace with a real story
                      </span>
                    )}
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>

            <div className="mt-10 flex items-center justify-center gap-6">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous testimonial"
                className="grid h-12 w-12 cursor-pointer place-items-center rounded-full border border-ink/25 transition-colors hover:bg-navy hover:text-ivory"
              >
                <ChevronLeft aria-hidden />
              </button>
              <div className="flex items-center gap-1" role="group" aria-label="Choose testimonial">
                {testimonials.map((_, k) => (
                  <button
                    key={k}
                    type="button"
                    onClick={() => setState([k, k > i ? 1 : -1])}
                    aria-label={`Show testimonial ${k + 1}`}
                    aria-current={k === i}
                    className="grid h-11 w-8 cursor-pointer place-items-center"
                  >
                    <span
                      className={`block h-1.5 rounded-full transition-all duration-500 ${
                        k === i ? 'w-8 bg-navy' : 'w-2 bg-ink/25'
                      }`}
                    />
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next testimonial"
                className="grid h-12 w-12 cursor-pointer place-items-center rounded-full border border-ink/25 transition-colors hover:bg-navy hover:text-ivory"
              >
                <ChevronRight aria-hidden />
              </button>
            </div>
          </div>
        </div>
      </section>
    </MotionRoot>
  );
}
