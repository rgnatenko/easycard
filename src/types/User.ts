import { Product } from './Product';

export interface User {
  fullName: string,
  password: string,
  products: Product[]
}
