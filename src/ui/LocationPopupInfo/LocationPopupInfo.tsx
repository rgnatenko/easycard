import React, { useState } from 'react';
import cn from 'classnames';
import { TextWithIcon } from '../TextWithIcon';
import { Button } from '../Button';
import { Link, useNavigate } from 'react-router-dom';
import { InputArea } from './InputArea';
import { useLocations, useProducts } from '../../redux/selectors';
import { generateNewLocation } from '../../helpers/generateNewLocation';
import { Product } from '../../types/Product';
import { useAppDispatch } from '../../redux/hooks';
import { setIsFirstProduct, setProducts, setSelectedProduct } from '../../redux/features/products';
import { useDataFromStorage } from '../../helpers/useDataFromStorage';
import { setCustomName, setError, setSelectedLocation } from '../../redux/features/locations';
import { setCards } from '../../redux/features/cards';

export const LocationPopupInfo: React.FC = () => {
  const [sectionIsOpened, setSectionIsOpened] = useState(false);
  const openCustomNameField = () => setSectionIsOpened(!sectionIsOpened);
  const hintText = 'Enter name of your business and we will generate id and review link on our own.';

  const { selectedLocation, customName } = useLocations();
  const { products } = useProducts();
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const connect = () => {
    if (selectedLocation && customName) {
      dispatch(setError('Seems you\'ve chosen custom and real location, for creating product, please, choose one'));

      return;
    }

    if (selectedLocation || customName) {
      if (!products.length) {
        dispatch(setIsFirstProduct(true));
      }

      const location = selectedLocation || generateNewLocation(customName);

      const newProduct: Product = {
        location,
        id: location.place_id,
        cards: []
      };

      useDataFromStorage.addProduct(newProduct);
      dispatch(setSelectedProduct(newProduct));
      dispatch(setProducts([...products, newProduct]));

      dispatch(setCards(newProduct.cards));

      dispatch(setSelectedLocation(null));
      dispatch(setCustomName(''));

      navigate('./../');

      return;
    }

    dispatch(setError('Can\'t connect your business without it\'s name, please provide it'));
  };

  return (
    <div className="location-popup">
      <TextWithIcon
        iconClass="close"
        classToAdd="h4"
        to='./../'
      >
        Connect Location
      </TextWithIcon>

      <InputArea
        nameToSet='businessName'
        label="Find your business by typing it’s name"
        placeholder="Start typing your business name"
      />

      <TextWithIcon
        iconClass={cn({
          'down': !sectionIsOpened,
          'up': sectionIsOpened
        })}
        classToAdd='text-with-icon--width70'
      >
        <button
          className="text-warning"
          onClick={openCustomNameField}
        >
          Can’t find your business in the list? Click here
        </button>
      </TextWithIcon>

      {sectionIsOpened &&
        <InputArea
          nameToSet='customName'
          label="Type your business name"
          placeholder="e.g. https://g.page/yourbusiness/review"
          hint
          hintText={hintText}
        />}

      <div className="location-popup__buttons">
        <Link to="./../" className="secondary-button">
          Cancel
        </Link>

        <Button type="submit" btnType="primary" onClick={connect}>
          Connect
        </Button>
      </div>
    </div>
  );
};
