
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
export const LoginApi=createAsyncThunk("auth/Login",async(data)=>{
   
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
export const VerifyPhoneApi=createAsyncThunk("auth/verifyPhone",async(data)=>{
   
    try{
        const res=await axios.post(`${baseurl}/userAuth/verifyPhone`,data,{
            headers:{
                'lang':lang
            }
        })
        
        return res.data
        
    }catch(err){
        console.error(err.response.data)
    }


})

export const VerifyCodeApi=createAsyncThunk("auth/verifyCode",async(data)=>{
   
    try{
        const res=await axios.post(`${baseurl}/userAuth/verifyCode`,data,{
            headers:{
                'lang':lang
            }
        })
        
        return res.data
        
    }catch(err){
        console.error(err.response.data)
    }


})
export const ResendCodeApi=createAsyncThunk("auth/resendCode",async(data)=>{
   
    try{
        const res=await axios.post(`${baseurl}/userAuth/resendCode`,data,{
            headers:{
                'lang':lang
            }
        })
        
        return res.data
        
    }catch(err){
        console.error(err.response.data)
    }


})
export const ForgotPasswordApi=createAsyncThunk("auth/forgotPassword",async(phone)=>{
   
    try{
        const res=await axios.post(`${baseurl}/userAuth/forgotPassword`,phone,{
            headers:{
                'lang':lang
            }
        })
        
        return res.data
        
    }catch(err){
        console.error(err.response.data)
        return err.response.data
    }


})
export const ResetPasswordApi=createAsyncThunk("auth/resetPassword",async(data)=>{
   
    try{
        const res=await axios.patch(`${baseurl}/userAuth/resetPassword`,data,{
            headers:{
                'lang':lang
            }
        })
        
        return res.data
        
    }catch(err){
        console.error(err.response.data)
        return err.response.data
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


