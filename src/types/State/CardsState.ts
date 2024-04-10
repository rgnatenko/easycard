import { Card } from '../Card';

export interface CardsState {
  cards: Card[],
  cardFormIsOpened: boolean,
  selectedCard: Card | null,
  query: string,
  isFirstAdded: boolean
}
