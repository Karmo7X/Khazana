import React from 'react'
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
import girlImage from '/assets/img/hero/hero-girl.png';
import bookimg from '/assets/img/book/01.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation ,Autoplay } from 'swiper/modules';
import { useTranslation } from "react-i18next";
const Home = () => {
    const { t, i18n } = useTranslation();
  return (
    <>
    
    {/* <!-- Hero Section start  --> */}
    <div class="hero-section hero-1 fix">
        <div class="container">
        <div className="row">
            <div className="col-sm-12 col-xl-8 col-lg-6">
                <div className="hero-items">
                    <div className="book-shape">
                        <img src={bookImage} alt="Book Shape" />
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
<Top_Books/>
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
            <SwiperSlide>
                <div className="shop-box-items style-2">
                    <div className="book-thumb center">
                        <a href="shop-details">
                            <img src={bookimg} alt="img" />
                        </a>
                        <ul className="post-box">
                            <li>Hot</li>
                            <li>-30%</li>
                        </ul>
                        <ul className="shop-icon d-grid justify-content-center align-items-center">
                            <li>
                                <a href="/Cart"><i className="far fa-heart"></i></a>
                            </li>
                            <li>
                                <a href="/Cart">
                                    <img className="icon" src={'/assets/img/icon/shuffle.svg'} alt="svg-icon" />
                                </a>
                            </li>
                            <li>
                                <a href="/Single/:id"><i className="far fa-eye"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div className="shop-content">
                        <h5>Design Low Book</h5>
                        <h3><a href="/Single/:id">Simple Things You To <br /> Save BOOK</a></h3>
                        <ul className="price-list">
                            <li>30.00 R.S</li>
                            <li><del>39.99 R.S</del></li>
                        </ul>
                        <ul className="author-post">
                            <li className="authot-list">
                                <span className="thumb">
                                    <img src={'/assets/img/testimonial/client-1.png'} alt="img" />
                                </span>
                                <span className="content">Wilson</span>
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
            </SwiperSlide>
            <SwiperSlide>
                <div className="shop-box-items style-2">
                    <div className="book-thumb center">
                        <a href="shop-details">
                            <img src={bookimg} alt="img" />
                        </a>
                        <ul className="post-box">
                            <li>Hot</li>
                            <li>-30%</li>
                        </ul>
                        <ul className="shop-icon d-grid justify-content-center align-items-center">
                            <li>
                                <a href="/Cart"><i className="far fa-heart"></i></a>
                            </li>
                            <li>
                                <a href="/Cart">
                                    <img className="icon" src={'/assets/img/icon/shuffle.svg'} alt="svg-icon" />
                                </a>
                            </li>
                            <li>
                                <a href="/Single/:id"><i className="far fa-eye"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div className="shop-content">
                        <h5>Design Low Book</h5>
                        <h3><a href="/Single/:id">Simple Things You To <br /> Save BOOK</a></h3>
                        <ul className="price-list">
                            <li>30.00 R.S</li>
                            <li><del>39.99 R.S</del></li>
                        </ul>
                        <ul className="author-post">
                            <li className="authot-list">
                                <span className="thumb">
                                    <img src={'/assets/img/testimonial/client-1.png'} alt="img" />
                                </span>
                                <span className="content">Wilson</span>
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
            </SwiperSlide>
            <SwiperSlide>
                <div className="shop-box-items style-2">
                    <div className="book-thumb center">
                        <a href="shop-details">
                            <img src={bookimg} alt="img" />
                        </a>
                        <ul className="post-box">
                            <li>Hot</li>
                            <li>-30%</li>
                        </ul>
                        <ul className="shop-icon d-grid justify-content-center align-items-center">
                            <li>
                                <a href="/Cart"><i className="far fa-heart"></i></a>
                            </li>
                            <li>
                                <a href="/Cart">
                                    <img className="icon" src={'/assets/img/icon/shuffle.svg'} alt="svg-icon" />
                                </a>
                            </li>
                            <li>
                                <a href="/Single/:id"><i className="far fa-eye"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div className="shop-content">
                        <h5>Design Low Book</h5>
                        <h3><a href="/Single/:id">Simple Things You To <br /> Save BOOK</a></h3>
                        <ul className="price-list">
                            <li>30.00 R.S</li>
                            <li><del>39.99 R.S</del></li>
                        </ul>
                        <ul className="author-post">
                            <li className="authot-list">
                                <span className="thumb">
                                    <img src={'/assets/img/testimonial/client-1.png'} alt="img" />
                                </span>
                                <span className="content">Wilson</span>
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
            </SwiperSlide>
            <SwiperSlide>
                <div className="shop-box-items style-2">
                    <div className="book-thumb center">
                        <a href="shop-details">
                            <img src={bookimg} alt="img" />
                        </a>
                        <ul className="post-box">
                            <li>Hot</li>
                            <li>-30%</li>
                        </ul>
                        <ul className="shop-icon d-grid justify-content-center align-items-center">
                            <li>
                                <a href="/Cart"><i className="far fa-heart"></i></a>
                            </li>
                            <li>
                                <a href="/Cart">
                                    <img className="icon" src={'/assets/img/icon/shuffle.svg'} alt="svg-icon" />
                                </a>
                            </li>
                            <li>
                                <a href="/Single/:id"><i className="far fa-eye"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div className="shop-content">
                        <h5>Design Low Book</h5>
                        <h3><a href="/Single/:id">Simple Things You To <br /> Save BOOK</a></h3>
                        <ul className="price-list">
                            <li>30.00 R.S</li>
                            <li><del>39.99 R.S</del></li>
                        </ul>
                        <ul className="author-post">
                            <li className="authot-list">
                                <span className="thumb">
                                    <img src={'/assets/img/testimonial/client-1.png'} alt="img" />
                                </span>
                                <span className="content">Wilson</span>
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
            </SwiperSlide>
            <SwiperSlide>
                <div className="shop-box-items style-2">
                    <div className="book-thumb center">
                        <a href="shop-details">
                            <img src={bookimg} alt="img" />
                        </a>
                        <ul className="post-box">
                            <li>Hot</li>
                            <li>-30%</li>
                        </ul>
                        <ul className="shop-icon d-grid justify-content-center align-items-center">
                            <li>
                                <a href="/Cart"><i className="far fa-heart"></i></a>
                            </li>
                            <li>
                                <a href="/Cart">
                                    <img className="icon" src={'/assets/img/icon/shuffle.svg'} alt="svg-icon" />
                                </a>
                            </li>
                            <li>
                                <a href="/Single/:id"><i className="far fa-eye"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div className="shop-content">
                        <h5>Design Low Book</h5>
                        <h3><a href="/Single/:id">Simple Things You To <br /> Save BOOK</a></h3>
                        <ul className="price-list">
                            <li>30.00 R.S</li>
                            <li><del>39.99 R.S</del></li>
                        </ul>
                        <ul className="author-post">
                            <li className="authot-list">
                                <span className="thumb">
                                    <img src={'/assets/img/testimonial/client-1.png'} alt="img" />
                                </span>
                                <span className="content">Wilson</span>
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
            </SwiperSlide>
            <SwiperSlide>
                <div className="shop-box-items style-2">
                    <div className="book-thumb center">
                        <a href="shop-details">
                            <img src={bookimg} alt="img" />
                        </a>
                        <ul className="post-box">
                            <li>Hot</li>
                            <li>-30%</li>
                        </ul>
                        <ul className="shop-icon d-grid justify-content-center align-items-center">
                            <li>
                                <a href="/Cart"><i className="far fa-heart"></i></a>
                            </li>
                            <li>
                                <a href="/Cart">
                                    <img className="icon" src={'/assets/img/icon/shuffle.svg'} alt="svg-icon" />
                                </a>
                            </li>
                            <li>
                                <a href="/Single/:id"><i className="far fa-eye"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div className="shop-content">
                        <h5>Design Low Book</h5>
                        <h3><a href="/Single/:id">Simple Things You To <br /> Save BOOK</a></h3>
                        <ul className="price-list">
                            <li>30.00 R.S</li>
                            <li><del>39.99 R.S</del></li>
                        </ul>
                        <ul className="author-post">
                            <li className="authot-list">
                                <span className="thumb">
                                    <img src={'/assets/img/testimonial/client-1.png'} alt="img" />
                                </span>
                                <span className="content">Wilson</span>
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
            </SwiperSlide>
            
        </Swiper>
        </div>
    </section>

   

    

    {/* <!-- Cta Banner Section start  --> */}
    <CTA/>

    {/* <!-- Top Ratting Book Section start  --> */}
     <TopRate/>

    {/* <!-- Shop Section start  --> */}
     <Shop_sec/>

    

   
    </>
   
  )
}

export default Home