import React,{useState,useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation ,Autoplay } from 'swiper/modules';
import { useTranslation } from "react-i18next";
import { GetCategoryApi } from '../../Api/Category/CategorySlice';
import { useDispatch } from "react-redux";
const Top_category = () => {
    const { t, i18n } = useTranslation();
 const dispatch = useDispatch();
const [category, setCategory] = useState([]);
      // get category
      useEffect(() => {
        dispatch(GetCategoryApi()).then((res) => {
          if (res.payload?.code === 200) {
            setCategory(res.payload?.data?.categories);
          }
        });
      }, []);
    
    return (
        <section className="book-catagories-section fix section-padding">
        <div className="container">
            <div className="book-catagories-wrapper">
                <div className="section-title text-center">
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">{t("global.home.top_category")}</h2>
                </div>
                <div className="array-button">
                    <button className="array-prev"><i className="fal fa-arrow-left"></i></button>
                    <button className="array-next"><i className="fal fa-arrow-right"></i></button>
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
                    className="book-catagories-slider"
                >
                    {category.map(({ id, title, image }) => (
                        <SwiperSlide key={id}>
                            <a href={`/ShopCategory/${id}`} className="book-catagories-items">
                                <div className="book-thumb">
                                    <img src={image} alt={`img-${id}`}  style={{width:'120px',height:'147px'}}/>
                                    <div className="circle-shape">
                                        <img src="/assets/img/book-categori/circle-shape.png" alt="shape-img" />
                                    </div>
                                </div>
                              
                                <h3><a href={`/ShopCategory/${id}`}>{`${title}`}</a></h3>
                            </a>
                            {/* <div  className="book-catagories-items">
                                <div className="book-thumb">
                                    <img src={image} alt={`img-${id}`}  style={{width:'120px',height:'147px'}}/>
                                    <div className="circle-shape">
                                        <img src="/assets/img/book-categori/circle-shape.png" alt="shape-img" />
                                    </div>
                                </div>
                                
                                <h3><a>{`${title}`}</a></h3>
                            </div> */}
                        </SwiperSlide>
                    ))}
                  
                </Swiper>
            </div>
        </div>
    </section>
    );
}

export default Top_category