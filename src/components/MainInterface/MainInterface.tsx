import React from 'react';
import { TopBar } from '../../ui/TopBar';
import { Board } from '../Board';
import SuccessfullPopupGuide from '../../ui/SuccessfullPopup/SuccessfullPopup';
import { useProducts } from '../../redux/selectors';
import { Outlet } from 'react-router-dom';

export const MainInterface: React.FC = () => {
  const { isfirstProduct } = useProducts();

  return (
    <div className="main">
      <TopBar />

      <Board />

      <Outlet />

      {isfirstProduct && <SuccessfullPopupGuide />}
    </div>
  );
};
