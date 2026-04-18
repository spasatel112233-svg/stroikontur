import { FormPage } from '../../../components/FormPage';
import Link from 'next/link';

export default function CreateOrderPage() {
  return (
    <FormPage
      badge="Размещение заказа"
      title="Разместить заказ"
      lead="Опишите объект, задачу или вид работ — платформа поможет опубликовать заказ и показать его подходящим исполнителям."
    >
      <div className="form-grid">
        <input className="input span-2" placeholder="Название компании / Имя" />
        <input className="input" placeholder="Телефон" />
        <input className="input" placeholder="Email" />
        <input className="input" placeholder="Страна" />
        <input className="input" placeholder="Город / регион" />
        <select className="select span-2"><option>Категория работ</option></select>
        <input className="input" placeholder="Бюджет" />
        <input className="input" placeholder="Сроки" />
        <textarea className="textarea span-2" placeholder="Описание заказа" />
      </div>
      <div className="action-row" style={{ justifyContent: 'flex-end' }}><Link href="#" className="btn btn--primary">Опубликовать заказ</Link></div>
    </FormPage>
  );
}
