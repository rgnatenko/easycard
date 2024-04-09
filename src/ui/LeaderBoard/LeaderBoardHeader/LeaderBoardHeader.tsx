import React from 'react';
import { useForm } from 'react-hook-form';
import { SearchQuery } from '../../../types/FieldValues/SearchQuery';
import { Input } from '../../Input';
import { useCards } from '../../../redux/selectors';

const LeaderBoardHeader: React.FC = () => {
  const { register } = useForm<SearchQuery>();
  const { cards } = useCards();

  return (
    <div className="leader-board__header">
      <div className="leader-board__info">
        <h3>Leaderboard</h3>
        <p className="text-body leader-board__products-count">
          {cards.length} Products
        </p>
      </div>

      <Input
        classToAdd="leader-board__input"
        register={register}
        name="query"
        placeholder="Search by Name or Target"
      />
    </div>
  );
};

export default LeaderBoardHeader;
