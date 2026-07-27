import './globals.css';
import { Providers } from './providers';

export const metadata = {
  title: 'Soliqly — AI Tax & Financial Platform',
  description: 'AI-Powered Tax & Accounting Management Platform for Uzbekistan',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
