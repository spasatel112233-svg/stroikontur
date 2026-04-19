const PHOTO_MAP = {
  site: '/images/hero-crane.jpg',
  team: '/images/workers.jpg',
  bridge: '/images/hero-crane.jpg',
  documents: '/images/gavel.jpg',
  company: '/images/workers.jpg',
  legal: '/images/gavel.jpg',
};

export default function HeroVisual({ variant = 'site', title, subtitle, video = false }) {
  const src = PHOTO_MAP[variant] || PHOTO_MAP.site;

  if (video) {
    return (
      <div className={`photo-visual photo-visual-${variant} photo-video-shell`}>
        <video
          className="photo-video"
          autoPlay
          muted
          loop
          playsInline
          poster={src}
        >
          <source src="https://videos.pexels.com/video-files/3195650/3195650-hd_1920_1080_25fps.mp4" type="video/mp4" />
        </video>
        <div className="photo-overlay" />
        {(title || subtitle) ? (
          <div className="visual-copy">
            {title ? <h3>{title}</h3> : null}
            {subtitle ? <p>{subtitle}</p> : null}
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <div className={`photo-visual photo-visual-${variant}`} style={{ backgroundImage: `url(${src})` }}>
      <div className="photo-overlay" />
      {(title || subtitle) ? (
        <div className="visual-copy">
          {title ? <h3>{title}</h3> : null}
          {subtitle ? <p>{subtitle}</p> : null}
        </div>
      ) : null}
    </div>
  );
}
