import { Card } from './Card';
import { Location } from './Location';

export interface Product {
  location: Location,
  id: number,
  cards: Card[]
}
