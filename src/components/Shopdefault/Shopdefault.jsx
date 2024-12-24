import React,{useState,useEffect} from 'react'
import Filter from '../Filter/Filter'
import Pagination from '../Pagination/Pagination'
import { useTranslation } from "react-i18next";
import Wishlistcomponent from '../wishlist/Wishlistcomponent';
import bookundefine from '../../../public/assets/img/bookundefine.jpg'
import AddCart from '../Buttons/AddCart';
const Shopdefault = ({data}) => {
    const { t, i18n } = useTranslation();
    const [books,setBooks]=useState([])
    useEffect(()=>{
      setBooks(data)
    },[data])
  return (
    <>
            <Filter/>
                    <div className="col-xl-9 col-lg-8 mb-4 order-1 order-md-2">
                        <div className="tab-content h-100 " id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-arts" role="tabpanel"
                                aria-labelledby="pills-arts-tab" tabindex="0">
                                <div className="row">
                                {books.map((book,idx)=>{
            return(<>
             <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".2s" key={idx}>
             <div className="shop-box-items ">
                        <div className="book-thumb center">
                            <a href={`/Single/${book?.id}`}>
                                <img src={book?.coverImage  ? book?.coverImage:bookundefine}  alt="Book cover" />
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
                                    <img src={book?.author?.profileImg|| "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" } alt={book?.author?.name} />
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
                            <a href={`/Single/${book?.id}`}  className="theme-btn">
                                <i className="fa-solid fa-basket-shopping"></i> {t("global.add_to_cart")}
                            </a>
                        </div>
                    </div>
                                    </div>
            </>)
        })}
                                   
                                    
                                </div>
                            </div>
                            {/* <div className="tab-pane fade" id="pills-Biographies" role="tabpanel"
                                aria-labelledby="pills-Biographies-tab" tabindex="0">
                                <div className="row">
                                {books.map((book,idx)=>{
            return(<>
             <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s" key={idx}>
                                        <div className="shop-box-items">
                                            <div className="book-thumb center">
                                                <a href={`/Single/${book.id}`}><img src={book.image} alt={book.title}/></a>
                                                <ul className="post-box">
                                                    <li>
                                                        Hot
                                                    </li>
                                                    <li>
                                                        -30%
                                                    </li>
                                                </ul>
                                                <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                    <li>
                                                        <a href="/Cart"><i className="far fa-heart"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="/Cart">
                                                            <img className="icon" src="/assets/img/icon/shuffle.svg"
                                                                alt="svg-icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href={`/Single/${book.id}`}><i className="far fa-eye"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <h3><a href={`/Single/${book.id}`}>{book.title}</a></h3>
                                                <ul className="price-list">
                                                    <li>{book.price}</li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                        3.4 (25)
                                                    </li>
                                                </ul>
                                                <div className="shop-button">
                                                     <a href="/Cart" className="theme-btn"><i
                                                            className="fa-solid fa-basket-shopping"></i> {t("global.add_to_cart")}</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
            </>)
        })}
                                   
                                    
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-ChristianBooks" role="tabpanel"
                                aria-labelledby="pills-ChristianBooks-tab" tabindex="0">
                                 <div className="row">
                                {books.map((book,idx)=>{
            return(<>
             <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s" key={idx}>
                                        <div className="shop-box-items">
                                            <div className="book-thumb center">
                                                <a href={`/Single/${book.id}`}><img src={book.image} alt={book.title}/></a>
                                                <ul className="post-box">
                                                    <li>
                                                        Hot
                                                    </li>
                                                    <li>
                                                        -30%
                                                    </li>
                                                </ul>
                                                <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                    <li>
                                                        <a href="/Cart"><i className="far fa-heart"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="/Cart">
                                                            <img className="icon" src="/assets/img/icon/shuffle.svg"
                                                                alt="svg-icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href={`/Single/${book.id}`}><i className="far fa-eye"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <h3><a href={`/Single/${book.id}`}>{book.title}</a></h3>
                                                <ul className="price-list">
                                                    <li>{book.price}</li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                        3.4 (25)
                                                    </li>
                                                </ul>
                                                <div className="shop-button">
                                                     <a href="/Cart" className="theme-btn"><i
                                                            className="fa-solid fa-basket-shopping"></i> {t("global.add_to_cart")}</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
            </>)
        })}
                                   
                                    
                                </div>
                            </div>
                            <div className="tab-pane fade show active" id="pills-ResearchPublishing" role="tabpanel"
                                aria-labelledby="pills-ResearchPublishing-tab" tabindex="0">
                                <div className="row">
                                {books.map((book,idx)=>{
            return(<>
             <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s" key={idx}>
                                        <div className="shop-box-items">
                                            <div className="book-thumb center">
                                                <a href={`/Single/${book.id}`}><img src={book.image} alt={book.title}/></a>
                                                <ul className="post-box">
                                                    <li>
                                                        Hot
                                                    </li>
                                                    <li>
                                                        -30%
                                                    </li>
                                                </ul>
                                                <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                    <li>
                                                        <a href="/Cart"><i className="far fa-heart"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="/Cart">
                                                            <img className="icon" src="/assets/img/icon/shuffle.svg"
                                                                alt="svg-icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href={`/Single/${book.id}`}><i className="far fa-eye"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <h3><a href={`/Single/${book.id}`}>{book.title}</a></h3>
                                                <ul className="price-list">
                                                    <li>{book.price}</li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                        3.4 (25)
                                                    </li>
                                                </ul>
                                                <div className="shop-button">
                                                     <a href="/Cart" className="theme-btn"><i
                                                            className="fa-solid fa-basket-shopping"></i> {t("global.add_to_cart")}</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
            </>)
        })}
                                   
                                    
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-SportsOutdoors" role="tabpanel"
                                aria-labelledby="pills-SportsOutdoors-tab" tabindex="0">
                                 <div className="row">
                                {books.map((book,idx)=>{
            return(<>
             <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s" key={idx}>
                                        <div className="shop-box-items">
                                            <div className="book-thumb center">
                                                <a href={`/Single/${book.id}`}><img src={book.image} alt={book.title}/></a>
                                                <ul className="post-box">
                                                    <li>
                                                        Hot
                                                    </li>
                                                    <li>
                                                        -30%
                                                    </li>
                                                </ul>
                                                <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                    <li>
                                                        <a href="/Cart"><i className="far fa-heart"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="/Cart">
                                                            <img className="icon" src="/assets/img/icon/shuffle.svg"
                                                                alt="svg-icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href={`/Single/${book.id}`}><i className="far fa-eye"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <h3><a href={`/Single/${book.id}`}>{book.title}</a></h3>
                                                <ul className="price-list">
                                                    <li>{book.price}</li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                        3.4 (25)
                                                    </li>
                                                </ul>
                                                <div className="shop-button">
                                                     <a href="/Cart" className="theme-btn"><i
                                                            className="fa-solid fa-basket-shopping"></i> {t("global.add_to_cart")}</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
            </>)
        })}
                                   
                                    
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-FoodDrink" role="tabpanel"
                                aria-labelledby="pills-FoodDrink-tab" tabindex="0">
                                <div className="row">
                                {books.map((book,idx)=>{
            return(<>
             <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s" key={idx}>
                                        <div className="shop-box-items">
                                            <div className="book-thumb center">
                                                <a href={`/Single/${book.id}`}><img src={book.image} alt={book.title}/></a>
                                                <ul className="post-box">
                                                    <li>
                                                        Hot
                                                    </li>
                                                    <li>
                                                        -30%
                                                    </li>
                                                </ul>
                                                <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                    <li>
                                                        <a href="/Cart"><i className="far fa-heart"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="/Cart">
                                                            <img className="icon" src="/assets/img/icon/shuffle.svg"
                                                                alt="svg-icon"/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href={`/Single/${book.id}`}><i className="far fa-eye"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="shop-content">
                                                <h3><a href={`/Single/${book.id}`}>{book.title}</a></h3>
                                                <ul className="price-list">
                                                    <li>{book.price}</li>
                                                    <li>
                                                        <i className="fa-solid fa-star"></i>
                                                        3.4 (25)
                                                    </li>
                                                </ul>
                                                <div className="shop-button">
                                                     <a href="/Cart" className="theme-btn"><i
                                                            className="fa-solid fa-basket-shopping"></i> {t("global.add_to_cart")}</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
            </>)
        })}
                                   
                                    
                                </div>
                            </div> */}
                        </div>
                        <Pagination/>
                    </div> 
    </>
  )
}

export default Shopdefault