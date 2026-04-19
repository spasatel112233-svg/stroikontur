const variants = {
  hero: {
    image: '/hero.jpg',
    label: 'Масштабные объекты',
    caption: 'Стройка, подряд, техника и реальные объекты на одной деловой платформе.',
    tone: 'dark'
  },
  site: {
    image: '/hero.jpg',
    label: 'Строительные работы',
    caption: 'Подряды, поставки, объектные задачи и этапы строительства без лишней путаницы.',
    tone: 'dark'
  },
  orders: {
    image: '/hero.jpg',
    label: 'Заказы и подряды',
    caption: 'Размещение заявок, поиск исполнителей и ведение объектных запросов по этапам.',
    tone: 'dark'
  },
  machinery: {
    image: '/hero.jpg',
    label: 'Техника и объект',
    caption: 'Спецтехника, площадка, снабжение и выездные работы по строительным задачам.',
    tone: 'dark'
  },
  team: {
    image: '/handshake.jpg',
    label: 'Компании и команды',
    caption: 'Работа с подрядчиками, специалистами, входящими запросами и партнёрствами.',
    tone: 'warm'
  },
  specialists: {
    image: '/handshake.jpg',
    label: 'Специалисты и бригады',
    caption: 'Подбор людей, команд и исполнителей под объект, этап или направление работ.',
    tone: 'warm'
  },
  company: {
    image: '/handshake.jpg',
    label: 'Компании и переговоры',
    caption: 'Профили компаний, деловой контакт, регионы работы и входящие заявки.',
    tone: 'warm'
  },
  handshake: {
    image: '/handshake.jpg',
    label: 'Люди на объекте',
    caption: 'Связь, договорённости и сопровождение объекта от первого контакта до запуска работ.',
    tone: 'warm'
  },
  documents: {
    image: '/media/gavel.jpg',
    label: 'Документы и сопровождение',
    caption: 'Договоры, акты, КС-2, КС-3, претензии, споры и рабочие правовые сценарии.',
    tone: 'dark'
  },
  dispute: {
    image: '/media/gavel.jpg',
    label: 'Споры и защита позиции',
    caption: 'Разбор неоплаты, неподписанных актов и спорных вопросов по объекту.',
    tone: 'dark'
  },
  request: {
    image: '/media/contact.jpeg',
    label: 'Заявка на платформу',
    caption: 'Единая точка входа для заказчика, подрядчика, компании или специалиста.',
    tone: 'soft'
  },
  support: {
    image: '/media/contact.jpeg',
    label: 'Поддержка и связь',
    caption: 'Быстрый контакт по работе платформы, профилям, документам и размещению.',
    tone: 'soft'
  },
  preview: {
    image: '/media/contact.jpeg',
    label: 'Презентация сервиса',
    caption: 'Подача платформы через чистый визуал, понятную структуру и уверенный бизнес-стиль.',
    tone: 'soft'
  },
  video: {
    image: '/media/contactsheet1.jpg',
    label: 'Видео-презентация',
    caption: 'Безопасный preview-блок с fallback, чтобы визуальная подача не ломалась на странице.',
    tone: 'video'
  }
};

export default function HeroVisual({ variant = 'hero' }) {
  const current = variants[variant] || variants.hero;

  return (
    <div className={`visual-scene visual-${current.tone || 'dark'}`}>
      <div className="visual-image" style={{ backgroundImage: `url(${current.image})` }} />
      <div className="visual-overlay" />
      <div className="visual-panel">
        <span className="visual-chip">{current.label}</span>
        <div className="visual-caption">{current.caption}</div>
      </div>
      {(variant === 'hero' || variant === 'video') ? (
        <div className="visual-video-badge">
          <span className="play-dot">▶</span>
          <span>{variant === 'video' ? 'Preview с fallback' : 'Видео стройки'}</span>
        </div>
      ) : null}
    </div>
  );
}
