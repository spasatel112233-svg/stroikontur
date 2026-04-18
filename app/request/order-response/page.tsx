import { FormPage } from '../../../components/FormPage';
import Link from 'next/link';

export default function OrderResponsePage() {
  return (
    <FormPage badge="Отклик на заказ" title="Откликнуться на заказ" lead="Оставьте короткую информацию о себе, опыте и готовности выйти на объект.">
      <div className="form-grid">
        <input className="input span-2" placeholder="Компания / Имя" />
        <input className="input" placeholder="Телефон" />
        <input className="input" placeholder="Email" />
        <input className="input" placeholder="Регион" />
        <input className="input" placeholder="Срок выхода" />
        <textarea className="textarea span-2" placeholder="Расскажите об опыте и условиях работы" />
      </div>
      <div className="action-row" style={{ justifyContent: 'flex-end' }}><Link href="#" className="btn btn--primary">Отправить отклик</Link></div>
    </FormPage>
  );
}
