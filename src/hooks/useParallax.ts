import { useEffect, useRef, useState } from 'react';

/* ============================================
   useParallax - Scroll-based parallax hook
   Maps scroll position to Y translation
   ============================================ */

interface ParallaxOptions {
  speed?: number;
  reverse?: boolean;
}

export function useParallax<T extends HTMLElement = HTMLDivElement>(
  options: ParallaxOptions = {}
) {
  const { speed = 0.5, reverse = false } = options;
  const ref = useRef<T | null>(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      if (!element) return;
      const rect = element.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const elementCenter = rect.top + rect.height / 2;
      const distance = elementCenter - viewportCenter;
      const direction = reverse ? 1 : -1;
      setOffsetY(distance * speed * direction * 0.1);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, reverse]);

  return { ref, offsetY };
}
