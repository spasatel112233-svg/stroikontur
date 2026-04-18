export default function OrderCard({ tag, title, text, meta }) {
  return (
    <article className="card orderCard">
      <span className="miniTag">{tag}</span>
      <h3>{title}</h3>
      <p>{text}</p>
      <div className="metaLine">{meta}</div>
      <div className="cardActions pushBottom">
        <a className="btn btn-ghost" href="/orders">Подробнее</a>
        <a className="btn btn-primary" href="/orders/create">Откликнуться</a>
      </div>
    </article>
  );
}
