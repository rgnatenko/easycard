import React from 'react';
import { ConnectLocation } from '../ConnectLocation';
import { useUser } from '../../redux/selectors';
import { getLocationName } from '../../helpers/getLocationName';

export const Board: React.FC = () => {
  const { user } = useUser();
  const { userHasProducts } = getLocationName(user);

  if (!userHasProducts) {
    return (
      <ConnectLocation />
    );
  }

  return (
    <div className=""></div>
  );
};
