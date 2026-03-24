import ArticleCard from './ArticleCard';

function CategoryRow({ section }) {
  return (
    <div className="grid border-b-2 border-black last:border-b-0 lg:grid-cols-[0.8fr_1.2fr]">
      <div className="flex flex-col justify-between gap-10 border-b-2 border-black bg-white px-4 py-12 sm:px-6 lg:border-b-0 lg:border-r-2 lg:px-10">
        <div>
          <p className="mb-4 font-display text-sm uppercase tracking-[0.14em] opacity-85">
            {section.label}
          </p>
          <h3 className="display-title text-[clamp(2.2rem,4vw,3.2rem)]">
            {section.title}
          </h3>
        </div>

        <p className="max-w-md text-lg leading-8 text-black/72">{section.description}</p>
      </div>

      <div className="bg-white px-4 py-10 sm:px-6 lg:px-10 lg:py-12">
        {section.items.map((item) => (
          <ArticleCard key={item.title} item={item} />
        ))}
      </div>
    </div>
  );
}

export default CategoryRow;
