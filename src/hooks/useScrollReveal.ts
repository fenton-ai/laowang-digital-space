import { useEffect, useRef, useState } from 'react';

/* ============================================
   useScrollReveal - Intersection Observer Hook
   Triggers animations when elements enter viewport
   ============================================ */

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

interface ScrollRevealReturn<T> {
  ref: React.RefObject<T | null>;
  isVisible: boolean;
  hasBeenVisible: boolean;
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: ScrollRevealOptions = {}
): ScrollRevealReturn<T> {
  const { threshold = 0.1, rootMargin = '-50px', triggerOnce = true } = options;
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting;
        setIsVisible(visible);

        if (visible && triggerOnce) {
          setHasBeenVisible(true);
          observer.unobserve(element);
        } else if (visible) {
          setHasBeenVisible(true);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible, hasBeenVisible };
}

/** Stagger delay helper for children */
export function getStaggerDelay(index: number, baseDelay = 0.1): number {
  return index * baseDelay;
}
