import { ReactNode } from 'react';

export function PageTitle({ badge, title, lead, actions }: { badge?: string; title: string; lead: string; actions?: ReactNode }) {
  return (
    <section className="section" style={{ marginTop: 12 }}>
      {badge ? <span className="badge">{badge}</span> : null}
      <h1 className="page-title">{title}</h1>
      <p className="page-lead">{lead}</p>
      {actions ? <div className="action-row">{actions}</div> : null}
    </section>
  );
}
