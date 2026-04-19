import Link from 'next/link';

const nav = [
  ['Заказы / Подряды', '/orders'],
  ['Тендеры', '/documents'],
  ['Специалисты', '/specialists'],
  ['Компании', '/companies'],
  ['Документы', '/documents'],
  ['Споры', '/disputes']
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand">
          <span className="brand-mark brand-mark-logo" aria-hidden="true">
            <span className="brand-frame" />
            <span className="brand-letter">СК</span>
          </span>
          <span>СтройКонтур</span>
        </Link>

        <nav className="nav">
          {nav.map(([label, href]) => (
            <Link key={href + label} href={href}>{label}</Link>
          ))}
        </nav>

        <div className="header-actions">
          <Link href="/login" className="btn btn-header-secondary">Войти</Link>
          <Link href="/register" className="btn btn-dark">Регистрация</Link>
          <Link href="/request" className="btn btn-primary btn-header-primary">Оставить заявку</Link>
        </div>
      </div>
    </header>
  );
}
