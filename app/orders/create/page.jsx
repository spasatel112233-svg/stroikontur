import FormPage from '@/components/FormPage';

export default function CreateOrderPage() {
  return (
    <FormPage
      back="/orders"
      backLabel="К заказам"
      tag="Размещение заказа"
      title="Разместить заказ"
      text="Опишите объект, задачу или вид работ — платформа поможет опубликовать заказ и показать его подходящим исполнителям."
      sideText="Форма подходит для публикации объекта, подряда, субподряда, заявки на поставку материалов, техники или рабочей команды."
      sideList={['Укажите вид работ и регион', 'Добавьте сроки и бюджет', 'При необходимости приложите файлы и пояснения']}
      fields={[
        { label: 'Кто вы?', type: 'select', placeholder: 'Заказчик', full: true, name: 'role' },
        { placeholder: 'Имя / компания', full: true, name: 'name' },
        { placeholder: 'Телефон', name: 'phone' },
        { placeholder: 'Email', name: 'email' },
        { placeholder: 'Страна', name: 'country' },
        { placeholder: 'Город / регион', name: 'city' },
        { type: 'select', placeholder: 'Категория работ', full: true, name: 'category' },
        { placeholder: 'Бюджет', name: 'budget' },
        { placeholder: 'Сроки', name: 'deadline' },
        { type: 'textarea', placeholder: 'Опишите задачу и требования к исполнителю', full: true, name: 'description' }
      ]}
      cta="Опубликовать заказ"
      visual="site"
    />
  );
}
