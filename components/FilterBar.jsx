export default function FilterBar({ searchPlaceholder, selects = [], button = 'Найти' }) {
  return (
    <div className="filter-bar">
      <div className="search-input">
        <input placeholder={searchPlaceholder} />
      </div>
      {selects.map((item) => (
        <div className="select-wrap" key={item}>
          <select defaultValue="">
            <option value="" disabled>{item}</option>
            <option>{item}</option>
          </select>
        </div>
      ))}
      <button className="btn btn-primary filter-submit">{button}</button>
    </div>
  );
}
