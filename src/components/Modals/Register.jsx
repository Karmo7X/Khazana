import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { RegisterApi } from "../../Api/Auth/AuthSlice";
import OTP from "./OTP";
import {
  Modal,
  Button,
  Form,
  Alert,
  InputGroup,
  Row,
  Col,
} from "react-bootstrap";

const Register = ({showmodalregist}) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    password: "",
    passwordConfirm: "",
    birthday: "",
    interestedCategory: "",
    city: "",
    address: "16.Elbostan Street, Shoubra El-Khema, Qalyubia",
  });
  const [error, setError] = useState(null);
  const [showregister, setShowRegister] = useState(false);


  useEffect(()=>{
    setShowRegister(showmodalregist)
  },[showmodalregist])
  const handleChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    dispatch(RegisterApi(formData)).then((res) => {
      if (res.payload?.code === 201) {
        setShowModal(true);
      } else {
        setShowModal(false);
        setError(res.payload);
      }
    });
  };


    
  
    const handleClose = () => setShowRegister(false);
    const handleShow = () => setShowRegister(true);
  

  return (
    <>
      <Modal show={showregister} onHide={handleClose}>
       
        <Modal.Body>
          <div className="close-btn">
                      <Button variant="close" onClick={handleClose} aria-label="Close" />
                    </div>
        <div class="identityBox">
                <div class="form-wrapper w-100">
                  <h1 id="registrationModalLabel">
                    {t("global.register.createAccount")}
                  </h1>
                  <div className="w-100 mt-2">
                    <label htmlFor="name">
                      {t("global.register.userName")}
                    </label>
                    <input
                      class="inputField"
                      type="text"
                      name="name"
                      id="name"
                      placeholder={t("global.register.userName")}
                      onChange={(e) => {
                        handleChange(e.target.name,e.target.value);
                      }}
                      style={{ color: "#000" }}
                    />
                  </div>
                  <div className="w-100 mt-2">
                    <label htmlFor="date">
                      {t("global.register.dateOfBirth")}
                    </label>
                    <input
                      class="inputField"
                      type="date"
                      name="date"
                      id="date"
                      placeholder={t("global.register.dateOfBirth")}
                      style={{ color: "#000" }}
                      onChange={(e) => {
                        handleChange(e.target.name,e.target.value);
                      }}
                    />
                  </div>
                  <div className="w-100 mt-2">
                    <label htmlFor="Category">
                      {t("global.register.categories")}
                    </label>
                    <select
                      name="interestedCategory"
                      
                      className="inputField p-0 mt-3"
                      onChange={(e) => {
                        handleChange(e.target.name,e.target.value);
                      }}
                      style={{ outline:'none',boxShadow:"none" }}
                    >
                      <option selected value=''>......</option>
                      <option value="Category">Category</option>
                      <option value="Web Design">Web Design</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Graphic Design">Graphic Design</option>
                      <option value="Software Eng">Software Eng</option>
                    </select>
              
                  </div>
                  <div className="w-100 mt-2">
                    <label htmlFor="City">{t("global.register.city")}</label>
                    <select
                      name="city"
                      className="inputField p-0 mt-3"
                      onChange={(e) => {
                        handleChange(e.target.name,e.target.value);
                      }}
                      style={{ outline:'none',boxShadow:"none" }}
                    >
                        <option selected value=''>......</option>
                      <option value="Gada">Gada</option>
                      <option value="Riyadh">Riyadh</option>
                      <option value="Jeddah">Jeddah</option>
                      <option value="Dammam">Dammam</option>
                    </select>
                  </div>

                  <div className="w-100 mt-2">
                    <label htmlFor="password">
                      {t("global.register.password")}
                    </label>
                    <input
                      class="inputField"
                      type="password"
                      name="password"
                      placeholder={t("global.register.password")}
                      onChange={(e) => {
                        handleChange(e.target.name,e.target.value);
                      }}
                      style={{ color: "#000" }}
                    />
                  </div>
                  <div className="w-100 mt-2">
                    <label htmlFor="confirmpassword">
                      {t("global.register.confirmPassword")}
                    </label>
                    <input
                      class="inputField"
                      type="password"
                      name="confirmpassword"
                      placeholder={t("global.register.confirmPassword")}
                      onChange={(e) => {
                        handleChange(e.target.name,e.target.value);
                      }}
                      style={{ color: "#000" }}
                    />
                  </div>
                  <div class="input-check remember-me">
                    <div class="checkbox-wrapper">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        name="save-for-next"
                        id="rememberMe"
                      />
                      <label for="rememberMe">
                        {t("global.register.rememberMe")}
                      </label>
                    </div>
                    {/* <div class="text">
                      {" "}
                      <a href="">{t("global.register.forgotPassword")}</a>{" "}
                    </div> */}
                  </div>
                  {error?.message &&(<>
                  
                     <div class="alert alert-danger d-flex align-items-center" role="alert">
               <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
                 <div>
            {error?.message}
             </div>
             </div>
                  </>)}
               
                  <button
                    type="button"
                    class="theme-btn rounded-0 w-100 register-btn "
                    data-bs-toggle="modal"
                     
                onClick={handleSubmit} // Trigger API call on form submit
                  >
                    {t("global.register.createAccountBtn")}
                  </button>
                  <button
                    type="button"
                    className="loginBtn theme-btn rounded-0 mt-3"
                    data-bs-toggle="modal"
                    data-bs-target="#loginModal"
                  >
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
        </Modal.Body>

        
      </Modal>

      {showModal && <OTP />}
    </>
  );
};

export default Register;
