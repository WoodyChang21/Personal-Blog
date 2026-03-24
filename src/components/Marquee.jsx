function Marquee({ items }) {
  const content = [...items, ...items].join(' // ');

  return (
    <section className="shell border-x-2 border-b-2 border-black bg-black text-white" aria-label="Highlights">
      <div className="overflow-hidden py-4 font-display text-base uppercase tracking-[0.16em] sm:text-lg">
        <div
          className="inline-block whitespace-nowrap"
          aria-hidden="true"
          style={{ animation: 'marquee-scroll 20s linear infinite' }}
        >
          <span style={{ paddingLeft: '100%' }}>{content}</span>
        </div>
      </div>
    </section>
  );
}

export default Marquee;
