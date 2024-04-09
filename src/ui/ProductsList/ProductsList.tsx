import React from 'react';
import { Product } from '../../types/Product';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../redux/hooks';
import { setSelectedProduct } from '../../redux/features/products';
import { useDataFromStorage } from '../../helpers/useDataFromStorage';
import { setCards } from '../../redux/features/cards';

type Props = {
  products: Product[]
}

export const ProductsList: React.FC<Props> = ({ products }) => {
  const dispatch = useAppDispatch();
  const selectProduct = (product: Product) => {
    useDataFromStorage.setSelectedProduct(product);

    dispatch(setCards(product.cards));
    dispatch(setSelectedProduct(product));
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
          onClick={() => selectProduct(product)}
        >
          {product.location.name}
        </button>
      ))}
    </div>
  );
};

export default ProductsList;
