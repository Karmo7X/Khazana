import React, { useState, useEffect } from "react";
import Paginationcomponent from "../Pagination/Pagination";
import { useTranslation } from "react-i18next";
import Wishlistcomponent from "../wishlist/Wishlistcomponent";
import bookundefine from "../../../public/assets/img/bookundefine.jpg";
import AddCart from "../Buttons/AddCart";
import Notfound from "../Notfound/Notfound";
const Shopdefault = ({ data ,onFilter }) => {
  const { t, i18n } = useTranslation();
  const [books, setBooks] = useState([]);
  useEffect(() => {
    setBooks(data);
  }, [data]);
  return (
    <>
     
      <div className="col-xl-9 col-lg-8 mb-4 order-1 order-md-2">
        <div className="tab-content h-100 " id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-arts"
            role="tabpanel"
            aria-labelledby="pills-arts-tab"
            tabindex="0"
          >
            {books.length === 0 ? (
              <Notfound />
            ) : (<>
              <div className="row">
                {books.map((book, idx) => {
                  return (
                    <>
                      <div
                        className="col-xl-3 col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
                        data-wow-delay=".2s"
                        key={idx}
                      >
                        <div className="shop-box-items ">
                          <div className="book-thumb center">
                            <a href={`/Single/${book?.id}`}>
                              <img
                                src={
                                  book?.coverImage
                                    ? book?.coverImage
                                    : bookundefine
                                }
                                alt="Book cover"
                                style={{width:'200px',height:'300px',objectFit:'cover'}}
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
                            <h3 style={{height:'50px'}} >
                              <a href={`/Single/${book?.id}`}>{book?.title}</a>
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
                                    alt={book?.author?.name}
                                  />
                                </span>
                                <span className="content fw-bold">
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
                      </div>
                    </>
                  );
                })}
              </div>
              <Paginationcomponent onFilterChange={onFilter} />
               </>
            )}
          </div>
        
        </div>
       
      </div>
    </>
  );
};

export default Shopdefault;
