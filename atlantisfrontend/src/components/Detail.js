
import { detailAds } from "./service";
import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

//compartir en rrss
import ShareAdvert from "./ShareAdvert";
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

  const toDelete = () => {
    const name = advert.nombre;
    const adId = match.params.id;

    swal({
      title: "Do you want to delete",
      text: name + "?",
      icon: "warning",
      buttons: ["no", "yes"],
    }).then((respuesta) => {
      if (respuesta) {
        swal({
          text: name + " has been successfully deleted",
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
                              class="feather feather-star rating fill"
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
                              class="feather feather-star rating fill"
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
                              class="feather feather-star rating fill"
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
                              class="feather feather-star rating fill"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
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
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="feather feather-users"
                                  >
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                  </svg>
                                  Real time{" "}
                                  <span class="bg-black py-1 px-2 text-white font-bold">
                                    17
                                  </span>{" "}
                                  Visitor Right now
                                </p>
                                <p class="d-inline-block mt-4 mt-lg-0 text-grey bg-green btn-sm radius-0 text-white">
                                  Many in Stock
                                </p>
                              </div>
                              <div class="d-block d-lg-flex justify-content-between align-items-center mt-4">
                                <h2 class="font-bold text-theme">
                                  Price {advert.precio}€
                                </h2>
                                <p class="mt-4 mt-lg-0 text-red font-xs d-inline-block font-bold align-middle">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="feather feather-trending-up animate-blink mr-2"
                                  >
                                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                                    <polyline points="17 6 23 6 23 12"></polyline>
                                  </svg>
                                  13 Sold in last 3 hours
                                </p>
                              </div>
                              <hr class="my-4" />
                              <ul class="font-bold list-inline text-theme">
                                <li class="list-inline-item">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="feather feather-bar-chart"
                                  >
                                    <line
                                      x1="12"
                                      y1="20"
                                      x2="12"
                                      y2="10"
                                    ></line>
                                    <line x1="18" y1="20" x2="18" y2="4"></line>
                                    <line x1="6" y1="20" x2="6" y2="16"></line>
                                  </svg>
                                  <p class="d-inline-block align-middle">
                                    1400 Sold
                                  </p>
                                </li>
                                <li class="list-inline-item">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="feather feather-truck"
                                  >
                                    <rect
                                      x="1"
                                      y="3"
                                      width="15"
                                      height="13"
                                    ></rect>
                                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                                    <circle cx="5.5" cy="18.5" r="2.5"></circle>
                                    <circle
                                      cx="18.5"
                                      cy="18.5"
                                      r="2.5"
                                    ></circle>
                                  </svg>
                                  <p class="d-inline-block align-middle">
                                    Free Shipping
                                  </p>
                                </li>
                                <li class="list-inline-item mt-2 mt-lg-0">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="feather feather-smile"
                                  >
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                                    <line x1="9" y1="9" x2="9.01" y2="9"></line>
                                    <line
                                      x1="15"
                                      y1="9"
                                      x2="15.01"
                                      y2="9"
                                    ></line>
                                  </svg>
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
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="feather feather-eye"
                                  >
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                  </svg>
                                  Add to Favorites
                                </a>
                                <a
                                  href="javascript:;"
                                  class="d-block mt-4 mt-lg-0 text-grey"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="feather feather-archive"
                                  >
                                    <polyline points="21 8 21 21 3 21 3 8"></polyline>
                                    <rect
                                      x="1"
                                      y="3"
                                      width="22"
                                      height="5"
                                    ></rect>
                                    <line
                                      x1="10"
                                      y1="12"
                                      x2="14"
                                      y2="12"
                                    ></line>
                                  </svg>
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
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-mail"
                              >
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                              </svg>
                              <h5 class="text-grey d-inline-block align-middle">
                                About the Seller
                              </h5>
                            </div>
                            <hr class="my-4" />
                            <div class="media">
                              <img
                                src="/assets/img/atlantis.png"
                                alt="foto usuario"
                                class="mr-4 radius-1 border xs-width-50"
                              />
                              <div class="media-body">
                                <h4>
                                  {advert.usuario_nombre}
                                  <span
                                    data-feather="user-check"
                                    data-toggle="tooltip"
                                    title="Top Rated Seller"
                                    class="ml-2 text-green"
                                  ></span>
                                </h4>
                                <a class="d-inline-block my-3">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="feather feather-phone"
                                  >
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                  </svg>
                                  <span class="text-grey d-inline-block align-middle">
                                    (850) 386-7896
                                  </span>
                                </a>
                                <p class="text-grey">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="feather feather-calendar"
                                  >
                                    <rect
                                      x="3"
                                      y="4"
                                      width="18"
                                      height="18"
                                      rx="2"
                                      ry="2"
                                    ></rect>
                                    <line x1="16" y1="2" x2="16" y2="6"></line>
                                    <line x1="8" y1="2" x2="8" y2="6"></line>
                                    <line x1="3" y1="10" x2="21" y2="10"></line>
                                  </svg>
                                  <span class="text-grey d-inline-block align-middle">
                                    Member since :01/03/2022
                                  </span>
                                </p>
                                <div class="rating-blk mt-3">
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
                                    class="feather feather-star rating fill"
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
                                    class="feather feather-star rating fill"
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
                                    class="feather feather-star rating fill"
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
                                    class="feather feather-star rating fill"
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
                                    class="feather feather-star rating fill"
                                  >
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                  </svg>
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
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-help-circle"
                              >
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                <line x1="12" y1="17" x2="12.01" y2="17"></line>
                              </svg>
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
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="feather feather-mail"
                                  >
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                  </svg>
                                  Send it now
                                </a>
                              </form>
                            </div>
                          </div>
                          <div class="other-info-card bg-white mt-4 p-4">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="feather feather-cpu"
                            >
                              <rect
                                x="4"
                                y="4"
                                width="16"
                                height="16"
                                rx="2"
                                ry="2"
                              ></rect>
                              <rect x="9" y="9" width="6" height="6"></rect>
                              <line x1="9" y1="1" x2="9" y2="4"></line>
                              <line x1="15" y1="1" x2="15" y2="4"></line>
                              <line x1="9" y1="20" x2="9" y2="23"></line>
                              <line x1="15" y1="20" x2="15" y2="23"></line>
                              <line x1="20" y1="9" x2="23" y2="9"></line>
                              <line x1="20" y1="14" x2="23" y2="14"></line>
                              <line x1="1" y1="9" x2="4" y2="9"></line>
                              <line x1="1" y1="14" x2="4" y2="14"></line>
                            </svg>
                            <h5 class="text-grey d-inline-block align-middle">
                              Product Code
                            </h5>
                            <hr class="my-4" />
                            <div class="media">
                              <img
                                src="assets/img/qr.jpg"
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
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="feather feather-share-2"
                            >
                              <circle cx="18" cy="5" r="3"></circle>
                              <circle cx="6" cy="12" r="3"></circle>
                              <circle cx="18" cy="19" r="3"></circle>
                              <line
                                x1="8.59"
                                y1="13.51"
                                x2="15.42"
                                y2="17.49"
                              ></line>
                              <line
                                x1="15.41"
                                y1="6.51"
                                x2="8.59"
                                y2="10.49"
                              ></line>
                            </svg>
                            <div>
                              <ShareAdvert
                                Url={`${process.env.REACT_APP_FRONT_ATLANTIS_URL}/adverts/${advertId}`}
                              />
                            </div>
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
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="feather feather-tag"
                            >
                              <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                              <line x1="7" y1="7" x2="7.01" y2="7"></line>
                            </svg>
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
