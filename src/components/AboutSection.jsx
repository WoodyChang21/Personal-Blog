import portrait from '../assets/me.jpg';
import LabelPill from './ui/LabelPill';
import Panel from './ui/Panel';

function AboutSection({ stats }) {
  return (
    <section className="shell section-stack border-b-2 border-black bg-[#f4f4f4]" id="about">
      <div className="page-padding grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
        <div className="max-w-4xl">
          <span className="eyebrow mb-4">About</span>
          <h2 className="display-title text-[clamp(2.8rem,6vw,4.8rem)]">Who Am I?</h2>

          <div className="mt-6 space-y-5 text-lg leading-8">
            <p>
              I&apos;m an AI engineer and Master of Computer Engineering student at the
              University of Toronto, focused on building real-world intelligent systems. I
              care deeply about the how. How do we move beyond chat interfaces? How do we
              build agents that reliably reason, use tools, and operate in production? How
              do deep learning models actually learn meaningful representations?
            </p>
            <p className="text-black/75">
              My work sits at the intersection of multi-agent systems,
              retrieval-augmented generation (RAG), and deep learning. I&apos;ve designed
              production-grade AI systems, from multi-agent architectures with LangGraph
              and Semantic Kernel to scalable FastAPI backends serving real users, always
              with a focus on reliability, performance, and practical impact.
            </p>
            <p className="text-black/75">
              This site is not a portfolio. It&apos;s a living record of how I think,
              build, and iterate, documenting my journey through agent architecture, deep
              learning systems, and production AI engineering.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat) => (
              <Panel
                className="group bg-white p-5 transition duration-200 hover:-translate-y-1 hover:shadow-[10px_10px_0_0_#000]"
                key={stat.label}
              >
                <span className="font-display text-5xl leading-none">{stat.value}</span>
                <p className="mt-3 text-sm font-bold uppercase tracking-[0.14em]">
                  {stat.label}
                </p>
              </Panel>
            ))}
          </div>
        </div>

        <div className="flex items-start justify-center lg:justify-end">
          <div className="w-full max-w-[480px] space-y-4">
            <div className="flex flex-wrap gap-2">
              <LabelPill>University of Toronto</LabelPill>
              <LabelPill>M.Eng.</LabelPill>
              <LabelPill>Production AI</LabelPill>
            </div>

            <Panel className="overflow-hidden bg-white p-3 shadow-[14px_14px_0_0_#000]">
              <img
                className="aspect-[4/5] h-full w-full object-cover"
                src={portrait}
                alt="Woody Chang portrait"
              />
            </Panel>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
