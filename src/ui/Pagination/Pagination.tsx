import React from 'react';
import ReactPaginate from 'react-paginate';

type Props = {
  pageCount: number,
  pageRangeDisplayed: number,
  marginPagesDisplayed: number,
  onPageChange: ({ selected }: { selected: number; }) => void,
  activeLinkClassName?: string
  containerClassName?: string
}

const Pagination: React.FC<Props> = ({
  pageCount,
  pageRangeDisplayed,
  marginPagesDisplayed,
  onPageChange,
  activeLinkClassName,
  containerClassName
}) => {
  return (
    <ReactPaginate
      pageCount={pageCount}
      pageRangeDisplayed={pageRangeDisplayed}
      marginPagesDisplayed={marginPagesDisplayed}
      onPageChange={onPageChange}
      activeLinkClassName={activeLinkClassName}
      containerClassName={containerClassName}
      nextLinkClassName="icon icon--right"
      previousLinkClassName="icon icon--left"
      nextLabel=""
      previousLabel=""
    />
  );
};

export default Pagination;
