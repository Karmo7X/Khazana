import React, { useState } from "react";
import { Modal, Button, Form, Image } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Register from "./Register";

const Login = () => {
  const { t } = useTranslation();
  const [formdata, setFormdata] = useState({
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };

  const [showLogin, setShowLogin] = useState(true);

  const handleClose = () => setShowLogin(false);
  const handleShow = () => setShowLogin(true);

  return (
    <>
      
      <Modal
        show={showLogin}
        onHide={handleClose}
        id="loginModal"
        aria-labelledby="loginModalLabel"
        backdrop="static"
        keyboard={false}
      >
        <Modal.Body>
          <div className="close-btn">
            <Button variant="close" onClick={handleClose} aria-label="Close" />
          </div>
          <div className="identityBox">
            <div className="form-wrapper w-100">
              <h1 id="loginModalLabel">{t("global.login.welcomeBack")}</h1>
              <Form>
              <input class="inputField" type="phone" name="email" placeholder={t("global.login.phoneNumber")}/>
              <input class="inputField" type="password" name="password" placeholder={t("global.login.enterPassword")}/>
                <div className="input-check remember-me mt-3">
                  <div class="checkbox-wrapper">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      name="save-for-next"
                      id="saveForNext"
                    />
                    <label for="saveForNext">
                      {t("global.login.rememberMe")}
                    </label>
                  </div>
                  <div class="text">
                    <Button
                      type="button"
                      className="text"
                      variant="link"
                      data-bs-toggle="modal"
                      data-bs-target="#forgetModal"
                    >
                      {t("global.login.forgotPassword")}
                    </Button>
                  </div>
                </div>
                <button
                  type="button"
                  className="loginBtn theme-btn rounded-0 mt-3"
                  onClick={() => console.log("Login clicked")}
                >
                  {t("global.login.login")}
                </button>
                <button
                  type="button"
                  className="theme-btn rounded-0 w-100 register-btn mt-3"
                  data-bs-toggle="modal"
                  data-bs-target="#registrationModal"
                  onClick={handleClose}
                >
                  {t("global.login.createAccount")}
                </button>
              </Form>
              <div className="orting-badge">{t("global.login.or")}</div>
              <div>
                <a className="another-option" href="https://www.google.com/">
                  <Image src="/assets/img/google.png" alt="google" />
                  {t("global.login.continueWithGoogle")}
                </a>
              </div>
              <div>
                <a
                  className="another-option another-option-two"
                  href="https://www.facebook.com/"
                >
                  <Image src="/assets/img/facebook.png" alt="facebook" />
                  {t("global.login.continueWithFacebook")}
                </a>
              </div>
              <div class="form-check-3 d-flex align-items-center from-customradio-2 mt-3">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                />
                <label class="form-check-label">
                  {t("global.login.acceptTerms")}
                </label>
              </div>
            </div>
            <div className="banner">
              <div className="loginBg">
                <Image src="/assets/img/signUpbg.jpg" alt="signUpBg" fluid />
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {showLogin === false &&(<Register/>)}
    </>
  );
};

export default Login;
