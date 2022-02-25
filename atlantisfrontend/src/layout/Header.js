import "./header.css";

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
                {/* <!-- offcanvas menu --> */}
                <div id="offcanvas_menu" class="slidebar-menu">
                  <div class="scroll-style">
                    <div class="container-fluid">
                      <div class="row">
                        <div class="col-12">
                          <div class="close-btn-blk position-absolute r-2 text-right pt-3">
                            <a
                              href="javascript"
                              id="close_navSidebar"
                              class="text-black text-right"
                            >
                              <span data-feather="x-circle" class=""></span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-xl-3 col-lg-4 px-lg-0 d-none d-lg-inline-block bg-black">
                          <div class="menu-slider bg-black p-5 vh-100">
                            <p>Top Selling</p>
                            <h1>The New Collection</h1>

                            <div
                              id="advertise-space-blk"
                              class="my-5 carousel slide"
                              data-ride="carousel"
                            >
                              {/* <!-- Indicators --> */}
                              <ul class="carousel-indicators">
                                <li
                                  data-target="#advertise-space-blk"
                                  data-slide-to="0"
                                  class="active"
                                ></li>
                                <li
                                  data-target="#advertise-space-blk"
                                  data-slide-to="1"
                                ></li>
                                <li
                                  data-target="#advertise-space-blk"
                                  data-slide-to="2"
                                ></li>
                              </ul>

                              {/* <!-- The slideshow --> */}
                              <div class="carousel-inner">
                                <div class="carousel-item text-center active">
                                  <img
                                    class="img-fluid mx-auto text-center"
                                    src="assets/img/ad-pdt-slider-1.jpg"
                                    alt="Showcase Product Image Slider"
                                  />
                                </div>
                                <div class="carousel-item text-center">
                                  <img
                                    class="img-fluid mx-auto text-center"
                                    src="assets/img/ad-pdt-slider-2.jpg"
                                    alt="Showcase Product Image Slider"
                                  />
                                </div>
                                <div class="carousel-item text-center">
                                  <img
                                    class="img-fluid mx-auto text-center"
                                    src="assets/img/ad-pdt-slider-3.jpg"
                                    alt="Showcase Product Image Slider"
                                  />
                                </div>
                              </div>
                            </div>

                            <div class="cta-explore-btn text-center">
                              <a
                                href="product-3col.html"
                                class="btn btn-style btn-lg"
                              >
                                Explore Now
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-9 col-lg-8 pl-lg-0">
                          <div class="p-5 slimscroll">
                            <div class="row">
                              <div class="col-xl-3 col-md-4">
                                <div class="menu-widget-grid">
                                  <h5 class="text-uppercase font-bold">Home</h5>
                                  <ul class="pt-3 menu-list-style">
                                    <li>
                                      <a class="text-link" href="index.html">
                                        Banner Version
                                      </a>
                                    </li>
                                    <li>
                                      <a class="text-link" href="index-2.html">
                                        Video Version
                                      </a>
                                    </li>
                                    <li>
                                      <a class="text-link" href="index-3.html">
                                        Slider Version
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div class="col-xl-3 col-md-4">
                                <div class="menu-widget-grid">
                                  <h5 class="text-uppercase font-bold">Shop</h5>
                                  <ul class="pt-3 menu-list-style">
                                    <li class="default-menu dropdown">
                                      <a
                                        class="text-link dropdown-toggle"
                                        data-toggle="dropdown"
                                        href="javascript:;"
                                      >
                                        Theme
                                      </a>
                                      <div class="dropdown-menu position-relative border-0">
                                        <ul>
                                          <li>
                                            <a
                                              class="dropdown-item"
                                              href="product-3col.html"
                                            >
                                              Shop Basic
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              class="dropdown-item"
                                              href="product-v2.html"
                                            >
                                              Shop Advanced
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              class="dropdown-item"
                                              href="product-v3.html"
                                            >
                                              Shop Pro
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </li>
                                    <li class="default-menu dropdown">
                                      <a
                                        class="text-link dropdown-toggle"
                                        data-toggle="dropdown"
                                        href="javascript:;"
                                      >
                                        Layout
                                      </a>
                                      <div class="dropdown-menu position-relative border-0">
                                        <ul>
                                          <li>
                                            <a
                                              class="dropdown-item"
                                              href="product-3col.html"
                                            >
                                              Shop Grid
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              class="dropdown-item"
                                              href="product-list.html"
                                            >
                                              Shop List
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              class="dropdown-item"
                                              href="product-full-width.html"
                                            >
                                              Shop Full-Width
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </li>
                                    <li class="default-menu dropdown">
                                      <a
                                        class="text-link dropdown-toggle"
                                        data-toggle="dropdown"
                                        href="javascript:;"
                                      >
                                        Column
                                      </a>
                                      <div class="dropdown-menu position-relative border-0">
                                        <ul>
                                          <li>
                                            <a
                                              class="dropdown-item"
                                              href="product-3col.html"
                                            >
                                              Shop 3 Column
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              class="dropdown-item"
                                              href="product-no-sidebar.html"
                                            >
                                              Shop 4 Column
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </li>
                                    <li class="default-menu dropdown">
                                      <a
                                        class="text-link dropdown-toggle"
                                        data-toggle="dropdown"
                                        href="javascript:;"
                                      >
                                        Sidebar
                                      </a>
                                      <div class="dropdown-menu position-relative border-0">
                                        <ul>
                                          <li>
                                            <a
                                              class="dropdown-item"
                                              href="product-3col.html"
                                            >
                                              Shop left Sidebar
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              class="dropdown-item"
                                              href="product-right-sidebar.html"
                                            >
                                              Shop Right Sidebar
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              class="dropdown-item"
                                              href="product-no-sidebar.html"
                                            >
                                              Shop No Sidebar
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div class="col-xl-3 col-md-4">
                                <div class="menu-widget-grid">
                                  <h5 class="text-uppercase font-bold">
                                    Product
                                  </h5>
                                  <ul class="pt-3 menu-list-style">
                                    <li class="default-menu dropdown">
                                      <a
                                        class="text-link dropdown-toggle"
                                        data-toggle="dropdown"
                                        href="javascript:;"
                                      >
                                        Layout
                                      </a>
                                      <div class="dropdown-menu position-relative border-0">
                                        <ul>
                                          <li>
                                            <a
                                              class="dropdown-item"
                                              href="single-product.html"
                                            >
                                              Image Version
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              class="dropdown-item"
                                              href="single-product-v2.html"
                                            >
                                              Video Version
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </li>
                                    <li class="default-menu dropdown">
                                      <a
                                        class="text-link dropdown-toggle"
                                        data-toggle="dropdown"
                                        href="javascript:;"
                                      >
                                        Sidebar
                                      </a>
                                      <div class="dropdown-menu position-relative border-0">
                                        <ul>
                                          <li>
                                            <a
                                              class="dropdown-item"
                                              href="single-product-left-sidebar.html"
                                            >
                                              Left Sidebar
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              class="dropdown-item"
                                              href="single-product.html"
                                            >
                                              Right Sidebar
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </li>
                                    <li class="default-menu dropdown">
                                      <a
                                        class="text-link dropdown-toggle"
                                        data-toggle="dropdown"
                                        href="javascript:;"
                                      >
                                        Thumbnail
                                      </a>
                                      <div class="dropdown-menu position-relative border-0">
                                        <ul>
                                          <li>
                                            <a
                                              class="dropdown-item"
                                              href="single-product-vertical-left.html"
                                            >
                                              Left Image
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              class="dropdown-item"
                                              href="single-product-vertical-right.html"
                                            >
                                              Right Image
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              class="dropdown-item"
                                              href="single-product-thumbnail-top.html"
                                            >
                                              Top Image
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              class="dropdown-item"
                                              href="single-product.html"
                                            >
                                              Bottom Image
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div class="col-xl-3 col-md-4">
                                <div class="menu-widget-grid">
                                  <h5 class="text-uppercase font-bold">Blog</h5>
                                  <ul class="pt-3 menu-list-style">
                                    <li class="default-menu dropdown">
                                      <a
                                        class="text-link dropdown-toggle"
                                        data-toggle="dropdown"
                                        href="javascript:;"
                                      >
                                        Theme
                                      </a>
                                      <div class="dropdown-menu position-relative border-0">
                                        <ul>
                                          <li>
                                            <a
                                              class="dropdown-item"
                                              href="blog-classic.html"
                                            >
                                              Blog Classic
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              class="dropdown-item"
                                              href="blog-3col.html"
                                            >
                                              Blog Basic
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </li>
                                    <li class="default-menu dropdown">
                                      <a
                                        class="text-link dropdown-toggle"
                                        data-toggle="dropdown"
                                        href="javascript:;"
                                      >
                                        Layout
                                      </a>
                                      <div class="dropdown-menu position-relative border-0">
                                        <ul>
                                          <li>
                                            <a
                                              class="dropdown-item"
                                              href="blog-3col.html"
                                            >
                                              Blog Grid
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              class="dropdown-item"
                                              href="blog-list.html"
                                            >
                                              Blog List
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </li>
                                    <li class="default-menu dropdown">
                                      <a
                                        class="text-link dropdown-toggle"
                                        data-toggle="dropdown"
                                        href="javascript:;"
                                      >
                                        Column
                                      </a>
                                      <div class="dropdown-menu position-relative border-0">
                                        <ul>
                                          <li>
                                            <a
                                              class="dropdown-item"
                                              href="blog-3col.html"
                                            >
                                              Blog 3 Column
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              class="dropdown-item"
                                              href="blog-4col.html"
                                            >
                                              Blog 4 Column
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </li>
                                    <li class="default-menu dropdown">
                                      <a
                                        class="text-link dropdown-toggle"
                                        data-toggle="dropdown"
                                        href="javascript:;"
                                      >
                                        Sidebar
                                      </a>
                                      <div class="dropdown-menu position-relative border-0">
                                        <ul>
                                          <li>
                                            <a
                                              class="dropdown-item"
                                              href="blog-single-post-left-sidebar.html"
                                            >
                                              Blog Left Sidebar
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              class="dropdown-item"
                                              href="blog-single-post.html"
                                            >
                                              Blog Right Sidebar
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div class="col-xl-3 col-md-4">
                                <div class="menu-widget-grid">
                                  <h5 class="text-uppercase font-bold">
                                    Pages
                                  </h5>
                                  <ul class="pt-3 menu-list-style">
                                    <li>
                                      <a class="text-link" href="about-us.html">
                                        About Us
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        class="text-link"
                                        href="contact-us.html"
                                      >
                                        Contact Us
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        class="text-link"
                                        href="how-it-works.html"
                                      >
                                        How It Works
                                      </a>
                                    </li>
                                    <li>
                                      <a class="text-link" href="faq.html">
                                        FAQ
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        class="text-link"
                                        href="terms-policy.html"
                                      >
                                        Terms & Policy
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div class="col-xl-3 col-md-4">
                                <div class="menu-widget-grid">
                                  <h5 class="text-uppercase font-bold">
                                    User Panel
                                  </h5>
                                  <ul class="pt-3 menu-list-style">
                                    <li>
                                      <a
                                        class="text-link"
                                        href="user-profile.html"
                                      >
                                        User profile
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        class="text-link"
                                        href="user-profile-v2.html"
                                      >
                                        User profile V2
                                      </a>
                                    </li>
                                    <li>
                                      <a class="text-link" href="settings.html">
                                        Settings
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        class="text-link"
                                        href="seller-cart.html"
                                      >
                                        Seller Cart
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        class="text-link"
                                        href="my-wishlist.html"
                                      >
                                        My wishlist
                                      </a>
                                    </li>

                                    <li>
                                      <a class="text-link" href="my-shop.html">
                                        My shop
                                      </a>
                                    </li>
                                    <li>
                                      <a class="text-link" href="my-sales.html">
                                        My sale
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        class="text-link"
                                        href="my-payments.html"
                                      >
                                        My payments
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        class="text-link"
                                        href="my-orders.html"
                                      >
                                        My orders
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        class="text-link"
                                        href="my-dashboard.html"
                                      >
                                        My dashboard
                                      </a>
                                    </li>

                                    <li>
                                      <a
                                        class="text-link"
                                        href="loggedin-user-profile.html"
                                      >
                                        My profile
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        class="text-link"
                                        href="invite-friends.html"
                                      >
                                        Invite friends
                                      </a>
                                    </li>
                                    <li>
                                      <a class="text-link" href="forum.html">
                                        Forum
                                      </a>
                                    </li>
                                    <li>
                                      <a class="text-link" href="add-shop.html">
                                        Add Shop
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        class="text-link"
                                        href="add-product.html"
                                      >
                                        Add product
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        class="text-link"
                                        href="add-addresses.html"
                                      >
                                        Add addresses
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div class="col-xl-3 col-md-4">
                                <div class="menu-widget-grid">
                                  <h5 class="text-uppercase font-bold">
                                    Admin Panel
                                  </h5>
                                  <ul class="pt-3 menu-list-style">
                                    <li>
                                      <a
                                        class="text-link"
                                        href="admin-panel/index.html"
                                      >
                                        View pages
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- /offcanvas menu --> */}

                {/* <!-- Navbar menu--> */}
                <nav class="navbar p-0 navbar-expand-lg">
                  <div class="logo my-3 my-md-0">
                    <a class="navbar-brand" href="index.html">
                      {/* <img src="assets/img/logo.png" alt="logo image" class="img-fluid"/> */}
                      alt=" LOGO ATLANTIS"
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
                            // src="assets/img/empty-cart.png"
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
                          <img src="assets/img/en.png" alt="Language Icon" />
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
                            // src="assets/img/fr.png"
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
                      <li class="list-inline-item d-none d-md-inline-block sell-pdt-menu-style">
                        <a href="add-product.html">
                          <span
                            data-feather="globe"
                            class="d-inline-block mr-0 mr-lg-3"
                          ></span>
                          <span class="d-none d-lg-inline-block">Log In</span>
                        </a>
                      </li>
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
    </header>
  );
}

export default Header;
