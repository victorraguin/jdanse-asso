import { ReactNode } from 'react';
import SessionProvider from './Provider';
import { NotificationProvider } from './context/NotificationContext';
import "./globals.css";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <NotificationProvider>
          {children}
          </NotificationProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
