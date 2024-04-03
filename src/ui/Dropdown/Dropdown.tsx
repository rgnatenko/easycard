import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode
}

export const DropDown: React.FC<Props> = ({ children }) => {
  return (
    <div className="dropdown">
      {children}
      <div className="icon icon--down-grey" />
    </div>
  );
};
