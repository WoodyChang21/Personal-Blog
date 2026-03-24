import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import Navbar from '../components/Navbar';
import SectionGroup from '../components/SectionGroup';
import {
  agentSections,
  deepLearningSections,
  introStats,
  marqueeItems,
  socialLinks,
} from '../data/content';

function HomePage() {
  return (
    <div className="bg-white pb-8">
      <Navbar />
      <main className="space-y-0">
        <Hero />
        <Marquee items={marqueeItems} />
        <AboutSection stats={introStats} />
        <SectionGroup
          id="projects"
          kicker="Chapter 01"
          title="Deep Learning Projects"
          description="End-to-end ML work in language and vision: training, evaluation, and reproducible code. These are model-building projects built around datasets, experiments, and results."
          sections={deepLearningSections}
          theme="light"
        />
        <div className="shell border-b-2 border-black bg-black py-1.5" aria-hidden="true" />
        <SectionGroup
          id="agents"
          kicker="Chapter 02"
          title="AI Agent Systems"
          description="This is system-building: orchestration, tool use, memory, retrieval, evaluation, and production patterns across MCP, LangGraph, Semantic Kernel, and prompt engineering."
          sections={agentSections}
          theme="dark"
        />
      </main>
      <Footer socialLinks={socialLinks} />
    </div>
  );
}

export default HomePage;
