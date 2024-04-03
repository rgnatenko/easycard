import React from 'react';
import { Location } from '../../types/Location';
import { normalizeTextLength } from '../../helpers/normalizeTextLength';
import { useAppDispatch } from '../../redux/hooks';
import { setSelectedLocation } from '../../redux/features/products';

type Props = {
  location: Location
}

export const LocationItem: React.FC<Props> = ({ location }) => {
  const normalizedText = normalizeTextLength(location.display_name, 5, '...');
  const dispatch = useAppDispatch();

  return (
    <button
      className="location"
      onClick={() => dispatch(setSelectedLocation(location))}
    >
      <div className="icon icon--location-grey" />

      <p className="text-body">{normalizedText}</p>
    </button>
  );
};
