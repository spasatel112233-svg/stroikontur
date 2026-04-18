import { ReactNode } from 'react';

export function FormPage({ badge, title, lead, children }: { badge: string; title: string; lead: string; children: ReactNode }) {
  return (
    <div className="page-shell">
      <div className="container">
        <a href="/" className="footer-note">← На главную</a>
        <div className="form-card" style={{ marginTop: 18 }}>
          <span className="badge">{badge}</span>
          <h1 className="page-title" style={{ fontSize: 46, marginTop: 16 }}>{title}</h1>
          <p className="page-lead" style={{ fontSize: 18, maxWidth: 620 }}>{lead}</p>
          <div style={{ marginTop: 26 }}>{children}</div>
        </div>
      </div>
    </div>
  );
}
