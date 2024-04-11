import React from 'react';
import ChallengeBar from '../../components/ChallengeBar/ChallengeBar';
import { useProducts } from '../../redux/selectors';
import { Link } from 'react-router-dom';

const TopBar: React.FC = () => {
  const { products } = useProducts();

  return (
    <div className="top-bar">
      <div className="top-bar__head">
        <Link to="./../menu" className="icon icon--menu top-bar__menu" />

        <div className="top-bar__head-text">
          <h2>Team</h2>
          <p className="text-body">
            Overview of all your Products
          </p>
        </div>
      </div>

      {products.length > 0 && <ChallengeBar />}
    </div>
  );
};

export default TopBar;
