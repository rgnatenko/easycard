import React from 'react';
import ChallengeBar from '../ChallengeBar/ChallengeBar';
import { useProducts } from '../../redux/selectors';

export const TopBar: React.FC = () => {
  const { products } = useProducts();

  return (
    <div className="top-bar">
      <div className="top-bar__head">
        <h2>Team</h2>
        <p className="text-body">
          Overview of all your Products
        </p>
      </div>

      {products.length > 0 && <ChallengeBar />}
    </div>
  );
};
