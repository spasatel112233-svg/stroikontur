import Link from 'next/link';
import HeroVisual from './HeroVisual';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top-band">
        <div className="container footer-top-shell">
          <div className="footer-top-copy">
            <span className="page-tag page-tag-light">СтройКонтур</span>
            <h3 className="footer-hero-title">Платформа, где заказы, люди, компании и документы собраны в одной деловой системе.</h3>
            <p className="footer-hero-text">Более строгая подача, понятная навигация, рабочие формы, визуалы по смыслу каждого раздела и сценарии под реальные строительные задачи.</p>
            <div className="hero-actions footer-hero-actions">
              <Link href="/request" className="btn btn-primary">Оставить заявку</Link>
              <Link href="/orders" className="btn btn-secondary">Открыть заказы</Link>
            </div>
          </div>
          <div className="footer-top-visual">
            <HeroVisual variant="preview" />
          </div>
        </div>
      </div>

      <div className="container footer-grid">
        <div>
          <div className="brand footer-brand">
            <span className="brand-mark brand-mark-logo"><span className="brand-letter">СК</span></span>
            <span>СтройКонтур</span>
          </div>
          <p className="footer-text">Международная строительная платформа для заказов, подрядов, специалистов, компаний, документов, смет и сопровождения спорных ситуаций.</p>
          <div className="footer-points">
            <span>Заказы и подряды</span>
            <span>Документы и споры</span>
            <span>Компании и специалисты</span>
          </div>
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
            <Link href="/request?mode=document">Получить документ</Link>
            <Link href="/request?mode=contractor">Найти подрядчика</Link>
            <Link href="/register">Регистрация</Link>
          </div>
        </div>
        <div>
          <h4 className="footer-title">Контакты</h4>
          <div className="footer-links">
            <a href="mailto:info@stroikontur.ru">info@stroikontur.ru</a>
            <a href="tel:+79990000000">+7 (999) 000-00-00</a>
            <Link href="/request?mode=support">Поддержка</Link>
            <Link href="/request">О платформе</Link>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© СтройКонтур · деловая платформа для строительного рынка</span>
        <div className="footer-bottom-links">
          <Link href="/request">Политика конфиденциальности</Link>
          <Link href="/request">Пользовательское соглашение</Link>
        </div>
      </div>
    </footer>
  );
}
