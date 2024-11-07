import React from 'react'
import '../../../public/assets/css/main.css'
const TopRate = () => {
  return (
    <>
    <section class="top-rating-book-section section-padding section-bg">
    <div class="container">
        <div class="top-rating-book-wrapper">
            <div class="section-title-area">
                <div class="section-title">
                    <h2 class="wow fadeInUp" data-wow-delay=".3s">Top Rating Books</h2>
                </div>
                <a href="Shop" class="theme-btn transparent-btn wow fadeInUp" data-wow-delay=".5s">
                    View More <i class="fa-solid fa-arrow-right-long"></i>
                </a>
            </div>
            <div class="row">
                {/* <!-- Book Item Template --> */}
                <div class="col-xl-6 wow fadeInUp" data-wow-delay=".3s">
                    <div class="top-ratting-box-items ">
                        <div class="book-thumb">
                            <a href="/Single/:id">
                                <img src="assets/img/top-book/01.png" alt="Top book image"/>
                            </a>
                        </div>
                        <div class="book-content">
                            <div class="title-header">
                                <div>
                                    <h5>Design Low Book</h5>
                                    <h3><a href="/Single/:id">Simple Things You To Save BOOK</a></h3>
                                </div>
                                <ul class="shop-icon d-flex justify-content-center align-items-center">
                                    <li><a href="/Cart"><i class="far fa-heart"></i></a></li>
                                    <li><a href="/Cart"><img class="icon" src="assets/img/icon/shuffle.svg" alt="Shuffle icon"/></a></li>
                                    <li><a href="/Single/:id"><i class="far fa-eye"></i></a></li>
                                </ul>
                            </div>
                            <span class="mt-10">$30.00</span>
                            <ul class="author-post">
                                <li class="author-list">
                                    <span class="thumb"><img src="assets/img/testimonial/client-2.png" alt="Author image"/></span>
                                    <span class="content mt-10">Wilson</span>
                                </li>
                            </ul>
                            <div class="shop-btn">
                                <div class="star">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                </div>
                                <a href="/Single/:id" class="theme-btn">
                                    <i class="fa-solid fa-basket-shopping"></i> Add To Cart
                                </a>
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

export default TopRate