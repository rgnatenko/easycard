import React from 'react';
import { DropDownWithIcon } from '../../ui/DropDownWithIcon';
import { BarItem } from '../../ui/BarItem';
import { useUser } from '../../redux/selectors';
import { getLocationName } from '../../helpers/getLocationName';

export const SideBar: React.FC = () => {

  const { user } = useUser();
  const { locationName, userHasProducts } = getLocationName(user);

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h4 className='sidebar__user'>{user?.fullName}</h4>

        <DropDownWithIcon
          iconClass="location"
          iconDownIsNeeded={userHasProducts}
          to='connect-location'
        >
          {locationName}
        </DropDownWithIcon>

        <div className="sidebar__divider" />

        <BarItem to="/team" iconClass="team">
          Team
        </BarItem>
      </div>

      <BarItem to="/logout" iconClass="logout">
        Logout
      </BarItem>
    </div>
  );
};
