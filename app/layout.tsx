import './globals.css';
import { SiteHeader } from '../components/SiteHeader';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'СтройКонтур',
  description: 'Платформа для заказов, подрядов, специалистов, компаний и документов.'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
