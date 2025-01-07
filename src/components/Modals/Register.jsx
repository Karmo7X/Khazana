import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
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
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { GetCategoryApi } from "../../Api/Category/CategorySlice";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { GetCityApi } from "../../Api/App/App";
const Register = ({ showmodalregist }) => {
  const animatedComponents = makeAnimated();
  const { t } = useTranslation();
  const loading = useSelector((state) => state.auth.status);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    password: "",
    passwordConfirm: "",
    birthday: "",
    interestedCategory: [],
    city: "",
    address: "16.Elbostan Street, Shoubra El-Khema, Qalyubia",
  });
  const [category, setCategory] = useState([]);
  const [cities, setCities] = useState([]);
  const [error, setError] = useState(null);
  const [successmessage, setSuccessmessage] = useState();
  const [errorvalid, setErrorvalid] = useState();
  const [showregister, setShowRegister] = useState(false);
  const [showpass, setShowpass] = useState(false);
  const [showpassconfirm, setShowpassconfirm] = useState(false);

  useEffect(() => {
    setShowRegister(showmodalregist);
  }, [showmodalregist]);
  const handleChange = (name, value) => {
    // If the field is "birthday", format the date
    if (name === "birthday") {
      const formattedDate = new Date(value).toLocaleDateString("en-GB").split('/').join('-');
      setFormData((prevData) => ({
        ...prevData,
        [name]: formattedDate,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
  const validate = (value) => {
    const error = {};
    // Name validation
    if (!value.name) {
      error.name = t("global.validation_message.name.required");
    } else if (value.name.length < 3) {
      error.name = t("global.validation_message.name.minLength");
    } else if (value.name.length > 50) {
      error.phone = t("global.validation_message.name.maxLength"); // Maximum 15 digits
    }

    // Phone validation
    if (!value.phone) {
      error.phone = t("global.validation_message.phone.required");
    } else if (!/^5\d{8}$/.test(value.phone)) {
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

    // Password Confirm validation
    if (!value.passwordConfirm) {
      error.passwordConfirm = t(
        "global.validation_message.passwordConfirm.required"
      );
    } else if (value.passwordConfirm !== value.password) {
      error.passwordConfirm = t(
        "global.validation_message.passwordConfirm.oneOf"
      );
    }
    // Birthday validation
    if (!value.birthday) {
      error.birthday = t("global.validation_message.birthday.required");
    } else {
      const today = new Date();
      const birthdayDate = new Date(value.birthday);

      // Check if the date is in the future
      if (birthdayDate >= today) {
        error.birthday = t("global.validation_message.birthday.max");
      }

      // Check minimum age (12 years)
      const minAgeDate = new Date();
      minAgeDate.setFullYear(today.getFullYear() - 12); // Subtract 12 years
      if (birthdayDate > minAgeDate) {
        error.birthday = t("global.validation_message.birthday.minAge");
      }
    }

    // Interested Category validation
    if (!value.interestedCategory) {
      error.interestedCategory = t(
        "global.validation_message.interestedCategory.required"
      );
    }
    // City validation
    if (!value.city) {
      error.city = t("global.validation_message.city.required");
    }
    return error;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const error_submit = validate(formData);

    if (Object.keys(error_submit).length === 0) {
      dispatch(RegisterApi(formData)).then((res) => {
        if (res.payload?.code === 201) {
          setSuccessmessage(res.payload?.message);
          setShowModal(true);
          
        } else {
          setShowModal(false);
         
          setError(res.payload?.message);
        }
      });
    } else {
      setErrorvalid(error_submit);
    }
  };

  const handleClose = () => setShowRegister(false);
  const handleShow = () => setShowRegister(true);

  // get category
  useEffect(() => {
    dispatch(GetCategoryApi()).then((res) => {
      if (res.payload?.code === 200) {
        setCategory(res.payload?.data?.categories);
      }
    });
    dispatch(GetCityApi()).then((res) => {
      if (res.payload?.code === 200) {
        setCities(res.payload?.data?.cities);
      }
    });
  }, []);
  const categoryoption = category.map((data) => ({
    value: data?.id,
    label: data?.title,
  }));
  return (
    <>
      <Modal show={showregister} onHide={handleClose}>
          <Modal.Body>  
          <div className="close-btn">
            <Button variant="close" onClick={handleClose} aria-label="Close" />
          </div>
            {showModal === false ?(<>
     
      
          <div class="identityBox">
            <form class="form-wrapper w-100 needs-validation" noValidate>
              <h1 id="registrationModalLabel">
                {t("global.register.createAccount")}
              </h1>
              <div className="w-100 mt-2">
                <label htmlFor="phone">
                  {t("global.register.phoneNumber")}
                </label>
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
              </div>

              <div className="w-100 mt-2">
                <label htmlFor="name">{t("global.register.userName")}</label>
                <input
                  className={` inputField  ${
                    errorvalid?.name ? "is-invalid" : "is-valid"
                  }`}
                  type="text"
                  name="name"
                  id="name"
                  placeholder={t("global.register.userName")}
                  onChange={(e) => {
                    handleChange(e.target.name, e.target.value);
                  }}
                  style={{ color: "#000" }}
                />
                {errorvalid?.name && (
                  <>
                    <div class="invalid-feedback">{errorvalid?.name}</div>
                  </>
                )}
              </div>
              <div className="w-100 mt-2">
                <label htmlFor="date">{t("global.register.dateOfBirth")}</label>
                <input
                  className={` inputField  ${
                    errorvalid?.birthday ? "is-invalid" : "is-valid"
                  }`}
                  type="date"
                  name="birthday"
                  id="date"
                  placeholder={t("global.register.dateOfBirth")}
                  style={{ color: "#000" }}
                  onChange={(e) => {
                    handleChange(e.target.name, e.target.value);
                  }}
                />
                {errorvalid?.birthday && (
                  <>
                    <div class="invalid-feedback">{errorvalid?.birthday}</div>
                  </>
                )}
              </div>
              <div className="w-100 mt-2">
                <label htmlFor="Category">
                  {t("global.register.categories")}
                </label>
                <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        isMulti
        name="interestedCategory"
        options={categoryoption}
        onChange={(selectedOptions) => {
          const values = selectedOptions.map(option => option.value); // Get array of selected option values
          handleChange("interestedCategory", values);
        }}
        className={`inputField p-0 mt-3 ${errorvalid?.interestedCategory ? "is-invalid" : "is-valid"}`}
        placeholder="......"
        styles={{
          control: (styles) => ({
            ...styles,
            outline: "none",
            boxShadow: "none",
          }),
        }}
      />

                {errorvalid?.interestedCategory && (
                  <>
                    <div class="invalid-feedback">
                      {errorvalid?.interestedCategory}
                    </div>
                  </>
                )}
              </div>
              <div className="w-100 mt-2">
                <label htmlFor="City">{t("global.register.city")}</label>
                <select
                  name="city"
                  className={` inputField p-0 mt-3  ${
                    errorvalid?.city ? "is-invalid" : "is-valid"
                  }`}
                  onChange={(e) => {
                    handleChange(e.target.name, e.target.value);
                  }}
                  style={{ outline: "none", boxShadow: "none" }}
                >
                  <option selected value="">
                    ......
                  </option>
                  {
                    cities.map((data,idx)=>{
                       return(<>
                         <option key={idx} value={data?.id}>{data?.title}</option>
                       
                       
                       </>)
                    })
                  }
                 
                </select>
                {errorvalid?.city && (
                  <>
                    <div class="invalid-feedback">{errorvalid?.city}</div>
                  </>
                )}
              </div>

              <div className="w-100 mt-2">
                <label htmlFor="password">
                  {t("global.register.password")}
                </label>
                <div className="d-flex  align-items-center ">
                  <input
                    className={` inputField  ${
                      errorvalid?.password ? "is-invalid" : "is-valid"
                    }`}
                    type={showpass === true ? "text" : "password"}
                    name="password"
                    placeholder={t("global.register.password")}
                    onChange={(e) => {
                      handleChange(e.target.name, e.target.value);
                    }}
                    style={{ color: "#000" }}
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
                    <div class="invalid-feedback">{errorvalid?.password}</div>
                  </>
                )}
              </div>

              <div className="w-100 mt-2">
                <label htmlFor="passwordConfirm">
                  {t("global.register.confirmPassword")}
                </label>
                <div className="d-flex  align-items-center ">
                  <input
                    className={` inputField  ${
                      errorvalid?.passwordConfirm ? "is-invalid" : "is-valid"
                    }`}
                    type={showpassconfirm === true ? "text" : "password"}
                    name="passwordConfirm"
                    placeholder={t("global.register.confirmPassword")}
                    onChange={(e) => {
                      handleChange(e.target.name, e.target.value);
                    }}
                    style={{ color: "#000" }}
                  />
                  <div>
                    {showpassconfirm === true ? (
                      <IoIosEye onClick={() => setShowpassconfirm(false)} />
                    ) : (
                      <IoIosEyeOff onClick={() => setShowpassconfirm(true)} />
                    )}
                  </div>
                </div>
                {errorvalid?.passwordConfirm && (
                  <>
                    <div class="invalid-feedback">
                      {errorvalid?.passwordConfirm}
                    </div>
                  </>
                )}
              </div>

              {/* <div class="input-check remember-me">
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
                <div class="text">
                      {" "}
                      <a href="">{t("global.register.forgotPassword")}</a>{" "}
                    </div>
              </div> */}
              {error?.message && (
                <>
                  <div
                    class="alert alert-danger d-flex align-items-center"
                    role="alert"
                  >
                    <svg
                      class="bi flex-shrink-0 me-2"
                      role="img"
                      aria-label="Danger:"
                    >
                      <use xlink:href="#exclamation-triangle-fill" />
                    </svg>
                    <div>{error?.message}</div>
                  </div>
                </>
              )}

              <button
                type="button"
                class="theme-btn mt-5 rounded-0 w-100 register-btn "
                onClick={(e) => handleSubmit(e)} // Trigger API call on form submit
              >
                {loading === 'loading' ? (<> 
                      
                      <div class="spinner-border text-light" role="status">
<span class="visually-hidden">Loading...</span>
</div>
                    </>):t("global.register.createAccountBtn")}
            
               
              </button>
              <button
                type="button"
                className="loginBtn theme-btn rounded-0 mt-3"
                onClick={() => {
                  handleClose();
                  localStorage.setItem("showlogin", true);
                }}
              >
                {t("global.register.loginBtn")}
              </button>
              {/* <div class="orting-badge">{t("global.register.or")}</div>
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
              </div> */}
            </form>

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
       
        
        </>):(<>
        
          <OTP  phonenum={formData?.phone} />
        </>)}
        </Modal.Body>
      </Modal>

     
    </>
  );
};

export default Register;
