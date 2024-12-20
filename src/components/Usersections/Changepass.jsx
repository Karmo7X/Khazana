import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Modal, Button, Form } from "react-bootstrap";
import Cookies from "js-cookie";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { ChangeUserpassApi } from "../../Api/User/UserSlice";
const Changepass = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.user.status);
   const [formData, setFormData] = useState({
     currentPassword:"",
     password: "",
     confirmPassword: "",
   
   });

   console.log(formData)
    const [successmessage, setSuccessmessage] = useState();
    const [showpasscurrent, setShowpasscurrent] = useState(false);
     const [showpass, setShowpass] = useState(false);
     const [showpassconfirm, setShowpassconfirm] = useState(false);
     const [errorvalid, setErrorvalid] = useState();
     const [errormessg, setErrormessg] = useState(null);
     
      // handle date from inputs
     const handleChange = (name, value) => {
      setFormData({ ...formData, [name]: value });
    };
     // validate data 
       const validate = (value) => {
         const error = {};
          // current Password validation
          if (!value.currentPassword) {
            error.currentPassword = t("global.validation_message.password.required");
          } else if (!/^[^\s]{8,20}$/.test(value.currentPassword)) {
            if (value.currentPassword.length < 8) {
              error.currentPassword = t("global.validation_message.password.minLength");
            } else if (value.currentPassword.length > 20) {
              error.currentPassword = t("global.validation_message.password.maxLength");
            } else {
              error.currentPassword = t("global.validation_message.password.pattern"); // No spaces allowed
            }
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
         if (!value.confirmPassword) {
           error.confirmPassword = t(
             "global.validation_message.passwordConfirm.required"
           );
         } else if (value.confirmPassword !== value.password) {
           error.confirmPassword = t(
             "global.validation_message.passwordConfirm.oneOf"
           );
         }
     
         return error;
       };


        // Handle form submit
         const handleSubmit = (e) => {
           e.preventDefault();
           const error_submit = validate(formData);
       
           if (Object.keys(error_submit).length === 0) {
             dispatch(ChangeUserpassApi(formData)).then((res) => {
              if (res.payload?.code === 200) {
                        setSuccessmessage(res.payload?.message);
                        Cookies.remove("token");
                        setErrorvalid(null);
                        setErrormessg(null);
                        window.location.reload();
                        setFormData({})
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
    <div className="container mt-5">
      <div className="identityBox">
            <div className="form-wrapper d-flex align-items-center justify-content-center flex-column gap-5 w-100">
              <div className="d-flex align-items-center justify-content-center flex-column text-center">
                <h1>{t("global.profile.changePassword")}</h1>
                {/* <p className="w-75">{t("global.resetpass.description")}</p> */}
              </div>
    
             
              <Form className="w-75 mt-5 needs-validation " onSubmit={handleSubmit}>
               {/* current Password Input */}
              <Form.Group>
                  <div className="w-100 mt-2 mb-5">
                    <label htmlFor="password">
                      {t("global.profile.currentPassword")}
                    </label>
                    <div className="d-flex  align-items-center ">
                      <input
                        className={` form-control border border-0 border-bottom  rounded-0    `}
                        type={showpasscurrent === true ? "text" : "password"}
                        name="currentPassword"
                        placeholder={t("global.profile.currentPassword")}
                        onChange={(e) => {
                          handleChange(e.target.name, e.target.value);
                        }}
                        style={{ color: "#000" }}
                      />
                      <div>
                        {showpasscurrent === true ? (
                          <IoIosEye className="fs-5" onClick={() => setShowpasscurrent(false)} />
                        ) : (
                          <IoIosEyeOff className="fs-5" onClick={() => setShowpasscurrent(true)} />
                        )}
                      </div>
                    </div>
                    {errorvalid?.currentPassword && (
                      <>
                        <div class="text-danger">{errorvalid?.currentPassword}</div>
                      </>
                    )}
                  </div>
                </Form.Group>
                 {/*  Password  Input */}
                <Form.Group>
                  <div className="w-100 mt-2 mb-5">
                    <label htmlFor="password">
                      {t("global.register.password")}
                    </label>
                    <div className="d-flex  align-items-center ">
                      <input
                        className={` form-control border border-0 border-bottom  rounded-0    `}
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
                          <IoIosEye className="fs-5" onClick={() => setShowpass(false)} />
                        ) : (
                          <IoIosEyeOff className="fs-5" onClick={() => setShowpass(true)} />
                        )}
                      </div>
                    </div>
                    {errorvalid?.password && (
                      <>
                        <div class="text-danger">{errorvalid?.password}</div>
                      </>
                    )}
                  </div>
                </Form.Group>
    
                {/* Confirm Password Input */}
                <Form.Group className="mt-2 mb-5">
                  <div className="w-100 mt-2">
                    <label htmlFor="passwordConfirm">
                      {t("global.register.confirmPassword")}
                    </label>
                    <div className="d-flex  align-items-center ">
                      <input
                        className={` form-control border border-0 border-bottom  rounded-0  `}
                        type={showpassconfirm === true ? "text" : "password"}
                        name="confirmPassword"
                        placeholder={t("global.register.confirmPassword")}
                        onChange={(e) => {
                          handleChange(e.target.name, e.target.value);
                        }}
                        style={{ color: "#000" }}
                      />
                      <div>
                        {showpassconfirm === true ? (
                          <IoIosEye className="fs-5" onClick={() => setShowpassconfirm(false)} />
                        ) : (
                          <IoIosEyeOff className="fs-5" onClick={() => setShowpassconfirm(true)} />
                        )}
                      </div>
                    </div>
                    {errorvalid?.confirmPassword && (
                      <>
                        <div class="text-danger">
                          {errorvalid?.confirmPassword}
                        </div>
                      </>
                    )}
                  </div>
                </Form.Group>
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
                <button
                  
                  type="submit"
                  className="theme-btn btn rounded-0 w-100 mt-3"
                >
                  {loading === 'loading' ? (<> 
                          
                          <div class="spinner-border text-light" role="status">
    <span class="visually-hidden">Loading...</span>
    </div>
                        </>):t("global.resetpass.submit")}
                  
                </button>
              </Form>
            </div>
    
          
          </div>
    </div>
    
    </>
  )
}

export default Changepass