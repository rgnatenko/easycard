import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  iconClass: string
  children: ReactNode
  iconDownIsNeeded?: boolean
  to?: string
};

export const DropDownWithIcon: React.FC<Props> = ({ iconClass, children, iconDownIsNeeded, to }) => {
  if (to) {
    return (
      <Link to={to} className="dropdownWithIcon">
        <div className="dropdownWithIcon__info">
          <div className="dropdownWithIcon__info-icon icon">
            <div className={`icon icon--${iconClass}`} />
          </div>

          <p className="text-body dropdownWithIcon__info-text">{children}</p>
        </div>

        {iconDownIsNeeded && <div className="icon icon--down" />}
      </Link>
    );
  }

  return (
    <button className="dropdownWithIcon">
      <div className="dropdownWithIcon__info">
        <div className="dropdownWithIcon__info-icon icon">
          <div className={`icon icon--${iconClass}`} />
        </div>

        <p className="text-body dropdownWithIcon__info-text">{children}</p>
      </div>

      {iconDownIsNeeded && <div className="icon icon--down" />}
    </button>
  );
};
