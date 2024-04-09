import React from 'react';
import { Location } from '../../types/Location';
import { normalizeTextLength } from '../../helpers/normalizeTextLength';
import { useAppDispatch } from '../../redux/hooks';
import { setLocations, setSelectedLocation } from '../../redux/features/locations';

type Props = {
  location: Location
}

export const LocationItem: React.FC<Props> = ({ location }) => {
  const normalizedText = normalizeTextLength(location.display_name, 5, '...');
  const dispatch = useAppDispatch();

  const selectLocation = () => {
    dispatch(setSelectedLocation(location));
    dispatch(setLocations([]));
  };

  return (
    <button
      className="location"
      onClick={selectLocation}
    >
      <div className="icon icon--location-grey" />

      <p className="text-body">{normalizedText}</p>
    </button>
  );
};
