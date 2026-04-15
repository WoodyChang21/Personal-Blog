import { heroActions } from '../data/content';
import ActionButton from './ui/ActionButton';

function Hero() {
  return (
    <header
      id="top"
      style={{
        backgroundColor: '#181816',
        borderBottom: '1px solid rgba(221,220,212,0.1)',
      }}
    >
      <div className="page-padding hero-inner">

        {/* Top: eyebrow + title */}
        <div>
          <span className="eyebrow" style={{ marginBottom: 28, display: 'block' }}>
            Building systems that learn and systems that act
          </span>

          <h1
            className="display-title"
            style={{
              fontSize: 'clamp(4.5rem, 12vw, 10rem)',
              color: '#dddcd4',
              marginBottom: 40,
              maxWidth: '10ch',
            }}
          >
            AI Journey
          </h1>

          {/* Thin separator */}
          <div style={{ width: '100%', height: 1, backgroundColor: 'rgba(221,220,212,0.12)', marginBottom: 40 }} />

          <p
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 'clamp(1rem, 2.2vw, 1.35rem)',
              color: '#dddcd4',
              opacity: 0.85,
              lineHeight: 1.7,
              maxWidth: '52ch',
              marginBottom: 16,
            }}
          >
            A living log of engineering work from deep learning projects in language
            and vision to building LLM agents step by step.
          </p>

          <p
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 12,
              color: '#dddcd4',
              opacity: 0.45,
              letterSpacing: '0.06em',
              lineHeight: 1.75,
              maxWidth: '42ch',
              marginBottom: 44,
            }}
          >
            Minimal write-ups. Reproducible code. Practical lessons.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {heroActions.map((action) => (
              <ActionButton
                key={action.label}
                href={action.href}
                variant={action.variant === 'outline' ? 'outline' : 'solid'}
              >
                {action.label}
              </ActionButton>
            ))}
          </div>
        </div>

        {/* Bottom: Research / Build / Ship tag */}
        <div style={{ marginTop: 60, display: 'flex', justifyContent: 'flex-end' }}>
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 8,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: '#dddcd4',
              opacity: 0.38,
            }}
          >
            Research / Build / Ship
          </span>
        </div>
      </div>
    </header>
  );
}

export default Hero;
