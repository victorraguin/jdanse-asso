import { ReactNode } from 'react';
import SessionProvider from './Provider';
import { NotificationProvider } from './context/NotificationContext';
import { workSans } from "./ui/fonts";
import "./globals.css";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {

  return (
    <html lang="en">
      <body className={`${workSans.className} antialiased`}>
        <SessionProvider>
          <NotificationProvider>
          {children}
          </NotificationProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
