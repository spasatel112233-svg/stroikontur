import { InfoCard, PageHero, SectionTitle, SiteShell } from '../../components/site-shell'

const companies = [
  {
    title: 'Генподряд и субподряд',
    description: 'Компании по общестрою, монолиту, фасадам, кровле, инженерным сетям, благоустройству и промышленным объектам.',
    meta: 'Россия / СНГ / международные проекты',
  },
  {
    title: 'Реставрация и ОКН',
    description: 'Компании с лицензиями, опытом по культурному наследию, фасадам, кровлям, приспособлению и проектированию.',
    meta: 'Лицензии / опыт / документы',
  },
  {
    title: 'Поставщики и снабжение',
    description: 'Материалы, металл, бетон, инженерка, фасадные системы, оборудование и логистика на объект.',
    meta: 'Материалы / оборудование / доставка',
  },
  {
    title: 'Спецтехника и аренда',
    description: 'Аренда техники с оператором и без, парк оборудования, манипуляторы, экскаваторы, самосвалы, краны.',
    meta: 'Техника / аренда / услуги',
  },
]

export default function CompaniesPage() {
  return (
    <SiteShell activePath="/companies">
      <PageHero
        eyebrow="Каталог компаний"
        title="Компании, подрядчики, поставщики и аренда в одной системе"
        description="Эта страница нужна для профилей компаний: услуги, проекты, география, лицензии, материалы, техника, отзывы и международная работа. Именно здесь потом будет одна из главных монетизаций платформы."
        actions={
          <>
            <a href="/register" className="rounded-2xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-400">Добавить компанию</a>
            <a href="/tariffs" className="rounded-2xl border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5">Тарифы и продвижение</a>
          </>
        }
      />

      <section className="border-t border-white/10 py-12">
        <SectionTitle
          title="Какие компании будут на платформе"
          description="Не только подрядчики по стройке. Сразу закладываем снабжение, спецтехнику, аренду, производителей, сервис, эксплуатацию и международное размещение."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {companies.map((company) => (
            <InfoCard key={company.title} eyebrow="Карточка компании" title={company.title} description={company.description} meta={company.meta} />
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 py-12">
        <div className="grid gap-4 lg:grid-cols-3">
          <InfoCard title="Профиль компании" description="Название, логотип, услуги, проекты, география, контакты, рейтинг, отзывы, документы, лицензии и языки." />
          <InfoCard title="Монетизация" description="VIP-размещение, подписки, доступ к лидам, приоритетная выдача, верификация и международное продвижение." />
          <InfoCard title="ИИ и подбор" description="ИИ будет сопоставлять компании с заказами, тендерами и потребностями заказчиков по географии и категории." />
        </div>
      </section>
    </SiteShell>
  )
}
