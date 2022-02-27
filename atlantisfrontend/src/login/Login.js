import "./login.css";

function Login() {
  return (
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
                  // src="assets/img/google.png"
                  class="img-fluid mr-1"
                  alt="google"
                />{" "}
                Continue with Google
              </a>
              <a href="#" class="btn btn-outline-primary btn-block">
                {/* <i class="fab fb-icon fa-facebook-f mr-1"></i> Continue with
                Facebook */}
              </a>
              <a href="#" class="btn btn-outline-primary btn-block">
                {/* <i class="fab fa-apple mr-1"></i> Continue with Apple */}
              </a>
              <p class="policy-text">
                By clicking Register or Continue with Google, Facebook, or
                Apple, you agree to NookX's <a href="#">Terms of Use</a> and{" "}
                <a href="#">Privacy Policy</a>. NookX may send you
                communications; you may change your preferences in your account
                settings. We'll never post without your permission.
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
    //   <div class="modal fade custom-modal" id="register">
    //   <div class="modal-dialog modal-dialog-centered">
    //     <div class="modal-content">
    //       <div class="modal-header pb-0">
    //         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
    //           <span aria-hidden="true">close</span>
    //         </button>
    //       </div>
    //       <div class="modal-body pt-0">
    //         <div class="text-center pt-0 mb-4">
    //           <h2 class="modal-title">Create your account</h2>
    //           <h3 class="modal-subtitle">Registration is easy.</h3>
    //         </div>
    //         <form>
    //           <div class="modal-info">
    //             <div class="row form-row form-style-1">
    //               <div class="col-12 col-md-12">
    //                 <div class="form-group">
    //                   <div class="search-form">
    //                     <div class="input-group search-box mb-3">
    //                       <input type="text" class="form-control search-input" placeholder="First name" aria-describedby="user"/>
    //                       <div class="input-group-append search-btn">
    //                       <button class="btn btn-outline-secondary" type="button" id="user"><i class="fas fa-user"></i></button>
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </div>
    //                 <div class="form-group">
    //                   <div class="search-form">
    //                     <div class="input-group search-box mb-3">
    //                       <input type="email" class="form-control search-input" placeholder="Email address" aria-describedby="envelope"/>
    //                       <div class="input-group-append search-btn">
    //                       <button class="btn btn-outline-secondary" type="button" id="envelope"><i class="fas fa-envelope"></i></button>
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </div>
    //                 <div class="form-group">
    //                   <div class="search-form">
    //                     <div class="input-group search-box mb-3">
    //                       <input type="password" class="form-control search-input" placeholder="Password" aria-describedby="lock"/>
    //                       <div class="input-group-append search-btn">
    //                       <button class="btn btn-outline-secondary" type="button" id="lock"><i class="fas fa-lock"></i></button>
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //           <div class="submit-section text-center">
    //             <button type="submit" class="btn btn-primary btn-block submit-btn">Sign Up</button>
    //           </div>
    //           <div class="login-or">
    //             <span class="or-line"></span>
    //             <span class="span-or">or</span>
    //           </div>
    //           <a href="#" class="btn btn-outline-primary btn-block"><img src="assets/img/google.png" class="img-fluid" alt="google"/> Continue with Google</a>
    //           <a href="#" class="btn btn-outline-primary btn-block"><i class="fab fb-icon fa-facebook-f mr-1"></i> Continue with Facebook</a>
    //           <a href="#" class="btn btn-outline-primary btn-block"><i class="fab fa-apple mr-1"></i> Continue with Apple</a>
    //           <p class="policy-text">By clicking Register or Continue with Google, Facebook, or Apple, you agree to NookX's <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>. NookX  may send you communications; you may change your preferences in your account settings. We'll never post without your permission.</p>
    //           <div class="text-center member">Already a member? <a data-toggle="modal" href="#login" class="custom-modal-close">Sign In</a></div>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Login;
