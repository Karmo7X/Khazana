import React, { useEffect, useState } from 'react'
import { useTranslation } from "react-i18next";
import { Navigation ,Autoplay} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Wishlistcomponent from '../wishlist/Wishlistcomponent';



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
                                <img src={book?.coverImage} alt="Book cover" />
                            </a>
                            <ul className="post-box">
                            {book?.isAvailablePdf  === true ?  <li>{t("global.currency.pdf")}</li>: null}
                            {book?.isAvailablePaper === true ?<li>{t("global.currency.paper")}</li>: null  }
            </ul>
                            <Wishlistcomponent bookid={book?.id} wishlist={book?.wishlist}/>
                        </div>
                        <div className="shop-content">
                            <h5>{book?.category}</h5>
                            <h3><a href="/Single/:id">{book?.title}</a></h3>
                            <ul className="price-list">
                            <li> {t("global.currency.pdf")} {book?.pricePdf}{t("global.currency.rs")}</li> <br/>
                            <li>{t("global.currency.paper")} {book.pricePaper}{t("global.currency.rs")} </li>
                            </ul>
                            <ul className="author-post">
                                <li className="authot-list">
                                    <span className="thumb">
                                    <img src={book?.author?.img} alt={book?.author?.name} />
                                    </span>
                                    <span className="content fw-bold">{book?.author?.name}</span>
                                </li>
                                <div className="star">
                        {Array(5).fill(book?.rate).map((_, starIndex) => (
                          <i
                            key={starIndex}
                            className={starIndex < book?.rate ? "fa-solid fa-star" : "fa-regular fa-star"}
                          ></i>
                        ))}
                      </div>
                            </ul>
                        </div>
                        <div className="shop-button">
                            <a href={`/Single/${book?.id}`}  className="theme-btn">
                                <i className="fa-solid fa-basket-shopping"></i> {t("global.add_to_cart")}
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