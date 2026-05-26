import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

export default function AnimatedCounter({ target, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;

    const numeric = parseInt(target.replace(/\D/g, ''), 10);
    const start = Date.now();

    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * numeric));
      if (progress < 1) requestAnimationFrame(tick);
      else setCount(numeric);
    };
    requestAnimationFrame(tick);
  }, [inView, target, duration]);

  const prefix = target.match(/^[^\d]*/)?.[0] || '';

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}
