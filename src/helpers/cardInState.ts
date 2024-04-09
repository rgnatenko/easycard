import { Card } from '../types/Card';

interface Args {
  cards: Card[],
  updatedCard: Card
}

const changeCard = ({
  cards,
  updatedCard
}: Args) => {
  const id = cards.findIndex(cardToChange => cardToChange.productId === updatedCard.productId);

  if (id !== -1) {
    const updatedCards = [...cards];

    updatedCards[id] = updatedCard;

    return updatedCards;
  }

  return cards;
};

export const cardInState = {
  changeCard
};

