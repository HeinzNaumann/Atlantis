import "./header.css";
import logo from "../assets/logo_atlantis.png";
import flagEs from "../assets/img/es.png";
import flagEn from "../assets/img/en.png";
import * as Icon from "react-feather";
import { NavLink, Link } from "react-router-dom";
import LoginButton from "../components/common/LoginButton";
import LogoutButton from "../components/common/LogoutButton";
import AdminButton from "../components/common/AdminButton";
import { useEffect, useState } from "react";
import MsgNotiMenu from "../components/common/MsgNotiMenu";

function Header() {
  const [isLogged, SetLogged] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      SetLogged(true);
    } else {
      SetLogged(false);
    }
  }, [isLogged]);

  return (
    <header className="bg-black">
      {/* <!-- Main header Section --> */}
      <div className="main-header-section shadow-sm">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-12">
              {/* <!-- Main Menu --> */}
              <div className="main-menu menu-section w-100 d-inline-block d-md-block">
                <nav className="navbar p-0 navbar-expand-justify-content-xxl-around">
                  <div className="logo my-3 my-md-0">
                    <NavLink to="/main">
                      <img
                        src={logo}
                        width="150px"
                        height="auto "
                        alt="logo"
                        className="img-fluid"
                      />
                    </NavLink>
                  </div>
                  <div className="header-items text-white ml-auto">
                    <ul className="list-inline menu-header">
                      <li className="list-inline-item d-md-inline-block">
                        {isLogged ? (
                          <>
                            <LogoutButton />
                            <AdminButton />
                          </>
                        ) : (
                          <LoginButton />
                        )}
                      </li>

                      {/* ------------DIEGO -------------------------------*/}
                      {isLogged ? <MsgNotiMenu /> : ""}

                      {/* ---------------FIN DIEGO----------------------------- */}

                      <li className="list-inline-item  d-md-inline-block explore-menu-style">
                        <Link to="/adverts">
                          <span className="d-inline-block mr-0 mr-lg-3">
                            <Icon.Play className="d-inline-block mr-0 mr-lg-3 icons-header" />
                          </span>
                          <span className="d-none d-lg-inline-block">
                            Explore
                          </span>
                        </Link>
                      </li>
                      <li className="list-inline-item  d-md-inline-block sell-pdt-menu-style">
                        <Link to="/adverts/new">
                          <span className="d-inline-block mr-0 mr-lg-3">
                            <Icon.Globe className="d-inline-block d-none mr-0 mr-lg-3 icons-header" />
                          </span>
                          <span className="d-none d-lg-inline-block">
                            Sell Your Product
                          </span>
                        </Link>
                      </li>
                      {/*                      
                      <li className="list-inline-item animate-menu dropdown">
                        <a
                          href="javascript"
                          className="dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          <img src={flagEn} alt="Language Icon" />
                          <Icon.ChevronDown className="d-inline-block mr-1 mr-lg-3" />
                        </a>
                        <div className="dropdown-menu bg-grey dropdown-xs text-center shadow-lg radius-0 border-0 r-0 l-auto">
                          <img
                            className="mt-4 d-block mx-auto"
                            src={flagEs}
                            width="32px"
                            height="auto"
                            alt="Language Icon"
                          />

                             
                        </div>
                      </li> */}
                      <li className="list-inline-item"></li>
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
      <div className="modal fade custom-modal" id="login">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header pb-0">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true"></span>
              </button>
            </div>
            <div className="modal-body pt-0">
              <div className="text-center pt-0 mb-4">
                <h2 className="modal-title">Sign in</h2>
              </div>
              <form>
                <div className="modal-info">
                  <div className="row form-row form-style-1">
                    <div className="col-12 col-md-12">
                      <div className="form-group">
                        <div className="search-form">
                          <div className="input-group search-box mb-3">
                            <input
                              type="email"
                              className="form-control search-input"
                              placeholder="Email address"
                              aria-describedby="maila"
                            />
                            <div className="input-group-append search-btn">
                              <button
                                className="btn btn-outline-secondary"
                                type="button"
                                id="maila"
                              >
                                <i className="fas fa-envelope"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="search-form">
                          <div className="input-group search-box mb-3">
                            <input
                              type="password"
                              className="form-control search-input"
                              placeholder="Password"
                              aria-describedby="pass"
                            />
                            <div className="input-group-append search-btn">
                              <button
                                className="btn btn-outline-secondary"
                                type="button"
                                id="pass"
                              >
                                <i className="fas fa-lock"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row form-row mb-3">
                    <div className="col-6">
                      <label className="custom_check d-block">
                        <input type="checkbox" name="mail" />
                        <span className="checkmark"></span> Stay signed in
                      </label>
                    </div>
                    <div className="col-6 text-right">
                      <a className="forgot-link" href="#">
                        Forgot Password ?
                      </a>
                    </div>
                  </div>
                </div>
                <div className="submit-section text-center">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block submit-btn"
                  >
                    Sign Up
                  </button>
                </div>
                <div className="login-or">
                  <span className="or-line"></span>
                  <span className="span-or">or</span>
                </div>
                <a href="#" className="btn btn-outline-primary btn-block">
                  <img
                    src="assets/img/google.png"
                    className="img-fluid mr-1"
                    alt="google"
                  />{" "}
                  Continue with Google
                </a>
                <a href="#" className="btn btn-outline-primary btn-block">
                  <i className="fab fb-icon fa-facebook-f mr-1"></i> Continue
                  with Facebook
                </a>
                <a href="#" className="btn btn-outline-primary btn-block">
                  <i className="fab fa-apple mr-1"></i> Continue with Apple
                </a>
                <p className="policy-text">
                  By clicking Register or Continue with Google, Facebook, or
                  Apple, you agree to NookX's <a href="#">Terms of Use</a> and{" "}
                  <a href="#">Privacy Policy</a>. NookX may send you
                  communications; you may change your preferences in your
                  account settings. We'll never post without your permission.
                </p>
                <div className="text-center member">
                  Join a member?{" "}
                  <a
                    data-toggle="modal"
                    href="#register"
                    className="custom-modal-close"
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
