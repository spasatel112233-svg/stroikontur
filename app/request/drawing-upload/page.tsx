import { FormPage } from '../../../components/FormPage';
import Link from 'next/link';

export default function DrawingUploadPage() {
  return (
    <FormPage badge="Чертёж" title="Загрузить чертёж" lead="Прикрепите чертёж и задачу — платформа поможет собрать понятную визуализацию для согласования и презентации.">
      <div className="form-grid">
        <input className="input span-2" placeholder="Название объекта" />
        <input className="input" placeholder="Контактное лицо" />
        <input className="input" placeholder="Телефон" />
        <input className="input span-2" placeholder="Ссылка на файл или архив" />
        <textarea className="textarea span-2" placeholder="Что нужно показать по чертежу" />
      </div>
      <div className="action-row" style={{ justifyContent: 'flex-end' }}><Link href="#" className="btn btn--primary">Отправить чертёж</Link></div>
    </FormPage>
  );
}
