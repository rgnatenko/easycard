import React from 'react';
import LeaderBoardHeader from './LeaderBoardHeader/LeaderBoardHeader';
import LeaderBoardFooter from './LeaderBoardFooter/LeaderBoardFooter';
import ProductsTable from '../ProductsTable/ProductsTable';

const LeaderBoard: React.FC = () => {
  return (
    <div className="leader-board">
      <LeaderBoardHeader />

      <ProductsTable />

      <LeaderBoardFooter />
    </div>
  );
};

export default LeaderBoard;
