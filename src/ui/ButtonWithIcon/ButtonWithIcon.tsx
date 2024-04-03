import React, { ReactNode } from 'react';

type Props = {
  iconClass: string,
  children: ReactNode,
  color: string
};

export const ButtonWithIcon: React.FC<Props> = ({ iconClass, children, color }) => {
  return (
    <button
      className="btnWithIcon"
      style={{ backgroundColor: color }}
    >
      <div className={`icon icon--${iconClass}`} />
      {children}
    </button>
  );
};
