function ArticleCard({ item }) {
  const hasGithubLink = Boolean(item.githubHref);

  return (
    <article className="group border-b border-black/20 py-6 first:border-t hover:bg-black/[0.03] hover:pl-4">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
        <div className="flex-1">
          <a className="inline-block" href={item.href} target="_blank" rel="noreferrer">
            <h4 className="text-lg font-bold uppercase transition group-hover:underline sm:text-xl">
              {item.title}
            </h4>
          </a>
          <p className="mt-2 text-[0.82rem] font-medium text-black/55 sm:text-sm">
            {item.meta}
          </p>
          <p className="mt-3 max-w-3xl text-[0.96rem] leading-7 text-black/72">
            {item.description}
          </p>
        </div>

        <div className="flex shrink-0 items-center">
          {hasGithubLink ? (
            <a
              className="inline-flex border border-black px-3 py-2 text-[0.72rem] font-bold uppercase tracking-[0.14em] transition hover:bg-black hover:text-white"
              href={item.githubHref}
              target="_blank"
              rel="noreferrer"
            >
              {item.githubLabel}
            </a>
          ) : (
            <a
              className="inline-flex border border-black px-3 py-2 text-[0.72rem] font-bold uppercase tracking-[0.14em] transition hover:bg-black hover:text-white"
              href={item.href}
              target="_blank"
              rel="noreferrer"
            >
              {item.githubLabel ?? 'Read Article'}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ArticleCard;
