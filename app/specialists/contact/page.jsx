import FormPage from '@/components/FormPage';

export default function ContactSpecialistPage() {
  return (
    <FormPage
      back="/specialists"
      backLabel="К специалистам"
      tag="Контакт со специалистом"
      title="Связаться со специалистом"
      text="Отправьте специалисту краткий запрос: опишите объект, задачу, сроки и формат работы."
      sideTitle="Связь по профилю"
      sideText="Укажите, по какому объекту и в каком формате требуется специалист. Форма подходит для первого контакта и согласования деталей."
      sideList={['Для частного специалиста или бригады', 'Можно указать бюджет и сроки', 'Запрос отправляется с привязкой к карточке']}
      fields={[
        { placeholder: 'Ваше имя / компания', full: true, name: 'name' },
        { placeholder: 'Телефон', name: 'phone' },
        { placeholder: 'Email', name: 'email' },
        { placeholder: 'Страна', name: 'country' },
        { placeholder: 'Город / регион', name: 'city' },
        { placeholder: 'Что нужно выполнить', full: true, name: 'task' },
        { placeholder: 'Сроки', name: 'deadline' },
        { placeholder: 'Бюджет', name: 'budget' },
        { type: 'textarea', placeholder: 'Кратко опишите задачу и ожидания', full: true, name: 'description' }
      ]}
      cta="Связаться со специалистом"
    />
  );
}
