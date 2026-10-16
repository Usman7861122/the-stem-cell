import { motion } from 'framer-motion';
import { Atom, Dna, Stethoscope } from 'lucide-react';
import { highlights } from '@/data/content';
import { MotionRoot } from '../shared/Motion';
import { ease } from '@/lib/motion/variants';

/** Glowing cell with a nucleus and small exosomes around it. Matches the line style of the other icons. */
function CellIcon({ size = 44, strokeWidth = 1.1, className = '' }: { size?: number; strokeWidth?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
      style={{ filter: 'drop-shadow(0 0 7px rgba(253,113,19,0.55))' }}
    >
      <path d="M12.2 4.6c3.2-.2 6.6 1.9 7 5.3.4 3.5-1.2 7.1-4.7 8.4-3.4 1.2-7.7-.3-8.6-3.8C5 10.8 6.4 7.4 8.8 5.8c1-.7 2.2-1.1 3.4-1.2z" />
      <circle cx="11.2" cy="11.6" r="2.3" />
      <circle cx="15.6" cy="14.2" r="0.55" fill="currentColor" stroke="none" />
      <circle cx="15" cy="8.4" r="0.45" fill="currentColor" stroke="none" />
      <circle cx="8.4" cy="15" r="0.4" fill="currentColor" stroke="none" />
      <circle cx="3.4" cy="4.6" r="1.1" />
      <circle cx="21" cy="5.2" r="0.75" />
      <circle cx="21" cy="20.4" r="1.2" />
      <circle cx="3.6" cy="19.8" r="0.65" />
    </svg>
  );
}

const icons = { atom: Atom, cell: CellIcon, dna: Dna, stethoscope: Stethoscope };

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
