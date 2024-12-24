import React,{useState,useEffect} from 'react'
import { useTranslation } from "react-i18next";
import Wishlistcomponent from '../wishlist/Wishlistcomponent';
import Filter from '../Filter/Filter';
import bookundefine from '../../../public/assets/img/bookundefine.jpg'
const Shoplist = ({data}) => {
    const { t, i18n } = useTranslation();
    const [books,setBooks]=useState([])
    useEffect(()=>{
      setBooks(data)
    },[data])
  return (
    <>
      <Filter/>
    
      <div class="col-xl-9 col-lg-8 mb-4 order-1 order-md-2 wow fadeInUp" data-wow-delay=".3s">
        {books.map((book,idx)=>{
            return(<>
            <div class="shop-list-items" key={idx}>
                                    <div class="shop-list-thumb">
                                        <img  src={book?.coverImage  ? book?.coverImage:bookundefine} alt={book?.title}/>
                                    </div>
                                    <div class="shop-list-content">
                                        <h3><a href={`/Single/${book?.id}`}>{book?.title}</a></h3>
                                        <ul className="price-list">
                            <li> {t("global.currency.pdf")} {book?.pricePdf}{t("global.currency.rs")}</li> <br/>
                            <li>{t("global.currency.paper")} {book.pricePaper}{t("global.currency.rs")} </li>
                            </ul>
                                    
                                        <p>
                                        {book?.description}
                                        </p>
                                        <li className="authot-list">
                            <span className="thumb">
                                <img src={book?.author?.profileImg || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} />
                            </span>
                            <span className="content fw-bold">{book?.author?.name}</span>
                        </li>
                                        <div class="shop-btn">
                                            <a  href={`/Single/${book?.id}`} class="theme-btn"><i
                                                    class="fa-solid fa-basket-shopping"></i> {t("global.add_to_cart")}</a>
                                         <Wishlistcomponent bookid={book?.id} wishlist={book?.wishlist} grid={false}/>
                                        </div>
                                    </div>
                                </div></>)
        })}
                                
                               
                               

                            </div>
    </>
  )
}

export default Shoplist