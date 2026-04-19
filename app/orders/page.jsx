import Link from 'next/link';
import PageHero from '@/components/PageHero';
import FilterBar from '@/components/FilterBar';
import HeroVisual from '@/components/HeroVisual';

const categories = ['Все категории', 'Монолит', 'Фасады', 'Электрика', 'Благоустройство', 'Опиловка', 'Поставка материалов', 'Аренда техники'];
const cards = [
  { badge: 'Срочно', title: 'Фасадные работы на жилом комплексе', text: 'Ищем подрядчика на фасадный контур: утепление, облицовку, мокрый фасад и узлы примыканий. Нужна команда с подтверждённым опытом на жилых комплексах и готовностью быстро выйти на площадку.', meta: 'Турция · от 38 млн ₽ · старт через 10 дней' },
  { badge: 'Новый', title: 'Благоустройство дворовой территории', text: 'Требуются дорожки, озеленение, освещение, малые формы, ливневая система и закрытие дворового контура. Рассматриваем подрядчиков под полный пакет работ с понятным графиком производства.', meta: 'Россия · от 11 млн ₽ · 45 дней' },
  { badge: 'VIP', title: 'Инженерные сети производственного корпуса', text: 'Нужен подрядчик на внутренние сети, вентиляцию, автоматику и пусконаладку. В приоритете команды, которые ведут объект под ключ и умеют работать с исполнительной документацией.', meta: 'Казахстан · по договору · 2 этапа' },
  { badge: 'Горящий заказ', title: 'Демонтаж и вывоз строительного мусора', text: 'Необходима бригада с техникой на срочный демонтаж внутренних перегородок, сортировку и организованный вывоз мусора. Важно быстрое мобилизационное плечо и безопасная работа внутри действующего объекта.', meta: 'Россия · от 4,2 млн ₽ · 18 дней' },
  { badge: 'Новый', title: 'Поставка инженерных материалов', text: 'Требуется поставщик кабеля, трубы, крепежа и комплектующих для объекта в две очереди. Нужны подтверждённые сроки поставки, закрывающие документы и понятный график отгрузок.', meta: 'Россия · бюджет по заявке · 2 месяца' },
  { badge: 'Срочно', title: 'Аренда спецтехники под монолит', text: 'Нужны автокран, манипулятор и виброоборудование под устройство монолитного каркаса. Ищем поставщика техники с оператором, своевременным выходом и понятной ставкой на весь цикл работ.', meta: 'Узбекистан · от 7,8 млн ₽ · 30 дней' }
];

export default function OrdersPage() {
  return (
    <main className="page">
      <div className="container">
        <PageHero tag="Заказы / Подряды" title="Заказы / Подряды" text="Размещайте и находите заказы, подряды, субподряды, коммерческие объекты, работы по благоустройству, поставкам, аренде и обслуживанию территорий. Всё собрано в более плотной деловой витрине без пустых блоков." visual="site" actions={<><Link href="/orders/create" className="btn btn-primary">Разместить заказ</Link><Link href="/request?mode=contractor" className="btn btn-secondary">Найти подрядчика</Link></>} />
        <section className="section section-soft">
          <FilterBar searchPlaceholder="Что вы ищете: объект, подряд, вид работ, регион..." selects={['Страна', 'Город / регион', 'Категория', 'Бюджет', 'Статус']} />
          <div className="pill-row">{categories.map((item, idx) => <span key={item} className={`pill ${idx===0?'pill-active':''}`}>{item}</span>)}</div>
        </section>
        <section className="section orders-showcase-section">
          <div className="section-header section-header-stack-mobile">
            <div><h2 className="section-title">Актуальные заказы</h2><p className="section-text">Карточки стали плотнее: больше полезного текста, отдельная строка с условиями и кнопки, которые больше не наезжают друг на друга.</p></div>
            <Link href="/request" className="btn btn-primary">Получить подборку</Link>
          </div>
          <div className="orders-showcase-grid">
            <div className="order-grid order-grid-reworked">{cards.map((card)=><article key={card.title} className="order-card order-card-reworked card"><span className="badge">{card.badge}</span><h3 className="card-subtitle card-title-compact">{card.title}</h3><p className="card-text card-text-long">{card.text}</p><div className="meta meta-strong">{card.meta}</div><div className="card-actions card-actions-equal"><Link href="/request?mode=contractor" className="btn btn-secondary">Подробнее</Link><Link href="/request?mode=contractor" className="btn btn-primary">Откликнуться</Link></div></article>)}</div>
            <aside className="orders-side-stack"><div className="visual-card visual-card-feature card"><HeroVisual variant="handshake" /></div><div className="card side-note-card"><span className="page-tag">Поиск под задачу</span><h3 className="card-subtitle">Нужен подрядчик, техника или поставщик?</h3><p className="card-text">Оставьте запрос, и платформа соберёт отклики под объект, этап или срочную задачу. Этот блок теперь отделён от карточек, чтобы не ломать сетку списка.</p><Link href="/request?mode=contractor" className="btn btn-primary btn-full">Оставить запрос</Link></div></aside>
          </div>
        </section>
      </div>
    </main>
  );
}
