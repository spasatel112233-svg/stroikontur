import { InfoCard, PageHero, SectionTitle, SiteShell } from '../../components/site-shell'

export default function TariffsPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Тарифы и монетизация"
        title="Как платформа будет зарабатывать и что можно продавать внутри агрегатора"
        description="Тарифный блок нужен не только для цен. Он показывает будущую экономику платформы: VIP-размещение, лиды, подписки компаний, проверенные профили, документы и ИИ PRO."
        actions={<a href="/request" className="rounded-2xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-400">Запросить условия</a>}
      />
      <section className="border-t border-white/10 py-12">
        <SectionTitle title="Базовые направления монетизации" description="То, что реально можно включать поэтапно, не перегружая запуск." />
        <div className="grid gap-4 md:grid-cols-3">
          <InfoCard title="VIP и продвижение" description="Закрепление карточек, топ-размещение, срочные объекты, выделение компаний и заказов." />
          <InfoCard title="Подписки" description="Тарифы для компаний, подрядчиков, поставщиков и аренды с доступом к лидам и расширенным возможностям." />
          <InfoCard title="Документы и ИИ" description="Платные документы, платные пакеты помощи, ИИ PRO, сметы, тендерная аналитика и верификация." />
        </div>
      </section>
    </SiteShell>
  )
}
