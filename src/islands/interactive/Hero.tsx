import { useEffect, useRef, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { Photo } from '@/lib/images';
import { MotionRoot, Pic } from '../shared/Motion';
import { ease } from '@/lib/motion/variants';

const focusWords = ['Joints', 'Energy', 'Hormones', 'Recovery'];

const line = (children: React.ReactNode, delay: number) => (
  <span className="block overflow-hidden pb-[0.12em]">
    <motion.span
      className="block"
      initial={{ y: '110%' }}
      animate={{ y: 0 }}
      transition={{ duration: 1.1, ease, delay }}
    >
      {children}
    </motion.span>
  </span>
);

function HeroInner({ banner }: { banner: Photo }) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const [word, setWord] = useState(0);

  // Pointer position, from -0.5 to 0.5, smoothed with a spring.
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 60, damping: 20, mass: 0.6 });

  const imgX = useTransform(sx, (v) => v * -26);
  const imgY = useTransform(sy, (v) => v * -16);
  const textX = useTransform(sx, (v) => v * 14);
  const textY = useTransform(sy, (v) => v * 8);
  const orbX = useTransform(sx, (v) => v * 60);
  const orbY = useTransform(sy, (v) => v * 40);

  // Soft light that follows the cursor.
  const gx = useMotionValue(0);
  const gy = useMotionValue(0);
  const glow = useMotionTemplate`radial-gradient(520px circle at ${gx}px ${gy}px, rgba(255,255,255,0.14), transparent 65%)`;

  useEffect(() => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;
    const fine = window.matchMedia('(pointer: fine)').matches;
    if (!fine) return;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      mx.set(x / r.width - 0.5);
      my.set(y / r.height - 0.5);
      gx.set(x);
      gy.set(y);
    };
    el.addEventListener('pointermove', onMove);
    return () => el.removeEventListener('pointermove', onMove);
  }, [reduce, mx, my, gx, gy]);

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setWord((w) => (w + 1) % focusWords.length), 2600);
    return () => clearInterval(t);
  }, [reduce]);

  return (
    <section
      id="top"
      ref={ref}
      data-dark
      className="relative isolate overflow-hidden bg-ink text-ivory lg:h-[max(48vw,720px)]"
    >
      {/* Photo: stacked on phones, full-width banner on large screens */}
      <div className="relative h-[54svh] min-h-[380px] overflow-hidden bg-ink lg:absolute lg:inset-x-0 lg:top-14 lg:h-auto lg:min-h-0 lg:bg-transparent lg:[mask-image:linear-gradient(to_bottom,transparent_0%,black_14%,black_82%,transparent)]">
        <motion.div
          className="h-full w-full lg:h-auto"
          style={{ x: imgX, y: imgY }}
          initial={{ scale: 1.14, opacity: 0 }}
          animate={{ scale: 1.04, opacity: 1 }}
          transition={{ duration: 2.2, ease }}
        >
          <Pic
            photo={banner}
            sizes="(min-width: 1024px) 100vw, 1100px"
            eager
            className="h-full w-full object-cover object-[12%_30%] lg:h-auto lg:object-left-top"
          />
        </motion.div>
        {/* Luxury tint: deep navy wash, warm gold light and a soft vignette */}
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[linear-gradient(100deg,rgba(10,26,47,0.28)_0%,rgba(14,39,71,0.42)_45%,rgba(10,26,47,0.88)_100%)]" />
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_38%_45%,rgba(253,113,19,0.22),transparent_70%)] mix-blend-soft-light" />
        <div aria-hidden className="pointer-events-none absolute inset-0 shadow-[inset_0_0_160px_rgba(5,12,24,0.55)]" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink to-transparent lg:hidden" />
        <motion.div className="pointer-events-none absolute inset-0 hidden lg:block" style={{ background: glow }} />
      </div>

      {/* Floating gold orb: depth layer */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-[4%] top-[12%] -z-10 hidden h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(253,113,19,0.28),transparent_70%)] blur-2xl lg:block"
        style={{ x: orbX, y: orbY }}
      />

      <div className="container-x pb-14 pt-2 lg:absolute lg:inset-y-0 lg:right-[4vw] lg:flex lg:w-[31vw] lg:max-w-[32rem] lg:items-center lg:p-0">
        <motion.div className="w-full" style={{ x: textX, y: textY }}>
          <motion.p
            className="eyebrow eyebrow-dark"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.4 }}
          >
            Regenerative Medicine · Florida
          </motion.p>

          <h1 className="mt-6 text-[clamp(2.4rem,9.5vw,3.5rem)] text-ivory lg:text-[clamp(2rem,3.9vw,4.5rem)]">
            {line('Have the body', 0.55)}
            {line(
              <>
                <em className="text-gold">heal</em> the body.
              </>,
              0.7,
            )}
          </h1>

          <motion.p
            className="mt-6 max-w-md text-[1.02rem] leading-relaxed text-mist lg:mt-5 lg:text-[0.98rem] xl:text-lg"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 1.05 }}
          >
            Physician-led regenerative care, shaped around your labs, your goals and your life.
          </motion.p>

          <motion.div
            className="mt-5 flex items-center gap-3 whitespace-nowrap text-xs font-semibold uppercase tracking-[0.16em] text-ivory/80 sm:text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.25 }}
            aria-live="off"
          >
            <span>Personalized care for</span>
            <span className="relative inline-block h-6 w-32 overflow-hidden text-gold">
              <AnimatePresence mode="wait">
                <motion.span
                  key={word}
                  className="absolute inset-0"
                  initial={{ y: '100%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: '-100%', opacity: 0 }}
                  transition={{ duration: 0.5, ease }}
                >
                  {focusWords[word]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.div>

          <motion.div
            className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 lg:mt-9"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 1.4 }}
          >
            <a href="/#contact" className="btn btn-gold">
              Book a Consultation
            </a>
            <a
              href="/#care"
              className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-ivory hover:text-gold"
            >
              Explore treatments
              <ArrowRight
                size={18}
                aria-hidden
                className="transition-transform duration-500 group-hover:translate-x-1.5"
              />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
    </section>
  );
}

export default function Hero({ banner }: { banner: Photo }) {
  return (
    <MotionRoot>
      <HeroInner banner={banner} />
    </MotionRoot>
  );
}
