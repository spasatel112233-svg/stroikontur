export default function NewsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-6 md:px-10 lg:px-12">
        <header className="flex items-center justify-between border-b border-white/10 pb-5">
          <a
            href="/"
            className="text-2xl font-bold tracking-tight text-orange-400"
          >
            СтройКонтур
          </a>

          <nav className="hidden gap-6 text-sm text-white/80 md:flex">
            <a href="/" className="transition hover:text-white">
              Главная
            </a>
            <a href="/documents" className="transition hover:text-white">
              Документы
            </a>
            <a href="/disputes" className="transition hover:text-white">
              Споры
            </a>
            <a href="/news" className="text-white">
              Новости
            </a>
            <a href="/#tariffs" className="transition hover:text-white">
              Тарифы
            </a>
          </nav>

          <button className="rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-400">
            Оставить заявку
          </button>
        </header>

        <section className="py-14 md:py-20">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-1 text-sm text-orange-300">
              Раздел новостей
            </div>

            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Новости, законы и изменения в строительной сфере
            </h1>

            <p className="mt-6 text-base leading-8 text-white/70 md:text-lg">
              Здесь будут собраны важные изменения в строительстве, правовые
              акты, постановления, приказы, разъяснения и практические новости
              для подрядчиков и заказчиков.
            </p>
          </div>
        </section>

        <section className="border-t border-white/10 py-12">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm text-orange-300">Новость</div>
              <h2 className="mt-2 text-2xl font-semibold">
                Изменения в строительных документах
              </h2>
              <p className="mt-3 text-white/70">
                Здесь будут публиковаться обновления по актам, формам, правилам
                и требованиям к оформлению документов.
              </p>
              <button className="mt-5 rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-400">
                Читать
              </button>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm text-orange-300">Новость</div>
              <h2 className="mt-2 text-2xl font-semibold">
                Постановления и приказы
              </h2>
              <p className="mt-3 text-white/70">
                Подборка важных документов и краткие объяснения, что именно
                меняется для подрядчиков и заказчиков.
              </p>
              <button className="mt-5 rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-400">
                Читать
              </button>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm text-orange-300">Новость</div>
              <h2 className="mt-2 text-2xl font-semibold">
                Практика по строительным спорам
              </h2>
              <p className="mt-3 text-white/70">
                Краткие разборы важных моментов, которые могут влиять на оплату,
                приёмку и позицию в спорных ситуациях.
              </p>
<button className="mt-5 rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-400">
                Читать
              </button>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm text-orange-300">Новость</div>
              <h2 className="mt-2 text-2xl font-semibold">
                Что важно отслеживать подрядчику
              </h2>
              <p className="mt-3 text-white/70">
                Новости, которые помогают не выпадать из контекста рынка,
                законодательства и строительной практики.
              </p>
              <button className="mt-5 rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-400">
                Читать
              </button>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/10 py-8 text-sm text-white/50">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>© 2026 СтройКонтур. Новости и законы.</div>
            <div className="text-white/40">
              Новости · Законы · Приказы · Практика
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}