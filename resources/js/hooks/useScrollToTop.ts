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

function cleanupScrollTriggers() {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
}

export function useScrollToTop() {
  const { url } = usePage();

  useEffect(() => {
    const onStart = () => {
      // Kill GSAP triggers only — don't scroll yet or the current page jumps to top.
      cleanupScrollTriggers();
    };

    const onFinish = (event: Event) => {
      const visit = (event as CustomEvent<{ visit: { preserveScroll?: unknown } }>).detail?.visit;
      if (visit && !shouldResetScroll(visit.preserveScroll)) {
        requestAnimationFrame(() => ScrollTrigger.refresh());
        return;
      }
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
