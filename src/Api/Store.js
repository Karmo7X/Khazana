import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from './Auth/AuthSlice'
import CategoryReducer from './Category/CategorySlice'

const Store=configureStore({

    reducer:{
        'auth':AuthReducer,
        'cate':CategoryReducer
    }
})


export default Store