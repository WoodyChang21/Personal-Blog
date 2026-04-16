import { useInView } from '../hooks/useInView';
import ArticleCard from './ArticleCard';

function CategoryRow({ section, theme = 'light' }) {
  const isDark = theme === 'dark';
  const [ref, inView] = useInView({ threshold: 0.06 });

  const bgLeft    = isDark ? '#1c1b19' : '#ebe9e4';
  const bgRight   = isDark ? '#181816' : '#f0ede8';
  const textColor  = isDark ? '#dddcd4' : '#111110';
  const labelColor = isDark ? 'rgba(221,220,212,0.42)' : 'rgba(17,17,16,0.45)';
  const descColor  = isDark ? 'rgba(221,220,212,0.65)' : 'rgba(17,17,16,0.65)';
  const borderColor = isDark ? 'rgba(221,220,212,0.08)' : 'rgba(17,17,16,0.08)';

  const rvUp   = `reveal${inView ? ' in-view' : ''}`;
  const rvLeft = `reveal-left${inView ? ' in-view' : ''}`;

  return (
    <div
      ref={ref}
      className="grid lg:grid-cols-[minmax(340px,0.72fr)_minmax(0,1.28fr)]"
      style={{ borderBottom: `1px solid ${borderColor}` }}
    >
      {/* Left: category label + title + description */}
      <div
        style={{
          backgroundColor: bgLeft,
          borderRight: `1px solid ${borderColor}`,
          borderBottom: `1px solid ${borderColor}`,
        }}
        className="lg:border-b-0"
      >
        <div className="page-padding flex h-full flex-col justify-between gap-10 py-12 lg:py-16">
          <div>
            <p
              className={rvLeft}
              style={{
                '--reveal-delay': '0ms',
                fontFamily: "'Space Mono', monospace",
                fontSize: 9,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: labelColor,
                marginBottom: 14,
              }}
            >
              {section.label}
            </p>
            <h3
              className={`display-title ${rvLeft}`}
              style={{
                '--reveal-delay': '80ms',
                fontSize: 'clamp(2.2rem, 4vw, 3.8rem)',
                color: textColor,
              }}
            >
              {section.title}
            </h3>
          </div>

          <p
            className={rvLeft}
            style={{
              '--reveal-delay': '160ms',
              fontFamily: "'Space Mono', monospace",
              fontSize: 14,
              lineHeight: 1.85,
              color: descColor,
              maxWidth: '42ch',
            }}
          >
            {section.description}
          </p>
        </div>
      </div>

      {/* Right: article cards */}
      <div style={{ backgroundColor: bgRight }}>
        <div className="page-padding py-10 lg:py-14">
          {section.items.map((item, idx) => (
            <ArticleCard
              key={item.title}
              item={item}
              theme={theme}
              isFirst={idx === 0}
              index={idx}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryRow;
