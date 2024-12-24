import React, { useEffect, useState } from 'react'
import { useTranslation } from "react-i18next";
import Wishlistcomponent from '../wishlist/Wishlistcomponent';
import bookundefine from '../../../public/assets/img/bookundefine.jpg'
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
                    <a href={`/Single/${book?.id}`}>
                        <img src={book?.coverImage  ? book?.coverImage:bookundefine} alt={book?.title} />
                    </a>
                    <ul className="post-box">
                    {book?.isAvailablePdf  === true ?  <li>{t("global.currency.pdf")}</li>: null}
                    {book?.isAvailablePaper === true ?<li>{t("global.currency.paper")}</li>: null  }
            </ul>
                    <Wishlistcomponent bookid={book?.id} wishlist={book?.wishlist}/>
                </div>

                <div className="shop-content">
                    <h5>{book?.category}</h5>
                    <h3><a href={`/Single/${book?.id}`}>{book?.title}</a></h3>
                    <ul className="price-list">
                    <li> {t("global.currency.pdf")} {book?.pricePdf}{t("global.currency.rs")}</li> <br/>
                    <li>{t("global.currency.paper")} {book.pricePaper}{t("global.currency.rs")} </li>
                    </ul>
                    <ul className="author-post">
                        <li className="authot-list">
                            <span className="thumb">
                                <img src={book?.author?.profileImg || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} alt={book?.author?.name} />
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
                    <a href={`/Single/${book?.id}`} className="theme-btn">
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