import { Card } from '../types/Card';
import { Product } from '../types/Product';

export const getAllCards = (products: Product[]) => {
  const cards: Card[] = [];

  products.forEach(product => {
    cards.push(...product.cards);
  });

  return cards;
};
