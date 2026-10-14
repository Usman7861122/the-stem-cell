import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import type { Photo } from '@/lib/images';
import { MotionRoot, Pic, Reveal } from '../shared/Motion';

export type GalleryItem = { photo: Photo; span: string; position?: string };

export default function Gallery({ items }: { items: GalleryItem[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);

  const step = useCallback(
    (d: number) => setOpen((v) => (v === null ? v : (v + d + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (open === null) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(null);
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
      lastFocus.current?.focus();
    };
  }, [open === null, step]);

  return (
    <MotionRoot>
      <section id="gallery" className="section-pad">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Gallery</p>
            <h2 className="h-section mt-5">
              Inside <em className="text-gold-deep">the Institute</em>
            </h2>
            <p className="lead mt-6">A calm clinic, a caring team and careful, hands-on medicine.</p>
          </Reveal>

          <div className="mt-14 grid auto-rows-[150px] grid-flow-dense grid-cols-2 gap-3 sm:auto-rows-[200px] sm:gap-4 lg:mt-20 lg:auto-rows-[230px] lg:grid-cols-4">
            {items.map((it, i) => (
              <Reveal key={i} delay={(i % 4) * 0.06} y={20} className={it.span}>
                <button
                  type="button"
                  onClick={(e) => {
                    lastFocus.current = e.currentTarget;
                    setOpen(i);
                  }}
                  aria-label={`Open photo: ${it.photo.alt}`}
                  className="group relative block h-full w-full cursor-pointer overflow-hidden rounded-[1.25rem] bg-sand"
                >
                  <Pic
                    photo={it.photo}
                    sizes="(min-width: 1024px) 30vw, 50vw"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.07]"
                    style={{ objectPosition: it.position ?? 'center' }}
                  />
                  <span className="absolute inset-0 bg-navy/0 transition-colors duration-500 group-hover:bg-navy/25" />
                  <span className="absolute bottom-4 right-4 grid h-11 w-11 translate-y-2 place-items-center rounded-full bg-ivory text-ink opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                    <Expand size={18} aria-hidden />
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>

        <AnimatePresence>
          {open !== null && (
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Photo viewer"
              data-dark
              className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/95 p-4 sm:p-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpen(null)}
            >
              <button
                ref={closeRef}
                type="button"
                aria-label="Close photo viewer"
                onClick={() => setOpen(null)}
                className="absolute right-4 top-4 grid h-12 w-12 cursor-pointer place-items-center rounded-full bg-white/10 text-ivory hover:bg-white/20 sm:right-8 sm:top-8"
              >
                <X />
              </button>
              <button
                type="button"
                aria-label="Previous photo"
                onClick={(e) => {
                  e.stopPropagation();
                  step(-1);
                }}
                className="absolute left-3 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 cursor-pointer place-items-center rounded-full bg-white/10 text-ivory hover:bg-white/20 sm:left-8"
              >
                <ChevronLeft />
              </button>
              <button
                type="button"
                aria-label="Next photo"
                onClick={(e) => {
                  e.stopPropagation();
                  step(1);
                }}
                className="absolute right-3 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 cursor-pointer place-items-center rounded-full bg-white/10 text-ivory hover:bg-white/20 sm:right-8"
              >
                <ChevronRight />
              </button>
              <AnimatePresence mode="wait">
                <motion.div
                  key={open}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35 }}
                  className="max-h-full max-w-full"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Pic
                    photo={items[open].photo}
                    sizes="90vw"
                    className="max-h-[82vh] w-auto max-w-full rounded-2xl object-contain"
                  />
                  <p className="mt-4 text-center text-sm text-mist">{items[open].photo.alt}</p>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </MotionRoot>
  );
}
