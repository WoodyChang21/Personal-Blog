import portrait from '../assets/me.jpg';

function AboutSection({ stats }) {
  return (
    <section className="shell section-stack border-b-2 border-black bg-[#f4f4f4]" id="about">
      <div className="grid gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:py-24">
        <div>
          <span className="eyebrow mb-4">About</span>
          <h2 className="display-title text-[clamp(2.5rem,6vw,4.25rem)]">Who Am I?</h2>

          <p className="mt-6 max-w-3xl text-lg leading-8">
            I&apos;m an AI engineer and Master of Computer Engineering student at the
            University of Toronto, focused on building real-world intelligent systems. I
            care deeply about the how. How do we move beyond chat interfaces? How do we
            build agents that reliably reason, use tools, and operate in production? How
            do deep learning models actually learn meaningful representations?
          </p>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-black/75">
            My work sits at the intersection of multi-agent systems,
            retrieval-augmented generation (RAG), and deep learning. I&apos;ve designed
            production-grade AI systems, from multi-agent architectures with LangGraph
            and Semantic Kernel to scalable FastAPI backends serving real users, always
            with a focus on reliability, performance, and practical impact.
          </p>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-black/75">
            This site is not a portfolio. It&apos;s a living record of how I think,
            build, and iterate, documenting my journey through agent architecture, deep
            learning systems, and production AI engineering.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat) => (
              <article
                className="border-2 border-black bg-white p-5 transition duration-200 hover:-translate-y-1 hover:shadow-[8px_8px_0_0_#000]"
                key={stat.label}
              >
                <span className="font-display text-5xl leading-none">{stat.value}</span>
                <p className="mt-3 text-sm font-bold uppercase tracking-[0.14em]">
                  {stat.label}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="flex items-start justify-center lg:justify-end">
          <div className="relative w-full max-w-[420px]">
            <div className="absolute -left-4 -top-4 hidden h-full w-full border-2 border-black bg-white lg:block" />
            <img
              className="relative z-10 h-full w-full border-2 border-black object-cover shadow-[12px_12px_0_0_#000]"
              src={portrait}
              alt="Woody Chang portrait"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
