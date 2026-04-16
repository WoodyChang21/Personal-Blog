import { useEffect, useState } from 'react';
import { heroActions } from '../data/content';
import ActionButton from './ui/ActionButton';

function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Trigger staggered entrance on first paint
    const raf = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  const cls = (delay) =>
    `reveal${mounted ? ' in-view' : ''}`;

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
          <span
            className={cls(0)}
            style={{ '--reveal-delay': '0ms', marginBottom: 28, display: 'block' }}
          >
            <span className="eyebrow">
              Building systems that learn and systems that act
            </span>
          </span>

          <h1
            className={`display-title ${cls(1)}`}
            style={{
              '--reveal-delay': '120ms',
              fontSize: 'clamp(4.5rem, 12vw, 10rem)',
              color: '#dddcd4',
              marginBottom: 40,
              maxWidth: '10ch',
            }}
          >
            AI Journey
          </h1>

          {/* Thin separator */}
          <div
            className={cls(2)}
            style={{
              '--reveal-delay': '200ms',
              width: '100%',
              height: 1,
              backgroundColor: 'rgba(221,220,212,0.12)',
              marginBottom: 40,
            }}
          />

          <p
            className={cls(3)}
            style={{
              '--reveal-delay': '280ms',
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
            className={cls(4)}
            style={{
              '--reveal-delay': '340ms',
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

          <div
            className={cls(5)}
            style={{ '--reveal-delay': '420ms', display: 'flex', gap: 12, flexWrap: 'wrap' }}
          >
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
        <div
          className={cls(6)}
          style={{ '--reveal-delay': '520ms', marginTop: 60, display: 'flex', justifyContent: 'flex-end' }}
        >
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
