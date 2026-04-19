const variants = {
  hero: { image: '/hero.jpg', label: 'Строительная платформа', caption: 'Стройка, подряд, техника и реальные объекты' },
  orders: { image: '/hero.jpg', label: 'Живой поток заказов', caption: 'Подряды, поставки и объектные задачи' },
  documents: { image: '/media/contact.jpeg', label: 'Документы и сопровождение', caption: 'Шаблоны, акты и документы по объекту' },
  specialists: { image: '/handshake.jpg', label: 'Люди и команды', caption: 'Исполнители, бригады и специалисты по объектам' },
  companies: { image: '/handshake.jpg', label: 'Команды и партнёрство', caption: 'Компании, подрядчики и входящие запросы' },
  disputes: { image: '/media/gavel.jpg', label: 'Рабочие формы и претензии', caption: 'Документы, акты и сопровождение спорных ситуаций' },
  request: { image: '/media/contact.jpeg', label: 'Заявка и обработка', caption: 'Описание объекта, задачи и маршрута запроса' },
  login: { image: '/media/contact.jpeg', label: 'Рабочий кабинет', caption: 'Доступ к заказам, документам и сохранённым действиям' },
  register: { image: '/media/contact.jpeg', label: 'Новый аккаунт', caption: 'Публикация заказов, профили и рабочие действия' },
  site: { image: '/hero.jpg', label: 'Объекты и подряд', caption: 'Строительные задачи и работа по объектам' },
  team: { image: '/handshake.jpg', label: 'Команды', caption: 'Подрядчики, специалисты и координация' },
  company: { image: '/handshake.jpg', label: 'Подрядные компании', caption: 'Партнёры, подрядчики и сервисные профили' },
  preview: { image: '/media/contact.jpeg', label: 'Поддержка', caption: 'Помощь по платформе и сопровождению' },
  handshake: { image: '/handshake.jpg', label: 'Команда на объекте', caption: 'Переговоры, координация и запуск работ' }
};
export default function HeroVisual({ variant = 'hero' }) {
  const current = variants[variant] || variants.hero;
  return (
    <div className={`visual-scene visual-${variant}`}>
      <div className="visual-image" style={{ backgroundImage: `url(${current.image})` }} />
      <div className="visual-overlay" />
      <div className="visual-panel">
        <span className="visual-chip">{current.label}</span>
        <div className="visual-caption">{current.caption}</div>
      </div>
      {variant === 'hero' ? <div className="visual-video-badge">Видео и объекты</div> : null}
    </div>
  );
}
