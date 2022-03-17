//import Layout from "../layout/Layout";
import "./detail.css";
import { detailAds } from "./service";
import { useEffect, useState } from "react";
//import { DeleteButton } from "../common/DeleteButton";

import React from "react";
function Detail({ match }) {
  const advertId = match.params.id;

  //const history = useHistory();
  const [advert, setAdvert] = useState(advertId);

  const getAdvertById = async () => {
    try {
      const advertData = await detailAds(advertId);
      const detalle = advertData.result[0];
      console.log(detalle);

      return detalle;
    } catch (error) {
      console.log(error, "aqui");
    }
  };

  useEffect(() => {
    getAdvertById().then((ad) => setAdvert(ad));
  }, []);

  console.log(advert);

  return (
    <>
      {advert ? (
        <div className="container">
          <div className="row">
            <div className="content">
              <div className="item">
                <div className="inside-left">
                  <img
                    src={`${process.env.REACT_APP_API_BASE_URL}/images/anuncios/${advert.imagen}`}
                    alt={advert.imagen}
                    className="img-fluid "
                  />
                </div>
                <div className="inside-right">
                  <h1>{advert.nombre}</h1>
                  <h1>{advert.precio}</h1>
                  <h5>{advert.venta ? "Sell" : "Buy"}</h5>

                  <h4>{advert.descripcion}</h4>
                  <h5>{advert.usuario}</h5>
                  <h5>{advert.tags}</h5>

                  <h5>
                    {advert.reservado}
                    {advert.vendido}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>sin anuncios</p>
      )}
    </>
  );
}

export default Detail;
