import { motion } from 'framer-motion';
import { Atom, Dna, Pill, Stethoscope } from 'lucide-react';
import { highlights } from '@/data/content';
import { MotionRoot } from '../shared/Motion';
import { ease } from '@/lib/motion/variants';

const icons = { atom: Atom, pill: Pill, dna: Dna, stethoscope: Stethoscope };

export default function Highlights() {
  return (
    <MotionRoot>
      <section data-dark aria-label="Highlights" className="relative bg-navy text-ivory">
        <div className="container-x">
          <ul className="grid grid-cols-2 lg:grid-cols-4">
            {highlights.map((h, i) => {
              const Icon = icons[h.icon];
              return (
                <motion.li
                  key={h.text}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.8, ease, delay: i * 0.1 }}
                  className={`group relative flex flex-col items-center px-4 py-10 text-center sm:px-8 lg:py-14 ${
                    i > 0 ? 'lg:border-l lg:border-white/10' : ''
                  } ${i % 2 === 1 ? 'border-l border-white/10 lg:border-l' : ''} ${
                    i > 1 ? 'border-t border-white/10 lg:border-t-0' : ''
                  }`}
                >
                  <Icon
                    size={44}
                    strokeWidth={1.1}
                    aria-hidden
                    className="text-gold transition-transform duration-700 ease-out group-hover:-translate-y-1 group-hover:scale-110"
                  />
                  <p className="mt-6 max-w-[14rem] text-[0.78rem] font-semibold uppercase leading-relaxed tracking-[0.16em] text-ivory/90 sm:text-[0.82rem]">
                    {h.text}
                  </p>
                  <span
                    aria-hidden
                    className="mt-5 h-px w-8 bg-gold transition-all duration-700 group-hover:w-16"
                  />
                </motion.li>
              );
            })}
          </ul>
        </div>
      </section>
    </MotionRoot>
  );
}
