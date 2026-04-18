import { InfoCard, PageHero, SectionTitle, SiteShell } from '../../components/site-shell'

export default function MaterialsPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Материалы и снабжение"
        title="Поставщики, заявки на материалы и строительное снабжение"
        description="Раздел под бетон, металл, кирпич, фасадные системы, инженерные материалы, кабель, трубы, отделочные материалы и логистику на объект."
        actions={<a href="/request" className="rounded-2xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-400">Оставить запрос на материалы</a>}
      />
      <section className="border-t border-white/10 py-12">
        <SectionTitle title="Что здесь будет" description="Каталог поставщиков, заявки, быстрые фильтры, сравнение предложений и привязка к объектам и заказам платформы." />
        <div className="grid gap-4 md:grid-cols-3">
          <InfoCard title="Поставщики" description="Карточки компаний, логистика, география, минимальные партии, сроки поставки." />
          <InfoCard title="Запросы на снабжение" description="Форма запроса под объект: объём, материал, страна, город, сроки, доставка, срочность." />
          <InfoCard title="Связка с заказами" description="Материалы должны подтягиваться в заказы, подряды, сметы и тендерный анализ." />
        </div>
      </section>
    </SiteShell>
  )
}
