import React from "react";
import { useTranslation } from "react-i18next";
const Register = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div
        class="modal fade"
        id="registrationModal"
        tabindex="-1"
        aria-labelledby="registrationModalLabel"
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
                <div class="form-wrapper w-100">
                  <h1 id="registrationModalLabel">{t("global.register.createAccount")}</h1>
                  <div className="w-100 mt-2">
                    <label htmlFor="name">{t("global.register.userName")}</label>
                    <input
                      class="inputField"
                      type="text"
                      name="name"
                      id="name"
                      placeholder={t("global.register.userName")}
                    />
                  </div>
                  <div className="w-100 mt-2">
                    <label htmlFor="date">{t("global.register.dateOfBirth")}</label>
                    <input
                      class="inputField"
                      type="date"
                      name="date"
                      id="date"
                      placeholder={t("global.register.dateOfBirth")}
                      style={{ color: "#ffffff" }}
                    />
                  </div>
                  <div className="w-100 mt-2">
                    <label htmlFor="Category">{t("global.register.categories")}</label>
                    <select name="cate" class=" inputField p-0 mt-3">
                                        <option value="1">
                                            Category
                                        </option>
                                        <option value="1">
                                            Web Design
                                        </option>
                                        <option value="1">
                                            Web Development
                                        </option>
                                        <option value="1">
                                            Graphic Design
                                        </option>
                                        <option value="1">
                                            Softwer Eng
                                        </option>
                                    </select>
                  </div>
                  <div className=" w-100 mt-2">
                    <label htmlFor="City">{t("global.register.city")}</label>
                    <select name="city" class=" inputField p-0 mt-3">
                                        <option value="1">
                                            Gada
                                        </option>
                                        <option value="1">
                                        Gada
                                        </option>
                                        <option value="1">
                                        Gada
                                        </option>
                                        <option value="1">
                                        Gada
                                        </option>
                                        <option value="1">
                                        Gada
                                        </option>
                                    </select>
                  </div>

                  {/* <div className="w-100 mt-2">
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
                  </div> */}
                  <div class="input-check remember-me">
                    <div class="checkbox-wrapper">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        name="save-for-next"
                        id="rememberMe"
                      />
                      <label for="rememberMe">{t("global.register.rememberMe")}</label>
                    </div>
                    {/* <div class="text">
                      {" "}
                      <a href="">{t("global.register.forgotPassword")}</a>{" "}
                    </div> */}
                  </div>
                 
                            <button type="button" class="theme-btn rounded-0 w-100 register-btn " data-bs-toggle="modal"
                                data-bs-target="#registrationModal">{t("global.register.createAccountBtn")}</button> 
                                <button type="button" className="loginBtn theme-btn rounded-0 mt-3" data-bs-toggle="modal" data-bs-target="#otpModal">
                                {t("global.register.loginBtn")}
                            </button>
                  <div class="orting-badge">{t("global.register.or")}</div>
                  <div>
                    <a class="another-option" href="https://www.google.com/">
                      <img src="/assets/img/google.png" alt="google" />
                      {t("global.register.continueWithGoogle")}
                    </a>
                  </div>
                  <div>
                    <a
                      class="another-option another-option-two"
                      href="https://www.facebook.com/"
                    >
                      <img src="/assets/img/facebook.png" alt="Facebook" />
                      {t("global.register.continueWithFacebook")}
                    </a>
                  </div>
                  <div class="form-check-3 d-flex align-items-center from-customradio-2 mt-3">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                    />
                    <label class="form-check-label">
                    {t("global.register.acceptTerms")}
                    </label>
                  </div>
                </div>

                <div class="banner">
                  {/* <button
                    type="button"
                    class="rounded-0 login-btn"
                    data-bs-toggle="modal"
                    data-bs-target="#loginModal"
                  >
                    Log in
                  </button>
                  <button
                    type="button"
                    class="theme-btn rounded-0 register-btn"
                    data-bs-toggle="modal"
                    data-bs-target="#registrationModal"
                  >
                    Create Account
                  </button> */}
                  <div class="signUpBg">
                    <img src="/assets/img/registrationbg.jpg" alt="signUpBg" />
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

export default Register;
