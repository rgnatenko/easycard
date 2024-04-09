import React, { useState } from 'react';
import { DropDownWithIcon } from '../../ui/DropDownWithIcon';
import { BarItem } from '../../ui/BarItem';
import { useProducts, useUser } from '../../redux/selectors';
import { getLocationName } from '../../helpers/getLocationName';
import ProductsList from '../../ui/ProductsList/ProductsList';

export const SideBar: React.FC = () => {
  const { user } = useUser();
  const { selectedProduct, products } = useProducts();
  const locationName = getLocationName(selectedProduct);

  const [isOpenList, setIsOpenList] = useState(false);

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h4 className='sidebar__user'>{user?.fullName}</h4>

        {!products.length ? (
          <DropDownWithIcon
            iconClass="location"
            to="team/connect-location"
          >
            {locationName}
          </DropDownWithIcon>
        ) : (
          <DropDownWithIcon
            iconClass="location"
            iconDownIsNeeded
            onClick={() => setIsOpenList(!isOpenList)}
          >
            {locationName}
          </DropDownWithIcon>
        )}


        {isOpenList && <ProductsList products={products} />}

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
