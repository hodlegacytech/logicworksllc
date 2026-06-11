import { useEffect, useRef, useState } from 'react';

export default function Loader() {
  const [pct, setPct] = useState(0);
  const [done, setDone] = useState(false);
  const ref = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    let cur = 0;
    ref.current = setInterval(() => {
      cur = Math.min(cur + Math.random() * 18, 100);
      setPct(Math.floor(cur));
      if (cur >= 100) {
        clearInterval(ref.current!);
        setTimeout(() => setDone(true), 200);
      }
    }, 80);
    return () => { if (ref.current) clearInterval(ref.current); };
  }, []);

  return (
    <div id="loader" className={done ? 'done' : ''} role="status" aria-live="polite">
      <div className="ld-logo" data-text="LOGICWORKS">LOGICWORKS</div>
      <div className="ld-bar"><div className="ld-fill" /></div>
      <div className="ld-text">Initializing Digital Intelligence</div>
      <div className="ld-counter">{pct}%</div>
    </div>
  );
}