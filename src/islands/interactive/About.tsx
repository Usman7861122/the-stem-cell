import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';
import { Check, Pause, Play, RotateCcw } from 'lucide-react';
import { MotionRoot, Reveal } from '../shared/Motion';

const values = ['Physician-led care', 'Root-cause approach', 'Ongoing medical support'];

/** 4:5 branded video. Plays once when scrolled into view and stops on the logo end card. */
function IntroVideo() {
  const wrap = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const inView = useInView(wrap, { amount: 0.6, once: true });
  const reduce = useReducedMotion();
  const [state, setState] = useState<'idle' | 'playing' | 'paused' | 'ended'>('idle');

  // Start once when about 60% visible (not for visitors who prefer reduced motion).
  useEffect(() => {
    if (inView && !reduce) video.current?.play().catch(() => {});
  }, [inView, reduce]);

  const onButton = () => {
    const v = video.current;
    if (!v) return;
    if (state === 'ended') v.currentTime = 0;
    if (v.paused || state === 'ended') v.play().catch(() => {});
    else v.pause();
  };

  const label =
    state === 'playing' ? 'Pause video' : state === 'ended' ? 'Replay video' : 'Play video';

  return (
    <div
      ref={wrap}
      className="relative mx-auto aspect-[4/5] w-full max-w-[34rem] overflow-hidden rounded-2xl bg-navy shadow-[0_40px_80px_-40px_rgba(14,39,71,0.6)] lg:max-w-none"
    >
      <video
        ref={video}
        className="h-full w-full object-cover"
        poster="/videos/about-intro-poster.webp"
        muted
        playsInline
        preload="metadata"
        onPlay={() => setState('playing')}
        onPause={() => setState((s) => (s === 'ended' ? s : 'paused'))}
        onEnded={() => setState('ended')}
        aria-label="Animated stem cells, ending with The Stem Cell Institute logo and tagline"
      >
        <source src="/videos/about-intro.mp4" type="video/mp4" />
      </video>
      <button
        type="button"
        onClick={onButton}
        aria-label={label}
        className="absolute bottom-4 left-4 grid h-11 w-11 cursor-pointer place-items-center rounded-full bg-ivory/90 text-ink shadow-md backdrop-blur transition-colors hover:bg-ivory"
      >
        {state === 'playing' ? (
          <Pause size={18} aria-hidden />
        ) : state === 'ended' ? (
          <RotateCcw size={18} aria-hidden />
        ) : (
          <Play size={18} aria-hidden />
        )}
      </button>
    </div>
  );
}

export default function About() {
  return (
    <MotionRoot>
      <section id="about" className="section-pad overflow-hidden bg-sand">
        <div className="container-x grid items-center gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-20">
          <Reveal>
            <IntroVideo />
          </Reveal>

          <div>
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
              <ul className="mt-9 grid gap-3">
                {values.map((v) => (
                  <li key={v} className="flex items-center gap-3 text-[0.95rem] font-semibold">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-navy text-gold">
                      <Check size={14} aria-hidden />
                    </span>
                    {v}
                  </li>
                ))}
              </ul>
              <a href="#why" className="btn btn-primary mt-10">
                Why patients choose us
              </a>
            </Reveal>
          </div>
        </div>
      </section>
    </MotionRoot>
  );
}
