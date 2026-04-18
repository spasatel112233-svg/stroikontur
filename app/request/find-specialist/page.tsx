import { FormPage } from '../../../components/FormPage';
import Link from 'next/link';

export default function FindSpecialistPage() {
  return (
    <FormPage
      badge="Поиск специалиста"
      title="Найти специалиста"
      lead="Опишите, какой специалист вам нужен, по какому направлению, в каком регионе и на каких условиях."
    >
      <div className="form-grid">
        <input className="input span-2" placeholder="Компания / Имя" />
        <input className="input" placeholder="Телефон" />
        <input className="input" placeholder="Email" />
        <input className="input" placeholder="Страна" />
        <input className="input" placeholder="Город / регион" />
        <input className="input" placeholder="Нужная специальность" />
        <input className="input" placeholder="Формат работы" />
        <textarea className="textarea span-2" placeholder="Кратко опишите задачу" />
      </div>
      <div className="action-row" style={{ justifyContent: 'flex-end' }}><Link href="#" className="btn btn--primary">Отправить запрос</Link></div>
    </FormPage>
  );
}
