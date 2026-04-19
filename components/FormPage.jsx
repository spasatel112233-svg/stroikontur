import Link from 'next/link';
import HeroVisual from './HeroVisual';

export default function FormPage({ back='/', backLabel='На главную', tag, title, text, sideTitle, sideText, sideList=[], fields=[], cta='Отправить', visual='site', size='medium' }) {
  return (
    <main className="page">
      <div className="container">
        <Link href={back} className="back-link">← {backLabel}</Link>
        <section className={`split-page split-page-${size}`} style={{ marginTop: 18 }}>
          <div className="split-side card">
            <span className="page-tag page-tag-light">{tag}</span>
            <h1 className="section-title split-title">{sideTitle || title}</h1>
            <p className="section-text split-text">{sideText || text}</p>
            {!!sideList.length && <ul className="split-list">{sideList.map((item)=><li key={item}>{item}</li>)}</ul>}
            <div className="split-info-grid">
              <div className="split-info-card"><strong>Быстрый старт</strong><span>Форма подбирается по вашему сценарию: заказ, документ, подрядчик или поддержка.</span></div>
              <div className="split-info-card"><strong>Понятная подача</strong><span>Запрос уходит в нужный раздел и не теряется между общими заявками.</span></div>
            </div>
            <div className="split-visual-shell"><HeroVisual variant={visual} compact /></div>
          </div>
          <div className="form-shell card">
            <div className="form-shell-head">
              <span className="page-tag">{tag}</span>
              <h2 className="section-title section-title-form">{title}</h2>
              <p className="section-text section-text-form">{text}</p>
            </div>
            <div className="form-grid" style={{ marginTop: 20 }}>
              {fields.map((field) => (
                <div className={field.full ? 'full' : ''} key={field.name}>
                  {field.label ? <label className="form-label">{field.label}</label> : null}
                  {field.type === 'textarea' ? (
                    <div className="textarea"><textarea placeholder={field.placeholder} /></div>
                  ) : field.type === 'select' ? (
                    <div className="select-wrap"><select defaultValue=""><option value="" disabled>{field.placeholder}</option><option>{field.placeholder}</option></select></div>
                  ) : (
                    <div className="input"><input placeholder={field.placeholder} /></div>
                  )}
                </div>
              ))}
            </div>
            <div className="form-footer form-footer-strong">
              <button className="btn btn-primary btn-form-primary">{cta}</button>
              <p className="footer-note">Данные используются только для обработки запроса и связи по вашему обращению.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
