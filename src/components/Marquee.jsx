function Marquee({ items }) {
  const content = [...items, ...items].join('  //  ');

  return (
    <section
      aria-label="Highlights"
      style={{
        backgroundColor: '#111110',
        borderBottom: '1px solid rgba(221,220,212,0.08)',
        overflow: 'hidden',
        padding: '14px 0',
      }}
    >
      <div
        aria-hidden="true"
        style={{ display: 'inline-block', whiteSpace: 'nowrap', animation: 'marquee-scroll 26s linear infinite' }}
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
