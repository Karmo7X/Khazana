import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import { baseurl, lang ,token} from "../../global";


const initialState = {
    data: null,
    status: false,
  };
  

  export const GetCartApi = createAsyncThunk("Cart/get", async () => {
    try {
      const res = await axios.get(`${baseurl}/cart`, {
        headers: {
          lang: lang,
         'Authorization':`Bearer ${token}`,
        },
      });
  
      return res.data;
    } catch (err) {
      console.error(err.response.data);
    }
  });

  export const DeleteCartItemApi = createAsyncThunk("Cart/DeleteCartItem", async (productId) => {
    try {
      const res = await axios.delete(`${baseurl}/cart/${productId}`, {
        headers: {
          lang: lang,
         'Authorization':`Bearer ${token}`,
        },
      });
  
      return res.data;
    } catch (err) {
      console.error(err.response.data);
    }
  });
  export const DeleteCartApi = createAsyncThunk("Cart/DeleteCart", async () => {
    try {
      const res = await axios.delete(`${baseurl}/cart`, {
        headers: {
          lang: lang,
         'Authorization':`Bearer ${token}`,
        },
      });
  
      return res.data;
    } catch (err) {
      console.error(err.response.data);
    }
  });

  export const AddCartItemApi = createAsyncThunk("Cart/AddCartItem", async (data) => {
    try {
      const res = await axios.post(`${baseurl}/cart`,data, {
        headers: {
          lang: lang,
         'Authorization':`Bearer ${token}`,
        },
        
      });
  
      return res.data;
    } catch (err) {
      console.error(err.response.data);
      return err.response.data
    }
  });





const Cartslice = createSlice({
  name: "cate",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetCartApi.pending, (state) => {
        state.status = "loading";
      })
      .addCase(GetCartApi.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(GetCartApi.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(DeleteCartItemApi.pending, (state) => {
        state.status = "loading";
      })
      .addCase(DeleteCartItemApi.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(DeleteCartItemApi.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(DeleteCartApi.pending, (state) => {
        state.status = "loading";
      })
      .addCase(DeleteCartApi.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(DeleteCartApi.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(AddCartItemApi.pending, (state) => {
        state.status = "loading";
      })
      .addCase(AddCartItemApi.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(AddCartItemApi.rejected, (state) => {
        state.status = "failed";
      })
      ;
  },
});

export default Cartslice.reducer;