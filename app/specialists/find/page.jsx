import FormPage from '@/components/FormPage';

export default function FindSpecialistPage() {
  return (
    <FormPage
      back="/specialists"
      backLabel="К специалистам"
      tag="Поиск специалиста"
      title="Найти специалиста"
      text="Опишите, какой специалист вам нужен, по какому направлению, в каком регионе и на каких условиях."
      sideText="Форма подходит для поиска прорабов, инженеров, сметчиков, бригад, монтажников и узких специалистов под конкретную задачу."
      sideList={['Укажите специальность и формат работы', 'Добавьте регион, сроки и краткое описание', 'Запрос будет передан в подходящие карточки']}
      fields={[
        { label: 'Кто вы?', type: 'select', placeholder: 'Заказчик / компания', full: true, name: 'role' },
        { placeholder: 'Имя / компания', full: true, name: 'name' },
        { placeholder: 'Телефон', name: 'phone' },
        { placeholder: 'Email', name: 'email' },
        { placeholder: 'Страна', name: 'country' },
        { placeholder: 'Город / регион', name: 'city' },
        { placeholder: 'Нужная специальность', name: 'speciality' },
        { type: 'select', placeholder: 'Формат работы', name: 'format' },
        { placeholder: 'Опыт / квалификация', full: true, name: 'level' },
        { type: 'textarea', placeholder: 'Кратко опишите задачу и требования', full: true, name: 'description' }
      ]}
      cta="Отправить запрос"
    />
  );
}
