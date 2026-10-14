// All website copy lives here so it is easy to edit.

export const site = {
  name: 'The Stem Cell Institute',
  url: import.meta.env.PUBLIC_SITE_URL ?? 'http://localhost:4321',
  phone: '(941) 371-7171',
  phoneHref: 'tel:+19413717171',
  consultationPrice: '$89', // from the current site; confirm before launch
  bookingHref: '#contact', // TODO: replace with online booking link
  // TODO: add real social URLs. Empty list = hidden in footer.
  socials: [] as { label: string; href: string }[],
};

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Treatments', href: '#care' },
  { label: 'Our Approach', href: '#path' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Locations', href: '#locations' },
];

export const locations = [
  {
    id: 'sarasota',
    name: 'Sarasota',
    street: '4071 Bee Ridge Rd., Suite #101',
    city: 'Sarasota',
    zip: '34233',
  },
  {
    id: 'venice',
    name: 'Venice',
    street: '389 Commercial Ct',
    city: 'Venice',
    zip: '34292',
  },
].map((l) => ({
  ...l,
  full: `${l.street}, ${l.city}, FL ${l.zip}`,
}));

export const pillars = [
  {
    n: '01',
    title: 'Real Science',
    text: 'Evidence-based therapies and lab-guided protocols. We measure first, so we never have to guess.',
    image: 'spineModel',
  },
  {
    n: '02',
    title: 'Real Results',
    text: 'We look for the root cause, not only the symptom, and we track your progress at every visit.',
    image: 'ultrasound',
  },
  {
    n: '03',
    title: 'Personalized to You',
    text: 'Your plan follows your labs, your symptoms and your goals. Never a generic protocol.',
    image: 'consultation',
  },
] as const;

export const services = [
  {
    id: 'regenerative',
    title: 'Regenerative Medicine',
    blurb: "Therapies that support your body's own repair systems, from joints to skin.",
    items: [
      'Stem Cell Therapy',
      'PRP (Platelet-Rich Plasma)',
      'Exosome Therapy',
      'Ozone Therapy',
      'Hyperbaric Oxygen Therapy',
    ],
    image: 'ultrasound',
  },
  {
    id: 'hormone',
    title: 'Hormone & Peptide Optimization',
    blurb: 'Balanced hormones support energy, mood, sleep and recovery.',
    items: ['Hormone Replacement Therapy for Men & Women', 'Peptide Therapy', 'Growth Hormone Support'],
    image: 'consultation',
  },
  {
    id: 'longevity',
    title: 'Biohacking & Longevity',
    blurb: 'Modern tools to help you feel younger, stay sharper and age well.',
    items: [
      'NAD+ IV Therapy',
      'Red Light Therapy',
      'IV Nutrient Drips',
      'Epigenetic & DNA Testing',
      'Biological Age Optimization',
    ],
    image: 'reception',
  },
  {
    id: 'functional',
    title: 'Functional Medicine & Performance',
    blurb: 'Whole-body care that finds the cause and keeps you well for the long term.',
    items: ['Weight Loss Programs', 'Mood & Cognitive Support', 'Functional Lab Panels', 'Preventive Medical Care'],
    image: 'teamSkeleton',
  },
];

export const concerns = [
  'Joint Pain & Recovery',
  'Low Energy & Chronic Fatigue',
  'Skin Aging & Hair Thinning',
  'Brain Fog & Poor Focus',
  'Weight & Metabolism',
  'Immune Health',
  'Athletic Recovery & Longevity',
  'Preventive Wellness',
];

export const reasons = [
  {
    title: 'Personalized Medical Care',
    text: 'Your health plan is built around your labs, symptoms and goals, not generic protocols.',
    icon: 'user',
  },
  {
    title: 'Advanced, Science-Backed Treatments',
    text: 'We use proven and emerging regenerative therapies, guided by evidence and careful testing.',
    icon: 'flask',
  },
  {
    title: 'Expert Physician-Led Team',
    text: 'Every plan is overseen by experienced physicians who take the time to listen and explain.',
    icon: 'stethoscope',
  },
  {
    title: 'Whole-Body Wellness Approach',
    text: 'We look at the full picture: joints, hormones, energy, sleep and long-term health.',
    icon: 'leaf',
  },
] as const;

export const steps = [
  {
    title: 'In-Depth Medical Consultation',
    text: 'We listen first. Together we review your history, symptoms and goals, and we order the tests that matter.',
  },
  {
    title: 'Customized Treatment Plan',
    text: 'Your physician builds a plan from your results, with clear steps and clear timing.',
  },
  {
    title: 'Advanced Therapies',
    text: 'You receive your treatments in a calm, clinical setting, guided by your care team.',
  },
  {
    title: 'Ongoing Medical Support',
    text: 'We follow up, track your progress and adjust your plan as your body responds.',
  },
];

// IMPORTANT: these are SAMPLE testimonials so the design can be reviewed.
// Replace with real, permission-approved patient stories before launch.
export const testimonials = [
  {
    quote:
      'Sample text: I came in with months of knee pain. The team listened, tested and explained every step. I feel like I have my active life back.',
    name: 'Patient name',
    detail: 'Joint recovery',
    sample: true,
  },
  {
    quote:
      'Sample text: The care felt personal from the first visit. My plan was built around my labs and my goals, and I always knew what came next.',
    name: 'Patient name',
    detail: 'Longevity program',
    sample: true,
  },
  {
    quote:
      'Sample text: Calm clinic, kind staff and clear answers. I never felt rushed, and the follow-up support made all the difference.',
    name: 'Patient name',
    detail: 'Regenerative therapy',
    sample: true,
  },
];

export const footerLinks = {
  Explore: [
    { label: 'About', href: '#about' },
    { label: 'Treatments', href: '#care' },
    { label: 'Your Path to Wellness', href: '#path' },
    { label: 'Gallery', href: '#gallery' },
  ],
  Treatments: [
    { label: 'Regenerative Medicine', href: '#care' },
    { label: 'Hormone & Peptide', href: '#care' },
    { label: 'Biohacking & Longevity', href: '#care' },
    { label: 'Functional Medicine', href: '#care' },
  ],
};

// Highlights band under the hero.
// NOTE: the first item replaces "Largest wellness facility in Las Vegas" from the sample image,
// because this institute is in Florida. Confirm the compounding pharmacy claim before launch.
export const highlights = [
  { icon: 'atom', text: 'Wellness clinics in Sarasota & Venice' },
  { icon: 'pill', text: 'In-house compounding pharmacy' },
  { icon: 'dna', text: 'Advanced peptide & regenerative protocols' },
  { icon: 'stethoscope', text: 'Physician-led precision care' },
] as const;
