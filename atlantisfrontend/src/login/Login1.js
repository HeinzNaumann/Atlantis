import "./login1.css";

function Login1() {
  return (
    <>
      <div class="inner-wrapper">
        <div class="breadcrumb-wrapper custom-shadow-bottom py-3">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="d-block d-md-flex justify-content-between align-items-center">
                  <div class="breadcrumb-title">
                    <h3> Sign in</h3>
                  </div>
                  <div class="custom-breadcrumb">
                    <ol class="breadcrumb mt-2 mt-md-0 no-bg-color p-0 m-0">
                      <li class="breadcrumb-item d-inline-block">
                        <a href="index.html" class="text-theme-secondary">
                          Home
                        </a>
                      </li>
                      <li class="breadcrumb-item d-inline-block active">
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
      <section class="reg-wrapper bg-grey py-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="reg-title-wrapper bg-white pl-4 pr-4 pt-4 text-center">
                <h3 class="mb-4">Login or Create a free account!</h3>
                <p>
                  Join the ATLANTIS universe to meet sorted workers and
                  investors around you - or all over the world.
                </p>
                <hr class="my-4" />
                <div class="social-login mt-4">
                  <h4 class="text-grey font-bold">
                    Sign in with social network
                  </h4>
                  <ul class="list-inline mt-3 d-flex">
                    <li class="list-inline-item flex-fill">
                      <a
                        href="javascript:;"
                        class="d-block align-middle btn-md border btn-social fb-blk"
                      >
                        <span
                          data-feather="facebook"
                          class="mr-0 mr-md-2"
                        ></span>
                        <span class="align-middle d-none d-md-inline-block">
                          Facebook
                        </span>
                      </a>
                    </li>
                    <li class="list-inline-item flex-fill">
                      <a
                        href="javascript:;"
                        class="d-block align-middle btn-md border btn-social tw-blk"
                      >
                        <span
                          data-feather="twitter"
                          class="mr-0 mr-md-2"
                        ></span>
                        <span class="align-middle d-none d-md-inline-block">
                          Twitter
                        </span>
                      </a>
                    </li>
                    <li class="list-inline-item flex-fill">
                      <a
                        href="javascript:;"
                        class="d-block align-middle btn-md border btn-social in-blk"
                      >
                        <span
                          data-feather="linkedin"
                          class="mr-0 mr-md-2"
                        ></span>
                        <span class="align-middle d-none d-md-inline-block">
                          Linkedin
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="add-pdt-blk">
                <form>
                  <div class="pdt-details-blk bg-white p-4">
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="border p-4">
                          <div class="add-pdt-title-blk">
                            <span
                              data-feather="user-plus"
                              class="mr-3 text-theme"
                            ></span>
                            <h5 class="text-grey d-inline-block align-middle">
                              New Account
                            </h5>
                          </div>
                          <hr class="my-4" />
                          <div class="form-row mb-4">
                            <div class="col-12">
                              <div class="input-group px-0">
                                <div class="input-group-prepend">
                                  <span class="input-group-text no-bg-color border-0">
                                    <i
                                      data-feather="user"
                                      class="position-relative z-index-5 text-theme"
                                    ></i>
                                  </span>
                                </div>
                                <input
                                  type="text"
                                  class="form-control bg-input custom-input-group ml-n5 pl-5"
                                  placeholder="Enter Username"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="form-row mb-4">
                            <div class="col-12">
                              <div class="input-group px-0">
                                <div class="input-group-prepend">
                                  <span class="input-group-text no-bg-color border-0">
                                    <i
                                      data-feather="mail"
                                      class="position-relative z-index-5 text-theme"
                                    ></i>
                                  </span>
                                </div>
                                <input
                                  type="email"
                                  class="form-control bg-input custom-input-group ml-n5 pl-5"
                                  placeholder="Enter Email"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="form-row mb-4">
                            <div class="col-12">
                              <div class="input-group px-0">
                                <div class="input-group-prepend">
                                  <span class="input-group-text no-bg-color border-0">
                                    <i
                                      data-feather="lock"
                                      class="position-relative z-index-5 text-theme"
                                    ></i>
                                  </span>
                                </div>
                                <input
                                  type="password"
                                  class="form-control bg-input custom-input-group ml-n5 pl-5"
                                  placeholder="Enter Password"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="form-row mb-4">
                            <div class="col-12">
                              <div class="input-group">
                                <div class="input-group-prepend">
                                  <span class="input-group-text no-bg-color border-0">
                                    <i
                                      data-feather="lock"
                                      class="position-relative z-index-5 text-theme"
                                    ></i>
                                  </span>
                                </div>
                                <input
                                  type="password"
                                  class="form-control bg-input custom-input-group ml-n5 pl-5"
                                  placeholder="Enter Password"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="custom-control custom-checkbox mb-4">
                            <input
                              type="checkbox"
                              class="custom-control-input"
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
                      <div class="col-lg-6">
                        <div class="border mt-4 mt-lg-0 p-4">
                          <div class="add-pdt-title-blk">
                            <span
                              data-feather="key"
                              class="mr-3 text-theme"
                            ></span>
                            <h5 class="text-grey d-inline-block align-middle">
                              Sign in
                            </h5>
                          </div>
                          <hr class="my-4" />
                          <div class="form-row mb-4">
                            <div class="col-12">
                              <div class="input-group px-0">
                                <div class="input-group-prepend">
                                  <span class="input-group-text no-bg-color border-0">
                                    <i
                                      data-feather="mail"
                                      class="position-relative z-index-5 text-theme"
                                    ></i>
                                  </span>
                                </div>
                                <input
                                  type="email"
                                  class="form-control bg-input custom-input-group ml-n5 pl-5"
                                  placeholder="Enter Email"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="form-row">
                            <div class="col-12">
                              <div class="input-group px-0">
                                <div class="input-group-prepend">
                                  <span class="input-group-text no-bg-color border-0">
                                    <i
                                      data-feather="lock"
                                      class="position-relative z-index-5 text-theme"
                                    ></i>
                                  </span>
                                </div>
                                <input
                                  type="password"
                                  class="form-control bg-input custom-input-group ml-n5 pl-5"
                                  placeholder="Enter Password"
                                />
                              </div>
                            </div>
                          </div>
                          <a href="javascript:;" class="mt-2 d-block">
                            Forgot password?
                          </a>
                          <a
                            href="javascript:;"
                            class="mt-4 btn btn-style-success btn-lg"
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
