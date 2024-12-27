import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
  DeleteCartApi,
  DeleteCartItemApi,
  GetCartApi,
} from "../../Api/Cart/CartSlice";
import bookundefine from "../../../public/assets/img/bookundefine.jpg";
import Notfound from "../../components/Notfound/Notfound";
const Cart = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.cart.status);
  const [cart, setCart] = useState();
  const [cartItems, setCartItems] = useState([]);
  

  useEffect(() => {
    dispatch(GetCartApi()).then((res) => {
      if (res.payload?.code === 200) {
        setCart(res.payload?.data?.cart);
        setCartItems(res.payload?.data?.cart?.cartItems);
      }
    });
  }, []);

  const handleDeleteItem = (productId) => {
    dispatch(DeleteCartItemApi(productId)).then((res) => {
      if (res.payload?.code === 200) {
        dispatch(GetCartApi()).then((res) => {
          if (res.payload?.code === 200) {
            setCart(res.payload?.data?.cart);
            setCartItems(res.payload?.data?.cart?.cartItems);
          }
        });
      }
    });
  };
  const handleEmptyCart = () => {
    dispatch(DeleteCartApi()).then((res) => {
      if (res.payload?.code === 200) {
        dispatch(GetCartApi()).then((res) => {
          if (res.payload?.code === 200) {
            setCart(res.payload?.data?.cart);
            setCartItems(res.payload?.data?.cart?.cartItems);
          }
        });
      }
    });
  };
  return (
    <>
      {/* <!-- Breadcumb Section Start --> */}
      <div class="breadcrumb-wrapper">
        <div class="book1">
          <img src="/assets/img/hero/book1.png" alt="book" />
        </div>
        <div class="book2">
          <img src="/assets/img/hero/book2.png" alt="book" />
        </div>
        <div class="container">
          <div class="page-heading">
            <h1> {t("global.nav.cart")}</h1>
            <div class="page-header">
              <ul class="breadcrumb-items wow fadeInUp" data-wow-delay=".3s">
                <li>
                  <a href="/">{t("global.nav.home")}</a>
                </li>
                <li>
                  <i class="fa-solid fa-chevron-right"></i>
                </li>
                <li>{t("global.nav.cart")}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Shop Cart Section Start --> */}
      <div class="cart-section section-padding">
        <div class="container">
          <div class="main-cart-wrapper">
            <div class="row g-5">
              {loading === "loading" ? (
                <>
                  <div className="d-flex align-items-center justify-content-center vh-100">
                    <div
                      className="spinner-border text-secondary"
                      role="status"
                    >
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {loading === "failed" && cartItems.length === 0 ? (
                    <>
                      <div className="col-xl-9">
                        <Notfound />
                      </div>
                    </>
                  ) : (
                    <>
                      <div class="col-xl-9">
                        <div class="table-responsive">
                          <table class="table">
                            <thead>
                              <tr>
                                <th className="text-center"> {t("global.cart.product")}</th>
                                <th className="text-center">{t("global.cart.pdf_price")}</th>
                                <th className="text-center">{t("global.cart.paper_price")}</th>

                                <th className="text-center">{t("global.book_details.category")}</th>
                                <th className="text-center">{t("global.cart.price")}</th>
                              </tr>
                            </thead>
                            <tbody>
                              {cartItems?.map((book, idx) => {
                                return (
                                  <>
                                    <tr key={idx}>
                                      <td className="w-50">
                                        <span class="d-flex gap-5 align-items-center">
                                          <a
                                            href="#"
                                            class="remove-icon"
                                            onClick={() =>
                                              handleDeleteItem(
                                                book?.product?.id
                                              )
                                            }
                                          >
                                            <img
                                              src="/assets/img/icon/icon-9.svg"
                                              alt="img"
                                            />
                                          </a>
                                          <span class="cart w-25">
                                            <img
                                              src={
                                                book?.product?.coverImage
                                                  ? book?.product?.coverImage
                                                  : bookundefine
                                              }
                                              style={{ width: "60%" }}
                                              alt={book?.product?.title}
                                            />
                                          </span>
                                          <span class="cart-title">
                                            {book?.product?.title.slice(0,30)}
                                          </span>
                                        </span>
                                      </td>
                                      {book?.isAvailablePdf === true ? (
                                        <td>
                                          <span class="cart-price">
                                            {book?.product?.pricePdf}{" "}
                                            {t("global.currency.rs")}
                                          </span>
                                        </td>
                                      ) : (
                                        <td>
                                          <span class="cart-price">
                                            {"N/A"} 
                                          </span>
                                        </td>
                                      )}
                                      {book?.isAvailablePaper === true ? (
                                        <td>
                                          <span class="cart-price">
                                            {book?.product?.pricePaper}{" "}
                                            {t("global.currency.rs")}
                                          </span>
                                        </td>
                                      ) : (
                                        <td>
                                          <span class="cart-price">
                                            {"N/A"} 
                                          </span>
                                        </td>
                                      )}

                                      <td>
                                      <span class="cart-price">
                                            {book?.product?.category.slice(0,30)}
                                          </span>
                                        </td>
                                      <td>
                                        <span class="subtotal-price">
                                          {book?.price}{" "}
                                          {t("global.currency.rs")}
                                        </span>
                                      </td>
                                    </tr>
                                  </>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                        <div class="cart-wrapper-footer">
                          {/* <form action="/Cart">
                                <div class="input-area">
                                    <input type="text" name="Coupon Code" id="CouponCode" placeholder="Coupon Code"/>
                                    <button type="submit" class="theme-btn">
                                        Apply
                                    </button> 
                                </div>
                            </form> */}
                          <a
                            href="#"
                            onClick={() => handleEmptyCart()}
                            class="theme-btn"
                          >
                            {t("global.cart.clear_cart")}
                          </a>
                        </div>
                      </div>
                    </>
                  )}
                </>
              )}

              <div class="col-xl-3">
                <div class="table-responsive cart-total">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>
                          {" "}
                          {t("global.cart.total")} {t("global.nav.cart")}{" "}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* <tr>
                                        <td>
                                            <span class="d-flex gap-5 align-items-center justify-content-between">
                                                <span class="sub-title">{t("global.cart.subtotal")}:</span>
                                                <span class="sub-price">{}</span>
                                            </span>
                                        </td>
                                    </tr> */}
                      {/* <tr>
                                        <td>
                                            <span class="d-flex gap-5 align-items-center  justify-content-between">
                                                <span class="sub-title">{t("global.cart.shipping")}:</span>
                                                <span class="sub-text">
                                                    Free
                                                </span>
                                            </span>
                                        </td>
                                    </tr> */}
                      <tr>
                        <td>
                          <span class="d-flex gap-5 align-items-center  justify-content-between">
                            <span class="sub-title">
                              {t("global.cart.total")}:{" "}
                            </span>
                            <span class="sub-price sub-price-total">
                              {cart?.totalCartPrice || "0"}{" "}
                              {t("global.currency.rs")}
                            </span>
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <a href={`Checkout/${cart?.id}`} class="theme-btn">
                    {t("global.cart.proceed_to_checkout")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
