export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-6 md:px-10 lg:px-12">
        <header className="flex items-center justify-between border-b border-white/10 pb-5">
          <div className="text-2xl font-bold tracking-tight text-orange-400">
            СтройКонтур
          </div>

          <nav className="hidden gap-6 text-sm text-white/80 md:flex">
            <a href="#services" className="transition hover:text-white">
              Услуги
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
            <a href="/tariffs" className="transition hover:text-white">
              Тарифы
            </a>
          </nav>

          <button className="rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-400">
            Оставить заявку
          </button>
        </header>

        <section className="grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
          <div>
            <div className="mb-4 inline-flex rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-1 text-sm text-orange-300">
              Сервис для подрядчиков и заказчиков
            </div>

            <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
              Документы, споры, новости и решения для строительных проектов
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
              СтройКонтур помогает быстро подготовить строительные документы,
              разобраться с неоплатой, следить за изменениями в законах,
              изучать мировой опыт и оставлять заявки по проблемным объектам.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
  href="/documents"
  className="rounded-2xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-400"
>
  Создать документ
</a>
              <a
  href="/disputes"
  className="rounded-2xl border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
>
  Разобрать ситуацию
</a>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 text-sm text-white/70 sm:grid-cols-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-bold text-white">6+</div>
                <div className="mt-1">документов на старте</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="mt-1">доступ к сайту</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-bold text-white">1</div>
                <div className="mt-1">единый контур</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-bold text-white">MVP</div>
                <div className="mt-1">первая версия</div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-2xl">
            <div className="grid gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-sm text-orange-300">Документы</div>
                <div className="mt-2 text-xl font-semibold">
Акт, КС-2, КС-3, претензия, договор
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-sm text-orange-300">Споры и неоплата</div>
                <div className="mt-2 text-xl font-semibold">
                  Если заказчик не платит или не подписывает акты
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-sm text-orange-300">Новости и идеи</div>
                <div className="mt-2 text-xl font-semibold">
                  Законы, технологии, мировой опыт и финансирование объектов
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="border-t border-white/10 py-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold">Что можно сделать на сайте</h2>
            <p className="mt-3 max-w-2xl text-white/70">
              СтройКонтур — это единая площадка для документов, споров,
              новостей, идей и решений по строительным проектам.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">Генератор документов</h3>
              <p className="mt-3 text-white/70">
                Подготовка актов, КС-2, КС-3, претензий, договоров и уведомлений
                под реальные задачи подрядчика.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">Разбор споров</h3>
              <p className="mt-3 text-white/70">
                Помощь при неоплате, неподписанных актах, уклонении от приёмки и
                спорных ситуациях с заказчиком.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">Новости и технологии</h3>
              <p className="mt-3 text-white/70">
                Следим за изменениями в строительстве, законами и интересными
                решениями из России и всего мира.
              </p>
            </div>
          </div>
        </section>

        <section id="documents" className="border-t border-white/10 py-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold">Популярные документы</h2>
            <p className="mt-3 max-w-2xl text-white/70">
              Самые востребованные документы, которые чаще всего нужны
              подрядчикам и строительным компаниям.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-sm text-orange-300">Документ</div>
              <div className="mt-2 text-lg font-semibold">
                Акт выполненных работ
              </div>
              <p className="mt-3 text-sm text-white/70">
                Для фиксации выполненного объёма работ и приёмки результата.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-sm text-orange-300">Документ</div>
              <div className="mt-2 text-lg font-semibold">КС-2 и КС-3</div>
              <p className="mt-3 text-sm text-white/70">
                Для оформления строительных работ и их стоимости.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-sm text-orange-300">Документ</div>
              <div className="mt-2 text-lg font-semibold">
                Претензия по оплате
              </div>
              <p className="mt-3 text-sm text-white/70">
Для требования оплаты выполненных работ и фиксации позиции.
              </p>
            </div>
          </div>
        </section>

        <section id="disputes" className="border-t border-white/10 py-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold">Споры и неоплата</h2>
            <p className="mt-3 max-w-2xl text-white/70">
              Если заказчик не платит, не подписывает акты или уклоняется от
              приёмки, здесь начинается разбор ситуации.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-2xl font-bold">Если заказчик не платит</h3>
              <p className="mt-3 text-white/70">
                Подготовим документы, поможем разобраться в ситуации и покажем
                следующий шаг: претензия, переговоры или разбор спора.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-2xl font-bold">Если не подписывают акты</h3>
              <p className="mt-3 text-white/70">
                Разберём, как зафиксировать выполнение работ и какие документы
                подготовить в первую очередь.
              </p>
            </div>
          </div>
        </section>

        <section id="news" className="border-t border-white/10 py-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold">Новости и законы</h2>
            <p className="mt-3 max-w-2xl text-white/70">
              Свежие изменения в строительстве, правовые акты, разъяснения,
              постановления и всё, что важно подрядчику и заказчику.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm text-orange-300">Новости</div>
              <h3 className="mt-2 text-xl font-semibold">
                Изменения в правилах и документах
              </h3>
              <p className="mt-3 text-white/70">
                Будем публиковать важные обновления по строительной отрасли и
                правовым изменениям.
              </p>
            </div>

            <div
              id="ideas"
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="text-sm text-orange-300">Идеи и технологии</div>
              <h3 className="mt-2 text-xl font-semibold">
                Мировой опыт и интересные стройрешения
              </h3>
              <p className="mt-3 text-white/70">
                Китай, мосты, модульное строительство, быстрые технологии и
                идеи, которые можно адаптировать под рынок.
              </p>
            </div>
          </div>
        </section>

        <section id="tariffs" className="border-t border-white/10 py-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold">Тарифы</h2>
            <p className="mt-3 max-w-2xl text-white/70">
              Базовые форматы работы для первой версии сервиса.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">Документ</h3>
              <p className="mt-3 text-white/70">
                Быстрая подготовка одного строительного документа.
              </p>
            </div>

            <div className="rounded-2xl border border-orange-400/40 bg-orange-400/10 p-6">
              <h3 className="text-xl font-semibold">Разбор ситуации</h3>
              <p className="mt-3 text-white/80">
                Анализ спора, неоплаты или неподписанных актов.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
<h3 className="text-xl font-semibold">Персональная помощь</h3>
              <p className="mt-3 text-white/70">
                Более глубокая помощь по документам, спорам и объектам.
              </p>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/10 py-8 text-sm text-white/50">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>© 2026 СтройКонтур. Первая версия MVP.</div>
            <div className="text-white/40">
              Документы · Споры · Новости · Идеи · Тарифы
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}