import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MapPin, Navigation, Phone } from 'lucide-react';
import { locations, site } from '@/data/content';
import { MotionRoot, Reveal } from '../shared/Motion';
import { ease } from '@/lib/motion/variants';

export default function Locations() {
  const [active, setActive] = useState(0);
  const loc = locations[active];
  const q = encodeURIComponent(`${site.name}, ${loc.full}`);

  return (
    <MotionRoot>
      <section id="locations" className="section-pad bg-sand">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Visit Us</p>
            <h2 className="h-section mt-5">
              Choose your <em className="text-gold-deep">preferred location</em>
            </h2>
            <p className="lead mt-6">Two Florida clinics, one standard of care.</p>
          </Reveal>

          <div className="mt-14 grid gap-8 lg:mt-20 lg:grid-cols-12">
            <div className="flex flex-col gap-4 lg:col-span-5" role="radiogroup" aria-label="Clinic location">
              {locations.map((l, i) => {
                const on = i === active;
                return (
                  <button
                    key={l.id}
                    type="button"
                    role="radio"
                    aria-checked={on}
                    onClick={() => setActive(i)}
                    className={`relative cursor-pointer overflow-hidden rounded-[1.5rem] border p-7 text-left transition-colors duration-500 sm:p-8 ${
                      on ? 'border-navy bg-navy text-ivory' : 'border-ink/15 bg-ivory hover:border-ink/40'
                    }`}
                  >
                    <span className="flex items-center justify-between">
                      <span className="font-serif text-3xl">{l.name}</span>
                      <span
                        className={`grid h-11 w-11 place-items-center rounded-full border ${
                          on ? 'border-gold text-gold' : 'border-ink/25'
                        }`}
                      >
                        <MapPin size={18} aria-hidden />
                      </span>
                    </span>
                    <span className={`mt-3 block text-[0.98rem] ${on ? 'text-mist' : 'text-slate'}`}>
                      {l.street}
                      <br />
                      {l.city}, FL {l.zip}
                    </span>
                    <motion.span
                      className="block overflow-hidden"
                      initial={false}
                      animate={{ height: on ? 'auto' : 0, opacity: on ? 1 : 0 }}
                      transition={{ duration: 0.5, ease }}
                    >
                      <span className="mt-6 flex flex-wrap gap-3">
                        <a
                          href={site.phoneHref}
                          onClick={(e) => e.stopPropagation()}
                          className="btn btn-gold !min-h-11 !px-5"
                          tabIndex={on ? 0 : -1}
                        >
                          <Phone size={16} aria-hidden /> {site.phone}
                        </a>
                        <a
                          href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(l.full)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="btn btn-outline !min-h-11 !px-5"
                          tabIndex={on ? 0 : -1}
                        >
                          <Navigation size={16} aria-hidden /> Directions
                        </a>
                      </span>
                      <span className="mt-4 block text-sm text-mist">Call us for current opening hours.</span>
                    </motion.span>
                  </button>
                );
              })}
            </div>

            <div className="relative min-h-[360px] overflow-hidden rounded-[1.75rem] bg-ivory shadow-[0_30px_70px_-40px_rgba(10,26,47,0.5)] lg:col-span-7 lg:min-h-[480px]">
              <AnimatePresence mode="wait">
                <motion.iframe
                  key={loc.id}
                  title={`Map of the ${loc.name} clinic`}
                  src={`https://www.google.com/maps?q=${q}&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full border-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </MotionRoot>
  );
}
