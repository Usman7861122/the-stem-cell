import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Check } from 'lucide-react';
import type { Photo } from '@/lib/images';
import { MotionRoot, Pic, Reveal } from '../shared/Motion';

const values = ['Physician-led care', 'Root-cause approach', 'Ongoing medical support'];

export default function About({ main }: { main: Photo }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const yMain = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <MotionRoot>
      <section id="about" ref={ref} className="section-pad overflow-hidden bg-sand">
        <div className="container-x grid items-center gap-16 lg:grid-cols-12 lg:gap-12">
          {/* Image: one clean, large photo */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
              <motion.div style={{ y: yMain, scale: 1.12 }} className="h-full w-full">
                <Pic
                  photo={main}
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="h-full w-full object-cover object-top"
                />
              </motion.div>
            </div>
          </div>

          {/* Text */}
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal>
              <p className="eyebrow">About the Institute</p>
              <h2 className="h-section mt-5">
                A trusted home for <em className="text-gold-deep">regenerative</em> medicine
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="lead mt-7">
                The Stem Cell Institute is a wellness center offering physician-led regenerative
                therapies and advanced stem cell treatments. Our goal is simple: help your body do
                what it was designed to do, to heal, restore and renew.
              </p>
              <p className="lead mt-5">
                We take the time to listen, test and explain. Then we build a plan that fits your
                health, your goals and your daily life.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <ul className="mt-9 grid gap-4 sm:grid-cols-3">
                {values.map((v) => (
                  <li key={v} className="flex items-start gap-3 text-[0.95rem] font-semibold">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-navy text-gold">
                      <Check size={14} aria-hidden />
                    </span>
                    {v}
                  </li>
                ))}
              </ul>
              <a href="#why" className="btn btn-primary mt-11">
                Why patients choose us
              </a>
            </Reveal>
          </div>
        </div>
      </section>
    </MotionRoot>
  );
}
