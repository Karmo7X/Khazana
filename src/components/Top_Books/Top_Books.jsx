import React, { useEffect, useState } from 'react'
import { useTranslation } from "react-i18next";
const Top_Books = ({data}) => {
    const { t, i18n } = useTranslation();
    const [books,setBooks]=useState([])
    useEffect(()=>{
      setBooks(data)
    },[data])
    return (
    <>
    <section className="shop-section section-padding fix">
    <div className="container">
        <div className="section-title-area">
            <div className="section-title mb- wow fadeInUp" data-wow-delay=".3s">
                <h2>{t("global.home.top_books.khazanaTopBooks")}</h2>
            </div>
            <a href="Shop" className="theme-btn transparent-btn wow fadeInUp" data-wow-delay=".5s">
            {t("global.home.top_books.exploreMore")} <i className="fa-solid fa-arrow-right-long"></i>
            </a>
        </div>
        <div className="book-shop-wrapper">
            
            {books.map((book,idx)=>{
                    return(<>  <div className="shop-box-items style-2">
                     <div className="shop-box-items style-2">
               
                      <div className="book-thumb center" key={idx}>
                    <a href="shop-details">
                        <img src={book.image} alt={book.title} />
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
                            <a href={`/Single/${book.id}`}><i className="far fa-eye"></i></a>
                        </li>
                    </ul>
                </div>
                <div className="shop-content">
                    <h5>{book.category}</h5>
                    <h3><a href={`/Single/${book.id}`}>{book.title}</a></h3>
                    <ul className="price-list">
                        <li>{book.price}</li>
                        <li><del>{book.originalPrice}</del></li>
                    </ul>
                    <ul className="author-post">
                        <li className="authot-list">
                            <span className="thumb">
                                <img src={book.author_img} alt={book.title} />
                            </span>
                            <span className="content fw-bold">{book.author}</span>
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
                    <a href={`/Single/${book.id}`} className="theme-btn">
                        <i className="fa-solid fa-basket-shopping"></i> {t("global.add_to_cart")}
                    </a>
                </div>
                    
                
               </div>  
            </div>
            </>)
                })}
               
          

            {/* Repeat similar structure for each book item */}

            {/* <div className="cta-shop-box" style={{height:'510px'}}>
                <h2 className="wow fadeInUp" data-wow-delay=".2s"> {t("global.home.top_books.findYourNextBooks")}</h2>
                <h6 className="wow fadeInUp" data-wow-delay=".4s">{t("global.home.top_books.discountOffer")}</h6>
                <a href="Shop" className="theme-btn white-bg wow fadeInUp" data-wow-delay=".6s">
                {t("global.home.top_books.shopNow")} <i className="fa-solid fa-arrow-right-long"></i>
                </a>
                <div className="girl-shape">
                    <img src="assets/img/girl-shape.png" className='img-fluid'  alt="Shape Image" />
                </div>
                <div className="circle-shape">
                    <img src="assets/img/circle-shape.png" alt="Shape Image" />
                </div>
            </div> */}
        </div>
    </div>
</section>

    </>
  )
}

export default Top_Books