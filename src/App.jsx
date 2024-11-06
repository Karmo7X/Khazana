import { useState,Suspense,lazy } from 'react'

import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import logo from "/assets/img/favicon.png"
const Home =lazy(() => import("./pages/Home/Home"))
function App() {
  

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route  path="/" element={<Layout/>}>
        <Route index element={
          <Suspense fallback={<>
          
           {/* <!-- Preloader start --> */}
    <div id="preloader" class="preloader">
        <div class="animation-preloader">
            <div class="spinner">
            </div>
            <div class="txt-loading">
              <img src={logo} alt=""  />
                {/* <span data-text-preloader="K" class="letters-loading">
                   K
                </span>
                <span data-text-preloader="H" class="letters-loading">
                    H
                </span>
                <span data-text-preloader="A" class="letters-loading">
                  A
                </span>
                <span data-text-preloader="Z" class="letters-loading">
                    Z
                </span>
                <span data-text-preloader="A" class="letters-loading">
                    A
                </span>
                <span data-text-preloader="N" class="letters-loading">
                    N
                </span>
                <span data-text-preloader="A" class="letters-loading">
                    A
                </span> */}
                
            </div>
            <p class="text-center">Loading</p>
        </div>
        <div class="loader">
            <div class="row">
                <div class="col-3 loader-section section-left">
                    <div class="bg"></div>
                </div>
                <div class="col-3 loader-section section-left">
                    <div class="bg"></div>
                </div>
                <div class="col-3 loader-section section-right">
                    <div class="bg"></div>
                </div>
                <div class="col-3 loader-section section-right">
                    <div class="bg"></div>
                </div>
            </div>
        </div>
    </div>
          </>}>
            <Home/>
          </Suspense>
          
        }/>
      </Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
