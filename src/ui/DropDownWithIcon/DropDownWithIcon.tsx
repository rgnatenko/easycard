import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  iconClass?: string
  children: ReactNode
  iconDownIsNeeded?: boolean,
  onClick?: () => void
  to?: string
};

const DropDown: React.FC<Props> = ({
  iconClass,
  children,
  iconDownIsNeeded,
  to,
  onClick
}) => {
  if (to) {
    return (
      <Link
        to={to}
        className="dropdown"
      >
        <div className="dropdown__info">
          <div className="dropdown__info-icon icon">
            <div className={`icon icon--${iconClass}`} />
          </div>

          <p className="text-body dropdown__info-text">{children}</p>
        </div>

        {iconDownIsNeeded && <div className="icon icon--down" />}
      </Link>
    );
  }

  return (
    <button
      className="dropdown"
      onClick={onClick}
    >
      <div className="dropdown__info">
        <div className="dropdown__info-icon icon">
          <div className={`icon icon--${iconClass}`} />
        </div>

        <p className="text-body dropdown__info-text">{children}</p>
      </div>

      {iconDownIsNeeded && <div className="icon icon--down" />}
    </button>
  );
};

export default DropDown;
