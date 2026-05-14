import AboutSection from '../components/AboutSection';
import ChatWidget from '../components/ChatWidget';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import Navbar from '../components/Navbar';
import SectionGroup from '../components/SectionGroup';
import WorkExperienceSection from '../components/WorkExperienceSection';
import {
  agentSections,
  deepLearningSections,
  education,
  introStats,
  marqueeItems,
  socialLinks,
  workExperience,
} from '../data/content';

function HomePage() {
  return (
    <div style={{ backgroundColor: '#181816' }}>
      <Navbar />
      <main>
        <Hero />
        <Marquee items={marqueeItems} />
        <AboutSection stats={introStats} />
        <WorkExperienceSection jobs={workExperience} education={education} />
        <SectionGroup
          id="projects"
          kicker="Chapter 01"
          title="Deep Learning Projects"
          description="End-to-end ML work in language and vision: training, evaluation, and reproducible code. These are model-building projects built around datasets, experiments, and results."
          sections={deepLearningSections}
          theme="light"
        />
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
      <ChatWidget />
    </div>
  );
}

export default HomePage;
