import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';
const Pagination = () => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(e) => console.log(e)}
      pageRangeDisplayed={10}
      pageCount={1}
      renderOnZeroPageCount={null}
    />
  );
};
export default Pagination;
