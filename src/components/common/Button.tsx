'use client';

import { FC, ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
}

export const Button: FC<ButtonProps> = ({ children }) => {
  return <button>{children}</button>;
};
