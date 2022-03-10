//import Layout from "../layout/Layout";
import "./detail.css";
import { detailAds } from "./service";
import { useEffect, useState } from "react";
//import { DeleteButton } from "../common/DeleteButton";

import React from "react";
function Detail({ match }) {
  const advertId = match.params.id;

  //const history = useHistory();
  const [advert, setAdvert] = useState();

  const getAdvertById = async () => {
    try {
      const advertData = await detailAds(advertId);

      return advertData;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAdvertById().then((advert) => setAdvert(advert));
  }, []);

  //const { result } = advert;

  console.log(advert.result);
  // return <Layout />;
  return (
    <>
      {advert
        ? advert.result?.map((ads) => (
            <div className="home-wrapper">
              <section className="tab-blk-style bg-grey py-6">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <div className="tab-list-contents">
                        <div className="tab-content">
                          <div
                            role="tabpanel"
                            className="tab-pane fade show active"
                            id="geo"
                          >
                            <div className="row">
                              <div className="col-md-6 col-lg-3">
                                <div className="pdt-item-blk mb-4">
                                  <div className="pdt-img-blk">
                                    <h1>{advert.nombre}</h1>
                                    <img
                                      src="./assets/img/logo-atlantis-small.png"
                                      alt="Winter Coat with Hat"
                                      className="img-fluid product-item-image"
                                    />
                                  </div>
                                  <div className="pdt-content-blk pt-0 pl-3 pr-3 pb-3">
                                    <div className="position-relative">
                                      <div className="buy-blk position-absolute r-0">
                                        <ul className="pdt-item list-inline">
                                          <li className="list-inline-item align-middle"></li>
                                          <li className="list-inline-item align-middle"></li>
                                          <li className="list-inline-item align-middle"></li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div className="content-top-blk pt-3">
                                      <div className="d-flex justify-content-between align-items-center">
                                        <p className="text-green font-bold">
                                          In Stock
                                        </p>
                                      </div>
                                      <h5 className="text-theme font-amt font-bold">
                                        {advert.precio}
                                        {advert.venta ? "Sell" : "Buy"}
                                      </h5>
                                      <h4>
                                        <a
                                          href="single-product.html"
                                          className="display-block text-link"
                                        >
                                          {advert.descripcion}
                                        </a>
                                      </h4>
                                    </div>
                                    <div className="content-btm-blk">
                                      <div className="media py-3">
                                        <img
                                          src={advert.imagen}
                                          className="align-self-center mr-4"
                                          alt="Product Seller"
                                        />
                                        <div className="media-body">
                                          <h6 className="mb-0">
                                            {advert.usuario}
                                          </h6>
                                          <div className="rating-blk">
                                            <span
                                              data-feather="star"
                                              className="rating fill"
                                            ></span>
                                            <span
                                              data-feather="star"
                                              className="rating fill"
                                            ></span>
                                            <span
                                              data-feather="star"
                                              className="rating fill"
                                            ></span>
                                            <span
                                              data-feather="star"
                                              className="rating fill"
                                            ></span>
                                            <span
                                              data-feather="star"
                                              className="rating"
                                            ></span>

                                            {advert.tags}
                                          </div>
                                        </div>
                                      </div>
                                      <p className="text-green font-bold">
                                        {advert.reservado}
                                        {advert.vendido}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          ))
        : []}{" "}
      : (<p>sin anuncios</p>)
    </>
  );
}

export default Detail;
