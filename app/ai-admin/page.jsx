import Link from 'next/link';

const nav = ['Обзор', 'На проверке', 'Новости', 'Документы', 'Споры', 'Тендеры', 'Сметы / расчёты', 'Переводы', 'Компании', 'Специалисты', 'Категории', 'Архив'];
const review = [
  ['Документ', 'Претензия по неоплате выполненных работ', 'Споры', 'На проверке'],
  ['Новость', 'Изменения в подрядных договорах', 'Новости', 'Черновик'],
  ['Тендер', 'Капитальный ремонт и благоустройство', 'Тендеры', 'На проверке']
];

export default function AiAdminPage() {
  return (
    <main className="page">
      <div className="container">
        <section className="section">
          <div className="ai-shell">
            <aside className="ai-nav">
              <span className="page-tag">ИИ-админка</span>
              <h2 className="card-title" style={{ fontSize: 30, marginTop: 16 }}>Разделы</h2>
              <ul>
                {nav.map((item, idx) => <li key={item}><a className={idx === 0 ? 'active' : ''} href="#">{item}</a></li>)}
              </ul>
            </aside>
            <div style={{ display: 'grid', gap: 20 }}>
              <div className="panel card">
                <div className="section-header" style={{ marginBottom: 18 }}>
                  <div>
                    <span className="page-tag">Обзор системы</span>
                    <h1 className="section-title" style={{ marginTop: 16 }}>Материалы на проверке</h1>
                    <p className="section-text">Черновики, документы, новости и предложения, подготовленные для проверки и публикации.</p>
                  </div>
                  <div className="hero-actions"><button className="btn btn-secondary">Создать документ</button><button className="btn btn-primary">Проверить предложения</button></div>
                </div>
                <div className="metrics-grid">
                  <div className="metric-card" style={{ background: '#f8fbff' }}><div className="metric-value" style={{ color: 'var(--text)' }}>18</div><div className="metric-label" style={{ color: 'var(--muted)' }}>на проверке</div></div>
                  <div className="metric-card" style={{ background: '#f8fbff' }}><div className="metric-value" style={{ color: 'var(--text)' }}>24</div><div className="metric-label" style={{ color: 'var(--muted)' }}>черновика</div></div>
                  <div className="metric-card" style={{ background: '#f8fbff' }}><div className="metric-value" style={{ color: 'var(--text)' }}>146</div><div className="metric-label" style={{ color: 'var(--muted)' }}>опубликовано</div></div>
                  <div className="metric-card" style={{ background: '#f8fbff' }}><div className="metric-value" style={{ color: 'var(--text)' }}>7</div><div className="metric-label" style={{ color: 'var(--muted)' }}>отклонено</div></div>
                </div>
              </div>
              <div className="order-grid" style={{ gridTemplateColumns: '1.4fr .8fr' }}>
                <div className="panel card">
                  <h3 className="card-subtitle">Материалы на проверке</h3>
                  <div style={{ display: 'grid', gap: 14, marginTop: 18 }}>
                    {review.map(([type, title, category, status]) => (
                      <div key={title} className="card" style={{ padding: 18 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 14, alignItems: 'start' }}>
                          <div>
                            <div className="badge">{type}</div>
                            <h4 style={{ margin: '12px 0 6px', fontSize: 22, lineHeight: 1.25 }}>{title}</h4>
                            <p className="card-text" style={{ margin: 0 }}>Категория: {category} · Статус: {status}</p>
                          </div>
                          <div className="card-actions" style={{ marginTop: 0 }}>
                            <button className="btn btn-secondary">Открыть</button>
                            <button className="btn btn-primary">Одобрить</button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="panel card">
                  <h3 className="card-subtitle">Предложения системы</h3>
                  <div style={{ display: 'grid', gap: 14, marginTop: 18 }}>
                    <div className="card" style={{ padding: 18 }}><h4 style={{ margin: 0, fontSize: 21 }}>Новый шаблон документа</h4><p className="card-text">Претензия по просрочке оплаты. Основа подготовлена, требуется проверка.</p><div className="card-actions"><button className="btn btn-secondary">В черновик</button><button className="btn btn-primary">Принять</button></div></div>
                    <div className="card" style={{ padding: 18 }}><h4 style={{ margin: 0, fontSize: 21 }}>Улучшение карточки компании</h4><p className="card-text">Добавить географию, категории и короткое описание работ.</p><div className="card-actions"><button className="btn btn-secondary">Проверить</button><button className="btn btn-primary">Применить</button></div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
