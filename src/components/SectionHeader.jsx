function SectionHeader({ kicker, title, description, theme = 'light' }) {
  const isDark = theme === 'dark';

  const bg = isDark ? '#181816' : '#e8e6e1';
  const textColor = isDark ? '#dddcd4' : '#111110';
  const descColor = isDark ? 'rgba(221,220,212,0.68)' : 'rgba(17,17,16,0.65)';
  const borderColor = isDark ? 'rgba(221,220,212,0.1)' : 'rgba(17,17,16,0.1)';
  const tagBorder = isDark ? 'rgba(221,220,212,0.25)' : 'rgba(17,17,16,0.25)';
  const tagColor = isDark ? 'rgba(221,220,212,0.65)' : 'rgba(17,17,16,0.62)';

  const tagLabel = isDark ? 'System Building' : 'Model Building';

  return (
    <div
      className="page-padding"
      style={{
        backgroundColor: bg,
        color: textColor,
        borderBottom: `1px solid ${borderColor}`,
        paddingTop: 64,
        paddingBottom: 64,
      }}
    >
      <div style={{ maxWidth: 1400 }}>
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div style={{ maxWidth: 680 }}>
            <span
              className="eyebrow"
              style={{ color: textColor, display: 'block', marginBottom: 16 }}
            >
              {kicker}
            </span>
            <h2
              className="display-title"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 5.4rem)', color: textColor, marginBottom: 20 }}
            >
              {title}
            </h2>
            <p
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 13,
                lineHeight: 1.82,
                color: descColor,
                maxWidth: '60ch',
              }}
            >
              {description}
            </p>
          </div>

          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 7.5,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: tagColor,
              border: `1px solid ${tagBorder}`,
              padding: '4px 12px',
              alignSelf: 'flex-start',
            }}
          >
            {tagLabel}
          </span>
        </div>
      </div>
    </div>
  );
}

export default SectionHeader;
