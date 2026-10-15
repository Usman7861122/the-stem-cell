import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';

import banner from '../assets/images/banner-hero.jpg';
import logo from '../assets/images/logo.webp';
import logoLight from '../assets/images/logo-light.webp';
import doctorPortrait from '../assets/images/doctor-portrait.jpg';
import consultation from '../assets/images/consultation.jpg';
import spineModel from '../assets/images/spine-model.jpg';
import teamSkeleton from '../assets/images/team-skeleton.jpg';
import ultrasound from '../assets/images/ultrasound.jpg';
import footCare from '../assets/images/foot-care.jpg';
import reception from '../assets/images/reception.webp';
import brainsMemory from '../assets/images/brains-memory.jpg';
import brainsScanDoctor from '../assets/images/brains-scan-doctor.jpg';
import brainsScanReview from '../assets/images/brains-scan-review.jpg';
import brainsMotherDaughter from '../assets/images/brains-mother-daughter.jpg';
import brainsFamily from '../assets/images/brains-family.jpg';
import brainsGenerations from '../assets/images/brains-generations.jpg';
import hormoneHero from '../assets/images/hormone-hero.jpg';
import hormoneLab from '../assets/images/hormone-lab.jpg';
import hormoneActive from '../assets/images/hormone-active.jpg';
import hormoneLocal from '../assets/images/hormone-local.jpg';
import building from '../assets/images/building.jpg';

export type Photo = {
  src: string;
  srcSet: string;
  width: number;
  height: number;
  alt: string;
};

const WIDTHS = [480, 800, 1200, 1800, 2400];

async function make(meta: ImageMetadata, alt: string, maxWidth = 2400): Promise<Photo> {
  let widths = WIDTHS.filter((w) => w <= Math.min(meta.width, maxWidth));
  if (!widths.length) widths = [meta.width];
  const out = await Promise.all(
    widths.map((w) => getImage({ src: meta, width: w, format: 'webp', quality: 78 })),
  );
  return {
    src: out[Math.min(2, out.length - 1)].src,
    srcSet: out.map((o, i) => `${o.src} ${widths[i]}w`).join(', '),
    width: meta.width,
    height: meta.height,
    alt,
  };
}

export async function getPhotos() {
  const [
    p_banner, p_logo, p_logoL, p_doctor, p_consult, p_spine, p_team, p_ultra, p_foot, p_recep, p_build, p_bm, p_bsd, p_bsr, p_bmd, p_bf, p_bg, p_hh, p_hl, p_ha, p_hlo,
  ] = await Promise.all([
    make(banner, 'Physician standing beside the glowing The Stem Cell Institute sign', 2100),
    make(logo, 'The Stem Cell Institute logo', 1200),
    make(logoLight, 'The Stem Cell Institute logo', 1200),
    make(doctorPortrait, 'Smiling physician in scrubs inside the clinic', 1800),
    make(consultation, "Physician examining a patient's knee during a consultation", 1800),
    make(spineModel, 'Physician explaining spine anatomy beside a wall of X-ray images', 1800),
    make(teamSkeleton, 'Physician and colleague discussing anatomy next to X-ray displays', 1800),
    make(ultrasound, 'Physician performing an ultrasound-guided knee assessment', 1800),
    make(footCare, "Clinician fitting a patient's foot with a supportive insert", 1800),
    make(reception, 'Calm reception area with leather chairs and orchids', 800),
    make(building, 'Exterior of the clinic building with roadside sign', 1800),
    make(brainsMemory, 'Senior woman holding an old black-and-white childhood photograph', 2400),
    make(brainsScanDoctor, 'Doctor explaining a brain scan to a patient across a desk', 2400),
    make(brainsScanReview, 'Doctor pointing to brain scan images while consulting with a patient', 2400),
    make(brainsMotherDaughter, 'Woman smiling and holding hands with her elderly mother in bed', 2400),
    make(brainsFamily, 'Grandmother, mother and daughter hugging and laughing on a sofa', 2400),
    make(brainsGenerations, 'Smiling grandmother and granddaughter embracing at home', 2400),
    make(hormoneHero, 'Mature couple walking barefoot along a sunny beach', 2400),
    make(hormoneLab, 'Doctor showing a patient her results on a tablet', 2400),
    make(hormoneActive, 'Mature man and woman jogging together in a green park', 2400),
    make(hormoneLocal, 'Couple walking hand in hand along the shoreline', 2400),
  ]);
  return {
    banner: p_banner,
    logo: p_logo,
    logoLight: p_logoL,
    doctorPortrait: p_doctor,
    consultation: p_consult,
    spineModel: p_spine,
    teamSkeleton: p_team,
    ultrasound: p_ultra,
    footCare: p_foot,
    reception: p_recep,
    building: p_build,
    brainsMemory: p_bm,
    brainsScanDoctor: p_bsd,
    brainsScanReview: p_bsr,
    brainsMotherDaughter: p_bmd,
    brainsFamily: p_bf,
    brainsGenerations: p_bg,
    hormoneHero: p_hh,
    hormoneLab: p_hl,
    hormoneActive: p_ha,
    hormoneLocal: p_hlo,
  };
}

export type Photos = Awaited<ReturnType<typeof getPhotos>>;
