import { useState } from 'react';
import { navigationLinks } from '../data/content';

/* Decorative tick bar — lifted from the aristide prototype */
const TICK_HEIGHTS = [13,9,15,8,12,10,16,9,13,11,15,8,14,10,16,9,13,11,15,8,14,12,16,10,13,9,15,11,14,10];

function TickBar({ count = 28 }) {
  return (
    <div className="ticks" aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <div
          key={i}
          className="tick"
          style={{ height: TICK_HEIGHTS[i % TICK_HEIGHTS.length] }}
        />
      ))}
    </div>
  );
}

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="shell sticky top-0 z-50" style={{ backgroundColor: '#181816' }}>
      <nav style={{ height: 54, borderBottom: '1px solid rgba(221,220,212,0.1)' }}>
        <div className="page-padding flex h-full items-center justify-between">
          {/* Logo — Anton typeface */}
          <a
            href="#top"
            style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: 16,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: '#dddcd4',
            }}
          >
            Woody Chang
          </a>

          {/* Tick bar — desktop only */}
          <div className="hidden md:block" style={{ color: '#dddcd4' }}>
            <TickBar count={28} />
          </div>

          {/* Desktop nav links */}
          <div className="hidden items-center gap-7 md:flex">
            {navigationLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noreferrer' : undefined}
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 9.5,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: '#dddcd4',
                  opacity: 0.75,
                  textDecoration: 'none',
                  transition: 'opacity 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.75')}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="md:hidden"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
            onClick={() => setIsMenuOpen((v) => !v)}
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 9,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#dddcd4',
              background: 'none',
              border: '1px solid rgba(221,220,212,0.35)',
              padding: '6px 12px',
              cursor: 'pointer',
            }}
          >
            {isMenuOpen ? 'Close' : 'Menu'}
          </button>
        </div>

        {/* Mobile dropdown */}
        {isMenuOpen && (
          <div
            className="page-padding flex flex-col gap-5 pb-6 pt-4 md:hidden"
            style={{ borderTop: '1px solid rgba(221,220,212,0.1)' }}
          >
            {navigationLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noreferrer' : undefined}
                onClick={() => setIsMenuOpen(false)}
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 10,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: '#dddcd4',
                  opacity: 0.8,
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
