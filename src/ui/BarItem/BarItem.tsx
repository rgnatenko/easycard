import React, { ReactNode } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import getBarItemClass from '../../helpers/getLinkClass';
import { getIconClass } from '../../helpers/getIconClass';

type Props = {
  children: ReactNode,
  iconClass: string
  to: string
}

const BarItem: React.FC<Props> = ({ children, iconClass, to }) => {
  const { pathname } = useLocation();

  const barItemClass = ({ isActive }: { isActive: boolean }) => {
    return getBarItemClass({ isActive, defaultClass: 'barItem' });
  };

  const barItemIconClassname = getIconClass({ iconClass, pathname });

  return (
    <NavLink
      to={to}
      className={barItemClass}>
      <div className={barItemIconClassname}
      />

      {children}
    </NavLink>
  );
};

export default BarItem;
