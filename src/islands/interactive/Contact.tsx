import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, MapPin, Phone } from 'lucide-react';
import { locations, services, site } from '@/data/content';
import type { Photo } from '@/lib/images';
import { MotionRoot, Pic, Reveal } from '../shared/Motion';
import { ease } from '@/lib/motion/variants';

type Errors = Partial<Record<'name' | 'email' | 'phone', string>>;

const ENDPOINT = import.meta.env.PUBLIC_FORM_ENDPOINT as string | undefined;

const field =
  'mt-2 w-full rounded-xl border border-ink/20 bg-white px-4 text-base text-ink placeholder:text-slate/70 transition-colors focus:border-navy';

export default function Contact({ photo }: { photo: Photo }) {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');

  async function onSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get('company')) return; // honeypot

    const next: Errors = {};
    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const phone = String(data.get('phone') ?? '').trim();
    if (!name) next.name = 'Please enter your name.';
    if (!/^\S+@\S+\.\S+$/.test(email)) next.email = 'Please enter a valid email, like name@example.com.';
    if (phone && phone.replace(/\D/g, '').length < 10) next.phone = 'Please enter a 10-digit phone number.';
    setErrors(next);
    if (Object.keys(next).length) {
      form.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus();
      return;
    }

    setStatus('sending');
    try {
      if (ENDPOINT) {
        const res = await fetch(ENDPOINT, {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: data,
        });
        if (!res.ok) throw new Error('Request failed');
      } else {
        console.warn('PUBLIC_FORM_ENDPOINT is not set. The form did not send anywhere.');
        await new Promise((r) => setTimeout(r, 700));
      }
      setStatus('done');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <MotionRoot>
      <section id="contact" data-dark className="section-pad relative overflow-hidden bg-navy text-ivory">
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-48 -left-40 h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(253,113,19,0.14),transparent_65%)]"
        />
        <div className="container-x relative grid gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow eyebrow-dark">Get in Touch</p>
            <h2 className="h-section mt-5">
              Begin your <em className="text-gold">journey</em>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-mist">
              Tell us a little about your goals. A member of our team will reach out to schedule your
              consultation.
            </p>

            <a
              href={site.phoneHref}
              className="mt-10 inline-flex items-center gap-4 font-serif text-3xl text-ivory transition-colors hover:text-gold sm:text-4xl"
            >
              <span className="grid h-14 w-14 place-items-center rounded-full border border-gold/60 text-gold">
                <Phone size={22} aria-hidden />
              </span>
              {site.phone}
            </a>

            <ul className="mt-8 space-y-4 text-mist">
              {locations.map((l) => (
                <li key={l.id} className="flex items-start gap-3">
                  <MapPin size={18} className="mt-1 shrink-0 text-gold" aria-hidden />
                  <span>
                    <strong className="font-semibold text-ivory">{l.name}:</strong> {l.full}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10 hidden overflow-hidden rounded-[1.5rem] lg:block">
              <Pic photo={photo} sizes="40vw" className="aspect-[16/10] w-full object-cover" />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="rounded-[2rem] bg-ivory p-6 text-ink shadow-2xl sm:p-10" data-light>
              <AnimatePresence mode="wait">
                {status === 'done' ? (
                  <motion.div
                    key="done"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease }}
                    className="py-16 text-center"
                    role="status"
                  >
                    <CheckCircle2 className="mx-auto text-gold-deep" size={56} strokeWidth={1.25} aria-hidden />
                    <h3 className="mt-6 font-serif text-3xl">Thank you</h3>
                    <p className="lead mx-auto mt-3 max-w-sm">
                      We received your request. Our team will contact you soon.
                    </p>
                    {!ENDPOINT && import.meta.env.DEV && (
                      <p className="mx-auto mt-6 max-w-sm rounded-lg bg-sand p-3 text-sm text-slate">
                        Demo mode: set PUBLIC_FORM_ENDPOINT in .env so this form really sends.
                      </p>
                    )}
                    <button
                      type="button"
                      onClick={() => setStatus('idle')}
                      className="btn btn-outline mt-8 !text-ink"
                    >
                      Send another request
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    noValidate
                    onSubmit={onSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="grid gap-5 sm:grid-cols-2"
                  >
                    <div className="sm:col-span-2">
                      <h3 className="font-serif text-3xl">Request a consultation</h3>
                    </div>

                    <div>
                      <label htmlFor="name" className="text-sm font-bold">
                        Full name <span aria-hidden>*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        autoComplete="name"
                        required
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'name-err' : undefined}
                        className={`${field} h-13 min-h-12`}
                      />
                      {errors.name && (
                        <p id="name-err" className="mt-1.5 text-sm font-semibold text-red-700">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="text-sm font-bold">
                        Email <span aria-hidden>*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-err' : undefined}
                        className={`${field} min-h-12`}
                      />
                      {errors.email && (
                        <p id="email-err" className="mt-1.5 text-sm font-semibold text-red-700">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="text-sm font-bold">
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? 'phone-err' : undefined}
                        className={`${field} min-h-12`}
                      />
                      {errors.phone && (
                        <p id="phone-err" className="mt-1.5 text-sm font-semibold text-red-700">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="location" className="text-sm font-bold">
                        Preferred location
                      </label>
                      <select id="location" name="location" className={`${field} min-h-12`} defaultValue="">
                        <option value="">No preference</option>
                        {locations.map((l) => (
                          <option key={l.id} value={l.name}>
                            {l.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="interest" className="text-sm font-bold">
                        I am interested in
                      </label>
                      <select id="interest" name="interest" className={`${field} min-h-12`} defaultValue="">
                        <option value="">Not sure yet</option>
                        {services.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="message" className="text-sm font-bold">
                        How can we help?
                      </label>
                      <textarea id="message" name="message" rows={4} className={`${field} py-3`} />
                      <p className="mt-1.5 text-sm text-slate">
                        Please do not share private medical details in this form.
                      </p>
                    </div>

                    {/* Honeypot: hidden from people, bots fill it in */}
                    <input
                      type="text"
                      name="company"
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden
                      className="absolute -left-[9999px] h-0 w-0 opacity-0"
                    />

                    <div className="sm:col-span-2">
                      <button type="submit" disabled={status === 'sending'} className="btn btn-primary w-full sm:w-auto">
                        {status === 'sending' ? 'Sending…' : 'Request a Consultation'}
                      </button>
                      {status === 'error' && (
                        <p role="alert" className="mt-3 text-sm font-semibold text-red-700">
                          Sorry, something went wrong. Please try again or call {site.phone}.
                        </p>
                      )}
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </section>
    </MotionRoot>
  );
}
