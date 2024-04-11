/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState } from 'react';
import cn from 'classnames';
import { SubmitHandler, useForm } from 'react-hook-form';
import { User } from '../../types/User';
import { useAppDispatch } from '../../redux/hooks';
import { useDataFromStorage } from '../../helpers/useDataFromStorage';
import {  } from '../../ui/Button';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../../redux/features/user';
import { UserInputs } from '../../types/FieldValues/UserInputs';
import { useUser } from '../../redux/selectors';
import IconButton from '../../ui/IconButton/IconButton';
import Button from '../../ui/Button/Button';
import Input from '../../ui/Input/Input';

const AuthForm: React.FC = () => {
  const [openedPassword, setOpenedPassword] = useState(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm<UserInputs>();

  const { user } = useUser();

  const onSubmit: SubmitHandler<UserInputs> = (data) => {
    const user: User = { ...data, products: [] };

    dispatch(setUser(user));
    useDataFromStorage.authorize({ user, isAuthorized: true });

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
            value={user?.fullName}
            required
          />

          {errors.fullName && <p className="text-danger" >Full name is required</p>}

          <div className="authform__password-field">
            <Input
              classToAdd="authform__input"
              register={register}
              name="password"
              placeholder='Password'
              type={!openedPassword ? 'password' : 'text'}
              value={user?.password}
              required
            />

            <IconButton
              type='button'
              iconClass={cn({
                'eye-off': !openedPassword,
                'eye': openedPassword
              })}
              classToAdd="authform__icon"
              onClick={() => setOpenedPassword(!openedPassword)}
            />
          </div>

          {errors.password && <p className="text-danger" >Password is required</p>}
        </div>

        <Button
          btnType="primary"
          type="submit"
          additionalClass='authform__btn'
        >
          {user ? 'Log in' : 'Sign up'}
        </Button>
      </form>
    </div>
  );
};

export default AuthForm;
