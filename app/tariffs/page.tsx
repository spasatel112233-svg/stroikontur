export default function TariffsPage() {
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
            <a href="/news" className="transition hover:text-white">
              Новости
            </a>
            <a href="/ideas" className="transition hover:text-white">
              Идеи
            </a>
            <a href="/tariffs" className="text-white">
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
              Раздел тарифов
            </div>

            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Тарифы и форматы работы по документам и спорам
            </h1>

            <p className="mt-6 text-base leading-8 text-white/70 md:text-lg">
              Здесь будут собраны базовые форматы помощи: подготовка документов,
              разбор спорных ситуаций, усиленная помощь и персональная работа.
            </p>
          </div>
        </section>

        <section className="border-t border-white/10 py-12">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm text-orange-300">Тариф</div>
              <h2 className="mt-2 text-2xl font-semibold">Документ</h2>
              <p className="mt-3 text-white/70">
                Подготовка одного строительного документа под конкретную задачу.
              </p>
              <button className="mt-5 rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-400">
                Выбрать
              </button>
            </div>

            <div className="rounded-2xl border border-orange-400/40 bg-orange-400/10 p-6">
              <div className="text-sm text-orange-200">Популярный тариф</div>
              <h2 className="mt-2 text-2xl font-semibold">Разбор ситуации</h2>
              <p className="mt-3 text-white/80">
                Анализ неоплаты, неподписанных актов, уклонения от приёмки и
                других спорных строительных кейсов.
              </p>
              <button className="mt-5 rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-400">
                Выбрать
              </button>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm text-orange-300">Тариф</div>
              <h2 className="mt-2 text-2xl font-semibold">Персональная помощь</h2>
              <p className="mt-3 text-white/70">
                Более глубокая работа по документам, спорам, объектам и
                проблемным ситуациям.
              </p>
              <button className="mt-5 rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-400">
                Выбрать
              </button>
            </div>
          </div>
        </section>
<section className="border-t border-white/10 py-12">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-bold">Что будет дальше</h2>
            <p className="mt-3 text-white/70">
              Позже здесь можно добавить полноценные цены, пакеты услуг,
              подробные сравнения тарифов и формы заявки по каждому направлению.
            </p>
          </div>
        </section>

        <footer className="border-t border-white/10 py-8 text-sm text-white/50">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>© 2026 СтройКонтур. Тарифы.</div>
            <div className="text-white/40">
              Документ · Разбор · Персональная помощь
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}