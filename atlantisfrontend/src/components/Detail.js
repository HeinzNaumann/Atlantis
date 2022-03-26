//import Layout from "../layout/Layout";
import "./detail.css";
import { detailAds, deleteAd } from "./service";
import { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import { Button } from "reactstrap";
import swal from "sweetalert";
//import * as Icon from "react-feather";

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
          <div class="single-pdt-page bg-grey py-5">
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <div class="single-pdt-wrapper">
                    <div class="pdt-title-info mb-4 bg-white">
                      <div class="row d-flex justify-content-center text-lg-center">
                        <div class="col-lg-4">
                          <div class="pdt-name-blk py-4 px-4 px-lg-0">
                            <span
                              data-feather="box"
                              class="text-theme mr-3"
                            ></span>
                            <h5 class="text-grey d-inline-block align-middle">
                              {advert.nombre}
                            </h5>
                          </div>
                        </div>
                        <div class="col-lg-4">
                          <div class="pdt-rate-blk rating-blk py-4 px-4 px-lg-0">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="40"
                              height="40"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="yellow"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="feather feather-star"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                            </svg>

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="40"
                              height="40"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="yellow"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="feather feather-star"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="40"
                              height="40"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="yellow"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="feather feather-star"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="40"
                              height="40"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="yellow"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="feather feather-star"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="40"
                              height="40"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="yellow"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="feather feather-star"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                            </svg>

                            <span data-feather="star" class="rating"></span>
                            <h5 class="d-inline-block text-grey align-middle">
                              (23) Ratings
                            </h5>
                          </div>
                        </div>
                        <div class="col-lg-4">
                          <div class="pdt-name-blk py-4 px-4 px-lg-0">
                            <span
                              data-feather="user-check"
                              class="text-theme mr-3"
                            ></span>
                            <h5 class="d-inline-block text-grey align-middle">
                              {advert.descripcion}
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-7 col-xl-7 mt-2 mt-md-5 mt-lg-0">
                        <div class="pdt-item-showcase bg-white">
                          <div class="single-pdt-slider p-4">
                            <div class="slide">
                              <img
                                src={`${process.env.REACT_APP_API_ATLANTIS_URL}/images/anuncios/${advert.imagen}`}
                                alt={advert.imagen}
                                className="img-fluid "
                              />
                              <div class="slide">
                                <img
                                  src={`${process.env.REACT_APP_API_ATLANTIS_URL}/images/anuncios/${advert.imagen}`}
                                  alt={advert.imagen}
                                  className="img-fluid "
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-5 col-xl-5">
                        <aside class="sidebar sidebar-user mt-4 mt-lg-0">
                          <div class="pdt-info-card bg-white p-4">
                            <div class="price-blk">
                              <div class="d-block d-lg-flex justify-content-between">
                                <p class="text-grey font-bold">
                                  <span
                                    data-feather="users"
                                    class="mr-2"
                                  ></span>
                                  Real time{" "}
                                  <span class="bg-black py-1 px-2 text-white font-bold">
                                    17
                                  </span>{" "}
                                  Visitor Right now
                                </p>
                                <p class="d-inline-block mt-4 mt-lg-0 text-grey bg-green btn-sm radius-0 text-white">
                                  {advert.reservado}
                                </p>
                              </div>
                              <div class="d-block d-lg-flex justify-content-between align-items-center mt-4">
                                <h2 class="font-bold text-theme">
                                  {advert.precio}€
                                </h2>
                                <p class="mt-4 mt-lg-0 text-red font-xs d-inline-block font-bold align-middle">
                                  <span
                                    data-feather="trending-up"
                                    class="animate-blink mr-2"
                                  ></span>
                                  {advert.vendido}
                                </p>
                              </div>
                              <hr class="my-4" />
                              <ul class="font-bold list-inline text-theme">
                                <li class="list-inline-item">
                                  <span
                                    data-feather="bar-chart"
                                    class="mr-2"
                                  ></span>
                                  <p class="d-inline-block align-middle">
                                    1400 Sold
                                  </p>
                                </li>
                                <li class="list-inline-item">
                                  <span
                                    data-feather="truck"
                                    class="mr-2"
                                  ></span>
                                  <p class="d-inline-block align-middle">
                                    Free Shipping
                                  </p>
                                </li>
                                <li class="list-inline-item mt-2 mt-lg-0">
                                  <span
                                    data-feather="smile"
                                    class="mr-2"
                                  ></span>
                                  <p class="d-inline-block align-middle">
                                    1310 Happy Buyers
                                  </p>
                                </li>
                              </ul>
                            </div>
                            <hr class="my-4" />
                            <div class="add-to-cart-blk">
                              <div class="row">
                                <div class="col-md-12">
                                  <a
                                    href="javascript:;"
                                    class="btn btn-style btn-lg d-block"
                                  >
                                    <span
                                      data-feather="shopping-cart"
                                      class="mr-2"
                                    ></span>
                                    <Button color="danger" onClick={toDelete}>
                                      Delete
                                    </Button>
                                  </a>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-md-12">
                                  <a
                                    href="javascript:;"
                                    class="btn btn-style-success btn-lg mt-4 d-block"
                                  >
                                    <span
                                      data-feather="shopping-cart"
                                      class="mr-2"
                                    ></span>
                                    CHAT WITH OWNER
                                  </a>
                                </div>
                              </div>
                              <div class="d-block d-lg-flex justify-content-between mt-4">
                                <a
                                  href="javascript:;"
                                  class="d-block text-grey"
                                >
                                  <span
                                    data-feather="eye"
                                    class="bg-grey text-theme p-2 size-lg rounded-circle mr-3"
                                  ></span>
                                  Add to Favorites
                                </a>
                                <a
                                  href="javascript:;"
                                  class="d-block mt-4 mt-lg-0 text-grey"
                                >
                                  <span
                                    data-feather="archive"
                                    class="bg-grey text-theme p-2 size-lg rounded-circle mr-3"
                                  ></span>
                                  Add to collections
                                </a>
                              </div>
                              <hr class="my-4" />
                              <div class="payment-method-blk">
                                <img
                                  class="img-fluid"
                                  src="assets/img/secure-payment-badge.png"
                                  alt="secure payment method"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="seller-info-card bg-white mt-4 p-4">
                            <div class="">
                              <span
                                data-feather="mail"
                                class="mr-3 text-theme"
                              ></span>
                              <h5 class="text-grey d-inline-block align-middle">
                                About the Seller
                              </h5>
                            </div>
                            <hr class="my-4" />
                            <div class="media">
                              <img
                                src="/assets/img/atlantis.PNG"
                                alt="atlantis"
                                class="mr-4 radius-1 border xs-width-50"
                              />
                              <div class="media-body">
                                <h4>
                                  {advert.usuario}
                                  <span
                                    data-feather="user-check"
                                    data-toggle="tooltip"
                                    title="Top Rated Seller"
                                    class="ml-2 text-green"
                                  ></span>
                                </h4>
                                <a class="d-inline-block my-3">
                                  <span
                                    data-feather="phone-call"
                                    class="text-theme mr-2"
                                  ></span>
                                  <span class="text-grey d-inline-block align-middle">
                                    (850) 386-7896
                                  </span>
                                </a>
                                <p class="text-grey">
                                  <span
                                    data-feather="calendar"
                                    class="text-theme mr-2"
                                  ></span>
                                  <span class="text-grey d-inline-block align-middle">
                                    Member since :01/03/2022
                                  </span>
                                </p>
                                <div class="rating-blk mt-3">
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
                                  <a
                                    href="javascript:;"
                                    class="font-bold text-grey"
                                  >
                                    ( 23 )
                                  </a>
                                  <h5 class="text-green mt-2">
                                    99.4 % Positive feedback
                                  </h5>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="seller-contact-card bg-white mt-4 p-4">
                            <div class="">
                              <span
                                data-feather="help-circle"
                                class="mr-3 text-theme"
                              ></span>
                              <h5 class="text-grey d-inline-block align-middle">
                                Product inquiry
                              </h5>
                            </div>
                            <hr class="my-4" />
                            <div class="seller-contact-info-blk">
                              <form>
                                <div class="form-group mb-4">
                                  <input
                                    type="email"
                                    class="form-control bg-input"
                                    id="email"
                                    placeholder="Enter your email address..."
                                  />
                                </div>
                                <div class="form-group mb-4">
                                  <textarea
                                    class="form-control bg-input"
                                    rows="5"
                                    id="message"
                                    placeholder="Your Message"
                                  ></textarea>
                                </div>
                                <a
                                  href="javascript:;"
                                  class="btn btn-style btn-lg d-block"
                                >
                                  <span data-feather="mail" class="mr-2"></span>
                                  Send it now
                                </a>
                              </form>
                            </div>
                          </div>
                          <div class="other-info-card bg-white mt-4 p-4">
                            <span
                              data-feather="cpu"
                              class="mr-3 text-theme"
                            ></span>
                            <h5 class="text-grey d-inline-block align-middle">
                              Product Code
                            </h5>
                            <hr class="my-4" />
                            <div class="media">
                              <img
                                src="assets/img/qr-code.png"
                                alt="Qr Code"
                                class="mr-4 radius-1 border xs-width-50"
                              />
                              <div class="media-body">
                                <p class="mb-3">
                                  Scan this code with your Android Daftcoin
                                  application to purchase this item instantly.*
                                </p>
                                <p>
                                  Seller and Buyer will get their both accounts
                                  (stock and balance) automatically updated.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="share-info-card bg-white mt-4 p-4">
                            <span
                              data-feather="share-2"
                              class="text-theme mr-3"
                            ></span>
                            <h5 class="text-grey d-inline-block align-middle">
                              Share this product
                            </h5>
                            <hr class="my-4" />
                            <ul class="list-inline social-share-list">
                              <li class="list-inline-item">
                                <a
                                  href="JavaScript:;"
                                  class="position-relative custom-square d-block text-grey"
                                >
                                  <i class="fa fa-facebook valign"></i>
                                </a>
                              </li>
                              <li class="list-inline-item">
                                <a
                                  href="JavaScript:;"
                                  class="position-relative custom-square d-block text-grey"
                                >
                                  <i class="fa fa-twitter valign"></i>
                                </a>
                              </li>
                              <li class="list-inline-item">
                                <a
                                  href="JavaScript:;"
                                  class="position-relative custom-square d-block text-grey"
                                >
                                  <i class="fa fa-google valign"></i>
                                </a>
                              </li>
                              <li class="list-inline-item">
                                <a
                                  href="JavaScript:;"
                                  class="position-relative custom-square d-block text-grey"
                                >
                                  <i class="fa fa-linkedin valign"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div class="share-info-card bg-white mt-4 p-4">
                            <span
                              data-feather="tag"
                              class="mr-3 text-theme"
                            ></span>
                            <h5 class="text-grey d-inline-block align-middle">
                              TAGS
                            </h5>
                            <hr class="my-4" />
                            <div class="row">
                              <div class="col-12">
                                <div class="alert alert-custom-color alert-dismissible py-1 px-2 d-inline-block float-left mr-3">
                                  <span class="font-xs mr-3">
                                    {advert.tags}
                                  </span>
                                  <button
                                    type="button"
                                    class="close p-1"
                                    data-dismiss="alert"
                                  >
                                    <span
                                      data-feather="x"
                                      class="size-xs"
                                    ></span>
                                  </button>
                                </div>
                                <div class="alert alert-custom-color alert-dismissible py-1 px-2 d-inline-block float-left mr-3">
                                  <span class="font-xs mr-3">
                                    {advert.tags}
                                  </span>
                                  <button
                                    type="button"
                                    class="close p-1"
                                    data-dismiss="alert"
                                  >
                                    <span
                                      data-feather="x"
                                      class="size-xs"
                                    ></span>
                                  </button>
                                </div>
                                <div class="alert mb-0 alert-custom-color alert-dismissible py-1 px-2 d-inline-block float-left">
                                  <span class="font-xs mr-3">
                                    {advert.tags}
                                  </span>
                                  <button
                                    type="button"
                                    class="close p-1"
                                    data-dismiss="alert"
                                  >
                                    <span
                                      data-feather="x"
                                      class="size-xs"
                                    ></span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </aside>
                      </div>
                    </div>
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
