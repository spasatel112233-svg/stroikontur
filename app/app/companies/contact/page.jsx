import FormPage from '@/components/FormPage';

export default function ContactCompanyPage() {
  return (
    <FormPage
      back="/companies"
      backLabel="К компаниям"
      tag="Связь с компанией"
      title="Связаться с компанией"
      text="Отправьте запрос компании: опишите объект, задачу, объём работ и основные условия."
      sideText="Форма подходит для первого контакта по проекту, запросу коммерческого предложения или согласованию работы по объекту."
      sideList={['Укажите вид работ и регион', 'Добавьте сроки, бюджет и формат взаимодействия', 'При необходимости приложите файлы и материалы']}
      fields={[
        { placeholder: 'Ваше имя / компания', full: true, name: 'name' },
        { placeholder: 'Телефон', name: 'phone' },
        { placeholder: 'Email', name: 'email' },
        { placeholder: 'Страна', name: 'country' },
        { placeholder: 'Город / регион', name: 'city' },
        { placeholder: 'Сроки', name: 'deadline' },
        { placeholder: 'Бюджет', name: 'budget' },
        { type: 'textarea', placeholder: 'Опишите объект и задачу для компании', full: true, name: 'description' }
      ]}
      cta="Связаться с компанией"
      visual="team"
    />
  );
}
