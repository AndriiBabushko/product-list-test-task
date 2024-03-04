'use client';

import React, { FC, ReactNode } from 'react';
import { NavigationBar } from '@components/ui';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <NavigationBar />
      {children}
    </>
  );
};
