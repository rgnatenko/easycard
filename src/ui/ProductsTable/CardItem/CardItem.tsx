import React from 'react';
import { Card } from '../../../types/Card';
import { useProducts } from '../../../redux/selectors';
import { getAvatarName } from '../../../helpers/getAvatarName';
import classNames from 'classnames';
import { useAppDispatch } from '../../../redux/hooks';
import { setSelectedCard } from '../../../redux/features/cards';
import { generateCardId } from '../../../helpers/generateCardId';

type Props = {
  card: Card,
  rank: number
}

const CardItem: React.FC<Props> = ({ card, rank }) => {
  const { selectedProduct } = useProducts();
  const target = selectedProduct?.location.name;
  const name = getAvatarName(card.ownerName);
  const status = card.status ? 'Active' : 'Inactive';

  const dispatch = useAppDispatch();

  const handleCardSelection = () => dispatch(setSelectedCard(card));

  return (
    <tr className='body__card card' onDoubleClick={handleCardSelection}>
      <td className="card__item card__item--rank">{rank + 1}</td>

      <td className="card__item card__item--name">
        <div className="card__avatar">{name}</div>

        <div className="card__owner-info">
          <p className='text-body card__owner-name'>{card.ownerName}</p>
          <p className='text-secondary'>{generateCardId(card.productId)}</p>
        </div>
      </td>

      <td className="card__item card__item--target">{target}</td>
      <td className="card__item card__item--status">
        <div className={classNames('card__status', {
          'card__status--active': card.status,
          'card__status--inactive': !card.status,
        })}
        >
          {status}
        </div>
      </td>
      <td className="card__item card__item--scan">{card.scanDate}</td>
      <td className="card__item card__item--taps">{card.taps}</td>
    </tr>
  );
};

export default CardItem;
