import { FormPage } from '../../../components/FormPage';
import Link from 'next/link';

export default function ProjectUploadPage() {
  return (
    <FormPage badge="Проекты" title="Загрузить проект" lead="Прикрепите проект и кратко опишите задачу — мы подготовим визуализацию и рекомендации по материалам. ">
      <div className="form-grid">
        <input className="input span-2" placeholder="Название проекта" />
        <input className="input" placeholder="Контактное лицо" />
        <input className="input" placeholder="Телефон" />
        <input className="input span-2" placeholder="Ссылка на файл или архив" />
        <textarea className="textarea span-2" placeholder="Что нужно показать в визуализации" />
      </div>
      <div className="action-row" style={{ justifyContent: 'flex-end' }}><Link href="#" className="btn btn--primary">Отправить проект</Link></div>
    </FormPage>
  );
}
