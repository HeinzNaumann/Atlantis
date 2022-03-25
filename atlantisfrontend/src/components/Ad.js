import "../css/Ad.css";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { favAds } from "./service";
import * as Icon from 'react-feather';
import { useEffect } from "react";

export const Ad = (ad) => {

    const history = useHistory();
    const token = localStorage.getItem("token")

  return (
    <div className=" col-md-4" onClick={()=> history.push(`/adverts/${ad._id}`)} key={ad._id}>
      <div className="pdt-item-blk mb-4">
        <div className="pdt-img-blk">
          {ad.imagen && (
            <img
              src={`${process.env.REACT_APP_API_ATLANTIS_URL}/images/anuncios/${ad.imagen}`}
              alt={ad.nombre}
              className="img-fluid product-item-image img-style"
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
                  {token ?
                    <button onClick={(e) => { e.stopPropagation(); favAds(ad._id) }} className="botones-fav">
                    <Icon.Heart className="feather-heart size-xs"/> 
                   
                    </button>
                    : []
                     }
                  {/* <button onClick={() => favAds(ad._id)} className="botones-fav">
                    <Icon.Gift className=" feather-heart size-xs"/>
                  </button>
                  <button onClick={() => favAds(ad._id)} className="botones-fav">
                    <Icon.Heart className=" feather-heart size-xs"/>
                  </button> */}
                </li>
              </ul>
            </div>
          </div>
          <div className="content-top-blk pt-3">
            <div className="d-flex justify-content-between align-items-center">
              <p className="text-warning font-bold"> {ad.venta}</p>
            </div>
            <h5 className="text-theme font-amt font-bold">{ad.precio} €</h5>

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
    </div>
  );
};

export default Ad;
