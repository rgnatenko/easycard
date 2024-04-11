import React from 'react';
import TableHead from './TableHead/TableHead';
import { TableBody } from './TableBody/TableBody';

const ProductsTable: React.FC = () => {
  return (
    <table className="leader-board__products-table products-table">
      <TableHead />

      <div className="products-table__divider" />

      <TableBody />
    </table>
  );
};

export default ProductsTable;
