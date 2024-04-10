import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { SearchQuery } from '../../../types/FieldValues/SearchQuery';
import { Input } from '../../Input';
import { useCards } from '../../../redux/selectors';
import { useAppDispatch } from '../../../redux/hooks';
import { setQuery } from '../../../redux/features/cards';

const LeaderBoardHeader: React.FC = () => {
  const { register, watch } = useForm<SearchQuery>();
  const { cards } = useCards();
  const dispatch = useAppDispatch();

  const query = watch('query');

  useEffect(() => {
    if (query) {
      dispatch(setQuery(query));

      return;
    }

    dispatch(setQuery(''));
  }, [query]);

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
        placeholder="Search by Name"
      />
    </div>
  );
};

export default LeaderBoardHeader;
