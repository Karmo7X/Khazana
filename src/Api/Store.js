import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from './Auth/AuthSlice'
import CategoryReducer from './Category/CategorySlice'
import SubscriptionReducer from './Subscription/Subscriptions'
import TermsReducer from './Term/Term'
import UserReducer from './User/UserSlice'
const Store=configureStore({

    reducer:{
        'auth':AuthReducer,
        'category':CategoryReducer,
        'subscription':SubscriptionReducer,
        'term':TermsReducer,
        'user':UserReducer
    }
})


export default Store