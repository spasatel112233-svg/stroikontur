export default function FindSpecialistPage() {
  return (
    <main className="pageShell">
      <div className="shell formWrap twoColumnForm">
        <div className="sideInfoPanel darkPanel">
          <span className="eyebrow">Найти специалиста</span>
          <h1>Опишите, какой специалист нужен на ваш объект</h1>
          <p>Укажите направление, регион, формат работы и задачу — мы подготовим запрос под нужного исполнителя.</p>
        </div>
        <div className="card formCard">
          <span className="eyebrow">Поиск специалиста</span>
          <h2>Параметры запроса</h2>
          <div className="formGrid formGrid-2">
            <input className="field" placeholder="Ваше имя / компания" />
            <input className="field" placeholder="Телефон" />
            <input className="field" placeholder="Email" />
            <input className="field" placeholder="Страна" />
            <input className="field" placeholder="Город / регион" />
            <select className="field selectField"><option>Нужная специальность</option></select>
            <select className="field selectField"><option>Формат работы</option></select>
            <input className="field" placeholder="Опыт / квалификация" />
            <textarea className="field textarea field-span-2" placeholder="Краткое описание задачи" />
          </div>
          <button className="btn btn-primary btn-block topGap">Найти специалиста</button>
        </div>
      </div>
    </main>
  );
}
