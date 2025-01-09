import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { GetAuthordetailsApi, GetAuthorproductsApi } from "../../Api/Authors/AuthorsSlice";
import { useParams } from "react-router-dom";
import Wishlistcomponent from "../../components/wishlist/Wishlistcomponent";
import Paginationcomponent from "../../components/Pagination/Pagination";
const SignleAuthor = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [author, setAuthor] = useState({});
  const [authorproducts,setAuthorproducts]=useState([])
  useEffect(() => {
   const data={
        id:id
    }
    dispatch(GetAuthordetailsApi(id)).then((res) => {
      if (res.payload?.code === 200) {
        setAuthor(res.payload?.data?.author);
      }
    });
    dispatch(GetAuthorproductsApi(data)).then((res) => {
        
        if (res.payload?.code === 200) {
            setAuthorproducts(res.payload?.data?.products);
        }
      });
  }, []);
   
  const handlePaginate=(value,products)=>{
    setAuthorproducts(products)
  }
  return (
    <div className="container my-4" style={{ minHeight: "100vh" }}>
      {/* Header */}
      <div className="text-center">
        <h2 className="fw-bold mb-4">{t("global.author_details.header")} </h2>
      </div>

      {/* Author Info */}
      <div className="text-center mb-4">
        <img
          src={author?.profileImg || "https://via.placeholder.com/100"}
          alt={author?.name}
          className="rounded-circle mb-3"
          style={{ width: "100px", height: "100px" }}
        />
        <h4 className="fw-bold">{author?.name}</h4>
        <div className="d-flex align-items-center justify-content-center gap-3">
          <p className="text-muted">
            <strong>{t("global.author_details.authorInfo.phone")}:</strong>{" "}
            {author?.phone}
          </p>
          <p className="text-muted">
            <strong>{t("global.author_details.authorInfo.birthday")}:</strong>{" "}
            {author?.birthday}
          </p>
        </div>
      </div>

      {/* Featured Works */}
      {authorproducts.filter((data)=> data?.rate ).length > 0  && (<>
      
      <h4 className="fw-bold mt-5 mb-3">
        {t("global.author_details.featuredWorks")}{" "}
      </h4>
      <div className="row g-3 mb-4">
          {authorproducts.length > 0 && authorproducts.filter((data)=> data?.rate )  && authorproducts.filter((data)=> data?.rate ).slice(0,6).map((data, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-12 shop-box-items style-2">
            <div className="shop-box-items style-2">
              <div className="book-thumb center">
                <a href="shop-details">
                  <img src={data?.coverImage} alt={data?.title} />
                </a>
              <Wishlistcomponent bookid={data?.id} wishlist={data?.wishlist} />
              </div>
              <div className="shop-content">
                <h5>{data?.product?.category}</h5>
                <h3><a href={`/Single/${data?.product?.id}`}>{data?.title}</a></h3>
                <ul className="price-list">
                  <li>{t("global.currency.pdf")} {data?.pricePdf}{t("global.currency.rs")}</li><br />
                  <li>{t("global.currency.paper")} {data?.pricePaper}{t("global.currency.rs")}</li>
                </ul>
                <ul className="author-post">
                  <li className="authot-list">
                    <span className="thumb">
                      <img src={data?.author?.profileImg} alt={data?.author?.name} />
                    </span>
                    <span className="content fw-bold">{data?.author?.name}</span>
                  </li>
                </ul>
                <div className="star">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <i
                      key={starIndex}
                      className={starIndex < (data?.rate || 0) ? "fa-solid fa-star" : "fa-regular fa-star"}
                    ></i>
                  ))}
                </div>
              </div>
              <div className="shop-button">
                            <a
                              href={`/Single/${data?.id}`}
                              className="theme-btn"
                            >
                              <i className="fa-solid fa-basket-shopping"></i>{" "}
                              {t("global.add_to_cart")}
                            </a>
                          </div>
            </div>
          </div>
          ))}
        </div>
      
      </>)}
      

      {authorproducts.length > 0  && (<>
      
        <h4 className="fw-bold mt-5 mb-3">
        {t("global.author_details.previousWorks")}{" "}
      </h4>
      <div className="row g-3  mb-4">
          {authorproducts.length > 0 && authorproducts.filter((data)=> data?.rate )  && authorproducts.map((data, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-12 shop-box-items style-2">
            <div className="shop-box-items style-2">
              <div className="book-thumb center">
                <a href="shop-details">
                  <img src={data?.coverImage} alt={data?.title} />
                </a>
              <Wishlistcomponent bookid={data?.id} wishlist={data?.wishlist} />
              </div>
              <div className="shop-content">
                <h5>{data?.product?.category}</h5>
                <h3><a href={`/Single/${data?.product?.id}`}>{data?.title}</a></h3>
                <ul className="price-list">
                  <li>{t("global.currency.pdf")} {data?.pricePdf}{t("global.currency.rs")}</li><br />
                  <li>{t("global.currency.paper")} {data?.pricePaper}{t("global.currency.rs")}</li>
                </ul>
                <ul className="author-post">
                  <li className="authot-list">
                    <span className="thumb">
                      <img src={data?.author?.profileImg} alt={data?.author?.name} />
                    </span>
                    <span className="content fw-bold">{data?.author?.name}</span>
                  </li>
                </ul>
                <div className="star">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <i
                      key={starIndex}
                      className={starIndex < (data?.rate || 0) ? "fa-solid fa-star" : "fa-regular fa-star"}
                    ></i>
                  ))}
                </div>
              </div>
              <div className="shop-button">
                            <a
                              href={`/Single/${data?.id}`}
                              className="theme-btn"
                            >
                              <i className="fa-solid fa-basket-shopping"></i>{" "}
                              {t("global.add_to_cart")}
                            </a>
                          </div>
            </div>
          </div>
          ))}
        </div>

        <Paginationcomponent onFilterChange={handlePaginate}/>
      
      </>)}
      
    </div>
  );
};

export default SignleAuthor;
