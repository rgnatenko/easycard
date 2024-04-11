import React from 'react';
import { LocationPopupInfo } from '../LocationPopupInfo';
import Popup from '../../ui/Popup/Popup';

const LocationPopup: React.FC = () => (
  <Popup>
    <LocationPopupInfo />
  </Popup>
);

export default LocationPopup;
