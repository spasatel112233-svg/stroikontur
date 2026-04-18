import Link from 'next/link';

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container site-header__row">
        <Link href="/" className="brand">
          <span className="brand-mark" />
          <span>СтройКонтур</span>
        </Link>

        <nav className="nav-links">
          <Link href="/orders">Заказы / Подряды</Link>
          <Link href="/tenders">Тендеры</Link>
          <Link href="/specialists">Специалисты</Link>
          <Link href="/companies">Компании</Link>
          <Link href="/documents">Документы</Link>
          <Link href="/disputes">Споры</Link>
        </nav>

        <div className="nav-actions">
          <Link href="/login" className="btn btn--small">Войти</Link>
          <Link href="/register" className="btn btn--dark btn--small">Регистрация</Link>
          <Link href="/request" className="btn btn--primary btn--header">Оставить заявку</Link>
        </div>
      </div>
    </header>
  );
}
