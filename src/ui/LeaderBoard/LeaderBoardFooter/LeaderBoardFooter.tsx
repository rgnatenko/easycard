import React from 'react';
import { ButtonWithIcon } from '../../ButtonWithIcon';
import { useAppDispatch } from '../../../redux/hooks';
import { setCardFormIsOpened } from '../../../redux/features/cards';
import Pagination from '../../Pagination/Pagination';
import { setCurrentPage } from '../../../redux/features/pagination';
import { useCards, usePagination } from '../../../redux/selectors';

const LeaderBoardFooter: React.FC = () => {
  const dispatch = useAppDispatch();
  const openCardForm = () => dispatch(setCardFormIsOpened(true));

  const { cards } = useCards();
  const { itemsPerPage } = usePagination();
  const pageCount = Math.ceil(cards.length / itemsPerPage);

  const handlePageChange = ({ selected }: { selected: number }) => {
    dispatch(setCurrentPage(selected));
  };

  return (
    <div className="leader-board__footer">
      <div className="leader-board__connect-area">
        <ButtonWithIcon iconClass="plus" onClick={openCardForm}>
          Connect Card
        </ButtonWithIcon>
      </div>

      <Pagination
        pageCount={pageCount}
        pageRangeDisplayed={0}
        marginPagesDisplayed={0}
        onPageChange={handlePageChange}
        activeLinkClassName="primary-button"
        containerClassName="leader-board__pagination"
      />
    </div>
  );
};

export default LeaderBoardFooter;
