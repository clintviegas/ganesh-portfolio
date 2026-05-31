import { useEffect, useRef, useState, type ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  /** Optional delay in ms before the reveal animation starts. */
  delay?: number;
  /** Extra classes for the wrapper. */
  className?: string;
  /** Animation direction. Defaults to "up". */
  direction?: 'up' | 'down' | 'none';
  /** Render as a different element if needed (defaults to div). */
  as?: 'div' | 'section' | 'li';
};

/**
 * Fades + slides its children into view the first time they enter the viewport.
 * Respects prefers-reduced-motion by showing content immediately.
 */
const Reveal = ({
  children,
  delay = 0,
  className = '',
  direction = 'up',
  as: Tag = 'div',
}: RevealProps) => {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -10% 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const offset =
    direction === 'up'
      ? 'translate-y-8'
      : direction === 'down'
        ? '-translate-y-8'
        : 'translate-y-0';

  return (
    <Tag
      ref={ref as never}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
      className={`transition-all duration-700 ease-out will-change-transform ${
        visible ? 'opacity-100 translate-y-0' : `opacity-0 ${offset}`
      } ${className}`}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
