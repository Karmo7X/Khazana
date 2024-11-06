import React from 'react'

const Shop_sec = () => {
  return (
    <>
    <section class="shop-section section-padding fix">
    <div class="container">
        <div class="section-title-area">
            <div class="section-title wow fadeInUp" data-wow-delay=".3s">
                <h2>Top Selling Books</h2>
            </div>
            <a href="shop.html" class="theme-btn transparent-btn wow fadeInUp" data-wow-delay=".5s">
                Explore More <i class="fa-solid fa-arrow-right-long"></i>
            </a>
        </div>
        <div class="swiper book-slider">
            <div class="swiper-wrapper">
                {/* <!-- Book Item Template Start --> */}
                <div class="swiper-slide">
                    <div class="shop-box-items style-2">
                        <div class="book-thumb center">
                            <a href="shop-details">
                                <img src="assets/img/book/01.png" alt="img" />
                            </a>
                            <ul class="post-box">
                                <li>Hot</li>
                                <li>-30%</li>
                            </ul>
                            <ul class="shop-icon d-grid justify-content-center align-items-center">
                                <li><a href="shop-cart.html"><i class="far fa-heart"></i></a></li>
                                <li>
                                    <a href="shop-cart.html">
                                        <img class="icon" src="assets/img/icon/shuffle.svg" alt="svg-icon" />
                                    </a>
                                </li>
                                <li><a href="shop-details.html"><i class="far fa-eye"></i></a></li>
                            </ul>
                        </div>
                        <div class="shop-content">
                            <h5>Design Low Book</h5>
                            <h3><a href="shop-details.html">Simple Things You To Save BOOK</a></h3>
                            <ul class="price-list">
                                <li>$30.00</li>
                                <li><del>$39.99</del></li>
                            </ul>
                            <ul class="author-post">
                                <li class="authot-list">
                                    <span class="thumb">
                                        <img src="assets/img/testimonial/client-1.png" alt="img" />
                                    </span>
                                    <span class="content">Wilson</span>
                                </li>
                                <li class="star">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                </li>
                            </ul>
                        </div>
                        <div class="shop-button">
                            <a href="shop-details.html" class="theme-btn">
                                <i class="fa-solid fa-basket-shopping"></i> Add To Cart
                            </a>
                        </div>
                    </div>
                </div>
                {/* <!-- Book Item Template End -->
                
                <!-- Duplicate the above block with unique content for each book --> */}
                
                <div class="swiper-slide">
                    <div class="shop-box-items style-2">
                        <div class="book-thumb center">
                            <a href="shop-details">
                                <img src="assets/img/book/02.png" alt="img" />
                            </a>
                            <ul class="shop-icon d-grid justify-content-center align-items-center">
                                <li><a href="shop-cart.html"><i class="far fa-heart"></i></a></li>
                                <li>
                                    <a href="shop-cart.html">
                                        <img class="icon" src="assets/img/icon/shuffle.svg" alt="svg-icon" />
                                    </a>
                                </li>
                                <li><a href="shop-details.html"><i class="far fa-eye"></i></a></li>
                            </ul>
                        </div>
                        <div class="shop-content">
                            <h5>Design Low Book</h5>
                            <h3><a href="shop-details.html">How Deal With Very Bad BOOK</a></h3>
                            <ul class="price-list">
                                <li>$30.00</li>
                                <li><del>$39.99</del></li>
                            </ul>
                            <ul class="author-post">
                                <li class="authot-list">
                                    <span class="thumb">
                                        <img src="assets/img/testimonial/client-2.png" alt="img" />
                                    </span>
                                    <span class="content">Alexander</span>
                                </li>
                                <li class="star">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                </li>
                            </ul>
                        </div>
                        <div class="shop-button">
                            <a href="shop-details.html" class="theme-btn">
                                <i class="fa-solid fa-basket-shopping"></i> Add To Cart
                            </a>
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

export default Shop_sec