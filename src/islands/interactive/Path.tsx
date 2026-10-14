import { useRef } from 'react';
import { motion, useInView, useScroll, useSpring } from 'framer-motion';
import { steps, site } from '@/data/content';
import { MotionRoot, Reveal } from '../shared/Motion';
import { ease } from '@/lib/motion/variants';

function Step({ n, title, text }: { n: number; title: string; text: string }) {
  const ref = useRef<HTMLLIElement>(null);
  const on = useInView(ref, { margin: '-45% 0px -45% 0px' });
  return (
    <li ref={ref} className="relative pb-14 pl-16 last:pb-0 sm:pl-24">
      <span
        className={`absolute left-0 top-0 grid h-12 w-12 place-items-center rounded-full border font-serif text-lg transition-all duration-700 sm:h-14 sm:w-14 ${
          on ? 'border-gold bg-gold text-ink shadow-[0_0_0_8px_rgba(253,113,19,0.2)]' : 'border-ink/25 bg-ivory text-ink/60'
        }`}
      >
        {n}
      </span>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, ease }}
      >
        <h3 className="font-serif text-[1.65rem] leading-tight sm:text-3xl">{title}</h3>
        <p className="lead mt-3 max-w-lg">{text}</p>
      </motion.div>
    </li>
  );
}

export default function Path() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 65%', 'end 55%'] });
  const fill = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  return (
    <MotionRoot>
      <section id="path" className="section-pad">
        <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-20">
          <Reveal className="self-start lg:sticky lg:top-32 lg:col-span-5">
            <p className="eyebrow">Your Journey</p>
            <h2 className="h-section mt-5">
              Your path to <em className="text-gold-deep">optimal wellness</em>
            </h2>
            <p className="lead mt-6">
              Four clear steps, from your first conversation to long-term support.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a href="#contact" className="btn btn-primary">
                Start with a Consultation
              </a>
              {site.consultationPrice && (
                <span className="text-sm font-semibold text-slate">
                  Consultations from {site.consultationPrice}
                </span>
              )}
            </div>
          </Reveal>

          <div className="relative lg:col-span-7">
            <div aria-hidden className="absolute left-6 top-6 h-[calc(100%-3rem)] w-px bg-ink/15 sm:left-7">
              <motion.div className="h-full w-full origin-top bg-gold-deep" style={{ scaleY: fill }} />
            </div>
            <ol ref={ref} className="relative">
              {steps.map((s, i) => (
                <Step key={s.title} n={i + 1} title={s.title} text={s.text} />
              ))}
            </ol>
          </div>
        </div>
      </section>
    </MotionRoot>
  );
}
