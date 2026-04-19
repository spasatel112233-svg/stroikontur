import Link from 'next/link';
import PageHero from '@/components/PageHero';
import FilterBar from '@/components/FilterBar';

const categories = ['Все категории', 'Монолит', 'Фасады', 'Электрика', 'Благоустройство', 'Опиловка', 'Поставка материалов', 'Аренда техники'];
const cards = [
  { badge: 'Срочно', title: 'Фасадные работы на жилом комплексе', text: 'Нужен подрядчик на фасад, утепление и облицовку. Важно быстро выйти на объект, подтвердить опыт по аналогичным ЖК и дать понятный график мобилизации в ближайшие 10 дней.', meta: 'Турция · от 38 млн ₽ · 4 месяца' },
  { badge: 'Новый', title: 'Благоустройство дворовой территории', text: 'Требуются дорожки, озеленение, освещение, малые формы и работы по ливневой системе. Нужен исполнитель, который способен закрыть комплекс работ без провалов по срокам и координации.', meta: 'Россия · от 11 млн ₽ · 45 дней' },
  { badge: 'VIP', title: 'Инженерные сети производственного корпуса', text: 'Ищем подрядчика на внутренние сети, вентиляцию, автоматику и пусконаладку с сильной инженерной командой, понятной исполнительной документацией и опытом промышленных объектов.', meta: 'Казахстан · по договору · 2 этапа' },
  { badge: 'Горящий заказ', title: 'Демонтаж и вывоз строительного мусора', text: 'Необходима бригада с техникой на срочный демонтаж внутренних перегородок и вывоз мусора. В приоритете оперативный выход, собственный транспорт и аккуратная работа внутри действующего объекта.', meta: 'Россия · от 4,2 млн ₽ · 18 дней' },
  { badge: 'Новый', title: 'Поставка инженерных материалов', text: 'Требуется поставщик кабеля, трубы, крепежа и комплектующих для объекта в две очереди. Важно подтверждение наличия, стабильная логистика и готовность работать по графику снабжения площадки.', meta: 'Россия · бюджет по заявке · 2 месяца' },
  { badge: 'Срочно', title: 'Аренда спецтехники под монолит', text: 'Нужны автокран, манипулятор и виброоборудование под устройство монолитного каркаса. Приоритет — исправная техника, опытный персонал и соблюдение графика выхода на площадку.', meta: 'Узбекистан · от 7,8 млн ₽ · 30 дней' }
];

export default function OrdersPage() {
  return (
    <main className="page">
      <div className="container">
        <PageHero
          tag="Заказы / Подряды"
          title="Заказы / Подряды"
          text="Размещайте и находите заказы, подряды, субподряды, коммерческие объекты, работы по благоустройству, поставкам, аренде и обслуживанию территорий."
          visual="machinery"
          actions={
            <>
              <Link href="/orders/create" className="btn btn-primary">Разместить заказ</Link>
              <Link href="/request?mode=contractor" className="btn btn-secondary">Найти подрядчика</Link>
            </>
          }
        />

        <section className="section section-soft">
          <FilterBar
            searchPlaceholder="Что вы ищете: объект, подряд, вид работ, регион..."
            selects={['Страна', 'Город / регион', 'Категория', 'Бюджет', 'Сроки', 'Статус']}
          />
          <div className="pill-row">
            {categories.map((item, idx) => <span key={item} className={`pill ${idx === 0 ? 'pill-active' : ''}`}>{item}</span>)}
          </div>
        </section>

        <section className="section">
          <div className="order-grid">
            {cards.map((card) => (
              <article key={card.title} className="order-card card">
                <span className="badge">{card.badge}</span>
                <h3 className="card-subtitle card-title-compact">{card.title}</h3>
                <p className="card-text">{card.text}</p>
                <div className="meta">{card.meta}</div>
                <div className="card-actions card-actions-bottom">
                  <Link href="/request?mode=contractor" className="btn btn-secondary">Подробнее</Link>
                  <Link href="/request?mode=contractor" className="btn btn-primary">Откликнуться</Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
