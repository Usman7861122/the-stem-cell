// Peptide stacks shown on the home page. Edit here to change names, peptides or prices.
// Prices are MSRP from the supplier sheet. Vial/syringe counts are not shown on the site.
export type Stack = { name: string; peptides: string[]; price: string; color: string; dark?: boolean };

export const stacks: Stack[] = [
  { name: 'Wolverine+ Stack', peptides: ['Wolverine Blend', 'NAD+'], price: '$1,990', color: '#f5c400', dark: true },
  { name: 'Superman Stack', peptides: ['Wolverine Blend', 'NAD+', 'MOTS-c'], price: '$3,520', color: '#1d4fb8' },
  { name: 'Wonder Woman Stack (GLOW)', peptides: ['KLOW Blend', 'NAD+'], price: '$2,590', color: '#c8161d' },
  { name: 'Batman Stack', peptides: ['Wolverine Blend', 'KPV', 'Sermorelin'], price: '$3,100', color: '#17181b' },
  { name: 'Hulk Stack', peptides: ['Wolverine Blend', 'CJC-1295', 'NAD+'], price: '$2,620', color: '#3a8f2e' },
  { name: 'Spiderman Stack', peptides: ['Wolverine Blend', 'MOTS-c'], price: '$2,880', color: '#dc2626' },
  { name: 'Flash Stack', peptides: ['Wolverine Blend', 'MOTS-c', 'NAD+'], price: '$3,520', color: '#c8102e' },
  { name: 'Cat Woman Stack (KLOW)', peptides: ['KLOW Blend'], price: '$1,950', color: '#3b2349' },
  { name: 'Megamind Stack', peptides: ['KPV', 'Semax'], price: '$1,750', color: '#2f6fe0' },
];
