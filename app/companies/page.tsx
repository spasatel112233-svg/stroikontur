import Link from 'next/link';
import { PageTitle } from '../../components/PageTitle';

const companies = [
  ['ФасадСтрой', 'Фасады, утепление, вентилируемые системы, жилые и промышленные объекты.', 'Россия / СНГ · 10+ лет'],
  ['ИнжСети Групп', 'Инженерные сети, автоматика, вентиляция, внутренние и наружные коммуникации.', 'Казахстан / Россия · 8+ лет'],
  ['БетонРесурс', 'Монолитные работы, бетон, каркасы, стройгенподряд по крупным объектам.', 'Россия · 12+ лет']
];

export default function CompaniesPage() {
  return (
    <main className="page-shell"><div className="container"><PageTitle badge="Компании" title="Компании" lead="Каталог подрядных и строительных компаний с географией работ, опытом и направлениями." actions={<><Link href="/request" className="btn btn--primary">Найти компанию</Link><Link href="/register" className="btn">Создать профиль</Link></>} /><section className="section"><div className="cards-grid">{companies.map(([title,text,meta]) => <article key={title} className="profile-card"><div className="profile-card__avatar">К</div><h3>{title}</h3><p>{text}</p><div className="profile-card__meta muted-copy" style={{marginTop:16}}>{meta}</div><div className="profile-card__bottom"><Link href="/companies" className="btn btn--small">Подробнее</Link><Link href="/request" className="btn btn--primary btn--small">Связаться</Link></div></article>)}</div></section></div></main>
  );
}
