function Panel({ className = '', children }) {
  return <div className={`surface-panel ${className}`.trim()}>{children}</div>;
}

export default Panel;
