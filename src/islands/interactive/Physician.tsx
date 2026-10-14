import { Phone } from 'lucide-react';
import { site } from '@/data/content';
import type { Photo } from '@/lib/images';
import { MotionRoot, Pic, Reveal } from '../shared/Motion';

export default function Physician({ photo }: { photo: Photo }) {
  return (
    <MotionRoot>
      <section id="physician" data-dark className="section-pad bg-ink text-ivory">
        <div className="container-x grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="eyebrow eyebrow-dark">Your Physician</p>
              <h2 className="h-section mt-5">
                Care that starts with <em className="text-gold">listening</em>
              </h2>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-mist">
                Every patient at The Stem Cell Institute is cared for under the direction of an
                experienced physician. We take time to understand your story, explain your options in
                plain words, and stay with you at every step.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
                <a href="#contact" className="btn btn-gold">
                  Book a Consultation
                </a>
                <a
                  href={site.phoneHref}
                  className="inline-flex min-h-11 items-center gap-2 font-semibold text-ivory transition-colors hover:text-gold"
                >
                  <Phone size={18} aria-hidden /> {site.phone}
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:col-span-6">
            <div className="overflow-hidden rounded-2xl">
              <Pic
                photo={photo}
                sizes="(min-width: 1024px) 45vw, 92vw"
                className="aspect-[4/5] w-full object-cover object-top sm:aspect-[5/4] lg:aspect-[4/5]"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </MotionRoot>
  );
}
