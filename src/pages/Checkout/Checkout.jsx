import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import { CheckoutApi, GetCartApi } from "../../Api/Cart/CartSlice";
import { GetUserApi } from "../../Api/User/UserSlice";
import Notfound from "../../components/Notfound/Notfound";
import { useNavigate, useParams } from "react-router-dom";
const Checkout = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.cart.checkoutstatus);
  const { id }= useParams()
  const [cart, setCart] = useState();
  const [cartItems, setCartItems] = useState([]);
  const [addresses, setAddresses] = useState([]);
  const [errormessg, setErrormessg] = useState(null);
  const [successmessage, setSuccessmessage] = useState();
  const [shippingAddress, setShippingAddress] = useState();
  const [selectedPayment, setSelectedPayment] = useState("");
 const navigate=useNavigate()
  const handleCashOnDeliverySelect = () => {
   setSelectedPayment("cashOnDelivery"); 
   const data={
      cartId:id,
      shippingAddress:shippingAddress
    }

    dispatch(CheckoutApi(data)).then((res)=>{
      if(res.payload?.code === 201){
        setSuccessmessage(res.payload?.message);
        navigate('/')
        setErrormessg(null);
                setTimeout(() => {
                  setSuccessmessage(null);
                }, 2000);
              } else {
                setErrormessg(res.payload?.message);
                setSuccessmessage(null);
                
                setTimeout(() => {
                  setErrormessg(null);
                }, 2000);
      }
    })
    
  };

  const handleVisaOrCardSelect = () => {
    setSelectedPayment("visaOrCard");

  };
  useEffect(() => {
    dispatch(GetCartApi()).then((res) => {
      if (res.payload?.code === 200) {
        setCart(res.payload?.data?.cart);
        setCartItems(res.payload?.data?.cart?.cartItems);
      }
    });
    dispatch(GetUserApi()).then((res) => {
      if (res.payload?.code === 200) {
        setAddresses(res.payload?.data?.user?.address);
      }
    });
  }, []);

 
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
            <h1>{t("global.checkout.breadcrumb.heading")}</h1>
            <div class="page-header">
              <ul class="breadcrumb-items wow fadeInUp" data-wow-delay=".3s">
                <li>
                  <a href="index.html">
                    {t("global.checkout.breadcrumb.home")}
                  </a>
                </li>
                <li>
                  <i class="fa-solid fa-chevron-right"></i>
                </li>
                <li>{t("global.checkout.breadcrumb.current")}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Checkout Section Start --> */}
      {cartItems?.length > 0 ? (<>
              <section class="checkout-section fix section-padding">
        <div class="container">
          <div class="row g-5">
            <div class="col-lg-8">
            {successmessage && (
                    <>
                      <div class="alert alert-success" role="alert">
                        {successmessage}
                      </div>
                    </>
                  )}
                  {errormessg && (
                    <>
                      <div class="alert alert-danger" role="alert">
                        {errormessg}
                      </div>
                    </>
                  )} 

              {addresses.length !== 0 ? (
                <>
                  <Row
                    className="gy-3"
                    style={{ maxHeight: "650px", overflowY: "auto" }}
                  >
                    {addresses.map((address, index) => (
                      <Col xs={12} key={index}>
                        <Card className="p-3 shadow-sm">
                          <Card.Body>
                            <Card.Text className="mb-3">
                              <strong>
                                {" "}
                                {t("global.profile.address.primaryAddress")} :
                              </strong>{" "}
                              {t("global.profile.address.street")}{" "}
                              {address?.street}-{address?.city}-
                              {t("global.profile.address.buildingNumber")}{" "}
                              {address?.buildNumber}
                            </Card.Text>
                            {/* <div className="d-flex align-items-center">
                  <label className="me-2">تحديد كعنوان أساسي</label>
                  <input type="checkbox" />
                </div> */}
                            <div class="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                // checked={shippingAddress} // Ensure it reflects the correct state
                                name="flexRadioDefault"
                                id={`flexRadioDefault${address.addressId}`}
                                onClick={() =>
                                  setShippingAddress(address?.addressId)
                                } // Update state on change
                              />
                              <label
                                class="form-check-label"
                                htmlFor={`flexRadioDefault${address.addressId}`}
                              >
                                {t(
                                  "global.checkout.checkoutSection.chooseAsShippingAddress"
                                )}
                              </label>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </>
              ) : (
                <Notfound />
              )}
            </div>
            <div class="col-lg-4">
              <div class="checkout-order-area">
                <h3>{t("global.checkout.checkoutSection.orderTitle")}</h3>
                <div class="product-checout-area">
                  <div class="checkout-item d-flex align-items-center justify-content-between">
                    <p>{t("global.checkout.checkoutSection.product")}</p>
                    <p>{t("global.checkout.checkoutSection.subtotal")}</p>
                  </div>
                  <div style={{ maxHeight: "250px", overflowY: "auto" }}>
                  
                    {cartItems.map((data, idx) => {
                      return (
                        <>
                          <div
                            key={idx}
                            class="checkout-item d-flex align-items-center justify-content-between"
                          >
                            <p className="fw-bold">
                              {data?.product?.title?.slice(0, 100)}
                            </p>
                            <p className="fw-bold">
                              {data?.price} {t("global.currency.rs")}
                            </p>
                          </div>
                        </>
                      );
                    })}
                  </div>

                  {/* <div class="checkout-item d-flex justify-content-between">
                                <p>{t("global.checkout.checkoutSection.shipping")}</p>
                                <div class="shopping-items">
                                    <div class="form-check d-flex align-items-center from-customradio">
                                        <label class="form-check-label">
                                            Free Shipping
                                        </label>
                                        <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault12"/>
                                    </div>
                                    <div class="form-check d-flex align-items-center from-customradio">
                                        <label class="form-check-label">
                                            Local: $15.00
                                        </label>
                                        <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault123"/>
                                    </div>
                                    <div class="form-check d-flex align-items-center from-customradio">
                                        <label class="form-check-label">
                                            Flat rate: $10.00
                                        </label>
                                        <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault124"/>
                                    </div>
                                </div>
                            </div> */}
                  <div class="checkout-item d-flex align-items-center justify-content-between">
                    <p>{t("global.checkout.checkoutSection.total")}</p>
                    <p>
                      {cart?.totalCartPrice} {t("global.currency.rs")}
                    </p>
                  </div>
                  <div class="checkout-item-2 d-flex align-items-center gap-4">
                    <div className="form-check-3 d-flex align-items-center from-customradio-2 mt-3">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="payment"
                        id="cashOnDelivery"
                        checked={selectedPayment === "cashOnDelivery"}
                        onChange={handleCashOnDeliverySelect}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="cashOnDelivery"
                      >
                         {loading === "loading" ? (
                      <>
                        <div class="spinner-border text-dark" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </div>
                      </>
                    ) : (
                      t(
                        "global.checkout.checkoutSection.paymentMethods.cashOnDelivery"
                      )
                    )}
                        
                      </label>
                    </div>

                    <div className="form-check-3 d-flex align-items-center from-customradio-2 mt-3">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="payment"
                        id="visaOrCard"
                        checked={selectedPayment === "visaOrCard"}
                        onChange={handleVisaOrCardSelect}
                      />
                      <label className="form-check-label" htmlFor="visaOrCard">
                      {loading === "loading" ? (
                      <>
                        <div class="spinner-border text-dark" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </div>
                      </>
                    ) : (
                      t(
                        "global.checkout.checkoutSection.paymentMethods.visaOrCard"
                      )
                    )}
                      
                      </label>
                    </div>

                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>         
                    
                      </>):(<><Notfound/></>)}
     
    </>
  );
};

export default Checkout;
