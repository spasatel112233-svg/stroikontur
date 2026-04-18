import SectionHeading from '@/components/SectionHeading';
import DocumentCard from '@/components/DocumentCard';
import { documentCategories, documents } from '@/components/data';

export default function DocumentsPage() {
  return (
    <main className="pageShell">
      <div className="shell pageHero compact">
        <span className="eyebrow">Документы</span>
        <h1>Документы</h1>
        <p>Шаблоны договоров, актов, КС-2, КС-3, претензий и других документов для работы с заказчиком и подрядчиком.</p>
        <div className="heroActions">
          <a className="btn btn-primary" href="/request">Получить документ</a>
          <a className="btn btn-ghost" href="/disputes">Решить спор</a>
        </div>
      </div>

      <div className="shell filterBar card toneWhite">
        <input className="field grow" placeholder="Поиск по документам..." />
        <select className="field selectField wideSelect"><option>Все категории</option></select>
        <button className="btn btn-primary btn-tight">Найти</button>
      </div>

      <section className="section">
        <div className="shell docsLayout">
          <aside className="card toneWarm categoryCard">
            <h3>Категории</h3>
            <div className="categoryList">
              {documentCategories.map((item, idx) => <button key={item} className={`catBtn ${idx === 0 ? 'catBtn-active' : ''}`}>{item}</button>)}
            </div>
          </aside>
          <div className="docsCenter">
            <div className="cardsGrid cardsGrid-2 docsCardsWide">
              {documents.map((item) => <DocumentCard key={item.title} {...item} />)}
            </div>
          </div>
          <div className="card toneWarm requestDocPanel">
            <h2>Получить документ</h2>
            <p>Заполните данные по задаче, и мы подготовим нужный документ под ваш кейс.</p>
            <input className="field" placeholder="Ваше имя" />
            <input className="field" placeholder="Компания" />
            <input className="field" placeholder="Договор / объект" />
            <textarea className="field textarea" placeholder="Кратко опишите задачу" />
            <button className="btn btn-primary btn-block">Отправить запрос</button>
          </div>
        </div>
      </section>
    </main>
  );
}
