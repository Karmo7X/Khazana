import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import { baseurl, lang, token } from "../../global";

const initialState = {
  data: null,
  status: false,
};



export const GetAuthorApi = createAsyncThunk("Author/get", async () => {
  try {
    const res = await axios.get(`${baseurl}/author`, {
      headers: {
        lang: lang,
      },
    });

    return res.data;
  } catch (err) {
    console.error(err.response.data);
  }
});

export const AddAuthorApi = createAsyncThunk("Author/AddAuthor", async (authordata) => {
  try {
    const res = await axios.post(`${baseurl}/author/formAuthor`,authordata, {
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



const AuthorsSlice = createSlice({
  name: "author",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetAuthorApi.pending, (state) => {
        state.status = "loading";
      })
      .addCase(GetAuthorApi.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(GetAuthorApi.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(AddAuthorApi.pending, (state) => {
        state.status = "loading";
      })
      .addCase(AddAuthorApi.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(AddAuthorApi.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default AuthorsSlice.reducer;