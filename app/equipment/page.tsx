import { InfoCard, PageHero, SectionTitle, SiteShell } from '../../components/site-shell'

export default function EquipmentPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Техника, аренда и инструменты"
        title="Спецтехника, аренда техники, инструмент и оборудование"
        description="Раздел нужен под экскаваторы, краны, самосвалы, манипуляторы, автовышки, генераторы, виброплиты, леса, опалубку и аренду инструмента."
        actions={<a href="/request" className="rounded-2xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-400">Запросить технику / инструмент</a>}
      />
      <section className="border-t border-white/10 py-12">
        <SectionTitle title="Большой ресурсный блок платформы" description="Это отдельный денежный слой агрегатора: аренда, поставка, лиды, продвижение карточек, подписки поставщиков и арендодателей." />
        <div className="grid gap-4 md:grid-cols-3">
          <InfoCard title="Техника" description="Экскаваторы, краны, манипуляторы, самосвалы, буровые, катки, погрузчики, мини-техника." />
          <InfoCard title="Аренда" description="С оператором и без оператора, по сменам, по месяцу, по объекту, по городу или стране." />
          <InfoCard title="Инструмент" description="Электроинструмент, сварочное оборудование, генераторы, леса, опалубка и строительное оборудование." />
        </div>
      </section>
    </SiteShell>
  )
}
