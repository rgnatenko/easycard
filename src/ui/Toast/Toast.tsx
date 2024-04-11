import React, { ReactNode } from 'react';
import cn from 'classnames';
import IconButton from '../IconButton/IconButton';

type Props = {
  type: 'successfull' | 'warning',
  children: ReactNode,
  onClick?: () => void
}

const Toast: React.FC<Props> = ({ type, onClick, children }) => {
  const isSuccessful = type === 'successfull';
  const isWarning = type === 'warning';

  const iconClass = cn('icon', {
    'icon--check-success': isSuccessful,
    'icon--warning': isWarning
  });

  const toastClass = cn('toast toast--visible', {
    'toast--successfull': isSuccessful,
    'toast--warning': isWarning,
  });

  return (
    <div className={toastClass}>
      <div className={iconClass}
      />

      <p className="text-body toast__message">{children}</p>

      <IconButton
        iconClass="close"
        onClick={onClick}
      />
    </div>
  );
};

export default Toast;
