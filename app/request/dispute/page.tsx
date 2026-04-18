import { FormPage } from '../../../components/FormPage';
import Link from 'next/link';

export default function DisputeRequestPage() {
  return (
    <FormPage badge="Спор" title="Разобрать ситуацию" lead="Опишите проблему по оплате, актам или приёмке — мы подскажем порядок действий и подготовим нужные документы.">
      <div className="form-grid">
        <input className="input" placeholder="Компания / Имя" />
        <input className="input" placeholder="Телефон" />
        <select className="select span-2"><option>Тип ситуации</option><option>Не оплатили</option><option>Не подписывают акты</option><option>Спор по качеству</option></select>
        <input className="input" placeholder="Сумма спора" />
        <input className="input" placeholder="Договор / объект" />
        <textarea className="textarea span-2" placeholder="Кратко опишите ситуацию" />
      </div>
      <div className="action-row" style={{ justifyContent: 'flex-end' }}><Link href="#" className="btn btn--primary">Получить рекомендации</Link></div>
    </FormPage>
  );
}
