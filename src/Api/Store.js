import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from './Auth/AuthSlice'
import CategoryReducer from './Category/CategorySlice'
import SubscriptionReducer from './Subscription/Subscriptions'
import AppReducer from './App/App'
import UserReducer from './User/UserSlice'
import ProductReducer from './Product/Product'
import AuthorsReducer from './Authors/AuthorsSlice'
import CartReducer from './Cart/CartSlice'
const Store=configureStore({

    reducer:{
        'auth':AuthReducer,
        'category':CategoryReducer,
        'subscription':SubscriptionReducer,
        'app':AppReducer,
        'user':UserReducer,
        'product':ProductReducer,
        'authors':AuthorsReducer,
        'cart':CartReducer
    }
})


export default Store