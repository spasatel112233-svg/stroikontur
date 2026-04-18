export default function DisputeCard({ title, text }) {
  return (
    <article className="card disputeCard">
      <span className="miniTag">Ситуация</span>
      <h3>{title}</h3>
      <p>{text}</p>
      <a className="linkAction pushBottom" href="/disputes">Разобрать</a>
    </article>
  );
}
