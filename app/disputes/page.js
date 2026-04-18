import SectionHeading from '@/components/SectionHeading';
import DisputeCard from '@/components/DisputeCard';
import { disputes } from '@/components/data';

export default function DisputesPage() {
  return (
    <main className="pageShell">
      <div className="shell pageHero compact">
        <span className="eyebrow">Споры</span>
        <h1>Споры</h1>
        <p>Раздел с претензиями, актами, КС-2, КС-3, договорами, уведомлениями, заявлениями и документами для работы по спорным ситуациям между заказчиком и подрядчиком.</p>
        <div className="heroActions">
          <a className="btn btn-primary" href="/request">Разобрать ситуацию</a>
          <a className="btn btn-ghost" href="/documents">Открыть документы</a>
        </div>
      </div>

      <section className="section">
        <div className="shell">
          <SectionHeading title="Типовые ситуации" text="Подборка сценариев и комплектов документов для самых частых спорных случаев." />
          <div className="cardsGrid cardsGrid-4">
            {disputes.map((item) => <DisputeCard key={item.title} {...item} />)}
          </div>
        </div>
      </section>
    </main>
  );
}
