import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation ,Autoplay } from 'swiper/modules';
const Top_category = () => {
    const bookCategories = [
        { id: 1, title: 'Romance Books', count: 80, imgSrc: '/assets/img/book-categori/01.png' },
        { id: 2, title: 'Design Low Book', count: 6, imgSrc: '/assets/img/book-categori/02.png' },
        { id: 3, title: 'Safe Home', count: 5, imgSrc: '/assets/img/book-categori/03.png' },
        { id: 4, title: 'Grow Flower', count: 7, imgSrc: '/assets/img/book-categori/04.png' },
        { id: 5, title: 'Adventure Book', count: 4, imgSrc: '/assets/img/book-categori/05.png' },
        { id: 6, title: 'Adventure Book', count: 4, imgSrc: '/assets/img/book-categori/05.png' },
        { id: 7, title: 'Adventure Book', count: 4, imgSrc: '/assets/img/book-categori/05.png' },
        { id: 8, title: 'Adventure Book', count: 4, imgSrc: '/assets/img/book-categori/05.png' },
    ];

    return (
        <section className="book-catagories-section fix section-padding">
        <div className="container">
            <div className="book-catagories-wrapper">
                <div className="section-title text-center">
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">Top Categories Book</h2>
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
                          slidesPerView: 2,
                        },
                        390: {
                          slidesPerView: 2,
                        },
                        502: {
                          slidesPerView: 2,
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
                    {bookCategories.map(({ id, title, count, imgSrc }) => (
                        <SwiperSlide key={id}>
                            <div className="book-catagories-items">
                                <div className="book-thumb">
                                    <img src={imgSrc} alt={`img-${id}`} />
                                    <div className="circle-shape">
                                        <img src="/assets/img/book-categori/circle-shape.png" alt="shape-img" />
                                    </div>
                                </div>
                                <div className="number">{String(id).padStart(2, '0')}</div>
                                <h3><a href="shop-details.html">{`${title} (${count})`}</a></h3>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    </section>
    );
}

export default Top_category