import React from 'react';
import { useAppDispatch } from '../../../redux/hooks';
import { setCardFormIsOpened } from '../../../redux/features/cards';
import { setCurrentPage } from '../../../redux/features/pagination';
import { useCards, usePagination } from '../../../redux/selectors';
import Pagination from '../../../ui/Pagination/Pagination';
import ButtonWithIcon from '../../../ui/ButtonWithIcon/ButtonWithIcon';

const LeaderBoardFooter: React.FC = () => {
  const dispatch = useAppDispatch();
  const openCardForm = () => dispatch(setCardFormIsOpened(true));

  const { cards } = useCards();
  const { itemsPerPage, currentPage } = usePagination();
  const pageCount = Math.ceil(cards.length / itemsPerPage);

  const handlePageChange = ({ selected }: { selected: number }) => {
    dispatch(setCurrentPage(selected));
  };

  return (
    <div className="leader-board__footer">
      <ButtonWithIcon
        iconClass="plus"
        onClick={openCardForm}
        additionalClass="leader-board__connect-btn"
      >
        Connect Card
      </ButtonWithIcon>

      <Pagination
        pageCount={pageCount}
        pageRangeDisplayed={0}
        marginPagesDisplayed={0}
        onPageChange={handlePageChange}
        activeLinkClassName="primary-button"
        containerClassName="leader-board__pagination"
        forcePage={currentPage}
      />
    </div>
  );
};

export default LeaderBoardFooter;
