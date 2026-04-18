import Link from 'next/link';
import { PageTitle } from '../../components/PageTitle';

const issues = [
  ['Не оплачены выполненные работы', 'Материалы и шаблоны для работы с просрочкой оплаты, претензией и фиксацией позиции.'],
  ['Не подписывают акты', 'Комплект документов и действий, если заказчик затягивает подписание КС-2, КС-3 или акта приёмки.'],
  ['Уклоняются от приёмки', 'Формы уведомлений и порядок фиксации передачи результата заказчику.'],
  ['Спор по объёму или качеству', 'Подход к оформлению доказательств и подготовке документов при спорной ситуации.']
];

export default function DisputesPage() {
  return (
    <main className="page-shell">
      <div className="container">
        <PageTitle
          badge="Споры"
          title="Споры"
          lead="Раздел с претензиями, актами, КС-2, КС-3, договорами, уведомлениями, заявлениями, жалобами и документами для работы со спорными ситуациями между заказчиком и подрядчиком."
          actions={<>
            <Link href="/request/dispute" className="btn btn--primary">Разобрать ситуацию</Link>
            <Link href="/documents" className="btn">Открыть документы</Link>
          </>}
        />

        <section className="section">
          <div className="cards-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
            {issues.map(([title, text]) => (
              <article key={title} className="issue-card">
                <div className="issue-card__top"><span className="badge badge--soft">Ситуация</span></div>
                <h3>{title}</h3>
                <p>{text}</p>
                <div className="issue-card__meta" style={{ marginTop: 18 }}><Link href="/request/dispute" className="issue-card__cta">Разобрать</Link></div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
