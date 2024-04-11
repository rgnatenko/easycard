import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { CardInfo } from '../../types/FieldValues/CardInfo';
import { useCards, useProducts } from '../../redux/selectors';
import { useAppDispatch } from '../../redux/hooks';
import { addCard, setCardFormIsOpened, setIsFirstAdded, setSelectedCard, updateCard } from '../../redux/features/cards';
import { Card } from '../../types/Card';
import { RadioButton } from '../../ui/RadioButton/RadioButton';
import Button from '../../ui/Button/Button';
import ButtonWithIcon from '../../ui/ButtonWithIcon/ButtonWithIcon';
import Input from '../../ui/Input/Input';

type Props = {
  card?: Card
}

const CreateForm: React.FC<Props> = ({ card }) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors }
  } = useForm<CardInfo>();
  const ownerName = watch('ownerName');

  useEffect(() => {
    if (card) {
      setValue('ownerName', card.ownerName);
    }
  }, []);

  const dispatch = useAppDispatch();

  const { selectedProduct, products } = useProducts();
  const { cards } = useCards();

  const [isActive, setisActive] = useState(card?.status as boolean);

  const isFirstCard = !cards.length && products.length === 1;

  const handleSuccessfullCardConnect = () => {
    dispatch(setIsFirstAdded(true));
    setTimeout(() => dispatch(setIsFirstAdded(false)), 3000);
  };

  const connectCard: SubmitHandler<CardInfo> = (data) => {
    if (selectedProduct) {
      if (isFirstCard) {
        handleSuccessfullCardConnect();
      }

      if (card) {
        const updatedCard: Card = { ...card, ownerName, status: isActive };

        dispatch(updateCard({ updatedCard, cards }));

        dispatch(setSelectedCard(null));

        return;
      }

      dispatch(addCard(data.ownerName));

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
