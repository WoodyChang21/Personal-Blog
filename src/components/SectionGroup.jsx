import { useState } from 'react';
import CategoryRow from './CategoryRow';
import SectionHeader from './SectionHeader';

function SectionGroup({ id, kicker, title, description, sections, theme = 'light' }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id={id} style={{ width: '100%' }}>
      <SectionHeader
        kicker={kicker}
        title={title}
        description={description}
        theme={theme}
        isExpanded={isExpanded}
        onToggle={() => setIsExpanded((v) => !v)}
        topicCount={sections.length}
      />

      {/* Subtopics — collapsible via CSS grid-template-rows */}
      <div className={`collapsible-grid${isExpanded ? ' is-expanded' : ''}`}>
        <div className="collapsible-inner">
          {sections.map((section) => (
            <CategoryRow key={section.title} section={section} theme={theme} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SectionGroup;
