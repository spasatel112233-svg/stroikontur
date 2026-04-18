import './globals.css';
import Header from '@/components/Header';

export const metadata = {
  title: 'СтройКонтур',
  description: 'Платформа для заказов, подрядов, специалистов, компаний и документов.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
