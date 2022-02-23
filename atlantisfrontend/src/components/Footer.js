export const Footer = () => {
  return (
    <footer>
      <div class="middle-footer py-6">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-lg-4 mb-md-5 mb-lg-0">
              <div class="company-info-widget mb-4 mb-md-0">
                <h5 class="text-white text-uppercase">About us</h5>
                <p class="pt-4">
                  We are a great platform to buy and sell stuff
                </p>
                <address class="pt-4 mb-0">
                  <ul>
                    <li class="mb-2">
                      <span data-feather="map-pin" class="mr-2 size-xs"></span>
                      El patio de mi casa, KeepCodingWeb11, 2022
                    </li>
                    <li>
                      <span data-feather="mail" class="mr-2 size-xs"></span>
                      <a href="mailto:atlantis@keepcoders.com">
                        atlantis@keepcoders.com
                      </a>
                    </li>
                  </ul>
                </address>
                <p>**Aquí van botones de compartir en redes sociales**</p>
                <div class="pt-4 social-widget">
                  <ul class="lh-0">
                    <li class="list-inline-item">
                      <a class="d-inline-block" href="javascript">
                        <i class="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a class="d-inline-block" href="javascript">
                        <i class="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a class="d-inline-block" href="javascript">
                        <i class="fa fa-google-plus"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-2 mb-md-5 mb-lg-0">
              <div class="mb-4 mb-md-0">
                <h5 class="text-white text-uppercase">My Account</h5>
                <ul class="pt-4 menu-list-style">
                  <li>
                    <a href="user-profile.html">Profile</a>
                  </li>
                  <li>
                    <a href="my-payments.html">Wallet</a>
                  </li>
                  <li>
                    <a href="my-dashboard.html">Dashboard</a>
                  </li>
                  <li>
                    <a href="add-product.html">Add Service</a>
                  </li>
                  <li class="mb-0">
                    <a href="settings.html">Settings</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-6 col-lg-2 mb-lg-0">
              <div class="mb-4 mb-md-0">
                <h5 class="text-white text-uppercase">Links</h5>
                <ul class="pt-4 menu-list-style">
                  <li>
                    <a href="contact-us.html">Contact</a>
                  </li>
                  <li>
                    <a href="blog-3col.html">Blog</a>
                  </li>
                  <li>
                    <a href="faq.html">FAQ</a>
                  </li>
                  <li class="mb-0">
                    <a href="terms-policy.html">Terms of Use</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 mb-lg-0">
              <div class="app-widget">
                <h5 class="text-white text-uppercase">Newsletters</h5>
                <div class="pt-4 mb-0">
                  <div class="d-flex input-group">
                    <div class="main-search-blk d-flex input-group radius-1 py-4 shadow">
                      <span class="input-group-btn">
                        <button
                          class="ml-n1 btn btn-style-search p-3 text-white"
                          type="submit"
                        >
                          <span data-feather="mail" class=""></span>
                        </button>
                      </span>
                    </div>
                    <hr class="footer-hr w-100 my-0"></hr>
                    <p class="text-uppercase pt-4 font-bold">We Accept MONEY or FOOD, what you are willing to donate</p>
                    
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
              <div class="d-block d-md-flex justify-content-between">
                <p>© Copyrights 2020. All Rights Reserved</p>
                <ul class="list-inline mt-2 mt-md-0">
                  <li class="list-inline-item mr-4">
                    <a href="javascript" class="text-uppercase">
                      Support
                    </a>
                  </li>
                  <li class="list-inline-item mr-4">
                    <a href="javascript" class="text-uppercase">
                      Privacy Policy
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="javascript" class="text-uppercase">
                      Terms
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
