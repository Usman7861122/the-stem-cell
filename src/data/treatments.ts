import { hormone } from './content';

export type Step = { title: string; text: string };
export type Treatment = {
  slug: string;
  href: string;
  name: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  therapyName: string;
  heroLead: string;
  heroPos: string;
  photoKeys: { hero: string; process: string; why: string; local?: string };
  whatEyebrow: string;
  whatTitle: [string, string, string];
  whatParas: string[];
  signsTitle: string;
  signs: string[];
  signsNote: string;
  groupsEyebrow: string;
  groupsTitle: [string, string];
  groups: { title: string; text: string }[];
  processTitle: [string, string];
  processLead: string;
  steps: Step[];
  whyTitle: [string, string, string];
  why: Step[];
  faqs: { q: string; a: string }[];
  ctaLabel: string;
};

export const nearbyAreas = ['Sarasota', 'Venice', 'Siesta Key', 'Osprey', 'Nokomis', 'North Port', 'Lakewood Ranch'];

const where = (name: string) => ({
  q: `Where can I get ${name.toLowerCase()} in Sarasota or Venice?`,
  a: 'The Stem Cell Institute has two clinics: 4071 Bee Ridge Rd., Suite #101 in Sarasota, and 389 Commercial Ct in Venice, Florida. Call (941) 371-7171 or request a consultation online.',
});

const hormoneT: Treatment = {
  slug: 'hormone-therapy',
  href: hormone.href,
  name: 'Hormone Therapy',
  title: hormone.title,
  metaTitle: hormone.metaTitle,
  metaDescription: hormone.metaDescription,
  therapyName: 'Hormone therapy',
  heroLead:
    'Feeling tired, foggy or not like yourself? At The Stem Cell Institute, our physicians start with your symptoms and your labs, then build a hormone plan around you, for men and for women.',
  heroPos: '30% 60%',
  photoKeys: { hero: 'hormoneHero', process: 'hormoneLab', why: 'hormoneActive', local: 'hormoneLocal' },
  whatEyebrow: 'Understanding your hormones',
  whatTitle: ['What is ', 'hormone therapy', '?'],
  whatParas: [
    'Hormones are the body’s chemical messengers. They help control your energy, sleep, mood, weight, strength and recovery. When levels drift out of balance, you can feel it every day.',
    'Hormone therapy aims to bring those levels back to where they are right for you. It is guided by your symptoms and your lab results, and it is prescribed and monitored by a physician. If you live in Sarasota, Venice or the surrounding area, our two clinics make it easy to get started and to keep up with follow-up visits.',
  ],
  signsTitle: 'Signs your hormones may be out of balance',
  signs: hormone.signs,
  signsNote: 'These signs can have many causes. Testing and a medical evaluation tell us what is really going on.',
  groupsEyebrow: 'Care for every stage of life',
  groupsTitle: ['Hormone therapy for ', 'men and women'],
  groups: hormone.groups,
  processTitle: ['Lab-guided, ', 'never guesswork'],
  processLead: 'Your plan is built from your results and reviewed again and again as your body responds.',
  steps: hormone.steps,
  whyTitle: ['Hormone care you can ', 'trust', ', close to home'],
  why: hormone.why,
  faqs: hormone.faqs,
  ctaLabel: 'Book a Hormone Therapy Consultation',
};

const stem: Treatment = {
  slug: 'stem-cell-therapy',
  href: '/stem-cell-therapy',
  name: 'Stem Cell Therapy',
  title: 'Stem Cell Therapy in Sarasota & Venice, FL',
  metaTitle: 'Stem Cell Therapy in Sarasota & Venice, FL | The Stem Cell Institute',
  metaDescription:
    'Physician-led stem cell therapy for joint pain and recovery in Sarasota and Venice, Florida. Ultrasound-guided, non-surgical options explained clearly at The Stem Cell Institute. Book a consultation.',
  therapyName: 'Stem cell therapy',
  heroLead:
    'Living with joint pain or a slow recovery? Our physicians look at the cause first, then talk with you about non-surgical regenerative options and whether they fit your goals.',
  heroPos: '50% 40%',
  photoKeys: { hero: 'stemHero', process: 'stemProcess', why: 'stemWhy' },
  whatEyebrow: 'Regenerative medicine',
  whatTitle: ['What is ', 'stem cell therapy', '?'],
  whatParas: [
    'Stem cells are the body’s repair cells. Regenerative care aims to support the natural healing of tissue such as joints, tendons and cartilage, without the downtime of surgery.',
    'At The Stem Cell Institute your physician reviews your history and your imaging, explains what is realistic, and uses ultrasound guidance where it is appropriate. If you live in Sarasota, Venice or nearby, our two clinics keep your follow-up close to home.',
  ],
  signsTitle: 'When people ask us about stem cell therapy',
  signs: [
    'Ongoing knee, hip or shoulder pain',
    'Stiff or aching joints',
    'Pain that limits walking or exercise',
    'An old sports or work injury',
    'Wear-and-tear (osteoarthritis) symptoms',
    'Slow recovery after activity',
    'Wanting to avoid or delay surgery',
    'Treatments that have not helped enough',
  ],
  signsNote: 'Only a medical evaluation can tell if regenerative care is right for you.',
  groupsEyebrow: 'Who it may help',
  groupsTitle: ['Care for ', 'joints and recovery'],
  groups: [
    {
      title: 'Joint and orthopedic care',
      text: 'For knees, hips, shoulders and other joints, we look at your exam and imaging together, then explain which regenerative options may be worth considering for you.',
    },
    {
      title: 'Active life and recovery',
      text: 'Whether you play golf, tennis or pickleball, or simply want to keep walking the beach, we build a plan around the way you want to move.',
    },
  ],
  processTitle: ['A clear plan, ', 'step by step'],
  processLead: 'Nothing is rushed. We explain each step before it happens and check your progress afterwards.',
  steps: [
    { title: 'Consultation', text: 'We listen to your story, your pain and your goals.' },
    { title: 'Exam and imaging', text: 'We examine the area and review your scans, using ultrasound where helpful.' },
    { title: 'Personalized plan', text: 'Your physician explains the options, the benefits and the risks.' },
    { title: 'Follow-up', text: 'We check your progress and adjust your plan over time.' },
  ],
  whyTitle: ['Regenerative care you can ', 'trust', ', close to home'],
  why: [
    { title: 'Physician-led', text: 'Your care is directed by an experienced physician who takes time to explain it.' },
    { title: 'Ultrasound guidance', text: 'Where appropriate, ultrasound helps us treat the right spot with care.' },
    { title: 'Honest expectations', text: 'We tell you what may help, what may not, and that results can vary.' },
    { title: 'Local to Sarasota & Venice', text: 'Two clinics, easy to reach, with follow-up visits near home.' },
  ],
  faqs: [
    { q: 'What is stem cell therapy?', a: 'Stem cell therapy is a regenerative approach that aims to support the body’s own healing in damaged tissue. Your physician will explain exactly what is used, how it is given and what is known about it.' },
    { q: 'Who may be a candidate?', a: 'People with joint pain, stiffness or injury that has not improved enough with other care may be candidates. Only a medical evaluation can tell if it is right for you.' },
    { q: 'Is it painful?', a: 'Most people describe mild discomfort during the visit. Your physician will explain what to expect before you decide.' },
    { q: 'Will it replace surgery?', a: 'For some people regenerative care may be an option to consider before surgery. It is not right for every condition, and your physician will tell you honestly.' },
    { q: 'Is it approved by the FDA?', a: 'Regulation of regenerative products is specific to the product and the use. Your physician will explain what is and is not FDA-approved. Results vary and are not guaranteed.' },
    where('Stem Cell Therapy'),
  ],
  ctaLabel: 'Book a Stem Cell Consultation',
};

const exosome: Treatment = {
  slug: 'exosome-therapy',
  href: '/exosome-therapy',
  name: 'Exosome Therapy',
  title: 'Exosome Therapy in Sarasota & Venice, FL',
  metaTitle: 'Exosome Therapy in Sarasota & Venice, FL | The Stem Cell Institute',
  metaDescription:
    'Physician-led exosome therapy in Sarasota and Venice, Florida. Learn how exosomes may support recovery and renewal, and who may be a candidate. Book a consultation at The Stem Cell Institute.',
  therapyName: 'Exosome therapy',
  heroLead:
    'Curious about exosomes? Our physicians explain what they are, what the research shows so far, and whether this newer regenerative option may fit your goals.',
  heroPos: '50% 45%',
  photoKeys: { hero: 'exosomeHero', process: 'exosomeProcess', why: 'exosomeWhy' },
  whatEyebrow: 'Regenerative medicine',
  whatTitle: ['What is ', 'exosome therapy', '?'],
  whatParas: [
    'Exosomes are tiny messengers that cells use to talk to each other. Researchers are studying how they may help the body support recovery and tissue renewal.',
    'This is a newer area of medicine, so we keep our explanations honest and simple. Your physician reviews your health history, explains what is known and what is not, and helps you decide. Our two clinics in Sarasota and Venice keep follow-up close to home.',
  ],
  signsTitle: 'When people ask us about exosome therapy',
  signs: [
    'Slow recovery after injury or activity',
    'Aching joints and stiffness',
    'Wanting to support skin and tissue health',
    'Low energy or feeling run down',
    'Looking for a non-surgical option',
    'Interest in newer regenerative care',
    'Wanting to add to an existing plan',
    'Questions about what is safe and proven',
  ],
  signsNote: 'Exosome care is still evolving. A medical evaluation tells us whether it makes sense for you.',
  groupsEyebrow: 'Where it fits',
  groupsTitle: ['Part of a ', 'whole-body plan'],
  groups: [
    {
      title: 'Recovery and renewal',
      text: 'For people who want to support recovery, we look at the full picture: your history, your activity and your goals.',
    },
    {
      title: 'Alongside other care',
      text: 'Exosome therapy can sit next to our stem cell, peptide and hormone options, so your plan stays simple and joined up.',
    },
  ],
  processTitle: ['Clear answers, ', 'step by step'],
  processLead: 'We explain what we know, what we do not, and what you can reasonably expect.',
  steps: [
    { title: 'Consultation', text: 'We listen to your story, your health history and your goals.' },
    { title: 'Evaluation', text: 'We review your history and any tests to see if it is appropriate.' },
    { title: 'Personalized plan', text: 'Your physician explains the options, the benefits and the risks.' },
    { title: 'Follow-up', text: 'We check how you feel and adjust your plan over time.' },
  ],
  whyTitle: ['Newer care, ', 'explained', ' honestly'],
  why: [
    { title: 'Physician-led', text: 'Your plan is overseen by an experienced physician who takes time to explain it.' },
    { title: 'Plain-English answers', text: 'No hype. We tell you what is known, what is still being studied and what can vary.' },
    { title: 'A whole-body view', text: 'We consider your joints, hormones, weight and recovery together.' },
    { title: 'Local to Sarasota & Venice', text: 'Two clinics, easy to reach, with follow-up visits near home.' },
  ],
  faqs: [
    { q: 'What are exosomes?', a: 'Exosomes are tiny packages that cells release to send signals to other cells. Researchers are studying how they may support healing and renewal.' },
    { q: 'Who may be a candidate for exosome therapy?', a: 'People looking to support recovery or tissue health may ask about it. Only a medical evaluation can tell if it is appropriate for you.' },
    { q: 'Is exosome therapy proven?', a: 'It is a newer area and research is still growing. Your physician will explain what is known today. Results vary and are not guaranteed.' },
    { q: 'Is it approved by the FDA?', a: 'Regulation depends on the product and how it is used. Your physician will explain the current status before you decide.' },
    { q: 'How is it given?', a: 'Your physician will explain the method that applies to you, how long a visit takes and what to expect afterwards.' },
    where('Exosome Therapy'),
  ],
  ctaLabel: 'Book an Exosome Consultation',
};

const peptide: Treatment = {
  slug: 'peptide-therapy',
  href: '/peptide-therapy',
  name: 'Peptide Therapy',
  title: 'Peptide Therapy in Sarasota & Venice, FL',
  metaTitle: 'Peptide Therapy in Sarasota & Venice, FL | The Stem Cell Institute',
  metaDescription:
    'Physician-guided peptide therapy in Sarasota and Venice, Florida. Personalized plans for recovery, energy and wellness, with clear guidance and follow-up. Book a consultation at The Stem Cell Institute.',
  therapyName: 'Peptide therapy',
  heroLead:
    'Want to recover faster and feel better day to day? Our physicians explain how peptide therapy works and build a plan around your goals, your health history and your labs.',
  heroPos: '50% 40%',
  photoKeys: { hero: 'peptideHero', process: 'peptideProcess', why: 'peptideWhy' },
  whatEyebrow: 'Targeted wellness',
  whatTitle: ['What is ', 'peptide therapy', '?'],
  whatParas: [
    'Peptides are short chains of amino acids, the building blocks of protein. Your body already uses peptides as signals that help control recovery, metabolism, sleep and more.',
    'Peptide therapy uses specific peptides, prescribed by a physician, to support those goals. Your plan is matched to you and checked over time. If you live in Sarasota, Venice or nearby, our two clinics make follow-up easy.',
  ],
  signsTitle: 'When people ask us about peptide therapy',
  signs: [
    'Slow recovery after workouts or injury',
    'Low energy and tiredness',
    'Poor or broken sleep',
    'Stubborn weight or body composition changes',
    'Less strength and stamina than before',
    'Brain fog and trouble focusing',
    'Wanting to support healthy aging',
    'Interest in a personalized wellness plan',
  ],
  signsNote: 'These signs can have many causes. A medical evaluation tells us what is going on and what makes sense.',
  groupsEyebrow: 'Matched to your goals',
  groupsTitle: ['Peptide care for ', 'recovery and vitality'],
  groups: [
    {
      title: 'Recovery and performance',
      text: 'For active people who want to bounce back well, we look at your training, your history and your labs before suggesting anything.',
    },
    {
      title: 'Energy, sleep and wellness',
      text: 'If you feel run down, we look for the cause first, then talk through whether peptide therapy belongs in your plan.',
    },
  ],
  processTitle: ['Personalized, ', 'never one-size-fits-all'],
  processLead: 'Every plan starts with your goals and your health, and is reviewed as your body responds.',
  steps: [
    { title: 'Consultation', text: 'We listen to your story, your symptoms and your goals.' },
    { title: 'Evaluation and labs', text: 'We review your history and order the right tests.' },
    { title: 'Personalized plan', text: 'Your physician explains the options, the benefits and the risks.' },
    { title: 'Follow-up', text: 'We re-check, track how you feel and adjust over time.' },
  ],
  whyTitle: ['Peptide care you can ', 'trust', ', close to home'],
  why: [
    { title: 'Physician-prescribed', text: 'Every plan is prescribed and overseen by a physician, never guesswork.' },
    { title: 'Testing first', text: 'We look at your history and your labs before we recommend anything.' },
    { title: 'A whole-body view', text: 'Peptides can sit alongside our hormone, weight loss and regenerative care.' },
    { title: 'Local to Sarasota & Venice', text: 'Two clinics, easy to reach, with follow-up visits near home.' },
  ],
  faqs: [
    { q: 'What is peptide therapy?', a: 'Peptide therapy uses specific peptides, which are short chains of amino acids, to support goals such as recovery, energy and wellness. It is prescribed and monitored by a physician.' },
    { q: 'Who may benefit from peptide therapy?', a: 'Adults who want help with recovery, energy, sleep or healthy aging may ask about it. Only a medical evaluation can tell if it is right for you.' },
    { q: 'Do I need tests first?', a: 'Your physician will decide which tests are needed. We do not guess, and we start with your history and your results.' },
    { q: 'Is peptide therapy safe?', a: 'Every treatment has benefits and risks. Your physician will review your health, explain the options and monitor you. Results vary and are not guaranteed.' },
    { q: 'Is it approved by the FDA?', a: 'Peptides differ in how they are regulated and what they are approved for. Your physician will explain this for any peptide before you decide.' },
    where('Peptide Therapy'),
  ],
  ctaLabel: 'Book a Peptide Therapy Consultation',
};

const weight: Treatment = {
  slug: 'weight-loss',
  href: '/weight-loss',
  name: 'Weight Loss',
  title: 'Medical Weight Loss in Sarasota & Venice, FL',
  metaTitle: 'Medical Weight Loss in Sarasota & Venice, FL | The Stem Cell Institute',
  metaDescription:
    'Physician-supervised medical weight loss in Sarasota and Venice, Florida. Lab-guided, personalized plans with real follow-up at The Stem Cell Institute. Book a consultation.',
  therapyName: 'Medical weight loss',
  heroLead:
    'Tired of diets that do not last? Our physicians look at your metabolism, your hormones and your labs, then build a weight loss plan that fits your life.',
  heroPos: '50% 35%',
  photoKeys: { hero: 'weightHero', process: 'weightProcess', why: 'weightWhy' },
  whatEyebrow: 'Medical weight loss',
  whatTitle: ['What is ', 'medical weight loss', '?'],
  whatParas: [
    'Medical weight loss means your plan is guided by a physician and by your own health data, not by a generic diet. Hormones, metabolism, sleep, stress and medications can all affect your weight.',
    'We start by finding out what is getting in your way, then build a plan you can keep. If you live in Sarasota, Venice or nearby, our two clinics make regular check-ins simple.',
  ],
  signsTitle: 'When people come to us for weight loss',
  signs: [
    'Weight that will not shift',
    'Gaining weight with no clear reason',
    'Low energy and constant cravings',
    'Diets that work, then stop working',
    'Changes after menopause or with age',
    'Joint pain that makes exercise hard',
    'Wanting a safe, medical approach',
    'Needing accountability and support',
  ],
  signsNote: 'Weight has many causes. A medical evaluation tells us what is really going on.',
  groupsEyebrow: 'A plan built around you',
  groupsTitle: ['Weight care that looks at ', 'the whole person'],
  groups: [
    {
      title: 'Find the cause first',
      text: 'We look at your labs, hormones, sleep and history, so your plan targets what is actually holding you back.',
    },
    {
      title: 'Support that lasts',
      text: 'Regular follow-up keeps you on track, and we adjust your plan as your body and your life change.',
    },
  ],
  processTitle: ['Lab-guided, ', 'steady progress'],
  processLead: 'Your plan is built from your results and reviewed regularly, so you always know where you stand.',
  steps: [
    { title: 'Consultation', text: 'We listen to your story, your habits and your goals.' },
    { title: 'Testing', text: 'We check labs and metabolism to understand what is happening.' },
    { title: 'Personalized plan', text: 'Your physician explains your options, including any medical support that suits you.' },
    { title: 'Follow-up', text: 'We track progress, support you and adjust the plan over time.' },
  ],
  whyTitle: ['Weight loss you can ', 'trust', ', close to home'],
  why: [
    { title: 'Physician-supervised', text: 'Your plan is overseen by a physician, with safety and your health first.' },
    { title: 'Testing comes first', text: 'We look at your labs and hormones, not only the scale.' },
    { title: 'Real follow-up', text: 'You are not left on your own. We check in and adjust.' },
    { title: 'Local to Sarasota & Venice', text: 'Two clinics, easy to reach, with visits close to home.' },
  ],
  faqs: [
    { q: 'What is medical weight loss?', a: 'Medical weight loss is a physician-supervised plan based on your health history, your labs and your goals, with regular follow-up.' },
    { q: 'Do I need blood tests first?', a: 'Usually yes. Labs help us see what may be affecting your weight and decide what is safe for you.' },
    { q: 'Will I take medication?', a: 'Not always. Your physician will explain every option, including lifestyle support and, when appropriate, prescription options, along with benefits and risks.' },
    { q: 'How fast will I lose weight?', a: 'This varies from person to person. Your physician will talk with you about realistic goals. Results vary and are not guaranteed.' },
    { q: 'Is medical weight loss safe?', a: 'Every plan has benefits and risks. We review your health history and monitor you with regular follow-up.' },
    where('Weight Loss'),
  ],
  ctaLabel: 'Book a Weight Loss Consultation',
};

const iv: Treatment = {
  slug: 'iv-therapy',
  href: '/iv-therapy',
  name: 'IV Therapy',
  title: 'IV Therapy in Sarasota & Venice, FL',
  metaTitle: 'IV Therapy in Sarasota & Venice, FL | The Stem Cell Institute',
  metaDescription:
    'Physician-supervised IV therapy in Sarasota and Venice, Florida. Hydration, vitamins and minerals in a calm clinic setting at The Stem Cell Institute. Book a visit.',
  therapyName: 'IV therapy',
  heroLead:
    'Need a boost? IV therapy delivers fluids, vitamins and minerals straight into your bloodstream, in a calm, clean clinic with a care team beside you.',
  heroPos: '50% 40%',
  photoKeys: { hero: 'ivHero', process: 'ivProcess', why: 'ivWhy' },
  whatEyebrow: 'Hydration and nutrients',
  whatTitle: ['What is ', 'IV therapy', '?'],
  whatParas: [
    'IV therapy means receiving fluids, vitamins and minerals through a small tube in a vein, so they go straight into your bloodstream instead of through digestion.',
    'Your visit starts with a short review of your health and your goals, and the mix is chosen with your physician. If you live in Sarasota, Venice or nearby, you can pop into either clinic for a calm, comfortable session.',
  ],
  signsTitle: 'When people ask us about IV therapy',
  signs: [
    'Feeling dehydrated or run down',
    'Low energy and tiredness',
    'Recovering after a busy week or travel',
    'Wanting extra vitamins and minerals',
    'Recovering after exercise',
    'Feeling worn down by the Florida heat',
    'Supporting your immune system',
    'Adding to a wider wellness plan',
  ],
  signsNote: 'IV therapy is not right for everyone. A quick medical review tells us what is safe for you.',
  groupsEyebrow: 'Choose what fits',
  groupsTitle: ['Simple, ', 'comfortable care'],
  groups: [
    {
      title: 'Hydration and recovery',
      text: 'Fluids and electrolytes can help when you are depleted, whether from heat, travel, exercise or a busy schedule.',
    },
    {
      title: 'Vitamins and minerals',
      text: 'Your physician can choose a nutrient mix that suits your health and your goals, and explain what it is for.',
    },
  ],
  processTitle: ['Easy, calm, ', 'physician-supervised'],
  processLead: 'A short review, a comfortable chair and a team that looks after you from start to finish.',
  steps: [
    { title: 'Quick review', text: 'We ask about your health, your medicines and your goals.' },
    { title: 'Your mix', text: 'Your physician chooses the right fluids and nutrients for you.' },
    { title: 'Relax', text: 'You settle into a comfortable chair while our team looks after you.' },
    { title: 'Follow-up', text: 'We check how you feel and talk about whether more visits make sense.' },
  ],
  whyTitle: ['IV care you can ', 'trust', ', close to home'],
  why: [
    { title: 'Physician-supervised', text: 'Your plan is reviewed by a physician, with your safety first.' },
    { title: 'Clean, calm setting', text: 'A relaxed clinic, not a rushed pop-up.' },
    { title: 'Part of a bigger plan', text: 'IV therapy can sit alongside our hormone, peptide and weight care.' },
    { title: 'Local to Sarasota & Venice', text: 'Two clinics, easy to reach, with visits close to home.' },
  ],
  faqs: [
    { q: 'What is IV therapy?', a: 'IV therapy gives fluids, vitamins and minerals through a small tube in a vein so they go directly into the bloodstream.' },
    { q: 'How long does a visit take?', a: 'Most sessions take under an hour, depending on the mix. Your team will tell you what to expect.' },
    { q: 'Is IV therapy safe?', a: 'Every treatment has benefits and risks. A physician reviews your health and medicines first. Results vary and are not guaranteed.' },
    { q: 'Who should not have IV therapy?', a: 'Some health conditions and medicines need extra care. That is why we start with a medical review.' },
    { q: 'Do I need an appointment?', a: 'Please call or request a visit online so we can prepare your mix and keep your time comfortable.' },
    where('IV Therapy'),
  ],
  ctaLabel: 'Book an IV Therapy Visit',
};

export const treatments: Treatment[] = [hormoneT, stem, exosome, peptide, weight, iv];
export const getTreatment = (slug: string) => treatments.find((t) => t.slug === slug)!;
