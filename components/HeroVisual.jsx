const variants = {
  hero: {
    image: '/hero.jpg',
    label: 'Масштабные объекты',
    caption: 'Стройка, подряд, техника и реальные объекты'
  },
  team: {
    image: '/handshake.jpg',
    label: 'Компании и команды',
    caption: 'Работа с подрядчиками, специалистами и входящими запросами'
  },
  site: {
    image: '/hero.jpg',
    label: 'Строительные работы',
    caption: 'Подряды, поставки, объектные задачи'
  },
  documents: {
    image: '/hero.jpg',
    label: 'Документы и сопровождение',
    caption: 'Шаблоны, акты, споры и рабочие кейсы'
  },
  handshake: {
    image: '/handshake.jpg',
    label: 'Люди на объекте',
    caption: 'Связь, договорённости и работа на площадке'
  }
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
      {variant === 'hero' ? (
        <div className="visual-video-badge">
          <span className="play-dot">▶</span>
          <span>Видео стройки</span>
        </div>
      ) : null}
    </div>
  );
}
