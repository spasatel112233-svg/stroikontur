import Link from 'next/link';
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top-band">
        <div>
          <span className="page-tag footer-band-tag">СтройКонтур</span>
          <h3 className="footer-band-title">Платформа для заказов, подрядов, документов и рабочих запросов</h3>
        </div>
        <Link href="/request" className="btn btn-primary">Оставить заявку</Link>
      </div>
      <div className="container footer-grid">
        <div>
          <div className="brand footer-brand"><span className="brand-mark brand-mark-logo"><span className="brand-letter">СК</span></span><span>СтройКонтур</span></div>
          <p className="footer-text">Платформа соединяет заказчиков, подрядчиков, специалистов и компании, помогает работать с документами и быстрее запускать объектные задачи.</p>
        </div>
        <div><h4 className="footer-title">Разделы</h4><div className="footer-links"><Link href="/orders">Заказы</Link><Link href="/specialists">Специалисты</Link><Link href="/companies">Компании</Link><Link href="/documents">Документы</Link></div></div>
        <div><h4 className="footer-title">Сервисы</h4><div className="footer-links"><Link href="/disputes">Споры</Link><Link href="/request">Заявка</Link><Link href="/login">Войти</Link><Link href="/register">Регистрация</Link></div></div>
        <div><h4 className="footer-title">Контакты</h4><div className="footer-links"><a href="mailto:info@stroikontur.ru">info@stroikontur.ru</a><a href="tel:+79990000000">+7 (999) 000-00-00</a><Link href="/request?mode=support">Поддержка</Link><Link href="/request">Связаться</Link></div></div>
      </div>
      <div className="container footer-bottom"><span>© СтройКонтур</span><div className="footer-bottom-links"><Link href="/request">Политика конфиденциальности</Link><Link href="/request">Пользовательское соглашение</Link></div></div>
    </footer>
  );
}
