import type { ReactNode } from 'react'

export const primaryNav = [
  { href: '/tenders', label: 'Тендеры' },
  { href: '/documents', label: 'Документы' },
  { href: '/orders', label: 'Заказы' },
  { href: '/specialists', label: 'Специалисты' },
  { href: '/companies', label: 'Компании' },
  { href: '/news', label: 'Новости' },
]

const footerGroups = [
  {
    title: 'Платформа',
    links: [
      { href: '/orders', label: 'Заказы / Подряды' },
      { href: '/tenders', label: 'Тендеры' },
      { href: '/specialists', label: 'Специалисты' },
      { href: '/companies', label: 'Компании' },
    ],
  },
  {
    title: 'Сервисы',
    links: [
      { href: '/documents', label: 'Документы' },
      { href: '/disputes', label: 'Споры и неоплата' },
      { href: '/request', label: 'Оставить заявку' },
      { href: '/ideas', label: 'Идеи и развитие' },
    ],
  },
  {
    title: 'Дополнительно',
    links: [
      { href: '/news', label: 'Новости рынка' },
      { href: '/tariffs', label: 'Тарифы и размещение' },
      { href: '/login', label: 'Войти' },
      { href: '/register', label: 'Регистрация' },
    ],
  },
]

function NavLink({ href, label, active }: { href: string; label: string; active?: boolean }) {
  return (
    <a
      href={href}
      className={[
        'transition',
        active ? 'text-white' : 'text-white/75 hover:text-white',
      ].join(' ')}
    >
      {label}
    </a>
  )
}

export function SiteShell({
  activePath,
  children,
}: {
  activePath?: string
  children: ReactNode
}) {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-6 md:px-10 lg:px-12">
        <header className="border-b border-white/10 pb-5">
          <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
            <div className="flex items-center justify-between gap-4">
              <a href="/" className="text-2xl font-bold tracking-tight text-orange-400">
                СтройКонтур
              </a>
              <a
                href="/request"
                className="rounded-xl border border-orange-400 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10 xl:hidden"
              >
                Оставить заявку
              </a>
            </div>

            <nav className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm md:gap-x-7">
              {primaryNav.map((item) => (
                <NavLink
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  active={activePath === item.href}
                />
              ))}
            </nav>

            <div className="hidden items-center gap-3 xl:flex">
              <a
                href="/login"
                className="rounded-xl border border-orange-400 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Войти
              </a>
              <a
                href="/register"
                className="rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-400"
              >
                Регистрация
              </a>
              <a
                href="/request"
                className="rounded-xl border border-orange-400 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Оставить заявку
              </a>
            </div>
          </div>
        </header>

        {children}

        <footer className="mt-16 border-t border-white/10 py-8">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            <div>
              <div className="text-xl font-bold tracking-tight text-orange-400">СтройКонтур</div>
              <p className="mt-3 max-w-xs text-sm leading-6 text-white/60">
                Международный строительный агрегатор с ИИ для поиска заказов,
                подрядчиков, специалистов, компаний, документов и ресурсов.
              </p>
            </div>

            {footerGroups.map((group) => (
              <div key={group.title}>
                <div className="text-sm font-semibold text-white">{group.title}</div>
                <div className="mt-3 flex flex-col gap-2 text-sm text-white/60">
                  {group.links.map((link) => (
                    <a key={link.href} href={link.href} className="transition hover:text-white">
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/40 md:flex-row md:items-center md:justify-between">
            <div>© 2026 СтройКонтур. Агрегатор заказов, тендеров и исполнителей.</div>
            <div>Россия · СНГ · Турция · Китай · Международный режим</div>
          </div>
        </footer>
      </div>
    </main>
  )
}

export function PageHero({
  eyebrow,
  title,
  description,
  actions,
}: {
  eyebrow: string
  title: string
  description: string
  actions?: ReactNode
}) {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-4xl">
        <div className="mb-4 inline-flex rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-1 text-sm text-orange-300">
          {eyebrow}
        </div>
        <h1 className="text-4xl font-bold leading-tight md:text-6xl">{title}</h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-white/70 md:text-lg">
          {description}
        </p>
        {actions ? <div className="mt-8 flex flex-wrap gap-4">{actions}</div> : null}
      </div>
    </section>
  )
}

export function SectionTitle({ title, description }: { title: string; description: string }) {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="mt-3 max-w-3xl text-white/70">{description}</p>
    </div>
  )
}

export function InfoCard({
  eyebrow,
  title,
  description,
  meta,
}: {
  eyebrow?: string
  title: string
  description: string
  meta?: string
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      {eyebrow ? <div className="text-sm text-orange-300">{eyebrow}</div> : null}
      <div className="mt-2 text-xl font-semibold">{title}</div>
      <p className="mt-3 text-sm leading-6 text-white/70">{description}</p>
      {meta ? <div className="mt-4 text-xs uppercase tracking-wide text-white/40">{meta}</div> : null}
    </div>
  )
}
