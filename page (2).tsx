import { InfoCard, PageHero, SectionTitle, SiteShell } from '../../components/site-shell'

const cases = [
  'Не оплатили выполненные работы',
  'Не подписывают акты и КС',
  'Уклоняются от приёмки результата',
  'Спор по объёму или качеству',
  'Нужно правильно надавить в правовом поле',
  'Нужно заявление, жалоба или претензия',
]

export default function DisputesPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Споры и неоплата"
        title="Претензии, заявления, жалобы и правовая логика давления на заказчика или подрядчика"
        description="Этот блок должен стать одним из сильнейших на платформе. Здесь пользователь получает алгоритмы действий при неоплате, неподписанных актах, спорах по объёму, уклонении от приёмки и других проблемных ситуациях."
        actions={
          <>
            <a href="/request" className="rounded-2xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-400">Разобрать ситуацию</a>
            <a href="/documents" className="rounded-2xl border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5">Открыть документы</a>
          </>
        }
      />

      <section className="border-t border-white/10 py-12">
        <SectionTitle title="Ситуации, которые должны закрываться" description="Не просто обзор, а реальные сценарии, которые приносят пользу и деньги: документы, алгоритмы, правовая логика, ИИ-подсказки и платные пакеты помощи." />
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {cases.map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white/80">{item}</div>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 py-12">
        <div className="grid gap-4 md:grid-cols-3">
          <InfoCard title="Претензии и уведомления" description="Готовые шаблоны под неоплату, отказ в подписании актов, просрочку, уклонение и нарушение условий договора." />
          <InfoCard title="Жалобы и заявления" description="Жалобы, обращения, заявления в контролирующие органы и другие формы правового давления." />
          <InfoCard title="Пошаговые сценарии" description="Что отправлять первым, как фиксировать позицию, какие документы усиливают кейс и как подготовить переговорную линию." />
        </div>
      </section>
    </SiteShell>
  )
}
