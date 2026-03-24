function LabelPill({ className = '', children }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-black/70 bg-white px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.18em] ${className}`.trim()}
    >
      {children}
    </span>
  );
}

export default LabelPill;
