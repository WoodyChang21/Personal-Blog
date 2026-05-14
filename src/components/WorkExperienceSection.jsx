import { useState } from 'react';
import { useInView } from '../hooks/useInView';

function ExperienceCard({ job, index }) {
  const [open, setOpen] = useState(job.defaultOpen);
  const [cardRef, cardInView] = useInView({ threshold: 0.12 });

  return (
    <div style={{ display: 'contents' }}>
      {/* Dot in left column */}
      <div className="timeline-dot-slot">
        <div
          className={`timeline-dot${cardInView ? ' is-visible' : ''}`}
          style={{ '--dot-delay': `${index * 100}ms` }}
        />
      </div>

      {/* Card in right column — ref lives here so IntersectionObserver has a real box */}
      <div ref={cardRef} className="experience-card">
        <button
          className="folder-card-btn"
          onClick={() => setOpen(o => !o)}
          aria-expanded={open}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px' }}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <h3
                className={`display-title reveal${cardInView ? ' in-view' : ''}`}
                style={{
                  '--reveal-delay': `${index * 80}ms`,
                  fontSize: 'clamp(1.4rem, 2.8vw, 2rem)',
                  color: '#111110',
                  marginBottom: '6px',
                  lineHeight: 1.0,
                }}
              >
                {job.role}
              </h3>
              <div
                className={`reveal${cardInView ? ' in-view' : ''}`}
                style={{
                  '--reveal-delay': `${index * 80 + 40}ms`,
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  gap: '8px',
                  marginTop: '4px',
                }}
              >
                <span style={{ fontFamily: "'Space Mono', monospace", fontWeight: 700, fontSize: '13px', color: '#111110' }}>
                  {job.company}
                </span>
              </div>
            </div>

            <div
              className={`reveal${cardInView ? ' in-view' : ''}`}
              style={{
                '--reveal-delay': `${index * 80 + 60}ms`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                gap: '8px',
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '10px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.18em',
                  color: 'rgba(17,17,16,0.55)',
                  whiteSpace: 'nowrap',
                }}
              >
                {job.period}
              </span>
              <span
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '8.5px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.2em',
                  color: 'rgba(17,17,16,0.55)',
                  border: '1px solid rgba(17,17,16,0.22)',
                  padding: '3px 10px',
                  whiteSpace: 'nowrap',
                }}
              >
                {job.type}
              </span>
              <span className={`folder-chevron${open ? ' is-expanded' : ''}`} style={{ color: '#111110' }}>
                ↓
              </span>
            </div>
          </div>
        </button>

        <div className={`collapsible-grid${open ? ' is-expanded' : ''}`}>
          <div className="collapsible-inner">
            <div style={{ paddingTop: '20px' }}>
              {/* Tech stack badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                {job.stack.map(tech => (
                  <span
                    key={tech}
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: '8px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.2em',
                      color: 'rgba(17,17,16,0.62)',
                      border: '1px solid rgba(17,17,16,0.22)',
                      padding: '3px 10px',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Bullets */}
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {job.bullets.map((bullet, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <span style={{ color: 'rgba(17,17,16,0.35)', flexShrink: 0, marginTop: '1px' }}>—</span>
                    <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '12px', lineHeight: 1.82, color: 'rgba(17,17,16,0.72)' }}>
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div style={{ height: '1px', backgroundColor: 'rgba(17,17,16,0.1)', marginTop: '24px' }} />
      </div>
    </div>
  );
}

export default function WorkExperienceSection({ jobs, education }) {
  const [preambleRef, preambleInView] = useInView({ threshold: 0.1 });
  const [lineRef, lineInView] = useInView({ threshold: 0.05 });
  const [eduRef, eduInView] = useInView({ threshold: 0.1 });

  return (
    <section
      id="experience"
      style={{ backgroundColor: '#cfcdc8', color: '#111110', borderBottom: '1px solid rgba(17,17,16,0.1)' }}
    >
      <div className="page-padding" style={{ paddingTop: '80px', paddingBottom: '80px' }}>

        {/* Preamble */}
        <div ref={preambleRef}>
          <span
            className={`eyebrow reveal${preambleInView ? ' in-view' : ''}`}
            style={{ '--reveal-delay': '0ms', color: '#111110' }}
          >
            Chapter 00
          </span>
          <h2
            className={`display-title reveal${preambleInView ? ' in-view' : ''}`}
            style={{
              '--reveal-delay': '80ms',
              fontSize: 'clamp(2.8rem, 6vw, 5rem)',
              color: '#111110',
              marginTop: '12px',
              marginBottom: '20px',
            }}
          >
            Work Experience
          </h2>
          <div
            className={`reveal${preambleInView ? ' in-view' : ''}`}
            style={{
              '--reveal-delay': '160ms',
              height: '1px',
              backgroundColor: 'rgba(17,17,16,0.14)',
              marginBottom: '52px',
            }}
          />
        </div>

        {/* Timeline rail — the grid has 2 sub-columns repeated per row: [dot | card] */}
        <div
          style={{ position: 'relative' }}
        >
          {/* Vertical line — sits behind the grid, full height of this container */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '48px',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              paddingTop: '8px',
              pointerEvents: 'none',
            }}
          >
            <div
              ref={lineRef}
              className={`timeline-line${lineInView ? ' is-active' : ''}`}
            />
          </div>

          {/* Cards grid */}
          <div className="timeline-rail">
            {jobs.map((job, i) => (
              <ExperienceCard key={job.id} job={job} index={i} />
            ))}
          </div>
        </div>

        {/* Education strip */}
        <div ref={eduRef} style={{ marginTop: '64px', paddingTop: '40px', borderTop: '1px solid rgba(17,17,16,0.1)' }}>
          <span
            className={`eyebrow reveal${eduInView ? ' in-view' : ''}`}
            style={{ '--reveal-delay': '0ms', color: '#111110' }}
          >
            Education
          </span>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1px',
              marginTop: '24px',
              backgroundColor: 'rgba(17,17,16,0.1)',
            }}
          >
            {education.map((edu, i) => (
              <div
                key={edu.id}
                className={`reveal${eduInView ? ' in-view' : ''}`}
                style={{
                  '--reveal-delay': `${i * 80}ms`,
                  backgroundColor: '#cfcdc8',
                  padding: '24px 28px',
                }}
              >
                <div
                  className="display-title"
                  style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: '#111110', marginBottom: '8px' }}
                >
                  {edu.year}
                </div>
                <p style={{ fontFamily: "'Space Mono', monospace", fontWeight: 700, fontSize: '12px', color: '#111110', marginBottom: '4px' }}>
                  {edu.institution}
                </p>
                <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '11px', color: 'rgba(17,17,16,0.65)', lineHeight: 1.6 }}>
                  {edu.degree}
                </p>
                <span
                  className="eyebrow"
                  style={{ color: '#111110', marginTop: '8px', display: 'block' }}
                >
                  {edu.location}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
