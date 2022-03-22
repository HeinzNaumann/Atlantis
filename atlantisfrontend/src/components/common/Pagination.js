
export const Pagination = ({ pages, currentPage, onPageChange }) => {
  const pagesModificado = Math.ceil(pages);
  return [...Array(pagesModificado).keys()]
    .map((page) => page + 1)
    .map((page) => (
      <button
        key={page}
        style={{ color: currentPage === page ? "blue" : "inherit" }}
        onClick={() => onPageChange(page)}
      >
        {page}
      </button>
    ));
};


export default Pagination;