import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode,
}

const Popup: React.FC<Props> = ({ children }) => {
  return (
    <div className="popup__overlay">
      <div className="popup">
        {children}
      </div>
    </div>
  );
};

export default Popup;

