export default function CreateOrderPage() {
  return (
    <main className="pageShell">
      <div className="shell formWrap twoColumnForm">
        <div className="sideInfoPanel darkPanel">
          <span className="eyebrow">Размещение заказа</span>
          <h1>Опубликуйте заказ и получите отклики исполнителей</h1>
          <p>Опишите объект, вид работ, сроки и бюджет. Платформа поможет показать заказ подходящим подрядчикам и специалистам.</p>
          <ul className="bulletList light">
            <li>Коммерческие и подрядные работы</li>
            <li>Субподряды и сервисные задачи</li>
            <li>Материалы, техника, специалисты</li>
          </ul>
        </div>
        <div className="card formCard">
          <span className="eyebrow">Разместить заказ</span>
          <h2>Данные по объекту</h2>
          <div className="formGrid formGrid-2">
            <input className="field" placeholder="Ваше имя / компания" />
            <input className="field" placeholder="Телефон" />
            <input className="field" placeholder="Email" />
            <input className="field" placeholder="Страна" />
            <input className="field" placeholder="Город / регион" />
            <select className="field selectField"><option>Категория работ</option></select>
            <input className="field" placeholder="Бюджет" />
            <input className="field" placeholder="Сроки" />
            <input className="field field-span-2" placeholder="Что нужно выполнить" />
            <textarea className="field textarea field-span-2" placeholder="Краткое описание заказа" />
          </div>
          <button className="btn btn-primary btn-block topGap">Опубликовать заказ</button>
        </div>
      </div>
    </main>
  );
}
