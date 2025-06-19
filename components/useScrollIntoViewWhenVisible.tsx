import { useState, useEffect, useRef } from 'react';

export function useVisibilityPercentage<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visibility, setVisibility] = useState(0); // from 0 to 1 (0% to 100%)

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const ratio = entry.intersectionRatio;
        setVisibility(ratio);
      },
      {
        threshold: Array.from({ length: 101 }, (_, i) => i / 100),
      }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return { ref, visibility };
}