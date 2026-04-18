import { InfoCard, PageHero, SectionTitle, SiteShell } from '../../components/site-shell'

export default function NewsPage() {
  return (
    <SiteShell activePath="/news">
      <PageHero
        eyebrow="Новости и аналитика"
        title="Рынок стройки, материалы, международные проекты и изменения правил"
        description="Раздел новостей нужен не для галочки, а для трафика, доверия и органического роста платформы. Через него можно приводить аудиторию без рекламы."
        actions={<a href="/ideas" className="rounded-2xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-400">Перейти к идеям развития</a>}
      />
      <section className="border-t border-white/10 py-12">
        <SectionTitle title="Контент, который будет притягивать аудиторию" description="Новости стройки, изменения законов, аналитика рынка, новые объекты, технологии, материалы и кейсы по международным проектам." />
        <div className="grid gap-4 md:grid-cols-3">
          <InfoCard title="Изменения правил" description="Законы, нормативка, требования к объектам, документам, лицензиям и участию в закупках." />
          <InfoCard title="Материалы и логистика" description="Цены, цепочки поставок, международные рынки, дефициты, сроки, импорт и локальные поставщики." />
          <InfoCard title="Технологии и кейсы" description="Современные подходы, сильные кейсы компаний, мировой опыт, ИИ, автоматизация и эффективность." />
        </div>
      </section>
    </SiteShell>
  )
}
