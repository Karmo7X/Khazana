import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { GetCategoryApi } from "../../Api/Category/CategorySlice";
import { useDispatch } from "react-redux";
import { GetProductApi, SearchProductApi } from "../../Api/Product/Product";

function Filter({ onFilterchange }) {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const [category, setCategory] = useState([]);
  const [formData, setFormData] = useState({
    pricePapermax: null,
    pricePapermin: null,
    category: "",
    isAvailablePdf: false,
    isAvailablePaper: false,
  });
  
   
  // get category
  useEffect(() => {
    dispatch(GetCategoryApi()).then((res) => {
      if (res.payload?.code === 200) {
        setCategory(res.payload?.data?.categories);
      }
    });
  }, []);



  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if( name === 'isAvailablePdf'){
        setFormData((prevData) => ({
            ...prevData,
            ['isAvailablePdf']: true,
            ['isAvailablePaper']: false,
          })); 
    }else if(name === 'isAvailablePaper'){
        setFormData((prevData) => ({
            ...prevData,
            ['isAvailablePdf']: false,
            ['isAvailablePaper']: true,
          })); 
    }else{
        setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    })); 
    }
   
    dispatch(GetProductApi(formData)).then((res)=>{
        if (res.payload?.code === 200) {
            onFilterchange(null,res.payload?.data?.products);
          }
     }) 
   

     
  };
  
  const [formsearch,setFormsearch]=useState({
    keyword:"",
    pagenum:""
  })
 
  useEffect(() => {
    setFormsearch((prevData) => ({
        ...prevData,
        ['pagenum']: localStorage.getItem('pagenum'),
      })); 
    
  }, [localStorage.getItem('pagenum')]);
  const handleChangefilter = (e) => {
    
    const { name, value } = e.target;
    setFormsearch((prevData) => ({
        ...prevData,
        [name]: value,
      })); 

      
  };

   useEffect(()=>{
    if(formsearch.keyword === ''){
      dispatch(GetProductApi()).then((res)=>{
        if(res.payload?.code === 200){
          onFilterchange(null,res.payload?.data?.products)   
        }    
      })
    }
   },[formsearch.keyword])
  const handleSearch=(e)=>{
    e.preventDefault();
    
    dispatch(SearchProductApi(formsearch)).then((res)=>{
      if(res.payload?.code === 200){
        onFilterchange(null,res.payload?.data?.products)   
      }    
    })
  }
  return (
    <>
      <div
        className="col-xl-3 col-lg-4 order-2 order-md-1 wow fadeInUp"
        data-wow-delay=".3s"
      >
        <div className="main-sidebar">
          <div className="single-sidebar-widget">
            <div className="wid-title">
              <h5>{t("global.filter.search")}</h5>
            </div>
            <form action="#" className="search-toggle-box">
              <div className="input-area search-container">
                <input
                  name="keyword"
                  value={formsearch?.keyword}
                  className="search-input"
                  type="text"
                  placeholder={t("global.filter.search")}
                  onChange={(e) => handleChangefilter(e)}
                  style={{color:'#000'}}
                />
                <button onClick={(e)=>handleSearch(e)} className="cmn-btn  search-icon">
                  <i className="far fa-search"></i>
                </button>
              </div>
            </form>
          </div>
          <div className="single-sidebar-widget">
            <div className="wid-title">
              <h5>{t("global.filter.category")}</h5>
            </div>
            <div className="categories-list">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
  {category.map((category) => (
    <li
      className="nav-item"
      role="presentation"
      key={category?.id}
    >
      <input
        type="radio"
        className="radio-button"
        id={`pills-${category?.title.toLowerCase().replace(/\s+/g, "-")}-tab`}
        data-bs-toggle="pill"
        data-bs-target={`#pills-${category?.title.toLowerCase().replace(/\s+/g, "-")}`}
        name="category"
        value={category?.id}
        checked={formData.category === category?.id}
        onChange={(e) => handleChange(e)}
        style={{ background: formData.category === category?.id ? "#FFC900" : "" }}
      />
      <label
        className="nav-link"
        htmlFor={`pills-${category?.title.toLowerCase().replace(/\s+/g, "-")}-tab`}
      >
        {category?.title}
      </label>
    </li>
  ))}
</ul>
            </div>
          </div>
          <div className="single-sidebar-widget">
            <div className="wid-title">
              <h5>{t("global.filter.status")}</h5>
            </div>
            <div className="product-status">
              <div className="product-status_stock  gap-6 d-flex align-items-center">
                <div className="d-flex align-items-center gap-3">
                 
                  <input
                    type="checkbox"
                    class="form-check-input"
                    name="isAvailablePdf"
                    // value={formData.isAvailablePdf}
                    // checked={formData.isAvailablePdf}
                    onChange={(e) => handleChange(e)}
                  /> <label class="form-check-label" for="flexCheckDefault">
                  {t("global.book_details.available_pdf")}
                  </label>
                </div>
                <div className="d-flex align-items-center gap-3">
                  
                  <input
                    type="checkbox"
                    class="form-check-input"
                    name="isAvailablePaper"
                    // checked={formData.isAvailablePaper}
                    onChange={(e) => handleChange(e)}
                  /><label class="form-check-label" for="flexCheckDefault">
                  {t("global.book_details.available_paper")}
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="single-sidebar-widget mb-50">
            <div className="wid-title">
              <h5>{t("global.filter.price")}</h5>
            </div>
            <div className="range__barcustom">
              <div className="range-items">
                <div className="price-input">
                  <div className="d-flex align-items-center gap-3">
                    <div>
                      <label class="form-label">{t("global.filter.min")}</label>
                      <div className="d-flex align-items-center gap-3">
                        <input
                          type="number"
                          min={0}
                          value={formData.pricePapermin}
                          name="pricePapermin"
                          onChange={(e) => handleChange(e)}
                          className="form-control"
                        />
                        <span>{t("global.currency.rs")}</span>
                      </div>
                    </div>
                    <div>
                      <label class="form-label">{t("global.filter.max")}</label>
                      <div className="d-flex align-items-center gap-3">
                        <input
                          type="number"
                          min={0}
                          value={formData.pricePapermax}
                          name="pricePapermax"
                          onChange={(e) => handleChange(e)}
                          className="form-control"
                        />
                        <span>{t("global.currency.rs")}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </>
  );
}

export default Filter;
