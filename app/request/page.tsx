import { FormPage } from '../../components/FormPage';
import Link from 'next/link';

export default function RequestPage() {
  return (
    <FormPage
      badge="Заявка на платформу"
      title="Оставить заявку"
      lead="Оставьте информацию о себе и задаче. Мы поможем найти специалиста, подрядчика, компанию, материалы, технику или подходящий объект."
    >
      <div className="form-grid">
        <div className="span-2"><label className="form-label">Кто вы?</label><select className="select"><option>Заказчик</option><option>Подрядчик</option><option>Специалист</option><option>Компания</option></select></div>
        <input className="input span-2" placeholder="Имя / Компания" />
        <input className="input" placeholder="Телефон" />
        <input className="input" placeholder="Email" />
        <input className="input" placeholder="Страна" />
        <input className="input" placeholder="Город / регион" />
        <select className="select span-2"><option>Что вы ищете?</option><option>Подрядчика</option><option>Специалиста</option><option>Компанию</option><option>Материалы</option></select>
        <textarea className="textarea span-2" placeholder="Кратко опишите задачу" />
      </div>
      <div className="action-row" style={{ justifyContent: 'flex-end' }}>
        <Link href="#" className="btn btn--primary">Отправить заявку</Link>
      </div>
    </FormPage>
  );
}
