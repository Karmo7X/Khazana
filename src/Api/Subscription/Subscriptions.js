import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import Cookies from 'js-cookie'
import { baseurl, lang } from '../../global'


const initialState={
    data:null,
    status:false,
    
}



export const GetsubscriptionApi=createAsyncThunk("subscription/get",async()=>{
   
    try{
        const res=await axios.get(`${baseurl}/subscription`,{
            headers:{
                'lang':lang
            }
        })
        
        return res.data
        
    }catch(err){
        console.error(err.response.data)
    }


})














const Subscriptionslice=createSlice({
    name:'subscription',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
       builder
       
    }
  
  })
  
  
  export default Subscriptionslice.reducer
  
  
  