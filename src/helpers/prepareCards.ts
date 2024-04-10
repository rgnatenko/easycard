import { Card } from '../types/Card';
import { normalizeString } from './normalizeString';

export interface CardArgs {
  cards: Card[],
  query: string,
  startIndex: number,
  endIndex: number,
}

type PrepareCards = (arg: CardArgs) => Card[];

export const prepareCards: PrepareCards = ({ cards, query, startIndex, endIndex }) => {
  return cards
    .filter(card => {
      if (query) {
        return normalizeString(card.ownerName).includes(normalizeString(query));
      }

      return true;
    })
    .slice(startIndex, endIndex);
};
