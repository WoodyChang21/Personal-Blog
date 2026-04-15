/**
 * theme: 'dark' (default) | 'light'
 */
function LabelPill({ className = '', theme = 'dark', children }) {
  const base =
    'inline-flex items-center border px-2.5 py-[3px] text-[7.5px] uppercase tracking-[0.22em]';
  const themeClass =
    theme === 'light'
      ? 'border-[#111110]/30 text-[#111110]/70'
      : 'border-[#dddcd4]/25 text-[#dddcd4]/65';

  return (
    <span className={`${base} ${themeClass} ${className}`.trim()}>
      {children}
    </span>
  );
}

export default LabelPill;
