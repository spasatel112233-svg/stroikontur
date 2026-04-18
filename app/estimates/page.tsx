import { InfoCard, PageHero, SectionTitle, SiteShell } from '../../components/site-shell'

export default function EstimatesPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Сметы и аналитика"
        title="Составление смет и анализ тендеров через ИИ"
        description="Отдельный сильный блок платформы: составление смет, коммерческие расчёты, оценка закупок, анализ выгодности, плюсов, минусов и рисков участия."
        actions={<a href="/request" className="rounded-2xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-400">Запросить анализ</a>}
      />
      <section className="border-t border-white/10 py-12">
        <SectionTitle title="Что сюда закладываем" description="Этот раздел потом будет работать как самостоятельный сервис для подрядчиков, тендерных специалистов и компаний." />
        <div className="grid gap-4 md:grid-cols-3">
          <InfoCard title="Составление смет" description="Локальные сметы, коммерческие расчёты, быстрые оценки для входа в переговоры и закупки." />
          <InfoCard title="Анализ тендера" description="Стоит ли участвовать, где риски, где ловушки, каков запас по марже и где слабые места документации." />
          <InfoCard title="ИИ-помощник" description="Автоматический первичный разбор, подсказки и рекомендации по участию в закупке и переговорам." />
        </div>
      </section>
    </SiteShell>
  )
}
