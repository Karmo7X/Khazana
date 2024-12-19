import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import { baseurl, lang } from "../../global";

const initialState = {
  data: null,
  status: false,
};

export const GetCategoryApi = createAsyncThunk("Catgory/get", async () => {
  try {
    const res = await axios.get(`${baseurl}/category`, {
      headers: {
        lang: lang,
      },
    });

    return res.data;
  } catch (err) {
    console.error(err.response.data);
  }
});

const Categoryslice = createSlice({
  name: "cate",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetCategoryApi.pending, (state) => {
        state.status = "loading";
      })
      .addCase(GetCategoryApi.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(GetCategoryApi.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default Categoryslice.reducer;
