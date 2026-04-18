export default function RegisterPage() {
  return (
    <main className="pageShell">
      <div className="shell formWrap twoColumnForm registerPageWrap">
        <div className="sideInfoPanel accentPanel">
          <span className="eyebrow">Регистрация</span>
          <h1>Создайте аккаунт и начните работу на платформе</h1>
          <ul className="bulletList">
            <li>Размещение заказов и откликов</li>
            <li>Работа с документами и спорами</li>
            <li>Поиск специалистов и подрядчиков</li>
            <li>Профили компаний и исполнителей</li>
          </ul>
        </div>
        <div className="card formCard registerCard">
          <h2>Регистрация</h2>
          <p>Создайте аккаунт для работы с платформой.</p>
          <select className="field selectField"><option>Роль</option></select>
          <input className="field" placeholder="Имя / Компания" />
          <input className="field" placeholder="Email" />
          <input className="field" placeholder="Пароль" />
          <button className="btn btn-primary btn-block">Зарегистрироваться</button>
          <div className="formHint">Уже есть аккаунт? <a href="/login">Войти</a></div>
        </div>
      </div>
    </main>
  );
}
