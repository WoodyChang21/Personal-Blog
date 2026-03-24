function SectionHeader({ kicker, title, description, theme = 'light' }) {
  const isDark = theme === 'dark';

  return (
    <div
      className={`border-b-2 border-black px-4 py-14 sm:px-6 lg:px-10 lg:py-20 ${
        isDark ? 'bg-black text-white' : 'bg-white text-black'
      }`}
    >
      <span className="eyebrow mb-4">{kicker}</span>
      <h2 className="display-title text-[clamp(2.3rem,5vw,4.2rem)]">{title}</h2>
      <p className={`mt-5 max-w-4xl text-lg font-medium leading-8 ${isDark ? 'text-white/85' : 'text-black/75'}`}>
        {description}
      </p>
    </div>
  );
}

export default SectionHeader;
