import React from 'react'

const Top_Books = () => {
  return (
    <>
    <section className="shop-section section-padding fix">
    <div className="container">
        <div className="section-title-area">
            <div className="section-title mb- wow fadeInUp" data-wow-delay=".3s">
                <h2>Khazana Top Books</h2>
            </div>
            <a href="Shop" className="theme-btn transparent-btn wow fadeInUp" data-wow-delay=".5s">
                Explore More <i className="fa-solid fa-arrow-right-long"></i>
            </a>
        </div>
        <div className="book-shop-wrapper">
            <div className="shop-box-items style-2">
                <div className="book-thumb center">
                    <a href="shop-details">
                        <img src="assets/img/book/05.png" alt="Book Thumbnail" />
                    </a>
                    <ul className="shop-icon d-grid justify-content-center align-items-center">
                        <li>
                            <a href="/Cart"><i className="far fa-heart"></i></a>
                        </li>
                        <li>
                            <a href="/Cart">
                                <img className="icon" src="assets/img/icon/shuffle.svg" alt="Shuffle Icon" />
                            </a>
                        </li>
                        <li>
                            <a href="/Single/:id"><i className="far fa-eye"></i></a>
                        </li>
                    </ul>
                </div>
                <div className="shop-content">
                    <h5>Design Low Book</h5>
                    <h3><a href="/Single/:id">Flovely and Unicom <br /> Erna</a></h3>
                    <ul className="price-list">
                        <li>30.00 R.S</li>
                        <li><del>39.99 R.S</del></li>
                    </ul>
                    <ul className="author-post">
                        <li className="authot-list">
                            <span className="thumb">
                                <img src="assets/img/testimonial/client-1.png" alt="Author Thumbnail" />
                            </span>
                            <span className="content">(Author) Albert</span>
                        </li>
                        <li className="star">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                        </li>
                    </ul>
                </div>
                <div className="shop-button">
                    <a href="/Single/:id" className="theme-btn">
                        <i className="fa-solid fa-basket-shopping"></i> Add To Cart
                    </a>
                </div>
            </div>

            {/* Repeat similar structure for each book item */}

            <div className="cta-shop-box">
                <h2 className="wow fadeInUp" data-wow-delay=".2s">Find Your Next Books!</h2>
                <h6 className="wow fadeInUp" data-wow-delay=".4s">And get your 25% discount now!</h6>
                <a href="Shop" className="theme-btn white-bg wow fadeInUp" data-wow-delay=".6s">
                    Shop Now <i className="fa-solid fa-arrow-right-long"></i>
                </a>
                <div className="girl-shape">
                    <img src="assets/img/girl-shape.png" className='img-fluid'  alt="Shape Image" />
                </div>
                <div className="circle-shape">
                    <img src="assets/img/circle-shape.png" alt="Shape Image" />
                </div>
            </div>
        </div>
    </div>
</section>

    </>
  )
}

export default Top_Books