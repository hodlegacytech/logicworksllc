import { useEffect } from 'react';

const REVEAL_SELECTOR = '.reveal, .reveal-l, .reveal-r';

function isInViewport(el: Element): boolean {
  const rect = el.getBoundingClientRect();
  const margin = 48;
  return rect.top < window.innerHeight - margin && rect.bottom > margin;
}

export function useScrollReveal(routeKey: string) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('on');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    const bindRevealElements = () => {
      document.querySelectorAll(REVEAL_SELECTOR).forEach((el) => {
        if (el.classList.contains('on')) return;
        if (isInViewport(el)) {
          el.classList.add('on');
          return;
        }
        observer.observe(el);
      });
    };

    const rafId = requestAnimationFrame(() => {
      requestAnimationFrame(bindRevealElements);
    });

    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, [routeKey]);
}
