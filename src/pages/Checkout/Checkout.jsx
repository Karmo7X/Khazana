import React from 'react'

const Checkout = () => {
  return (
    <>
     {/* <!-- Breadcumb Section Start --> */}
    <div class="breadcrumb-wrapper">
        <div class="book1">
            <img src="assets/img/hero/book1.png" alt="book"/>
        </div>
        <div class="book2">
            <img src="assets/img/hero/book2.png" alt="book"/>
        </div>
        <div class="container">
            <div class="page-heading">
                <h1>Checkout</h1>
                <div class="page-header">
                    <ul class="breadcrumb-items wow fadeInUp" data-wow-delay=".3s">
                        <li>
                            <a href="index.html">
                                Home
                            </a>
                        </li>
                        <li>
                            <i class="fa-solid fa-chevron-right"></i>
                        </li>
                        <li>
                            Checkout
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    {/* <!-- Checkout Section Start --> */}
    <section class="checkout-section fix section-padding">
        <div class="container">
            <div class="row g-5">
                <div class="col-lg-9">
                    <form action="#" method="post">
                        <div class="checkout-single-wrapper">
                            <div class="checkout-single boxshado-single">
                                <h4>Billing Details</h4>
                                <div class="checkout-single-form">
                                    <div class="row g-4">
                                        <div class="col-lg-6">
                                            <div class="input-single">
                                                <span>First Name*</span>
                                                <input type="text" name="user-first-name" id="userFirstName" required=""
                                                    placeholder="First Name"/>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="input-single">
                                                <span>Last Name*</span>
                                                <input type="text" name="user-last-name" id="userLastName" required=""
                                                    placeholder="Last Name"/>
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="input-single">
                                                <span>Company name (optional)</span>
                                                <input name="company-name" id="companyname"/>
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="input-single">
                                                <span>Country*</span>
                                                <input name="country" id="country" placeholder="Select a country"/>
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="input-single">
                                                <span>Street Address*</span>
                                                <input name="user-address" id="userAddress"
                                                    placeholder="Home number and street name"/>
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="input-single">
                                                <span>Street Address*</span>
                                                <input name="user-address" id="userAddress2"
                                                    placeholder="Apartment, suite, unit, etc. (optional)"/>
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="input-single">
                                                <span>Town/ City*</span>
                                                <input name="towncity" id="towncity"/>
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="input-single">
                                                <span>Phone*</span>
                                                <input name="phone" id="phone" placeholder="phone"/>
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="input-single">
                                                <span>Email Address*</span>
                                                <input name="email" id="email22" placeholder="email"/>
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="input-check payment-save">
                                                <input type="checkbox" class="form-check-input" name="save-for-next" id="saveForNext111"/>
                                                <label for="saveForNext">Save for my next payment</label>
                                            </div>
                                            <div class="input-check payment-save style-2">
                                                <input type="checkbox" class="form-check-input" name="save-for-next"
                                                    id="saveForNext2"/>
                                                <label for="saveForNext2">Ship to a different address?</label>
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="input-single">
                                                <span>order notes (optional)</span>
                                                <textarea name="notes" id="notes"
                                                    placeholder="Notes about your order, e.g special notes for delivery."></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="col-lg-3">
                    <div class="checkout-order-area">
                        <h3>Our Order</h3>
                        <div class="product-checout-area">
                            <div class="checkout-item d-flex align-items-center justify-content-between">
                                <p>Product</p>
                                <p>Subtotal</p>
                            </div>
                            <div class="checkout-item d-flex align-items-center justify-content-between">
                                <p>Fashion Women’s 1</p>
                                <p>$29.00</p>
                            </div>
                            <div class="checkout-item d-flex justify-content-between">
                                <p>Shipping</p>
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
                            </div>
                            <div class="checkout-item d-flex align-items-center justify-content-between">
                                <p>Total</p>
                                <p>$55.00</p>
                            </div>
                            <div class="checkout-item-2">
                                <div class="form-check-2 d-flex align-items-center from-customradio-2">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault"
                                        id="flexRadioDefault1222"/>
                                    <label class="form-check-label" for="flexRadioDefault1222">
                                        Direct bank transfer
                                    </label>
                                </div>
                                <p>
                                    Make your payment directly into our bank account please use your Order ID as the
                                    payment reference. Your order will not be shipped until the funds have cleared in
                                    our account.
                                </p>
                                <div class="form-check-3 d-flex align-items-center from-customradio-2 mt-3">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault"
                                        id="flexRadioDefault12224"/>
                                    <label class="form-check-label" for="flexRadioDefault12224">
                                        Cash on delivery
                                    </label>
                                </div>
                                <div class="form-check-3 d-flex align-items-center from-customradio-2 mt-3">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault"
                                        id="flexRadioDefault12225"/>
                                    <label class="form-check-label" for="flexRadioDefault12225">
                                        Paypal
                                    </label>
                                    <ul class="brand-logo">
                                        <li>
                                            <a href="Checkout">
                                                <img src="assets/img/PayPal.png" alt="img"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="Checkout">
                                                <img src="assets/img/GooglePay.png" alt="img"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="Checkout">
                                                <img src="assets/img/Mastercard2.png" alt="img"/>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Checkout