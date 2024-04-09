import React from 'react';
import { ConnectLocation } from '../ConnectLocation';
import { useProducts } from '../../redux/selectors';
import LeaderBoard from '../../ui/LeaderBoard/LeaderBoard';

export const Board: React.FC = () => {
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
