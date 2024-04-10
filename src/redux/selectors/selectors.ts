import { prepareCards } from '../../helpers/prepareCards';
import { Card } from '../../types/Card';
import { useAppSelector } from '../hooks';

export const useUser = () => useAppSelector(state => state.user);
export const useProducts = () => useAppSelector(state => state.products);
export const useLocations = () => useAppSelector(state => state.locations);
export const useCards = () => useAppSelector(state => state.cards);
export const usePagination = () => useAppSelector(state => state.pagination);
export const useChallenge = () => useAppSelector(state => state.challenge);

interface UseCardsOnThePage {
  cards: Card[],
  query: string,
  currentPage: number,
  itemsPerPage: number
}

export const useCardsOnThePage = ({ cards, currentPage, itemsPerPage, query }: UseCardsOnThePage) => {
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return prepareCards({ cards, query, startIndex, endIndex });
};
