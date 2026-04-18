export default function RequestPage() {
  return (
    <main className="pageShell">
      <div className="shell formWrap centeredForm">
        <div className="card formCard largeForm">
          <span className="eyebrow">Заявка на платформу</span>
          <h1>Оставить заявку</h1>
          <p>Оставьте информацию о себе и задаче. Мы поможем найти специалиста, подрядчика, компанию, материалы, технику или подходящий объект.</p>
          <div className="formGrid formGrid-2">
            <select className="field selectField field-span-2"><option>Кто вы?</option></select>
            <input className="field field-span-2" placeholder="Имя / Компания" />
            <input className="field" placeholder="Телефон" />
            <input className="field" placeholder="Email" />
            <input className="field" placeholder="Страна" />
            <input className="field" placeholder="Город / регион" />
            <select className="field selectField field-span-2"><option>Что вы ищете?</option></select>
            <textarea className="field textarea field-span-2" placeholder="Кратко опишите задачу" />
          </div>
          <button className="btn btn-primary btn-block topGap">Отправить заявку</button>
        </div>
      </div>
    </main>
  );
}
