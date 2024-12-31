
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next"
import { useDispatch, useSelector } from "react-redux";
import { GetUserwishlistApi } from "../../Api/User/UserSlice";
import Wishlistcomponent from "../../components/wishlist/Wishlistcomponent";
import Notfound from "../../components/Notfound/Notfound";
import bookundefine from '../../../public/assets/img/bookundefine.jpg'
const Wishlist = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.user.status);
    const [wishlist,setWishlist]=useState([])
    useEffect(()=>{
      dispatch(GetUserwishlistApi()).then((res)=>{
        if(res.payload?.code === 200 ){
            setWishlist(res.payload?.data?.wishlist)
        }
      })
    },[])

  return (
    <>
     {/* <!-- Breadcumb Section Start --> */}
    <div class="breadcrumb-wrapper">
        <div class="book1">
            <img src="assets/img/hero/book1.png" alt="book"/>
        </div>
        <div class="book2">
            <img src="assets/img/hero/book2.png" alt="book"/>
        </div>
        <div class="container">
            <div class="page-heading">
                <h1>{t("global.nav.wishlist")}</h1>
                <div class="page-header">
                    <ul class="breadcrumb-items wow fadeInUp" data-wow-delay=".3s">
                        <li>
                            <a href="index.html">
                            {t("global.nav.home")}
                            </a>
                        </li>
                        <li>
                            <i class="fa-solid fa-chevron-right"></i>
                        </li>
                        <li>
                        {t("global.nav.wishlist")}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    {/* <!-- Shop Cart Section Start --> */}
    {
        loading === 'loading' ?(<>
        <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="spinner-border text-secondary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        
        </>):(<>
            <div class="cart-section section-padding">
        <div class="container">
            {loading !== "failed" && wishlist.length !==0?(


 <div className="row">
                                {wishlist.map((book,idx)=>{
            return(<>
             <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s" key={idx}>
             <div className="shop-box-items style-2">
                        <div className="book-thumb center">
                            <a href={`/Single/${book?.id}`}>
                                <img src={book?.coverImage  ? book?.coverImage:bookundefine} alt="Book cover" style={{width:'200px',height:'300px',objectFit:'cover'}} />
                            </a>
                            <ul className="post-box">
                            {book?.isAvailablePdf  === true ?  <li>{t("global.currency.pdf")}</li>: null}
                            {book?.isAvailablePaper === true ?<li>{t("global.currency.paper")}</li>: null  }
            </ul>
                            <Wishlistcomponent bookid={book?.id} wishlist={true}/>
                        </div>
                        <div className="shop-content">
                            <h5>{book?.category}</h5>
                            <h3 style={{height:'50px'}}><a href="/Single/:id">{book?.title}</a></h3>
                            <ul className="price-list">
                            <li> {t("global.currency.pdf")} {book?.pricePdf}{t("global.currency.rs")}</li> <br/>
                            <li>{t("global.currency.paper")} {book.pricePaper}{t("global.currency.rs")} </li>
                            </ul>
                            <ul className="author-post">
                                <li className="authot-list">
                                    <span className="thumb">
                                    <img style={{width:'30px'}} src={book?.author?.profileImg || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} />
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
            ):(

             <Notfound/>
            )

            }
       
        </div>
    </div> 
        </>)
    }
   
    </>
  )
}

export default Wishlist