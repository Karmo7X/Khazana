import React, { useEffect, useState } from 'react'
import CTA from '../../components/CTA/CTA'
import TopRate from '../../components/Toprate/TopRate'
import Shop_sec from '../../components/Shop_section/Shop_sec'
import Authors from '../../components/Authors/Authors'
import Top_Books from '../../components/Top_Books/Top_Books'
import Top_category from '../../components/Top_category/Top_category'
import bookImage from '/assets/img/hero/book.png';
import frameImage from '/assets/img/hero/frame.png';
import frameImage2 from '/assets/img/hero/frame-2.png';
import xstarImage from '/assets/img/hero/xstar.png';
import frameShapeImage from '/assets/img/hero/frame-shape.png';
import bgShapeImage from '/assets/img/hero/bg-shape.png';
import bgShape2Image from '/assets/img/hero/bg-shape2.png';
import girlImage from '/assets/img/hero/hero-girl2.png';
import bookimg from '/assets/img/book/01.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation ,Autoplay } from 'swiper/modules';
import { useTranslation } from "react-i18next";
import Books_section from '../../components/books_Section/Bookslist'
import Wishlistcomponent from '../../components/wishlist/Wishlistcomponent'
import { useDispatch } from 'react-redux'
import { GetProductApi } from '../../Api/Product/Product'
import bookundefine from '../../../public/assets/img/bookundefine.jpg'
const Home = () => {
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();
   
      const [books ,setBooks]=useState([])
      useEffect(()=>{
         dispatch(GetProductApi()).then((res)=>{
          if(res.payload?.code === 200){
            setBooks(res.payload?.data?.products)
          }
         })
      },[])
  return (
    <>
    
    {/* <!-- Hero Section start  --> */}
    <div class="hero-section hero-1 fix">
        <div class="container">
        <div className="row">
            <div className="col-sm-12 col-xl-8 col-lg-6">
                <div className="hero-items">
                    <div className="book-shape">
                        {/* <img src={bookImage} alt="Book Shape" /> */}
                    </div>
                    <div className="frame-shape1 float-bob-x">
                        <img src={frameImage} alt="Frame Shape 1" />
                    </div>
                    <div className="frame-shape2 float-bob-y">
                        <img src={frameImage2} alt="Frame Shape 2" />
                    </div>
                    <div className="frame-shape3">
                        <img src={xstarImage} alt="X Star" />
                    </div>
                    <div className="frame-shape4 float-bob-x">
                        <img src={frameShapeImage} alt="Frame Shape" />
                    </div>
                    {/* <div className="bg-shape1">
                        <img src={bgShapeImage} alt="Background Shape 1" />
                    </div> */}
                    <div className="bg-shape2">
                        <img src={bgShape2Image} alt="Background Shape 2" />
                    </div>
                    <div className="hero-content">
                        <h6 className="wow fadeInUp" data-wow-delay=".3s">{t("global.home.heroSection.discount")}</h6>
                        <h1 className="wow fadeInUp" data-wow-delay=".5s"
                         dangerouslySetInnerHTML={{
                            __html: t("global.home.heroSection.heading")
                          }}
                        ></h1>
                        <div className="form-clt wow fadeInUp" data-wow-delay=".9s">
                            <button type="submit" className="theme-btn">
                            {t("global.home.heroSection.shopNow")} <i className="fa-solid fa-arrow-right-long"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 col-xl-4 col-lg-6 ">
                <div className="girl-image">
                    <img className="float-bob-x" style={{width:'750px'}} src={girlImage} alt="Hero Girl"  />
                </div>
            </div>
        </div>
        </div>
    </div>

    {/* <!-- Feature Section start  --> */}
    <section class="feature-section fix section-padding">
        <div class="container">
            <div class="feature-wrapper">
                <div class="feature-box-items wow fadeInUp" data-wow-delay=".2s">
                    <div class="icon">
                        <i class="icon-icon-1"></i>
                    </div>
                    <div class="content">
                        <h3> {t("global.home.featureSection.returnRefund.title")}</h3>
                        <p>{t("global.home.featureSection.returnRefund.description")}</p>
                    </div>
                </div>
                <div class="feature-box-items wow fadeInUp" data-wow-delay=".4s">
                    <div class="icon">
                        <i class="icon-icon-2"></i>
                    </div>
                    <div class="content">
                        <h3>{t("global.home.featureSection.securePayment.title")}</h3>
                        <p>{t("global.home.featureSection.securePayment.description")}</p>
                    </div>
                </div>
                <div class="feature-box-items wow fadeInUp" data-wow-delay=".6s">
                    <div class="icon">
                        <i class="icon-icon-3"></i>
                    </div>
                    <div class="content">
                        <h3>{t("global.home.featureSection.qualitySupport.title")}</h3>
                        <p>{t("global.home.featureSection.qualitySupport.description")}</p>
                    </div>
                </div>
                <div class="feature-box-items wow fadeInUp" data-wow-delay=".8s">
                    <div class="icon">
                        <i class="icon-icon-4"></i>
                    </div>
                    <div class="content">
                        <h3>{t("global.home.featureSection.dailyOffers.title")}</h3>
                        <p>{t("global.home.featureSection.dailyOffers.description")}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
   {/* <!-- Book Catagories Section start  --> */}
    <Top_category/>
    {/* <!-- Authors Section start  --> */}
    <Authors/>
{/* <!-- Shop Section start  --> */}
<Top_Books data={books.slice(0,20)}/>
     {/* <!-- Shop Section start  --> */}
    <section class="shop-section section-padding fix pt-0">
        <div class="container">
            <div class="section-title-area">
                <div class="section-title">
                    <h2 class="wow fadeInUp" data-wow-delay=".3s">{t("global.home.sectionTitle")}</h2>
                </div>
                <a href="shop.html" class="theme-btn transparent-btn wow fadeInUp" data-wow-delay=".5s">{t("global.home.exploreMore")} <i
                        class="fa-solid fa-arrow-right-long"></i></a>
            </div>
            <Swiper
             modules={[Navigation,Autoplay]}
            loop={false}
            spaceBetween={10} // Space between slides
            slidesPerView={5} // Number of slides visible at once
            navigation={false} // Add navigation buttons
            pagination={{ clickable: false }} // Enable pagination
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
            {/* Slide 1 */}
            {books.slice(0,20).map((book,idx)=>{
                return(<>
                 <SwiperSlide key={idx}>
                 <div className="shop-box-items style-2" key={book?.id}>
          <div className="book-thumb center">
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
            <h3>
              <a href={`/Single/${book.id}`}>{book.title}</a>
            </h3>
            <ul className="price-list">
            <li> {t("global.currency.pdf")} {book?.pricePdf}{t("global.currency.rs")}</li> <br/>
            <li>{t("global.currency.paper")} {book.pricePaper}{t("global.currency.rs")} </li>
            </ul>
            <ul className="author-post">
              <li className="authot-list">
                <span className="thumb">
                  <img
                    src={book?.author?.profileImg || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}
                    alt="img"
                  />
                </span>
                <span className="content">{book?.author?.name}</span>
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
               </SwiperSlide>
                </>)
            })}
           
           
            
        </Swiper>
        </div>
    </section>

   

    

    {/* <!-- Cta Banner Section start  --> */}
    {/* <CTA/> */}
    <Books_section data={books.slice(0,20)}/>

    {/* <!-- Top Ratting Book Section start  --> */}
     <TopRate data={books.slice(0,20)}/>

    
    

    

   
    </>
   
  )
}

export default Home