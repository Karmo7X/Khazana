import React from 'react'
import { useTranslation } from "react-i18next";
const Login = () => {
    const { t, i18n } = useTranslation();
  return (
    <>
    <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="close-btn">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="identityBox">
                        <div class="form-wrapper">
                            <h1 id="loginModalLabel">{t("global.login.welcomeBack")}</h1>
                            <input class="inputField" type="phone" name="email" placeholder={t("global.login.phoneNumber")}/>
                            <input class="inputField" type="password" name="password" placeholder={t("global.login.enterPassword")}/>
                            <div class="input-check remember-me">
                                <div class="checkbox-wrapper">
                                    <input type="checkbox" class="form-check-input" name="save-for-next"
                                        id="saveForNext"/>
                                    <label for="saveForNext">{t("global.login.rememberMe")}</label>
                                </div>
                                <div class="text"><button type="button" className="text" data-bs-toggle="modal" data-bs-target="#forgetModal">
                                {t("global.login.forgotPassword")}
                            </button> </div>
                            </div>
                           
                            <button type="button" className="loginBtn theme-btn rounded-0" data-bs-toggle="modal" data-bs-target="#otpModal">
                            {t("global.login.login")}
                            </button>
                            <button type="button" class="theme-btn rounded-0 w-100 register-btn mt-3" data-bs-toggle="modal"
                                data-bs-target="#registrationModal">{t("global.login.createAccount")}</button>
                            <div class="orting-badge">
                            {t("global.login.or")}
                            </div>
                            <div>
                                <a class="another-option" href="https://www.google.com/">
                                    <img src="/assets/img/google.png" alt="google"/>
                                    {t("global.login.continueWithGoogle")}
                                </a>
                            </div>
                            <div>
                                <a class="another-option another-option-two" href="https://www.facebook.com/">
                                    <img src="/assets/img/facebook.png" alt="google"/>
                                    {t("global.login.continueWithFacebook")}
                                </a>
                            </div>

                            <div class="form-check-3 d-flex align-items-center from-customradio-2 mt-3">
                                <input class="form-check-input" type="radio" name="flexRadioDefault"/>
                                <label class="form-check-label">
                                {t("global.login.acceptTerms")}
                                </label>
                            </div>
                        </div>

                        <div class="banner">
                            {/* <button type="button" class="rounded-0 login-btn" data-bs-toggle="modal"
                                data-bs-target="#loginModal">Log in</button> */}
                            {/* <button type="button" class="theme-btn rounded-0 register-btn" data-bs-toggle="modal"
                                data-bs-target="#registrationModal">Create
                                Account</button> */}
                            <div class="loginBg">
                                <img src="/assets/img/signUpbg.jpg" alt="signUpBg"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Login