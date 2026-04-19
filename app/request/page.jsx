import FormPage from '@/components/FormPage';

const MODES = {
  default: {
    tag: 'Заявка на платформу',
    title: 'Оставить заявку',
    text: 'Оставьте информацию о себе и задаче. Мы поможем найти специалистов, подрядчиков, компанию, материалы, технику или подходящий объект.',
    sideText: 'Эта форма подходит для общего запроса на платформе: подбор исполнителя, компании, техники, материалов, документа или направления работ.',
    sideList: ['Можно описать объект и задачу', 'Подходит для заказчиков, подрядчиков и компаний', 'Запрос уходит в нужный сценарий обработки'],
    fields: [
      { label: 'Кто вы?', type: 'select', placeholder: 'Заказчик', full: true, name: 'role' },
      { placeholder: 'Имя / компания', full: true, name: 'name' },
      { placeholder: 'Телефон', name: 'phone' },
      { placeholder: 'Email', name: 'email' },
      { placeholder: 'Страна', name: 'country' },
      { placeholder: 'Город / регион', name: 'city' },
      { type: 'select', placeholder: 'Что вы ищете?', full: true, name: 'need' },
      { type: 'textarea', placeholder: 'Кратко опишите задачу', full: true, name: 'description' }
    ],
    cta: 'Отправить заявку',
    visual: 'site'
  },
  contractor: {
    tag: 'Поиск подрядчика',
    title: 'Найти подрядчика',
    text: 'Опишите объект, вид работ, регион и сроки. Мы поможем подобрать подрядчика под конкретную задачу.',
    sideText: 'Подходит для поиска строительной, инженерной, фасадной, монтажной или сервисной компании под ваш проект.',
    sideList: ['Укажите категорию работ', 'Добавьте регион, бюджет и сроки', 'Опишите требования к подрядчику и объекту'],
    fields: [
      { placeholder: 'Имя / компания', full: true, name: 'name' },
      { placeholder: 'Телефон', name: 'phone' },
      { placeholder: 'Email', name: 'email' },
      { placeholder: 'Страна', name: 'country' },
      { placeholder: 'Город / регион', name: 'city' },
      { type: 'select', placeholder: 'Категория работ', full: true, name: 'category' },
      { placeholder: 'Бюджет', name: 'budget' },
      { placeholder: 'Сроки', name: 'deadline' },
      { type: 'textarea', placeholder: 'Опишите объект и требования к подрядчику', full: true, name: 'description' }
    ],
    cta: 'Найти подрядчика',
    visual: 'team'
  },
  document: {
    tag: 'Запрос документа',
    title: 'Получить документ',
    text: 'Опишите задачу и тип документа. Подберём нужную форму под объект, оплату, сдачу работ или спорную ситуацию.',
    sideText: 'Форма подходит для актов, КС-2, КС-3, претензий, уведомлений, договоров и других рабочих документов.',
    sideList: ['Укажите объект и ситуацию', 'Опишите стороны и предмет документа', 'При необходимости добавьте сроки и сумму'],
    fields: [
      { placeholder: 'Ваше имя', full: true, name: 'name' },
      { placeholder: 'Компания', full: true, name: 'company' },
      { placeholder: 'Телефон', name: 'phone' },
      { placeholder: 'Email', name: 'email' },
      { type: 'select', placeholder: 'Какой документ нужен?', full: true, name: 'documentType' },
      { placeholder: 'Объект / договор', full: true, name: 'object' },
      { type: 'textarea', placeholder: 'Кратко опишите задачу и ситуацию', full: true, name: 'description' }
    ],
    cta: 'Получить документ',
    visual: 'documents'
  },
  dispute: {
    tag: 'Разбор ситуации',
    title: 'Разобрать ситуацию',
    text: 'Опишите спорную ситуацию по объекту, оплате, актам, приёмке или объёму работ. Подскажем, какие документы и шаги нужны дальше.',
    sideText: 'Подходит для работы со спором между заказчиком и подрядчиком, фиксации позиции и подготовки документов.',
    sideList: ['Опишите, что произошло', 'Укажите документы, которые уже есть', 'Добавьте сумму, сроки и статус общения'],
    fields: [
      { placeholder: 'Ваше имя / компания', full: true, name: 'name' },
      { placeholder: 'Телефон', name: 'phone' },
      { placeholder: 'Email', name: 'email' },
      { placeholder: 'Объект / договор', full: true, name: 'object' },
      { placeholder: 'Сумма спора', name: 'amount' },
      { placeholder: 'Стадия проекта', name: 'stage' },
      { type: 'textarea', placeholder: 'Кратко опишите спорную ситуацию', full: true, name: 'description' }
    ],
    cta: 'Отправить ситуацию',
    visual: 'legal'
  },
  project: {
    tag: 'Загрузка проекта',
    title: 'Загрузить проект',
    text: 'Передайте проектные материалы, чтобы мы подготовили удобную подачу, разбор и наглядную визуализацию.',
    sideText: 'Подходит для концепции, проекта, презентации объекта и предварительного обсуждения с командой или заказчиком.',
    sideList: ['Загрузите проект или описание', 'Укажите цель визуализации', 'Опишите, что нужно показать в итоге'],
    fields: [
      { placeholder: 'Ваше имя / компания', full: true, name: 'name' },
      { placeholder: 'Телефон', name: 'phone' },
      { placeholder: 'Email', name: 'email' },
      { placeholder: 'Название проекта', full: true, name: 'project' },
      { placeholder: 'Формат результата', name: 'format' },
      { placeholder: 'Сроки', name: 'deadline' },
      { type: 'textarea', placeholder: 'Опишите, что именно нужно визуализировать', full: true, name: 'description' }
    ],
    cta: 'Загрузить проект',
    visual: 'site'
  },
  drawing: {
    tag: 'Загрузка чертежа',
    title: 'Загрузить чертёж',
    text: 'Отправьте чертёж, схему или рабочий лист. Мы поможем подготовить более понятную визуальную подачу под задачу.',
    sideText: 'Форма подходит для рабочих чертежей, монтажных схем, конструктивных листов и материалов для презентации.',
    sideList: ['Укажите тип чертежа', 'Добавьте контекст по объекту', 'Опишите ожидаемый результат'],
    fields: [
      { placeholder: 'Ваше имя / компания', full: true, name: 'name' },
      { placeholder: 'Телефон', name: 'phone' },
      { placeholder: 'Email', name: 'email' },
      { placeholder: 'Объект', full: true, name: 'project' },
      { placeholder: 'Раздел чертежа', name: 'section' },
      { placeholder: 'Сроки', name: 'deadline' },
      { type: 'textarea', placeholder: 'Опишите, что требуется по чертежу', full: true, name: 'description' }
    ],
    cta: 'Загрузить чертёж',
    visual: 'site'
  },
  support: {
    tag: 'Поддержка',
    title: 'Связаться с платформой',
    text: 'Оставьте вопрос по платформе, документам, публикации заказов, профилям или работе сервиса.',
    sideText: 'Форма подходит для связи с командой платформы, запроса по доступу, политике, футеру и рабочим разделам.',
    sideList: ['Опишите вопрос коротко и по делу', 'Укажите удобный способ связи', 'При необходимости приложите детали обращения'],
    fields: [
      { placeholder: 'Ваше имя', full: true, name: 'name' },
      { placeholder: 'Телефон', name: 'phone' },
      { placeholder: 'Email', name: 'email' },
      { type: 'textarea', placeholder: 'Ваш вопрос или обращение', full: true, name: 'description' }
    ],
    cta: 'Отправить обращение',
    visual: 'team'
  }
};

export default function RequestPage({ searchParams }) {
  const mode = searchParams?.mode && MODES[searchParams.mode] ? searchParams.mode : 'default';
  return <FormPage back="/" backLabel="На главную" {...MODES[mode]} />;
}
