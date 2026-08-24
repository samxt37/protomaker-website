import { useEffect, useRef } from 'react';

/**
 * Scroll-reveal wrapper: adds .is-visible when the element enters the viewport.
 * Uses an IntersectionObserver — pure CSS transition, no animation library.
 * Extra props (e.g. data-component) are passed through to the rendered tag.
 */
export default function Reveal({ as: Tag = 'div', className = '', children, delay = 0, ...rest }) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            node.classList.add('is-visible');
            observer.unobserve(node);
          }
        });
      },
      { threshold: 0.15 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }} {...rest}>
      {children}
    </Tag>
  );
}
