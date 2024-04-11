import React from 'react';
import { Product } from '../../types/Product';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../redux/hooks';
import { selectProduct } from '../../redux/features/products';
import { setCurrentPage } from '../../redux/features/pagination';

type Props = {
  products: Product[]
}

export const ProductsList: React.FC<Props> = ({ products }) => {
  const dispatch = useAppDispatch();

  const selectProductFromList = (product: Product) => {
    dispatch(selectProduct(product));
    dispatch(setCurrentPage(0));
  };

  return (
    <div className="products-list">
      <Link
        to="/team/connect-location"
        className="products-list__item products-list__item--location"
      >
        Connect Location
      </Link>

      {products.map(product => (
        <button
          className="products-list__item"
          key={product.id}
          onClick={() => selectProductFromList(product)}
        >
          {product.location.name}
        </button>
      ))}
    </div>
  );
};

export default ProductsList;
