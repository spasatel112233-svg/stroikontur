import SectionHeading from '@/components/SectionHeading';
import CompanyCard from '@/components/CompanyCard';
import { companies } from '@/components/data';

export default function CompaniesPage() {
  return (
    <main className="pageShell">
      <div className="shell pageHero compact">
        <span className="eyebrow">Компании</span>
        <h1>Компании</h1>
        <p>Карточки подрядных, инженерных и производственных компаний с направлениями работ, географией и быстрым контактом.</p>
      </div>
      <section className="section">
        <div className="shell">
          <SectionHeading title="Подрядные компании" text="Профили компаний с описанием услуг, направлений работ и доступностью по регионам." />
          <div className="cardsGrid cardsGrid-3">
            {companies.map((item) => <CompanyCard key={item.title} {...item} />)}
          </div>
        </div>
      </section>
    </main>
  );
}
