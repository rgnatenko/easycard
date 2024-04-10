import React, { useEffect, useState } from 'react';
import { Input } from '../Input';
import { SubmitHandler, useForm } from 'react-hook-form';
import { CardInfo } from '../../types/FieldValues/CardInfo';
import { useCards, useProducts } from '../../redux/selectors';
import { Button } from '../Button';
import { ButtonWithIcon } from '../ButtonWithIcon';
import { useAppDispatch } from '../../redux/hooks';
import { useDataFromStorage } from '../../helpers/useDataFromStorage';
import { generateCard } from '../../helpers/generateCard';
import { setCardFormIsOpened, setCards, setIsFirstAdded, setSelectedCard } from '../../redux/features/cards';
import { Card } from '../../types/Card';
import { cardInState } from '../../helpers/cardInState';
import { RadioButton } from '../RadioButton/RadioButton';
import { setProducts } from '../../redux/features/products';

type Props = {
  card?: Card
}

const CreateForm: React.FC<Props> = ({ card }) => {
  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<CardInfo>();
  const ownerName = watch('ownerName');

  useEffect(() => {
    if (card) {
      setValue('ownerName', card.ownerName);
    }
  }, []);

  const { selectedProduct, products } = useProducts();
  const { cards } = useCards();
  const dispatch = useAppDispatch();

  const [isActive, setisActive] = useState(card?.status as boolean);

  const connectCard: SubmitHandler<CardInfo> = (data) => {
    if (selectedProduct) {
      if (!cards.length && products.length === 1) {
        dispatch(setIsFirstAdded(true));

        setTimeout(() => dispatch(setIsFirstAdded(false)), 3000);
      }

      if (card) {
        const updatedCard: Card = { ...card, ownerName, status: isActive };

        const updatedCards = cardInState.changeCard({ cards, updatedCard });

        dispatch(setCards(updatedCards));
        useDataFromStorage.updateCard(updatedCards);

        const productToSet = useDataFromStorage.getSelectedProduct();
        if (productToSet) {
          dispatch(setProducts(products.map(product => product.id === productToSet.id
            ? productToSet : product)));
        }

        dispatch(setSelectedCard(null));

        return;
      }

      const newCard = generateCard(data.ownerName);

      useDataFromStorage.addCard(newCard);

      const productToSet = useDataFromStorage.getSelectedProduct();
      if (productToSet) {
        dispatch(setProducts(products.map(product => product.id === productToSet.id
          ? productToSet : product)));
      }

      dispatch(setCards([...cards, newCard]));

      dispatch(setCardFormIsOpened(false));
    }
  };

  const cancel = () => {
    dispatch(setCardFormIsOpened(false));
    dispatch(setSelectedCard(null));
  };

  return (
    <div className="create-form__wrapper">
      <p className="text-body">Connect new card</p>

      <form
        className="create-form"
        onSubmit={handleSubmit(connectCard)}
      >
        <div className="create-form__inputs">
          <div className="create-form__input-ownerName">
            <Input
              register={register}
              name="ownerName"
              placeholder="Waiter's name / Staff name"
              required
              classToAdd="create-form__input"
            />
            {errors.ownerName
              && <p className="text-danger">{'Please enter Waiter\'s / Staff name'}</p>}
          </div>

          <Input
            register={register}
            name="productId"
            value="Product id will be generated automatically"
            classToAdd="create-form__input"
          />
        </div>

        {card && (
          <div className="create-form__card-status">
            <RadioButton label="Active"
              active={isActive}
              onChange={() => setisActive(true)}
            />

            <RadioButton label="Inactive"
              active={!isActive}
              onChange={() => setisActive(false)}
            />
          </div>
        )}

        <div className="create-form__buttons">
          <Button
            btnType="secondary"
            type="button"
            onClick={cancel}
          >
            Cancel
          </Button>

          <ButtonWithIcon
            iconClass="check"
            additionalClass="create-form__save-btn"
            type="submit"
          >
            Save
          </ButtonWithIcon>
        </div>
      </form>
    </div>
  );
};

export default CreateForm;
