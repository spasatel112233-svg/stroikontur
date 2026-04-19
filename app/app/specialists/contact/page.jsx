import FormPage from '@/components/FormPage';

export default function ContactSpecialistPage() {
  return (
    <FormPage
      back="/specialists"
      backLabel="К специалистам"
      tag="Связь со специалистом"
      title="Связаться со специалистом"
      text="Отправьте краткий запрос: опишите объект, задачу, сроки и формат работы."
      sideText="Форма поможет связаться со специалистом по конкретному проекту и передать основной запрос без лишней переписки."
      sideList={['Укажите задачу и регион', 'Добавьте сроки, бюджет и формат работы', 'При необходимости приложите материалы по объекту']}
      fields={[
        { placeholder: 'Ваше имя / компания', full: true, name: 'name' },
        { placeholder: 'Телефон', name: 'phone' },
        { placeholder: 'Email', name: 'email' },
        { placeholder: 'Страна', name: 'country' },
        { placeholder: 'Город / регион', name: 'city' },
        { placeholder: 'Сроки', name: 'deadline' },
        { placeholder: 'Бюджет', name: 'budget' },
        { type: 'textarea', placeholder: 'Опишите объект, объём работ и запрос к специалисту', full: true, name: 'description' }
      ]}
      cta="Связаться со специалистом"
      visual="team"
    />
  );
}
