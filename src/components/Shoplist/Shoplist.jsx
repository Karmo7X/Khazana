import React,{useState,useEffect} from 'react'
import { useTranslation } from "react-i18next";
const Shoplist = ({data}) => {
    const [books,setBooks]=useState([])
    useEffect(()=>{
      setBooks(data)
    },[data])
  return (
    <>
      <div class="col-lg-12 wow fadeInUp" data-wow-delay=".3s">
        {books.map((book,idx)=>{
            return(<>
            <div class="shop-list-items" key={idx}>
                                    <div class="shop-list-thumb">
                                        <img  src={book.image} alt={book.title}/>
                                    </div>
                                    <div class="shop-list-content">
                                        <h3><a href={`/Single/${book.id}`}>{book.title}</a></h3>
                                        <h5>{book.price}</h5>
                                        <div class="star">
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-regular fa-star"></i>
                                        </div>
                                        <p>
                                            Vestibulum consectetur fringilla tellus, et pulvinar massa tempus nec. Fusce
                                            nibh nibh, consectetur vitae felis quis, sagittis ullamcorper enim. Nullam
                                            maximus vehicula justo, vel vestibulum turpis dictum at. Nam sed laoreet
                                            sem. Aliquam urna massa,
                                        </p>
                                        <div class="shop-btn">
                                            <a  href={`/Single/${book.id}`} class="theme-btn"><i
                                                    class="fa-solid fa-basket-shopping"></i> Add To Cart</a>
                                            <ul class="shop-icon d-flex justify-content-center align-items-center">
                                                <li>
                                                    <a href="/Cart"><i class="far fa-heart"></i></a>
                                                </li>
                                                <li>
                                                    <a href="/Cart">
                                                        <img class="icon" src="assets/img/icon/shuffle.svg"
                                                            alt="svg-icon"/>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a  href={`/Single/${book.id}`}><i class="far fa-eye"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div></>)
        })}
                                
                               
                               

                            </div>
    </>
  )
}

export default Shoplist