import React from 'react';
import Button from '../../ui/Button/Button';
import { useAppDispatch } from '../../redux/hooks';
import { setIsFirstProduct } from '../../redux/features/products';
import Hint from '../Hint/Hint';

const SuccessfullPopupGuide: React.FC = () => {
  const dispatch = useAppDispatch();
  const removePopup = () => dispatch(setIsFirstProduct(false));

  return (
    <div className="popup__overlay successfull-popup">
      <Hint additionClass="successfull-popup__hint">
        Your locations are here.
        If you want to add more locations expand
        the list and click on “Add new location”

        <Button
          type="button"
          btnType="primary"
          additionalClass="successfull-popup__btn"
          onClick={removePopup}
        >
          Got it
        </Button>
      </Hint>
    </div>
  );
};

export default SuccessfullPopupGuide;
