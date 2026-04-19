const variants = {
  hero: { image: '/hero.jpg', label: 'Строительная платформа', caption: 'Стройка, подряд, техника и реальные объекты', theme: 'photo' },
  orders: { image: '/hero.jpg', label: 'Живой поток заказов', caption: 'Подряды, поставки и объектные задачи', theme: 'photo light' },
  documents: { label: 'Документы и сопровождение', caption: 'Шаблоны, акты и документы по объекту', theme: 'docs' },
  specialists: { image: '/handshake.jpg', label: 'Люди и команды', caption: 'Исполнители, бригады и специалисты по объектам', theme: 'photo team' },
  companies: { image: '/handshake.jpg', label: 'Команды и партнёрство', caption: 'Компании, подрядчики и входящие запросы', theme: 'photo team' },
  disputes: { image: '/media/gavel.jpg', label: 'Рабочие формы и претензии', caption: 'Документы, акты и сопровождение спорных ситуаций', theme: 'photo legal' },
  request: { label: 'Заявка и обработка', caption: 'Описание объекта, задачи и маршрут обработки запроса', theme: 'panels' },
  login: { label: 'Рабочий кабинет', caption: 'Доступ к заказам, документам и рабочим действиям', theme: 'panels' },
  register: { label: 'Новый аккаунт', caption: 'Публикация заказов, профили и рабочие действия', theme: 'grid' },
  site: { image: '/hero.jpg', label: 'Объекты и подряд', caption: 'Строительные задачи и работа по объектам', theme: 'photo' },
  team: { image: '/handshake.jpg', label: 'Команды', caption: 'Подрядчики, специалисты и координация', theme: 'photo team' },
  company: { image: '/handshake.jpg', label: 'Подрядные компании', caption: 'Партнёры, подрядчики и сервисные профили', theme: 'photo team' },
  preview: { label: 'Поддержка', caption: 'Помощь по платформе и сопровождению', theme: 'panels' },
  handshake: { image: '/handshake.jpg', label: 'Команда на объекте', caption: 'Переговоры, координация и запуск работ', theme: 'photo team' }
};

export default function HeroVisual({ variant = 'hero' }) {
  const current = variants[variant] || variants.hero;
  const hasImage = Boolean(current.image);

  return (
    <div className={`visual-scene visual-${variant} ${current.theme ? `visual-theme-${current.theme.replace(/\s+/g, '-')}` : ''}`}>
      {hasImage ? (
        <div className="visual-image" style={{ backgroundImage: `url(${current.image})` }} />
      ) : (
        <div className="visual-image visual-image-abstract">
          <div className="visual-art visual-art-a" />
          <div className="visual-art visual-art-b" />
          <div className="visual-art visual-art-c" />
          <div className="visual-art visual-art-d" />
        </div>
      )}
      <div className="visual-overlay" />
      <div className="visual-panel">
        <span className="visual-chip">{current.label}</span>
        <div className="visual-caption">{current.caption}</div>
      </div>
      {variant === 'hero' ? <div className="visual-video-badge">Видео и объекты</div> : null}
    </div>
  );
}
