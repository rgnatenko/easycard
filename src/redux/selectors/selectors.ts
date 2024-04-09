import { Card } from '../../types/Card';
import { useAppSelector } from '../hooks';

export const useUser = () => useAppSelector(state => state.user);
export const useProducts = () => useAppSelector(state => state.products);
export const useLocations = () => useAppSelector(state => state.locations);
export const useCards = () => useAppSelector(state => state.cards);
export const usePagination = () => useAppSelector(state => state.pagination);

type CardArgs = {
  cards: Card[],
  currentPage: number,
  itemsPerPage: number
}

export const useCardsOnThePage = ({ cards, currentPage, itemsPerPage }: CardArgs) => {
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return cards.slice(startIndex, endIndex);
};
