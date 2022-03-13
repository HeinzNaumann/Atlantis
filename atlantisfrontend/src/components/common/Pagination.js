
export const Pagination = ({ pages, currentPage, onPageChange }) => {
  return [...Array(pages).keys()]
    .map((page) => page + 1)
    .map((page) => (
      <button
        key={page}
        style={{ color: currentPage === page ? "teal" : "inherit" }}
        onClick={() => onPageChange(page)}
      >
        {page}
      </button>
    ));;
};


export default Pagination;