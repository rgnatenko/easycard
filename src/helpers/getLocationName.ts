import { Product } from '../types/Product';

export const getLocationName = (product: Product | null) => {
  return product ? product.location.name : 'Connect Location';
};
