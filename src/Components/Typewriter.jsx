import { useEffect, useRef, useState } from 'react';

const Typewriter = ({
  words = [],
  typeSpeed = 70,
  deleteSpeed = 40,
  pauseDuration = 1600,
  startDelay = 900,
}) => {
  const [state, setState] = useState({ index: 0, text: '', deleting: false });
  const [inView, setInView] = useState(true);
  const hasStarted = useRef(false);
  const rootRef = useRef(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: '200px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (words.length === 0 || !inView) return;

    const { index, text, deleting } = state;
    const currentWord = words[index % words.length];

    let delay;
    if (!hasStarted.current) {
      delay = startDelay;
    } else if (!deleting && text === currentWord) {
      delay = pauseDuration;
    } else if (deleting && text === '') {
      delay = 250;
    } else {
      delay = deleting ? deleteSpeed : typeSpeed;
    }

    const timeout = setTimeout(() => {
      hasStarted.current = true;

      if (!deleting && text === currentWord) {
        setState((prev) => ({ ...prev, deleting: true }));
      } else if (deleting && text === '') {
        setState((prev) => ({
          index: (prev.index + 1) % words.length,
          text: '',
          deleting: false,
        }));
      } else {
        setState((prev) => ({
          ...prev,
          text: deleting
            ? prev.text.slice(0, -1)
            : words[prev.index % words.length].slice(0, prev.text.length + 1),
        }));
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [state, words, typeSpeed, deleteSpeed, pauseDuration, startDelay, inView]);

  const currentWord = words[state.index % words.length];
  const ghost = !state.deleting && state.text !== currentWord ? currentWord.slice(state.text.length) : '';

  return (
    <>
      <span ref={rootRef} className="inline-flex items-center" aria-hidden="true">
        <span
          className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-orange-600"
          style={{ textShadow: '0 0 18px rgba(249,115,22,0.35)' }}
        >
          {state.text}
        </span>
        {ghost && <span className="text-orange-400/25">{ghost}</span>}
        <span
          className="caret ml-1 inline-block w-[3px] h-[0.9em] rounded-full bg-linear-to-b from-orange-300 to-orange-600 shadow-[0_0_12px_rgba(249,115,22,0.9)]"
          aria-hidden="true"
        />
      </span>
      <span className="sr-only">{words.join(', ')}</span>
    </>
  );
};

export default Typewriter;
