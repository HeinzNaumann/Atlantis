
export const Pagination = ({ pages, currentPage, onPageChange }) => {
  const pagesModificado = Math.ceil(pages);
  return [...Array(pagesModificado).keys()]
    .map((page) => page + 1)
    .map((page) => (
      <li className="page-item">
      <button
        className="page-link"
        key={page}
        style={{ color: currentPage === page ? "blue" : "inherit" }}
        onClick={() => onPageChange(page)}
      >
        {page}
      </button>
<<<<<<< HEAD
      </li>
=======
>>>>>>> ChatNotificacion
    ));
};


export default Pagination;