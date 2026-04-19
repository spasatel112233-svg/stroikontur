import Link from 'next/link';
import PageHero from '@/components/PageHero';
import FilterBar from '@/components/FilterBar';

const companies = [
  { title: 'ФасадСтрой', text: 'Фасады, утепление, реставрация, выездные объекты и сопровождение полного цикла работ.', meta: 'Россия · СНГ · 12 лет на рынке' },
  { title: 'Инженерные решения', text: 'Внутренние сети, автоматика, вентиляция, щитовое оборудование и пусконаладка.', meta: 'Казахстан · Узбекистан · Промышленные объекты' },
  { title: 'БетонПроф', text: 'Монолит, бетонные работы, армирование, опалубка и субподрядные механизированные этапы.', meta: 'Россия · Турция · Команда 60+' }
];

export default function CompaniesPage() {
  return (
    <main className="page">
      <div className="container">
        <PageHero
          tag="Компании"
          title="Компании"
          text="Профили подрядных и сервисных компаний с направлениями работ, регионами, опытом и контактами для входящих запросов."
          visual="company"
          actions={<><Link href="/companies/find" className="btn btn-primary">Найти компанию</Link><Link href="/register" className="btn btn-secondary">Создать профиль</Link></>}
        />
        <section className="section section-soft">
          <FilterBar searchPlaceholder="Название компании, услуга, регион..." selects={['Страна', 'Регион', 'Направление работ']} />
        </section>
        <section className="section">
          <div className="company-grid companies-grid-wide">
            {companies.map((company) => (
              <article className="company-card card" key={company.title}>
                <div className="avatar avatar-soft">{company.title.slice(0,2).toUpperCase()}</div>
                <h3 className="card-subtitle card-subtitle-soft">{company.title}</h3>
                <p className="card-text card-text-soft">{company.text}</p>
                <div className="meta meta-soft">{company.meta}</div>
                <div className="card-actions card-actions-bottom">
                  <Link href="/companies/find" className="btn btn-secondary">Подробнее</Link>
                  <Link href={`/companies/contact?company=${encodeURIComponent(company.title)}`} className="btn btn-primary">Связаться</Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
