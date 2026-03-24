import LabelPill from './ui/LabelPill';

function getItemKind(item) {
  const hasCodeLink = Boolean(item.githubHref) || item.href.includes('github.com');
  const hasArticleLink = item.href.includes('hackmd.io');

  if (hasCodeLink && hasArticleLink) {
    return 'Article + Code';
  }

  if (hasArticleLink) {
    return 'Article';
  }

  return 'Project';
}

function ArticleCard({ item }) {
  const hasGithubLink = Boolean(item.githubHref);
  const kindLabel = getItemKind(item);

  return (
    <article className="group border-b border-black/15 py-6 first:border-t first:border-black/15 hover:bg-black/[0.02] hover:px-4">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
        <div className="flex-1">
          <div className="mb-3 flex flex-wrap gap-2">
            <LabelPill className="bg-[#f7f7f7]">{kindLabel}</LabelPill>
          </div>

          <a className="inline-block" href={item.href} target="_blank" rel="noreferrer">
            <h4 className="text-lg font-bold uppercase transition group-hover:underline sm:text-2xl">
              {item.title}
            </h4>
          </a>

          <p className="mt-2 text-[0.82rem] font-medium leading-6 text-black/55 sm:text-sm">
            {item.meta}
          </p>

          <p className="mt-4 max-w-4xl text-[0.98rem] leading-7 text-black/72 sm:text-base">
            {item.description}
          </p>
        </div>

        <div className="flex shrink-0 items-start">
          {hasGithubLink ? (
            <a
              className="inline-flex min-w-[132px] justify-center border border-black bg-black px-4 py-2.5 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-black"
              href={item.githubHref}
              target="_blank"
              rel="noreferrer"
            >
              {item.githubLabel}
            </a>
          ) : (
            <a
              className="inline-flex min-w-[132px] justify-center border border-black px-4 py-2.5 text-[0.72rem] font-bold uppercase tracking-[0.14em] transition hover:-translate-y-0.5 hover:bg-black hover:text-white"
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
