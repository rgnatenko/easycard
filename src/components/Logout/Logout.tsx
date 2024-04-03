import React from 'react';
import { Button } from '../../ui/Button';
import { useDataFromStorage } from '../../helpers/useDataFromStorage';
import { useAppDispatch } from '../../redux/hooks';
import { setUser } from '../../redux/features/user';

export const Logout: React.FC = () => {
  const dispatch = useAppDispatch();

  const logout = () => {
    dispatch(setUser(null));
    useDataFromStorage.setIsAuthorized(false);
  };

  return (
    <div className="logout">
      Are you shure you want to log out?

      <Button
        btnType='primary'
        additionalClass='logout__btn'
        onClick={logout}
      >
        Yes, i want
      </Button>
    </div>
  );
};
