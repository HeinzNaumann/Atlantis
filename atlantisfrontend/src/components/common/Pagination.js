
export const Pagination = ({ pages, currentPage, onPageChange, getAds}) => {
  const pagesModificado = Math.ceil(pages);
  return [...Array(pagesModificado).keys()]
    .map((page) => page + 1)
    .map((page) => (
      <li className="page-item">
      <button
        className="page-link"
        key={page}
        style={{ color: currentPage === page ? "blue" : "inherit" }}
          onClick={() => { onPageChange(page);getAds() } }
      >
        {page}
      </button>
      </li>
    ));
};


export default Pagination;