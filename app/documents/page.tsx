import { InfoCard, PageHero, SectionTitle, SiteShell } from '../../components/site-shell'

const docs = [
  'Договор подряда',
  'Акт выполненных работ',
  'КС-2',
  'КС-3',
  'Претензия по оплате',
  'Уведомление о приёмке',
  'Заявление / жалоба',
  'Исполнительная документация',
]

export default function DocumentsPage() {
  return (
    <SiteShell activePath="/documents">
      <PageHero
        eyebrow="Документы"
        title="Документы, шаблоны и генераторы для подрядчиков, компаний и заказчиков"
        description="Документный блок — один из главных источников пользы и будущей монетизации. Здесь должны быть шаблоны, генераторы, пакеты документов по объектам и быстрый доступ к правовым формулировкам."
        actions={
          <>
            <a href="/request" className="rounded-2xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-400">Подготовить документ</a>
            <a href="/disputes" className="rounded-2xl border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5">Перейти в споры</a>
          </>
        }
      />

      <section className="border-t border-white/10 py-12">
        <SectionTitle title="Ключевые документы" description="Это каркас библиотеки, которую потом можно монетизировать через подписки, пакеты, ИИ и платные шаблоны." />
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {docs.map((doc) => (
            <div key={doc} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white/80">{doc}</div>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 py-12">
        <div className="grid gap-4 md:grid-cols-3">
          <InfoCard title="Шаблоны" description="Быстрые формы под договоры, акты, КС-2, КС-3, уведомления и претензии." />
          <InfoCard title="Пакеты документов" description="Наборы под объект, спор, неоплату, тендерное участие, сдачу работ и закрывающие документы." />
          <InfoCard title="ИИ-помощник" description="Поможет составить текст, проверить формулировки и подготовить первый вариант документа быстрее." />
        </div>
      </section>
    </SiteShell>
  )
}
