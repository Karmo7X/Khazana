
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import Cookies from 'js-cookie'
import { baseurl, lang } from '../../global'



const initialState={
    data:null,
    status:false,
    
}

export const GetCategoryApi=createAsyncThunk("Catgory/get",async()=>{
   
    try{
        const res=await axios.get(`${baseurl}/category`,{
            headers:{
                'lang':lang
            }
        })
        
        return res.data
        
    }catch(err){
        console.error(err.response.data)
    }


})

const Categoryslice=createSlice({
    name:'cate',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
       builder
       
    }
  
  })
  
  
  export default Categoryslice.reducer