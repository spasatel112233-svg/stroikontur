export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl">
        <h1 className="mb-6 text-3xl font-bold text-center">Регистрация</h1>

        <form className="space-y-4">
          <div>
            <label className="mb-2 block text-sm text-white/70">Имя</label>
            <input
              type="text"
              placeholder="Введите имя"
              className="w-full rounded-xl border border-orange-400/40 bg-slate-900 px-4 py-3 text-white outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-white/70">Email</label>
            <input
              type="email"
              placeholder="Введите email"
              className="w-full rounded-xl border border-orange-400/40 bg-slate-900 px-4 py-3 text-white outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-white/70">Пароль</label>
            <input
              type="password"
              placeholder="Введите пароль"
              className="w-full rounded-xl border border-orange-400/40 bg-slate-900 px-4 py-3 text-white outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-orange-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-orange-400"
          >
            Зарегистрироваться
          </button>
        </form>
      </div>
    </main>
  )
}
