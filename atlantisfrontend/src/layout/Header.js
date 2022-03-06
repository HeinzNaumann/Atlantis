import "./header.css";
import logo from "../assets/img/logo-atlantis-small.png";
import en from "../assets/img/en.png";
import fr from "../assets/img/fr.png";
import de from "../assets/img/de.jpg";

//import { Menu } from "../common/Menu";

function Header() {
  return (
    <header className="bg-black">
      {/* <!-- Main header Section --> */}
      <div className="main-header-section shadow-sm">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-12">
              {/* <!-- Main Menu --> */}
              <div className="main-menu menu-section w-100 d-inline-block d-md-block">
                <nav className="navbar p-0 navbar-expand-lg">
                  <div className="logo my-3 my-md-0">
                    <a className="navbar-brand" href="index.html">
                      <img src={logo} alt="logo " className="img-fluid" />
                    </a>
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
                          <span className="d-none d-lg-inline-block">
                            Explore
                          </span>
                        </a>
                      </li>
                      <li className="list-inline-item d-none d-md-inline-block map-menu-style">
                        <span
                          data-feather="map"
                          className="d-inline-block mr-0 mr-lg-3"
                        ></span>
                        <span className="d-none d-lg-inline-block">
                          NY, USA
                        </span>
                      </li>

                      <li className="list-inline-item">
                        <a href="javascript:;" id="open_navSidebar">
                          <span
                            data-feather="singin"
                            className="d-inline-block"
                          ></span>
                          <span className="d-none d-lg-inline-block">
                            Sing In
                          </span>
                        </a>
                      </li>

                      <li className="list-inline-item d-none d-md-inline-block sell-pdt-menu-style">
                        <a href="add-product.html">
                          <span
                            data-feather="globe"
                            className="d-inline-block mr-0 mr-lg-3"
                          ></span>
                          <span className="d-none d-lg-inline-block">
                            Create One!
                          </span>
                        </a>
                      </li>
                      <li className="list-inline-item animate-menu dropdown">
                        <img src={en} alt="Language Icon" />
                        <br></br>
                        <img src={fr} alt="Language Icon" />
                        <br></br>
                        <img src={de} alt="Language Icon" />
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
    </header>
  );
}

export default Header;
