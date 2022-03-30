import { detailAds } from "./service";
import { useEffect, useState } from "react";
import React from "react";
import * as Icon from "react-feather";
import ShareAdvert from "./ShareAdvert";
import Layout from "../layout/Layout";

function Detail({ match, history }) {
  const advertId = match.params.id;
  const [advert, setAdvert] = useState(advertId);

  const token = localStorage.getItem("token");
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

  return (
    <>
      <Layout>
        {advert ? (
          <div className="single-pdt-page bg-grey py-5">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="single-pdt-wrapper">
                  
                    <div className="row">
                      <div className="col-lg-7 col-xl-7 mt-2 mt-md-5 mt-lg-0">
                        <div className="pdt-item-showcase bg-white">
                          <div className="single-pdt-slider p-4">
                            <div className="slide">
                              <img
                                src={`${process.env.REACT_APP_API_ATLANTIS_URL}/images/anuncios/${advert.imagen}`}
                                alt={advert.imagen}
                                className="img-fluid "
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-xl-5">
                        <aside className="sidebar sidebar-user mt-4 mt-lg-0">
                          <div className="pdt-info-card bg-white p-4">
                             <h1 className=" text-primary text-grey d-inline-block align-middle">
                                
                                {advert.nombre}
                            </h1>
                             <hr className="my-4" />
                            <div className="price-blk">
                              <div className="d-block d-lg-flex justify-content-between align-items-center mt-4">
                                <h3 className="text-secondary font-bold text-theme">
                                  Price  {advert.precio}€
                                </h3>
                              </div>
                            </div>
                            <hr className="my-4" />
                              <div className="d-flex mw-50 flex-wrap justify-content-between align-items-center mt-4">
                                 <p className=" overflow-auto d-flex flex-wrap mw-50">
                              {advert.descripcion}
                              </p>
                              </div>
                            <hr className="my-4" />
                            <div className="add-to-cart-blk">
                              <div className="row">
                                <div className="col-md-12">
                                  <h5 className="font-bold text-theme mr-5">
                                    Chat to owner
                                  </h5>
                                  {token && (
                                    <button
                                      className="feather-Message"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        history.push(`/chat/${advert._id}`);
                                      }}
                                    >
                                      <Icon.MessageSquare className=" size-xs" />
                                    </button>
                                  )}
                                  <div className="row">
                                    <div className="col-md-12">
                                      <h5 className="font-bold text-theme mt-2">
                                        Share to peers
                                      </h5>
                                      <a>
                                        <ShareAdvert
                                          Url={`${process.env.REACT_APP_FRONT_ATLANTIS_URL}/adverts/${advertId}`}
                                        />
                                      </a>
                                    </div>
                                    
                                  </div>
                                </div>
                              </div>
                              
                              <div className="d-block d-lg-flex justify-content-between mt-4"></div>
                              <hr className="my-4" />
                              <h5 className="text-grey d-inline-block align-middle">
                                <Icon.User />
                                {advert.usuario_nombre}
                              </h5>
                            </div>
                          </div>
                     

                          <div className="share-info-card bg-white mt-4 p-4">
                            <h5 className="text-grey d-inline-block align-middle">
                              TAGS
                            </h5>
                            <hr className="my-4" />
                            <div className="row">
                              <div className="col-12">
                                <div className="alert alert-custom-color alert-dismissible py-1 px-2 d-inline-block float-left mr-3">
                                  <span className="font-xs mr-3">
                                    {advert.tags}
                                  </span>
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
