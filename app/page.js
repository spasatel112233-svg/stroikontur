import HeroVisual from '@/components/HeroVisual';
import SectionHeading from '@/components/SectionHeading';
import OrderCard from '@/components/OrderCard';
import DocumentCard from '@/components/DocumentCard';
import DisputeCard from '@/components/DisputeCard';
import { orderCategories, orders, documents, disputes } from '@/components/data';

export default function HomePage() {
  return (
    <main>
      <section className="heroSection">
        <div className="shell heroGrid">
          <div className="heroTextPanel">
            <span className="eyebrow">Строительная платформа</span>
            <h1>Единая платформа для заказов, подрядов, специалистов, компаний и документов</h1>
            <p>
              Помогаем находить исполнителей, размещать заказы, работать с документами и быстрее решать спорные вопросы по проектам.
            </p>
            <div className="heroActions">
              <a className="btn btn-primary" href="/orders/create">Разместить заказ</a>
              <a className="btn btn-light" href="/documents">Документы и споры</a>
            </div>
            <div className="heroMiniGrid">
              <div className="miniPanel">
                <h3>Заказы</h3>
                <p>Подряды, субподряды, коммерческие и сервисные работы.</p>
              </div>
              <div className="miniPanel">
                <h3>Документы</h3>
                <p>Шаблоны, формы, претензии, акты и деловые материалы.</p>
              </div>
              <div className="miniPanel">
                <h3>Ресурсы</h3>
                <p>Специалисты, компании, техника и снабжение под объект.</p>
              </div>
            </div>
          </div>
          <HeroVisual />
        </div>
      </section>

      <section className="section softSection">
        <div className="shell sectionCard toneWarm">
          <SectionHeading title="Для кого платформа" text="Платформа помогает заказчикам, подрядчикам, специалистам и компаниям быстрее находить нужные решения и рабочие контакты." />
          <div className="grid grid-4">
            <article className="card toneWhite smallInfo"><h3>Заказчики</h3><p>Размещают объекты, заказы, тендеры, а также запросы на материалы, технику и специалистов.</p></article>
            <article className="card toneWhite smallInfo"><h3>Подрядчики</h3><p>Ищут заказы, объекты, субподряды, материалы, технику и рабочие решения для выполнения задач.</p></article>
            <article className="card toneWhite smallInfo"><h3>Специалисты</h3><p>Находят работу, показывают опыт, откликаются на предложения и продвигают свои навыки.</p></article>
            <article className="card toneWhite smallInfo"><h3>Компании</h3><p>Ведут профиль, получают лиды, ищут подрядчиков, специалистов, технику и материалы.</p></article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading title="Категории работ" text="Широкий каталог направлений: от монолита и фасадов до благоустройства, вывоза мусора, аренды техники и снабжения." />
          <div className="chipsRow">
            {orderCategories.map((item, idx) => (
              <span className={`chip ${idx === 0 ? 'chip-active' : ''}`} key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell ordersShowcase">
          <div className="ordersCopy">
            <SectionHeading title="Заказы / Подряды" text="Здесь можно размещать и находить заказы, подряды, субподряды, коммерческие объекты, работы по благоустройству, поставкам, аренде и обслуживанию территорий." action={<a className="btn btn-primary" href="/orders">Все заказы</a>} />
            <div className="cardsGrid cardsGrid-3">
              {orders.map((item) => <OrderCard key={item.title} {...item} />)}
            </div>
          </div>
          <div className="sideVisual cranePhotoLike">
            <div className="machine excavator" />
            <div className="siteLabel">Техника · кран · объект</div>
          </div>
        </div>
      </section>

      <section className="section splitSection">
        <div className="shell splitGrid">
          <div className="card featurePanel constructionPanel">
            <div>
              <span className="eyebrow">Проекты и чертежи</span>
              <h2>Загрузите проект или чертёж и получите наглядную визуализацию</h2>
              <p>Сервис помогает перевести рабочие материалы в понятный визуальный формат для презентации, согласования и обсуждения.</p>
              <div className="cardActions">
                <a className="btn btn-primary" href="/request">Загрузить проект</a>
                <a className="btn btn-ghost" href="/request">Загрузить чертёж</a>
              </div>
            </div>
            <div className="inlineVisual visualConstruction" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell docsDisputesGrid">
          <div className="card bigPanel toneWarm">
            <SectionHeading title="Документы и споры" text="Шаблоны актов, КС-2, КС-3, договоров, претензий, жалоб и материалов для работы по спорным ситуациям." />
            <div className="grid grid-2">
              <div className="card toneWhite nestedCard">
                <h3>Документы по заказам и подрядам</h3>
                <p>Шаблоны договоров, актов, КС-2, КС-3, претензий и других документов для работы по строительным проектам.</p>
                <a className="linkAction" href="/documents">Открыть документы</a>
              </div>
              <div className="card toneWhite nestedCard">
                <h3>Споры</h3>
                <p>Готовые сценарии действий и формы для работы с просрочкой оплаты, неподписанными актами и другими спорными ситуациями.</p>
                <a className="linkAction" href="/disputes">Разобрать спор</a>
              </div>
            </div>
          </div>
          <div className="card actionPanel toneWarm">
            <h2>Сметы и расчёты</h2>
            <p>Подготовка смет, расчётов и предварительная оценка рентабельности работ и участия в проектах.</p>
            <div className="stackActions">
              <a className="btn btn-primary btn-block" href="/request">Рассчитать смету</a>
              <a className="btn btn-ghost btn-block" href="/request">Проверить рентабельность</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="shell">
          <SectionHeading title="Популярные документы" text="Рабочие формы, которые чаще всего нужны для запуска, сдачи работ и разбирательств по проекту." />
          <div className="cardsGrid cardsGrid-3">
            {documents.map((item) => <DocumentCard key={item.title} {...item} />)}
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="shell">
          <SectionHeading title="Споры" text="Подготовка документов и сценариев действий для конфликтов между заказчиком и подрядчиком." />
          <div className="cardsGrid cardsGrid-4">
            {disputes.map((item) => <DisputeCard key={item.title} {...item} />)}
          </div>
        </div>
      </section>
    </main>
  );
}
