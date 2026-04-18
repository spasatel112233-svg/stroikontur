import { InfoCard, PageHero, SectionTitle, SiteShell } from '../../components/site-shell'

export default function IdeasPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Идеи и развитие платформы"
        title="Раздел идей, улучшений и новых модулей для роста агрегатора"
        description="Здесь можно собирать идеи пользователей, голосования, новые функции, предложения по категориям, странам, ИИ-инструментам, документам и монетизации."
        actions={<a href="/request" className="rounded-2xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-400">Предложить идею</a>}
      />
      <section className="border-t border-white/10 py-12">
        <SectionTitle title="Что здесь будем собирать" description="Это живая зона развития, чтобы агрегатор рос не хаотично, а от реального спроса аудитории." />
        <div className="grid gap-4 md:grid-cols-3">
          <InfoCard title="Идеи пользователей" description="Что добавить в роли, категории, географию, документы, фильтры, ИИ, мобильную версию и приложение." />
          <InfoCard title="Запросы рынка" description="Чего не хватает компаниям, подрядчикам, специалистам, поставщикам и заказчикам прямо сейчас." />
          <InfoCard title="План платформы" description="Отдельная доска развития: что делаем сейчас, что потом, что уже в работе и что откладываем." />
        </div>
      </section>
    </SiteShell>
  )
}
