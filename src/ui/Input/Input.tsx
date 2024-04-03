import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import { UserInputs } from '../../types/UserInputs';
import { FieldNames } from '../../types/FieldNames';
import { BusinessName } from '../../types/BusinessName';

type Register = UseFormRegister<UserInputs | BusinessName>;

type Props = {
  classToAdd?: string,
  register: Register,
  placeholder?: string,
  value?: string,
  name: FieldNames
  type?: string,
}

export const Input: React.FC<Props> = ({
  classToAdd,
  register,
  placeholder,
  value,
  name,
  type
}) => {
  return (
    <input
      className={`input ${classToAdd}`}
      placeholder={placeholder}
      {...register(name, { required: true })}
      value={value}
      type={type}
    />
  );
};
