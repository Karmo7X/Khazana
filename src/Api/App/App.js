import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import { baseurl, lang } from "../../global";

const initialState = {
  data: null,
  status: false,
};

export const GetpolicyApi = createAsyncThunk("policy/get", async () => {
  try {
    const res = await axios.get(`${baseurl}/app/privacyPolicy`, {
      headers: {
        lang: lang,
      },
    });

    return res.data;
  } catch (err) {
    console.error(err.response.data);
  }
});

export const GetTermApi = createAsyncThunk("Term/get", async () => {
  try {
    const res = await axios.get(`${baseurl}/app/termsAndConditions`, {
      headers: {
        lang: lang,
      },
    });

    return res.data;
  } catch (err) {
    console.error(err.response.data);
  }
});
export const GetAboutApi = createAsyncThunk("About/get", async () => {
  try {
    const res = await axios.get(`${baseurl}/app/aboutUs`, {
      headers: {
        lang: lang,
      },
    });

    return res.data;
  } catch (err) {
    console.error(err.response.data);
  }
});

export const GetCityApi = createAsyncThunk("City/get", async () => {
  try {
    const res = await axios.get(`${baseurl}/app/city`, {
      headers: {
        lang: lang,
      },
    });

    return res.data;
  } catch (err) {
    console.error(err.response.data);
  }
});

export const GetbannerApi = createAsyncThunk("banner/get", async () => {
  try {
    const res = await axios.get(`${baseurl}/app/homeBanner`, {
      headers: {
        lang: lang,
      },
    });

    return res.data;
  } catch (err) {
    console.error(err.response.data);
  }
});
export const GetfeaturesApi = createAsyncThunk("features/get", async () => {
  try {
    const res = await axios.get(`${baseurl}/app/featureItem`, {
      headers: {
        lang: lang,
      },
    });

    return res.data;
  } catch (err) {
    console.error(err.response.data);
  }
});
const Appslice = createSlice({
  name: "subscription",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetpolicyApi.pending, (state) => {
        state.status = "loading";
      })
      .addCase(GetpolicyApi.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(GetpolicyApi.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(GetAboutApi.pending, (state) => {
        state.status = "loading";
      })
      .addCase(GetAboutApi.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(GetAboutApi.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(GetTermApi.pending, (state) => {
        state.status = "loading";
      })
      .addCase(GetTermApi.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(GetTermApi.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default Appslice.reducer;
 