export default function RequestPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-2xl px-6 py-3 md:px-10 lg:px-12">
        <div className="mb-6 flex items-center justify-between">
  <a href="/" className="text-sm text-white/60 transition hover:text-white">
    ← На главную
  </a>

  <a
    href="/"
    className="text-xl font-bold tracking-tight text-orange-400 transition hover:text-orange-300"
  >
    СтройКонтур
  </a>
</div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl md:p-6">
          <div className="mb-6">
            <div className="mb-3 inline-flex rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-1 text-sm text-orange-300">
              Заявка на платформу
            </div>
            <h1 className="text-3xl font-bold leading-tight md:text-4xl">
              Оставить заявку
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/70 md:text-sm">
              Оставьте информацию о себе и вашей задаче. Мы поможем найти
              специалистов, подрядчиков, компанию, работу или подходящий объект.
            </p>
          </div>

          <form className="mt-6 grid gap-4">
            <div>
              <label className="mb-2 block text-sm text-white/80">Кто вы?</label>
              <select className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-orange-400">
                <option>Заказчик</option>
                <option>Подрядчик</option>
                <option>Специалист</option>
                <option>Компания</option>
                <option>Ищу работу</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm text-white/80">Имя / Компания</label>
              <input
                type="text"
                placeholder="Введите имя или название компании"
                className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-orange-400"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-white/80">Телефон</label>
                <input
                  type="text"
                  placeholder="Введите телефон"
                  className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-orange-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/80">Email</label>
                <input
                  type="email"
                  placeholder="Введите email"
                  className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-orange-400"
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-white/80">Страна</label>
                <input
                  type="text"
                  placeholder="Например: Россия"
                  className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-orange-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/80">Город / Регион</label>
                <input
                  type="text"
                  placeholder="Введите город или регион"
                  className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-orange-400"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm text-white/80">Что вы ищете?</label>
              <select className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-orange-400">
<option>Подрядчика</option>
                <option>Специалистов</option>
                <option>Компанию</option>
                <option>Работу</option>
                <option>Объект / заказ</option>
                <option>Тендер</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm text-white/80">Описание заявки</label>
              <textarea
                rows={5}
                placeholder="Опишите подробно, кого или что вы ищете"
                className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-orange-400"
              />
            </div>

            <div className="pt-4 flex justify-end">
              <button
                type="submit"
                className="w-full rounded-xl bg-orange-500 px-6 py-2 text-sm font-medium text-white transition hover:bg-orange-400 md:w-auto"
              >
                Отправить заявку
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
