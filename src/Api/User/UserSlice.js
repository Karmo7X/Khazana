import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import Cookies from 'js-cookie'
import { baseurl, lang, token } from '../../global'



const initialState={
    data:null,
    status:false,
    statusupdate:false,
    addresses:null
}
 
export const GetUserApi = createAsyncThunk("User/get", async () => {
    try {
      const res = await axios.get(`${baseurl}/user/getProfile`, {
        headers: {
          lang: lang,
          'Authorization':`Bearer ${token}`
        },
      });
  
      return res.data;
    } catch (err) {
      console.error(err.response.data);
    }
  });
  
  export const UpdateUserApi = createAsyncThunk("User/update", async (updatedata) => {
    try {
      const res = await axios.patch(`${baseurl}/user/updateProfile`,updatedata, {
        headers: {
          lang: lang,
          'Authorization':`Bearer ${token}`
        },
      });
  
      return res.data;
    } catch (err) {
      console.error(err.response.data);
      return err.response.data
    }
  });
  

  export const UpdateUserimgeApi = createAsyncThunk("User/UpdateUserimge", async (profileImg) => {
    try {

      const res = await axios.patch(`${baseurl}/user/updateImage`,profileImg, {
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
  

  export const ChangeUserpassApi = createAsyncThunk("User/Changepass", async (updatepassword) => {
    try {
      const res = await axios.patch(`${baseurl}/user/changePassword`,updatepassword, {
        headers: {
          lang: lang,
          'Authorization':`Bearer ${token}`
        },
      });
  
      return res.data;
    } catch (err) {
      console.error(err.response.data);
      return err.response.data
    }
  });
  
  export const AddAddressApi = createAsyncThunk("User/AddAddress", async (addressdata) => {
    try {
      const res = await axios.post(`${baseurl}/user/address`,addressdata, {
        headers: {
          lang: lang,
          'Authorization':`Bearer ${token}`
        },
      });
  
      return res.data;
    } catch (err) {
      console.error(err.response.data);
      return err.response.data
    }
  });
   
  export const AddmainAddressApi = createAsyncThunk("User/AddmainAddress", async (addressId) => {
    try {
      const res = await axios.post(
        `${baseurl}/user/address/${addressId}`,
        {}, // Body of the POST request (if needed)
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
      return err.response.data
    }
  });
  
  export const deleteAddressApi = createAsyncThunk("User/deleteAddress", async (addressId) => {
    try {
      const res = await axios.delete(`${baseurl}/user/address/${addressId}`, {
        headers: {
          lang: lang,
          'Authorization':`Bearer ${token}`
        },
      });
  
      return res.data;
    } catch (err) {
      console.error(err.response.data);
      return err.response.data
    }
  });

  export const GetUserwishlistApi = createAsyncThunk("User/wishlist", async () => {
    try {
      const res = await axios.get(`${baseurl}/userWishlist`, {
        headers: {
          lang: lang,
          'Authorization':`Bearer ${token}`
        },
      });
  
      return res.data;
    } catch (err) {
      console.error(err.response.data);
    }
  });

  export const AddUserwishlistApi = createAsyncThunk("User/Addwishlist", async (data) => {
    try {
      const res = await axios.post(`${baseurl}/userWishlist`,data, {
        headers: {
          lang: lang,
          'Authorization':`Bearer ${token}`
        },
      });
  
      return res.data;
    } catch (err) {
      console.error(err.response.data);
    }
  });
  export const RemoveUserwishlistApi = createAsyncThunk("User/Removewishlist", async (data) => {
    
    try {
      const res = await axios.delete(`${baseurl}/userWishlist`, {
        headers: {
          lang: lang,
          Authorization: `Bearer ${token}`
        },
        data: data // Pass `data` here
      });
      
  
      return res.data;
    } catch (err) {
      console.error(err.response.data);
    }
  });

  export const GetUserLibraryApi = createAsyncThunk("User/My-Library/get", async () => {
    try {
      const res = await axios.get(`${baseurl}/order/my?isDelivered=true&orderState=completed&isPaid=true`, {
        headers: {
          lang: lang,
          'Authorization':`Bearer ${token}`
        },
      });
  
      return res.data;
    } catch (err) {
      console.error(err.response.data);
    }
  });

  export const GetUserOrderApi = createAsyncThunk("User/My-Library/get", async () => {
    try {
      const res = await axios.get(`${baseurl}/order/my`, {
        headers: {
          lang: lang,
          'Authorization':`Bearer ${token}`
        },
      });
  
      return res.data;
    } catch (err) {
      console.error(err.response.data);
    }
  });

const Userslice = createSlice({
  name: "cate",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetUserApi.pending, (state) => {
        state.status = "loading";
      })
      .addCase(GetUserApi.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
        state.addresses = action.payload?.data?.user?.address;
      })
      .addCase(GetUserApi.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(UpdateUserApi.pending, (state) => {
        state.statusupdate = "loading";
      })
      .addCase(UpdateUserApi.fulfilled, (state, action) => {
        state.statusupdate = "succeeded";
        state.data = action.payload;
      })
      .addCase(UpdateUserApi.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(UpdateUserimgeApi.pending, (state) => {
        state.statusupdate = "loading";
      })
      .addCase(UpdateUserimgeApi.fulfilled, (state, action) => {
        state.statusupdate = "succeeded";
        state.data = action.payload;
      })
      .addCase(UpdateUserimgeApi.rejected, (state) => {
        state.statusupdate = "failed";
      })
      .addCase(ChangeUserpassApi.pending, (state) => {
        state.status = "loading";
      })
      .addCase(ChangeUserpassApi.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(ChangeUserpassApi.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(AddAddressApi.pending, (state) => {
        state.status = "loading";
      })
      .addCase(AddAddressApi.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(AddAddressApi.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(deleteAddressApi.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteAddressApi.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(deleteAddressApi.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(GetUserwishlistApi.pending, (state) => {
        state.status = "loading";
      })
      .addCase(GetUserwishlistApi.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(GetUserwishlistApi.rejected, (state) => {
        state.status = "failed";
      })
  },
});

export default Userslice.reducer;
