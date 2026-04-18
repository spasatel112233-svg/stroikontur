import { FormPage } from '../../../components/FormPage';
import Link from 'next/link';

export default function DocumentRequestPage() {
  return (
    <FormPage badge="Документ" title="Получить документ" lead="Выберите тип документа и кратко опишите ситуацию — подготовим форму под ваш кейс.">
      <div className="form-grid">
        <select className="select span-2"><option>Тип документа</option></select>
        <input className="input" placeholder="Ваше имя" />
        <input className="input" placeholder="Компания" />
        <input className="input span-2" placeholder="Договор / объект" />
        <textarea className="textarea span-2" placeholder="Кратко опишите задачу" />
      </div>
      <div className="action-row" style={{ justifyContent: 'flex-end' }}><Link href="#" className="btn btn--primary">Отправить запрос</Link></div>
    </FormPage>
  );
}
