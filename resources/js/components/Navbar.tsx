import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, router, usePage } from '@inertiajs/react';
import { navLinks } from '@/data/nav';
import type { NavLink as NavLinkType } from '@/types';
import logo from '@/assets/images/logicworks-logo.png';


const IconChevron = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);
const IconPhone = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.37 3.37 2 2 0 0 1 3.64 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16z" />
  </svg>
);
const IconArrow = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);

function DropItem({ item, onNavigate }: { item: { label: string; href: string; desc?: string }; onNavigate: () => void }) {
  return (
    <Link href={item.href} className="dd-item" role="menuitem" onClick={onNavigate}>
      <span className="dd-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
        </svg>
      </span>
      <span className="dd-label">
        <span>{item.label}</span>
        {item.desc && <span>{item.desc}</span>}
      </span>
    </Link>
  );
}

interface NavItemProps {
  link: NavLinkType;
  isOpen: boolean;
  onOpen: () => void;
  onNavigate: () => void;
}

function NavItem({ link, isOpen, onOpen, onNavigate }: NavItemProps) {
  const hasDrop = !!link.dropdown;

  return (
    <li
      className={`nav-item${isOpen ? ' is-open' : ''}`}
      role="none"
      onMouseEnter={hasDrop ? onOpen : undefined}
    >
      <Link
        href={link.href}
        className="nav-link"
        role="menuitem"
        aria-haspopup={hasDrop}
        aria-expanded={hasDrop ? isOpen : undefined}
        onClick={onNavigate}
      >
        {link.label}
        {hasDrop && <IconChevron />}
      </Link>
      {hasDrop && link.dropdown && (
        <ul
          className={`nav-drop${link.dropdown.type === 'mega' ? ' nav-mega' : ''}`}
          role="menu"
          style={link.dropdown.type === 'simple' ? { minWidth: '270px' } : undefined}
          onMouseEnter={onOpen}
        >
          {link.dropdown.type === 'mega' && link.dropdown.title && (
            <li className="mega-title" role="none">{link.dropdown.title}</li>
          )}
          {link.dropdown.type === 'mega' && link.dropdown.columns?.map((col) => (
            <li key={col.heading} role="none">
              <div className="mega-col-hd">{col.heading}</div>
              {col.items.map((item) => <DropItem key={item.href} item={item} onNavigate={onNavigate} />)}
            </li>
          ))}
          {link.dropdown.type === 'simple' && link.dropdown.items?.map((item) => (
            <DropItem key={item.href} item={item} onNavigate={onNavigate} />
          ))}
        </ul>
      )}
    </li>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobOpen, setMobOpen] = useState(false);
  const [openMobIdx, setOpenMobIdx] = useState<number | null>(null);
  const [openNavIdx, setOpenNavIdx] = useState<number | null>(null);
  const suppressHover = useRef(false);
  const page = usePage();

  const closeAllMenus = useCallback(() => {
    setOpenNavIdx(null);
    suppressHover.current = true;
  }, []);

  const handleMenuLeave = () => {
    setOpenNavIdx(null);
    suppressHover.current = false;
  };

  const handleNavOpen = (index: number) => {
    if (suppressHover.current) return;
    setOpenNavIdx(index);
  };

  useEffect(() => {
    setMobOpen(false);
    setOpenMobIdx(null);
    setOpenNavIdx(null);
    suppressHover.current = false;
    document.body.style.overflow = '';
  }, [page.url]);

  useEffect(() => {
    const removeStart = router.on('start', closeAllMenus);
    const removeFinish = router.on('finish', () => {
      suppressHover.current = true;
    });
    return () => {
      removeStart();
      removeFinish();
    };
  }, [closeAllMenus]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleMob = () => {
    const next = !mobOpen;
    setMobOpen(next);
    document.body.style.overflow = next ? 'hidden' : '';
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeAllMenus();
        setMobOpen(false);
        document.body.style.overflow = '';
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [closeAllMenus]);

  return (
    <>
      <nav id="navbar" className={scrolled ? 'scrolled' : ''} role="navigation" aria-label="Main navigation">
        <div className="nav-inner">
          <Link href="/" className="nav-logo" aria-label="LogicWorks — Home" onClick={closeAllMenus}>
            <img
              src={logo}
              alt="LogicWorks"
              className="nav-logo-img"
              width={180}
              height={40}
            />
          </Link>
          <ul className="nav-menu" role="menubar" onMouseLeave={handleMenuLeave}>
            {navLinks.map((link, i) => (
              <NavItem
                key={link.href}
                link={link}
                isOpen={openNavIdx === i}
                onOpen={() => handleNavOpen(i)}
                onNavigate={closeAllMenus}
              />
            ))}
          </ul>
          <div className="nav-right">
            <div className="nav-phone" aria-label="Call us">
              <IconPhone />+1234567890
            </div>
            <Link href="/contact" className="btn btn-primary nav-cta-btn" onClick={closeAllMenus}>
              Get Free Quote <IconArrow />
            </Link>
            <button
              className={`nav-ham${mobOpen ? ' open' : ''}`}
              id="ham"
              aria-label="Toggle mobile menu"
              aria-expanded={mobOpen}
              onClick={toggleMob}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      <div className={`mob-menu${mobOpen ? ' open' : ''}`} role="dialog" aria-modal="true" aria-label="Mobile navigation">
        <ul>
          {navLinks.map((link, i) => (
            <li key={link.href} className="mob-item">
              {link.dropdown ? (
                <>
                  <button
                    className={`mob-link-btn${openMobIdx === i ? ' open' : ''}`}
                    onClick={() => setOpenMobIdx(openMobIdx === i ? null : i)}
                  >
                    {link.label}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="6 9 12 15 18 9" /></svg>
                  </button>
                  <div className={`mob-sub${openMobIdx === i ? ' open' : ''}`}>
                    {(link.dropdown.type === 'mega'
                      ? link.dropdown.columns?.flatMap((c) => c.items)
                      : link.dropdown.items
                    )?.map((item) => (
                      <Link key={item.href} href={item.href} onClick={closeAllMenus}>{item.label}</Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link href={link.href} className="mob-link-btn" onClick={closeAllMenus}>{link.label}</Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
