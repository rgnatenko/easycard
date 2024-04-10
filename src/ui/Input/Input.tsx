import React from 'react';
import { FieldNames } from '../../types/FieldNames';
import { Register } from '../../types/Reqister';

type Props = {
  classToAdd?: string,
  register: Register,
  placeholder?: string,
  value?: string,
  name: FieldNames
  type?: string,
  required?: boolean
}

export const Input: React.FC<Props> = ({
  classToAdd,
  register,
  placeholder,
  value,
  name,
  type,
  required = false
}) => {
  return (
    <input
      className={`input ${classToAdd}`}
      placeholder={placeholder}
      {...register(name, { required })}
      value={value}
      type={type}
      autoComplete="off"
    />
  );
};
