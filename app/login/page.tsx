import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="page-shell"><div className="container"><div className="auth-layout"><section className="auth-panel"><span className="badge badge--dark">Вход</span><h1 className="page-title" style={{ color: 'white', fontSize: 56 }}>Вход в личный кабинет</h1><p className="page-lead" style={{ color: 'rgba(255,255,255,0.8)' }}>Продолжайте работу с заказами, документами, специалистами и компанией.</p></section><section className="auth-card"><h1 className="page-title" style={{ fontSize: 44 }}>Войти</h1><div style={{ display: 'grid', gap: 12, marginTop: 24 }}><input className="input" placeholder="Email" /><input className="input" placeholder="Пароль" /><Link href="#" className="btn btn--primary" style={{ width: '100%' }}>Войти</Link><div className="footer-note" style={{ textAlign: 'center' }}>Нет аккаунта? <Link href="/register" className="link-accent">Регистрация</Link></div></div></section></div></div></main>
  );
}
