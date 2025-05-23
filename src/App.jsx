import { useState, Suspense, lazy, useEffect } from "react";

import "./App.scss";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import Loader from "./components/loader/loader";
import Login from "./components/Modals/Login";
import Cookies from 'js-cookie'

const Home = lazy(() => import("./pages/Home/Home"));
const SingleProduct = lazy(() =>
  import("./pages/Single_Product/SingleProduct")
);
const SignleAuthor = lazy(() =>
  import("./pages/SingleAuthor/SignleAuthor")
);
const Cart = lazy(() => import("./pages/cart/Cart"));
const Wishlist = lazy(() => import("./pages/Wishlist/Wishlist"));
const Checkout = lazy(() => import("./pages/Checkout/Checkout"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const Profile = lazy(() => import("./pages/Profile/Profile"));
const About = lazy(() => import("./pages/About/About"));
const Shop = lazy(() => import("./pages/Shop/Shop"));
const Subcription = lazy(() => import("./pages/subcription/Subcription"));
const Privacy = lazy(() => import("./pages/App/Privacy"));
const Term = lazy(() => import("./pages/App/Term"));
const ShopWithCategory = lazy(() => import("./pages/Shop/ShopWithCategory"));
const RegisterAuthor = lazy(() => import("./pages/RegisterAuthor_or_book/RegisterAuthor"));
const RegisterBook = lazy(() => import("./pages/RegisterAuthor_or_book/RegisterBook"));

const ProtectedRoute = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const token = Cookies.get("token");
  const location = useLocation();
  useEffect(() => {
    if (!token) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }, [token, location]);

  return (
    <>
      {showModal === true ? <Login showmodal={showModal} /> : null}
      {token ? children : <Login showmodal={showModal} /> }
    </>
  );
};
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <Suspense fallback={<Loader />}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="Shop"
              element={
                <Suspense fallback={<Loader />}>
                  <Shop />
                </Suspense>
              }
            />
             <Route
              path="RegisterAuthor"
              element={
                <Suspense fallback={<Loader />}>
                  <RegisterAuthor />
                </Suspense>
              }
            />
             <Route
              path="Registerbook"
              element={
                <Suspense fallback={<Loader />}>
                  <RegisterBook />
                </Suspense>
              }
            />
            <Route
              path="ShopCategory/:categoryid"
              element={
                <Suspense fallback={<Loader />}>
                  <ShopWithCategory />
                </Suspense>
              }
            />
            <Route
              path="Single/:id"
              element={
                // <ProtectedRoute>

                   <Suspense fallback={<Loader />}>
                  <SingleProduct />
                </Suspense>
                // </ProtectedRoute>
               
              }
            />
             <Route
              path="SingleAuthor/:id"
              element={
                
                   <Suspense fallback={<Loader />}>
                  <SignleAuthor />
                </Suspense>
                
               
              }
            />
            <Route
              path="Profile"
              element={
                <ProtectedRoute>
                  <Suspense fallback={<Loader />}>
                    <Profile />
                  </Suspense>
                </ProtectedRoute>
              }
            />
            <Route
              path="Cart"
              element={
                <ProtectedRoute>
                  {" "}
                  <Suspense fallback={<Loader />}>
                    <Cart />
                  </Suspense>
                </ProtectedRoute>
              }
            />
            <Route
              path="Wishlist"
              element={
                <ProtectedRoute>
                  <Suspense fallback={<Loader />}>
                    <Wishlist />
                  </Suspense>
                </ProtectedRoute>
              }
            />
            <Route
              path="Checkout/:id"
              element={
                <ProtectedRoute>
                  {" "}
                  <Suspense fallback={<Loader />}>
                    <Checkout />
                  </Suspense>
                </ProtectedRoute>
              }
            />

            <Route
              path="ContactUs"
              element={
                <Suspense fallback={<Loader />}>
                  <Contact />
                </Suspense>
              }
            />
            <Route
              path="AboutUs"
              element={
                <Suspense fallback={<Loader />}>
                  <About />
                </Suspense>
              }
            />
            <Route
              path="Subscription"
              element={
                // <ProtectedRoute>
                  <Suspense fallback={<Loader />}>
                    <Subcription />
                  </Suspense>
               // </ProtectedRoute> 
              }
            />
            <Route
              path="ReturnPolicy"
              element={
                <Suspense fallback={<Loader />}>
                  <Privacy />
                </Suspense>
              }
            />
            <Route
              path="Term"
              element={
                <Suspense fallback={<Loader />}>
                  <Term />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
