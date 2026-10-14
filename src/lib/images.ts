import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';

import banner from '../assets/images/banner.webp';
import logo from '../assets/images/logo.webp';
import doctorPortrait from '../assets/images/doctor-portrait.jpg';
import consultation from '../assets/images/consultation.jpg';
import spineModel from '../assets/images/spine-model.jpg';
import teamSkeleton from '../assets/images/team-skeleton.jpg';
import ultrasound from '../assets/images/ultrasound.jpg';
import footCare from '../assets/images/foot-care.jpg';
import reception from '../assets/images/reception.webp';
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
    p_banner, p_logo, p_doctor, p_consult, p_spine, p_team, p_ultra, p_foot, p_recep, p_build,
  ] = await Promise.all([
    make(banner, 'Physician standing beside the glowing The Stem Cell Institute sign', 2100),
    make(logo, 'The Stem Cell Institute logo', 1200),
    make(doctorPortrait, 'Smiling physician in scrubs inside the clinic', 1800),
    make(consultation, "Physician examining a patient's knee during a consultation", 1800),
    make(spineModel, 'Physician explaining spine anatomy beside a wall of X-ray images', 1800),
    make(teamSkeleton, 'Physician and colleague discussing anatomy next to X-ray displays', 1800),
    make(ultrasound, 'Physician performing an ultrasound-guided knee assessment', 1800),
    make(footCare, "Clinician fitting a patient's foot with a supportive insert", 1800),
    make(reception, 'Calm reception area with leather chairs and orchids', 800),
    make(building, 'Exterior of the clinic building with roadside sign', 1800),
  ]);
  return {
    banner: p_banner,
    logo: p_logo,
    doctorPortrait: p_doctor,
    consultation: p_consult,
    spineModel: p_spine,
    teamSkeleton: p_team,
    ultrasound: p_ultra,
    footCare: p_foot,
    reception: p_recep,
    building: p_build,
  };
}

export type Photos = Awaited<ReturnType<typeof getPhotos>>;
