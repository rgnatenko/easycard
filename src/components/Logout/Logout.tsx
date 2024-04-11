import React from 'react';
import Button from '../../ui/Button/Button';
import { useDataFromStorage } from '../../helpers/useDataFromStorage';
import { useAppDispatch } from '../../redux/hooks';
import { setUser } from '../../redux/features/user';
import { Link } from 'react-router-dom';

const Logout: React.FC = () => {
  const dispatch = useAppDispatch();

  const logout = () => {
    dispatch(setUser(null));
    useDataFromStorage.setIsAuthorized(false);
  };

  return (
    <div className="logout">
      Are you shure you want to log out?

      <div className="logout__buttons">
        <Button
          btnType='primary'
          additionalClass='logout__btn'
          onClick={logout}
        >
          Yes, i want
        </Button>
        <Link
          className="secondary-button logout__btn-cancel"
          to="./../"
        >
          No, cancel
        </Link>
      </div>
    </div>
  );
};

export default Logout;
