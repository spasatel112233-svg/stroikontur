import Link from 'next/link';
import PageHero from '@/components/PageHero';
import FilterBar from '@/components/FilterBar';
const specialists = [
  { role: 'Прораб', title: 'Прораб / монолит', text: '12 лет опыта, промышленные и жилые объекты, координация бригад, работа с графиком, заявками и подрядной связкой на площадке.', meta: 'Россия / СНГ · Русский / Английский' },
  { role: 'ПТО', title: 'Инженер ПТО / сметчик', text: 'Исполнительная документация, КС-2, КС-3, сопровождение объектов, расчёты и рабочая коммуникация с заказчиком и подрядчиком.', meta: 'Удалённо / офис · Россия / Казахстан' },
  { role: 'Бригада', title: 'Бригада фасадчиков', text: 'Мокрый фасад, вентилируемый фасад, утепление и реставрационные работы. Готовность к выезду, проживанию и этапному закрытию объёмов.', meta: 'Компания / бригада · 20+ человек' },
  { role: 'Электрика', title: 'Электромонтажная команда', text: 'Внутренние сети, щитовое оборудование, освещение, силовые линии и пусконаладка на объекте с выездным форматом работы.', meta: 'Россия · Выездные объекты' }
];
export default function SpecialistsPage(){return(<main className="page"><div className="container"><PageHero tag="Специалисты" title="Специалисты и строительные бригады" text="Находите исполнителей, инженерные команды, монтажников, бригады и профильных специалистов для работы на объектах и в выездных проектах." visual="specialists" actions={<><Link href="/specialists/find" className="btn btn-primary">Найти специалиста</Link><Link href="/request" className="btn btn-secondary">Оставить запрос</Link></>} />
<section className="section section-soft"><FilterBar searchPlaceholder="Специализация или роль" selects={['Страна','Город','Специализация','Формат']} /></section>
<section className="section"><div className="specialist-grid">{specialists.map((person)=><article className="specialist-card card" key={person.title}><span className="profile-pill">{person.role}</span><h3 className="card-subtitle card-subtitle-soft">{person.title}</h3><p className="card-text card-text-soft">{person.text}</p><div className="meta meta-soft">{person.meta}</div><div className="card-actions card-actions-bottom"><Link href="/specialists/find" className="btn btn-secondary">Подробнее</Link><Link href={`/specialists/contact?profile=${encodeURIComponent(person.title)}`} className="btn btn-primary">Связаться</Link></div></article>)}</div></section>
</div></main>)}
