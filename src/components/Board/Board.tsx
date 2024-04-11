import React from 'react';
import { useProducts } from '../../redux/selectors';
import ConnectLocation from '../ConnectLocation/ConnectLocation';
import LeaderBoard from '../LeaderBoard/LeaderBoard';

const Board: React.FC = () => {
  const { products } = useProducts();

  if (!products.length) {
    return (
      <div className="board">
        <ConnectLocation />
      </div>
    );
  }

  return (
    <div className="board">
      <LeaderBoard />
    </div>
  );
};

export default Board;
