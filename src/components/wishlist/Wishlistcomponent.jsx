import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddUserwishlistApi, GetUserwishlistApi, RemoveUserwishlistApi } from "../../Api/User/UserSlice";
const Wishlistcomponent = ({bookid}) => {
    const [wishlistId,setWishlistId]=useState(null)
   const dispatch =useDispatch()
   const handleAddwishlist=(id)=>{
 
      const data ={
        productId:id
      }
      dispatch(AddUserwishlistApi(data)).then((res)=>{
        if(res.payload?.code === 200){
            setWishlistId(id)
            dispatch(GetUserwishlistApi())
        }
      })
      

   }
   const handleRemovewishlist=(id)=>{
 
    const data ={
      productId:id
    }
    dispatch(RemoveUserwishlistApi(data)).then((res)=>{
        if(res.payload?.code === 200){
            setWishlistId(null)
        }
      })
 }
  return (
    <>
    <ul className="shop-icon d-grid justify-content-center align-items-center">
                     {wishlistId !== null ?
                     (<li style={{background:'#FFC900'}} onClick={()=>{setWishlistId(null);handleRemovewishlist(bookid)}}>
                           <i className="far fa-heart"></i>
                        </li>):
                        (<li onClick={()=>{setWishlistId(bookid);handleAddwishlist(bookid)}}>
                            <i className="far fa-heart"></i>
                        </li>)}
                       
                        
                        {/* <li>
                            <a href="/Cart">
                                <img className="icon" src="assets/img/icon/shuffle.svg" alt="Shuffle Icon" />
                            </a>
                        </li> */}
                        <li>
                            <a href={`/Single/${bookid}`}><i className="far fa-eye"></i></a>
                        </li>
                    </ul>
    </>
  )
}

export default Wishlistcomponent