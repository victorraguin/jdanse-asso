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
      <body className={`${workSans.className} antialiased px-6 lg:px-24 mx-auto max-w-screen-3xl`}>
        <SessionProvider>
          <NotificationProvider>
          {children}
          </NotificationProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
