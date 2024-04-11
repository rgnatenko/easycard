import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import IconButton from '../IconButton/IconButton';

type Props = {
  iconClass: string,
  children?: ReactNode,
  additionalClass?: string,
  onClick?: () => void
  type?: 'button' | 'reset' | 'submit'
  to?: string
};

const ButtonWithIcon: React.FC<Props> = ({ iconClass,
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
        <IconButton iconClass={iconClass}/>
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
      <IconButton iconClass={iconClass}/>
      {children}
    </button>
  );
};

export default ButtonWithIcon;
