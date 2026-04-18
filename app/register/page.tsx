import Link from 'next/link';

export default function RegisterPage() {
  return (
    <main className="page-shell">
      <div className="container">
        <div className="auth-layout">
          <section className="auth-panel">
            <span className="badge badge--dark">Регистрация</span>
            <h1 className="page-title" style={{ color: 'white', fontSize: 56 }}>Создайте профиль и начните работать с платформой</h1>
            <p className="page-lead" style={{ color: 'rgba(255,255,255,0.8)' }}>Размещайте заказы, ищите подрядчиков и специалистов, работайте с документами и развивайте профиль компании.</p>
            <div className="section" style={{ display: 'grid', gap: 12 }}>
              <div className="info-card" style={{ background: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.12)', color: 'white' }}><h3 style={{ color: 'white' }}>Заказы и отклики</h3><p style={{ color: 'rgba(255,255,255,0.78)' }}>Размещайте задания и быстро получайте отклики от исполнителей.</p></div>
              <div className="info-card" style={{ background: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.12)', color: 'white' }}><h3 style={{ color: 'white' }}>Документы и споры</h3><p style={{ color: 'rgba(255,255,255,0.78)' }}>Получайте шаблоны документов и готовые сценарии действий по спорным ситуациям.</p></div>
            </div>
          </section>
          <section className="auth-card">
            <h1 className="page-title" style={{ fontSize: 44 }}>Регистрация</h1>
            <p className="page-lead" style={{ fontSize: 18 }}>Создайте аккаунт для работы с платформой.</p>
            <div style={{ display: 'grid', gap: 12, marginTop: 24 }}>
              <select className="select"><option>Выберите роль</option><option>Заказчик</option><option>Подрядчик</option><option>Специалист</option><option>Компания</option></select>
              <input className="input" placeholder="Имя / Компания" />
              <input className="input" placeholder="Email" />
              <input className="input" placeholder="Пароль" />
              <Link href="#" className="btn btn--primary" style={{ width: '100%' }}>Зарегистрироваться</Link>
              <div className="footer-note" style={{ textAlign: 'center' }}>Уже есть аккаунт? <Link href="/login" className="link-accent">Войти</Link></div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
