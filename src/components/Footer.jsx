import { useVisitorCount } from '../hooks/useVisitorCount';

function Footer({ socialLinks }) {
  const visitorCount = useVisitorCount();

  return (
    <footer className="shell border-b-2 border-black bg-black text-center text-white" id="contact">
      <div className="page-padding py-14 sm:py-16">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                className="font-display text-lg uppercase transition hover:underline sm:text-xl"
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="my-8">
            <p className="eyebrow mb-2 text-white">Total Visitors</p>
            <span className="font-display text-xl sm:text-2xl">{visitorCount}</span>
          </div>

          <p className="text-xs uppercase tracking-[0.14em] text-white/70">
            © 2025 Woody Chang. Built for documentation purposes.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
