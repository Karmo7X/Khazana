import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { ForgotPasswordApi } from "../../Api/Auth/AuthSlice";
import ResetPassword from "./Restpassword";
import OTPForgetpass from "./OTPForgetpass";
const Forgetpassword = () => {
  const { t, i18n } = useTranslation();
  const [formdata, setformdata] = useState({
    phone: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [errorvalid, setErrorvalid] = useState();
  const [successmessage, setSuccessmessage] = useState();
  const [errormessg, setErrormessg] = useState(null);
  const loading = useSelector((state) => state.auth.status);
  const dispatch = useDispatch();

  const handleChange = (name, value) => {
    setformdata({ ...formdata, [name]: value });
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

    return error;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const error_submit = validate(formdata);

    if (Object.keys(error_submit).length === 0) {
      dispatch(ForgotPasswordApi(formdata)).then((res) => {
      
        if (res.payload?.code === 200) {
          setSuccessmessage(res.payload?.message);
         setShowModal(true)
          setErrorvalid(null);

          
        }else {
          setErrormessg(res.payload?.message);
          
        }
      });
    } else {
      setErrorvalid(error_submit);
      setShowModal(false)
    }
  };

  return (
    <>
     {showModal === false ? (<>
     
      <div className="identityBox">
        <div className="form-wrapper d-flex align-items-center justify-content-center flex-column gap-5">
          <div className="d-flex align-items-center justify-content-center flex-column text-center">
            <h1 id="loginModalLabel">
              {t("global.forgetpass.recoverPassword")}
            </h1>
            <p className="w-75">{t("global.forgetpass.description")}</p>
          </div>

          {/* Phone Input */}
          <Form.Control
            className={` inputField   ${
              errorvalid?.phone ? "is-invalid" : "is-valid"
            }`}
            type="text"
            name="phone"
            placeholder={t("global.forgetpass.phoneNumber")}
           
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
          {/* Submit Button */}
          <Button
            className="theme-btn rounded-0 w-100 mt-3"
            onClick={(e)=>handleSubmit(e)}
          >
            {loading === 'loading' ? (<> 
                      
                      <div class="spinner-border text-light" role="status">
<span class="visually-hidden">Loading...</span>
</div>
                    </>):t("global.forgetpass.submit")}
                
           
          </Button>
        </div>

        <div className="banner">
          <div className="loginBg">
            <img src="/assets/img/signUpbg.jpg" alt="signUpBg" />
          </div>
        </div>
      </div>
     </>):(<>

     <OTPForgetpass phonenum={formdata?.phone}/>
     
     </>)}
     
    </>
  );
};

export default Forgetpassword;
