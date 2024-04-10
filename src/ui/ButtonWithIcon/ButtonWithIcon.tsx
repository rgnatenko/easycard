import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  iconClass: string,
  children?: ReactNode,
  additionalClass?: string,
  onClick?: () => void
  type?: 'button' | 'reset' | 'submit'
  to?: string
};

export const ButtonWithIcon: React.FC<Props> = ({ iconClass,
  children,
  additionalClass,
  onClick,
  type,
  to
}) => {
  if (to) {
    return (
      <Link
        to={to}
        className={`btnWithIcon ${additionalClass}`}
        onClick={onClick}
      >
        <div className={`icon icon--${iconClass}`} />
        {children}
      </Link>
    );
  }
  return (
    <button
      className={`btnWithIcon ${additionalClass}`}
      onClick={onClick}
      type={type}
    >
      <div className={`icon icon--${iconClass}`} />
      {children}
    </button>
  );
};
