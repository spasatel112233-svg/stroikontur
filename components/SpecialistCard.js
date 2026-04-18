export default function SpecialistCard({ initials, title, text, meta }) {
  return (
    <article className="card specialistCard">
      <div className="avatarCircle">{initials}</div>
      <h3>{title}</h3>
      <p>{text}</p>
      <div className="metaLine">{meta}</div>
      <div className="cardActions pushBottom">
        <a className="btn btn-ghost" href="/specialists">Подробнее</a>
        <a className="btn btn-primary" href="/specialists/contact">Связаться</a>
      </div>
    </article>
  );
}
