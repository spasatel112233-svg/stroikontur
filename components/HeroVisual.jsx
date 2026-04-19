const variants = {
  hero: { image: '/hero.jpg', label: 'Масштабные объекты', caption: 'Стройка, подряд, техника и реальные объекты', note: 'Видеообзор объекта' },
  site: { image: '/hero.jpg', label: 'Строительные работы', caption: 'Подряды, поставки, объектные задачи', note: 'Живой поток заказов' },
  team: { image: '/media/contactsheet1.jpg', label: 'Команды и партнёрство', caption: 'Подрядчики, специалисты и входящие запросы для компаний', note: 'Команды и компании' },
  request: { image: '/media/contact.jpeg', label: 'Заявки и сопровождение', caption: 'Запросы, созвоны и подбор под задачу', note: 'Персональный сценарий' },
  documents: { image: '/media/gavel.jpg', label: 'Документы и сопровождение', caption: 'Шаблоны, акты, споры и рабочие кейсы', note: 'Рабочие формы и претензии' },
  company: { image: '/media/contactsheet1.jpg', label: 'Компании и подрядчики', caption: 'Подключение компании, профиль и входящие запросы', note: 'Деловой профиль' },
  handshake: { image: '/handshake.jpg', label: 'Люди на объекте', caption: 'Связь, договорённости и работа на площадке', note: 'Команды и специалисты' },
  specialists: { image: '/handshake.jpg', label: 'Специалисты и бригады', caption: 'Подбор людей, команд и исполнителей на объект', note: 'Проверенные исполнители' },
  preview: { image: '/media/contact.jpeg', label: 'Поддержка платформы', caption: 'Связь по вопросам платформы, размещения и сопровождения', note: 'Быстрый ответ' },
  technique: { image: '/hero.jpg', label: 'Техника и поставки', caption: 'Спецтехника, материалы и снабжение под этапы работ', note: 'Аренда и поставка' }
};

export default function HeroVisual({ variant = 'hero', compact = false }) {
  const current = variants[variant] || variants.hero;
  return (
    <div className={`visual-scene visual-${variant} ${compact ? 'visual-scene-compact' : ''}`}>
      <div className="visual-image scene-photo" style={{ backgroundImage: `url(${current.image})` }} />
      <div className="visual-overlay" />
      <div className="visual-topline"><span>{current.note}</span></div>
      <div className="visual-panel">
        <span className="visual-chip">{current.label}</span>
        <div className="visual-caption">{current.caption}</div>
      </div>
      {variant === 'hero' ? (
        <div className="video-preview-card">
          <div className="video-preview-play">▶</div>
          <div>
            <div className="video-preview-label">Видео платформы</div>
            <div className="video-preview-text">Презентация работы сервиса, объектов и входящих заявок</div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
