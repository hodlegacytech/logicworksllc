import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ mx: 0, my: 0, rx: 0, ry: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current.mx = e.clientX;
      pos.current.my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener('mousemove', onMove, { passive: true });

    let raf: number;
    const animate = () => {
      pos.current.rx += (pos.current.mx - pos.current.rx) * 0.12;
      pos.current.ry += (pos.current.my - pos.current.ry) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = `${pos.current.rx}px`;
        ringRef.current.style.top = `${pos.current.ry}px`;
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    const addHover = () => ringRef.current?.classList.add('hovered');
    const rmHover = () => ringRef.current?.classList.remove('hovered');
    const targets = document.querySelectorAll('a, button, .srv-card, .ind-card, .testi-card, .faq-q');
    targets.forEach((el) => {
      el.addEventListener('mouseenter', addHover);
      el.addEventListener('mouseleave', rmHover);
    });

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
      targets.forEach((el) => {
        el.removeEventListener('mouseenter', addHover);
        el.removeEventListener('mouseleave', rmHover);
      });
    };
  }, []);

  return (
    <>
      <div className="cur-dot" ref={dotRef} aria-hidden="true" />
      <div className="cur-ring" ref={ringRef} aria-hidden="true" />
    </>
  );
}