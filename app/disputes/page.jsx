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
          visual="legal"
          actions={<><Link href="/request?mode=dispute" className="btn btn-primary">Разобрать ситуацию</Link><Link href="/documents" className="btn btn-secondary">Открыть документы</Link></>}
        />
        <section className="section">
          <div className="order-grid disputes-grid-four">
            {cases.map(([title, text]) => (
              <article className="feature-card card" key={title}>
                <span className="badge">Ситуация</span>
                <h3 className="card-subtitle card-title-compact">{title}</h3>
                <p className="card-text card-text-soft">{text}</p>
                <div className="card-actions card-actions-inline"><Link href="/request?mode=dispute" className="btn btn-primary">Разобрать</Link></div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
