import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import { baseurl, lang } from "../../global";

const initialState = {
  data: null,
  status: false,
};

export const RegisterApi = createAsyncThunk("auth/register", async (data) => {
  try {
    const res = await axios.post(`${baseurl}/userAuth/signup`, data, {
      headers: {
        lang: lang,
      },
    });

    return res.data;
  } catch (err) {
    // console.error(err.response.data)
  }
});
export const LoginApi = createAsyncThunk("auth/Login", async (data) => {
  try {
    const res = await axios.post(`${baseurl}/userAuth/login`, data, {
      headers: {
        lang: lang,
      },
    });

    return res.data;
  } catch (err) {
    // console.error(err.response.data)
    return err.response.data;
  }
});
export const VerifyPhoneApi = createAsyncThunk(
  "auth/verifyPhone",
  async (data) => {
    try {
      const res = await axios.post(`${baseurl}/userAuth/verifyPhone`, data, {
        headers: {
          lang: lang,
        },
      });

      return res.data;
    } catch (err) {
      // console.error(err.response.data)
      return err.response.data;
    }
  }
);

export const VerifyCodeApi = createAsyncThunk(
  "auth/verifyCode",
  async (data) => {
    try {
      const res = await axios.post(`${baseurl}/userAuth/verifyCode`, data, {
        headers: {
          lang: lang,
        },
      });

      return res.data;
    } catch (err) {
      // console.error(err.response.data)
      return err.response.data;
    }
  }
);
export const ResendCodeApi = createAsyncThunk(
  "auth/resendCode",
  async (data) => {
    try {
      const res = await axios.post(`${baseurl}/userAuth/resendCode`, data, {
        headers: {
          lang: lang,
        },
      });

      return res.data;
    } catch (err) {
      // console.error(err.response.data)
      return err.response.data;
    }
  }
);
export const ForgotPasswordApi = createAsyncThunk(
  "auth/forgotPassword",
  async (phone) => {
    try {
      const res = await axios.post(
        `${baseurl}/userAuth/forgotPassword`,
        phone,
        {
          headers: {
            lang: lang,
          },
        }
      );

      return res.data;
    } catch (err) {
      // console.error(err.response.data)
      return err.response.data;
    }
  }
);
export const ResetPasswordApi = createAsyncThunk(
  "auth/resetPassword",
  async (data) => {
    try {
      const res = await axios.patch(`${baseurl}/userAuth/resetPassword`, data, {
        headers: {
          lang: lang,
        },
      });

      return res.data;
    } catch (err) {
      // console.error(err.response.data)
      return err.response.data;
    }
  }
);

// export const LogoutApi=createAsyncThunk("auth/register",async(data)=>{

//     try{
//         const res=await axios.post(`${baseurl}/userAuth/login`,data,{
//             headers:{
//                 'lang':lang
//             }
//         })

//         return res.data

//     }catch(err){
//         // console.error(err.response.data)
//     }

// })

const Authslice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Register API
      .addCase(RegisterApi.pending, (state) => {
        state.status = "loading";
      })
      .addCase(RegisterApi.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(RegisterApi.rejected, (state) => {
        state.status = "failed";
      })

      // Login API
      .addCase(LoginApi.pending, (state) => {
        state.status = "loading";
      })
      .addCase(LoginApi.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
        Cookies.set("token", action.payload.token); // Example: Save token to cookies
      })
      .addCase(LoginApi.rejected, (state) => {
        state.status = "failed";
      })

      // Verify Phone API
      .addCase(VerifyPhoneApi.pending, (state) => {
        state.status = "loading";
      })
      .addCase(VerifyPhoneApi.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(VerifyPhoneApi.rejected, (state) => {
        state.status = "failed";
      })

      // Verify Code API
      .addCase(VerifyCodeApi.pending, (state) => {
        state.status = "loading";
      })
      .addCase(VerifyCodeApi.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(VerifyCodeApi.rejected, (state) => {
        state.status = "failed";
      })

      // Resend Code API
      .addCase(ResendCodeApi.pending, (state) => {
        state.status = "loading";
      })
      .addCase(ResendCodeApi.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(ResendCodeApi.rejected, (state) => {
        state.status = "failed";
      })

      // Forgot Password API
      .addCase(ForgotPasswordApi.pending, (state) => {
        state.status = "loading";
      })
      .addCase(ForgotPasswordApi.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(ForgotPasswordApi.rejected, (state) => {
        state.status = "failed";
      })

      // Reset Password API
      .addCase(ResetPasswordApi.pending, (state) => {
        state.status = "loading";
      })
      .addCase(ResetPasswordApi.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(ResetPasswordApi.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default Authslice.reducer;
