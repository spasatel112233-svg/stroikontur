import FormPage from '@/components/FormPage';

export default function FindSpecialistPage() {
  return (
    <FormPage
      back="/specialists"
      backLabel="К специалистам"
      tag="Поиск специалиста"
      title="Найти специалиста"
      text="Опишите, какой специалист вам нужен, по какому направлению, в каком регионе и на каких условиях."
      sideText="Подходит для поиска прораба, сметчика, инженерной команды, специалистов по фасадам, отделке, сетям и другим направлениям."
      sideList={['Укажите специальность и регион', 'Опишите формат и сроки работы', 'Добавьте требования к опыту и квалификации']}
      fields={[
        { label: 'Кто вы?', type: 'select', placeholder: 'Компания / заказчик', full: true, name: 'role' },
        { placeholder: 'Имя / компания', full: true, name: 'name' },
        { placeholder: 'Телефон', name: 'phone' },
        { placeholder: 'Email', name: 'email' },
        { placeholder: 'Страна', name: 'country' },
        { placeholder: 'Город / регион', name: 'city' },
        { type: 'select', placeholder: 'Нужная специальность', full: true, name: 'speciality' },
        { placeholder: 'Формат работы', name: 'format' },
        { placeholder: 'Опыт / квалификация', name: 'experience' },
        { type: 'textarea', placeholder: 'Кратко опишите задачу', full: true, name: 'description' }
      ]}
      cta="Отправить запрос"
      visual="team"
    />
  );
}
