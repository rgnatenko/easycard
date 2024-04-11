import React, { ReactNode } from 'react';
import IconButton from '../IconButton/IconButton';

type Props = {
  children: ReactNode,
  iconClass: string,
  classToAdd?: string
  to?: string,
  onClick?: () => void
}

const TextWithIcon: React.FC<Props> = ({ children, iconClass, classToAdd, to, onClick }) => {
  return (
    <div className={`text-with-icon ${classToAdd}`}>
      {children}

      <IconButton
        iconClass={iconClass}
        to={to}
        onClick={onClick}
      />
    </div>
  );
};

export default TextWithIcon;
