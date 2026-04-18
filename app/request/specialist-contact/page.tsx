import { FormPage } from '../../../components/FormPage';
import Link from 'next/link';

export default function SpecialistContactPage() {
  return (
    <FormPage
      badge="Связь со специалистом"
      title="Связаться со специалистом"
      lead="Отправьте специалисту краткий запрос: опишите объект, задачу, сроки и формат работы."
    >
      <div className="surface-section surface-section--warm" style={{ padding: 18, marginBottom: 18 }}>
        <strong>Специалист:</strong> Прораб / монолит · <strong>Опыт:</strong> 12 лет · <strong>Регион:</strong> Россия / СНГ
      </div>
      <div className="form-grid">
        <input className="input span-2" placeholder="Ваше имя / Компания" />
        <input className="input" placeholder="Телефон" />
        <input className="input" placeholder="Email" />
        <input className="input" placeholder="Сроки" />
        <input className="input" placeholder="Бюджет" />
        <textarea className="textarea span-2" placeholder="Кратко опишите задачу" />
      </div>
      <div className="action-row" style={{ justifyContent: 'flex-end' }}><Link href="#" className="btn btn--primary">Отправить запрос</Link></div>
    </FormPage>
  );
}
