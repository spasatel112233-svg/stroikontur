import Link from 'next/link';
import HeroVisual from './HeroVisual';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-hero card">
        <div className="footer-hero-copy">
          <span className="page-tag page-tag-light">О платформе</span>
          <h3 className="footer-hero-title">СтройКонтур соединяет заказчиков, подрядчиков, специалистов, компании и документы в одном деловом интерфейсе</h3>
          <p className="footer-text footer-text-wide">Низ сайта усилен широким визуальным блоком, чтобы зона контактов и информации о платформе не выглядела пустой. Здесь можно продолжить маршрут: оставить заявку, перейти к документам или связаться с поддержкой.</p>
          <div className="hero-actions"><Link href="/request" className="btn btn-primary">Оставить заявку</Link><Link href="/documents" className="btn btn-secondary">Документы</Link></div>
        </div>
        <div className="footer-hero-visual"><HeroVisual variant="company" compact /></div>
      </div>
      <div className="container footer-grid"><div><div className="brand footer-brand footer-brand-strong"><span className="brand-mark brand-mark-logo"><span className="brand-letter">СК</span></span><span>СтройКонтур</span></div><p className="footer-text">Платформа для заказов, подрядов, специалистов, компаний, документов и спорных ситуаций в строительстве.</p></div><div><h4 className="footer-title">Платформа</h4><div className="footer-links"><Link href="/orders">Заказы / Подряды</Link><Link href="/specialists">Специалисты</Link><Link href="/companies">Компании</Link><Link href="/documents">Документы</Link></div></div><div><h4 className="footer-title">Сервисы</h4><div className="footer-links"><Link href="/disputes">Споры</Link><Link href="/request">Оставить заявку</Link><Link href="/login">Войти</Link><Link href="/register">Регистрация</Link></div></div><div><h4 className="footer-title">Контакты</h4><div className="footer-links"><a href="mailto:info@stroikontur.ru">info@stroikontur.ru</a><a href="tel:+79990000000">+7 (999) 000-00-00</a><Link href="/request">О платформе</Link><Link href="/request?mode=support">Поддержка</Link></div></div></div>
      <div className="container footer-bottom"><span>© СтройКонтур</span><div className="footer-bottom-links"><Link href="/request">Политика конфиденциальности</Link><Link href="/request">Пользовательское соглашение</Link></div></div>
    </footer>
  );
}
