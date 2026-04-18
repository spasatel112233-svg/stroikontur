export default function CompanyCard({ title, text, meta }) {
  return (
    <article className="card companyCard">
      <div className="companyBadge">Компания</div>
      <h3>{title}</h3>
      <p>{text}</p>
      <div className="metaLine">{meta}</div>
      <div className="cardActions pushBottom">
        <a className="btn btn-ghost" href="/companies">Профиль</a>
        <a className="btn btn-primary" href="/request">Связаться</a>
      </div>
    </article>
  );
}
