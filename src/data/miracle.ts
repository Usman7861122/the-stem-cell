import type { Treatment } from './treatments';

// MIRACLE Medical Spa: four BTL devices offered at both clinics.
// Wording is deliberately careful: no cure or guaranteed-result claims, evaluation first.

export const miracleSection = { label: 'MIRACLE Medical Spa', href: '/miracle-medical-spa/' };

const where = (name: string) => ({
  q: `Where can I get ${name} in Sarasota or Venice?`,
  a: `${name} is offered at both Stem Cell Institute clinics: 4071 Bee Ridge Rd., Suite #101 in Sarasota, and 389 Commercial Ct in Venice, Florida. Call (941) 371-7171 or request a consultation online.`,
});

const safe = {
  q: 'Is it right for me?',
  a: 'That is decided at your evaluation. A physician reviews your history, goals and any health conditions or implants before recommending a plan. Results vary and are not guaranteed.',
};

export const miracleDevices: Treatment[] = [
  {
    slug: 'emsculpt',
    href: '/miracle-medical-spa/emsculpt/',
    section: miracleSection,
    name: 'Emsculpt',
    title: 'Emsculpt Muscle Toning in Sarasota & Venice, FL',
    metaTitle: 'Emsculpt in Sarasota & Venice, FL | Stem Cell Institute',
    metaDescription:
      'Emsculpt body contouring uses electromagnetic muscle stimulation to help tone and strengthen. Book an evaluation at our Sarasota or Venice clinic today.',
    therapyName: 'Emsculpt (HIFEM muscle stimulation)',
    heroLead:
      'Emsculpt uses focused electromagnetic energy to make your muscles contract, helping to tone and strengthen them. See if it fits your goals with a physician evaluation at MIRACLE Medical Spa.',
    heroPos: '50% 40%',
    photoKeys: { hero: 'consultation', process: 'ultrasound', why: 'teamSkeleton', local: 'building' },
    whatEyebrow: 'MIRACLE Medical Spa',
    whatTitle: ['What is ', 'Emsculpt', '?'],
    whatParas: [
      'Emsculpt is a non-invasive treatment from BTL. It uses HIFEM® (high-intensity focused electromagnetic) energy to cause strong muscle contractions, many more than you could do on your own in the same time.',
      'It is used to strengthen and tone muscle in areas such as the abdomen, buttocks, thighs and arms. It does not replace exercise or a healthy lifestyle. At our clinics, a physician first checks if it is a good fit for you and builds a plan around your goals.',
    ],
    signsTitle: 'Areas your team may discuss',
    signs: ['Abdomen', 'Buttocks', 'Thighs', 'Arms', 'Calves', 'Flanks and oblique muscles'],
    signsNote: 'Which areas are right for you is decided at your evaluation.',
    groupsEyebrow: 'Applicators',
    groupsTitle: ['Different applicators for ', 'different areas'],
    groups: [
      { title: 'Large applicator', text: 'Used for larger areas such as the abdomen, buttocks and thighs.' },
      { title: 'Edge applicator', text: 'A shaped applicator that can treat four fat spots and the oblique muscles in about 30 minutes.' },
      { title: 'Small applicator', text: 'Used for smaller areas such as the arms and legs.' },
      { title: 'Your plan', text: 'Your physician chooses the areas and settings that match your body and your goals.' },
    ],
    processTitle: ['What to ', 'expect'],
    processLead: 'A simple visit, with a physician guiding the plan from the start.',
    steps: [
      { title: 'Evaluation', text: 'We talk about your goals and health history, and a physician checks if Emsculpt is right for you.' },
      { title: 'Your plan', text: 'We choose the areas to treat and how many visits you may need.' },
      { title: 'Treatment', text: 'The applicator rests on the skin. You feel strong muscle contractions and some warmth. A session takes about 30 minutes.' },
      { title: 'Follow-up', text: 'We check in, answer questions and adjust your plan if needed.' },
    ],
    whyTitle: ['Why choose ', 'MIRACLE Medical Spa', ''],
    why: [
      { title: 'Physician-led', text: 'Care is directed by William J. Cole Jr., D.O., not just a machine appointment.' },
      { title: 'Evaluation first', text: 'We confirm the treatment suits you before you start.' },
      { title: 'Two clinics', text: 'Sarasota and Venice, close to home.' },
      { title: 'Honest expectations', text: 'Results vary. We explain what is realistic for you.' },
    ],
    faqs: [
      { q: 'What does Emsculpt do?', a: 'It uses electromagnetic energy to cause strong muscle contractions that help tone and strengthen muscle in the treated area.' },
      { q: 'Does it replace exercise?', a: 'No. It is not a replacement for exercise or healthy habits. It can be one part of a bigger plan.' },
      { q: 'Which body areas can be treated?', a: 'Common areas include the abdomen, flanks, buttocks, thighs, arms and calves. Your physician will advise on your areas.' },
      { q: 'How long is a session?', a: 'A session is about 30 minutes. The number of visits depends on your plan.' },
      safe,
      where('Emsculpt'),
    ],
    ctaLabel: 'Book an Emsculpt Evaluation',
  },
  {
    slug: 'emsella',
    href: '/miracle-medical-spa/emsella/',
    section: miracleSection,
    name: 'Emsella',
    title: 'Emsella Pelvic Floor Chair in Sarasota & Venice, FL',
    metaTitle: 'Emsella Chair in Sarasota & Venice, FL | Stem Cell Institute',
    metaDescription:
      'Emsella is a non-invasive chair that strengthens pelvic floor muscles for bladder control in men and women. Book an evaluation in Sarasota or Venice, FL.',
    therapyName: 'Emsella (HIFEM pelvic floor stimulation)',
    heroLead:
      'Bladder leaks can affect daily life. Emsella is a non-invasive chair that strengthens pelvic floor muscles while you sit fully clothed. Start with a physician evaluation.',
    heroPos: '50% 40%',
    photoKeys: { hero: 'doctorPortrait', process: 'consultation', why: 'reception', local: 'building' },
    whatEyebrow: 'MIRACLE Medical Spa',
    whatTitle: ['What is ', 'Emsella', '?'],
    whatParas: [
      'Emsella is a non-invasive treatment from BTL. You sit on a chair that uses HIFEM® electromagnetic energy to make your pelvic floor muscles contract, like thousands of Kegel exercises.',
      'It is used for urinary incontinence in men and women, including stress, urge and mixed types. You stay fully clothed, and there is no needle or surgery. A medical evaluation comes first to see if it suits you.',
    ],
    signsTitle: 'Who may ask about Emsella',
    signs: ['Women and men with bladder leaks', 'Leaks when coughing, sneezing or lifting', 'Sudden urges to urinate', 'Weaker pelvic muscles after childbirth or with age', 'People who prefer a non-surgical option'],
    signsNote: 'Bladder problems can have many causes. A physician evaluation comes first.',
    groupsEyebrow: 'Who it helps',
    groupsTitle: ['For ', 'men and women'],
    groups: [
      { title: 'Women', text: 'Pelvic floor muscles can weaken after pregnancy and childbirth, and with age. Emsella aims to help strengthen them.' },
      { title: 'Men', text: 'Men can also have pelvic floor weakness and bladder leaks, for example after some prostate treatments. Your physician will advise.' },
    ],
    processTitle: ['What to ', 'expect'],
    processLead: 'Comfortable and simple. You stay clothed and seated.',
    steps: [
      { title: 'Evaluation', text: 'A physician reviews your symptoms and history, and checks for implants or other reasons Emsella may not be right.' },
      { title: 'Your plan', text: 'A typical plan is six sessions over about three weeks. Your physician will confirm what is right for you.' },
      { title: 'Treatment', text: 'You sit fully clothed on the chair. You may feel tingling and your pelvic muscles contract. Intensity can be adjusted for comfort.' },
      { title: 'Follow-up', text: 'We check how you are doing and talk about next steps.' },
    ],
    whyTitle: ['Why choose ', 'MIRACLE Medical Spa', ''],
    why: [
      { title: 'Physician-led', text: 'Care is directed by William J. Cole Jr., D.O.' },
      { title: 'Private and comfortable', text: 'Seated, fully clothed, with no downtime.' },
      { title: 'Evaluation first', text: 'We make sure Emsella is safe and suitable for you.' },
      { title: 'Two clinics', text: 'Sarasota and Venice.' },
    ],
    faqs: [
      { q: 'What is Emsella used for?', a: 'It is used to strengthen weak pelvic floor muscles in men and women with urinary incontinence.' },
      { q: 'Do I need to undress?', a: 'No. You sit fully clothed on the chair.' },
      { q: 'How many sessions will I need?', a: 'A typical plan is six sessions over about three weeks. Your physician will set your plan.' },
      { q: 'Can everyone use Emsella?', a: 'No. Treatment should not be used with some electronic or metal implants, and other conditions may apply. That is why we start with an evaluation.' },
      safe,
      where('Emsella'),
    ],
    ctaLabel: 'Book an Emsella Evaluation',
  },
  {
    slug: 'exomind',
    href: '/miracle-medical-spa/exomind/',
    section: miracleSection,
    name: 'Exomind',
    title: 'Exomind TMS in Sarasota & Venice, FL',
    metaTitle: 'Exomind TMS in Sarasota & Venice, FL | Stem Cell Institute',
    metaDescription:
      'Exomind is a non-invasive magnetic stimulation treatment from BTL for eligible adults with depression. Book a physician evaluation in Sarasota or Venice, FL.',
    therapyName: 'Exomind (transcranial magnetic stimulation)',
    heroLead:
      'Exomind is a non-invasive, drug-free treatment that uses magnetic pulses. A physician must first review your history to see if it is appropriate for you.',
    heroPos: '50% 30%',
    photoKeys: { hero: 'brainsScanDoctor', process: 'brainsScanReview', why: 'consultation', local: 'building' },
    whatEyebrow: 'MIRACLE Medical Spa',
    whatTitle: ['What is ', 'Exomind', '?'],
    whatParas: [
      'Exomind was developed by BTL. It uses ExoTMS®, a form of transcranial magnetic stimulation (TMS). A comfortable headset delivers magnetic pulses to areas of the brain linked to mood.',
      'It is cleared by the FDA for major depressive disorder in eligible adults who have not improved with prior antidepressant medicine. It is not for everyone, so a physician reviews your history and any contraindications first.',
    ],
    signsTitle: 'Who may ask about Exomind',
    signs: ['Adults with major depressive disorder', 'People who have not improved with antidepressants', 'People who want a non-drug option', 'Adults who want a physician review of their options'],
    signsNote: 'Depression is a medical condition. Please speak with a physician. If you are in crisis, call or text 988.',
    groupsEyebrow: 'Careful screening',
    groupsTitle: ['Safety ', 'comes first'],
    groups: [
      { title: 'Medical review', text: 'A physician reviews your health history, medicines and any contraindications before any plan is made.' },
      { title: 'Part of whole-person care', text: 'Exomind may be one piece of a plan. It does not replace care from your other clinicians.' },
    ],
    processTitle: ['What to ', 'expect'],
    processLead: 'A clear, step-by-step visit led by a physician.',
    steps: [
      { title: 'Evaluation', text: 'We review your history, symptoms and past treatments, and decide if Exomind is appropriate.' },
      { title: 'Your plan', text: 'Your physician explains the plan, how long visits take and what to expect.' },
      { title: 'Treatment', text: 'You sit comfortably while the headset delivers magnetic pulses. You can usually return to your day afterward.' },
      { title: 'Follow-up', text: 'We check your progress and adjust the plan with you.' },
    ],
    whyTitle: ['Why choose ', 'MIRACLE Medical Spa', ''],
    why: [
      { title: 'Physician-led', text: 'Care is directed by William J. Cole Jr., D.O.' },
      { title: 'Non-drug option', text: 'Magnetic stimulation instead of another medicine.' },
      { title: 'Evaluation first', text: 'We check safety and fit before treatment.' },
      { title: 'Two clinics', text: 'Sarasota and Venice.' },
    ],
    faqs: [
      { q: 'What is Exomind?', a: 'Exomind is a non-invasive transcranial magnetic stimulation (TMS) treatment from BTL that uses magnetic pulses.' },
      { q: 'Is it FDA-cleared?', a: 'It is cleared by the FDA for major depressive disorder in eligible adults who have not improved with prior antidepressant medicine.' },
      { q: 'Is it painful?', a: 'Most people find it comfortable. Your team will explain what you may feel.' },
      { q: 'Who should not have TMS?', a: 'Some conditions and implants make TMS unsafe. A physician reviews this at your evaluation.' },
      safe,
      where('Exomind'),
    ],
    ctaLabel: 'Book an Exomind Evaluation',
  },
  {
    slug: 'emvital',
    href: '/miracle-medical-spa/emvital/',
    section: miracleSection,
    name: 'Emvital',
    title: 'Emvital Therapeutic Heat in Sarasota & Venice, FL',
    metaTitle: 'Emvital in Sarasota & Venice, FL | Stem Cell Institute',
    metaDescription:
      'Emvital uses gentle therapeutic heat for temporary relief of muscle and joint aches and stiffness. Book an evaluation in Sarasota or Venice, Florida today.',
    therapyName: 'Emvital (functional laser therapy)',
    heroLead:
      'Emvital is a non-invasive therapy from BTL that uses gentle, controlled warmth to help ease muscle and joint discomfort. Visits take less than 30 minutes.',
    heroPos: '50% 40%',
    photoKeys: { hero: 'ultrasound', process: 'footCare', why: 'spineModel', local: 'building' },
    whatEyebrow: 'MIRACLE Medical Spa',
    whatTitle: ['What is ', 'Emvital', '?'],
    whatParas: [
      'Emvital is a non-invasive functional laser therapy from BTL. It delivers controlled therapeutic heating to the treated area. Most people feel gentle warmth.',
      'It is used for temporary relief of muscle and joint discomfort, minor arthritis pain, stiffness and spasms, and for a temporary increase in local circulation. A physician first checks if it fits your needs.',
    ],
    signsTitle: 'What it may help with',
    signs: ['Muscle aches', 'Joint discomfort', 'Minor arthritis pain', 'Stiffness', 'Muscle spasms', 'Temporary increase in circulation'],
    signsNote: 'Pain can have many causes. A medical evaluation tells us what is going on.',
    groupsEyebrow: 'Part of a bigger plan',
    groupsTitle: ['Works with your ', 'care plan'],
    groups: [
      { title: 'Comfort care', text: 'Gentle heat can be a soothing, short visit alongside other care.' },
      { title: 'Physician guided', text: 'Your physician decides if Emvital fits your pain, your history and your other treatments.' },
    ],
    processTitle: ['What to ', 'expect'],
    processLead: 'Short, gentle and simple.',
    steps: [
      { title: 'Evaluation', text: 'We talk about your pain and history, and a physician checks if Emvital is suitable.' },
      { title: 'Your plan', text: 'We choose the area and how often you should come.' },
      { title: 'Treatment', text: 'You feel gentle warmth on the area. Visits take less than 30 minutes.' },
      { title: 'Follow-up', text: 'We check how you feel and adjust your plan.' },
    ],
    whyTitle: ['Why choose ', 'MIRACLE Medical Spa', ''],
    why: [
      { title: 'Physician-led', text: 'Care is directed by William J. Cole Jr., D.O., a double board-certified physician.' },
      { title: 'Quick visits', text: 'Under 30 minutes.' },
      { title: 'Evaluation first', text: 'We make sure the treatment suits you.' },
      { title: 'Two clinics', text: 'Sarasota and Venice.' },
    ],
    faqs: [
      { q: 'What does Emvital do?', a: 'It uses controlled therapeutic heat to give temporary relief of muscle and joint discomfort, stiffness and spasms.' },
      { q: 'How does it feel?', a: 'Most people feel gentle warmth.' },
      { q: 'How long does a visit take?', a: 'Less than 30 minutes.' },
      { q: 'Does it cure arthritis?', a: 'No. It is used for temporary relief of minor arthritis pain and stiffness, not as a cure.' },
      safe,
      where('Emvital'),
    ],
    ctaLabel: 'Book an Emvital Evaluation',
  },
];
