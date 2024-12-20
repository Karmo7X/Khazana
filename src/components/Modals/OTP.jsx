import React, { useState, useRef, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { ResendCodeApi, VerifyPhoneApi } from "../../Api/Auth/AuthSlice";
import Cookies from "js-cookie";
const OTP = ({ phonenum }) => {
  const { t } = useTranslation();
  const loading = useSelector((state) => state.auth.status);
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const [timer, setTimer] = useState(30); // Countdown time in seconds
  const [canResend, setCanResend] = useState(false);
  const [successmessage, setSuccessmessage] = useState();
  const [error, setError] = useState(null);
  const inputRefs = useRef([]);
  const dispatch = useDispatch();
  useEffect(() => {
    inputRefs.current[0]?.focus(); // Auto-focus the first input on load
  }, []);

  // Start countdown timer on component load or when resend is clicked
  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(countdown);
    } else {
      setCanResend(true);
    }
  }, [timer]);

  const handleResend = () => {
   const data={
      'phone':phonenum
    }
    setOtp(new Array(4).fill("")); // Clear OTP fields
    setTimer(30); // Reset timer to 30 seconds
    setCanResend(false); // Disable resend button until countdown completes
    inputRefs.current[0].focus(); // Refocus the first input
   dispatch(ResendCodeApi(data))
  };

  const handleChange = (element, index) => {
    const value = element.value.replace(/\D/, ""); // Only allow numbers
    setOtp([...otp.slice(0, index), value, ...otp.slice(index + 1)]);

    // Auto-focus the next input if a number was entered
    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (event, index) => {
    if (event.key === "Backspace" && otp[index] === "") {
      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      phone: phonenum,
      activateCode: otp.join(""),
    };
    dispatch(VerifyPhoneApi(data)).then((res) => {
      if (res.payload?.code === 200) {
        setSuccessmessage(res.payload?.message);
        Cookies.set("token", res.payload?.data?.token);
        window.location.reload();
      } else {
        setError(res.payload?.message);
      }
    });
  };
  return (
    <>
      <div class="identityBox">
        <div class="form-wrapper d-flex align-items-center justify-content-center flex-column gap-5">
          <div className="d-flex align-items-center justify-content-center flex-column text-center">
            <h1 id="loginModalLabel">{t("global.otp.verifyPhone")}</h1>
            <p className="w-75">{t("global.otp.enterOtpCode")}</p>
          </div>

          <div
            className="otp-inputs d-flex align-items-center justify-content-center gap-2"
            style={{ direction: "ltr" }}
          >
            {otp.map((data, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                className="form-control  otp-input"
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                ref={(el) => (inputRefs.current[index] = el)}
                style={{
                  width: "50px",
                  height: "50px",
                  margin: "0 5px",
                  textAlign: "center",
                }}
              />
            ))}
          </div>

          <div className="mt-3 ">
            {canResend ? (
              <div className="d-flex align-items-center justify-content-center flex-column">
                <p>{t("global.otp.didntReceiveCode")}</p>
                <button className="btn btn-link" onClick={handleResend}>
                  {t("global.otp.resendCode")}
                </button>
              </div>
            ) : (
              <span>
                {t("global.otp.resendTimer")} {timer}
              </span>
            )}
          </div>
          {successmessage && (
            <>
              <div class="alert alert-success" role="alert">
                {successmessage}
              </div>
            </>
          )}
          {error && (
            <>
              <div class="alert alert-danger" role="alert">
                {error}
              </div>
            </>
          )}

          <button
            className="theme-btn rounded-0 w-100  mt-3"
            onClick={(e) => handleSubmit(e)}
          >
             {loading === 'loading' ? (<> 
                      
                      <div class="spinner-border text-light" role="status">
<span class="visually-hidden">Loading...</span>
</div>
                    </>):t("global.otp.verifyOtp")}
            
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
    </>
  );
};

export default OTP;
