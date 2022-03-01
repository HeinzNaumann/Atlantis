import "./login1.css";

function Login1() {
  return (
    <>
      <div className="inner-wrapper">
        <div className="breadcrumb-wrapper custom-shadow-bottom py-3">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="d-block d-md-flex justify-content-between align-items-center">
                  <div className="breadcrumb-title">
                    <h3> Sign in</h3>
                  </div>
                  <div className="custom-breadcrumb">
                    <ol className="breadcrumb mt-2 mt-md-0 no-bg-color p-0 m-0">
                      <li className="breadcrumb-item d-inline-block">
                        <a href="index.html" class="text-theme-secondary">
                          Home
                        </a>
                      </li>
                      <li className="breadcrumb-item d-inline-block active">
                        Account
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="reg-wrapper bg-grey py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="reg-title-wrapper bg-white pl-4 pr-4 pt-4 text-center">
                <h3 className="mb-4">Login or Create a free account!</h3>
                <p>
                  Join the ATLANTIS universe to meet sorted workers and
                  investors around you - or all over the world.
                </p>
                <hr className="my-4" />
                <div className="social-login mt-4">
                  <h4 className="text-grey font-bold">
                    Sign in with social network
                  </h4>
                  <ul className="list-inline mt-3 d-flex">
                    <li className="list-inline-item flex-fill">
                      <a
                        href="javascript:;"
                        className="d-block align-middle btn-md border btn-social fb-blk"
                      >
                        <span
                          data-feather="facebook"
                          className="mr-0 mr-md-2"
                        ></span>
                        <span className="align-middle d-none d-md-inline-block">
                          Facebook
                        </span>
                      </a>
                    </li>
                    <li className="list-inline-item flex-fill">
                      <a
                        href="javascript:;"
                        className="d-block align-middle btn-md border btn-social tw-blk"
                      >
                        <span
                          data-feather="twitter"
                          className="mr-0 mr-md-2"
                        ></span>
                        <span className="align-middle d-none d-md-inline-block">
                          Twitter
                        </span>
                      </a>
                    </li>
                    <li className="list-inline-item flex-fill">
                      <a
                        href="javascript:;"
                        class="d-block align-middle btn-md border btn-social in-blk"
                      >
                        <span
                          data-feather="linkedin"
                          className="mr-0 mr-md-2"
                        ></span>
                        <span className="align-middle d-none d-md-inline-block">
                          Linkedin
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="add-pdt-blk">
                <form>
                  <div className="pdt-details-blk bg-white p-4">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="border p-4">
                          <div className="add-pdt-title-blk">
                            <span
                              data-feather="user-plus"
                              className="mr-3 text-theme"
                            ></span>
                            <h5 className="text-grey d-inline-block align-middle">
                              New Account
                            </h5>
                          </div>
                          <hr className="my-4" />
                          <div className="form-row mb-4">
                            <div className="col-12">
                              <div className="input-group px-0">
                                <div className="input-group-prepend">
                                  <span className="input-group-text no-bg-color border-0">
                                    <i
                                      data-feather="user"
                                      className="position-relative z-index-5 text-theme"
                                    ></i>
                                  </span>
                                </div>
                                <input
                                  type="text"
                                  className="form-control bg-input custom-input-group ml-n5 pl-5"
                                  placeholder="Enter Username"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="form-row mb-4">
                            <div className="col-12">
                              <div className="input-group px-0">
                                <div className="input-group-prepend">
                                  <span className="input-group-text no-bg-color border-0">
                                    <i
                                      data-feather="mail"
                                      className="position-relative z-index-5 text-theme"
                                    ></i>
                                  </span>
                                </div>
                                <input
                                  type="email"
                                  className="form-control bg-input custom-input-group ml-n5 pl-5"
                                  placeholder="Enter Email"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="form-row mb-4">
                            <div className="col-12">
                              <div className="input-group px-0">
                                <div className="input-group-prepend">
                                  <span className="input-group-text no-bg-color border-0">
                                    <i
                                      data-feather="lock"
                                      className="position-relative z-index-5 text-theme"
                                    ></i>
                                  </span>
                                </div>
                                <input
                                  type="password"
                                  className="form-control bg-input custom-input-group ml-n5 pl-5"
                                  placeholder="Enter Password"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="form-row mb-4">
                            <div className="col-12">
                              <div className="input-group">
                                <div className="input-group-prepend">
                                  <span className="input-group-text no-bg-color border-0">
                                    <i
                                      data-feather="lock"
                                      className="position-relative z-index-5 text-theme"
                                    ></i>
                                  </span>
                                </div>
                                <input
                                  type="password"
                                  className="form-control bg-input custom-input-group ml-n5 pl-5"
                                  placeholder="Enter Password"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="custom-control custom-checkbox mb-4">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck"
                              name="example1"
                            />
                            <label
                              class="custom-control-label text-grey"
                              for="customCheck"
                            >
                              Please inform me of upcoming freebies, promotions
                              and news.
                            </label>
                          </div>
                          <a href="javascript:;" class="btn btn-style btn-lg">
                            Create account
                          </a>{" "}
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="border mt-4 mt-lg-0 p-4">
                          <div className="add-pdt-title-blk">
                            <span
                              data-feather="key"
                              className="mr-3 text-theme"
                            ></span>
                            <h5 className="text-grey d-inline-block align-middle">
                              Sign in
                            </h5>
                          </div>
                          <hr className="my-4" />
                          <div className="form-row mb-4">
                            <div className="col-12">
                              <div className="input-group px-0">
                                <div className="input-group-prepend">
                                  <span className="input-group-text no-bg-color border-0">
                                    <i
                                      data-feather="mail"
                                      className="position-relative z-index-5 text-theme"
                                    ></i>
                                  </span>
                                </div>
                                <input
                                  type="email"
                                  className="form-control bg-input custom-input-group ml-n5 pl-5"
                                  placeholder="Enter Email"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="form-row">
                            <div className="col-12">
                              <div className="input-group px-0">
                                <div className="input-group-prepend">
                                  <span className="input-group-text no-bg-color border-0">
                                    <i
                                      data-feather="lock"
                                      className="position-relative z-index-5 text-theme"
                                    ></i>
                                  </span>
                                </div>
                                <input
                                  type="password"
                                  className="form-control bg-input custom-input-group ml-n5 pl-5"
                                  placeholder="Enter Password"
                                />
                              </div>
                            </div>
                          </div>
                          <a href="javascript:;" className="mt-2 d-block">
                            Forgot password?
                          </a>
                          <a
                            href="javascript:;"
                            className="mt-4 btn btn-style-success btn-lg"
                          >
                            Sign in
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login1();
