export default function IdeasPage() {
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
            <a href="/ideas" className="text-white">
              Идеи
            </a>
          </nav>

          <button className="rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-400">
            Оставить заявку
          </button>
        </header>

        <section className="py-14 md:py-20">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-1 text-sm text-orange-300">
              Раздел идей и технологий
            </div>

            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Идеи, технологии и мировой опыт в строительстве
            </h1>

            <p className="mt-6 text-base leading-8 text-white/70 md:text-lg">
              Здесь будут собраны необычные стройки, быстрые мосты, Китай,
              модульное строительство, интересные технологии и идеи, которые
              можно адаптировать под рынок.
            </p>
          </div>
        </section>

        <section className="border-t border-white/10 py-12">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm text-orange-300">Идея</div>
              <h2 className="mt-2 text-2xl font-semibold">
                Как в мире ускоряют строительство мостов
              </h2>
              <p className="mt-3 text-white/70">
                Кейсы про технологии, когда большие конструкции собирают заранее
                и устанавливают за часы или дни.
              </p>
              <button className="mt-5 rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-400">
                Смотреть
              </button>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm text-orange-300">Идея</div>
              <h2 className="mt-2 text-2xl font-semibold">
                Модульное строительство
              </h2>
              <p className="mt-3 text-white/70">
                Подборка решений, где часть объекта собирается заранее на
                производстве и быстро монтируется на площадке.
              </p>
              <button className="mt-5 rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-400">
                Смотреть
              </button>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm text-orange-300">Идея</div>
              <h2 className="mt-2 text-2xl font-semibold">
                Китай и мегапроекты
              </h2>
              <p className="mt-3 text-white/70">
                Интересные примеры из Китая: скорость, организация процессов,
                масштабные стройки и нестандартные решения.
              </p>
              <button className="mt-5 rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-400">
Смотреть
              </button>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm text-orange-300">Идея</div>
              <h2 className="mt-2 text-2xl font-semibold">
                Технологии, которые можно адаптировать
              </h2>
              <p className="mt-3 text-white/70">
                Идеи и методы, которые можно брать из мирового опыта и
                адаптировать под локальную стройку и подрядные процессы.
              </p>
              <button className="mt-5 rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-400">
                Смотреть
              </button>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/10 py-8 text-sm text-white/50">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>© 2026 СтройКонтур. Идеи и технологии.</div>
            <div className="text-white/40">
              Идеи · Технологии · Китай · Мосты
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}