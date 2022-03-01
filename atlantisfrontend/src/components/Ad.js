export const Ad = (ad) => {
  return (
    <div className="col-md-6 col-lg-3" key={ad.id}>
      <div className="pdt-item-blk mb-4">
        <div className="pdt-img-blk">
          <img
            src="assets/img/pdt-iphone-img-1.jpg"
            alt="Winter Coat with Hat"
            className="img-fluid product-item-image"
          ></img>
        </div>
        <div className="pdt-content-blk pt-0 pl-3 pr-3 pb-3">
          <div className="position-relative">
            <div className="buy-blk position-absolute r-0">
              <ul className="pdt-item list-inline">
                <li className="list-inline-item align-middle">
                  <a href="javascript" className="text-grey">
                    <span
                      className="size-xs"
                      data-feather="shopping-cart"
                    ></span>
                  </a>
                </li>
                <li className="list-inline-item align-middle">
                  <a href="javascript" className="text-grey">
                    <span className="size-xs" data-feather="heart"></span>
                  </a>
                </li>
                <li className="list-inline-item align-middle">
                  <a className="text-grey" href="javascript">
                    <span className="size-xs" data-feather="eye"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="content-top-blk pt-3">
            <div className="d-flex justify-content-between align-items-center">
              <p className="text-warning font-bold">{ad.description}</p>
            </div>
            <h5 className="text-theme font-amt font-bold">{ad.precio}</h5>
            <h4>
              <a href="single-product.html" className="display-block text-link">
                {ad.nombre}
              </a>
            </h4>
          </div>
          <div className="content-btm-blk">
            <div className="media py-3">
              <div className="media-body">
                <h6 className="mb-0">{ad.usuario}</h6>
              </div>
            </div>
            <p className="text-green font-bold"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ad;
