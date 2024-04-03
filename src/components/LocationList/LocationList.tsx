import React from 'react';
import { Location } from '../../types/Location';
import { LocationItem } from '../../ui/LocationItem';

type Props = {
  locations: Location[]
}

export const LocationList: React.FC<Props> = ({ locations }) => (
  <div className="locationList">
    {locations.map(location => (
      <LocationItem
        key={location.place_id}
        location={location}
      />
    ))}
  </div>
);
