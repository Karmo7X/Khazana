import { useState,Suspense,lazy } from 'react'

import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Loader from './components/loader/loader'
import SingleProduct from './pages/Single_Product/SingleProduct'
import Cart from './pages/cart/Cart'
import Wishlist from './pages/Wishlist/Wishlist'
import Checkout from './pages/Checkout/Checkout'
import Contact from './pages/Contact/Contact'
import Profile from './pages/Profile/Profile'
import About from './pages/About/About'
const Home =lazy(() => import("./pages/Home/Home"))
const Shop =lazy(() => import("./pages/Shop/Shop"))
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
      </Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
