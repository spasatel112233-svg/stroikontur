import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="page">
      <div className="container">
        <section className="split-page" style={{ marginTop: 20 }}>
          <div className="split-side card">
            <span className="page-tag" style={{ color: '#ffd8b3', borderColor: 'rgba(255,255,255,.15)', background: 'rgba(255,255,255,.08)' }}>Вход</span>
            <h1 className="section-title" style={{ color: 'white', marginTop: 18 }}>Войдите в рабочий кабинет</h1>
            <p className="section-text" style={{ color: 'rgba(255,255,255,.78)' }}>Вход открывает доступ к заказам, документам, профилям и сохранённым действиям внутри платформы.</p>
          </div>
          <div className="form-shell card">
            <span className="page-tag">Вход</span>
            <h2 className="section-title" style={{ marginTop: 16 }}>Войти</h2>
            <p className="section-text">Введите данные своего аккаунта.</p>
            <div className="form-grid" style={{ marginTop: 20, gridTemplateColumns: '1fr' }}>
              <div className="input"><input placeholder="Email" /></div>
              <div className="input"><input placeholder="Пароль" type="password" /></div>
            </div>
            <div className="form-footer"><button className="btn btn-primary">Войти</button></div>
            <p className="footer-note">Нет аккаунта? <Link href="/register" style={{ color: 'var(--accent-dark)', fontWeight: 800 }}>Зарегистрироваться</Link></p>
          </div>
        </section>
      </div>
    </main>
  );
}
