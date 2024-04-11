import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  type?: 'submit' | 'reset' | 'button',
  iconClass: string,
  classToAdd?: string
  onClick?: () => void,
  to?: string;
}

const IconButton: React.FC<Props> = ({ type, iconClass, onClick, classToAdd, to }) => {
  if (to) {
    return (
      <Link
        to={to}
        className={`icon icon--${iconClass} ${classToAdd}`}
      />
    );
  }

  return (
    <button
      type={type}
      className={`icon icon--${iconClass} ${classToAdd}`}
      onClick={onClick}
    />
  );
};

export default IconButton;
