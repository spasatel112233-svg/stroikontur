import { InfoCard, PageHero, SectionTitle, SiteShell } from '../../components/site-shell'

const filters = ['Страна', 'Город / регион', 'Категория работ', 'Бюджет', 'Сроки', 'Тип заказа']

const categories = [
  'Общестроительные работы',
  'Монолит / бетон / фундамент',
  'Фасады / кровля / остекление',
  'Электромонтаж / слаботочка',
  'Сантехника / ОВиК / канализация',
  'Благоустройство / дорожные работы',
  'Опиловка / вывоз мусора / расчистка',
  'Материалы / техника / аренда',
]

const orders = [
  {
    title: 'Субподряд на монолитные работы',
    description:
      'Требуется подрядчик на монолит, арматуру и бетонные работы. Нужна команда с опытом на складских и производственных объектах.',
    meta: 'Россия · Москва · от 24 млн ₽ · старт через 7 дней',
  },
  {
    title: 'Фасад и утепление на жилом комплексе',
    description:
      'Нужен фасадный подрядчик под мокрый фасад и облицовку. Рассматриваем компании с портфолио и руководителем на объект.',
    meta: 'Турция · Стамбул · от 38 млн ₽ · 4 месяца',
  },
  {
    title: 'Опиловка аварийных деревьев и вывоз',
    description:
      'Муниципальный заказ на санитарную обрезку, кронирование, спил деревьев, вывоз порубочных остатков и уборку территории.',
    meta: 'Волгоград · благоустройство · срочно',
  },
  {
    title: 'Поставка бетона и аренда бетононасоса',
    description:
      'Ищем поставщика бетона и подряд на работу бетононасоса на 3 очереди строительства. Желателен собственный автопарк.',
    meta: 'Казахстан · Астана · материалы / техника',
  },
  {
    title: 'Отделочные работы по офисному центру',
    description:
      'Шпаклёвка, покраска, плитка, потолки, двери и перегородки. Нужна компания или бригада на полный объём.',
    meta: 'Россия · Санкт-Петербург · от 11 млн ₽',
  },
  {
    title: 'Инженерные сети и слаботочка',
    description:
      'Сети связи, видеонаблюдение, контроль доступа, автоматика. Рассматриваются подрядчики и профильные специалисты.',
    meta: 'ОАЭ · Дубай · 2 этапа проекта',
  },
]

export default function OrdersPage() {
  return (
    <SiteShell activePath="/orders">
      <PageHero
        eyebrow="Заказы / Подряды"
        title="Международная лента заказов, подрядов, субподрядов и объектов"
        description="Эта страница должна стать ядром агрегатора: здесь заказчики размещают объекты и подряды, а подрядчики, компании и специалисты быстро находят оплачиваемую работу и откликаются на подходящие проекты."
        actions={
          <>
            <a
              href="/request"
              className="rounded-2xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-400"
            >
              Разместить заказ
            </a>
            <a
              href="/specialists"
              className="rounded-2xl border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
            >
              Найти специалистов
            </a>
          </>
        }
      />

      <section className="border-t border-white/10 py-12">
        <SectionTitle
          title="Поиск и фильтры"
          description="В полной версии здесь будут живой поиск, страна, город, категория, бюджет, сроки, тип заказа, быстрые категории и ИИ-подбор подходящих карточек."
        />
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-6">
          {filters.map((filter) => (
            <div key={filter} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white/70">
              {filter}
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 py-12">
        <SectionTitle
          title="Быстрые категории заказов"
          description="Категории должны быть широкими, чтобы платформа сразу подходила под стройку, благоустройство, обслуживание территорий, снабжение, технику и сопутствующие услуги."
        />
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white/80">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 py-12">
        <SectionTitle
          title="Примеры карточек заказов"
          description="Это макет будущей ленты: в каждом заказе будут бюджет, сроки, география, тип работ, статус, заказчик, кнопки “Подробнее” и “Откликнуться”."
        />
        <div className="grid gap-4 xl:grid-cols-2">
          {orders.map((order) => (
            <div key={order.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="text-sm text-orange-300">Активный заказ</div>
                <div className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/50">Открыт для откликов</div>
              </div>
              <h3 className="mt-3 text-2xl font-semibold">{order.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/70">{order.description}</p>
              <div className="mt-4 text-xs uppercase tracking-wide text-white/40">{order.meta}</div>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href="/request" className="rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-400">
                  Откликнуться
                </a>
                <a href="/companies" className="rounded-xl border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/5">
                  Подробнее
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 py-12">
        <div className="grid gap-4 lg:grid-cols-3">
          <InfoCard
            eyebrow="Что важно для запуска"
            title="Разместить заказ"
            description="Кнопка и форма размещения должны быть максимально простыми: кто заказчик, страна, бюджет, сроки, категория, описание и контакты."
          />
          <InfoCard
            eyebrow="Что важно для запуска"
            title="Категории без урезания"
            description="Сразу закладываем максимально широкий список категорий: стройка, благоустройство, опиловка, материалы, техника, аренда, инструменты и сервис."
          />
          <InfoCard
            eyebrow="Что важно для запуска"
            title="Подготовка под ИИ"
            description="Позже ИИ будет рекомендовать исполнителей, подсказывать лучшие формулировки заказа и помогать фильтровать отклики."
          />
        </div>
      </section>
    </SiteShell>
  )
}
