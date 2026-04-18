import { InfoCard, PageHero, SectionTitle, SiteShell } from '../../components/site-shell'

const filters = ['Специальность', 'Страна', 'Город', 'Опыт', 'Язык', 'Формат работы']
const profiles = [
  {
    title: 'Прораб / общестрой / монолит',
    description:
      '12 лет опыта, жилые и промышленные объекты, бригады в подчинении, готовность к переезду и командировкам.',
    meta: 'Россия / СНГ · 12 лет · Проверенный профиль',
  },
  {
    title: 'Инженер ПТО / исполнительная документация',
    description:
      'КС-2, КС-3, журналы, акты скрытых работ, исполнительные схемы, сдача объекта заказчику.',
    meta: 'Удалённо / офис · Россия / Казахстан',
  },
  {
    title: 'Сметчик / аналитик закупок',
    description:
      'Локальные сметы, коммерческие расчёты, анализ тендеров, оценка рентабельности объекта и рисков.',
    meta: 'Россия · удалённо · подряд / проект',
  },
  {
    title: 'Бригада фасадчиков',
    description:
      'Мокрый фасад, утепление, облицовка, реставрация фасадов, работа по договору и под ключ.',
    meta: 'Турция / Россия · 20+ человек',
  },
  {
    title: 'Электрик / слаботочные системы',
    description:
      'Наружные и внутренние сети, видеонаблюдение, автоматика, контроль доступа, пожарные системы.',
    meta: 'ОАЭ / Турция · русский / английский',
  },
  {
    title: 'Оператор спецтехники',
    description:
      'Экскаватор, погрузчик, мини-техника, земляные работы, благоустройство, демонтаж, расчистка.',
    meta: 'Россия · вахта / объект',
  },
]

export default function SpecialistsPage() {
  return (
    <SiteShell activePath="/specialists">
      <PageHero
        eyebrow="Каталог специалистов"
        title="Профили исполнителей, бригад и экспертных специалистов для стройки и подрядов"
        description="На этой странице собираем специалистов по категориям: прорабы, инженеры ПТО, сметчики, фасадчики, электрики, операторы техники, отделочники, реставраторы и другие исполнители."
        actions={
          <>
            <a href="/register" className="rounded-2xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-400">Создать профиль</a>
            <a href="/request" className="rounded-2xl border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5">Найти специалиста</a>
          </>
        }
      />

      <section className="border-t border-white/10 py-12">
        <SectionTitle
          title="Фильтры специалистов"
          description="Для запуска достаточно макета, чтобы понять будущую структуру: специальность, страна, город, язык, опыт, статус профиля и формат работы."
        />
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-6">
          {filters.map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white/70">{item}</div>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 py-12">
        <SectionTitle
          title="Примеры карточек"
          description="Каждый профиль в будущем получит опыт, портфолио, документы, рейтинг, языки, географию работ, стоимость и быстрый отклик."
        />
        <div className="grid gap-4 xl:grid-cols-2">
          {profiles.map((profile) => (
            <div key={profile.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center justify-between gap-3">
                <div className="text-sm text-orange-300">Специалист / бригада</div>
                <div className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/50">Доступен к работе</div>
              </div>
              <h3 className="mt-3 text-2xl font-semibold">{profile.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/70">{profile.description}</p>
              <div className="mt-4 text-xs uppercase tracking-wide text-white/40">{profile.meta}</div>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href="/request" className="rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-400">Связаться</a>
                <a href="/companies" className="rounded-xl border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/5">Профиль</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 py-12">
        <div className="grid gap-4 lg:grid-cols-3">
          <InfoCard title="Подрядчики и бригады" description="Отдельные блоки под бригады, субподрядные команды и сезонные рабочие составы." />
          <InfoCard title="Проверка и доверие" description="Позже здесь появятся отзывы, рейтинги, верификация, документы, значки доверия и подтверждение опыта." />
          <InfoCard title="ИИ-помощник" description="ИИ будет предлагать подходящих специалистов по тексту заказа, бюджету и географии проекта." />
        </div>
      </section>
    </SiteShell>
  )
}
