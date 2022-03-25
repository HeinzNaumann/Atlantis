
import { detailAds } from "./service";
import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";


//import { DeleteButton } from "../common/DeleteButton";
import Button from "./common/button";
import Layout from "../layout/Layout";

function Detail({ match }) {
  const advertId = match.params.id;
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


  useEffect(() => {
    getAdvertById().then((ad) => setAdvert(ad));
    
  }, []);

  const setData = (data) => {
    let { _id, nombre, descripcion, precio, venta, tags } = data;
    localStorage.setItem("ID", _id);
    localStorage.setItem("Nombre", nombre);
    localStorage.setItem("descripcion", descripcion);
    localStorage.setItem("precio", precio);
    localStorage.setItem("venta", venta);
    localStorage.setItem("tags", tags);
  };


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
                    <h5>{advert.venta}</h5>

                    <h4>{advert.descripcion}</h4>
                    <h5>{advert.usuario}</h5>
                    <h5>{advert.tags}</h5>

                    <h5>
                      {advert.reservado}
                      {advert.vendido}
                    </h5>
                  </div>
                  <Link to = {"/update"}>
                    <Button onClick = {() => setData(advert)}>Edit</Button>
                  </Link>
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
