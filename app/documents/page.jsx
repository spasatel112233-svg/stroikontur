import Link from 'next/link';
import PageHero from '@/components/PageHero';

const docs = [
  ['Акт выполненных работ', 'Готовая форма для фиксации факта выполнения работ и стоимости.'],
  ['КС-2', 'Готовая форма для работ по строительным проектам и сопровождения сделок.'],
  ['КС-3', 'Форма для строительных проектов и взаиморасчётов по этапам.'],
  ['Претензия по оплате', 'Шаблон для работы с просрочкой оплаты и фиксацией позиции.'],
  ['Договор подряда', 'Базовый договор под выполнение строительных работ и услуг.'],
  ['Уведомление о сдаче работ', 'Документ для фиксации передачи результата и уведомления заказчика.']
];

const categories = ['Акты', 'КС-2', 'КС-3', 'Договоры', 'Претензии', 'Жалобы', 'Уведомления', 'Иски'];

export default function DocumentsPage() {
  return (
    <main className="page">
      <div className="container">
        <PageHero
          tag="Документы"
          title="Документы"
          text="Шаблоны договоров, актов, КС-2, КС-3, претензий и других документов для работы по объектам и спорным ситуациям."
          actions={<><Link href="/request" className="btn btn-primary">Получить документ</Link><Link href="/disputes" className="btn btn-secondary">Решить спор</Link></>}
        />

        <section className="section section-soft">
          <div className="filter-bar">
            <div className="search-input"><input placeholder="Поиск по документам..." /></div>
            <div className="select-wrap"><select defaultValue=""><option value="" disabled>Все категории</option><option>Все категории</option></select></div>
            <button className="btn btn-primary filter-submit">Найти</button>
          </div>
        </section>

        <section className="section">
          <div className="doc-layout">
            <aside className="sidebar card">
              <h3 className="card-subtitle">Категории</h3>
              <div className="category-list" style={{ marginTop: 18 }}>
                {categories.map((item, idx) => (
                  <div className={`category-item ${idx === 0 ? 'active' : ''}`} key={item}>{item}</div>
                ))}
              </div>
            </aside>
            <div className="doc-grid-tight">
              {docs.map(([title, text]) => (
                <article className="doc-card card" key={title}>
                  <span className="badge">Документ</span>
                  <h3 className="card-subtitle" style={{ marginTop: 16 }}>{title}</h3>
                  <p className="card-text">{text}</p>
                  <Link href="/request" className="doc-link">Открыть</Link>
                </article>
              ))}
            </div>
            <div className="panel card">
              <h3 className="card-title" style={{ fontSize: 28 }}>Получить документ</h3>
              <p className="card-text">Заполните данные по задаче, и мы подготовим нужный документ под ваш кейс.</p>
              <div className="form-grid" style={{ marginTop: 18, gridTemplateColumns: '1fr' }}>
                <div className="input"><input placeholder="Ваше имя" /></div>
                <div className="input"><input placeholder="Компания" /></div>
                <div className="input"><input placeholder="Договор / объект" /></div>
                <div className="textarea"><textarea placeholder="Кратко опишите задачу" /></div>
              </div>
              <div className="form-footer"><Link href="/request" className="btn btn-primary">Отправить запрос</Link></div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
