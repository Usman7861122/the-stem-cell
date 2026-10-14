import { MotionConfig, motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { ease } from '@/lib/motion/variants';

/** Wrap every island: respects "reduce motion" setting of the visitor. */
export function MotionRoot({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

/** Fade + rise when scrolled into view. */
export function Reveal({ children, delay = 0, y = 28, className }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

/** Responsive image from Astro-optimized Photo data. */
export function Pic({
  photo,
  sizes,
  className,
  style,
  eager = false,
}: {
  photo: { src: string; srcSet: string; width: number; height: number; alt: string };
  sizes: string;
  className?: string;
  style?: React.CSSProperties;
  eager?: boolean;
}) {
  return (
    <img
      src={photo.src}
      srcSet={photo.srcSet}
      sizes={sizes}
      width={photo.width}
      height={photo.height}
      alt={photo.alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      className={className}
      style={style}
    />
  );
}
