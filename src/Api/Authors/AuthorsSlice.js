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
export const GetAuthordetailsApi = createAsyncThunk("Author/getdetails", async (authorId) => {
  try {
    const res = await axios.get(`${baseurl}/author/${authorId}`, {
      headers: {
        lang: lang,
      },
    });

    return res.data;
  } catch (err) {
    console.error(err.response.data);
  }
});
export const GetAuthorproductsApi = createAsyncThunk("Author/getdetails", async (data) => {
  try {
   
    let res;
    const queryParams = [];
  if(data){
  // Add parameters only if they are defined
    if (data?.pagenum) {
      queryParams.push(`page=${data.pagenum}`);
    }
    queryParams.push(`limit=10`); // Always include limit

   
  }
  

    const queryString = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';

    if (token) {
      res = await axios.get(`${baseurl}/product/authorProducts/${data?.id}${queryString}`, {
        headers: {
          lang: lang,
          Authorization: `Bearer ${token}`,
        },
      });
    } else {
      res = await axios.get(`${baseurl}/product/authorProducts/${data?.id}${queryString}`, {
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
      })
      .addCase(GetAuthordetailsApi.pending, (state) => {
        state.status = "loading";
      })
      .addCase(GetAuthordetailsApi.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(GetAuthordetailsApi.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default AuthorsSlice.reducer;