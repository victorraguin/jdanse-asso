"use client";
import React, { createContext, useContext, useState, ReactNode } from 'react';
import Toast from '@/utils/toast';

interface NotificationContextType {
  showNotification: (type: 'success' | 'error', message: string) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const useNotification = (): NotificationContextType => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
};

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const showNotification = (type: 'success' | 'error', message: string) => {
    setToast({ type, message });
  };

  const hideNotification = () => {
    setToast(null);
  };

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      {toast && <Toast type={toast.type} message={toast.message} onClose={hideNotification} />}
    </NotificationContext.Provider>
  );
};
