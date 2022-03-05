import "./header.css";
import logo from "../assets/img/logo-atlantis-small.png";
import en from "../assets/img/en.png";
import fr from "../assets/img/fr.png";
//import emptyCart from "../assets/emptyCart.png";

function Header() {
  return (
    <header class="bg-black">
      {/* <!-- Main header Section --> */}
      <div class="main-header-section shadow-sm">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-12">
              {/* <!-- Main Menu --> */}
              <div class="main-menu menu-section w-100 d-inline-block d-md-block">
                <nav class="navbar p-0 navbar-expand-lg">
                  <div class="logo my-3 my-md-0">
                    <a class="navbar-brand" href="index.html">
                      <img src={logo} alt="logo " class="img-fluid" />
                    </a>
                  </div>
                  <div class="header-items text-white ml-auto">
                    <ul class="list-inline">
                      <li class="list-inline-item d-none d-md-inline-block">
                        <a href="register.html">
                          <span
                            data-feather="user"
                            class="d-inline-block mr-0 mr-lg-3"
                          ></span>
                          <span class="d-none d-lg-inline-block">
                            Connections
                          </span>
                        </a>
                      </li>
                      <li class="list-inline-item d-none d-md-inline-block explore-menu-style">
                        <a href="product-3col.html">
                          <span
                            data-feather="play"
                            class="d-inline-block mr-0 mr-lg-3"
                          ></span>
                          <span class="d-none d-lg-inline-block">Explore</span>
                        </a>
                      </li>
                      <li class="list-inline-item d-none d-md-inline-block map-menu-style">
                        <span
                          data-feather="map"
                          class="d-inline-block mr-0 mr-lg-3"
                        ></span>
                        <span class="d-none d-lg-inline-block">NY, USA</span>
                      </li>
                      <li class="list-inline-item d-none d-md-inline-block sell-pdt-menu-style">
                        <a href="add-product.html">
                          <span
                            data-feather="globe"
                            class="d-inline-block mr-0 mr-lg-3"
                          ></span>
                          <span class="d-none d-lg-inline-block">
                            Sell Your Product
                          </span>
                        </a>
                      </li>
                      <li class="list-inline-item animate-menu dropdown">
                        <a
                          href="javascript:;"
                          class="dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          <span
                            data-feather="shopping-cart"
                            class="d-inline-block"
                          ></span>
                        </a>
                        <div class="dropdown-menu justify-content-center shadow-lg radius-0 border-0 r-0 l-auto p-4 p-md-5 text-center">
                          <h4>Your shopping cart is empty!</h4>
                          <img
                            class="d-none d-md-inline-block img-fluid py-5"
                            //src={emptyCart}
                            alt="Empty Cart"
                          />
                          <a
                            href="javascript:;"
                            class="btn btn-style mt-3 mt-md-0"
                          >
                            Shop now
                          </a>
                        </div>
                      </li>
                      <li class="list-inline-item animate-menu dropdown">
                        <a
                          href="javascript:;"
                          class="dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          <img src={en} alt="Language Icon" />
                        </a>
                        <div class="dropdown-menu bg-grey dropdown-xs text-center shadow-lg radius-0 border-0 r-0 l-auto">
                          <img
                            class="mt-4 d-block mx-auto"
                            src="assets/img/in.png"
                            alt="Language Icon"
                          />
                          <hr class="my-4" />
                          <img
                            class="mb-4 d-block mx-auto"
                            src={fr}
                            alt="Language Icon"
                            alt="Language Icon"
                          />
                        </div>
                      </li>
                      <li class="list-inline-item">
                        <a href="javascript:;" id="open_navSidebar">
                          <span
                            data-feather="menu"
                            class="d-inline-block"
                          ></span>
                        </a>
                      </li>
                      <ul class="signup-col">
                        <li>
                          <a
                            class="btn btn-signup"
                            data-toggle="modal"
                            href="#login"
                          >
                            <i class="far fa-user"></i> Sign in
                          </a>
                        </li>
                      </ul>
                      {/* <li class="list-inline-item d-none d-md-inline-block sell-pdt-menu-style">
                        <a href="add-product.html">
                          <span
                            data-feather="globe"
                            class="d-inline-block mr-0 mr-lg-3"
                          ></span>
                          <span class="d-none d-lg-inline-block">Sing In</span>
                        </a>
                      </li> */}
                      <li class="list-inline-item d-none d-md-inline-block sell-pdt-menu-style">
                        <a href="add-product.html">
                          <span
                            data-feather="globe"
                            class="d-inline-block mr-0 mr-lg-3"
                          ></span>
                          <span class="d-none d-lg-inline-block">
                            Create One!
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
                {/* <!-- /Navbar menu--> */}
              </div>
              {/* <!-- /Main Menu --> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /Main Header Section --> */}
      <div class="modal fade custom-modal" id="login">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header pb-0">
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true"></span>
              </button>
            </div>
            <div class="modal-body pt-0">
              <div class="text-center pt-0 mb-4">
                <h2 class="modal-title">Sign in</h2>
              </div>
              <form>
                <div class="modal-info">
                  <div class="row form-row form-style-1">
                    <div class="col-12 col-md-12">
                      <div class="form-group">
                        <div class="search-form">
                          <div class="input-group search-box mb-3">
                            <input
                              type="email"
                              class="form-control search-input"
                              placeholder="Email address"
                              aria-describedby="maila"
                            />
                            <div class="input-group-append search-btn">
                              <button
                                class="btn btn-outline-secondary"
                                type="button"
                                id="maila"
                              >
                                <i class="fas fa-envelope"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="form-group">
                        <div class="search-form">
                          <div class="input-group search-box mb-3">
                            <input
                              type="password"
                              class="form-control search-input"
                              placeholder="Password"
                              aria-describedby="pass"
                            />
                            <div class="input-group-append search-btn">
                              <button
                                class="btn btn-outline-secondary"
                                type="button"
                                id="pass"
                              >
                                <i class="fas fa-lock"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row form-row mb-3">
                    <div class="col-6">
                      <label class="custom_check d-block">
                        <input type="checkbox" name="mail" />
                        <span class="checkmark"></span> Stay signed in
                      </label>
                    </div>
                    <div class="col-6 text-right">
                      <a class="forgot-link" href="#">
                        Forgot Password ?
                      </a>
                    </div>
                  </div>
                </div>
                <div class="submit-section text-center">
                  <button
                    type="submit"
                    class="btn btn-primary btn-block submit-btn"
                  >
                    Sign Up
                  </button>
                </div>
                <div class="login-or">
                  <span class="or-line"></span>
                  <span class="span-or">or</span>
                </div>
                <a href="#" class="btn btn-outline-primary btn-block">
                  <img
                    src="assets/img/google.png"
                    class="img-fluid mr-1"
                    alt="google"
                  />{" "}
                  Continue with Google
                </a>
                <a href="#" class="btn btn-outline-primary btn-block">
                  <i class="fab fb-icon fa-facebook-f mr-1"></i> Continue with
                  Facebook
                </a>
                <a href="#" class="btn btn-outline-primary btn-block">
                  <i class="fab fa-apple mr-1"></i> Continue with Apple
                </a>
                <p class="policy-text">
                  By clicking Register or Continue with Google, Facebook, or
                  Apple, you agree to NookX's <a href="#">Terms of Use</a> and{" "}
                  <a href="#">Privacy Policy</a>. NookX may send you
                  communications; you may change your preferences in your
                  account settings. We'll never post without your permission.
                </p>
                <div class="text-center member">
                  Join a member?{" "}
                  <a
                    data-toggle="modal"
                    href="#register"
                    class="custom-modal-close"
                  >
                    Sign Up
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
