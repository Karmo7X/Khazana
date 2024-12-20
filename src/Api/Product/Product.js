import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import { baseurl, lang } from "../../global";

const initialState = {
  data: null,
  status: false,
};

export const GetProductApi = createAsyncThunk("Product/get", async () => {
  try {
    const res = await axios.get(`${baseurl}/product`, {
      headers: {
        lang: lang,
      },
    });

    return res.data;
  } catch (err) {
    console.error(err.response.data);
  }
});

const Productslice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetProductApi.pending, (state) => {
        state.status = "loading";
      })
      .addCase(GetProductApi.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(GetProductApi.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default Productslice.reducer;
