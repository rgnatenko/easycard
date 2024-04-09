import React from 'react';

const TableHead: React.FC = () => {
  return (
    <thead className="products-table__head head">
      <tr className='head__row'>
        <th className="head__column head__column--rank">Rank</th>
        <th className="head__column head__column--name">Name</th>
        <th className="head__column head__column--target">Target</th>
        <th className="head__column head__column--status">Status</th>
        <th className="head__column head__column--scan">Last Scanned</th>
        <th className="head__column head__column--taps">Taps</th>
      </tr>
    </thead>
  );
};

export default TableHead;
