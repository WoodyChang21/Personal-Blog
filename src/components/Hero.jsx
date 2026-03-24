import { heroActions } from '../data/content';
import ActionButton from './ui/ActionButton';
import LabelPill from './ui/LabelPill';

function Hero() {
  return (
    <header className="shell section-stack border-b-2 border-black" id="top">
      <div className="grid-paper relative overflow-hidden">
        <div className="page-padding relative min-h-[calc(100vh-74px)] py-16 sm:py-20 lg:py-28">
          <div className="max-w-[1600px]">
            <span className="eyebrow mb-4">Building systems that learn and systems that act</span>

            <div className="mb-8 flex flex-wrap items-end justify-between gap-6 border-b-2 border-black pb-6">
              <h1 className="display-title max-w-[9ch] text-[clamp(4rem,10vw,9rem)]">
                AI Journey
              </h1>
              <LabelPill className="hidden lg:inline-flex">Research / Build / Ship</LabelPill>
            </div>

            <div>
              <p className="max-w-4xl text-2xl font-medium leading-relaxed sm:text-3xl">
                A living log of engineering work from deep learning projects in language
                and vision to building LLM agents step by step.
              </p>
              <p className="mt-5 max-w-2xl text-base leading-7 text-black/70 sm:text-lg">
                Minimal write-ups. Reproducible code. Practical lessons.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                {heroActions.map((action) => (
                  <ActionButton
                    key={action.label}
                    href={action.href}
                    variant={action.variant === 'outline' ? 'outline' : 'solid'}
                  >
                    {action.label}
                  </ActionButton>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
