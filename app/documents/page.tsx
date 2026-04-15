export default function DocumentsPage() {
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
            <a href="/documents" className="text-white">
              Документы
            </a>
            <a href="/#disputes" className="transition hover:text-white">
              Споры
            </a>
            <a href="/#news" className="transition hover:text-white">
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
              Раздел документов
            </div>

            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Строительные документы для подрядчиков и заказчиков
            </h1>

            <p className="mt-6 text-base leading-8 text-white/70 md:text-lg">
              Здесь будут собраны основные документы для работы в строительной
              сфере: акты, КС-2, КС-3, претензии, договоры и уведомления.
            </p>
          </div>
        </section>

        <section className="border-t border-white/10 py-12">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm text-orange-300">Документ</div>
              <h2 className="mt-2 text-xl font-semibold">
                Акт выполненных работ
              </h2>
              <p className="mt-3 text-white/70">
                Для фиксации выполненного объёма работ и передачи результата.
              </p>
              <button className="mt-5 rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-400">
                Открыть
              </button>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm text-orange-300">Документ</div>
              <h2 className="mt-2 text-xl font-semibold">КС-2</h2>
              <p className="mt-3 text-white/70">
                Документ для оформления приёмки строительных работ.
              </p>
              <button className="mt-5 rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-400">
                Открыть
              </button>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm text-orange-300">Документ</div>
              <h2 className="mt-2 text-xl font-semibold">КС-3</h2>
              <p className="mt-3 text-white/70">
                Документ для оформления стоимости выполненных работ.
              </p>
              <button className="mt-5 rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-400">
                Открыть
              </button>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm text-orange-300">Документ</div>
              <h2 className="mt-2 text-xl font-semibold">
                Претензия по оплате
</h2>
              <p className="mt-3 text-white/70">
                Для требования оплаты выполненных работ и фиксации позиции.
              </p>
              <button className="mt-5 rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-400">
                Открыть
              </button>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm text-orange-300">Документ</div>
              <h2 className="mt-2 text-xl font-semibold">Договор подряда</h2>
              <p className="mt-3 text-white/70">
                Базовый договор для оформления строительных работ.
              </p>
              <button className="mt-5 rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-400">
                Открыть
              </button>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm text-orange-300">Документ</div>
              <h2 className="mt-2 text-xl font-semibold">
                Уведомление о сдаче работ
              </h2>
              <p className="mt-3 text-white/70">
                Для фиксации передачи результата работ заказчику.
              </p>
              <button className="mt-5 rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-400">
                Открыть
              </button>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/10 py-8 text-sm text-white/50">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>© 2026 СтройКонтур. Документы.</div>
            <div className="text-white/40">
              Акт · КС-2 · КС-3 · Претензия · Договор
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
