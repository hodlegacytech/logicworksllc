import { useEffect } from 'react';
import { router, usePage } from '@inertiajs/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function shouldResetScroll(preserveScroll: unknown): boolean {
  return preserveScroll !== true;
}

export function scrollToTopInstant() {
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

function resetScrollOnNavigation() {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  scrollToTopInstant();
}

export function useScrollToTop() {
  const { url } = usePage();

  useEffect(() => {
    const onStart = (event: Event) => {
      const visit = (event as CustomEvent<{ visit: { preserveScroll?: unknown } }>).detail?.visit;
      if (visit && !shouldResetScroll(visit.preserveScroll)) return;
      resetScrollOnNavigation();
    };

    const onFinish = (event: Event) => {
      const visit = (event as CustomEvent<{ visit: { preserveScroll?: unknown } }>).detail?.visit;
      if (visit && !shouldResetScroll(visit.preserveScroll)) return;
      requestAnimationFrame(() => {
        scrollToTopInstant();
        ScrollTrigger.refresh();
      });
    };

    const removeStart = router.on('start', onStart);
    const removeFinish = router.on('finish', onFinish);

    return () => {
      removeStart();
      removeFinish();
    };
  }, []);

  useEffect(() => {
    requestAnimationFrame(() => {
      scrollToTopInstant();
    });
  }, [url]);
}
