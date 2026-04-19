import Link from 'next/link';
import PageHero from '@/components/PageHero';

const docs = [
  ['Акт выполненных работ', 'Готовая форма для фиксации факта выполнения работ и стоимости.'],
  ['КС-2', 'Готовая форма для строительных этапов, объёмов и подтверждения выполненных работ.'],
  ['КС-3', 'Форма для взаиморасчётов по строительным этапам и сопровождению сделки.'],
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
          visual="documents"
          actions={<><Link href="/request?mode=document" className="btn btn-primary">Получить документ</Link><Link href="/disputes" className="btn btn-secondary">Решить спор</Link></>}
        />

        <section className="section section-soft">
          <div className="filter-bar">
            <div className="search-input"><input placeholder="Поиск по документам..." /></div>
            <div className="select-wrap"><select defaultValue=""><option value="" disabled>Все категории</option><option>Все категории</option></select></div>
            <button className="btn btn-primary filter-submit">Найти</button>
          </div>
        </section>

        <section className="section">
          <div className="doc-layout doc-layout-wide">
            <aside className="sidebar card">
              <h3 className="card-subtitle">Категории</h3>
              <div className="category-list" style={{ marginTop: 18 }}>
                {categories.map((item, idx) => (
                  <div className={`category-item ${idx === 0 ? 'active' : ''}`} key={item}>{item}</div>
                ))}
              </div>
            </aside>
            <div className="doc-grid-tight doc-grid-tight-wide">
              {docs.map(([title, text]) => (
                <article className="doc-card card" key={title}>
                  <span className="badge">Документ</span>
                  <h3 className="card-subtitle card-title-compact">{title}</h3>
                  <p className="card-text card-text-soft">{text}</p>
                  <div className="card-actions card-actions-inline"><Link href="/request?mode=document" className="btn btn-secondary">Открыть</Link></div>
                </article>
              ))}
            </div>
            <div className="panel card panel-strong">
              <h3 className="card-title panel-title">Получить документ</h3>
              <p className="card-text">Заполните данные по задаче, и мы подготовим нужный документ под ваш кейс.</p>
              <div className="form-grid form-grid-single" style={{ marginTop: 18 }}>
                <div className="input"><input placeholder="Ваше имя" /></div>
                <div className="input"><input placeholder="Компания" /></div>
                <div className="input"><input placeholder="Договор / объект" /></div>
                <div className="textarea"><textarea placeholder="Кратко опишите задачу" /></div>
              </div>
              <div className="form-footer"><Link href="/request?mode=document" className="btn btn-primary btn-form-primary">Отправить запрос</Link></div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
