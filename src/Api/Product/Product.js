import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import { baseurl, lang, token } from "../../global";

const initialState = {
  data: null,
  status: false,
};

export const GetProductApi = createAsyncThunk("Product/get", async () => {
  try {
    let res;

    if (token) {
      res = await axios.get(`${baseurl}/product/productsWithWishlist`, {
        headers: {
          lang: lang,
           Authorization: `Bearer ${token}`
        },
      });
    } else {
      res = await axios.get(`${baseurl}/product`, {
        headers: {
          lang: lang,
        },
      });
    }

    return res.data;
  } catch (err) {
    console.error(err.response.data);
  }
});
export const GetProductdetailsApi = createAsyncThunk("Product/getProductdetails", async (productId) => {
  try {
   const res = await axios.get(`${baseurl}/product/${productId}`, {
      headers: {
        lang: lang,
         Authorization: `Bearer ${token}`
      },
    });

    return res.data;
  } catch (err) {
    console.error(err.response.data);
  }
});


export const AddProductApi = createAsyncThunk("Product/AddProduct", async (productdata) => {
  try {
    const res = await axios.post(`${baseurl}/requestBook`,productdata, {
      headers: {
        lang: lang,
        'Authorization':`Bearer ${token}`,
        'Accept':'*/*',
        'Content-Type':'multipar/form-data',
        'Access-Control-Allow-Origin':'*'
      },
    });

    return res.data;
  } catch (err) {
    console.error(err.response.data);
    return err.response.data
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
      })
      .addCase(AddProductApi.pending, (state) => {
        state.status = "loading";
      })
      .addCase(AddProductApi.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(AddProductApi.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(GetProductdetailsApi.pending, (state) => {
        state.status = "!";
      })
      .addCase(GetProductdetailsApi.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(GetProductdetailsApi.rejected, (state) => {
        state.status = "failed";
      })
  },
});

export default Productslice.reducer;
