import Link from 'next/link';

const links = [
  ['Заказы / Подряды', '/orders'],
  ['Тендеры', '/documents'],
  ['Специалисты', '/specialists'],
  ['Компании', '/companies'],
  ['Документы', '/documents'],
  ['Споры', '/disputes']
];

export default function Header() {
  return (
    <header className="siteHeader">
      <div className="shell navWrap">
        <Link href="/" className="brand">СтройКонтур</Link>
        <nav className="mainNav">
          {links.map(([label, href]) => (
            <Link key={href + label} href={href}>{label}</Link>
          ))}
        </nav>
        <div className="navActions">
          <Link href="/login" className="btn btn-ghost btn-sm">Войти</Link>
          <Link href="/register" className="btn btn-dark btn-sm">Регистрация</Link>
          <Link href="/request" className="btn btn-primary btn-sm headerCta">Оставить заявку</Link>
        </div>
      </div>
    </header>
  );
}
