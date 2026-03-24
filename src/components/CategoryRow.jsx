import ArticleCard from './ArticleCard';

function CategoryRow({ section }) {
  return (
    <div className="grid border-b-2 border-black bg-[#fafafa] last:border-b-0 lg:grid-cols-[minmax(360px,0.72fr)_minmax(0,1.28fr)]">
      <div className="border-b-2 border-black bg-white lg:border-b-0 lg:border-r-2">
        <div className="page-padding flex h-full flex-col justify-between gap-10 py-12 lg:py-16">
          <div className="max-w-xl">
            <p className="mb-4 text-sm uppercase tracking-[0.18em] text-black/60">
              {section.label}
            </p>
            <h3 className="display-title text-[clamp(2.6rem,4.6vw,4.3rem)]">
              {section.title}
            </h3>
          </div>

          <p className="max-w-xl text-lg leading-8 text-black/72">{section.description}</p>
        </div>
      </div>

      <div className="bg-[#fcfcfc]">
        <div className="page-padding py-10 lg:py-14">
          <div className="bg-white">
            {section.items.map((item) => (
              <ArticleCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryRow;
