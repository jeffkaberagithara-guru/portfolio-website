import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

const Counter = ({ value, suffix = '', duration = 1.6 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start;
    let raf;

    const step = (timestamp) => {
      if (start === undefined) start = timestamp;
      const progress = Math.min((timestamp - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(value * eased));
      if (progress < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
};

export default Counter;
