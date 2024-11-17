import React from 'react'

const Wishlist = () => {
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
                <h1>Wishlist</h1>
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
                            Wishlist
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    {/* <!-- Shop Cart Section Start --> */}
    <div class="cart-section section-padding">
        <div class="container">
            <div class="main-cart-wrapper">
                <div class="row">
                    <div class="col-12">
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Stock</th>
                                        <th>Subtotal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <span class="d-flex gap-5 align-items-center">
                                                <a href="Wishlist" class="remove-icon">
                                                    <img src="assets/img/icon/icon-9.svg" alt="img"/>
                                                </a>
                                                <span class="cart">
                                                    <img src="assets/img/shop-cart/01.png" alt="img"/>
                                                </span>
                                                <span class="cart-title">
                                                    simple Things You To Save Book
                                                </span>
                                            </span>
                                        </td>
                                        <td>
                                            <span class="cart-price">30.00 R.S</span>
                                        </td>
                                        <td>
                                            <span class="stock-title">
                                                In Stock
                                            </span>
                                        </td>
                                        <td>
                                            <span class="subtotal-price">$120.00</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span class="d-flex gap-5 align-items-center">
                                                <a href="Wishlist" class="remove-icon">
                                                    <img src="assets/img/icon/icon-9.svg" alt="img"/>
                                                </a>
                                                <span class="cart">
                                                    <img src="assets/img/shop-cart/02.png" alt="img"/>
                                                </span>
                                                <span class="cart-title">
                                                    Qple GPad With Retina Sisplay
                                                </span>
                                            </span>
                                        </td>
                                        <td>
                                            <span class="cart-price">$39.00</span>
                                        </td>
                                        <td>
                                            <span class="stock-title">
                                                In Stock
                                            </span>
                                        </td>
                                        <td>
                                            <span class="subtotal-price">$120.00</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span class="d-flex gap-5 align-items-center">
                                                <a href="Wishlist" class="remove-icon">
                                                    <img src="assets/img/icon/icon-9.svg" alt="img"/>
                                                </a>
                                                <span class="cart">
                                                    <img src="assets/img/shop-cart/03.png" alt="img"/>
                                                </span>
                                                <span class="cart-title">
                                                    Flovely and Unicom Erna
                                                </span>
                                            </span>
                                        </td>
                                        <td>
                                            <span class="cart-price">$19.00</span>
                                        </td>
                                        <td>
                                            <span class="stock-title-two">
                                                Out Of Stock
                                            </span>
                                        </td>
                                        <td>
                                            <span class="subtotal-price">$120.00</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Wishlist