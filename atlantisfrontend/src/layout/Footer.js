import "./footer.css";

function Footer() {
  return (
    <footer>
      <div className="middle-footer py-6">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4 mb-md-5 mb-lg-0">
              <div className="company-info-widget mb-4 mb-md-0">
                <h5 className="text-white text-uppercase">About us</h5>
                <p className="pt-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting.
                </p>
                <address className="pt-4 mb-0">
                  <ul>
                    <li className="mb-2">
                      <span
                        data-feather="map-pin"
                        className="mr-2 size-xs"
                      ></span>
                      1603 Old York Rd, Houma, LA, 75429
                    </li>
                    <li className="mb-2">
                      <span
                        data-feather="phone-call"
                        className="mr-2 size-xs"
                      ></span>
                      <a href="tel:8503867896">Phone: (850) 386-7896</a>
                    </li>
                    <li>
                      <span data-feather="mail" className="mr-2 size-xs"></span>
                      <a href="mailto:support@example.com">
                        support@example.com
                      </a>
                    </li>
                  </ul>
                </address>
                <div className="pt-4 social-widget">
                  <ul className="lh-0">
                    <li className="list-inline-item">
                      <a className="d-inline-block" href="javascript:;">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="d-inline-block" href="javascript:;">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="d-inline-block" href="javascript:;">
                        <i className="fa fa-google-plus"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-2 mb-md-5 mb-lg-0">
              <div className="mb-4 mb-md-0">
                <h5 className="text-white text-uppercase">My Account</h5>
                <ul className="pt-4 menu-list-style">
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
                  <li className="mb-0">
                    <a href="settings.html">Settings</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-2 mb-lg-0">
              <div className="mb-4 mb-md-0">
                <h5 className="text-white text-uppercase">Links</h5>
                <ul className="pt-4 menu-list-style">
                  <li>
                    <a href="contact-us.html">Contact</a>
                  </li>
                  <li>
                    <a href="blog-3col.html">Blog</a>
                  </li>
                  <li>
                    <a href="faq.html">FAQ</a>
                  </li>
                  <li className="mb-0">
                    <a href="terms-policy.html">Terms of Use</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-lg-0">
              <div className="app-widget">
                <h5 className="text-white text-uppercase">Newsletters</h5>
                <div className="pt-4 mb-0">
                  <p>
                    Learn about events, contests, designing tips and more? Of
                    course you do!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-footer text-center py-4">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="d-block d-md-flex justify-content-between">
                <p>© Copyrights 2020. All Rights Reserved</p>
                <ul className="list-inline mt-2 mt-md-0">
                  <li className="list-inline-item mr-4">
                    <a href="javascript:;" className="text-uppercase">
                      Support
                    </a>
                  </li>
                  <li className="list-inline-item mr-4">
                    <a href="javascript:;" className="text-uppercase">
                      Privacy Policy
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="javascript:;" className="text-uppercase">
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
}
export default Footer;
