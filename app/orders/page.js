import SectionHeading from '@/components/SectionHeading';
import OrderCard from '@/components/OrderCard';
import { orderCategories, orders } from '@/components/data';

export default function OrdersPage() {
  return (
    <main className="pageShell">
      <div className="shell pageHero compact">
        <h1>Заказы / Подряды</h1>
        <p>Размещайте и находите заказы, подряды, субподряды, коммерческие объекты и работы по благоустройству, поставкам, аренде и обслуживанию территорий.</p>
        <div className="heroActions">
          <a className="btn btn-primary" href="/orders/create">Разместить заказ</a>
          <a className="btn btn-ghost" href="/request">Найти подрядчика</a>
        </div>
      </div>

      <div className="shell filterBar card toneWhite">
        <input className="field grow" placeholder="Что вы ищете: объект, подряд, вид работ, регион..." />
        <select className="field selectField"><option>Страна</option></select>
        <select className="field selectField"><option>Город / регион</option></select>
        <select className="field selectField"><option>Категория</option></select>
        <select className="field selectField"><option>Бюджет</option></select>
        <select className="field selectField"><option>Сроки</option></select>
        <select className="field selectField"><option>Статус</option></select>
        <button className="btn btn-primary btn-tight">Найти</button>
      </div>

      <div className="shell chipsRow topGap">
        <span className="chip chip-active">Все категории</span>
        {orderCategories.map(item => <span key={item} className="chip">{item}</span>)}
      </div>

      <section className="section">
        <div className="shell ordersShowcase solo">
          <SectionHeading title="Актуальные предложения" text="Подборка свежих заказов и подрядных задач по разным направлениям строительства." />
          <div className="cardsGrid cardsGrid-3">
            {orders.map((item) => <OrderCard key={item.title} {...item} />)}
          </div>
        </div>
      </section>
    </main>
  );
}
