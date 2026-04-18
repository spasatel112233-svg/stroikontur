import { InfoCard, PageHero, SectionTitle, SiteShell } from '../components/site-shell'

const categoryGroups = [
  'Общестроительные работы',
  'Монолит и бетон',
  'Фасады и кровля',
  'Отделка',
  'Электрика и слаботочка',
  'Сантехника и инженерка',
  'Благоустройство и дорожные работы',
  'Опиловка и расчистка территории',
  'Материалы и снабжение',
  'Техника и аренда',
  'Инструменты и оборудование',
  'Сметы и тендерный анализ',
]

const featuredOrders = [
  {
    title: 'Фасадные работы на жилом комплексе',
    description:
      'Нужен подрядчик на фасад, утепление и облицовку. Объект в Турции, старт в ближайшие 10 дней.',
    meta: 'Турция · от 38 млн ₽ · 4 месяца',
  },
  {
    title: 'Монолитный субподряд на складской комплекс',
    description:
      'Ищем бригаду и подрядчика на монолит, арматуру и бетон. Требуется опыт на промышленных объектах.',
    meta: 'Россия · от 24 млн ₽ · Срочно',
  },
  {
    title: 'Опиловка и вывоз порубочных остатков',
    description:
      'Муниципальный заказ на санитарную обрезку, спил аварийных деревьев и вывоз мусора.',
    meta: 'Волгоград · благоустройство · 18 дней',
  },
]

const specialistCards = [
  {
    title: 'Прораб / монолит',
    description:
      '12 лет опыта, Россия / СНГ, промышленные и жилые объекты, готовность к командировкам.',
    meta: 'Проверенный профиль · Русский / Английский',
  },
  {
    title: 'Инженер ПТО / сметчик',
    description:
      'Исполнительная документация, КС-2 / КС-3, тендерная аналитика, сопровождение объектов.',
    meta: 'Удалённо / офис · Россия / Казахстан',
  },
  {
    title: 'Бригада фасадчиков',
    description:
      'Под ключ: мокрый фасад, вентилируемый фасад, утепление, реставрационные работы.',
    meta: 'Компания / бригада · 20+ человек',
  },
]

const companyCards = [
  {
    title: 'Подрядные компании',
    description:
      'Карточки компаний с географией работ, отзывами, лицензиями, проектами и услугами.',
  },
  {
    title: 'Поставщики материалов',
    description:
      'Бетон, металл, инженерные материалы, фасадные системы, логистика и снабжение объектов.',
  },
  {
    title: 'Аренда техники и инструмента',
    description:
      'Экскаваторы, краны, самосвалы, генераторы, леса, опалубка, виброплиты и оборудование.',
  },
]

export default function Home() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Международный строительный агрегатор"
        title="Заказы, подряды, специалисты, компании, документы и ИИ в одной платформе"
        description="СтройКонтур соединяет заказчиков, подрядчиков, компании и специалистов. Платформа помогает искать объекты, тендеры, материалы, технику, документы, сметы и решения по спорам — по России, СНГ и другим странам."
        actions={
          <>
            <a
              href="/orders"
              className="rounded-2xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-400"
            >
              Смотреть заказы
            </a>
            <a
              href="/request"
              className="rounded-2xl border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
            >
              Разместить заявку
            </a>
            <a
              href="/documents"
              className="rounded-2xl border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
            >
              Документы и споры
            </a>
          </>
        }
      />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <InfoCard
          eyebrow="Кто заходит на платформу"
          title="Заказчики"
          description="Размещают объекты, заказы, подряды, тендеры, запросы на материалы, технику и специалистов."
        />
        <InfoCard
          eyebrow="Кто заходит на платформу"
          title="Подрядчики"
          description="Ищут заказы, субподряды, людей, снабжение, документы и быстрые решения по объектам."
        />
        <InfoCard
          eyebrow="Кто заходит на платформу"
          title="Специалисты"
          description="Находят работу, показывают опыт, получают отклики и продвигают свои навыки."
        />
        <InfoCard
          eyebrow="Кто заходит на платформу"
          title="Компании"
          description="Ведут профили, получают лиды, ищут сотрудников, подрядчиков, технику и материалы."
        />
      </section>

      <section className="border-t border-white/10 py-12">
        <SectionTitle
          title="Полный набор категорий под стройку, подряд и эксплуатацию"
          description="Сразу закладываем широкий каталог работ: от монолита и фасадов до опиловки, вывоза мусора, аренды техники, инструментов, снабжения и сметного анализа."
        />
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {categoryGroups.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white/80"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 py-12">
        <SectionTitle
          title="Заказы / Подряды — ядро платформы"
          description="Здесь будут международные заказы, коммерческие объекты, муниципальные подряды, субподряды, работы по благоустройству, обслуживанию территорий, поставкам и аренде."
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {featuredOrders.map((item) => (
            <InfoCard
              key={item.title}
              eyebrow="Актуальный заказ"
              title={item.title}
              description={item.description}
              meta={item.meta}
            />
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 py-12">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <SectionTitle
              title="Документы, споры и неоплата — один из главных денежных блоков"
              description="Отдельный раздел под претензии, акты, КС-2, КС-3, договоры, уведомления, заявления, жалобы, работу с неоплатой и правовым давлением на заказчика или подрядчика."
            />
            <div className="grid gap-4 md:grid-cols-2">
              <InfoCard
                eyebrow="Документы"
                title="Шаблоны и генераторы"
                description="Договоры, акты, КС-2, КС-3, претензии, уведомления, шаблоны заявлений и пакеты документов по объектам."
              />
              <InfoCard
                eyebrow="Споры"
                title="Неоплата и неподписанные акты"
                description="Пошаговые сценарии: что делать, если заказчик не платит, тянет приёмку, спорит по объёму или качеству работ."
              />
            </div>
          </div>

          <div className="rounded-3xl border border-orange-400/30 bg-orange-400/10 p-6">
            <div className="text-sm text-orange-200">ИИ-модуль платформы</div>
            <h3 className="mt-2 text-2xl font-bold">Не просто чат, а рабочий ИИ-помощник</h3>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-white/80">
              <li>— подсказывает, куда идти по платформе</li>
              <li>— помогает заполнить заявку и отклик</li>
              <li>— анализирует тендеры и закупки</li>
              <li>— помогает со сметами и документами</li>
              <li>— переводит карточки и заявки между языками</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-12">
        <SectionTitle
          title="Специалисты, компании, материалы и техника"
          description="Платформа должна закрывать не одну задачу, а весь цикл: заказ → люди → подрядчик → компания → материалы → техника → документы → сопровождение."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {specialistCards.map((card) => (
            <InfoCard
              key={card.title}
              eyebrow="Специалисты"
              title={card.title}
              description={card.description}
              meta={card.meta}
            />
          ))}
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {companyCards.map((card) => (
            <InfoCard key={card.title} eyebrow="Ресурсы платформы" title={card.title} description={card.description} />
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 py-12">
        <SectionTitle
          title="Международность, перевод и мобильность"
          description="Сразу закладываем платформу под Россию, СНГ и зарубежные рынки. В будущем: переключение языков, автоперевод, выбор страны и мобильное приложение."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <InfoCard title="Русский / Английский" description="Базовые языки интерфейса и поиска для международной выдачи." />
          <InfoCard title="Турецкий / Китайский" description="Расширение под рынки, где нужны подрядчики, техника, материалы и производственные контакты." />
          <InfoCard title="Слабый интернет" description="Лёгкая архитектура, мобильная версия, кэш и быстрая выдача, чтобы платформа работала стабильно." />
          <InfoCard title="Подготовка под приложение" description="Сразу делаем проект так, чтобы потом перевести его в мобильное приложение без полной переделки." />
        </div>
      </section>

      <section className="border-t border-white/10 py-12">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <div className="inline-flex rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-1 text-sm text-orange-300">
                План развития
              </div>
              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                За несколько этапов превращаем MVP в серьёзный агрегатор
              </h2>
              <p className="mt-4 max-w-3xl text-white/70">
                Сначала собираем крупные страницы и основные роли. Потом усиливаем каталогами,
                документами, ИИ, международностью, монетизацией, аналитикой и мобильным режимом.
              </p>
            </div>
            <div className="grid gap-3 text-sm text-white/80">
              <div className="rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3">1. Заказы / Подряды</div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3">2. Специалисты и компании</div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3">3. Тендеры, документы, споры</div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3">4. Материалы, техника, аренда</div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3">5. ИИ, сметы, перевод, приложение</div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
