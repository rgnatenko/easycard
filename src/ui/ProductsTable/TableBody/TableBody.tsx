import React from 'react';
import { useCards, useCardsOnThePage, usePagination } from '../../../redux/selectors';
import CardItem from '../CardItem/CardItem';
import CreateForm from '../../CreateForm/CreateForm';

export const TableBody: React.FC = () => {
  const { cards, cardFormIsOpened, selectedCard } = useCards();

  const { currentPage, itemsPerPage } = usePagination();

  const cardsOnPage = useCardsOnThePage({ currentPage, itemsPerPage, cards });


  if (cardFormIsOpened) {
    return (
      <tbody className="products-table__body body">
        <CreateForm />
      </tbody>
    );
  }

  if (selectedCard) {
    return <CreateForm card={selectedCard} />;
  }

  if (!cards.length) {
    return (
      <tbody className="products-table__body body">
        <tr className="body_card card">
          <td className="card__item card__item--no-state">
            Click on the “Connect Card” button to add a new card
          </td>
        </tr>
      </tbody>
    );
  }

  return (
    <tbody className="products-table__body body">
      {cardsOnPage.map((card) => (
        <CardItem
          key={card.ownerName}
          card={card}
          rank={cards.findIndex(cardToFind => cardToFind.productId === card.productId)}
        />
      ))}
    </tbody>
  );
};
