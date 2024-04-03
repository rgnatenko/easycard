/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState } from 'react';
import cn from 'classnames';
import { SubmitHandler, useForm } from 'react-hook-form';
import { User } from '../../types/User';
import { useAppDispatch } from '../../redux/hooks';
import { useDataFromStorage } from '../../helpers/useDataFromStorage';
import { Button } from '../../ui/Button';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../../redux/features/user';
import { UserInputs } from '../../types/UserInputs';
import { Input } from '../../ui/Input';

export const AuthForm: React.FC = () => {
  const [openedPassword, setOpenedPassword] = useState(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm<UserInputs>();

  const userFromStorage = useDataFromStorage.getUser();

  const onSubmit: SubmitHandler<UserInputs> = (data) => {
    const user: User = { ...data, products: [] };

    dispatch(setUser(user));
    useDataFromStorage.createUser(user);
    useDataFromStorage.setIsAuthorized(true);

    navigate('/');
  };

  return (
    <div className="App">
      <form className="authform" onSubmit={handleSubmit(onSubmit)}>
        <div className="authform__inputs">
          <Input
            classToAdd="input authform__input"
            register={register}
            name="fullName"
            placeholder='Full Name'
            value={userFromStorage?.fullName}
          />

          {errors.fullName && <p className="text-danger" >Full name is required</p>}

          <div className="authform__password-field">
            <Input
              classToAdd="authform__input"
              register={register}
              name="password"
              placeholder='Password'
              type={!openedPassword ? 'password' : 'text'}
              value={userFromStorage?.password}
            />

            <button
              type='button'
              className={cn('icon authform__icon', {
                'icon--eye-off': !openedPassword,
                'icon icon--eye': openedPassword
              })}
              onClick={() => setOpenedPassword(!openedPassword)}
            />
          </div>

          {errors.password && <p className="text-danger" >Password is required</p>}
        </div>

        <Button
          btnType="primary"
          type="submit"
        >
          {userFromStorage ? 'Log in' : 'Sign up'}
        </Button>
      </form>
    </div>
  );
};
