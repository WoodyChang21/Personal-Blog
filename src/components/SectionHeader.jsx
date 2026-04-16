import { useInView } from '../hooks/useInView';

function SectionHeader({ kicker, title, description, theme = 'light', isExpanded, onToggle, topicCount }) {
  const isDark = theme === 'dark';
  const [ref, inView] = useInView({ threshold: 0.1 });

  const bg         = isDark ? '#181816' : '#e8e6e1';
  const hoverBg    = isDark ? '#1e1d1b' : '#e2dfda';
  const textColor  = isDark ? '#dddcd4' : '#111110';
  const descColor  = isDark ? 'rgba(221,220,212,0.68)' : 'rgba(17,17,16,0.65)';
  const borderColor = isDark ? 'rgba(221,220,212,0.1)' : 'rgba(17,17,16,0.1)';
  const tagBorder  = isDark ? 'rgba(221,220,212,0.25)' : 'rgba(17,17,16,0.25)';
  const tagColor   = isDark ? 'rgba(221,220,212,0.65)' : 'rgba(17,17,16,0.62)';
  const tagLabel   = isDark ? 'System Building' : 'Model Building';

  const rv = `reveal${inView ? ' in-view' : ''}`;

  return (
    <button
      ref={ref}
      type="button"
      onClick={onToggle}
      aria-expanded={isExpanded}
      style={{
        display: 'block',
        width: '100%',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        backgroundColor: bg,
        borderBottom: `1px solid ${borderColor}`,
        transition: 'background-color 0.22s ease',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hoverBg)}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = bg)}
    >
      <div className="page-padding" style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div style={{ maxWidth: 1400 }}>

          {/* Top row: kicker + expand controls */}
          <div
            className={rv}
            style={{
              '--reveal-delay': '0ms',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 16,
              gap: 12,
            }}
          >
            <span className="eyebrow" style={{ color: textColor }}>{kicker}</span>

            {/* Right: topic count + chevron */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
              <span
                className="folder-count-badge"
                style={{ color: textColor }}
              >
                {topicCount}&nbsp;{topicCount === 1 ? 'topic' : 'topics'}
              </span>
              <span
                className={`folder-chevron${isExpanded ? ' is-expanded' : ''}`}
                style={{ color: textColor }}
                aria-hidden="true"
              >
                ↓
              </span>
            </div>
          </div>

          {/* Main content row: title + description + tag */}
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div style={{ maxWidth: 680 }}>
              <h2
                className={`display-title ${rv}`}
                style={{
                  '--reveal-delay': '80ms',
                  fontSize: 'clamp(2.8rem, 6vw, 5.4rem)',
                  color: textColor,
                  marginBottom: 20,
                }}
              >
                {title}
              </h2>
              <p
                className={rv}
                style={{
                  '--reveal-delay': '160ms',
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 14.5,
                  lineHeight: 1.82,
                  color: descColor,
                  maxWidth: '60ch',
                }}
              >
                {description}
              </p>
            </div>

            <span
              className={rv}
              style={{
                '--reveal-delay': '240ms',
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

          {/* Clear CTA button */}
          <div
            className={rv}
            style={{ '--reveal-delay': '300ms', marginTop: 36 }}
          >
            <span
              className={`action-button ${
                isDark ? 'action-button-outline' : 'action-button-outline-ink'
              }`}
              style={{
                pointerEvents: 'none',
                display: 'inline-flex',
                gap: 10,
                fontSize: 10,
                letterSpacing: '0.2em',
              }}
            >
              {isExpanded ? '↑ Collapse Section' : '↓ Explore Topics'}
            </span>
          </div>

        </div>
      </div>
    </button>
  );
}

export default SectionHeader;
