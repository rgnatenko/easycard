import React from 'react';
import { Location } from '../../types/Location';
import { useLocations } from '../../redux/selectors';
import Loader from '../../ui/Loader/Loader';
import LocationItem from '../../ui/LocationItem/LocationItem';

type Props = {
  locations: Location[]
}

const LocationList: React.FC<Props> = ({ locations }) => {
  const { locatiansAreLoading } = useLocations();

  if (locatiansAreLoading) {
    return (
      <div className="locationList">
        <Loader />
      </div>
    );
  }

  if (locations.length) {
    return (
      <div className="locationList">
        {locations.map(location => (
          <LocationItem
            key={location.place_id}
            location={location}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="locationList">
      <div className="location">No locations found</div>
    </div>
  );
};

export default LocationList;
