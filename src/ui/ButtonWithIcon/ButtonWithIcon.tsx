import React, { ReactNode } from 'react';

type Props = {
  iconClass: string,
  children?: ReactNode,
  additionalClass?: string,
  onClick?: () => void
  type?: 'button' | 'reset' | 'submit'
};

export const ButtonWithIcon: React.FC<Props> = ({ iconClass,
  children,
  additionalClass,
  onClick,
  type
}) => {
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
