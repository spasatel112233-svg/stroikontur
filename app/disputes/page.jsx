import Link from 'next/link';
import PageHero from '@/components/PageHero';

const cases = [
  ['Не оплачены выполненные работы', 'Материалы и шаблоны для работы с просрочкой оплаты, претензиями и фиксацией позиции.'],
  ['Не подписывают акты', 'Комплект документов и действий, если заказчик затягивает подписание КС-2, КС-3 или акта приёмки.'],
  ['Уклоняются от приёмки', 'Формы уведомлений и порядок фиксации передачи результата заказчику.'],
  ['Спор по объёму или качеству', 'Подход к оформлению доказательств и подготовке документов по спорной ситуации.']
];

export default function DisputesPage() {
  return (
    <main className="page">
      <div className="container">
        <PageHero
          tag="Споры"
          title="Споры"
          text="Раздел с претензиями, актами, КС-2, КС-3, договорами, уведомлениями, заявлениями и жалобами для работы со спорными ситуациями между заказчиком и подрядчиком."
          actions={<><Link href="/request" className="btn btn-primary">Разобрать ситуацию</Link><Link href="/documents" className="btn btn-secondary">Открыть документы</Link></>}
        />
        <section className="section">
          <div className="order-grid" style={{ gridTemplateColumns: 'repeat(4, minmax(0,1fr))' }}>
            {cases.map(([title, text]) => (
              <article className="feature-card card" key={title}>
                <span className="badge">Ситуация</span>
                <h3 className="card-subtitle" style={{ marginTop: 18 }}>{title}</h3>
                <p className="card-text">{text}</p>
                <Link href="/request" className="doc-link">Разобрать</Link>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
