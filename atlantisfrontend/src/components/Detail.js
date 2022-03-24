//import Layout from "../layout/Layout";
import "./detail.css";
import { detailAds, deleteAd } from "./service";
import { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import { Button } from "reactstrap";
import swal from "sweetalert";

import React from "react";
function Detail({ match, history }) {
  const advertId = match.params.id;
  //const history = useHistory();
  const [advert, setAdvert] = useState(advertId);

  const getAdvertById = async () => {
    try {
      const advertData = await detailAds(advertId);
      const detalle = advertData.result[0];

      return detalle;
    } catch (error) {
      console.error(error);
    }
  };

  const toDelete = () => {
    const adId = match.params.id;
    swal({
      title: "Do you want to delete?",
      text: adId,
      icon: "warning",
      buttons: ["no", "yes"],
    }).then((respuesta) => {
      if (respuesta) {
        swal({
          text: "the advert has been successfully deleted",
          icon: "success",
        });
      }
      try {
        deleteAd(adId);
        history.push("/adverts");
      } catch (error) {
        console.log(error);
      }
    });
  };

  useEffect(() => {
    getAdvertById().then((ad) => setAdvert(ad));
  }, []);

  return (
    <>
      <Layout>
        {advert ? (
          <div className="container">
            <div className="row">
              <div className="content">
                <div className="item">
                  <div className="inside-left">
                    <img
                      src={`${process.env.REACT_APP_API_ATLANTIS_URL}/images/anuncios/${advert.imagen}`}
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
                    <Button color="danger" onClick={toDelete}>
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>sin anuncios</p>
        )}
      </Layout>
    </>
  );
}

export default Detail;
