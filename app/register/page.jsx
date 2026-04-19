import Link from 'next/link';
import FormPage from '@/components/FormPage';

export default function RegisterPage() {
  return (
    <main className="page">
      <div className="container">
        <section className="split-page" style={{ marginTop: 20 }}>
          <div className="split-side card">
            <span className="page-tag" style={{ color: '#ffd8b3', borderColor: 'rgba(255,255,255,.15)', background: 'rgba(255,255,255,.08)' }}>Регистрация</span>
            <h1 className="section-title" style={{ color: 'white', marginTop: 18 }}>Создайте аккаунт для работы с платформой</h1>
            <p className="section-text" style={{ color: 'rgba(255,255,255,.78)' }}>После регистрации можно размещать заказы, вести профиль компании или специалиста, работать с документами и получать входящие запросы.</p>
            <ul>
              <li>Размещение заказов и откликов</li>
              <li>Профиль специалиста или компании</li>
              <li>Документы, споры и рабочие формы</li>
            </ul>
          </div>
          <div className="form-shell card">
            <span className="page-tag">Регистрация</span>
            <h2 className="section-title" style={{ marginTop: 16 }}>Регистрация</h2>
            <p className="section-text">Создайте аккаунт для работы с платформой.</p>
            <div className="form-grid" style={{ marginTop: 20 }}>
              <div className="full select-wrap"><select defaultValue=""><option value="" disabled>Роль на платформе</option><option>Заказчик</option><option>Подрядчик</option><option>Специалист</option><option>Компания</option></select></div>
              <div className="full input"><input placeholder="Имя / компания" /></div>
              <div className="full input"><input placeholder="Email" /></div>
              <div className="full input"><input placeholder="Пароль" type="password" /></div>
            </div>
            <div className="form-footer"><button className="btn btn-primary">Зарегистрироваться</button></div>
            <p className="footer-note">Уже есть аккаунт? <Link href="/login" style={{ color: 'var(--accent-dark)', fontWeight: 800 }}>Войти</Link></p>
          </div>
        </section>
      </div>
    </main>
  );
}
