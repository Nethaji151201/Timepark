import { useEffect, useRef, useState } from "react";

/**
 * useScrollAnimation
 * Returns a ref + isVisible boolean.
 * When the element enters the viewport, isVisible flips true (once, stays true).
 */
export function useScrollAnimation(threshold = 0.15, rootMargin = "0px 0px -60px 0px") {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, isVisible };
}

export default useScrollAnimation;
