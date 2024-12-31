import React, { useEffect, useState } from "react";
import { Modal, Button, Form, Image } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Register from "./Register";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { LoginApi } from "../../Api/Auth/AuthSlice";
import Cookies from "js-cookie";
import Forgetpassword from "./Forgetpasswor";
const Login = ({ showmodal }) => {
  const { t } = useTranslation();
  const [formdata, setFormdata] = useState({
    phone: "",
    password: "",
  });
  const loading = useSelector((state) => state.auth.status);
  const [showpass, setShowpass] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [showforget, setShowforget] = useState(false);
  const [showregister_component, setShowregister_component] = useState(false);
  const dispatch = useDispatch();
  const [errorvalid, setErrorvalid] = useState();
  const [successmessage, setSuccessmessage] = useState();
  const [errormessg, setErrormessg] = useState(null);
  const showlogin = localStorage.getItem("showlogin");
  const handleClose = () => {
    setShowLogin(false);
    localStorage.setItem("showlogin", false);
  };
  const handleShow = () => setShowLogin(true);
  const handleShowforget = () => setShowforget(true);
  const handleChange = (name, value) => {
    setFormdata({ ...formdata, [name]: value });
  };

  // useEffect(() => {
  //     (showlogin);
  // }, [showlogin]);
  // for show register with button go to register

  const handleShowregister = () => {
    setShowregister_component(true);
    setShowLogin(false);
  };

  const validate = (value) => {
    const error = {};

    // Phone validation
    if (!value.phone) {
      error.phone = t("global.validation_message.phone.required");
    } else if (!/^\d+$/.test(value.phone)) {
      error.phone = t("global.validation_message.phone.pattern"); // Must be numeric
    } else if (value.phone.length < 10) {
      error.phone = t("global.validation_message.phone.minLength"); // Minimum 10 digits
    } else if (value.phone.length > 15) {
      error.phone = t("global.validation_message.phone.maxLength"); // Maximum 15 digits
    }

    // Password validation
    if (!value.password) {
      error.password = t("global.validation_message.password.required");
    } else if (!/^[^\s]{8,20}$/.test(value.password)) {
      if (value.password.length < 8) {
        error.password = t("global.validation_message.password.minLength");
      } else if (value.password.length > 20) {
        error.password = t("global.validation_message.password.maxLength");
      } else {
        error.password = t("global.validation_message.password.pattern"); // No spaces allowed
      }
    }

    return error;
  };

  const handleSubmit = async (e) => {
   
    const error_submit = validate(formdata);

    if (Object.keys(error_submit).length === 0) {
      dispatch(LoginApi(formdata)).then((res) => {
        if (res.payload?.code === 200) {
          setSuccessmessage(res.payload?.message);
          Cookies.set("token", res.payload?.data?.token);
          setErrorvalid(null);
          setErrormessg(null);
          window.location.reload();
        } else {
          setSuccessmessage(null);
          setErrormessg(res.payload?.message);
        }
      });
    } else {
      setErrorvalid(error_submit);
    }
  };
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
          {showforget === false ? (
            <>
              <div className="identityBox">
                <div className="form-wrapper w-100">
                  <h1 id="loginModalLabel">{t("global.login.welcomeBack")}</h1>
                  <Form className="needs-validation" noValidate>
                    <input
                      className={` inputField  ${
                        errorvalid?.phone ? "is-invalid" : "is-valid"
                      }`}
                      type="phone"
                      name="phone"
                      placeholder={t("global.login.phoneNumber")}
                      style={{ color: "#000" }}
                      onChange={(e) => {
                        handleChange(e.target.name, e.target.value);
                      }}
                      required
                    />

                    {errorvalid?.phone && (
                      <>
                        <div class="invalid-feedback">{errorvalid?.phone}</div>
                      </>
                    )}
                    <div className="d-flex  align-items-center ">
                      <input
                        className={` inputField  ${
                          errorvalid?.password ? "is-invalid" : "is-valid"
                        }`}
                        type={showpass === true ? "text" : "password"}
                        name="password"
                        placeholder={t("global.login.enterPassword")}
                        style={{ color: "#000" }}
                        onChange={(e) => {
                          handleChange(e.target.name, e.target.value);
                        }}
                        required
                      />
                      <div>
                        {showpass === true ? (
                          <IoIosEye onClick={() => setShowpass(false)} />
                        ) : (
                          <IoIosEyeOff onClick={() => setShowpass(true)} />
                        )}
                      </div>
                    </div>

                    {errorvalid?.password && (
                      <>
                        <div class="invalid-feedback">
                          {errorvalid?.password}
                        </div>
                      </>
                    )}
                    <div className="input-check remember-me mt-3">
                      <div class="checkbox-wrapper">
                        {/* <input
                      type="checkbox"
                      class="form-check-input"
                      name="save-for-next"
                      id="saveForNext"
                    />
                    <label for="saveForNext">
                      {t("global.login.rememberMe")}
                    </label> */}
                      </div>
                      <div class="text">
                        <Button
                          type="button"
                          className="text"
                          variant="link"
                          onClick={() => handleShowforget()}
                        >
                          {t("global.login.forgotPassword")}
                        </Button>
                      </div>
                    </div>
                    {successmessage && (
                      <>
                        <div class="alert alert-success" role="alert">
                          {successmessage}
                        </div>
                      </>
                    )}
                    {errormessg && (
                      <>
                        <div class="alert alert-danger" role="alert">
                          {errormessg}
                        </div>
                      </>
                    )}
                    <button
                      type="button"
                      className="loginBtn mt-5 theme-btn rounded-0 mt-3"
                      onClick={(e) => handleSubmit(e)}
                    >
                      {loading === 'loading' ? (<> 
                      
                        <div class="spinner-border text-light" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
                      </>):t("global.login.login")}
                    </button>
                    <button
                      type="button"
                      className="theme-btn rounded-0 w-100 register-btn mt-3"
                      data-bs-toggle="modal"
                      data-bs-target="#registrationModal"
                      onClick={handleShowregister}
                    >
                      {t("global.login.createAccount")}
                    </button>
                  </Form>
                  <div className="orting-badge">{t("global.login.or")}</div>
                  <div>
                    <a
                      className="another-option"
                      href="https://www.google.com/"
                    >
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
                  {/* <div class="form-check-3 d-flex align-items-center from-customradio-2 mt-3">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                    />
                    <label class="form-check-label">
                      {t("global.login.acceptTerms")}
                    </label>
                  </div> */}
                </div>
                <div className="banner">
                  <div className="loginBg">
                    <Image
                      src="/assets/img/signUpbg.jpg"
                      alt="signUpBg"
                      fluid
                    />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <Forgetpassword />
          )}
        </Modal.Body>
      </Modal>

      {showregister_component === true && (
        <Register showmodalregist={showregister_component} />
      )}
    </>
  );
};

export default Login;
