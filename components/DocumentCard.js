export default function DocumentCard({ title, text }) {
  return (
    <article className="card documentCard">
      <span className="miniTag">Документ</span>
      <h3>{title}</h3>
      <p>{text}</p>
      <a className="linkAction pushBottom" href="/documents">Открыть</a>
    </article>
  );
}
