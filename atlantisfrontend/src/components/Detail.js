//import Layout from "../layout/Layout";
import "./detail.css";
function Detail() {
  // return <Layout />;
  return (
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
                            <h1>NUESTRO ANUNCIO</h1>
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
                                  <li class="list-inline-item align-middle">
                                    <a href="javascript:;" class="text-grey">
                                      <span
                                        class="size-xs"
                                        data-feather="shopping-cart"
                                      ></span>
                                    </a>
                                  </li>
                                  <li class="list-inline-item align-middle">
                                    <a href="javascript:;" class="text-grey">
                                      <span
                                        class="size-xs"
                                        data-feather="heart"
                                      ></span>
                                    </a>
                                  </li>
                                  <li class="list-inline-item align-middle">
                                    <a class="text-grey" href="javascript:;">
                                      <span
                                        class="size-xs"
                                        data-feather="eye"
                                      ></span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div class="content-top-blk pt-3">
                              <div class="d-flex justify-content-between align-items-center">
                                <p class="text-green font-bold">In Stock</p>
                              </div>
                              <h5 class="text-theme font-amt font-bold">
                                $500
                              </h5>
                              <h4>
                                <a
                                  href="single-product.html"
                                  class="display-block text-link"
                                >
                                  Sonic Headphone
                                </a>
                              </h4>
                            </div>
                            <div class="content-btm-blk">
                              <div class="media py-3">
                                <img
                                  src="assets/img/user-avatar-5.png"
                                  class="align-self-center mr-4"
                                  alt="Product Seller Image"
                                />
                                <div class="media-body">
                                  <h6 class="mb-0">Aana</h6>
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
                                    <a
                                      href="javascript:;"
                                      class="font-bold text-grey"
                                    >
                                      ( 23 )
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <p class="text-green font-bold">
                                99.4 % Positive feedback
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
  );
}

export default Detail;
