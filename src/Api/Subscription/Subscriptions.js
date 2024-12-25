import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import { baseurl, lang, token } from "../../global";

const initialState = {
  data: null,
  status: false,
};

export const GetsubscriptionApi = createAsyncThunk(
  "subscription/get",
  async () => {
    try {
      const res = await axios.get(`${baseurl}/subscription`, {
        headers: {
          lang: lang,
        },
      });

      return res.data;
    } catch (err) {
      console.error(err.response.data);
    }
  }
);

export const AddsubscriptionApi = createAsyncThunk(
  "subscription/Add",
  async (subscriptionID) => {
    try {
      const res = await axios.post(
        `${baseurl}/user/subscribe/${subscriptionID}`,
        {},
        {
          headers: {
            lang: lang,
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return res.data;
    } catch (err) {
      console.error(err.response.data);
      return err.response.data;
    }
  }
);
export const UnsubscriptionApi = createAsyncThunk(
  "subscription/delete",
  async (subscriptionID) => {
    try {
      const res = await axios.delete(
        `${baseurl}/user/subscribe/${subscriptionID}`,
        {},
        {
          headers: {
            lang: lang,
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return res.data;
    } catch (err) {
      console.error(err.response.data);
      return err.response.data;
    }
  }
);
const Subscriptionslice = createSlice({
  name: "subscription",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetsubscriptionApi.pending, (state) => {
        state.status = "loading";
      })
      .addCase(GetsubscriptionApi.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(GetsubscriptionApi.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(AddsubscriptionApi.pending, (state) => {
        state.status = "loading";
      })
      .addCase(AddsubscriptionApi.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(AddsubscriptionApi.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(UnsubscriptionApi.pending, (state) => {
        state.status = "loading";
      })
      .addCase(UnsubscriptionApi.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(UnsubscriptionApi.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default Subscriptionslice.reducer;
