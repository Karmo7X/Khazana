import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import { baseurl, lang, token } from "../../global";

const initialState = {
  data: null,
  status: false,
  statusrate: false,
};

export const GetProductApi = createAsyncThunk("Product/get", async (data) => {
  try {
   
    let res;
    const queryParams = [];
  if(data){
  // Add parameters only if they are defined
    if (data?.pagenum) {
      queryParams.push(`page=${data.pagenum}`);
    }
    queryParams.push(`limit=16`); // Always include limit

    if (data?.sort) {
      queryParams.push(`sort=${data.sort}`);
    }

    if (data?.pricePapermax) {
      queryParams.push(`pricePaper[lt]=${data.pricePapermax}`);
    }
    if (data?.pricePapermin) {
      queryParams.push(`pricePaper[gt]=${data?.pricePapermin}`);;
    }


    if (data?.category) {
      queryParams.push(`category=${data.category}`);
    }

    // Add availability parameters
    if (data?.isAvailablePdf) {
      queryParams.push(`isAvailablePdf=${data?.isAvailablePdf}`);
    }

    if (data?.isAvailablePaper) {
      queryParams.push(`isAvailablePaper=${data?.isAvailablePaper}`);
    }
  }
  

    const queryString = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';

    if (token) {
      res = await axios.get(`${baseurl}/product/productsWithWishlist${queryString}`, {
        headers: {
          lang: lang,
          Authorization: `Bearer ${token}`,
        },
      });
    } else {
      res = await axios.get(`${baseurl}/product${queryString}`, {
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
export const GetProductdetailsApi = createAsyncThunk(
  "Product/getProductdetails",
  async (productId) => {
    try {
      const res = await axios.get(`${baseurl}/product/${productId}`, {
        headers: {
          lang: lang,
          Authorization: `Bearer ${token}`,
        },
      });

      return res.data;
    } catch (err) {
      console.error(err.response.data);
    }
  }
);

export const AddProductApi = createAsyncThunk(
  "Product/AddProduct",
  async (productdata) => {
    try {
      const res = await axios.post(`${baseurl}/requestBook`, productdata, {
        headers: {
          lang: lang,
          Authorization: `Bearer ${token}`,
          Accept: "*/*",
          "Content-Type": "multipar/form-data",
          "Access-Control-Allow-Origin": "*",
        },
      });

      return res.data;
    } catch (err) {
      console.error(err.response.data);
      return err.response.data;
    }
  }
);
export const RateProductApi = createAsyncThunk(
  "Product/RateProduct",
  async (data) => {
    try {
      const res = await axios.post(`${baseurl}/product/rateProduct/${data?.productId}`, data, {
        headers: {
          lang: lang,
          Authorization: `Bearer ${token}`,
        },
      });

      return res.data;
    } catch (err) {
      console.error(err.response.data);
      return err.response.data;
    }
  }
);

export const SearchProductApi = createAsyncThunk("Product/search", async (data) => {
  try {
  
    let res;
    const queryParams = [];
  if(data){
  // Add parameters only if they are defined
  if (data?.keyword) {
    queryParams.push(`keyword=${data.keyword}`);
  }
    if (data?.pagenum) {
      queryParams.push(`page=${data.pagenum}`);
    }
    queryParams.push(`limit=16`); // Always include limit

    
    
  }
  

    const queryString = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';

  
      res = await axios.get(`${baseurl}/product/search${queryString}`, {
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
        state.status = "loading";
      })
      .addCase(GetProductdetailsApi.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(GetProductdetailsApi.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(RateProductApi.pending, (state) => {
        state.statusrate = "loading";
      })
      .addCase(RateProductApi.fulfilled, (state, action) => {
        state.statusrate = "succeeded";
        state.data = action.payload;
      })
      .addCase(RateProductApi.rejected, (state) => {
        state.statusrate = "failed";
      });
  },
});

export default Productslice.reducer;
