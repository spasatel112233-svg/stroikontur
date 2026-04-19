import HeroVisual from './HeroVisual';

export default function PageHero({ tag, title, text, actions, visual = 'site' }) {
  return (
    <section className="page-hero card">
      <div className="page-hero-copy">
        {tag ? <span className="page-tag">{tag}</span> : null}
        <h1 className="section-title section-title-hero">{title}</h1>
        <p className="section-text section-text-hero">{text}</p>
        {actions ? <div className="hero-actions">{actions}</div> : null}
      </div>
      <div className="page-hero-visual">
        <HeroVisual variant={visual} />
      </div>
    </section>
  );
}
