import Link from 'next/link';
import HeroVisual from '@/components/HeroVisual';
const roles = [
  ['Заказчики', 'Публикуют объекты, подряды, тендеры и запросы на материалы, технику и специалистов для запуска работ без лишней переписки.'],
  ['Подрядчики', 'Находят объекты, этапы, субподряды и коммерческие задачи, получают понятную входную информацию и быстрее выходят на связь.'],
  ['Специалисты', 'Откликаются на объекты, показывают профиль, опыт и формат работы, получают прямые запросы от заказчиков и компаний.'],
  ['Компании', 'Ведут деловой профиль, получают входящие запросы, показывают направления работ, географию и опыт по объектам.']
];
const categories = ['Монолит', 'Фасады', 'Отделка', 'Электрика', 'Благоустройство', 'Опиловка', 'Вывоз мусора', 'Аренда техники'];
const orders = [
  { badge: 'Срочно', title: 'Фасадные работы на жилом комплексе', text: 'Нужен подрядчик на утепление, облицовку и устройство мокрого фасада. Старт работ в ближайшие десять дней, требуется команда с опытом по крупным объектам.', meta: 'Турция · от 38 млн ₽ · 4 месяца' },
  { badge: 'Новый', title: 'Благоустройство и малые формы', text: 'Требуются дорожки, озеленение, освещение, ливневая система и монтаж малых архитектурных форм. Нужен подрядчик под ключ с понятным графиком и комплектацией.', meta: 'Россия · от 9,5 млн ₽ · 45 дней' },
  { badge: 'VIP', title: 'Инженерные сети производственного корпуса', text: 'Ищем подрядчика на внутренние сети, вентиляцию, автоматику и пусконаладочные работы. Важно подтверждённое портфолио и готовность к двум этапам выполнения.', meta: 'Казахстан · по договору · 2 этапа' }
];
export default function HomePage() { return (
  <main className="page"><div className="container">
    <section className="hero-grid card">
      <div className="hero-copy">
        <span className="hero-tag">Строительная платформа</span>
        <h1 className="hero-title">Платформа для заказов, подрядов и специалистов</h1>
        <p className="hero-text">Размещайте заказы, находите подрядчиков, специалистов и компании, работайте с документами и быстрее решайте спорные вопросы по объектам.</p>
        <div className="hero-actions"><Link href="/orders/create" className="btn btn-primary">Разместить заказ</Link><Link href="/request?mode=contractor" className="btn btn-secondary">Найти подрядчика</Link></div>
        <div className="hero-stats">
          <div className="hero-stat"><div className="hero-stat-value">1 250+</div><div className="hero-stat-label">документов</div></div>
          <div className="hero-stat"><div className="hero-stat-value">3 800+</div><div className="hero-stat-label">пользователей</div></div>
          <div className="hero-stat"><div className="hero-stat-value">750+</div><div className="hero-stat-label">спорных кейсов</div></div>
          <div className="hero-stat"><div className="hero-stat-value">200+</div><div className="hero-stat-label">объектов</div></div>
        </div>
      </div><div className="hero-visual"><HeroVisual variant="hero" /></div>
    </section>
    <section className="section section-soft section-roles"><div className="section-header"><div><h2 className="section-title">Для кого платформа</h2><p className="section-text">Каждый раздел собран под понятный сценарий работы: размещение, поиск, документы, связь и сопровождение объекта.</p></div></div><div className="role-grid">{roles.map(([title, text]) => <div className="role-card card" key={title}><div className="role-accent" /><h3 className="card-subtitle">{title}</h3><p className="card-text">{text}</p></div>)}</div></section>
    <section className="section section-soft"><div className="section-header"><div><h2 className="section-title">Категории работ</h2><p className="section-text">Монолит, отделка, инженерия, благоустройство, поставки и техника — всё собрано в одном деловом каталоге без лишнего шума.</p></div></div><div className="pill-row">{categories.map((item, index) => <span className={`pill ${index===0?'pill-active':''}`} key={item}>{item}</span>)}</div></section>
    <section className="section"><div className="section-header"><div><h2 className="section-title">Заказы и подряды</h2><p className="section-text">Здесь публикуются коммерческие объекты, субподрядные этапы, поставки, аренда техники и задачи по благоустройству, демонтажу и эксплуатации.</p></div><Link href="/orders" className="btn btn-primary">Все заказы</Link></div>
      <div className="actions-grid actions-grid-wide homepage-orders-grid">
        <div className="order-grid order-grid-main homepage-order-grid-main">{orders.map((order) => <article className="order-card card" key={order.title}><span className="badge">{order.badge}</span><h3 className="card-subtitle card-title-compact">{order.title}</h3><p className="card-text">{order.text}</p><div className="meta">{order.meta}</div><div className="card-actions card-actions-bottom"><Link href="/orders" className="btn btn-secondary">Подробнее</Link><Link href="/orders/create" className="btn btn-primary">Откликнуться</Link></div></article>)}</div>
        <div className="visual-card card visual-card-tall homepage-side-card"><div className="side-note-card"><span className="page-tag">Быстрый подбор</span><h3 className="card-subtitle">Подрядчики, люди и заявки в одном потоке</h3><p className="card-text">Раздел помогает быстро перейти от объекта к подрядчику, специалисту, документу или следующему рабочему действию.</p><Link href="/request" className="btn btn-primary">Оставить заявку</Link></div><HeroVisual variant="orders" /></div>
      </div>
    </section>
    <section className="section"><div className="actions-grid homepage-bottom-grid"><div className="feature-card card feature-card-large"><span className="page-tag">Документы и споры</span><h2 className="section-title section-title-small">Рабочие документы, претензии и сопровождение объекта</h2><p className="section-text section-text-narrow">Шаблоны договоров, актов, КС-2, КС-3, претензий и других форм для повседневной работы с заказчиком, подрядчиком и внутренними задачами по объекту.</p><div className="hero-actions"><Link href="/documents" className="btn btn-secondary">Открыть документы</Link><Link href="/disputes" className="btn btn-primary">Разобрать спор</Link></div></div><div className="feature-card card feature-card-compact"><span className="page-tag">Сметы и расчёты</span><h3 className="card-subtitle">Предварительная оценка и подготовка к запуску</h3><p className="card-text">Подготовка смет, расчётов и первичной оценки рентабельности по объекту или этапу работ.</p><Link href="/request?mode=document" className="btn btn-primary">Оставить запрос</Link></div></div></section>
  </div></main>
)}
