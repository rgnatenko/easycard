import React, { ReactNode } from 'react';
import cn from 'classnames';

type Props = {
  children: ReactNode
  btnType: 'secondary' | 'primary'
  type?: 'submit' | 'reset' | 'button',
  additionalClass?: string,
  onClick?: () => void
};

export const Button: React.FC<Props> = ({
  children,
  btnType,
  type,
  additionalClass,
  onClick
}) => {
  return (
    <button
      className={cn(`${additionalClass}`, {
        'primary-button': btnType === 'primary',
        'secondary-button': btnType === 'secondary'
      })}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
