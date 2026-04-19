import FormPage from '@/components/FormPage';

export default function CreateOrderPage() {
  return (
    <FormPage
      back="/orders"
      backLabel="К заказам"
      tag="Разместить заказ"
      title="Разместить заказ"
      text="Опишите объект, задачу или вид работ — платформа поможет опубликовать заказ и показать его подходящим исполнителям."
      sideText="Оставьте данные по объекту, объёму работ, срокам и бюджету. После публикации заказ попадёт в релевантную выдачу по категориям и регионам."
      sideList={['Подходит для заказчиков и компаний', 'Можно прикрепить описание объекта и документы', 'Запрос попадёт в подходящие категории и фильтры']}
      fields={[
        { label: 'Кто вы?', type: 'select', placeholder: 'Заказчик / компания', full: true, name: 'role' },
        { placeholder: 'Имя / компания', full: true, name: 'name' },
        { placeholder: 'Телефон', name: 'phone' },
        { placeholder: 'Email', name: 'email' },
        { placeholder: 'Страна', name: 'country' },
        { placeholder: 'Город / регион', name: 'city' },
        { type: 'select', placeholder: 'Категория работ', name: 'category' },
        { placeholder: 'Бюджет', name: 'budget' },
        { placeholder: 'Сроки', name: 'deadline' },
        { placeholder: 'Прикрепить файл / ссылку', name: 'file' },
        { type: 'textarea', placeholder: 'Опишите заказ, объём работ и условия', full: true, name: 'description' }
      ]}
      cta="Опубликовать заказ"
    />
  );
}
