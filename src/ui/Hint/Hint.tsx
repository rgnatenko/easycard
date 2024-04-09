import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode,
  additionClass?: string
}

export const Hint: React.FC<Props> = ({ children, additionClass }) => (
  <div className={`hint ${additionClass}`}>
    {children}
  </div>
);
