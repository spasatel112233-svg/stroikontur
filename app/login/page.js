export default function LoginPage() {
  return (
    <main className="pageShell">
      <div className="shell formWrap centeredForm">
        <div className="card formCard registerCard">
          <h1>Вход</h1>
          <p>Введите данные аккаунта для доступа к платформе.</p>
          <input className="field" placeholder="Email" />
          <input className="field" placeholder="Пароль" type="password" />
          <button className="btn btn-primary btn-block">Войти</button>
          <div className="formHint">Нет аккаунта? <a href="/register">Регистрация</a></div>
        </div>
      </div>
    </main>
  );
}
