import { heroActions } from '../data/content';

function Hero() {
  return (
    <header className="shell section-stack border-b-2 border-black" id="top">
      <div className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-100"
          aria-hidden="true"
          style={{
            background:
              'linear-gradient(135deg, rgba(0,0,0,0.03) 0%, rgba(0,0,0,0) 45%), linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)',
            backgroundSize: '100% 100%, 32px 32px, 32px 32px',
          }}
        />

        <div className="relative">
          <span className="eyebrow mb-4">Building systems that learn and systems that act</span>
          <div className="mb-8 flex flex-wrap items-end justify-between gap-6 border-b-2 border-black pb-6">
            <h1 className="display-title max-w-[9ch] text-[clamp(3.4rem,9vw,7.5rem)]">
              AI Journey
            </h1>
            <div className="hidden rounded-full border-2 border-black px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] lg:block">
              Research / Build / Ship
            </div>
          </div>

          <p className="max-w-3xl text-xl font-medium leading-relaxed sm:text-2xl">
            A living log of engineering work from deep learning projects in language and
            vision to building LLM agents step by step.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-black/70 sm:text-lg">
            Minimal write-ups. Reproducible code. Practical lessons.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            {heroActions.map((action) => (
              <a
                key={action.label}
                className={`action-button ${
                  action.variant === 'outline'
                    ? 'action-button-outline'
                    : 'action-button-solid'
                }`}
                href={action.href}
              >
                {action.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
