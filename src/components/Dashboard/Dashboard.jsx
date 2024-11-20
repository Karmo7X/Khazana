import React, { useState } from 'react';
import { Navigation ,Autoplay} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';


const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('books'); // Default active section

  // Example data for demonstration purposes
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

  const orders = [
    { id: 1, bookTitle: 'Book One', quantity: 3, total: '150 EGP' },
    { id: 2, bookTitle: 'Book Two', quantity: 1, total: '50 EGP' },
  ];

  const wishlist = [
    { id: 1, title: 'Wishlist Book One' },
    { id: 2, title: 'Wishlist Book Two' },
  ];

  const addresses = ['123 Street, City', '456 Avenue, City'];

  const balance = 600;

  return (
    <div className="container my-4">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3">
          <div className="list-group" style={{border:"1px solid #000",borderRadius:"1px"}}>
            <button
              onClick={() => setActiveSection('books')}
              className={`list-group-item list-group-item-action btn theme-btn rounded-0 w-100 ${
                activeSection === 'books' ? 'active' : ''
              }`}
              style={{
                backgroundColor: activeSection === 'books' ? '#000' : '#fff',
                color: activeSection === 'books' ? '#fff' : '#000',
              }}
            >
              Books
            </button>
            <button
              onClick={() => setActiveSection('orders')}
              className={`list-group-item list-group-item-action btn theme-btn rounded-0 w-100 ${
                activeSection === 'orders' ? 'active' : ''
              }`}
              style={{
                backgroundColor: activeSection === 'orders' ? '#000' : '#fff',
                color: activeSection === 'orders' ? '#fff' : '#000',
              }}
            >
              Orders
            </button>
            <button
              onClick={() => setActiveSection('wishlist')}
              className={`list-group-item list-group-item-action btn theme-btn rounded-0 w-100 ${
                activeSection === 'wishlist' ? 'active' : ''
              }`}
              style={{
                backgroundColor: activeSection === 'wishlist' ? '#000' : '#fff',
                color: activeSection === 'wishlist' ? '#fff' : '#000',
              }}
            >
              Wishlist
            </button>
         
            <button
              onClick={() => setActiveSection('account')}
              className={`list-group-item list-group-item-action btn theme-btn rounded-0 w-100 ${
                activeSection === 'account' ? 'active' : ''
              }`}
              style={{
                backgroundColor: activeSection === 'account' ? '#000' : '#fff',
                color: activeSection === 'account' ? '#fff' : '#000',
              }}
            >
              Account Control
            </button>
            <button
              onClick={() => setActiveSection('balance')}
              className={`list-group-item list-group-item-action btn theme-btn rounded-0 w-100 ${
                activeSection === 'balance' ? 'active' : ''
              }`}
              style={{
                backgroundColor: activeSection === 'balance' ? '#000' : '#fff',
                color: activeSection === 'balance' ? '#fff' : '#000',
              }}
            >
              Balance
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-md-9">
          {activeSection === 'books' && (
            <section id="books" className="mb-4">
              <h3>Your Books</h3>
              <div className="row">
              <Swiper 
            modules={[Navigation,Autoplay]}
            spaceBetween={20}
            slidesPerView={4}
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
                    slidesPerView: 4,
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
                                {/* <li className="authot-list">
                                    <span className="thumb">
                                        <img src={book.authorImage} alt="Author" />
                                    </span>
                                    <span className="content">{book.authorName}</span>
                                </li> */}
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
                        {/* <div className="shop-button">
                            <a href="/Single/:id" className="theme-btn">
                                <i className="fa-solid fa-basket-shopping"></i> Add To Cart
                            </a>
                        </div> */}
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
              </div>
            </section>
          )}

          {activeSection === 'orders' && (
            <section id="orders" className="mb-4">
              <h3>Book Sales</h3>
              <div class="main-cart-wrapper">
                <div class="row g-5">
                    <div class="col-xl-12">
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Subtotal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <span class="d-flex gap-5 align-items-center">
                                                <a href="/Cart" class="remove-icon">
                                                    <img src="/assets/img/icon/icon-9.svg" alt="img"/>
                                                </a>
                                                <span class="cart">
                                                    <img src="/assets/img/shop-cart/01.png" alt="img"/>
                                                </span>
                                                <span class="cart-title">
                                                    simple Things You To Save Book
                                                </span>
                                            </span>
                                        </td>
                                        <td>
                                            <span class="cart-price">30.00 R.S</span>
                                        </td>
                                        <td>
                                            <span class="quantity-basket">
                                                <span class="qty">1
                                                   {/* <button class="qtyminus" aria-hidden="true">−</button> */}
                                                    {/* <input type="number" name="qty" id="qty2" min="1" max="10" step="1"
                                                        value="1"/> */}
                                                     {/* <button class="qtyplus" aria-hidden="true">+</button> */}
                                                </span>
                                            </span>
                                        </td>
                                        <td>
                                            <span class="subtotal-price">$120.00</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span class="d-flex gap-5 align-items-center">
                                                <a href="/Cart" class="remove-icon">
                                                    <img src="/assets/img/icon/icon-9.svg" alt="img"/>
                                                </a>
                                                <span class="cart">
                                                    <img src="/assets/img/shop-cart/02.png" alt="img"/>
                                                </span>
                                                <span class="cart-title">
                                                    Qple GPad With Retina Sisplay
                                                </span>
                                            </span>
                                        </td>
                                        <td>
                                            <span class="cart-price">30.00 R.S</span>
                                        </td>
                                        <td>
                                            <span class="quantity-basket">
                                                <span class="qty">1
                                                   {/* <button class="qtyminus" aria-hidden="true">−</button> */}
                                                   
                                                                                                        {/* <input type="number" name="qty" id="qty3" min="1" max="10" step="1"
                                                        value="1"/> */}
                                                     {/* <button class="qtyplus" aria-hidden="true">+</button> */}
                                                </span>
                                            </span>
                                        </td>
                                        <td>
                                            <span class="subtotal-price">$120.00</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span class="d-flex gap-5 align-items-center">
                                                <a href="/Cart" class="remove-icon">
                                                    <img src="/assets/img/icon/icon-9.svg" alt="img"/>
                                                </a>
                                                <span class="cart">
                                                    <img src="/assets/img/shop-cart/03.png" alt="img"/>
                                                </span>
                                                <span class="cart-title">
                                                    Flovely and Unicom Erna
                                                </span>
                                            </span>
                                        </td>
                                        <td>
                                            <span class="cart-price">30.00 R.S</span>
                                        </td>
                                        <td>
                                            <span class="quantity-basket">
                                                <span class="qty">1
                                                   {/* <button class="qtyminus" aria-hidden="true">−</button> */}
                                                    {/* <input type="number" name="qty" id="qty" min="1" max="10" step="1"
                                                        value="1"/> */}
                                                     {/* <button class="qtyplus" aria-hidden="true">+</button> */}
                                                </span>
                                            </span>
                                        </td>
                                        <td>
                                            <span class="subtotal-price">$120.00</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        {/* <div class="cart-wrapper-footer">
                            <form action="/Cart">
                                <div class="input-area">
                                    <input type="text" name="Coupon Code" id="CouponCode" placeholder="Coupon Code"/>
                                    <button type="submit" class="theme-btn">
                                        Apply
                                    </button> 
                                </div>
                            </form>
                            <a href="/Cart" class="theme-btn">
                                Update Cart
                            </a>
                        </div> */}
                    </div>
                    
                </div>
            </div>
            </section>
          )}

          {activeSection === 'wishlist' && (
            <section id="wishlist" className="mb-4">
              <h3>Your Wishlist</h3>
              <div class="col-12">
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Stock</th>
                                        <th>Subtotal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <span class="d-flex gap-5 align-items-center">
                                                <a href="Wishlist" class="remove-icon">
                                                    <img src="assets/img/icon/icon-9.svg" alt="img"/>
                                                </a>
                                                <span class="cart">
                                                    <img src="assets/img/shop-cart/01.png" alt="img"/>
                                                </span>
                                                <span class="cart-title">
                                                    simple Things You To Save Book
                                                </span>
                                            </span>
                                        </td>
                                        <td>
                                            <span class="cart-price">30.00 R.S</span>
                                        </td>
                                        <td>
                                            <span class="stock-title">
                                                In Stock
                                            </span>
                                        </td>
                                        <td>
                                            <span class="subtotal-price">$120.00</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span class="d-flex gap-5 align-items-center">
                                                <a href="Wishlist" class="remove-icon">
                                                    <img src="assets/img/icon/icon-9.svg" alt="img"/>
                                                </a>
                                                <span class="cart">
                                                    <img src="assets/img/shop-cart/02.png" alt="img"/>
                                                </span>
                                                <span class="cart-title">
                                                    Qple GPad With Retina Sisplay
                                                </span>
                                            </span>
                                        </td>
                                        <td>
                                            <span class="cart-price">$39.00</span>
                                        </td>
                                        <td>
                                            <span class="stock-title">
                                                In Stock
                                            </span>
                                        </td>
                                        <td>
                                            <span class="subtotal-price">$120.00</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span class="d-flex gap-5 align-items-center">
                                                <a href="Wishlist" class="remove-icon">
                                                    <img src="assets/img/icon/icon-9.svg" alt="img"/>
                                                </a>
                                                <span class="cart">
                                                    <img src="assets/img/shop-cart/03.png" alt="img"/>
                                                </span>
                                                <span class="cart-title">
                                                    Flovely and Unicom Erna
                                                </span>
                                            </span>
                                        </td>
                                        <td>
                                            <span class="cart-price">$19.00</span>
                                        </td>
                                        <td>
                                            <span class="stock-title-two">
                                                Out Of Stock
                                            </span>
                                        </td>
                                        <td>
                                            <span class="subtotal-price">$120.00</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
            </section>
          )}

       
          {activeSection === 'account' && (
            <section id="account" className="mb-4">
                <h1 className="text-muted fs-3">Account Settings</h1>
      
      <div className="card border-0 mt-3 mx-auto p-4 shadow profile-card">
        
        
        <h2 className="text-center mb-4">My Account</h2>
        
        <div className="d-flex justify-content-center mb-3">
          <img
            src="https://via.placeholder.com/150" // Replace with actual profile image URL
            alt="Profile"
            className="rounded-circle profile-image"
          />
        </div>
        
        <h3 className="text-center">Ahmed Mohamed</h3>
        
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" value="Ahmed Mohamed" readOnly />
        </div>
        
        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <div className="input-group">
            <span className="input-group-text">
              <img
                src="https://via.placeholder.com/24" // Replace with country flag icon URL
                alt="Country Flag"
                className="flag-icon"
              />
            </span>
            <input type="text" className="form-control" value="05022336544" readOnly />
          </div>
        </div>
        
        <div className="mb-3">
          <label className="form-label">Date of Birth</label>
          <input type="text" className="form-control" value="01/09/1992" readOnly />
        </div>
        
        <div className="mb-3">
          <label className="form-label">City</label>
          <input type="text" className="form-control" value="Jeddah" readOnly />
        </div>
        
        <button className="btn theme-btn rounded-0 w-100 mt-4">Edit Profile</button>
      </div>
            </section>
          )}

          {activeSection === 'balance' && (
            <section id="balance" className="mb-4">
              <h3>Your Balance</h3>
              <p>
                Current Balance: <strong>{balance} EGP</strong>
              </p>
              <button className="btn btn-success">Request Balance Transfer</button>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
