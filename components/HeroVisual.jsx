const variants = {
  hero: {
    image: '/hero.jpg',
    label: 'Масштабные объекты',
    caption: 'Стройка, подряд, техника и реальные объекты на одной деловой платформе.',
    note: 'Объекты • подряды • сопровождение',
    tone: 'dark',
    position: 'center center',
    size: 'cover'
  },
  site: {
    image: '/hero.jpg',
    label: 'Проекты и визуализация',
    caption: 'Проекты, чертежи и презентация объекта через чистую визуальную подачу без пустых блоков.',
    note: 'Проекты • чертежи • презентация',
    tone: 'dark',
    position: 'center center',
    size: 'cover'
  },
  orders: {
    image: '/media/contactsheet1.jpg',
    label: 'Заказы и подряды',
    caption: 'Размещение заявок, поиск исполнителей и ведение объектных запросов по этапам.',
    note: 'Заказы • подряд • поставки',
    tone: 'warm',
    position: 'center center',
    size: 'cover'
  },
  machinery: {
    image: '/hero.jpg',
    label: 'Техника и объект',
    caption: 'Спецтехника, площадка, снабжение и выездные работы по строительным задачам.',
    note: 'Техника • мобилизация • объект',
    tone: 'machinery',
    position: '76% center',
    size: 'cover'
  },
  team: {
    image: '/handshake.jpg',
    label: 'Компании и команды',
    caption: 'Работа с подрядчиками, специалистами, входящими запросами и партнёрствами.',
    note: 'Команда • подрядчик • контакт',
    tone: 'warm',
    position: 'center center',
    size: 'cover'
  },
  specialists: {
    image: '/handshake.jpg',
    label: 'Специалисты и бригады',
    caption: 'Подбор людей, команд и исполнителей под объект, этап или направление работ.',
    note: 'Люди • бригады • подбор',
    tone: 'warm',
    position: 'left center',
    size: 'cover'
  },
  company: {
    image: '/media/contact.jpeg',
    label: 'Компании и переговоры',
    caption: 'Профили компаний, деловой контакт, регионы работы и входящие заявки.',
    note: 'Компания • регион • переговоры',
    tone: 'soft',
    position: 'center center',
    size: 'cover'
  },
  handshake: {
    image: '/handshake.jpg',
    label: 'Люди на объекте',
    caption: 'Связь, договорённости и сопровождение объекта от первого контакта до запуска работ.',
    note: 'Контакт • договорённость • выход',
    tone: 'warm',
    position: 'center center',
    size: 'cover'
  },
  documents: {
    image: '/media/gavel.jpg',
    label: 'Документы и сопровождение',
    caption: 'Договоры, акты, КС-2, КС-3, претензии, споры и рабочие правовые сценарии.',
    note: 'Договоры • акты • претензии',
    tone: 'dark',
    position: 'center center',
    size: 'cover'
  },
  dispute: {
    image: '/media/gavel.jpg',
    label: 'Споры и защита позиции',
    caption: 'Разбор неоплаты, неподписанных актов и спорных вопросов по объекту.',
    note: 'Спор • позиция • защита',
    tone: 'dark',
    position: 'center center',
    size: 'cover'
  },
  request: {
    image: '/media/contact.jpeg',
    label: 'Заявка на платформу',
    caption: 'Единая точка входа для заказчика, подрядчика, компании или специалиста.',
    note: 'Старт • связь • распределение',
    tone: 'soft',
    position: 'center center',
    size: 'cover'
  },
  support: {
    image: '/media/contact.jpeg',
    label: 'Поддержка и связь',
    caption: 'Быстрый контакт по работе платформы, профилям, документам и размещению.',
    note: 'Поддержка • ответы • помощь',
    tone: 'soft',
    position: 'center center',
    size: 'cover'
  },
  preview: {
    image: '/media/contactsheet1.jpg',
    label: 'Презентация сервиса',
    caption: 'Подача платформы через сильный визуал, понятную структуру и уверенный деловой стиль.',
    note: 'Сервис • подача • доверие',
    tone: 'video',
    position: 'center center',
    size: 'cover'
  },
  video: {
    image: '/media/contactsheet1.jpg',
    label: 'Видео-презентация',
    caption: 'Превью-блок с сильной подачей и безопасным fallback, чтобы секция не выглядела пустой.',
    note: 'Preview • fallback • презентация',
    tone: 'video',
    position: 'center center',
    size: 'cover'
  }
};

export default function HeroVisual({ variant = 'hero' }) {
  const current = variants[variant] || variants.hero;

  return (
    <div className={`visual-scene visual-${current.tone || 'dark'} visual-${variant}`}>
      <div className="visual-image" style={{ backgroundImage: `url(${current.image})`, backgroundPosition: current.position || 'center center', backgroundSize: current.size || 'cover' }} />
      <div className="visual-overlay" />
      <div className="visual-topline"><span>{current.note}</span></div>
      <div className="visual-panel">
        <span className="visual-chip">{current.label}</span>
        <div className="visual-caption">{current.caption}</div>
      </div>
      {(variant === 'hero' || variant === 'video') ? (
        <div className="visual-video-badge"><span className="play-dot">▶</span><span>{variant === 'video' ? 'Плейсхолдер видео' : 'Видео стройки'}</span></div>
      ) : null}
    </div>
  );
}
