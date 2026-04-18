import Link from 'next/link';
import { PageTitle } from '../../components/PageTitle';

const orders = [
  ['Срочно', 'Фасадные работы на жилом комплексе', 'Нужен подрядчик на фасад, утепление и облицовку. Старт работ — в ближайшие 10 дней.', 'Турция · от 38 млн ₽ · 4 месяца'],
  ['Новый', 'Благоустройство дворовой территории', 'Требуются дорожки, озеленение, освещение, малые формы и работы по ливневой системе.', 'Россия · от 11 млн ₽ · 45 дней'],
  ['VIP', 'Инженерные сети производственного корпуса', 'Ищем подрядчика на внутренние сети, вентиляцию, автоматику и пусконаладку.', 'Казахстан · по договору · 2 этапа']
];

export default function OrdersPage() {
  return (
    <main className="page-shell">
      <div className="container">
        <PageTitle
          title="Заказы / Подряды"
          lead="Здесь можно размещать и находить заказы, подряды, субподряды, коммерческие объекты, работы по благоустройству, поставкам, аренде и обслуживанию территорий."
          actions={<>
            <Link href="/orders/create" className="btn btn--primary">Разместить заказ</Link>
            <Link href="/request/find-specialist" className="btn">Найти подрядчика</Link>
          </>}
        />

        <section className="section">
          <div className="filters">
            <input className="input" placeholder="Что вы ищете: объект, подряд, вид работ, регион..." />
            <select className="select"><option>Страна</option></select>
            <select className="select"><option>Город / регион</option></select>
            <select className="select"><option>Категория</option></select>
            <select className="select"><option>Бюджет</option></select>
            <select className="select"><option>Сроки</option></select>
            <select className="select"><option>Статус</option></select>
            <button className="btn btn--primary">Найти</button>
          </div>
        </section>

        <section className="section">
          <div className="pills">
            <span className="pill pill--active">Все категории</span>
            <span className="pill">Монолит</span>
            <span className="pill">Фасады</span>
            <span className="pill">Электрика</span>
            <span className="pill">Благоустройство</span>
            <span className="pill">Опиловка</span>
            <span className="pill">Поставка материалов</span>
            <span className="pill">Аренда техники</span>
          </div>
        </section>

        <section className="section surface-section surface-section--warm" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 24 }}>
          <div>
            <div className="section-header">
              <div>
                <h2 className="section-title">Актуальные заказы</h2>
                <p className="section-copy">Подборка заказов и подрядов по строительству, благоустройству, инженерии и сервисным работам.</p>
              </div>
            </div>
            <div className="cards-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
              {orders.map(([tag, title, text, meta]) => (
                <article key={title} className="order-card">
                  <div className="order-card__top"><span className="badge badge--soft">{tag}</span></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <div className="order-card__meta muted-copy" style={{ marginTop: 18 }}>{meta}</div>
                  <div className="order-card__bottom">
                    <Link href="/request/order-response" className="btn btn--small">Подробнее</Link>
                    <Link href="/request/order-response" className="btn btn--primary btn--small">Откликнуться</Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="card" style={{ padding: 0, overflow: 'hidden', background: 'linear-gradient(160deg,#10204a,#061127)', minHeight: 420 }}>
            <div className="svg-visual--fit" aria-hidden>
              <svg viewBox="0 0 600 420" width="100%" height="100%">
                <rect width="600" height="420" fill="transparent"/>
                <rect x="210" y="184" width="118" height="176" rx="14" fill="#10204a" stroke="#2a3b67" />
                <rect x="332" y="214" width="70" height="146" rx="14" fill="#12254b" />
                <line x1="144" y1="116" x2="420" y2="116" stroke="#dbe4f0" strokeOpacity="0.22" strokeWidth="8" strokeLinecap="round" />
                <line x1="334" y1="116" x2="398" y2="162" stroke="#dbe4f0" strokeOpacity="0.28" strokeWidth="5" strokeLinecap="round" />
                <line x1="334" y1="116" x2="302" y2="284" stroke="#dbe4f0" strokeOpacity="0.24" strokeWidth="5" strokeLinecap="round" />
                <line x1="252" y1="116" x2="252" y2="374" stroke="#dbe4f0" strokeOpacity="0.22" strokeWidth="6" strokeLinecap="round" />
                <rect x="40" y="304" width="520" height="74" rx="20" fill="#0e1b3b" opacity="0.45" />
                <rect x="72" y="338" width="252" height="16" rx="8" fill="#ff7a00" opacity="0.85" />
                <rect x="72" y="314" width="132" height="12" rx="6" fill="#fff" opacity="0.18" />
              </svg>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
