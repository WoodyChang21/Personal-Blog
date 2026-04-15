import CategoryRow from './CategoryRow';
import SectionHeader from './SectionHeader';

function SectionGroup({ id, kicker, title, description, sections, theme = 'light' }) {
  return (
    <section id={id} style={{ width: '100%' }}>
      <SectionHeader kicker={kicker} title={title} description={description} theme={theme} />

      <div>
        {sections.map((section) => (
          <CategoryRow key={section.title} section={section} theme={theme} />
        ))}
      </div>
    </section>
  );
}

export default SectionGroup;
