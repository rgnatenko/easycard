import React from 'react';
import ProductsTable from '../ProductsTable/ProductsTable';
import LeaderBoardHeader from './LeaderBoardHeader/LeaderBoardHeader';
import LeaderBoardFooter from './LeaderBoardFooter/LeaderBoardFooter';

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
