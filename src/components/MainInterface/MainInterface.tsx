import React from 'react';
import SuccessfullPopupGuide from '../../ui/SuccessfullPopup/SuccessfullPopup';
import { useProducts } from '../../redux/selectors';
import { Outlet } from 'react-router-dom';
import Board from '../Board/Board';
import TopBar from '../../ui/TopBar/TopBar';

const MainInterface: React.FC = () => {
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

export default MainInterface;
