import FormPage from '@/components/FormPage';

export default function RequestPage() {
  return (
    <FormPage
      back="/"
      backLabel="На главную"
      tag="Заявка на платформу"
      title="Оставить заявку"
      text="Оставьте информацию о себе и задаче. Мы поможем найти специалистов, подрядчиков, компанию, материалы, технику или подходящий объект."
      sideText="Эта форма подходит для общего запроса на платформе: подбор исполнителя, компании, техники, материалов, документа или направления работ."
      sideList={['Можно описать объект и задачу', 'Подходит для заказчиков, подрядчиков и компаний', 'Запрос уходит в нужный сценарий обработки']}
      fields={[
        { label: 'Кто вы?', type: 'select', placeholder: 'Заказчик', full: true, name: 'role' },
        { placeholder: 'Имя / компания', full: true, name: 'name' },
        { placeholder: 'Телефон', name: 'phone' },
        { placeholder: 'Email', name: 'email' },
        { placeholder: 'Страна', name: 'country' },
        { placeholder: 'Город / регион', name: 'city' },
        { type: 'select', placeholder: 'Что вы ищете?', full: true, name: 'need' },
        { type: 'textarea', placeholder: 'Кратко опишите задачу', full: true, name: 'description' }
      ]}
      cta="Отправить заявку"
    />
  );
}
