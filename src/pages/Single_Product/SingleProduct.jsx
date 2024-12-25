import React, { useEffect, useState } from "react";
import { Navigation, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetProductApi, GetProductdetailsApi } from "../../Api/Product/Product";
import Notfound from "../../components/Notfound/Notfound";
import Wishlistcomponent from "../../components/wishlist/Wishlistcomponent";
import bookundefine from "../../../public/assets/img/bookundefine.jpg";
import { AddCartItemApi, GetCartApi } from "../../Api/Cart/CartSlice";
const SingleProduct = () => {
  const { t, i18n } = useTranslation();

  const { id } = useParams();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.product.status);
  const [book, setbook] = useState([]);
  const [books, setBooks] = useState([]);
  const [buybookdata, setBuybookdata] = useState({
    productId: id,
    isAvailablePdf: false,
    isAvailablePaper: false,
  });
  const [errormessg, setErrormessg] = useState(null);
  const [successmessage, setSuccessmessage] = useState(null);
  const handleChange = (e) => {
    const { name, checked } = e.target;

    setBuybookdata((prevState) => {
      if (name === "isAvailablePdf" && checked) {
        // If PDF is checked, uncheck the paper version
        return {
          ...prevState,
          isAvailablePdf: true,
          isAvailablePaper: false, // Ensure paper is false
        };
      } else if (name === "isAvailablePaper" && checked) {
        // If paper is checked, uncheck the PDF version
        return {
          ...prevState,
          isAvailablePdf: false, // Ensure PDF is false
          isAvailablePaper: true,
        };
      }
      return prevState;
    });

    dispatch(AddCartItemApi(buybookdata)).then((res) => {
      if (res.payload?.code === 201) {
        setSuccessmessage(res.payload?.message);
        setErrormessg(null);
        setTimeout(() => {
          setSuccessmessage(null);
        }, 2000);
        dispatch(GetCartApi())
      } else {
        setSuccessmessage(null);
        setErrormessg(res.payload?.message);
        setTimeout(() => {
          setErrormessg(null);
        }, 2000);
      }
    });
  };
  useEffect(() => {
    dispatch(GetProductdetailsApi(id)).then((res) => {
      if (res.payload?.code === 200) {
        setbook(res.payload?.data?.product);
      }
    });
    dispatch(GetProductApi()).then((res) => {
      if (res.payload?.code === 200) {
        setBooks(res.payload?.data?.products);
      }
    });
  }, [id]);
  
  return (
    <div>
      {/* <!-- breadcumb Section Start --> */}
      <div class="breadcrumb-wrapper">
        <div class="book1">
          <img src="/assets/img/hero/book1.png" alt="book" />
        </div>
        <div class="book2">
          <img src="/assets/img/hero/book2.png" alt="book" />
        </div>
        <div class="container">
          <div class="page-heading">
            <h1>{t("global.shop_details.title")}</h1>
            <div class="page-header">
              <ul class="breadcrumb-items wow fadeInUp" data-wow-delay=".3s">
                <li>
                  <a href="/">{t("global.nav.home")}</a>
                </li>
                <li>
                  <i class="fa-solid fa-chevron-right"></i>
                </li>
                <li>{t("global.shop_details.title")}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {loading === "loading"  ? (
        <div className="d-flex align-items-center justify-content-center vh-100">
          <div className="spinner-border text-secondary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          {loading === "failed"   ? (
            <>
              <Notfound />
            </>
          ) : (
            <>
           
             
              {/* <!-- Shop Details Section Start --> */}
              <section class="shop-details-section fix section-padding">
                <div class="container">
                  <div class="shop-details-wrapper">
                    <div class="row g-4">
                      <div class="col-lg-5">
                        <div class="shop-details-image">
                          <div class="tab-content">
                            <div id="thumb1" class="tab-pane fade show active">
                              <div class="shop-details-thumb">
                                <img
                                  src={
                                    book?.coverImage
                                      ? book?.coverImage
                                      : bookundefine
                                  }
                                  alt="img"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-7">
                        <div class="shop-details-content">
                          <div class="title-wrapper d-flex ">
                            <h2>{book?.title}</h2>
                            {/* <h5>Stock availability.</h5> */}
                            <div>
                          <div className=" mt-3 d-flex align-items-center justify-content-end ">
              {successmessage && (
                <>
                  <div
                className={`alert alert-success d-flex align-items-center gap-3  `}
                    role="alert"
                  >
                       <i class="fas fa-check-circle message-icon"></i>
                    <div>{successmessage}</div>
                  </div>
                </>
              )}

              {errormessg && (
                <>
                  <div
                    className={`alert alert-danger d-flex align-items-center gap-3 `}
                    role="alert"
                  >
                    <i class="fas fa-times-circle message-icon"></i>
                    <div>{errormessg}</div>
                  </div>
                </>
              )} 
                          </div>
                          </div>
                          </div>
                          
                          <ul className="post-box d-flex gap-2 ">
                            {book?.isAvailablePdf === true ? (
                              <li className="fw-bold mt-3">
                                {t("global.currency.pdf")}
                              </li>
                            ) : null}
                            {book?.isAvailablePaper === true ? (
                              <li className="fw-bold mt-3">
                                {t("global.currency.paper")}
                              </li>
                            ) : null}
                          </ul>
                          <div className="star">
                            {Array(5)
                              .fill(book?.rate)
                              .map((_, starIndex) => (
                                <i
                                  key={starIndex}
                                  className={
                                    starIndex < book?.rate
                                      ? "fa-solid fa-star"
                                      : "fa-regular fa-star"
                                  }
                                ></i>
                              ))}
                          </div>
                          <p>{book?.description.slice(0, 100)}...</p>
                          <div class="price-list d-flex gap-3">
                            <h3 className="fs-6">
                              {t("global.currency.pdf")} {book?.pricePdf}
                              {t("global.currency.rs")}
                            </h3>
                            <h3 className="fs-6">
                              {t("global.currency.paper")} {book.pricePaper}
                              {t("global.currency.rs")}
                            </h3>
                          </div>

                          <div class="cart-wrapper">
                            <div className="d-flex align-items-center gap-1">
                              {/* <div class="quantity-basket">
                        <p class="qty">
                          <button class="qtyminus" aria-hidden="true">
                            −
                          </button>
                          <input
                            type="number"
                            name="qty"
                            id="qty2"
                            min="1"
                            max="10"
                            step="1"
                            value="1"
                          />
                          <button class="qtyplus" aria-hidden="true">
                            +
                          </button>
                        </p>
                      </div> */}
                              {/* <button
                        type="button"
                        class="theme-btn style-2"
                        data-bs-toggle="modal"
                        data-bs-target="#readMoreModal"
                      >
                        Read A little
                      </button> */}
                            </div>

                            {/* <!-- Read More Modal --> */}
                            <div
                              class="modal fade"
                              id="readMoreModal"
                              tabindex="-1"
                              aria-labelledby="readMoreModalLabel"
                              aria-hidden="true"
                            >
                              <div class="modal-dialog">
                                <div class="modal-content">
                                  <div
                                    class="modal-body"
                                    style={{
                                      backgroundImage: `url('/assets/img/popupBg.png')`,
                                    }}
                                  >
                                    <div class="close-btn">
                                      <button
                                        type="button"
                                        class="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                      ></button>
                                    </div>
                                    <div class="readMoreBox">
                                      <div class="content">
                                        <h3 id="readMoreModalLabel">
                                          The Role Of Book
                                        </h3>
                                        <p>
                                          Educating the Public <br />
                                          Political books play a crucial role in
                                          educating the public about political
                                          theories, historical events, policies,
                                          and the workings of governments. They
                                          provide readers with insights into
                                          complex political concepts and the
                                          historical context behind current
                                          events, helping to foster a more
                                          informed citizenry. <br />
                                          <br />
                                          Shaping Public Opinion <br />
                                          Authors of political books often aim
                                          to influence public opinion by
                                          presenting arguments and perspectives
                                          on various issues. These books can
                                          sway readers' views, either
                                          reinforcing their existing beliefs or
                                          challenging them to consider
                                          alternative viewpoints. This influence
                                          can extend to political debates and
                                          discussions in the public sphere.{" "}
                                          <br />
                                          <br />
                                          Documenting History <br />
                                          Political books serve as valuable
                                          records of historical events and
                                          political movements. They document the
                                          thoughts, actions, and decisions of
                                          political leaders and activists,
                                          providing future generations with a
                                          detailed account of significant
                                          periods and events. This historical
                                          documentation is essential for
                                          understanding the evolution of
                                          political systems and ideologies.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {book?.isAvailablePdf === true ? (
                              <div className="form-check ">
                                <input
                                  className="form-check-input radio-button"
                                  type="checkbox"
                                  name="isAvailablePdf"
                                  id="flexRadioDefault1"
                                  checked={buybookdata.isAvailablePdf}
                                  onChange={handleChange}
                                />
                                <label
                                  htmlFor="flexRadioDefault1"
                                  className="form-check-label theme-btn"
                                  style={{
                                    background: buybookdata.isAvailablePdf
                                      ? "#ffc900"
                                      : "",
                                  }}
                                >
                                  <i className="fa-solid fa-file-pdf"></i>{" "}
                                  {t("global.book_details.buyPdf")}
                                </label>
                              </div>
                            ) : null}

                            {book?.isAvailablePaper === true ? (
                              <div className="form-check ">
                                <input
                                  className="form-check-input radio-button"
                                  type="checkbox"
                                  name="isAvailablePaper"
                                  id="flexRadioDefault2"
                                  checked={buybookdata.isAvailablePaper}
                                  onChange={handleChange}
                                />
                                <label
                                  htmlFor="flexRadioDefault2"
                                  className="form-check-label theme-btn"
                                  style={{
                                    background: buybookdata.isAvailablePaper
                                      ? "#ffc900"
                                      : "",
                                  }}
                                >
                                  <i className="fa-solid fa-book-open"></i>{" "}
                                  {t("global.book_details.buyPhysicalBook")}
                                </label>
                              </div>
                            ) : null}

                            <Wishlistcomponent
                              bookid={book?.id}
                              wishlist={book?.wishlist}
                              grid={"single"}
                            />
                          </div>
                          <div class="category-box">
                            <div class="category-list">
                              <ul>
                                <li>
                                  <span>
                                    {t("global.book_details.category")}:
                                  </span>{" "}
                                  {book?.category}
                                </li>
                                <li>
                                  <span>
                                    {t("global.book_details.available_paper")}:
                                  </span>{" "}
                                  {book?.isAvailablePaper}
                                  {t("global.book_details.available_paper")}
                                </li>
                                <li>
                                  <span>
                                    {t("global.book_details.available_pdf")}:
                                  </span>{" "}
                                  {book?.isAvailablePdf}
                                  {t("global.book_details.available_pdf")}
                                </li>
                              </ul>
                              {/* <ul>
                                <li>
                                  <span>Tags:</span> Design Low Book
                                </li>
                                <li>
                                  <span>Format:</span> Hardcover
                                </li>
                              </ul> */}
                              {/* <ul>
                                <li>
                                  <span>Total page:</span> 330
                                </li>
                                <li>
                                  <span>Language:</span> English
                                </li>
                              </ul> */}
                              {/* <ul>
                                <li>
                                  <span>Publish Years:</span> 2021
                                </li>
                                <li>
                                  <span>Century:</span> United States
                                </li>
                              </ul> */}
                            </div>
                          </div>
                          {/* <div class="box-check">
                            <div class="check-list">
                              <ul>
                                <li>
                                  <i class="fa-solid fa-check"></i>
                                  Free shipping orders from $150
                                </li>
                                <li>
                                  <i class="fa-solid fa-check"></i>
                                  30 days exchange & return
                                </li>
                              </ul>
                              <ul>
                                <li>
                                  <i class="fa-solid fa-check"></i>
                                  Mamaya Flash Discount: Starting at 30% Off
                                </li>
                                <li>
                                  <i class="fa-solid fa-check"></i>
                                  Safe & Secure online shopping
                                </li>
                              </ul>
                            </div>
                          </div> */}
                          {/* <div class="social-icon">
                            <h6>Also Available On:</h6>
                            <a href="https://www.customer.io/">
                              <img
                                src="/assets/img/cutomerio.png"
                                alt="cutomer.io"
                              />
                            </a>
                            <a href="https://www.amazon.com/">
                              <img src="/assets/img/amazon.png" alt="amazon" />
                            </a>
                            <a href="https://www.dropbox.com/">
                              <img
                                src="/assets/img/dropbox.png"
                                alt="dropbox"
                              />
                            </a>
                          </div> */}
                        </div>
                      </div>
                    </div>
                    <div class="single-tab section-padding pb-0">
                      <ul class="nav mb-5" role="tablist">
                        <li class="nav-item" role="presentation">
                          <a
                            href="#description"
                            data-bs-toggle="tab"
                            class="nav-link ps-0 active"
                            aria-selected="true"
                            role="tab"
                          >
                            <h6>{t("global.book_details.tabs.description")}</h6>
                          </a>
                        </li>
                        {/* <li class="nav-item" role="presentation">
                          <a
                            href="#additional"
                            data-bs-toggle="tab"
                            class="nav-link"
                            aria-selected="false"
                            tabindex="-1"
                            role="tab"
                          >
                            <h6>Additional Information </h6>
                          </a>
                        </li> */}
                        {/* <li class="nav-item" role="presentation">
                          <a
                            href="#review"
                            data-bs-toggle="tab"
                            class="nav-link"
                            aria-selected="false"
                            tabindex="-1"
                            role="tab"
                          >
                            <h6>{t("global.book_details.tabs.reviews")} (3)</h6>
                          </a>
                        </li> */}
                      </ul>
                      <div class="tab-content">
                        <div
                          id="description"
                          class="tab-pane fade show active"
                          role="tabpanel"
                        >
                          <div class="description-items">
                            <p>{book?.description}</p>
                          </div>
                        </div>
                        <div
                          id="additional"
                          class="tab-pane fade"
                          role="tabpanel"
                        >
                          <div class="table-responsive">
                            <table class="table table-bordered">
                              <tbody>
                                <tr>
                                  <td class="text-1">Availability</td>
                                  <td class="text-2">Available</td>
                                </tr>
                                <tr>
                                  <td class="text-1">Categories</td>
                                  <td class="text-2">Adventure</td>
                                </tr>
                                <tr>
                                  <td class="text-1">Publish Date</td>
                                  <td class="text-2">2022-10-24</td>
                                </tr>
                                <tr>
                                  <td class="text-1">Total Page</td>
                                  <td class="text-2">330</td>
                                </tr>
                                <tr>
                                  <td class="text-1">Format</td>
                                  <td class="text-2">Hardcover</td>
                                </tr>
                                <tr>
                                  <td class="text-1">Country</td>
                                  <td class="text-2">United States</td>
                                </tr>
                                <tr>
                                  <td class="text-1">Language</td>
                                  <td class="text-2">English</td>
                                </tr>
                                <tr>
                                  <td class="text-1">Dimensions</td>
                                  <td class="text-2">30 × 32 × 46 Inches</td>
                                </tr>
                                <tr>
                                  <td class="text-1">Weight</td>
                                  <td class="text-2">2.5 Pounds</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div id="review" class="tab-pane fade" role="tabpanel">
                          <div class="review-items">
                            <div class="review-wrap-area d-flex gap-4">
                              <div class="review-thumb">
                                <img
                                  src="/assets/img/shop-details/review.png"
                                  alt="img"
                                />
                              </div>
                              <div class="review-content">
                                <div class="head-area d-flex flex-wrap gap-2 align-items-center justify-content-between">
                                  <div class="cont">
                                    <h5>
                                      <a href="news-details.html">
                                        Leslie Alexander
                                      </a>
                                    </h5>
                                    <span>Febr/uary 10, 2024 at 2:37 pm</span>
                                  </div>
                                  <div class="star">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                  </div>
                                </div>
                                <p class="mt-30 mb-4">
                                  Neque porro est qui dolorem ipsum quia quaed
                                  inventor veritatis et quasi architecto var sed
                                  efficitur turpis gilla sed sit amet finibus
                                  eros. Lorem Ipsum is <br /> simply dummy
                                </p>
                              </div>
                            </div>
                            <div class="review-title mt-5 py-15 mb-30">
                              <h4>Your Rating*</h4>
                              <div class="rate-now d-flex align-items-center">
                                <p>Your Rating*</p>
                                <div class="star">
                                  <i class="fa-light fa-star"></i>
                                  <i class="fa-light fa-star"></i>
                                  <i class="fa-light fa-star"></i>
                                  <i class="fa-light fa-star"></i>
                                  <i class="fa-light fa-star"></i>
                                </div>
                              </div>
                            </div>
                            <div class="review-form">
                              <form action="#" id="contact-form" method="POST">
                                <div class="row g-4">
                                  <div class="col-lg-6">
                                    <div class="form-clt">
                                      <span>Your Name*</span>
                                      <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Your Name"
                                      />
                                    </div>
                                  </div>
                                  <div class="col-lg-6">
                                    <div class="form-clt">
                                      <span>Your Email*</span>
                                      <input
                                        type="text"
                                        name="email"
                                        id="email"
                                        placeholder="Your Email"
                                      />
                                    </div>
                                  </div>
                                  <div
                                    class="col-lg-12 wow fadeInUp animated"
                                    data-wow-delay=".8"
                                  >
                                    <div class="form-clt">
                                      <span>Message*</span>
                                      <textarea
                                        name="message"
                                        id="message"
                                        placeholder="Write Message"
                                      ></textarea>
                                    </div>
                                  </div>
                                  <div
                                    class="col-lg-12 wow fadeInUp animated"
                                    data-wow-delay=".9"
                                  >
                                    <div class="form-check d-flex gap-2 from-customradio">
                                      <input
                                        type="checkbox"
                                        class="form-check-input"
                                        name="flexRadioDefault"
                                        id="flexRadioDefault12"
                                      />
                                      <label
                                        class="form-check-label"
                                        for="flexRadioDefault12"
                                      >
                                        i accept your terms & conditions
                                      </label>
                                    </div>
                                    <button type="submit" class="theme-btn">
                                      Submit now
                                    </button>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* <!-- Top Ratting Book Section Start --> */}
              <section class="top-ratting-book-section fix section-padding pt-0">
                <div class="container">
                  <div class="section-title text-center">
                    <h2 class="mb-3 wow fadeInUp" data-wow-delay=".3s">
                      {" "}
                      {t("global.shop_details.related_products.title")}
                    </h2>
                    <p class="wow fadeInUp" data-wow-delay=".5s">
                      {t("global.shop_details.related_products.description")}
                    </p>
                  </div>

                  <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={5}
                    navigation={{
                      nextEl: ".array-next",
                      prevEl: ".array-prev",
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
                    {books
                      .filter(
                        (book) => book?.category && book.category.trim() !== ""
                      )
                      .map((book, idx) => (
                        <SwiperSlide key={idx}>
                          <div
                            className="shop-box-items style-2"
                            key={book?.id}
                          >
                            <div className="book-thumb center">
                              <a href={`/Single/${book?.id}`}>
                                <img
                                  src={
                                    book?.coverImage
                                      ? book?.coverImage
                                      : bookundefine
                                  }
                                  alt={book?.title}
                                />
                              </a>
                              <ul className="post-box">
                                {book?.isAvailablePdf === true ? (
                                  <li>{t("global.currency.pdf")}</li>
                                ) : null}
                                {book?.isAvailablePaper === true ? (
                                  <li>{t("global.currency.paper")}</li>
                                ) : null}
                              </ul>
                              <Wishlistcomponent
                                bookid={book?.id}
                                wishlist={book?.wishlist}
                              />
                            </div>
                            <div className="shop-content">
                              <h5>{book?.category}</h5>
                              <h3>
                                <a href={`/Single/${book.id}`}>{book.title}</a>
                              </h3>
                              <ul className="price-list">
                                <li>
                                  {" "}
                                  {t("global.currency.pdf")} {book?.pricePdf}
                                  {t("global.currency.rs")}
                                </li>{" "}
                                <br />
                                <li>
                                  {t("global.currency.paper")} {book.pricePaper}
                                  {t("global.currency.rs")}{" "}
                                </li>
                              </ul>
                              <ul className="author-post">
                                <li className="authot-list">
                                  <span className="thumb">
                                    <img
                                      src={
                                        book?.author?.profileImg ||
                                        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                                      }
                                      alt="img"
                                    />
                                  </span>
                                  <span className="content">
                                    {book?.author?.name}
                                  </span>
                                </li>
                                <div className="star">
                                  {Array(5)
                                    .fill(book?.rate)
                                    .map((_, starIndex) => (
                                      <i
                                        key={starIndex}
                                        className={
                                          starIndex < book?.rate
                                            ? "fa-solid fa-star"
                                            : "fa-regular fa-star"
                                        }
                                      ></i>
                                    ))}
                                </div>
                              </ul>
                            </div>
                            <div className="shop-button">
                              <a
                                href={`/Single/${book?.id}`}
                                className="theme-btn"
                              >
                                <i className="fa-solid fa-basket-shopping"></i>{" "}
                                {t("global.add_to_cart")}
                              </a>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                  </Swiper>
                </div>
              </section>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default SingleProduct;
