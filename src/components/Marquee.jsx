import { useState } from 'react';

function Marquee({ items }) {
  const content = [...items, ...items].join('  //  ');
  const [paused, setPaused] = useState(false);

  return (
    <section
      aria-label="Highlights"
      style={{
        backgroundColor: '#111110',
        borderBottom: '1px solid rgba(221,220,212,0.08)',
        overflow: 'hidden',
        padding: '14px 0',
        cursor: 'default',
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        aria-hidden="true"
        className="marquee-track"
        style={{
          display: 'inline-block',
          whiteSpace: 'nowrap',
          animation: 'marquee-scroll 26s linear infinite',
          animationPlayState: paused ? 'paused' : 'running',
          transition: 'opacity 0.3s ease',
          opacity: paused ? 0.75 : 1,
        }}
      >
        <span
          style={{
            paddingLeft: '100vw',
            fontFamily: "'Space Mono', monospace",
            fontSize: 8.5,
            textTransform: 'uppercase',
            letterSpacing: '0.3em',
            color: '#dddcd4',
            opacity: 0.45,
          }}
        >
          {content}
        </span>
      </div>
    </section>
  );
}

export default Marquee;
