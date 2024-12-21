import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Shopdefault from '../../components/Shopdefault/Shopdefault'
import Shoplist from '../../components/Shoplist/Shoplist'
import { useTranslation } from "react-i18next";
import { useDispatch } from 'react-redux';
import { GetProductApi } from '../../Api/Product/Product';
const Shop = () => {
    const { t, i18n } = useTranslation();
    const [layout,setLayout]=useState('grid')
    const dispatch = useDispatch();
   
    const [books ,setBooks]=useState([])
    useEffect(()=>{
       dispatch(GetProductApi()).then((res)=>{
        if(res.payload?.code === 200){
          setBooks(res.payload?.data?.products)
        }
       })
    },[])
  return (
    <>
    {/* <!-- Breadcumb Section Start --> */}
    <div className="breadcrumb-wrapper">
        <div className="book1">
            <img src="/assets/img/hero/book1.png" alt="book"/>
        </div>
        <div className="book2">
            <img src="/assets/img/hero/book2.png" alt="book"/>
        </div>
        <div className="container">
            <div className="page-heading">
            <h1>{t("global.shop_discovery.title")} </h1>
             
                <div className="page-header">
                    <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".3s">
                        <li>
                            <Link to="/">
                            {t("global.nav.home")}
                            </Link>
                        </li>
                        <li>
                            <i className="fa-solid fa-chevron-right"></i>
                        </li>
                        <li>
                        {t("global.shop_discovery.breadcrumb")}
                        </li>
                      
                    </ul>
                </div>
            </div>
        </div>
    </div>

    {/* <!-- Shop Section Start --> */}
       <section className="shop-section fix section-padding">
        <div className="container">
        <div className="shop-default-wrapper">
                <div className="row">
                    <div className="col-12">
                        <div className="woocommerce-notices-wrapper wow fadeInUp" data-wow-delay=".3s">
                            <p>Showing 1-3 Of 34 Results </p>
                            <div className="form-clt">
                                <div className="nice-select" tabindex="0">
                                    <span className="current">
                                        Default Sorting
                                    </span>
                                    <ul className="list">
                                        <li data-value="1" className="option selected focus">
                                            Default sorting
                                        </li>
                                        <li data-value="1" className="option">
                                            Sort by popularity
                                        </li>
                                        <li data-value="1" className="option">
                                            Sort by average rating
                                        </li>
                                        <li data-value="1" className="option">
                                            Sort by latest
                                        </li>
                                    </ul>
                                </div>
                                <div className={`icon ${layout === 'list' ? "active" :""} `} onClick={()=>setLayout('list')}>
                                    <a href="#"><i className="fas fa-list"></i></a>
                                </div>
                              <div className={`icon-2 ${layout === 'grid' ? "active" :""}`} onClick={()=>setLayout('grid')}>
                                    <a href="#"><i className="fa-sharp fa-regular fa-grid-2"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                   
                </div>
                <div className="row">
                    {layout === "grid" ? (<><Shopdefault data={books}/></>):(<><Shoplist data={books}/></>)}
                </div>
            </div>
        </div>
       </section>
    </>
  )
}

export default Shop