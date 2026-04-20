import { useInView } from '../hooks/useInView';
import { useVisitorCount } from '../hooks/useVisitorCount';

function Footer({ socialLinks }) {
  const visitorCount = useVisitorCount();
  const [ref, inView] = useInView({ threshold: 0.08 });

  const rv = (delay) => `reveal${inView ? ' in-view' : ''}`;

  const emailLink  = socialLinks.find((l) => l.label === 'Email');
  const otherLinks = socialLinks.filter((l) => l.label !== 'Email');

  return (
    <footer
      id="contact"
      ref={ref}
      style={{ backgroundColor: '#0f0f0e', color: '#dddcd4' }}
    >
      {/* ── Contact — footnote style ──────────── */}
      <div
        style={{
          borderTop: '1px solid rgba(221,220,212,0.18)',
        }}
      >
        <div className="page-padding" style={{ paddingTop: 52, paddingBottom: 44 }}>

          {/* Eyebrow */}
          <span
            className={`eyebrow ${rv(0)}`}
            style={{
              '--reveal-delay': '0ms',
              color: 'rgba(221,220,212,0.5)',
              display: 'block',
              marginBottom: 20,
            }}
          >
            Contact
          </span>

          {/* Title + centered CTAs + copy */}
          <div
            className={`grid items-center gap-8 lg:grid-cols-[auto_minmax(0,1fr)] ${rv(1)}`}
            style={{ '--reveal-delay': '80ms' }}
          >
            <h2
              className="display-title"
              style={{
                fontSize: 'clamp(1.8rem, 3.2vw, 2.8rem)',
                color: '#dddcd4',
                lineHeight: 1,
                flexShrink: 0,
              }}
            >
              Get In Touch
            </h2>

            <div className="space-y-4">
              {/* CTA + social links */}
              <div
                className={`flex flex-wrap items-center justify-center gap-3 ${rv(3)}`}
                style={{ '--reveal-delay': '200ms' }}
              >
                {emailLink && (
                  <a
                    href={emailLink.href}
                    className="action-button action-button-solid"
                    style={{ fontSize: 9.5, letterSpacing: '0.2em' }}
                  >
                    Send an Email →
                  </a>
                )}
                {otherLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="action-button action-button-outline"
                    style={{ fontSize: 9.5, letterSpacing: '0.2em' }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <p
                className={`${rv(2)} mx-auto`}
                style={{
                  '--reveal-delay': '140ms',
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 12.5,
                  lineHeight: 1.8,
                  color: 'rgba(221,220,212,0.55)',
                  maxWidth: '56ch',
                  textAlign: 'center',
                }}
              >
                Open to new opportunities, research collaborations, and
                conversations about AI engineering and production systems.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ───────────────────────── */}
      <div
        className="page-padding"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: 20,
          paddingBottom: 20,
          gap: 28,
          textAlign: 'center',
        }}
      >
        <div className="footer-label" style={{ color: 'rgba(221,220,212,0.45)' }}>
          AI Engineer · University of Toronto — M.Eng.
        </div>

        {/* Visitor counter */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <p
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 8,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'rgba(221,220,212,0.3)',
            }}
          >
            Visitors
          </p>
          <span
            style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: 18,
              letterSpacing: '0.04em',
              color: 'rgba(221,220,212,0.5)',
            }}
          >
            {visitorCount}
          </span>
        </div>

        <p className="footer-label" style={{ color: 'rgba(221,220,212,0.25)' }}>
          © 2025 Woody Chang
        </p>
      </div>
    </footer>
  );
}

export default Footer;
