import React, { useEffect, useState } from 'react';
import { TextWithIcon } from '../TextWithIcon';
import { useForm } from 'react-hook-form';
import { BusinessName } from '../../types/BusinessName';
import { Input } from '../Input';
import { Button } from '../Button';
import fetchLocation from '../../fetchLocation/fetchLocation';
import { Location } from '../../types/Location';
import { LocationList } from '../../components/LocationList';
import { useProducts } from '../../redux/selectors';
import { Link } from 'react-router-dom';

export const LocationPopupInfo: React.FC = () => {
  const { register, watch, setValue } = useForm<BusinessName>();
  const nameToSet = watch('businessName');

  const [locations, setLocations] = useState<Location[]>([]);

  const { selectedLocation } = useProducts();

  useEffect(() => {
    if (nameToSet) {
      fetchLocation(nameToSet)
        .then(locations => setLocations(locations));
    }
  }, [nameToSet]);

  useEffect(() => {
    if (selectedLocation) {
      setValue('businessName', selectedLocation.name);
      setLocations([]);
    }
  }, [selectedLocation]);

  const handleClear = () => setValue('businessName', '');

  return (
    <div className="location-popup">
      <TextWithIcon
        iconClass="close"
        classToAdd="h4"
        to='./../'
      >
        Connect Location
      </TextWithIcon>

      <div className="location-popup__input-area">
        <p className="text-body">
          Find your business by typing it’s name
        </p>

        <div className="location-popup__input-wrapper">
          <Input
            classToAdd="location-popup__input"
            register={register}
            name="businessName"
            placeholder="Start typing your business name"
          />

          {nameToSet && <button
            className="icon icon--clear  location-popup__clear-icon"
            onClick={handleClear}
          />
          }

          {locations.length > 0 && nameToSet
            && <LocationList locations={locations} />}
        </div>
      </div>

      <TextWithIcon iconClass="down" classToAdd='text-with-icon--width70'>
        <button className="text-warning">
          Can’t find your business in the list? Click here
        </button>
      </TextWithIcon>

      <div className="location-popup__buttons">
        <Link to="./../" className="secondary-button" >Cancel</Link>
        <Button type="submit" btnType="primary">Connect</Button>
      </div>
    </div>
  );
};
