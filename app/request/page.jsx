
import FormPage from '@/components/FormPage';

const modes = {
  default: {
    tag: 'Заявка на платформу',
    title: 'Оставить заявку',
    text: 'Оставьте информацию о себе и задаче. Мы поможем найти специалистов, подрядчиков, компанию, материалы, технику или подходящий объект.',
    sideText: 'Эта форма подходит для общего запроса на платформе: подбор исполнителя, компании, техники, материалов, документа или направления работ.',
    sideList: ['Можно описать объект и задачу', 'Подходит для заказчиков, подрядчиков и компаний', 'Запрос уходит в нужный сценарий обработки'],
    cta: 'Отправить заявку',
    visual: 'request',
    size: 'wide',
    fields: [
      { label: 'Кто вы?', type: 'select', placeholder: 'Заказчик', full: true, name: 'role' },
      { placeholder: 'Имя / компания', full: true, name: 'name' },
      { placeholder: 'Телефон', name: 'phone' },
      { placeholder: 'Email', name: 'email' },
      { placeholder: 'Страна', name: 'country' },
      { placeholder: 'Город / регион', name: 'city' },
      { type: 'select', placeholder: 'Что вы ищете?', full: true, name: 'need' },
      { type: 'textarea', placeholder: 'Кратко опишите задачу', full: true, name: 'description' }
    ]
  },
  contractor: {
    tag: 'Поиск подрядчика',
    title: 'Найти подрядчика',
    text: 'Опишите объект, вид работ, сроки и регион — платформа поможет подобрать подрядчика под задачу.',
    sideText: 'Форма подходит для поиска подрядной компании или бригады под объект, отдельный этап или сервисную задачу.',
    sideList: ['Укажите направление работ', 'Добавьте сроки и регион', 'Опишите объём, бюджет и формат сотрудничества'],
    cta: 'Отправить запрос',
    visual: 'company',
    size: 'medium',
    fields: [
      { placeholder: 'Название компании / заказчика', full: true, name: 'name' },
      { placeholder: 'Телефон', name: 'phone' },
      { placeholder: 'Email', name: 'email' },
      { placeholder: 'Страна', name: 'country' },
      { placeholder: 'Город / регион', name: 'city' },
      { type: 'select', placeholder: 'Категория работ', full: true, name: 'category' },
      { placeholder: 'Бюджет', name: 'budget' },
      { placeholder: 'Сроки', name: 'deadline' },
      { type: 'textarea', placeholder: 'Опишите объект и подрядную задачу', full: true, name: 'description' }
    ]
  },
  document: {
    tag: 'Получить документ',
    title: 'Получить документ',
    text: 'Оставьте краткое описание ситуации, и мы подготовим нужный документ под ваш кейс.',
    sideText: 'Подходит для актов, КС-2, КС-3, претензий, уведомлений, договоров и других рабочих форм по объекту.',
    sideList: ['Укажите объект и предмет документа', 'Опишите ситуацию', 'Уточните сроки и участников'],
    cta: 'Запросить документ',
    visual: 'disputes',
    size: 'medium',
    fields: [
      { placeholder: 'Ваше имя', full: true, name: 'name' },
      { placeholder: 'Компания', full: true, name: 'company' },
      { placeholder: 'Телефон', name: 'phone' },
      { placeholder: 'Email', name: 'email' },
      { placeholder: 'Договор / объект', full: true, name: 'contract' },
      { type: 'textarea', placeholder: 'Опишите, какой документ нужен и для чего', full: true, name: 'description' }
    ]
  },
  dispute: {
    tag: 'Разобрать ситуацию',
    title: 'Разобрать ситуацию',
    text: 'Опишите спорный вопрос, и мы подскажем, какие документы и шаги нужны в вашем случае.',
    sideText: 'Форма подходит для неоплаты, неподписанных актов, отказа в приёмке, спора по объёму или качеству работ.',
    sideList: ['Кратко опишите спор', 'Укажите объект и стадию работ', 'Добавьте, какие документы уже есть'],
    cta: 'Разобрать ситуацию',
    visual: 'disputes',
    fields: [
      { placeholder: 'Ваше имя / компания', full: true, name: 'name' },
      { placeholder: 'Телефон', name: 'phone' },
      { placeholder: 'Email', name: 'email' },
      { placeholder: 'Объект / договор', full: true, name: 'contract' },
      { type: 'textarea', placeholder: 'Опишите спорную ситуацию', full: true, name: 'description' }
    ]
  },
  project: {
    tag: 'Загрузка проекта',
    title: 'Загрузить проект',
    text: 'Загрузите проект, чтобы получить наглядную визуализацию, структуру работ и быстрый разбор материалов.',
    sideText: 'Подходит для концепции, рабочей документации, альбомов и презентации объекта заказчику или команде.',
    sideList: ['Добавьте краткое описание проекта', 'Укажите стадию и формат', 'После отправки свяжемся для уточнения деталей'],
    cta: 'Загрузить проект',
    visual: 'site',
    size: 'medium',
    fields: [
      { placeholder: 'Ваше имя / компания', full: true, name: 'name' },
      { placeholder: 'Телефон', name: 'phone' },
      { placeholder: 'Email', name: 'email' },
      { placeholder: 'Название проекта', full: true, name: 'project' },
      { type: 'textarea', placeholder: 'Кратко опишите проект и задачу', full: true, name: 'description' }
    ]
  },
  drawing: {
    tag: 'Загрузка чертежа',
    title: 'Загрузить чертёж',
    text: 'Загрузите чертёж или рабочий лист, чтобы перевести его в понятный визуальный формат для обсуждения.',
    sideText: 'Форма подходит для отдельных чертежей, узлов, схем и рабочих листов по объекту.',
    sideList: ['Укажите раздел или тип чертежа', 'Опишите, что нужно получить на выходе', 'При необходимости добавьте комментарии'],
    cta: 'Загрузить чертёж',
    visual: 'site',
    fields: [
      { placeholder: 'Ваше имя / компания', full: true, name: 'name' },
      { placeholder: 'Телефон', name: 'phone' },
      { placeholder: 'Email', name: 'email' },
      { placeholder: 'Раздел / тип чертежа', full: true, name: 'drawing' },
      { type: 'textarea', placeholder: 'Кратко опишите задачу по чертежу', full: true, name: 'description' }
    ]
  },
  support: {
    tag: 'Поддержка',
    title: 'Связаться с поддержкой',
    text: 'Оставьте вопрос по платформе, и мы поможем разобраться с размещением, документами, профилем или доступом.',
    sideText: 'Форма поддержки для всех вопросов по работе платформы и сопровождению пользователей.',
    sideList: ['Опишите, что нужно решить', 'Укажите контакт для обратной связи', 'При необходимости добавьте страницу или раздел'],
    cta: 'Отправить обращение',
    visual: 'preview',
    size: 'compact',
    fields: [
      { placeholder: 'Ваше имя', full: true, name: 'name' },
      { placeholder: 'Email', full: true, name: 'email' },
      { type: 'textarea', placeholder: 'Опишите вопрос или проблему', full: true, name: 'description' }
    ]
  }
};

export default function RequestPage({ searchParams }) {
  const modeKey = searchParams?.mode && modes[searchParams.mode] ? searchParams.mode : 'default';
  const mode = modes[modeKey];
  return <FormPage back="/" backLabel="На главную" {...mode} />;
}
