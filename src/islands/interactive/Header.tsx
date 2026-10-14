import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Phone, X } from 'lucide-react';
import { nav, site } from '@/data/content';
import type { Photo } from '@/lib/images';
import { MotionRoot } from '../shared/Motion';
import { ease } from '@/lib/motion/variants';

export default function Header({ logo }: { logo: Photo }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock page scroll and close with Escape while the mobile menu is open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <MotionRoot>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-500 ${
          scrolled || open
            ? 'bg-ivory/90 shadow-[0_1px_0_rgba(10,26,47,0.08)] backdrop-blur-xl'
            : 'bg-gradient-to-b from-ivory/70 via-ivory/30 to-transparent'
        }`}
      >
        <div
          className={`container-x flex items-center justify-between transition-[height] duration-500 ${
            scrolled ? 'h-[68px]' : 'h-[84px]'
          }`}
        >
          <a href="#top" aria-label="The Stem Cell Institute, home" className="block shrink-0">
            <img
              src={logo.src}
              width={logo.width}
              height={logo.height}
              alt="The Stem Cell Institute"
              className="h-9 w-auto sm:h-11"
            />
          </a>

          <nav aria-label="Main" className="hidden items-center gap-9 xl:flex">
            {nav.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative whitespace-nowrap py-2 text-[0.82rem] font-semibold uppercase tracking-[0.16em] text-ink"
              >
                {l.label}
                <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-gold-deep transition-transform duration-500 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={site.phoneHref}
              className="hidden items-center gap-2 text-sm font-semibold text-ink xl:flex"
            >
              <Phone size={16} aria-hidden /> {site.phone}
            </a>
            <a href="#contact" className="btn btn-primary hidden !min-h-11 !px-6 whitespace-nowrap sm:inline-flex">
              Book a Consultation
            </a>
            <button
              type="button"
              className="grid h-12 w-12 place-items-center rounded-full text-ink xl:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-menu"
              className="h-[calc(100dvh-68px)] overflow-y-auto bg-navy px-5 pb-10 pt-8 text-ivory xl:hidden"
              data-dark
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <nav aria-label="Mobile" className="flex flex-col">
                {[{ label: 'Home', href: '#top' }, ...nav, { label: 'Contact', href: '#contact' }].map(
                  (l, i) => (
                    <motion.a
                      key={l.href}
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="border-b border-white/10 py-5 font-serif text-3xl"
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.06 * i, duration: 0.5, ease }}
                    >
                      {l.label}
                    </motion.a>
                  ),
                )}
              </nav>
              <a href={site.phoneHref} className="btn btn-gold mt-10 w-full">
                <Phone size={18} aria-hidden /> Call {site.phone}
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </MotionRoot>
  );
}
