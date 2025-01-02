import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Shopdefault from "../../components/Shopdefault/Shopdefault";
import Shoplist from "../../components/Shoplist/Shoplist";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { GetProductApi } from "../../Api/Product/Product";
import Notfound from "../../components/Notfound/Notfound";
import Filter from "../../components/Filter/Filter";
const ShopWithCategory = () => {
  const { t, i18n } = useTranslation();
  const [layout, setLayout] = useState("grid");
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.product.status);
  const { categoryid } = useParams();

 
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const data={
      category:categoryid
    }
    dispatch(GetProductApi(data)).then((res) => {
      if (res.payload?.code === 200) {
        setBooks(res.payload?.data?.products);
      }
    });
  
  }, [categoryid]);

  const handleFilterChange = (value, products) => {
    
    const data = {
      sort: value,
      
    };
    
    if (data.sort !==null) {
      dispatch(GetProductApi(data)).then((res) => {
      
        if (res.payload?.code === 200) {
          setBooks(res.payload?.data?.products);
        }
      });
    }
    // if (products) {
    //   setBooks(products);
    // }
  };

  return (
    <>
    
    {/* <!-- Breadcumb Section Start --> */}
         <div className="breadcrumb-wrapper">
           <div className="book1">
             <img src="/assets/img/hero/book1.png" alt="book" />
           </div>
           <div className="book2">
             <img src="/assets/img/hero/book2.png" alt="book" />
           </div>
           <div className="container">
             <div className="page-heading">
               <h1>{t("global.shop_discovery.title")} </h1>
   
               <div className="page-header">
                 <ul
                   className="breadcrumb-items wow fadeInUp"
                   data-wow-delay=".3s"
                 >
                   <li>
                     <Link to="/">{t("global.nav.home")}</Link>
                   </li>
                   <li>
                     <i className="fa-solid fa-chevron-right"></i>
                   </li>
                   <li>{t("global.shop_discovery.breadcrumb")}</li>
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
                <div
                  className="woocommerce-notices-wrapper wow fadeInUp d-flex align-items-center justify-content-end"
                  data-wow-delay=".3s"
                >
                  {/* <p>Showing 1-3 Of 34 Results </p> */}
                  <div className="form-clt ">
                    <div
                      className="dropdown nice-select"
                      style={{ padding: "10px 15px" }}
                    >
                      <select
                        id="filter"
                        className="form-select"
                        onChange={(e) => handleFilterChange(e.target.value)}
                        value=""
                      >
                        <option value="">
                          {t("global.filter.options.default")}
                        </option>
                        <option value="-createdAt">
                          {t("global.filter.options.recently_featured")}
                        </option>
                        <option value="-numberOfSalePdf">
                          {t("global.filter.options.top_sales_pdf")}
                        </option>
                        <option value="-numberOfSalePaper">
                          {t("global.filter.options.top_sales_paper")}
                        </option>
                        <option value="-rate">
                          {t("global.filter.options.top_rating")}
                        </option>
                      </select>
                    </div>
                    <div
                      className={`icon ${layout === "list" ? "active" : ""}`}
                      onClick={() => setLayout("list")}
                    >
                      <a href="#">
                        <i className="fas fa-list"></i>
                      </a>
                    </div>
                    <div
                      className={`icon-2 ${layout === "grid" ? "active" : ""}`}
                      onClick={() => setLayout("grid")}
                    >
                      <a href="#">
                        <i className="fa-sharp fa-regular fa-grid-2"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {loading === "failed" ? (
              <>
                <Notfound />
              </>
            ) : (
              <>
                <div className="row w-100 align-items-center justify-content-center">
                  {/* <Filter categoryID={categoryid} onFilterchange={handleFilterChange} /> */}
                  {layout === "grid" ? (
                    <>
                      <Shopdefault data={books} onFilter={handleFilterChange} />
                    </>
                  ) : (
                    <>
                      <Shoplist data={books} onFilter={handleFilterChange} />
                    </>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </section>
      {/* {loading === "loading" ? (
        <>
          <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="spinner-border text-secondary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </>
      ) : (
        <>
     
        </>
      )} */}
    </>
  );
};

export default ShopWithCategory;
