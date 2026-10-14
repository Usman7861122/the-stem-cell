import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { FlaskConical, Leaf, Stethoscope, User } from 'lucide-react';
import { reasons } from '@/data/content';
import { MotionRoot, Reveal } from '../shared/Motion';

const icons = { user: User, flask: FlaskConical, stethoscope: Stethoscope, leaf: Leaf };

function Card({ r, i }: { r: (typeof reasons)[number]; i: number }) {
  const x = useMotionValue(-400);
  const y = useMotionValue(-400);
  const glow = useMotionTemplate`radial-gradient(340px circle at ${x}px ${y}px, rgba(253,113,19,0.2), transparent 70%)`;
  const Icon = icons[r.icon];

  return (
    <Reveal delay={0.08 * i}>
      <div
        className="group relative h-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-8 transition-colors duration-500 hover:border-gold/40 sm:p-10"
        onPointerMove={(e) => {
          const b = e.currentTarget.getBoundingClientRect();
          x.set(e.clientX - b.left);
          y.set(e.clientY - b.top);
        }}
      >
        <motion.div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: glow }} />
        <div className="relative">
          <span className="grid h-14 w-14 place-items-center rounded-full border border-gold/50 text-gold transition-transform duration-500 group-hover:scale-110">
            <Icon size={24} strokeWidth={1.5} aria-hidden />
          </span>
          <h3 className="mt-7 font-serif text-2xl leading-snug sm:text-[1.7rem]">{r.title}</h3>
          <p className="mt-4 text-[1rem] leading-relaxed text-mist">{r.text}</p>
        </div>
      </div>
    </Reveal>
  );
}

export default function WhyChoose() {
  return (
    <MotionRoot>
      <section id="why" data-dark className="section-pad relative overflow-hidden bg-navy text-ivory">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(253,113,19,0.14),transparent_65%)]"
        />
        <div className="container-x relative grid gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow eyebrow-dark">Why Choose Us</p>
            <h2 className="h-section mt-5">
              Why patients choose <em className="text-gold">The Stem Cell Institute</em>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-mist">
              Care that is calm, clear and built for one person: you.
            </p>
            <a href="#contact" className="btn btn-gold mt-10">
              Book a Consultation
            </a>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-8">
            {reasons.map((r, i) => (
              <Card key={r.title} r={r} i={i} />
            ))}
          </div>
        </div>
      </section>
    </MotionRoot>
  );
}
