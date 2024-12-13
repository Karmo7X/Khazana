import { useState,Suspense,lazy } from 'react'

import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Loader from './components/loader/loader'


const Home =lazy(() => import("./pages/Home/Home"))
const SingleProduct =lazy(() => import("./pages/Single_Product/SingleProduct"))
const Cart =lazy(() => import("./pages/cart/Cart"))
const Wishlist =lazy(() => import("./pages/Wishlist/Wishlist"))
const Checkout =lazy(() => import("./pages/Checkout/Checkout"))
const Contact =lazy(() => import("./pages/Contact/Contact"))
const Profile =lazy(() => import("./pages/Profile/Profile"))
const About =lazy(() => import("./pages/About/About"))
const Shop =lazy(() => import("./pages/Shop/Shop"))
const Subcription =lazy(() => import("./pages/subcription/Subcription"))
function App() {
  

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route  path="/" element={<Layout/>}>
        <Route index element={
          <Suspense fallback={<Loader/>}>
            <Home/>
          </Suspense>
          
        }/>
         <Route path='Shop' element={
          <Suspense fallback={<Loader/>}>
            <Shop/>
          </Suspense>
          
        }/>
        <Route path='Single/:id' element={
          <Suspense fallback={<Loader/>}>
            <SingleProduct/>
          </Suspense>
          
        }/>
         <Route path='Profile' element={
          <Suspense fallback={<Loader/>}>
            <Profile/>
          </Suspense>
          
        }/>
         <Route path='Cart' element={
          <Suspense fallback={<Loader/>}>
            <Cart/>
          </Suspense>
          
        }/>
         <Route path='Wishlist' element={
          <Suspense fallback={<Loader/>}>
            <Wishlist/>
          </Suspense>
          
        }/>
        <Route path='Checkout' element={
          <Suspense fallback={<Loader/>}>
            <Checkout/>
          </Suspense>
          
        }/>

         <Route path='ContactUs' element={
          <Suspense fallback={<Loader/>}>
            <Contact/>
          </Suspense>
          
        }/>
         <Route path='AboutUs' element={
          <Suspense fallback={<Loader/>}>
            <About/>
          </Suspense>
          
        }/>
        <Route path='Subscription' element={
          <Suspense fallback={<Loader/>}>
            <Subcription/>
          </Suspense>
          
        }/>
      </Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
