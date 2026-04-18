import SectionHeading from '@/components/SectionHeading';
import SpecialistCard from '@/components/SpecialistCard';
import { specialists } from '@/components/data';

export default function SpecialistsPage() {
  return (
    <main className="pageShell">
      <div className="shell pageHero compact">
        <span className="eyebrow">Специалисты</span>
        <h1>Специалисты</h1>
        <p>Находите специалистов по строительным, инженерным, сметным и эксплуатационным направлениям.</p>
        <div className="heroActions">
          <a className="btn btn-primary" href="/specialists/find">Найти специалиста</a>
          <a className="btn btn-ghost" href="/register">Создать профиль</a>
        </div>
      </div>

      <div className="shell filterBar card toneWhite">
        <input className="field grow" placeholder="Профессия, специализация, регион..." />
        <select className="field selectField"><option>Страна</option></select>
        <select className="field selectField"><option>Город / регион</option></select>
        <select className="field selectField"><option>Специализация</option></select>
        <select className="field selectField"><option>Формат работы</option></select>
        <button className="btn btn-primary btn-tight">Найти</button>
      </div>

      <section className="section">
        <div className="shell">
          <SectionHeading title="Карточки специалистов" text="Проверенные профили, понятные роли и быстрый контакт по нужному направлению." />
          <div className="cardsGrid cardsGrid-4">
            {specialists.map((item) => <SpecialistCard key={item.title} {...item} />)}
          </div>
        </div>
      </section>
    </main>
  );
}
