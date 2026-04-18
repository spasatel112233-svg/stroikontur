import Link from 'next/link';
import { PageTitle } from '../../components/PageTitle';

const docs = [
  'Акт выполненных работ', 'КС-2', 'КС-3', 'Претензия по оплате', 'Договор подряда', 'Уведомление о сдаче работ'
];
const cats = ['Акты', 'КС-2', 'КС-3', 'Договоры', 'Претензии', 'Жалобы', 'Уведомления', 'Иски'];

export default function DocumentsPage() {
  return (
    <main className="page-shell">
      <div className="container">
        <PageTitle
          badge="Документы"
          title="Документы"
          lead="Шаблоны договоров, актов, КС-2, КС-3, претензий и других документов для работы с заказчиком и подрядчиком."
          actions={<>
            <Link href="/request/document-request" className="btn btn--primary">Получить документ</Link>
            <Link href="/disputes" className="btn">Решить спор</Link>
          </>}
        />

        <section className="section">
          <div className="filters" style={{ gridTemplateColumns: '1.8fr 220px auto' }}>
            <input className="input" placeholder="Поиск по документам..." />
            <select className="select"><option>Все категории</option></select>
            <button className="btn btn--primary">Найти</button>
          </div>
        </section>

        <section className="section doc-layout">
          <aside className="doc-sidebar">
            <h2 className="section-title" style={{ fontSize: 26 }}>Категории</h2>
            <div className="pills" style={{ flexDirection: 'column', marginTop: 18 }}>
              {cats.map((cat, i) => <span key={cat} className={`pill ${i === 0 ? 'pill--active' : ''}`}>{cat}</span>)}
            </div>
          </aside>

          <div className="cards-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
            {docs.map((title) => (
              <article key={title} className="doc-card">
                <div className="doc-card__top"><span className="badge badge--soft">Документ</span></div>
                <h3>{title}</h3>
                <p>Готовая форма для работы по строительным проектам и сопровождения сделок.</p>
                <div className="doc-card__meta" style={{ marginTop: 18 }}><Link href="/request/document-request" className="doc-card__cta">Открыть</Link></div>
              </article>
            ))}
          </div>

          <aside className="doc-request">
            <h2 className="section-title" style={{ fontSize: 26 }}>Получить документ</h2>
            <p className="section-copy" style={{ fontSize: 17, marginTop: 10 }}>Заполните данные по задаче, и мы подготовим нужный документ под ваш кейс.</p>
            <div style={{ marginTop: 18, display: 'grid', gap: 12 }}>
              <input className="input" placeholder="Ваше имя" />
              <input className="input" placeholder="Компания" />
              <input className="input" placeholder="Договор / объект" />
              <textarea className="textarea" placeholder="Кратко опишите задачу" />
              <Link href="/request/document-request" className="btn btn--primary" style={{ width: '100%' }}>Отправить запрос</Link>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
