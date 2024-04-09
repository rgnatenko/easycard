import React from 'react';

type Props = {
  active?: boolean,
  onChange?: () => void
  label?: string
}

export const RadioButton: React.FC<Props> = ({ active, onChange, label }) => {
  return (
    <div className="button-radio">
      <input
        type="radio"
        checked={active}
        onChange={onChange}
        className="input-radio"
      />

      <p>{label}</p>
    </div>
  );
};
