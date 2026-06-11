import { useEffect } from 'react';

const SELECTOR = '.sec-title em';
const CURVED_CLASS = 'curved-em';
const CHAR_CLASS = 'curved-em-char';
const MAX_ARC = 8;
const MAX_ROTATE = 3.2;

function curveEmElement(em: HTMLElement) {
  if (em.dataset.emLetters === 'true' || em.dataset.curved === 'true') return;

  const text = em.textContent?.trim() ?? '';
  if (!text) return;

  em.dataset.curved = 'true';
  em.dataset.curvedText = text;
  em.classList.add(CURVED_CLASS);
  em.textContent = '';
  em.setAttribute('aria-label', text);

  const chars = text.split('');
  const total = chars.length;

  chars.forEach((char, i) => {
    const span = document.createElement('span');
    span.className = CHAR_CLASS;
    span.setAttribute('aria-hidden', 'true');
    span.textContent = char === ' ' ? '\u00A0' : char;

    const t = total > 1 ? i / (total - 1) : 0.5;
    const normalized = (t - 0.5) * 2;
    const arcY = -MAX_ARC * (1 - normalized * normalized);
    const rotate = normalized * MAX_ROTATE;

    span.style.transform = `translateY(${arcY.toFixed(2)}px) rotate(${rotate.toFixed(2)}deg)`;
    em.appendChild(span);
  });
}

function restoreCurvedEm() {
  document.querySelectorAll(`${SELECTOR}[data-curved="true"]`).forEach((el) => {
    const em = el as HTMLElement;
    em.textContent = em.dataset.curvedText ?? '';
    em.classList.remove(CURVED_CLASS);
    delete em.dataset.curved;
    delete em.dataset.curvedText;
    em.removeAttribute('aria-label');
  });
}

export function useCurvedEm(routeKey: string) {
  useEffect(() => {
    const bind = () => {
      document.querySelectorAll(SELECTOR).forEach((el) => {
        curveEmElement(el as HTMLElement);
      });
    };

    const rafId = requestAnimationFrame(() => {
      requestAnimationFrame(bind);
    });

    return () => {
      cancelAnimationFrame(rafId);
      restoreCurvedEm();
    };
  }, [routeKey]);
}
