
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import Cookies from 'js-cookie'
import { baseurl, lang } from '../../global'

const initialState={
    data:null,
    status:false,
    
}

export const RegisterApi=createAsyncThunk("auth/register",async(data)=>{
   
    try{
        const res=await axios.post(`${baseurl}/userAuth/signup`,data,{
            headers:{
                'lang':lang
            }
        })
        
        return res.data
        
    }catch(err){
        console.error(err.response.data)
    }


})
export const LoginApi=createAsyncThunk("auth/register",async(data)=>{
   
    try{
        const res=await axios.post(`${baseurl}/userAuth/login`,data,{
            headers:{
                'lang':lang
            }
        })
        
        return res.data
        
    }catch(err){
        console.error(err.response.data)
    }


})

// export const LogoutApi=createAsyncThunk("auth/register",async(data)=>{
   
//     try{
//         const res=await axios.post(`${baseurl}/userAuth/login`,data,{
//             headers:{
//                 'lang':lang
//             }
//         })
        
//         return res.data
        
//     }catch(err){
//         console.error(err.response.data)
//     }


// })


const Authslice=createSlice({
  name:'auth',
  initialState,
  reducers:{},
  extraReducers:(builder)=>{
     builder
     
  }

})


export default Authslice.reducer


