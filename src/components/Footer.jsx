import { useVisitorCount } from '../hooks/useVisitorCount';

function Footer({ socialLinks }) {
  const visitorCount = useVisitorCount();

  return (
    <footer
      id="contact"
      style={{
        backgroundColor: '#181816',
        color: '#dddcd4',
        borderTop: '1px solid rgba(221,220,212,0.1)',
      }}
    >
      <div
        className="page-padding"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          paddingTop: 28,
          paddingBottom: 28,
          gap: 24,
        }}
      >
        {/* Left: identity + availability */}
        <div className="footer-label" style={{ color: 'rgba(221,220,212,0.55)' }}>
          AI Engineer<br />
          University of Toronto — M.Eng.
        </div>

        {/* Center: visitor counter */}
        <div style={{ textAlign: 'center' }}>
          <p
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 8,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'rgba(221,220,212,0.35)',
              marginBottom: 6,
            }}
          >
            Total Visitors
          </p>
          <span
            style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: 22,
              letterSpacing: '0.04em',
              color: 'rgba(221,220,212,0.65)',
            }}
          >
            {visitorCount}
          </span>
        </div>

        {/* Right: social links */}
        <div className="footer-label" style={{ textAlign: 'right' }}>
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              style={{
                display: 'block',
                color: 'rgba(221,220,212,0.55)',
                textDecoration: 'none',
                transition: 'opacity 0.18s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(221,220,212,0.55)')}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="page-padding"
        style={{
          paddingTop: 14,
          paddingBottom: 16,
          borderTop: '1px solid rgba(221,220,212,0.07)',
        }}
      >
        <p
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 7,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'rgba(221,220,212,0.28)',
          }}
        >
          © 2025 Woody Chang. Built for documentation purposes.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
