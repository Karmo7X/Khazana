import React, { useState, useRef, useEffect } from 'react';
const OTP = () => {
    const [otp, setOtp] = useState(new Array(6).fill(""));
  const [timer, setTimer] = useState(30); // Countdown time in seconds
  const [canResend, setCanResend] = useState(false);
  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current[0].focus(); // Auto-focus the first input on load
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
    setOtp(new Array(6).fill("")); // Clear OTP fields
    setTimer(30); // Reset timer to 30 seconds
    setCanResend(false); // Disable resend button until countdown completes
    inputRefs.current[0].focus(); // Refocus the first input
    console.log('OTP resent');
  };

  const handleChange = (element, index) => {
    const value = element.value.replace(/\D/, ''); // Only allow numbers
    setOtp([...otp.slice(0, index), value, ...otp.slice(index + 1)]);

    // Auto-focus the next input if a number was entered
    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (event, index) => {
    if (event.key === 'Backspace' && otp[index] === "") {
      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };
  
    return (
      <div
        className="modal fade"
        id="otpModal"
        tabIndex="-1"
        aria-labelledby="otpModalLabel"
        aria-hidden="true"
      >
       
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="close-btn">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="identityBox">
                        <div class="form-wrapper d-flex align-items-center justify-content-center flex-column gap-5">
                            <div className='d-flex align-items-center justify-content-center flex-column text-center'>
                            <h1 id="loginModalLabel">Verify Phone</h1>
                            <p className='w-75'>Enter the 4-digit code we sent to your WhatsApp number to complete the order</p>
                            </div>
                           
                            <div className="otp-inputs d-flex align-items-center justify-content-center gap-2">
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
                    style={{ width: '50px',height:'50px', margin: '0 5px', textAlign: 'center' }}
                  />
                ))}
              </div>

              <div className="mt-3 ">
                {canResend ? (
                    <div className='d-flex align-items-center justify-content-center flex-column'>
                        <p>
                         Didn't receive the verification code?
                    </p>
                  <button className="btn btn-link" onClick={handleResend}>
                  
                     Resend code
                  </button>
                    </div>
                    
                ) : (
                  <span>Resend code in {timer} seconds</span>
                )}
              </div>
              <button className="theme-btn rounded-0 w-100  mt-3" onClick={() => console.log('OTP:', otp.join(''))}>
                Verify OTP
              </button>
                        </div>

                        <div class="banner">
                            {/* <button type="button" class="rounded-0 login-btn" data-bs-toggle="modal"
                                data-bs-target="#loginModal">Log in</button>
                            <button type="button" class="theme-btn rounded-0 register-btn" data-bs-toggle="modal"
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
    );

}

export default OTP