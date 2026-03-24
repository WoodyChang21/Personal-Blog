import { useState } from 'react';
import { navigationLinks } from '../data/content';
import ActionButton from './ui/ActionButton';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="shell sticky top-0 z-50">
      <nav className="border-b-2 border-black bg-white/95 backdrop-blur">
        <div className="page-padding flex flex-wrap items-center justify-between gap-4 py-5">
          <a className="font-display text-2xl uppercase tracking-[-0.06em]" href="#top">
            Woody Chang
          </a>

          <button
            type="button"
            className="inline-flex border-2 border-black bg-white px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] md:hidden"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            Menu
          </button>

          <div className="hidden items-center gap-8 md:flex">
            <div className="flex items-center gap-6 text-[0.84rem] font-bold uppercase tracking-[0.12em]">
              {navigationLinks.map((link) => (
                <a
                  key={link.label}
                  className="transition hover:underline"
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noreferrer' : undefined}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <ActionButton
              href="https://github.com/WoodyChang21"
              target="_blank"
              rel="noreferrer"
            >
              GitHub Profile
            </ActionButton>
          </div>

          {isMenuOpen ? (
            <div className="flex w-full flex-col gap-4 border-t-2 border-black pt-4 md:hidden">
              <div className="flex flex-col gap-3 text-sm font-bold uppercase tracking-[0.12em]">
                {navigationLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noreferrer' : undefined}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <ActionButton
                className="w-full"
                href="https://github.com/WoodyChang21"
                target="_blank"
                rel="noreferrer"
              >
                GitHub Profile
              </ActionButton>
            </div>
          ) : null}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
