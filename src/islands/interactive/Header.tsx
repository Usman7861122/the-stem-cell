import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Activity, ArrowRight, Brain, MapPin, MapPinned, ChevronDown, Compass, Dna, Droplets, FlaskConical, Images, Menu, Phone, Scale, Sparkles, X,
  type LucideIcon,
} from 'lucide-react';
import { nav, site, type NavItem } from '@/data/content';
import type { Photo } from '@/lib/images';
import { MotionRoot } from '../shared/Motion';
import { ease } from '@/lib/motion/variants';

const linkBase =
  'group relative whitespace-nowrap py-2 text-[0.78rem] font-semibold uppercase tracking-[0.14em] transition-colors duration-300 2xl:text-[0.82rem] 2xl:tracking-[0.16em]';
const linkCls = (light: boolean) => `${linkBase} ${light ? 'text-ivory' : 'text-ink'}`;

function Underline({ light = false }: { light?: boolean }) {
  return (
    <span className={`absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 ${light ? 'bg-gold' : 'bg-gold-deep'} transition-transform duration-500 group-hover:scale-x-100 group-focus-visible:scale-x-100`} />
  );
}

const icons: Record<string, LucideIcon> = {
  '/hormone-therapy': Activity,
  '/stem-cell-therapy': Dna,
  '/exosome-therapy': Sparkles,
  '/peptide-therapy': FlaskConical,
  '/weight-loss': Scale,
  '/iv-therapy': Droplets,
  '/rebuilding-brains': Brain,
  '/#path': Compass,
  '/#gallery': Images,
  '/locations': MapPinned,
  '/locations/sarasota': MapPin,
  '/locations/venice': MapPin,
};

/** Desktop mega menu: opens on hover, focus or click; Escape closes. */
function DropdownItem({ item, onToggle, light }: { item: NavItem; onToggle: (v: boolean) => void; light: boolean }) {
  const [show, setShow] = useState(false);
  const id = `menu-${item.label.toLowerCase()}`;
  const set = (v: boolean) => {
    setShow(v);
    onToggle(v);
  };
  return (
    <div
      className="flex h-full items-center"
      onMouseEnter={() => set(true)}
      onMouseLeave={() => set(false)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) set(false);
      }}
      onKeyDown={(e) => e.key === 'Escape' && set(false)}
    >
      <button
        type="button"
        className={`${linkCls(light)} inline-flex items-center gap-1.5`}
        aria-expanded={show}
        aria-controls={id}
        onClick={() => set(!show)}
      >
        {item.label}
        <ChevronDown size={14} aria-hidden className={`transition-transform duration-300 ${show ? 'rotate-180' : ''}`} />
        <Underline light={light} />
      </button>
      <AnimatePresence>
        {show && (
          <motion.div
            id={id}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22, ease }}
            className="absolute inset-x-0 top-full border-t border-ink/10 bg-ivory shadow-[0_30px_60px_-20px_rgba(10,26,47,0.35)]"
          >
            <div className="container-x grid grid-cols-12 gap-10 py-9">
              <div className="col-span-8 flex flex-col">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-gold-deep">
                  {item.label}
                </p>
                <ul className="mt-5 grid flex-1 auto-rows-fr grid-cols-3 gap-4">
                  {item.children!.map((c) => {
                    const Icon = icons[c.href] ?? ArrowRight;
                    return (
                      <li key={c.href} className="list-none">
                        <a
                          href={c.href}
                          onClick={() => set(false)}
                          className="group flex h-full flex-col rounded-2xl border border-ink/10 bg-sand/60 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/40 hover:bg-white hover:shadow-[0_14px_30px_-14px_rgba(10,26,47,0.3)] focus-visible:border-gold/60 focus-visible:bg-white"
                        >
                          <span className="grid h-10 w-10 place-items-center rounded-full bg-ivory text-gold-deep ring-1 ring-ink/10 transition-colors group-hover:bg-gold group-hover:text-white group-hover:ring-gold">
                            <Icon size={19} aria-hidden />
                          </span>
                          <span className="mt-4 block font-serif text-lg leading-tight text-ink">{c.label}</span>
                          {c.desc && <span className="mt-1.5 block text-sm leading-snug text-slate">{c.desc}</span>}
                          <ArrowRight
                            size={16}
                            aria-hidden
                            className="mt-auto pt-0 text-gold-deep opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                          />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="col-span-4">
                <div data-dark className="flex h-full flex-col justify-center gap-7 rounded-2xl bg-navy p-8 text-ivory">
                  <div>
                    <p className="font-serif text-2xl leading-snug">Not sure where to start?</p>
                    <p className="mt-3 text-sm leading-relaxed text-mist">
                      Talk with our team in Sarasota or Venice. We will listen first and help you choose.
                    </p>
                  </div>
                  <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
                    <a href="/contact" onClick={() => set(false)} className="btn btn-gold !min-h-11 !px-6">
                      Book a Consultation
                    </a>
                    <a href={site.phoneHref} className="inline-flex items-center gap-2 text-sm font-semibold hover:text-gold">
                      <Phone size={16} aria-hidden /> {site.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Header({ logo, logoLight }: { logo: Photo; logoLight?: Photo }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);

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

  const light = !scrolled && !open && !mega;
  const mark = light && logoLight ? logoLight : logo;
  return (
    <MotionRoot>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-500 ${
          scrolled || open || mega
            ? 'bg-ivory/90 shadow-[0_1px_0_rgba(10,26,47,0.08)] backdrop-blur-xl'
            : 'bg-gradient-to-b from-ink/75 via-ink/35 to-transparent'
        }`}
      >
        <div
          className={`container-x flex items-center justify-between transition-[height] duration-500 ${
            scrolled ? 'h-[68px]' : 'h-[84px]'
          }`}
        >
          <a href="/#top" aria-label="The Stem Cell Institute, home" className="block shrink-0">
            <img
              src={mark.src}
              width={mark.width}
              height={mark.height}
              alt="The Stem Cell Institute"
              className="h-9 w-auto sm:h-11"
            />
          </a>

          <nav aria-label="Main" className="hidden items-center gap-6 self-stretch 2xl:gap-9 xl:flex">
            {nav.map((l) =>
              l.children ? (
                <DropdownItem key={l.label} item={l} onToggle={setMega} light={light} />
              ) : (
                <a key={l.href} href={l.href} className={linkCls(light)}>
                  {l.label}
                  <Underline light={light} />
                </a>
              ),
            )}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={site.phoneHref}
              className={`hidden items-center gap-2 whitespace-nowrap text-sm font-semibold transition-colors duration-300 2xl:flex ${light ? 'text-ivory' : 'text-ink'}`}
            >
              <Phone size={16} aria-hidden /> {site.phone}
            </a>
            <a href="/contact" className={`btn ${light ? 'btn-gold' : 'btn-primary'} hidden !min-h-11 !px-6 whitespace-nowrap sm:inline-flex`}>
              Book a Consultation
            </a>
            <button
              type="button"
              className={`grid h-12 w-12 place-items-center rounded-full transition-colors xl:hidden ${light ? 'text-ivory' : 'text-ink'}`}
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
                {[{ label: 'Home', href: '/#top' } as NavItem, ...nav].flatMap(
                  (l) =>
                    l.children
                      ? [
                          { label: l.label, href: '', group: true },
                          ...l.children.map((c) => ({ ...c, group: false, sub: true })),
                        ]
                      : [{ ...l, group: false, sub: false }],
                ).map((l: { label: string; href: string; group?: boolean; sub?: boolean }, i) =>
                  l.group ? (
                    <motion.p
                      key={l.label}
                      className="border-b border-white/10 pb-2 pt-6 text-xs font-semibold uppercase tracking-[0.2em] text-gold"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.06 * i, duration: 0.5, ease }}
                    >
                      {l.label}
                    </motion.p>
                  ) : (
                    <motion.a
                      key={l.href}
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className={`border-b border-white/10 font-serif ${l.sub ? 'py-4 pl-4 text-2xl' : 'py-5 text-3xl'}`}
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
