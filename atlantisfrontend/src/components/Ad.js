import "../css/Ad.css";
//import { Link } from "react-router-dom";
export const Ad = (ad) => {
  return (
   
    <div className=" col-md-4" key={ad._id}>
       <a href={`/adverts/${ad._id}`}>
        <div className="pdt-item-blk mb-4">
          <div className="pdt-img-blk">
            {ad.imagen && (
              <img
                src={`${process.env.REACT_APP_API_ATLANTIS_URL}/images/anuncios/${ad.imagen}`}
                alt={ad.nombre}
                className="img-fluid product-item-image"
                width="900px"
                height="900px"
                border-radius="30px"
              ></img>
            )}
          </div>
          <div className="pdt-content-blk pt-0 px-3">
            <div className="position-relative">
              <div className="buy-blk position-absolute r-0">
                <ul className="pdt-item list-inline">
                  <li className="list-inline-item align-middle">
                    <a href="" className="text-grey">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-heart size-xs"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="content-top-blk pt-3">
              <div className="d-flex justify-content-between align-items-center">
                <p className="text-warning font-bold">
                  {" "}
                  {ad.venta ? "buy" : "sell"}
                </p>
              </div>
              <h5 className="text-theme font-amt font-bold">{ad.precio}</h5>
              <h4>
                <a href="" className="display-block text-link">
                  {ad.nombre}
                </a>
              </h4>
              <h6 className="d-flex justify-content-between align-items-center">
                {ad.usuario_nombre}
              </h6>
              <div className="content-btm-blk">
                <div className="media py-3">
                  <div className="media-body">
                    <h6 className="mb-0">{ad.tags}</h6>
                  </div>
                </div>
                <p className="ad-tags"></p>
                <p className="text-green font-bold">{ad.descripcion}</p>
              </div>
            </div>
          </div>
        </div>
        </a>
      </div>
    
  );
};

export default Ad;
