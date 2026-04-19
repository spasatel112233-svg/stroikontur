import Link from 'next/link';
import HeroVisual from './HeroVisual';

export default function FormPage({
  back = '/',
  backLabel = 'На главную',
  tag,
  title,
  text,
  sideTitle,
  sideText,
  sideList = [],
  fields = [],
  cta = 'Отправить',
  visual = 'site'
}) {
  return (
    <main className="page">
      <div className="container">
        <Link href={back} className="back-link">← {backLabel}</Link>
        <section className="split-page" style={{ marginTop: 18 }}>
          <div className="split-side card">
            <span className="page-tag" style={{ color: '#ffd8b3', borderColor: 'rgba(255,255,255,.15)', background: 'rgba(255,255,255,.08)' }}>{tag}</span>
            <h1 className="section-title" style={{ color: 'white', marginTop: 18 }}>{sideTitle || title}</h1>
            <p className="section-text" style={{ color: 'rgba(255,255,255,.78)' }}>{sideText || text}</p>
            {!!sideList.length && (
              <ul>
                {sideList.map((item) => <li key={item}>{item}</li>)}
              </ul>
            )}
            <div className="split-visual-shell">
              <HeroVisual variant={visual} />
            </div>
          </div>
          <div className="form-shell card">
            <span className="page-tag">{tag}</span>
            <h2 className="section-title" style={{ marginTop: 16 }}>{title}</h2>
            <p className="section-text">{text}</p>
            <div className="form-grid" style={{ marginTop: 20 }}>
              {fields.map((field) => {
                const className = field.full ? 'full' : '';
                return (
                  <div className={className} key={field.name}>
                    {field.label ? <label className="form-label">{field.label}</label> : null}
                    {field.type === 'textarea' ? (
                      <div className="textarea"><textarea placeholder={field.placeholder} /></div>
                    ) : field.type === 'select' ? (
                      <div className="select-wrap"><select defaultValue=""><option value="" disabled>{field.placeholder}</option><option>{field.placeholder}</option></select></div>
                    ) : (
                      <div className="input"><input placeholder={field.placeholder} /></div>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="form-footer">
              <button className="btn btn-primary btn-form-primary">{cta}</button>
            </div>
            <p className="footer-note">Данные используются только для обработки запроса и связи по вашему обращению.</p>
          </div>
        </section>
      </div>
    </main>
  );
}
