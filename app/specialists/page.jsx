import Link from 'next/link';
import PageHero from '@/components/PageHero';
import FilterBar from '@/components/FilterBar';

const specialists = [
  { initials: 'ПМ', title: 'Прораб / монолит', text: '12 лет опыта, промышленные и жилые объекты, готовность к командировкам.', meta: 'Россия / СНГ · Русский / Английский' },
  { initials: 'ПТ', title: 'Инженер ПТО / сметчик', text: 'Исполнительная документация, КС-2 / КС-3, сопровождение объектов и расчёты.', meta: 'Удалённо / офис · Россия / Казахстан' },
  { initials: 'ФБ', title: 'Бригада фасадчиков', text: 'Мокрый фасад, вентилируемый фасад, утепление и реставрационные работы.', meta: 'Компания / бригада · 20+ человек' },
  { initials: 'ЭК', title: 'Электромонтажная команда', text: 'Внутренние сети, щитовое оборудование, освещение и пусконаладка.', meta: 'Россия · Выездные объекты' }
];

export default function SpecialistsPage() {
  return (
    <main className="page">
      <div className="container">
        <PageHero
          tag="Специалисты"
          title="Специалисты"
          text="Находите специалистов по строительным, инженерным, сметным и эксплуатационным направлениям без лишней путаницы и длинных переписок."
          visual="team"
          actions={
            <>
              <Link href="/specialists/find" className="btn btn-primary">Найти специалиста</Link>
              <Link href="/register" className="btn btn-secondary">Создать профиль</Link>
            </>
          }
        />

        <section className="section section-soft">
          <FilterBar searchPlaceholder="Профессия, специализация, регион..." selects={['Страна', 'Город / регион', 'Специализация', 'Формат работы']} />
        </section>

        <section className="section">
          <div className="specialist-grid">
            {specialists.map((person) => (
              <article className="specialist-card card" key={person.title}>
                <div className="avatar avatar-soft">{person.initials}</div>
                <h3 className="card-subtitle card-subtitle-soft">{person.title}</h3>
                <p className="card-text card-text-soft">{person.text}</p>
                <div className="meta meta-soft">{person.meta}</div>
                <div className="card-actions card-actions-bottom">
                  <Link href="/specialists/find" className="btn btn-secondary">Подробнее</Link>
                  <Link href={`/specialists/contact?profile=${encodeURIComponent(person.title)}`} className="btn btn-primary">Связаться</Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
