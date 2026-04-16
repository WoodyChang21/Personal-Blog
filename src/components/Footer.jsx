import { useInView } from '../hooks/useInView';
import { useVisitorCount } from '../hooks/useVisitorCount';

function Footer({ socialLinks }) {
  const visitorCount = useVisitorCount();
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <footer
      id="contact"
      ref={ref}
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
        {/* Left: identity */}
        <div
          className={`footer-label reveal${inView ? ' in-view' : ''}`}
          style={{ '--reveal-delay': '0ms', color: 'rgba(221,220,212,0.55)' }}
        >
          AI Engineer<br />
          University of Toronto — M.Eng.
        </div>

        {/* Center: visitor counter */}
        <div
          className={`reveal${inView ? ' in-view' : ''}`}
          style={{ '--reveal-delay': '120ms', textAlign: 'center' }}
        >
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
        <div
          className={`footer-label reveal${inView ? ' in-view' : ''}`}
          style={{ '--reveal-delay': '80ms', textAlign: 'right' }}
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              className="footer-social"
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                color: 'rgba(221,220,212,0.55)',
                textDecoration: 'none',
                cursor: 'pointer',
                lineHeight: 1.85,
              }}
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
