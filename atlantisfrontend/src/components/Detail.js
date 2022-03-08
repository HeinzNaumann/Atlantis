//import Layout from "../layout/Layout";
import "./detail.css";
import { detailAds } from "./service";
import { useEffect, useState } from "react";
//import { DeleteButton } from "../common/DeleteButton";
import { useParams, useHistory } from "react-router-dom";
import React from "react";
function Detail({ match }) {
  const { advertId } = match.params.id;
  const history = useHistory();
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
    setAdvert(getAdvertById);
  }, []);

  // return <Layout />;
  return (
    <>
      {advert ? (
        <div class="home-wrapper">
          <section class="tab-blk-style bg-grey py-6">
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <div class="tab-list-contents">
                    <div class="tab-content">
                      <div
                        role="tabpanel"
                        class="tab-pane fade show active"
                        id="geo"
                      >
                        <div class="row">
                          <div class="col-md-6 col-lg-3">
                            <div class="pdt-item-blk mb-4">
                              <div class="pdt-img-blk">
                                <h1>{advert.nombre}</h1>
                                <img
                                  src="./assets/img/logo-atlantis-small.png"
                                  alt="Winter Coat with Hat"
                                  class="img-fluid product-item-image"
                                />
                              </div>
                              <div class="pdt-content-blk pt-0 pl-3 pr-3 pb-3">
                                <div class="position-relative">
                                  <div class="buy-blk position-absolute r-0">
                                    <ul class="pdt-item list-inline">
                                      <li class="list-inline-item align-middle"></li>
                                      <li class="list-inline-item align-middle"></li>
                                      <li class="list-inline-item align-middle"></li>
                                    </ul>
                                  </div>
                                </div>
                                <div class="content-top-blk pt-3">
                                  <div class="d-flex justify-content-between align-items-center">
                                    <p class="text-green font-bold">In Stock</p>
                                  </div>
                                  <h5 class="text-theme font-amt font-bold">
                                    {advert.precio}
                                    {advert.venta ? "Sell" : "Buy"}
                                  </h5>
                                  <h4>
                                    <a
                                      href="single-product.html"
                                      class="display-block text-link"
                                    >
                                      {advert.descripcion}
                                    </a>
                                  </h4>
                                </div>
                                <div class="content-btm-blk">
                                  <div class="media py-3">
                                    <img
                                      src={advert.imagen}
                                      class="align-self-center mr-4"
                                      alt="Product Seller"
                                    />
                                    <div class="media-body">
                                      <h6 class="mb-0">{advert.usuario}</h6>
                                      <div class="rating-blk">
                                        <span
                                          data-feather="star"
                                          class="rating fill"
                                        ></span>
                                        <span
                                          data-feather="star"
                                          class="rating fill"
                                        ></span>
                                        <span
                                          data-feather="star"
                                          class="rating fill"
                                        ></span>
                                        <span
                                          data-feather="star"
                                          class="rating fill"
                                        ></span>
                                        <span
                                          data-feather="star"
                                          class="rating"
                                        ></span>

                                        {advert.tags}
                                      </div>
                                    </div>
                                  </div>
                                  <p class="text-green font-bold">
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
      ) : (
        <p>sin anuncios</p>
      )}
    </>
  );
}

export default Detail;
