

export const HeaderMainPage = () => {
  return (
    <header className="bg-black">
      {/* Main header Section */}
      <div className="main-header-section shadow-sm">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-12">
              {/* <!-- Main Menu --> */}
              <div className="main-menu menu-section w-100 d-inline-block d-md-block">
                {/* <!-- Navbar menu--> */}
                <nav className="navbar p-0 navbar-expand-lg">
                  <div className="logo my-3 my-md-0">
                    {/* <a className="navbar-brand" href="index.html">
                                 {/* <img src="assets/img/logo.png" alt="logo image" className="img-fluid">
                                 </a> */}
                  </div>
                  <div className="header-items text-white ml-auto">
                    <ul className="list-inline">
                      <li className="list-inline-item d-none d-md-inline-block">
                        <a href="register.html">
                          <span
                            data-feather="user"
                            className="d-inline-block mr-0 mr-lg-3"
                          ></span>
                          <span className="d-none d-lg-inline-block">
                            Connections
                          </span>
                        </a>
                      </li>
                      <li className="list-inline-item d-none d-md-inline-block explore-menu-style">
                        <a href="product-3col.html">
                          <span
                            data-feather="play"
                            className="d-inline-block mr-0 mr-lg-3"
                          ></span>
                          <span className="d-none d-lg-inline-block">Explore</span>
                        </a>
                      </li>
                      <li className="list-inline-item d-none d-md-inline-block map-menu-style">
                        <span
                          data-feather="map"
                          className="d-inline-block mr-0 mr-lg-3"
                        ></span>
                        <span className="d-none d-lg-inline-block">MADRID, SPAIN</span>
                      </li>
                      {/* VENDE TU PRODUCTO */}
                      <li className="list-inline-item d-none d-md-inline-block sell-pdt-menu-style">
                        <a href="add-product.html">
                          <span
                            data-feather="globe"
                            className="d-inline-block mr-0 mr-lg-3"
                          ></span>
                          <span className="d-none d-lg-inline-block">
                            Sell Your Product
                          </span>
                        </a>
                      </li>
                      {/* IDIOMA */}
                      <li className="list-inline-item animate-menu dropdown">
                        <a
                          href="javascript"
                          className="dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          Language
                        </a>
                        <div className="dropdown-menu bg-grey dropdown-xs text-center shadow-lg radius-0 border-0 r-0 l-auto">
                          <img
                            className="mt-4 d-block mx-auto"
                            src="assets/img/in.png"
                            alt="Language Icon"
                          />
                          <hr className="my-4"></hr>
                          <img
                            className="mb-4 d-block mx-auto"
                            src="assets/img/fr.png"
                            alt="Language Icon"
                          />
                        </div>
                      </li>
                      <li className="list-inline-item">
                        <a href="javascript" id="open_navSidebar">
                          <span
                            data-feather="menu"
                            className="d-inline-block"
                          ></span>
                        </a>
                      </li>
                      {/* LOGIN/LOGOUT */}
                      <li className="list-inline-item">LOGOUT</li>
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
    </header>
  );
};

export default HeaderMainPage;
