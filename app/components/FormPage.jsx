import Link from 'next/link';
import HeroVisual from './HeroVisual';
export default function FormPage({ back='/', backLabel='На главную', tag, title, text, sideTitle, sideText, sideList=[], fields=[], cta='Отправить', visual='request', size='wide' }) {
  return (
    <main className="page">
      <div className="container">
        <Link href={back} className="back-link">← {backLabel}</Link>
        <section className={`split-page split-${size}`} style={{ marginTop: 18 }}>
          <div className="split-side card split-side-photo">
            <div className="split-side-bg"><HeroVisual variant={visual} /></div>
            <div className="split-side-content">
              <span className="page-tag page-tag-light">{tag}</span>
              <h1 className="section-title split-title">{sideTitle || title}</h1>
              <p className="section-text split-text">{sideText || text}</p>
              {!!sideList.length && <ul className="split-list">{sideList.map((item) => <li key={item}>{item}</li>)}</ul>}
            </div>
          </div>
          <div className="form-shell card">
            <span className="page-tag">{tag}</span>
            <h2 className="section-title section-title-form">{title}</h2>
            <p className="section-text section-text-form">{text}</p>
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
                      <div className="input"><input placeholder={field.placeholder} type={field.type || 'text'} /></div>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="form-footer"><button className="btn btn-primary btn-form-primary">{cta}</button></div>
            <p className="footer-note">Данные используются только для обработки запроса и связи по вашему обращению.</p>
          </div>
        </section>
      </div>
    </main>
  );
}
