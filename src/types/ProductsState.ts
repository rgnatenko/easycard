import { Location } from './Location';
import { Product } from './Product';

export interface ProductsState {
  products: Product[]
  selectedLocation: Location | null
}
