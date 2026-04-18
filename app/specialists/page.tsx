import Link from 'next/link';
import { PageTitle } from '../../components/PageTitle';

const profiles = [
  ['ПМ', 'Прораб / монолит', '12 лет опыта, промышленные и жилые объекты, готовность к командировкам.', 'Россия / СНГ · Русский / Английский'],
  ['ПТО', 'Инженер ПТО / сметчик', 'Исполнительная документация, КС-2 / КС-3, сопровождение объектов и расчёты.', 'Удалённо / офис · Россия / Казахстан'],
  ['Ф', 'Бригада фасадчиков', 'Мокрый фасад, вентилируемый фасад, утепление и реставрационные работы.', 'Компания / бригада · 20+ человек'],
  ['Э', 'Электромонтажная команда', 'Внутренние сети, щитовое оборудование, освещение и пусконаладка.', 'Россия · выездные объекты']
];

export default function SpecialistsPage() {
  return (
    <main className="page-shell">
      <div className="container">
        <PageTitle
          badge="Специалисты"
          title="Специалисты"
          lead="Находите специалистов по строительным, инженерным, сметным и эксплуатационным направлениям."
          actions={<>
            <Link href="/request/find-specialist" className="btn btn--primary">Найти специалиста</Link>
            <Link href="/register" className="btn">Создать профиль</Link>
          </>}
        />

        <section className="section">
          <div className="filters" style={{ gridTemplateColumns: '1.5fr repeat(4, minmax(0, 1fr)) auto' }}>
            <input className="input" placeholder="Профессия, специализация, регион..." />
            <select className="select"><option>Страна</option></select>
            <select className="select"><option>Город / регион</option></select>
            <select className="select"><option>Специализация</option></select>
            <select className="select"><option>Формат работы</option></select>
            <button className="btn btn--primary">Найти</button>
          </div>
        </section>

        <section className="section">
          <div className="cards-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
            {profiles.map(([mark, title, text, meta]) => (
              <article key={title} className="profile-card">
                <div className="profile-card__avatar">{mark}</div>
                <h3>{title}</h3>
                <p>{text}</p>
                <div className="profile-card__meta muted-copy" style={{ marginTop: 16 }}>{meta}</div>
                <div className="profile-card__bottom">
                  <Link href="/specialists" className="btn btn--small">Подробнее</Link>
                  <Link href="/request/specialist-contact" className="btn btn--primary btn--small">Связаться</Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
