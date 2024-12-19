import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import Cookies from 'js-cookie'
import { baseurl, lang, token } from '../../global'



const initialState={
    data:null,
    status:false,
    
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
          'Authorization':`Bearer ${token}`
        },
      });
  
      return res.data;
    } catch (err) {
      console.error(err.response.data);
      return err.response.data
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
      })
      .addCase(GetUserApi.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default Userslice.reducer;
