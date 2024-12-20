import React, { useEffect, useState } from 'react';
import '../../../public/assets/css/main.css'
import { useTranslation } from "react-i18next";
const TopRate = ({data}) => {
    const { t, i18n } = useTranslation();
    const [books,setBooks]=useState([])
    useEffect(()=>{
      setBooks(data)
    },[data])
  return (
    <>
    <section class="top-rating-book-section section-padding section-bg">
    <div class="container">
        <div class="top-rating-book-wrapper">
            <div class="section-title-area">
                <div class="section-title">
                    <h2 class="wow fadeInUp" data-wow-delay=".3s">{t("global.home.top_rate")}</h2>
                </div>
                <a href="Shop" class="theme-btn transparent-btn wow fadeInUp" data-wow-delay=".5s">
                {t("global.home.exploreMore")} <i class="fa-solid fa-arrow-right-long"></i>
                </a>
            </div>
            <div class="row">
                {/* <!-- Book Item Template --> */}
                {books.map((book, index) => (
              <div className="col-xl-6 wow fadeInUp" data-wow-delay={`${0.3 + index * 0.1}s`} key={book.id}>
                <div className="top-ratting-box-items">
                  <div className="book-thumb">
                    <a href={`/Single/${book?.id}`}>
                      <img src={book?.coverImage} alt={`${book?.title} image`} />
                    </a>
                  </div>
                  <div className="book-content">
                    <div className="title-header">
                      <div>
                        {/* <h5>{book.subtitle}</h5> */}
                        <h3><a href={`/Single/${book?.id}`}>{book?.title}</a></h3>
                      </div>
                      <ul className="shop-icon d-flex justify-content-center align-items-center">
                        <li><a href="/Cart"><i className="far fa-heart"></i></a></li>
                        {/* <li><a href="/Cart"><img className="icon" src="assets/img/icon/shuffle.svg" alt="Shuffle icon" /></a></li> */}
                        <li><a href={`/Single/${book.id}`}><i className="far fa-eye"></i></a></li>
                      </ul>
                    </div>
                    <span className="mt-10">{t("global.currency.pdf")} {book?.pricePdf} {t("global.currency.rs")} </span> <br/>
                    <span className="mt-10">{t("global.currency.paper")} {book?.pricePaper} {t("global.currency.rs")} </span>
                    <ul className="author-post">
                      <li className="author-list">
                        <span className="thumb"><img src={book?.author?.profileImg} alt={`${book?.author?.name} image`} /></span>
                        <span className="content mt-10 fw-bold">{book?.author?.name}</span>
                      </li>
                    </ul>
                    <div className="shop-btn">
                    <div className="star">
                        {Array(5).fill(book?.rate).map((_, starIndex) => (
                          <i
                            key={starIndex}
                            className={starIndex < book?.rate ? "fa-solid fa-star" : "fa-regular fa-star"}
                          ></i>
                        ))}
                      </div>
                      <a href={`/Single/${book.id}`} className="theme-btn">
                        <i className="fa-solid fa-basket-shopping"></i> {t("global.add_to_cart")}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            </div>
        </div>
    </div>
</section>

    </>
  )
}

export default TopRate