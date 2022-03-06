import "./errorPage.css";

function ErrorPage() {
  return (
    <div class="inner-wrapper">
      <header>
        <div class="top-header-section py-3 px-0 py-md-3 px-md-3">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-4 col-md-8 col-lg-8">
                <div class="media align-items-center d-inline-block mr-2 mr-md-4 mr-lg-5">
                  <a href="tel:8503867896" class="">
                    <span class="lnr lnr-phone-handset text-theme display-6"></span>
                    <span class="media-body d-none d-md-inline-block ml-2 text-white">
                      Phone: (555) 555-555
                    </span>
                  </a>
                </div>
                <div class="media align-items-center d-inline-block">
                  <span class="lnr lnr-envelope text-theme display-6"></span>
                  <span class="media-body d-none d-md-inline-block ml-2">
                    <a class="text-white" href="mailto:support@example.com">
                      {" "}
                      support@atlantis.com
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section class="page-wrapper py-10">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="blank-content-blk text-center">
                <h2 class="text-capitalize font-xl font-extra-bold">404</h2>
                <h4 class="my-4 my-md-5">
                  We are sorry, the page you have requested is not available
                </h4>
                <a
                  href="index.html"
                  class="btn btn-style px-5 py-3 text-white radius-5"
                >
                  <span class="lnr lnr-home mr-4 display-6"></span>Back to Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div class="top-footer py-5">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-md-3 text-left xs-text-center">
                <img
                  class="img img-fluid"
                  src="assets/img/logo-footer.png"
                  alt="Footer Logo"
                />
              </div>
              <div class="col-md-6 text-center">
                <ul class="my-4 my-md-0">
                  <li class="list-inline-item">
                    <img
                      class="img img-fluid"
                      src="assets/img/pay1.png"
                      alt="Payment Method"
                    />
                  </li>
                  <li class="list-inline-item">
                    <img
                      class="img img-fluid"
                      src="assets/img/pay2.png"
                      alt="Payment Method"
                    />
                  </li>
                  <li class="list-inline-item">
                    <img
                      class="img img-fluid"
                      src="assets/img/pay3.png"
                      alt="Payment Method"
                    />
                  </li>
                  <li class="list-inline-item">
                    <img
                      class="img img-fluid"
                      src="assets/img/pay4.png"
                      alt="Payment Method"
                    />
                  </li>
                  <li class="list-inline-item">
                    <img
                      class="img img-fluid mt-2 mt-sm-0"
                      src="assets/img/pay5.png"
                      alt="Payment Method"
                    />
                  </li>
                </ul>
              </div>
              <div class="col-md-3 text-right">
                <div class="social-widget">
                  <ul class="lh-0 xs-text-center">
                    <li class="list-inline-item">
                      <a class="d-inline-block" href="javascript:;">
                        <i class="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a class="d-inline-block" href="javascript:;">
                        <i class="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a class="d-inline-block" href="javascript:;">
                        <i class="fa fa-google-plus"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="middle-footer py-6">
          <div class="container">
            <div class="row">
              <div class="col-md-6 col-lg-4 mb-md-5 mb-lg-0">
                <div class="company-info-widget mb-4 mb-md-0">
                  <h5 class="text-theme">About</h5>
                  <p class="pt-4">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting.
                  </p>
                  <p class="pt-3 pb-0">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting.
                  </p>
                </div>
              </div>
              <div class="col-md-6 col-lg-3 mb-md-5 mb-lg-0">
                <div class="mb-4 mb-md-0">
                  <h5 class="text-theme">My Account</h5>
                  <ul class="pt-4 footer-list-style">
                    <li>
                      <a class="text-footer" href="user-profile.html">
                        <i class="lnr lnr-chevron-right mr-2"></i>Profile
                      </a>
                    </li>
                    <li>
                      <a class="text-footer" href="user-wallet.html">
                        <i class="lnr lnr-chevron-right mr-2"></i>Wallet
                      </a>
                    </li>
                    <li>
                      <a class="text-footer" href="user-dashboard.html">
                        <i class="lnr lnr-chevron-right mr-2"></i>Dashboard
                      </a>
                    </li>
                    <li>
                      <a class="text-footer" href="user-add-item.html">
                        <i class="lnr lnr-chevron-right mr-2"></i>Add Service
                      </a>
                    </li>
                    <li class=" mb-0">
                      <a class="text-footer mb-0" href="user-settings.html">
                        <i class="lnr lnr-chevron-right mr-2"></i>Settings
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-6 col-lg-2 mb-lg-0">
                <div class="mb-4 mb-md-0">
                  <h5 class="text-theme">Links</h5>
                  <ul class="pt-4 footer-list-style">
                    <li>
                      <a class="text-footer" href="contact.html">
                        <i class="lnr lnr-chevron-right mr-2"></i>Contact
                      </a>
                    </li>
                    <li>
                      <a class="text-footer" href="blog.html">
                        <i class="lnr lnr-chevron-right mr-2"></i>Blog
                      </a>
                    </li>
                    <li>
                      <a class="text-footer" href="blog.html">
                        <i class="lnr lnr-chevron-right mr-2"></i>FAQ
                      </a>
                    </li>
                    <li class="mb-0">
                      <a class="text-footer" href="terms-conditions.html">
                        <i class="lnr lnr-chevron-right mr-2"></i>Terms of Use
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-6 col-lg-3 mb-lg-0">
                <div class="app-widget mb-0">
                  <h5 class="text-theme">Download Apps</h5>
                  <div class="pt-4 mb-0">
                    <div class="media align-items-center mb-2">
                      <a href="javascript:;" class="d-block w-100 radius-1 p-3">
                        <span
                          class="fa fa-android display-5"
                          aria-hidden="true"
                        ></span>
                        <span class="media-body d-inline-block ml-2">
                          Get on GooglePlay
                        </span>
                      </a>
                    </div>
                    <div class="media align-items-center mb-0">
                      <a href="javascript:;" class="d-block w-100 radius-1 p-3">
                        <span
                          class="fa fa-apple display-5"
                          aria-hidden="true"
                        ></span>
                        <span class="media-body d-inline-block ml-2">
                          Get on AppStore
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bottom-footer text-center py-4">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <p>© Copyrights 2020. All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ErrorPage;
