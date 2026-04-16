function getItemKind(item) {
  const hasCodeLink = Boolean(item.githubHref) || item.href.includes('github.com');
  const hasArticleLink = item.href.includes('hackmd.io');

  if (hasCodeLink && hasArticleLink) return 'Article + Code';
  if (hasArticleLink) return 'Article';
  return 'Project';
}

function ArticleCard({ item, theme = 'light', isFirst = false, index = 0, inView = false }) {
  const isDark = theme === 'dark';
  const hasGithubLink = Boolean(item.githubHref);
  const kindLabel = getItemKind(item);

  const borderColor = isDark ? 'rgba(221,220,212,0.1)' : 'rgba(17,17,16,0.1)';
  const titleColor = isDark ? '#dddcd4' : '#111110';
  const metaColor = isDark ? 'rgba(221,220,212,0.42)' : 'rgba(17,17,16,0.45)';
  const descColor = isDark ? 'rgba(221,220,212,0.68)' : 'rgba(17,17,16,0.68)';
  const kindBorder = isDark ? 'rgba(221,220,212,0.2)' : 'rgba(17,17,16,0.18)';
  const kindColor = isDark ? 'rgba(221,220,212,0.55)' : 'rgba(17,17,16,0.55)';

  const btnBase = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 120,
    padding: '8px 14px',
    fontFamily: "'Space Mono', monospace",
    fontSize: 8,
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    transition: 'all 0.18s ease',
    border: '1px solid',
    cursor: 'pointer',
    textDecoration: 'none',
    color: 'inherit',
  };

  const btnSolid = isDark
    ? { ...btnBase, borderColor: '#dddcd4', backgroundColor: '#dddcd4', color: '#181816' }
    : { ...btnBase, borderColor: '#111110', backgroundColor: '#111110', color: '#f0ede8' };

  const btnOutline = isDark
    ? { ...btnBase, borderColor: 'rgba(221,220,212,0.4)', backgroundColor: 'transparent', color: '#dddcd4' }
    : { ...btnBase, borderColor: 'rgba(17,17,16,0.35)', backgroundColor: 'transparent', color: '#111110' };

  const revealDelay = 80 + index * 100;

  return (
    <article
      className={`article-card ${isDark ? 'article-card-dark' : 'article-card-light'} reveal${inView ? ' in-view' : ''}`}
      style={{
        '--reveal-delay': `${revealDelay}ms`,
        borderBottom: `1px solid ${borderColor}`,
        borderTop: isFirst ? `1px solid ${borderColor}` : undefined,
        padding: '22px 0',
      }}
    >
      <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
        <div className="flex-1">
          {/* Kind pill */}
          <div style={{ marginBottom: 10 }}>
            <span
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 7.5,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: kindColor,
                border: `1px solid ${kindBorder}`,
                padding: '2px 8px',
              }}
            >
              {kindLabel}
            </span>
          </div>

          {/* Title */}
          <a
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="card-title-link"
            style={{ display: 'inline-block', color: titleColor }}
          >
            <h4
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 'clamp(0.82rem, 1.5vw, 1rem)',
                fontWeight: 700,
                lineHeight: 1.45,
                color: titleColor,
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
              }}
            >
              {item.title}
            </h4>
          </a>

          {/* Meta tags */}
          <p
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 11,
              lineHeight: 1.7,
              color: metaColor,
              marginTop: 8,
              letterSpacing: '0.02em',
            }}
          >
            {item.meta}
          </p>

          {/* Description */}
          <p
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 13,
              lineHeight: 1.85,
              color: descColor,
              marginTop: 12,
              maxWidth: '64ch',
            }}
          >
            {item.description}
          </p>
        </div>

        {/* CTA button */}
        <div style={{ flexShrink: 0, display: 'flex', alignItems: 'flex-start', paddingTop: 2 }}>
          {hasGithubLink ? (
            <a
              href={item.githubHref}
              target="_blank"
              rel="noreferrer"
              style={btnSolid}
              onMouseEnter={(e) => {
                if (isDark) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#dddcd4';
                } else {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#111110';
                }
              }}
              onMouseLeave={(e) => {
                if (isDark) {
                  e.currentTarget.style.backgroundColor = '#dddcd4';
                  e.currentTarget.style.color = '#181816';
                } else {
                  e.currentTarget.style.backgroundColor = '#111110';
                  e.currentTarget.style.color = '#f0ede8';
                }
              }}
            >
              {item.githubLabel}
            </a>
          ) : (
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              style={btnOutline}
              onMouseEnter={(e) => {
                if (isDark) {
                  e.currentTarget.style.borderColor = '#dddcd4';
                  e.currentTarget.style.backgroundColor = '#dddcd4';
                  e.currentTarget.style.color = '#181816';
                } else {
                  e.currentTarget.style.borderColor = '#111110';
                  e.currentTarget.style.backgroundColor = '#111110';
                  e.currentTarget.style.color = '#f0ede8';
                }
              }}
              onMouseLeave={(e) => {
                if (isDark) {
                  e.currentTarget.style.borderColor = 'rgba(221,220,212,0.4)';
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#dddcd4';
                } else {
                  e.currentTarget.style.borderColor = 'rgba(17,17,16,0.35)';
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#111110';
                }
              }}
            >
              {item.githubLabel ?? 'Read Article'}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ArticleCard;
