import CategoryRow from './CategoryRow';
import SectionHeader from './SectionHeader';

function SectionGroup({ id, kicker, title, description, sections, theme }) {
  return (
    <section className="shell section-stack border-b-2 border-black" id={id}>
      <SectionHeader
        kicker={kicker}
        title={title}
        description={description}
        theme={theme}
      />

      <div className="grid">
        {sections.map((section) => (
          <CategoryRow key={section.title} section={section} />
        ))}
      </div>
    </section>
  );
}

export default SectionGroup;
