import React from 'react';
import { Popup } from '../../ui/Popup';
import { LocationPopupInfo } from '../../ui/LocationPopupInfo';

const LocationPopup: React.FC = () => (
  <Popup>
    <LocationPopupInfo />
  </Popup>
);

export default LocationPopup;
