import Link from 'next/link';
import { HeroConstructionVisual } from '../components/HeroConstructionVisual';

const roles = [
  ['Заказчики', 'Размещают объекты, заказы, подряды, тендеры, а также запросы на материалы, технику и специалистов.'],
  ['Подрядчики', 'Ищут заказы, объекты, субподряды, материалы, технику и специалистов для выполнения работ.'],
  ['Специалисты', 'Находят работу, объекты и подрядчиков, откликаются на предложения и показывают свой опыт.'],
  ['Компании', 'Ведут профиль, получают лиды, размещают заказы и вакансии, ищут подрядчиков и специалистов.']
];

const categories = ['Монолит', 'Фасады', 'Отделка', 'Электрика', 'Благоустройство', 'Опиловка', 'Вывоз мусора', 'Аренда техники'];
const orders = [
  {
    tag: 'Срочно',
    title: 'Фасадные работы на жилом комплексе',
    text: 'Нужен подрядчик на утепление и облицовку фасада. Старт работ — в ближайшие 10 дней.',
    meta: 'Турция · от 38 млн ₽ · 4 месяца'
  },
  {
    tag: 'Новый',
    title: 'Благоустройство дворовой территории',
    text: 'Требуются дорожки, озеленение, освещение, малые формы и работы по ливневой системе.',
    meta: 'Россия · от 11 млн ₽ · 45 дней'
  },
  {
    tag: 'VIP',
    title: 'Инженерные сети производственного корпуса',
    text: 'Ищем подрядчика на внутренние сети, вентиляцию, автоматику и пусконаладку.',
    meta: 'Казахстан · по договору · 2 этапа'
  }
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <div className="container">
        <section className="hero">
          <div className="hero__content">
            <span className="badge badge--dark">Строительная платформа</span>
            <h1>Единая платформа для заказов, подрядов, специалистов, компаний и документов</h1>
            <p>Помогаем находить исполнителей, размещать заказы, работать с документами и быстрее решать спорные вопросы по проектам.</p>
            <div className="button-row">
              <Link href="/orders/create" className="btn btn--primary">Разместить заказ</Link>
              <Link href="/documents" className="btn">Документы и споры</Link>
            </div>
            <div className="metrics-grid section" style={{ marginTop: 36 }}>
              <div className="stat-card"><div className="stat-card__value">1 250+</div><div className="stat-card__label">готовых документов</div></div>
              <div className="stat-card"><div className="stat-card__value">3 800+</div><div className="stat-card__label">пользователей</div></div>
              <div className="stat-card"><div className="stat-card__value">750+</div><div className="stat-card__label">разобранных споров</div></div>
              <div className="stat-card"><div className="stat-card__value">200+</div><div className="stat-card__label">проектов в работе</div></div>
            </div>
          </div>
          <div className="hero__visual">
            <HeroConstructionVisual />
          </div>
        </section>

        <section className="section surface-section surface-section--warm">
          <div className="section-header"><div><h2 className="section-title">Для кого платформа</h2></div></div>
          <div className="info-grid">
            {roles.map(([title, text]) => (
              <article key={title} className="info-card">
                <span className="badge badge--soft">Направление</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-header">
            <div>
              <h2 className="section-title">Категории работ</h2>
              <p className="section-copy">Широкий каталог работ: от монолита и фасадов до опиловки, вывоза мусора, аренды техники, инструментов и снабжения.</p>
            </div>
          </div>
          <div className="pills">
            {categories.map((item, index) => <span key={item} className={`pill ${index === 0 ? 'pill--active' : ''}`}>{item}</span>)}
          </div>
        </section>

        <section className="section">
          <div className="section-header">
            <div>
              <h2 className="section-title">Заказы / Подряды</h2>
              <p className="section-copy">Здесь можно размещать и находить заказы, подряды, субподряды, коммерческие объекты, работы по благоустройству, поставкам, аренде и обслуживанию территорий.</p>
            </div>
            <Link href="/orders" className="btn btn--primary btn--small">Все заказы</Link>
          </div>
          <div className="cards-grid">
            {orders.map((order) => (
              <article className="order-card" key={order.title}>
                <div className="order-card__top"><span className="badge badge--soft">{order.tag}</span></div>
                <h3>{order.title}</h3>
                <p>{order.text}</p>
                <div className="order-card__meta muted-copy" style={{ marginTop: 18 }}>{order.meta}</div>
                <div className="order-card__bottom">
                  <Link href="/orders" className="btn btn--small">Подробнее</Link>
                  <Link href="/request/order-response" className="btn btn--primary btn--small">Откликнуться</Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section surface-section surface-section--warm" style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 24 }}>
          <div>
            <span className="badge">Проекты и чертежи</span>
            <h2 className="section-title" style={{ marginTop: 18 }}>Загрузите проект или чертёж и получите наглядную визуализацию</h2>
            <p className="section-copy">Сервис помогает перевести рабочие материалы в понятный визуальный формат для презентации, согласования и обсуждения.</p>
            <div className="action-row">
              <Link href="/request/project-upload" className="btn btn--primary">Загрузить проект</Link>
              <Link href="/request/drawing-upload" className="btn">Загрузить чертёж</Link>
            </div>
          </div>
          <div className="card" style={{ padding: 0, overflow: 'hidden', minHeight: 340, background: 'linear-gradient(155deg,#eef2f8 0%,#f8f5ef 100%)' }}>
            <div className="svg-visual--fit" aria-hidden>
              <svg viewBox="0 0 700 360" width="100%" height="100%">
                <rect x="24" y="26" width="212" height="298" rx="26" fill="#fff" stroke="#d8e1ef" />
                <rect x="72" y="72" width="116" height="154" rx="18" fill="none" stroke="#ff7a00" strokeWidth="4" />
                <path d="M188 134h138c41 0 72 27 72 60 0 26-19 46-44 53" fill="none" stroke="#ff9e44" strokeWidth="4" strokeLinecap="round" />
                <line x1="392" y1="186" x2="580" y2="186" stroke="#ff8b19" strokeWidth="16" strokeLinecap="round" />
                <circle cx="512" cy="186" r="94" fill="#0d1f45" fillOpacity="0.06" />
                <circle cx="512" cy="186" r="56" fill="#0d1f45" fillOpacity="0.08" />
              </svg>
            </div>
          </div>
        </section>

        <section className="section" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 22 }}>
          <div className="surface-section surface-section--warm">
            <h2 className="section-title">Документы, споры и проекты</h2>
            <p className="section-copy">Раздел с претензиями, актами, КС-2, КС-3, договорами, уведомлениями, заявлениями, жалобами и документами для работы со спорными ситуациями между заказчиком и подрядчиком.</p>
            <div className="cards-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', marginTop: 20 }}>
              <article className="doc-card"><h3>Документы по заказам и подрядам</h3><p>Шаблоны договоров, актов, КС-2, КС-3, претензий и других документов для работы по строительным проектам.</p><div className="doc-card__meta" style={{ marginTop: 18 }}><Link href="/documents" className="doc-card__cta">Открыть документы</Link></div></article>
              <article className="doc-card"><h3>Споры</h3><p>Готовые сценарии действий и формы для работы с просрочкой оплаты, неподписанными актами и другими спорными ситуациями.</p><div className="doc-card__meta" style={{ marginTop: 18 }}><Link href="/disputes" className="doc-card__cta">Разобрать ситуацию</Link></div></article>
            </div>
          </div>
          <div className="surface-section surface-section--warm">
            <h2 className="section-title">Сметы и расчёты</h2>
            <p className="section-copy">Подготовка смет, расчётов и предварительная оценка рентабельности работ и участия в проектах.</p>
            <div className="action-row">
              <Link href="/estimates" className="btn btn--primary" style={{ width: '100%' }}>Рассчитать смету</Link>
              <Link href="/estimates" className="btn" style={{ width: '100%' }}>Проверить рентабельность</Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
