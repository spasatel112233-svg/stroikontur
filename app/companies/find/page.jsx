import FormPage from '@/components/FormPage';

export default function FindCompanyPage() {
  return (
    <FormPage
      back="/companies"
      backLabel="К компаниям"
      tag="Поиск компании"
      title="Найти компанию"
      text="Опишите, какая компания вам нужна, по какому направлению, в каком регионе и под какой объект."
      sideText="Форма помогает найти подрядную, инженерную, фасадную, производственную или сервисную компанию под конкретный проект."
      sideList={['Укажите направление работ', 'Добавьте регион и сроки', 'Опишите требования к опыту и возможностям компании']}
      fields={[
        { placeholder: 'Ваше имя / компания', full: true, name: 'name' },
        { placeholder: 'Телефон', name: 'phone' },
        { placeholder: 'Email', name: 'email' },
        { placeholder: 'Страна', name: 'country' },
        { placeholder: 'Город / регион', name: 'city' },
        { type: 'select', placeholder: 'Направление работ', full: true, name: 'speciality' },
        { placeholder: 'Сроки', name: 'deadline' },
        { placeholder: 'Бюджет', name: 'budget' },
        { type: 'textarea', placeholder: 'Кратко опишите объект и требования к компании', full: true, name: 'description' }
      ]}
      cta="Найти компанию"
      visual="company"
    />
  );
}
