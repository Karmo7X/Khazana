import React from 'react'
import { useTranslation } from "react-i18next";
import { Navigation ,Autoplay} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';


// const authors = [
//     { name: "Esther Howard", books: "10 Published Books", image: "01.jpg" },
//     { name: "Shikhon Islam", books: "07 Published Books", image: "02.jpg" },
//     { name: "Kawser Ahmed", books: "04 Published Books", image: "03.jpg" },
//     { name: "Brooklyn Simmons", books: "15 Published Books", image: "04.jpg" },
//     { name: "Leslie Alexander", books: "05 Published Books", image: "05.jpg" },
//     { name: "Guy Hawkins", books: "12 Published Books", image: "06.jpg" }
//   ];

  const authors = [
    {
      id: 1,
      name: "عبدالله العجيري",
      image: "01.png",
    },
    {
      id: 2,
      name: "غازي القصيبي",
      image: "02.png",
    },
    {
      id: 3,
      name: "فهد الأحمدي",
      image: "03.png",
    },
    {
      id: 4,
      name: "أحمد العرفج",
      image: "04.png",
    },
    // Add more authors as needed
  ];

const Authors = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
    <section className="team-section fix section-padding mt-5 pt-0 mb-30">
      <div className="container">
        <div className="section-title text-center">
          <h2 className="mb-3">{t("global.home.featured_authors")}</h2>
          <p>
          {t("global.home.featured_authors_desc")}
          </p>
        </div>

        <Swiper
         className="team-slider"
          modules={[Navigation,Autoplay]}
          spaceBetween={20}
          slidesPerView={5}
          navigation={{
              nextEl: '.array-next_btn',
              prevEl: '.array-prev_btn',
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
            loop={true}
         
        >
          {authors.map((author, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <div className="team-box-items">
                <div className="team-image">
                  <div className="thumb">
                    <img src={`assets/img/team/${author.image}`} style={{width:"50%"}} alt={`Image of ${author.name}`} />
                  </div>
                  <div className="shape-img">
                    <img src="assets/img/team/shape-img.png" alt="Decorative Shape" />
                  </div>
                </div>
                <div className="team-content text-center">
                  <h6><a href="team-details.html">{author.name}</a></h6>
                  <p>{author.books}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* <div className="array-button">
          <button className="array-prev array-prev_btn"><i className="fal fa-arrow-left"></i></button>
          <button className="array-next array-next_btn"><i className="fal fa-arrow-right"></i></button>
        </div> */}
      </div>
    </section>
    </>
  )
}

export default Authors