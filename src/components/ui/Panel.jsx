/**
 * theme: 'dark' (default) | 'light'
 */
function Panel({ className = '', theme = 'dark', children }) {
  const base = theme === 'light' ? 'surface-panel-ink' : 'surface-panel';
  return <div className={`${base} ${className}`.trim()}>{children}</div>;
}

export default Panel;
