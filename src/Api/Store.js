import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from './Auth/AuthSlice'
import CategoryReducer from './Category/CategorySlice'
import SubscriptionReducer from './Subscription/Subscriptions'
import TermsReducer from './Term/Term'
const Store=configureStore({

    reducer:{
        'auth':AuthReducer,
        'category':CategoryReducer,
        'subscription':SubscriptionReducer,
        'term':TermsReducer
    }
})


export default Store