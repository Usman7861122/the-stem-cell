// All website copy lives here so it is easy to edit.

export const site = {
  name: 'The Stem Cell Institute',
  url: import.meta.env.PUBLIC_SITE_URL ?? 'http://localhost:4321',
  phone: '(941) 371-7171',
  phoneHref: 'tel:+19413717171',
  consultationPrice: '$89', // from the current site; confirm before launch
  bookingHref: '/#contact', // TODO: replace with online booking link
  // TODO: add real social URLs. Empty list = hidden in footer.
  socials: [] as { label: string; href: string }[],
};

export type NavItem = { label: string; href: string; children?: { label: string; href: string; desc?: string }[] };

export const nav: NavItem[] = [
  { label: 'About', href: '/about' },
  {
    label: 'Treatments',
    href: '/#care',
    children: [
      { label: 'Hormone Therapy', href: '/hormone-therapy', desc: 'Lab-guided balance for men and women' },
      { label: 'Stem Cell Therapy', href: '/stem-cell-therapy', desc: 'Regenerative care for joints and recovery' },
      { label: 'Exosome Therapy', href: '/exosome-therapy', desc: 'Newer cell-signal care, explained simply' },
      { label: 'Peptide Therapy', href: '/peptide-therapy', desc: 'Targeted support for energy and recovery' },
      { label: 'Weight Loss', href: '/weight-loss', desc: 'Physician-supervised, lab-guided plans' },
      { label: 'IV Therapy', href: '/iv-therapy', desc: 'Hydration, vitamins and minerals' },
    ],
  },
  {
    label: 'Resources',
    href: '/rebuilding-brains',
    children: [
      { label: 'Rebuilding Brains', href: '/rebuilding-brains', desc: 'Our approach to memory and brain health' },
      { label: 'Our Approach', href: '/#path', desc: 'How we care for you, step by step' },
      { label: 'Gallery', href: '/#gallery', desc: 'A look inside our clinics' },
    ],
  },
  {
    label: 'Locations',
    href: '/locations',
    children: [
      { label: 'All Locations', href: '/locations', desc: 'Both clinics, hours and directions' },
      { label: 'Sarasota Clinic', href: '/locations/sarasota', desc: '4071 Bee Ridge Rd., Suite #101' },
      { label: 'Venice Clinic', href: '/locations/venice', desc: '389 Commercial Ct' },
    ],
  },
  { label: 'Contact', href: '/contact' },
];

export const clinicTz = 'America/New_York';
export type HoursRow = { day: string; open: string | null; close: string | null };
// TODO: confirm the real working hours with the client before launch (sample hours shown).
const weekHours: HoursRow[] = [
  { day: 'Monday', open: '09:00', close: '17:00' },
  { day: 'Tuesday', open: '09:00', close: '17:00' },
  { day: 'Wednesday', open: '09:00', close: '17:00' },
  { day: 'Thursday', open: '09:00', close: '17:00' },
  { day: 'Friday', open: '09:00', close: '17:00' },
  { day: 'Saturday', open: null, close: null },
  { day: 'Sunday', open: null, close: null },
];

export const locations = [
  {
    id: 'sarasota',
    name: 'Sarasota',
    street: '4071 Bee Ridge Rd., Suite #101',
    city: 'Sarasota',
    zip: '34233',
    intro: "Our Sarasota clinic offers physician-led regenerative and wellness care, with lab-guided plans and follow-up visits close to home.",
    nearby: ["Sarasota", "Siesta Key", "Gulf Gate", "Lakewood Ranch", "Osprey"],
    faqs: [{"q": "Where is the Sarasota clinic?", "a": "The Stem Cell Institute Sarasota clinic is at 4071 Bee Ridge Rd., Suite #101, Sarasota, FL 34233. Call (941) 371-7171 for help with directions."}, {"q": "What are the working hours in Sarasota?", "a": "Please see the working hours on this page. They are shown in Eastern Time, and the current day is highlighted. Call us if you are not sure."}, {"q": "Which treatments can I get at the Sarasota clinic?", "a": "We offer hormone therapy, stem cell therapy, exosome therapy, peptide therapy, weight loss and IV therapy. Your physician will explain which options may suit you."}, {"q": "How do I book a visit in Sarasota?", "a": "Call (941) 371-7171 or request a consultation online. Our team will find a time that works for you."}],
  },
  {
    id: 'venice',
    name: 'Venice',
    street: '389 Commercial Ct',
    city: 'Venice',
    zip: '34292',
    intro: "Our Venice clinic brings the same physician-led regenerative and wellness care to Venice and the communities around it.",
    nearby: ["Venice", "Nokomis", "Osprey", "North Port", "Englewood"],
    faqs: [{"q": "Where is the Venice clinic?", "a": "The Stem Cell Institute Venice clinic is at 389 Commercial Ct, Venice, FL 34292. Call (941) 371-7171 for help with directions."}, {"q": "What are the working hours in Venice?", "a": "Please see the working hours on this page. They are shown in Eastern Time, and the current day is highlighted. Call us if you are not sure."}, {"q": "Which treatments can I get at the Venice clinic?", "a": "We offer hormone therapy, stem cell therapy, exosome therapy, peptide therapy, weight loss and IV therapy. Your physician will explain which options may suit you."}, {"q": "How do I book a visit in Venice?", "a": "Call (941) 371-7171 or request a consultation online. Our team will find a time that works for you."}],
  },
].map((l) => ({
  ...l,
  hours: weekHours,
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
    id: 'hormone',
    href: '/hormone-therapy',
    title: 'Hormone Therapy',
    blurb: 'Balanced hormones support energy, mood, sleep and recovery.',
    items: [
      'Hormone replacement for men & women',
      'Lab-guided dosing',
      'Regular follow-up and monitoring',
      'Plans built around your symptoms',
    ],
    image: 'hormoneLab',
  },
  {
    id: 'stem-cell',
    href: '/stem-cell-therapy',
    title: 'Stem Cell Therapy',
    blurb: "Regenerative care that supports your body's own repair systems.",
    items: [
      'Joint and soft-tissue support',
      'Image-guided, precise placement',
      'Neurological and memory support',
      'A physician-built treatment plan',
    ],
    image: 'ultrasound',
  },
  {
    id: 'exosome',
    href: '/exosome-therapy',
    title: 'Exosome Therapy',
    blurb: 'Cell-to-cell messengers that help signal your body to repair and renew.',
    items: [
      'Supports natural repair and recovery',
      'Used on its own or with stem cell care',
      'Physician-guided protocols',
      'Reviewed and adjusted at every visit',
    ],
    image: 'spineModel',
  },
  {
    id: 'peptide',
    href: '/peptide-therapy',
    title: 'Peptide Therapy',
    blurb: 'Targeted peptide protocols, chosen for you and guided by your labs.',
    items: [
      'Recovery and performance support',
      'Metabolic and wellness support',
      'Personalized protocols',
      'Ongoing physician oversight',
    ],
    image: 'teamSkeleton',
  },
  {
    id: 'weight-loss',
    href: '/weight-loss',
    title: 'Weight Loss',
    blurb: 'Medical weight loss that looks at the cause, not just the number on the scale.',
    items: [
      'Lab and metabolic testing',
      'A personalized weight loss plan',
      'Regular check-ins with your care team',
      'Support to keep results long term',
    ],
    image: 'doctorPortrait',
  },
  {
    id: 'iv',
    href: '/iv-therapy',
    title: 'IV Therapy',
    blurb: 'Hydration and nutrients delivered straight to your bloodstream.',
    items: [
      'Personalized IV formulas',
      'Hydration and nutrient support',
      'Energy and recovery support',
      'Given in a calm, supervised setting',
    ],
    image: 'reception',
  },
];

export const concerns = [
  'Joint Pain & Recovery',
  'Low Energy & Fatigue',
  'Hormone Imbalance',
  'Weight & Metabolism',
  'Memory & Brain Fog',
  'Athletic Recovery',
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
    detail: 'Hormone therapy',
    sample: true,
  },
  {
    quote:
      'Sample text: Calm clinic, kind staff and clear answers. I never felt rushed, and the follow-up support made all the difference.',
    name: 'Patient name',
    detail: 'Stem cell therapy',
    sample: true,
  },
];

export const footerLinks = {
  Explore: [
    { label: 'About', href: '/about' },
    { label: 'Treatments', href: '/#care' },
    { label: 'Your Path to Wellness', href: '/#path' },
    { label: 'Gallery', href: '/#gallery' },
    { label: 'Locations', href: '/locations' },
    { label: 'Contact', href: '/contact' },
  ],
  Treatments: [
    { label: 'Hormone Therapy', href: '/hormone-therapy' },
    { label: 'Stem Cell Therapy', href: '/stem-cell-therapy' },
    { label: 'Exosome Therapy', href: '/exosome-therapy' },
    { label: 'Peptide Therapy', href: '/peptide-therapy' },
    { label: 'Weight Loss', href: '/weight-loss' },
    { label: 'IV Therapy', href: '/iv-therapy' },
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

// ---------- Rebuilding Brains™ (from Dr. Cole's article) ----------
export const brains = {
  href: '/rebuilding-brains',
  title: 'Rebuilding Brains™',
  tagline: 'Real hope for Alzheimer’s dementia patients and their families',
  byline: 'By William J. Cole Jr., D.O.',
  credentials: 'Double Board Certified in PM&R Interventional Medicine and Regenerative Medicine',
  quote: 'The brain is not necessarily broken. Many times it’s simply a short in the wiring.',
  stats: [
    { value: '580,000', label: 'Floridians living with Alzheimer’s disease' },
    { value: '7.2 million', label: 'Americans affected today' },
    { value: '55 million', label: 'people living with dementia worldwide' },
  ],
  contributors: [
    'Chronic inflammation',
    'Post-COVID brain fog',
    'COVID-vaccine-related neuritis',
    'Reduced circulation',
    'Insulin resistance',
    'Metabolic dysfunction',
    'Hormonal imbalances',
    'Nutritional deficiencies',
    'Vascular disease',
    'Toxic exposures',
    'Sleep disorders',
    'Loss of neuronal connectivity',
  ],
  approach: [
    { title: 'Superior diagnostics', text: 'We look for the reasons the brain is struggling, not only the symptoms it shows.' },
    { title: 'Neurostimulation', text: 'Strategies that help brain cells communicate with each other again.' },
    { title: 'Metabolic optimization', text: 'Blood sugar, circulation, hormones and nutrition, balanced so the brain has what it needs.' },
    { title: 'Strategic peptide protocols', text: 'Targeted support, chosen for the individual patient.' },
    { title: 'Regenerative nano-biologics', text: 'Applied with precision so the body can remove and replace worn-out cells, wake up dormant ones and build new shortcuts.' },
  ],
  conditions: [
    'Alzheimer’s dementia',
    'Memory loss',
    'Cognitive decline',
    'Parkinson’s disease',
    'Long-COVID brain dysfunction',
    'Traumatic brain injury',
    'Stroke recovery',
    'Chronic concussion syndrome',
    'Spinal cord injury',
    'Other neurological disorders',
  ],
  outcomes: [
    { quote: 'Her memory returned and she can now function normal.', who: 'A patient’s family' },
    { quote: 'The fog lifted and now I have clarity.', who: 'Debbie, Long-COVID brain dysfunction' },
    { quote: 'Mom is responding and talking again.', who: 'Melissa' },
    { quote: 'I finally have peace of mind. Mom is safe and secure and can now be left alone again.', who: 'Lily' },
  ],
  disclaimer:
    'Patient stories are shared with permission and describe individual experiences. Results vary from person to person and are not guaranteed. This page is for general information and is not medical advice.',
};


// ---------- Hormone Therapy page (SEO page for Sarasota & Venice) ----------
// NOTE: written for the website, not taken from a client document. Have the physician review all claims.
export const hormone = {
  href: '/hormone-therapy',
  title: 'Hormone Therapy in Sarasota & Venice, FL',
  metaTitle: 'Hormone Therapy in Sarasota & Venice, FL | The Stem Cell Institute',
  metaDescription:
    'Physician-led hormone therapy for men and women in Sarasota and Venice, Florida. Lab-guided plans, clear explanations and ongoing follow-up at The Stem Cell Institute. Book a consultation.',
  signs: [
    'Constant tiredness or low energy',
    'Trouble falling or staying asleep',
    'Brain fog and trouble focusing',
    'Mood changes, irritability or low mood',
    'Weight gain that will not shift',
    'Slower recovery and less strength',
    'Hot flashes and night sweats',
    'Feeling "not like yourself"',
  ],
  groups: [
    {
      title: 'Hormone therapy for women',
      text: 'Hormone levels change through perimenopause and menopause, and many women notice it in their sleep, mood, energy and weight. We look at your symptoms and your labs together, then build a plan with you.',
    },
    {
      title: 'Hormone therapy for men',
      text: 'Hormone levels also shift as men age. If you feel tired, flat or slow to recover, we test first so that any plan is based on your numbers and your goals, not on guesswork.',
    },
  ],
  steps: [
    { title: 'Consultation', text: 'We listen to your story, symptoms, history and goals.' },
    { title: 'Lab testing', text: 'We order the right tests so we can see what is really happening.' },
    { title: 'Personalized plan', text: 'Your physician explains the results and builds a plan around you.' },
    { title: 'Follow-up', text: 'We re-check, track how you feel and adjust your plan over time.' },
  ],
  why: [
    { title: 'Testing comes first', text: 'Every plan starts with your symptoms and your lab results.' },
    { title: 'Physician-led care', text: 'Your plan is overseen by an experienced physician who takes time to explain it.' },
    { title: 'Local to Sarasota & Venice', text: 'Two clinics, easy to reach, with follow-up visits close to home.' },
    { title: 'Part of a whole-body plan', text: 'Hormone care can sit alongside our peptide, weight loss and regenerative options.' },
  ],
  faqs: [
    {
      q: 'What is hormone therapy?',
      a: 'Hormone therapy replaces or rebalances hormones that have dropped below the level that is right for you. It is guided by your symptoms and lab results, and it is prescribed and monitored by a physician.',
    },
    {
      q: 'Who may benefit from hormone therapy?',
      a: 'Men and women who have symptoms such as low energy, poor sleep, mood changes, brain fog, hot flashes or slow recovery, and whose tests show a hormone imbalance, may be candidates. Only a medical evaluation can tell if it is right for you.',
    },
    {
      q: 'Do I need blood tests first?',
      a: 'Yes. We do not guess. Lab testing helps us understand your levels and decide if hormone therapy is appropriate and safe for you.',
    },
    {
      q: 'How long until I notice a difference?',
      a: 'This varies from person to person. Your physician will talk with you about what to expect and will re-check your progress at follow-up visits.',
    },
    {
      q: 'Is hormone therapy safe?',
      a: 'Every treatment has benefits and risks. Your physician will review your health history, explain the options and monitor you with regular follow-up. Results vary and are not guaranteed.',
    },
    {
      q: 'Where can I get hormone therapy in Sarasota or Venice?',
      a: 'The Stem Cell Institute has two clinics: 4071 Bee Ridge Rd., Suite #101 in Sarasota, and 389 Commercial Ct in Venice, Florida. Call (941) 371-7171 or request a consultation online.',
    },
  ],
  nearby: ['Sarasota', 'Venice', 'Siesta Key', 'Osprey', 'Nokomis', 'North Port', 'Lakewood Ranch'],
};
