import { Product } from '../Product';

export interface ProductsState {
  products: Product[],
  selectedProduct: Product | null,
  isfirstProduct: boolean
}
