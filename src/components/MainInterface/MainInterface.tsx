import React from 'react';
import { TopBar } from '../../ui/TopBar';
import { Board } from '../Board';
import SuccessfullPopupGuide from '../../ui/SuccessfullPopup/SuccessfullPopup';
import { useProducts } from '../../redux/selectors';

export const MainInterface: React.FC = () => {
  const { isfirstProduct } = useProducts();

  return (
    <div className="main">
      <TopBar />

      <Board />

      {isfirstProduct && <SuccessfullPopupGuide />}
    </div>
  );
};
