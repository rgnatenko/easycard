import React, { useEffect, useState } from 'react';
import { useLocations } from '../../../redux/selectors';
import { BusinessName } from '../../../types/FieldValues/BusinessName';
import { useForm } from 'react-hook-form';
import { LocationList } from '../../../components/LocationList';
import { Input } from '../../Input/Input';
import { Hint } from '../../Hint';
import { useAppDispatch } from '../../../redux/hooks';
import { initLocation, setCustomName, setError, setSelectedLocation } from '../../../redux/features/locations';

type Props = {
  nameToSet: 'businessName' | 'customName',
  placeholder: string,
  label: string,
  hint?: boolean
  hintText?: string
}

export const InputArea: React.FC<Props> = ({
  nameToSet,
  placeholder,
  label,
  hint,
  hintText
}) => {
  const { register, watch, setValue } = useForm<BusinessName>();
  const inputValue = watch(nameToSet);
  const businessName = inputValue && nameToSet === 'businessName';
  const customBusinessName = inputValue && nameToSet === 'customName';

  const { selectedLocation, locations, locationsError, customName } = useLocations();
  const dispatch = useAppDispatch();

  const [isHintOpen, setIsHintOpen] = useState(false);

  const value = businessName
    ? selectedLocation?.display_name
    : customBusinessName ? customName
      : inputValue;

  useEffect(() => {
    if (businessName) {
      dispatch(initLocation(inputValue));
      dispatch(setSelectedLocation(null));

      return;
    }

    if (customBusinessName) {
      dispatch(setCustomName(inputValue));

      return;
    }

    dispatch(setError(''));
  }, [inputValue]);


  const handleClear = () => {
    if (businessName) {
      dispatch(setSelectedLocation(null));
    }

    if (customBusinessName) {
      dispatch(setCustomName(''));
    }

    setValue(nameToSet, '');
  };

  return (
    <div
      className="location-popup__input-area"
    >
      <div className="location-popup__label-area">
        <p className="text-body">
          {label}
        </p>

        {hint && (
          <button
            className="icon icon--hint"
            onClick={() => setIsHintOpen(!isHintOpen)}
          />
        )}

        {hintText && isHintOpen &&
          <Hint additionClass='location-popup__hint'>
            {hintText}
          </Hint>
        }
      </div>

      <div className="location-popup__input-wrapper">
        <Input
          classToAdd="location-popup__input"
          register={register}
          name={nameToSet}
          placeholder={placeholder}
          value={value}
        />

        {inputValue &&
          <button
            className="icon icon--clear  location-popup__clear-icon"
            onClick={handleClear}
          />}

        {businessName && !selectedLocation && <LocationList locations={locations} />}

        {locationsError && <p className='text-danger'>{locationsError}</p>}
      </div>
    </div>
  );
};
