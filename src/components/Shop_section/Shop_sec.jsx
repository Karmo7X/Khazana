import React from 'react'
import { Navigation ,Autoplay} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';


const books = [
    {
        id: 1,
        image: "assets/img/book/01.png",
        title: "Simple Things You To Save BOOK",
        price: "30.00 R.S",
        discountPrice: "39.99 R.S",
        authorImage: "assets/img/testimonial/client-1.png",
        authorName: "Wilson",
        rating: 4,
        labels: ["Hot", "-30%"]
    },
    {
        id: 2,
        image: "assets/img/book/02.png",
        title: "How Deal With Very Bad BOOK",
        price: "30.00 R.S",
        discountPrice: "39.99 R.S",
        authorImage: "assets/img/testimonial/client-2.png",
        authorName: "Alexander",
        rating: 4,
        labels: ["New"]
    },
    {
        id: 3,
        image: "assets/img/book/03.png",
        title: "The Art of Not Giving Up",
        price: "$25.00",
        discountPrice: "$29.99",
        authorImage: "assets/img/testimonial/client-3.png",
        authorName: "Samantha",
        rating: 5,
        labels: ["Best Seller"]
    },
    {
        id: 4,
        image: "assets/img/book/04.png",
        title: "Learning React Efficiently",
        price: "$35.00",
        discountPrice: "$45.99",
        authorImage: "assets/img/testimonial/client-4.png",
        authorName: "David",
        rating: 3,
        labels: ["Hot"]
    },
    {
        id: 5,
        image: "assets/img/book/05.png",
        title: "Mastering CSS for Beginners",
        price: "$20.00",
        discountPrice: "$25.99",
        authorImage: "assets/img/testimonial/client-5.png",
        authorName: "Olivia",
        rating: 4,
        labels: ["Limited Edition"]
    },
    {
        id: 6,
        image: "assets/img/book/06.png",
        title: "JavaScript Essentials",
        price: "$18.00",
        discountPrice: "$23.99",
        authorImage: "assets/img/testimonial/client-6.png",
        authorName: "Michael",
        rating: 5,
        labels: ["New Arrival"]
    },
    {
        id: 7,
        image: "assets/img/book/07.png",
        title: "Understanding UX/UI Design",
        price: "$28.00",
        discountPrice: "$34.99",
        authorImage: "assets/img/testimonial/client-7.png",
        authorName: "Laura",
        rating: 5,
        labels: ["Featured"]
    }
];

const Shop_sec = () => {
  return (
    <>
    <section class="shop-section section-padding fix">
    <div class="container">
        <div class="section-title-area">
            <div class="section-title wow fadeInUp" data-wow-delay=".3s">
                <h2>Top Selling Books</h2>
            </div>
            <a href="Shop" class="theme-btn transparent-btn wow fadeInUp" data-wow-delay=".5s">
                Explore More <i class="fa-solid fa-arrow-right-long"></i>
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
                            <ul className="post-box">
                                {book.labels.map((label, index) => (
                                    <li key={index}>{label}</li>
                                ))}
                            </ul>
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
                            <h5>Design Low Book</h5>
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