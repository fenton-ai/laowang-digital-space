import { type ReactNode } from 'react';
import { motion, type Variants } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';

/* ============================================
   ScrollReveal - Wraps children with scroll-triggered animation
   Variants: fadeUp, fadeIn, scaleIn, slideInLeft, slideInRight
   ============================================ */

type AnimationVariant = 'fadeUp' | 'fadeIn' | 'scaleIn' | 'slideInLeft' | 'slideInRight' | 'none';

interface Props {
  children: ReactNode;
  variant?: AnimationVariant;
  duration?: number;
  delay?: number;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'span';
  threshold?: number;
  once?: boolean;
}

const variants: Record<AnimationVariant, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  },
  slideInLeft: {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  },
  slideInRight: {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  },
  none: {
    hidden: { opacity: 1 },
    visible: { opacity: 1 },
  },
};

const MotionTag = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  span: motion.span,
};

export default function ScrollReveal({
  children,
  variant = 'fadeUp',
  duration = 0.7,
  delay = 0,
  className = '',
  as = 'div',
  threshold = 0.1,
  once = true,
}: Props) {
  const { ref, hasBeenVisible } = useScrollReveal({ threshold, triggerOnce: once });
  const MotionComponent = MotionTag[as];

  return (
    <div ref={ref as React.RefObject<HTMLDivElement | null>} className={className}>
      <MotionComponent
        initial="hidden"
        animate={hasBeenVisible ? 'visible' : 'hidden'}
        variants={variants[variant]}
        transition={{
          duration,
          delay,
          ease: [0.19, 1, 0.22, 1],
        }}
      >
        {children}
      </MotionComponent>
    </div>
  );
}
