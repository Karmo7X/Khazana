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

const Termsslice = createSlice({
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

export default Termsslice.reducer;
