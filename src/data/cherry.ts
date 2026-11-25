// Cherry patient-financing widget (same setup as knowpain.com).
// TODO: confirm with the client that this practice slug is the right Cherry account for The Stem Cell Institute.
// If the institute has its own Cherry practice, replace `slug` (and `name`) here and nothing else needs to change.
export const cherryConfig = {
  debug: false,
  variables: {
    slug: 'orthomed-pain-sports-medicine',
    name: 'The Stem Cell Institute',
    images: [26],
    customLogo: '',
    defaultPurchaseAmount: 750,
    customImage: '',
    imageCategory: 'medspa',
    language: 'en',
  },
  styles: {
    primaryColor: '#0e2747',
    secondaryColor: '#0e274710',
    fontFamily: 'Manrope Variable',
    headerFontFamily: 'DM Serif Display',
    floatingEstimator: {
      position: 'bottom-right',
      offset: { x: '0px', y: '0px' },
      zIndex: 9999,
      ctaFontFamily: 'Manrope Variable',
      bodyFontFamily: 'Manrope Variable',
      ctaColor: '#0e2747',
      ctaTextColor: '#FFFFFF',
    },
  },
};
// Widgets shown on the /financing/ page (in addition to the floating button on every page).
export const cherryPageStyles = {
  primaryColor: cherryConfig.styles.primaryColor,
  secondaryColor: cherryConfig.styles.secondaryColor,
  fontFamily: 'Manrope Variable',
  headerFontFamily: 'DM Serif Display',
};
export const cherryScriptUrl = 'https://files.withcherry.com/widgets/widget.js';
