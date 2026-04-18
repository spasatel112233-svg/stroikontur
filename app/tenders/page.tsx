import { InfoCard, PageHero, SectionTitle, SiteShell } from '../../components/site-shell'

const tenders = [
  {
    title: 'Капитальный ремонт и благоустройство',
    description: 'Муниципальный тендер на благоустройство территории, опиловку, малые формы, дорожки и озеленение.',
    meta: '44-ФЗ / Россия / аванс / сроки 45 дней',
  },
  {
    title: 'Инженерные сети промышленного объекта',
    description: 'Коммерческий тендер на внутренние сети, слаботочку, вентиляцию, автоматику и пусконаладку.',
    meta: 'Коммерческий / Казахстан / 2 этапа',
  },
  {
    title: 'Реставрация фасада и кровли',
    description: 'Объект культурного наследия. Нужны компания, документы, лицензии и подтверждённый опыт работ.',
    meta: 'ОКН / конкурс / специальные требования',
  },
]

export default function TendersPage() {
  return (
    <SiteShell activePath="/tenders">
      <PageHero
        eyebrow="Тендеры и закупки"
        title="Тендерный блок с анализом, сметами и ИИ-подсказками"
        description="Тендеры должны стать отдельным сильным разделом: поиск закупок, фильтры, карточки, оценка выгодности, плюсы, минусы, риски, сметы и аналитика по участию."
        actions={
          <>
            <a href="/request" className="rounded-2xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-400">Подобрать тендер</a>
            <a href="/documents" className="rounded-2xl border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5">Документы для участия</a>
          </>
        }
      />

      <section className="border-t border-white/10 py-12">
        <SectionTitle
          title="Что будет в тендерном разделе"
          description="Государственные и коммерческие закупки, фильтры по стране, категории, бюджету, авансу, требованиям, срокам и формату участия."
        />
        <div className="grid gap-4 lg:grid-cols-3">
          <InfoCard title="Лента закупок" description="Карточки тендеров с бюджетом, сроками, авансом, типом заказчика, регионом и быстрым переходом в анализ." />
          <InfoCard title="Сметы и расчёты" description="Отдельный слой платформы под сметы, коммерческие расчёты и проверку рентабельности участия." />
          <InfoCard title="ИИ-анализ" description="Помощник подскажет, выгодно ли входить в тендер, какие риски, какие плюсы и на что смотреть в документации." />
        </div>
      </section>

      <section className="border-t border-white/10 py-12">
        <SectionTitle title="Примеры карточек" description="Эти карточки нужны как визуальная модель будущего тендерного блока." />
        <div className="grid gap-4 xl:grid-cols-3">
          {tenders.map((tender) => (
            <InfoCard key={tender.title} eyebrow="Тендер" title={tender.title} description={tender.description} meta={tender.meta} />
          ))}
        </div>
      </section>
    </SiteShell>
  )
}
