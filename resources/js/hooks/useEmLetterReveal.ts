import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SELECTOR = '.sec-title em';
const REVEAL_SELECTOR = '.reveal, .reveal-l, .reveal-r';
const WRAP_CLASS = 'em-letter-reveal';
const LETTER_CLASS = 'em-letter';
const TYPE_STAGGER = 0.07;

function isInViewport(el: Element): boolean {
  const rect = el.getBoundingClientRect();
  const margin = 48;
  return rect.top < window.innerHeight - margin && rect.bottom > margin;
}

function wrapEmLetters(em: HTMLElement) {
  if (em.dataset.emLetters === 'true') return;

  const text = (em.textContent ?? '').trim();
  if (!text) return;

  em.dataset.emLetters = 'true';
  em.dataset.emLettersText = text;
  em.classList.add(WRAP_CLASS);
  em.textContent = '';
  em.setAttribute('aria-label', text.trim());

  [...text].forEach((char) => {
    const span = document.createElement('span');
    span.className = LETTER_CLASS;
    span.setAttribute('aria-hidden', 'true');
    span.textContent = char === ' ' ? '\u00A0' : char;
    em.appendChild(span);
  });
}

function restoreEmLetters() {
  document.querySelectorAll(`${SELECTOR}[data-em-letters="true"]`).forEach((el) => {
    const em = el as HTMLElement;
    em.textContent = em.dataset.emLettersText ?? '';
    em.classList.remove(WRAP_CLASS);
    delete em.dataset.emLetters;
    delete em.dataset.emLettersText;
    delete em.dataset.emAnimated;
    delete em.dataset.emScheduled;
    em.removeAttribute('aria-label');
  });
}

function scheduleEmLetterPlay(em: HTMLElement, letters: Element[]): () => void {
  const revealRoot = em.closest(REVEAL_SELECTOR) as HTMLElement | null;
  const triggerEl = revealRoot ?? em.closest('.sec-hd-c') ?? em;
  const cleanups: (() => void)[] = [];

  const play = () => {
    if (em.dataset.emAnimated === 'true') return;
    em.dataset.emAnimated = 'true';

    gsap.to(letters, {
      opacity: 1,
      duration: 0.04,
      ease: 'none',
      stagger: TYPE_STAGGER,
    });
  };

  const canPlay = () => {
    if (em.dataset.emAnimated === 'true') return false;
    if (!isInViewport(triggerEl)) return false;
    if (revealRoot && !revealRoot.classList.contains('on')) return false;
    return true;
  };

  const tryStart = () => {
    if (!canPlay()) return false;
    if (em.dataset.emScheduled === 'true') return true;
    em.dataset.emScheduled = 'true';
    gsap.delayedCall(0.2, play);
    return true;
  };

  if (tryStart()) return () => cleanups.forEach((fn) => fn());

  if (revealRoot) {
    const mo = new MutationObserver(() => {
      if (tryStart()) mo.disconnect();
    });
    mo.observe(revealRoot, { attributes: true, attributeFilter: ['class'] });
    cleanups.push(() => mo.disconnect());
  }

  const st = ScrollTrigger.create({
    trigger: triggerEl,
    start: 'top 88%',
    once: true,
    onEnter: () => {
      if (tryStart()) return;
      gsap.delayedCall(0.08, () => { tryStart(); });
      gsap.delayedCall(0.16, () => { tryStart(); });
    },
  });
  cleanups.push(() => st.kill());

  return () => cleanups.forEach((fn) => fn());
}

export function useEmLetterReveal(routeKey: string) {
  useEffect(() => {
    let ctx: gsap.Context | undefined;
    const disposers: (() => void)[] = [];

    const bind = () => {
      ctx = gsap.context(() => {
        document.querySelectorAll(SELECTOR).forEach((el) => {
          const em = el as HTMLElement;
          wrapEmLetters(em);

          const letters = Array.from(em.querySelectorAll(`.${LETTER_CLASS}`));
          if (!letters.length) return;

          gsap.set(letters, { opacity: 0 });
          disposers.push(scheduleEmLetterPlay(em, letters));
        });
      });

      ScrollTrigger.refresh();
    };

    const rafId = requestAnimationFrame(() => {
      requestAnimationFrame(bind);
    });

    return () => {
      cancelAnimationFrame(rafId);
      disposers.forEach((fn) => fn());
      ctx?.revert();
      restoreEmLetters();
    };
  }, [routeKey]);
}
