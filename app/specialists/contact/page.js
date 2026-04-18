export default function SpecialistContactPage() {
  return (
    <main className="pageShell">
      <div className="shell formWrap twoColumnForm">
        <div className="sideInfoPanel accentPanel">
          <span className="eyebrow">Связаться со специалистом</span>
          <h1>Запрос по специалисту</h1>
          <div className="contactPreview">
            <strong>Прораб / монолит</strong>
            <p>12 лет опыта · Россия / СНГ · Русский / Английский</p>
          </div>
          <p>Опишите объект, сроки, формат работы и дополнительные условия. Запрос будет оформлен в деловом виде.</p>
        </div>
        <div className="card formCard">
          <span className="eyebrow">Связаться</span>
          <h2>Ваш запрос</h2>
          <div className="formGrid formGrid-2">
            <input className="field" placeholder="Ваше имя / компания" />
            <input className="field" placeholder="Телефон" />
            <input className="field" placeholder="Email" />
            <input className="field" placeholder="Город / регион" />
            <input className="field field-span-2" placeholder="Что нужно выполнить" />
            <input className="field" placeholder="Сроки" />
            <input className="field" placeholder="Бюджет" />
            <textarea className="field textarea field-span-2" placeholder="Краткое описание задачи" />
          </div>
          <button className="btn btn-primary btn-block topGap">Отправить запрос</button>
        </div>
      </div>
    </main>
  );
}
