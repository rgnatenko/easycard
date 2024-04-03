import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  children: ReactNode,
  iconClass: string,
  classToAdd?: string
  to?: string
}

export const TextWithIcon: React.FC<Props> = ({ children, iconClass, classToAdd, to }) => {
  return (
    <div className={`text-with-icon ${classToAdd}`}>
      {children}
      {!to && <button className={`icon icon--${iconClass}`} />}
      {to && (<Link
        to={to}
        className={`icon icon--${iconClass}`}
      />)}
    </div>
  );
};
