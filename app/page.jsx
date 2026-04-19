import Link from 'next/link';
import HeroVisual from '@/components/HeroVisual';

const roles = [
  ['Заказчики', 'Размещают объекты, заказы, подряды, тендеры и запросы на материалы, технику и специалистов, получая понятный входящий поток откликов и деловых контактов.'],
  ['Подрядчики', 'Ищут заказы, объекты, субподряды, материалы и технику для выполнения работ, а также быстрее выходят на прямых заказчиков без лишней путаницы.'],
  ['Специалисты', 'Находят объекты и работодателей, показывают опыт, компетенции и откликаются на предложения по регионам, форматам работы и специализациям.'],
  ['Компании', 'Ведут профиль, получают входящие запросы и ищут подрядчиков, людей и ресурсы, усиливая доверие к себе через нормальную деловую подачу.']
];

const categories = ['Монолит', 'Фасады', 'Отделка', 'Электрика', 'Благоустройство', 'Опиловка', 'Вывоз мусора', 'Аренда техники'];

const orders = [
  {
    badge: 'Срочно',
    title: 'Фасадные работы на жилом комплексе',
    text: 'Нужен подрядчик на утепление, облицовку и устройство мокрого фасада. Важно быстрое подключение бригады, подтверждённый опыт и готовность выйти на площадку в ближайшие 10 дней.',
    meta: 'Турция · от 38 млн ₽ · 4 месяца'
  },
  {
    badge: 'Новый',
    title: 'Благоустройство и малые формы',
    text: 'Требуются дорожки, озеленение, освещение, ливневая система и монтаж малых архитектурных форм. Рассматриваются компании, способные закрыть весь объём под ключ и соблюдать сроки этапов.',
    meta: 'Россия · от 9,5 млн ₽ · 45 дней'
  },
  {
    badge: 'VIP',
    title: 'Инженерные сети производственного корпуса',
    text: 'Нужен подрядчик на внутренние сети, вентиляцию, автоматику и пусконаладочные работы с опытом промышленных объектов, полноценной командой и понятной исполнительной дисциплиной.',
    meta: 'Казахстан · по договору · 2 этапа'
  }
];

export default function HomePage() {
  return (
    <main className="page">
      <div className="container">
        <section className="hero-grid card">
          <div className="hero-copy">
            <span className="hero-tag">Строительная платформа</span>
            <h1 className="hero-title">Единая платформа для заказов, подрядов, специалистов, компаний и документов</h1>
            <p className="hero-text">Помогаем находить исполнителей, размещать заказы, вести работу с документами, быстрее закрывать спорные вопросы и собирать всю коммуникацию по объекту в одной деловой системе.</p>
            <div className="hero-actions">
              <Link href="/orders/create" className="btn btn-primary">Разместить заказ</Link>
              <Link href="/documents" className="btn btn-secondary">Документы и споры</Link>
            </div>
            <div className="hero-stats">
              <div className="hero-stat"><div className="hero-stat-value">1 250+</div><div className="hero-stat-label">готовых документов и шаблонов</div></div>
              <div className="hero-stat"><div className="hero-stat-value">3 800+</div><div className="hero-stat-label">активных пользователей платформы</div></div>
              <div className="hero-stat"><div className="hero-stat-value">750+</div><div className="hero-stat-label">разобранных спорных ситуаций</div></div>
              <div className="hero-stat"><div className="hero-stat-value">200+</div><div className="hero-stat-label">объектов в работе и подборе</div></div>
            </div>
          </div>
          <div className="hero-visual">
            <HeroVisual variant="hero" />
          </div>
        </section>

        <section className="section section-soft section-roles">
          <div className="section-header">
            <div>
              <h2 className="section-title">Для кого платформа</h2>
              <p className="section-text">Каждая роль получает свой понятный сценарий работы: размещение, поиск, документы, связь и сопровождение объекта.</p>
            </div>
          </div>
          <div className="role-grid">
            {roles.map(([title, text]) => (
              <div className="role-card card" key={title}>
                <div className="role-accent" />
                <h3 className="card-subtitle">{title}</h3>
                <p className="card-text">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section section-soft">
          <div className="section-header">
            <div>
              <h2 className="section-title">Категории работ</h2>
              <p className="section-text">Широкий каталог под стройку, подряд, эксплуатацию, материалы, технику и сервисные задачи по объектам.</p>
            </div>
          </div>
          <div className="pill-row">
            {categories.map((item, index) => (
              <span className={`pill ${index === 0 ? 'pill-active' : ''}`} key={item}>{item}</span>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-header">
            <div>
              <h2 className="section-title">Заказы / Подряды</h2>
              <p className="section-text">Здесь можно размещать и находить заказы, подряды, субподряды, коммерческие объекты, работы по благоустройству, поставкам, аренде техники и обслуживанию территорий без ощущения пустого каталога или перегруженного шаблона.</p>
            </div>
            <Link href="/orders" className="btn btn-primary">Все заказы</Link>
          </div>
          <div className="actions-grid actions-grid-wide">
            <div className="order-grid order-grid-main">
              {orders.map((order) => (
                <article className="order-card card" key={order.title}>
                  <span className="badge">{order.badge}</span>
                  <h3 className="card-subtitle card-title-compact">{order.title}</h3>
                  <p className="card-text">{order.text}</p>
                  <div className="meta">{order.meta}</div>
                  <div className="card-actions card-actions-bottom">
                    <Link href="/orders" className="btn btn-secondary">Подробнее</Link>
                    <Link href="/orders/create" className="btn btn-primary">Откликнуться</Link>
                  </div>
                </article>
              ))}
            </div>
            <div className="visual-card card visual-card-tall">
              <HeroVisual variant="orders" />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="actions-grid">
            <div className="card card-split" style={{ overflow: 'hidden', minHeight: '100%' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '100%' }}>
                <div className="split-side" style={{ borderRadius: 0 }}>
                  <span className="page-tag page-tag-light">Проекты и чертежи</span>
                  <h2 className="section-title split-title">Загрузите проект или чертёж и получите наглядную визуализацию</h2>
                  <p className="section-text split-text">Рабочие материалы переводятся в понятный визуальный формат для согласования, обсуждения и презентации проекта.</p>
                  <div className="hero-actions">
                    <Link href="/request?mode=project" className="btn btn-primary">Загрузить проект</Link>
                    <Link href="/request?mode=drawing" className="btn btn-secondary">Загрузить чертёж</Link>
                  </div>
                </div>
                <div className="visual-card" style={{ borderRadius: 0 }}><HeroVisual variant="site" /></div>
              </div>
            </div>
            <div className="info-grid" style={{ gridTemplateColumns: '1fr' }}>
              <div className="feature-card card">
                <h3 className="card-subtitle">Документы, споры и сопровождение объекта</h3>
                <p className="card-text">Шаблоны договоров, актов, КС-2, КС-3, претензий и других документов для работы с заказчиком и подрядчиком.</p>
                <div className="card-actions"><Link href="/documents" className="btn btn-secondary">Открыть документы</Link><Link href="/disputes" className="btn btn-primary">Решить спор</Link></div>
              </div>
              <div className="feature-card card">
                <h3 className="card-subtitle">Сметы и расчёты</h3>
                <p className="card-text">Подготовка смет, рабочих расчётов и предварительная оценка рентабельности работ и участия в проекте.</p>
                <div className="card-actions"><Link href="/documents" className="btn btn-primary">Рассчитать смету</Link></div>
              </div>
            </div>
          </div>
        </section>


        <section className="section">
          <div className="actions-grid actions-grid-wide">
            <div className="card card-split card-split-video" style={{ overflow: 'hidden', minHeight: '100%' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1.04fr .96fr', minHeight: '100%' }}>
                <div className="split-side" style={{ borderRadius: 0 }}>
                  <span className="page-tag page-tag-light">Видео и визуальная подача</span>
                  <h2 className="section-title split-title">Качественный визуальный блок вместо пустого или ломающегося видео</h2>
                  <p className="section-text split-text">Мы оставляем сильную визуальную подачу, но убираем риск пустого или битого видео. Блок показывает качественный превью-визуал с подписью, акцентом и безопасным fallback.</p>
                  <div className="split-list">
                    <div>• подходит для главной страницы и презентации платформы</div>
                    <div>• не создаёт пустой экран и не ломает вёрстку</div>
                    <div>• смотрится как дорогой сервисный элемент</div>
                  </div>
                  <div className="hero-actions">
                    <Link href="/request" className="btn btn-primary">Оставить заявку</Link>
                    <Link href="/companies" className="btn btn-secondary">Посмотреть компании</Link>
                  </div>
                </div>
                <div className="visual-card" style={{ borderRadius: 0 }}><HeroVisual variant="video" /></div>
              </div>
            </div>
            <div className="info-grid" style={{ gridTemplateColumns: '1fr' }}>
              <div className="feature-card card">
                <h3 className="card-subtitle">Специалисты, компании и техника</h3>
                <p className="card-text">Каждый блок получает свой тематический визуал и более длинное описание, чтобы карточки выглядели плотнее, читались лучше и не создавали ощущение пустоты.</p>
                <div className="card-actions"><Link href="/specialists" className="btn btn-secondary">Открыть специалистов</Link><Link href="/companies" className="btn btn-primary">Открыть компании</Link></div>
              </div>
              <div className="feature-card card">
                <h3 className="card-subtitle">Документы, споры и расчёты</h3>
                <p className="card-text">Деловая подача усиливается за счёт графита, тёмно-синих тонов, более мягких форм и визуалов по смыслу: документы, переговоры, объект, расчёты и сопровождение.</p>
                <div className="card-actions"><Link href="/documents" className="btn btn-secondary">Открыть документы</Link><Link href="/disputes" className="btn btn-primary">Разобрать спор</Link></div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
