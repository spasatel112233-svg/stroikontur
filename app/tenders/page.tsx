import Link from 'next/link';
import { PageTitle } from '../../components/PageTitle';

const items = [
  ['Капитальный ремонт и благоустройство','Муниципальный тендер на благоустройство территории, дорожки, малые формы и озеленение.','44-ФЗ · Россия · аванс · 45 дней'],
  ['Инженерные сети промышленного объекта','Коммерческий тендер на внутренние сети, слаботочку, вентиляцию, автоматику и пусконаладку.','Коммерческий · Казахстан · 2 этапа'],
  ['Реставрация фасада и кровли','Объект культурного наследия. Требуются компания, документы, лицензии и подтверждённый опыт работ.','ОКН · конкурс · специальные требования']
];

export default function TendersPage(){return <main className="page-shell"><div className="container"><PageTitle badge="Тендеры" title="Тендеры" lead="Поиск закупок, документы для участия, сметы, расчёты и оценка рентабельности." actions={<><Link href="/tenders" className="btn btn--primary">Подобрать тендер</Link><Link href="/documents" className="btn">Документы для участия</Link></>} /><section className="section"><div className="cards-grid">{items.map(([title,text,meta])=><article key={title} className="order-card"><h3>{title}</h3><p>{text}</p><div className="order-card__meta muted-copy" style={{marginTop:18}}>{meta}</div><div className="order-card__bottom"><Link href="/documents" className="btn btn--small">Документы</Link><Link href="/estimates" className="btn btn--primary btn--small">Анализ</Link></div></article>)}</div></section></div></main>}
