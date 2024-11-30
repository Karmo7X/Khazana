import React, { useEffect, useState } from 'react'
import { useTranslation } from "react-i18next";
import { Navigation ,Autoplay} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';



const Shop_sec = ({data}) => {
    const { t, i18n } = useTranslation();
    const [books,setBooks]=useState([])
    useEffect(()=>{
      setBooks(data)
    },[data])
  return (
    <>
    <section class="shop-section section-padding fix">
    <div class="container">
        <div class="section-title-area">
            <div class="section-title wow fadeInUp" data-wow-delay=".3s">
                <h2> {t("global.home.top_selling_books")}</h2>
            </div>
            <a href="Shop" class="theme-btn transparent-btn wow fadeInUp" data-wow-delay=".5s">
            {t("global.home.exploreMore")} <i class="fa-solid fa-arrow-right-long"></i>
            </a>
        </div>
        
      <Swiper 
            modules={[Navigation,Autoplay]}
            spaceBetween={20}
            slidesPerView={5}
            navigation={{
                nextEl: '.array-next',
                prevEl: '.array-prev',
            }}
            autoplay={{ delay: 2000 }}
            breakpoints={{
                0: {
                    slidesPerView: 1,
                  },
                  390: {
                    slidesPerView: 1,
                  },
                  502: {
                    slidesPerView: 1,
                  },
                  802: {
                    slidesPerView: 3,
                  },
                  992: {
                    slidesPerView: 4,
                  },
                  1200: {
                    slidesPerView: 5,
                  },
              }}
        >
            {books.map((book) => (
                <SwiperSlide key={book.id}>
                    <div className="shop-box-items style-2">
                        <div className="book-thumb center">
                            <a href="Single/:id">
                                <img src={book.image} alt="Book cover" />
                            </a>
                            {/* <ul className="post-box">
                                {book.labels.map((label, index) => (
                                    <li key={index}>{label}</li>
                                ))}
                            </ul> */}
                            <ul className="shop-icon d-grid justify-content-center align-items-center">
                                <li><a href="/Cart"><i className="far fa-heart"></i></a></li>
                                <li>
                                    <a href="/Cart">
                                        <img className="icon" src="assets/img/icon/shuffle.svg" alt="svg-icon" />
                                    </a>
                                </li>
                                <li><a href="/Single/:id"><i className="far fa-eye"></i></a></li>
                            </ul>
                        </div>
                        <div className="shop-content">
                            <h5>{book.category}</h5>
                            <h3><a href="/Single/:id">{book.title}</a></h3>
                            <ul className="price-list">
                                <li>{book.price}</li>
                                <li><del>{book.discountPrice}</del></li>
                            </ul>
                            <ul className="author-post">
                                <li className="authot-list">
                                    <span className="thumb">
                                        <img src={book.authorImage} alt="Author" />
                                    </span>
                                    <span className="content">{book.authorName}</span>
                                </li>
                                <li className="star">
                                    {[...Array(5)].map((_, i) => (
                                        <i
                                            key={i}
                                            className={i < book.rating ? "fa-solid fa-star" : "fa-regular fa-star"}
                                        ></i>
                                    ))}
                                </li>
                            </ul>
                        </div>
                        <div className="shop-button">
                            <a href="/Single/:id" className="theme-btn">
                                <i className="fa-solid fa-basket-shopping"></i> Add To Cart
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
</section>

    </>
  )
}

export default Shop_sec