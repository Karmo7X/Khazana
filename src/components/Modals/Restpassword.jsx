import React from "react";

const Restpassword = () => {
  return (
    <>
      <div
        className="modal fade"
        id="resetModal"
        tabIndex="-1"
        aria-labelledby="otpModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-body">
              <div class="close-btn">
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="identityBox">
                <div class="form-wrapper d-flex align-items-center justify-content-center flex-column gap-5">
                  <div className="d-flex align-items-center justify-content-center flex-column text-center">
                    <h1 id="loginModalLabel">Recover password</h1>
                    <p className="w-75">
                    Add the new password to your account
                    </p>
                  </div>

                  <div className="w-100 mt-2">
                    <label htmlFor="password">Password</label>
                    <input
                      class="inputField"
                      type="password"
                      name="password"
                      placeholder="Enter Password"
                      id="password"
                    />
                  </div>
                  <div className="w-100 mt-2">
                    <label htmlFor="confirmpassword">Confirm Password</label>
                    <input
                      class="inputField"
                      type="password"
                      name="confirmpassword"
                      id="confirmpassword"
                      placeholder="Enter Confirm Password"
                    />
                  </div>

                  <button className="theme-btn rounded-0 w-100  mt-3">
                    submit
                  </button>
                </div>

                <div class="banner">
                  {/* <button type="button" class="rounded-0 login-btn" data-bs-toggle="modal"
                                data-bs-target="#loginModal">Log in</button>
                            <button type="button" class="theme-btn rounded-0 register-btn" data-bs-toggle="modal"
                                data-bs-target="#registrationModal">Create
                                Account</button> */}
                  <div class="loginBg">
                    <img src="/assets/img/signUpbg.jpg" alt="signUpBg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Restpassword;
