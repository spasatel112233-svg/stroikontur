export default function SectionHeading({ title, text, action }) {
  return (
    <div className="sectionHeading">
      <div>
        <h2>{title}</h2>
        {text ? <p>{text}</p> : null}
      </div>
      {action}
    </div>
  );
}
