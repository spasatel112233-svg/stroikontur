import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="brand footer-brand">
            <span className="brand-mark brand-mark-logo" aria-hidden="true">
              <span className="brand-frame" />
              <span className="brand-letter">СК</span>
            </span>
            <span>СтройКонтур</span>
          </div>
          <p className="footer-text">Платформа для заказов, подрядов, специалистов, компаний, документов и спорных ситуаций в строительстве. Подходит для России, СНГ и международных проектов.</p>
        </div>
        <div>
          <h4 className="footer-title">Платформа</h4>
          <div className="footer-links">
            <Link href="/orders">Заказы / Подряды</Link>
            <Link href="/specialists">Специалисты</Link>
            <Link href="/companies">Компании</Link>
            <Link href="/documents">Документы</Link>
          </div>
        </div>
        <div>
          <h4 className="footer-title">Сервисы</h4>
          <div className="footer-links">
            <Link href="/disputes">Споры</Link>
            <Link href="/request">Оставить заявку</Link>
            <Link href="/login">Войти</Link>
            <Link href="/register">Регистрация</Link>
          </div>
        </div>
        <div>
          <h4 className="footer-title">Контакты</h4>
          <div className="footer-links">
            <a href="mailto:info@stroikontur.ru">info@stroikontur.ru</a>
            <a href="tel:+79990000000">+7 (999) 000-00-00</a>
            <Link href="/request?mode=support">О платформе</Link>
            <Link href="/request?mode=support">Поддержка</Link>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© СтройКонтур</span>
        <div className="footer-bottom-links">
          <Link href="/request?mode=support">Политика конфиденциальности</Link>
          <Link href="/request?mode=support">Пользовательское соглашение</Link>
        </div>
      </div>
    </footer>
  );
}
