export default function PageHero({ tag, title, text, actions }) {
  return (
    <section className="section section-soft">
      {tag ? <span className="page-tag">{tag}</span> : null}
      <h1 className="section-title" style={{ marginTop: 18 }}>{title}</h1>
      <p className="section-text">{text}</p>
      {actions ? <div className="hero-actions">{actions}</div> : null}
    </section>
  );
}
