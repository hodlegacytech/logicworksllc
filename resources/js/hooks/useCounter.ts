import { useEffect, useRef } from 'react';

function isInViewport(el: Element): boolean {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0;
}

function runCounter(el: HTMLElement) {
  const target = parseFloat(el.dataset.target ?? '0');
  const isDecimal = el.dataset.decimal === 'true';
  const dur = 1800;
  const step = dur / 60;
  let cur = 0;
  const inc = target / (dur / step);
  const t = setInterval(() => {
    cur = Math.min(cur + inc, target);
    el.textContent = isDecimal
      ? (cur / 10).toFixed(1)
      : Math.floor(cur).toLocaleString();
    if (cur >= target) clearInterval(t);
  }, step);
}

export function useCounter(routeKey: string) {
  const observed = useRef(new Set<Element>());

  useEffect(() => {
    observed.current.clear();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || observed.current.has(entry.target)) return;
          observed.current.add(entry.target);
          runCounter(entry.target as HTMLElement);
        });
      },
      { threshold: 0.5 }
    );

    const bindCounters = () => {
      document.querySelectorAll('[data-target]').forEach((el) => {
        if (observed.current.has(el)) return;
        const html = el as HTMLElement;
        if (isInViewport(el)) {
          observed.current.add(el);
          const target = parseFloat(html.dataset.target ?? '0');
          const isDecimal = html.dataset.decimal === 'true';
          html.textContent = isDecimal
            ? (target / 10).toFixed(1)
            : Math.floor(target).toLocaleString();
          return;
        }
        observer.observe(el);
      });
    };

    const rafId = requestAnimationFrame(() => {
      requestAnimationFrame(bindCounters);
    });

    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, [routeKey]);
}
