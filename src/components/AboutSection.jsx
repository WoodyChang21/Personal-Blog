import portrait from '../assets/me.jpg';

function AboutSection({ stats }) {
  return (
    <section
      id="about"
      style={{ backgroundColor: '#cfcdc8', color: '#111110', borderBottom: '1px solid rgba(17,17,16,0.12)' }}
    >
      <div className="page-padding grid gap-12 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:py-28">

        {/* Left: text + stats */}
        <div>
          <span className="eyebrow" style={{ color: '#111110', marginBottom: 20, display: 'block' }}>
            About
          </span>

          <h2
            className="display-title"
            style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', color: '#111110', marginBottom: 36 }}
          >
            Who Am I?
          </h2>

          <div className="flex flex-col gap-5">
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 14, lineHeight: 1.85, color: '#111110' }}>
              I&apos;m an AI engineer and Master of Computer Engineering student at the
              University of Toronto, focused on building real-world intelligent systems. I
              care deeply about the how. How do we move beyond chat interfaces? How do we
              build agents that reliably reason, use tools, and operate in production? How
              do deep learning models actually learn meaningful representations?
            </p>
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 14, lineHeight: 1.85, color: 'rgba(17,17,16,0.72)' }}>
              My work sits at the intersection of multi-agent systems,
              retrieval-augmented generation (RAG), and deep learning. I&apos;ve designed
              production-grade AI systems, from multi-agent architectures with LangGraph
              and Semantic Kernel to scalable FastAPI backends serving real users, always
              with a focus on reliability, performance, and practical impact.
            </p>
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 14, lineHeight: 1.85, color: 'rgba(17,17,16,0.72)' }}>
              This site is not a portfolio. It&apos;s a living record of how I think,
              build, and iterate, documenting my journey through agent architecture, deep
              learning systems, and production AI engineering.
            </p>
          </div>

          {/* Stats grid */}
          <div
            className="mt-10 grid grid-cols-3"
            style={{ gap: 1, backgroundColor: 'rgba(17,17,16,0.1)', border: '1px solid rgba(17,17,16,0.1)' }}
          >
            {stats.map((stat) => (
              <div key={stat.label} style={{ backgroundColor: '#cfcdc8', padding: '20px 18px' }}>
                <span
                  className="display-title"
                  style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', color: '#111110', display: 'block' }}
                >
                  {stat.value}
                </span>
                <p
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 7.5,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: 'rgba(17,17,16,0.58)',
                    marginTop: 10,
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: portrait */}
        <div className="flex items-start justify-center lg:justify-end">
          <div className="w-full max-w-[400px]">
            <div className="mb-3 flex flex-wrap gap-1.5">
              {['University of Toronto', 'M.Eng.', 'Production AI'].map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 7.5,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'rgba(17,17,16,0.62)',
                    border: '1px solid rgba(17,17,16,0.22)',
                    padding: '3px 10px',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <div style={{ border: '1px solid rgba(17,17,16,0.18)', padding: 8, backgroundColor: 'rgba(255,255,255,0.28)' }}>
              <img
                style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', display: 'block', filter: 'grayscale(15%)' }}
                src={portrait}
                alt="Woody Chang portrait"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutSection;
