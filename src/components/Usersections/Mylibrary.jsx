import React ,{ useState , useRef ,useEffect} from "react";
import { useTranslation } from "react-i18next";
import { TbFileUpload } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { GetUserLibraryApi } from "../../Api/User/UserSlice";
import Wishlistcomponent from "../wishlist/Wishlistcomponent";
import Notfound from "../Notfound/Notfound";
const Mylibrary = () => {
  const { t, i18n } = useTranslation();
  
  const dispatch =useDispatch()
  const loading = useSelector((state) => state.product.status);
  const [orders,setorders]=useState([])
  useEffect(() => {
    dispatch(GetUserLibraryApi()).then((res)=>{
      if(res?.payload?.code){
        setorders(res?.payload?.data?.orders)
      }
    })
  
  }, []);
  const fileInputRef = useRef(null);  // Create a ref for the file input element

  // Function to trigger file input when the button is clicked
  const handleFileUploadClick = () => {
    fileInputRef.current.click();  // Trigger the file input to open the file dialog
  };
  return (
    <div className="container-fluid">
      {" "}
      {/* <div className="d-flex justify-content-end">
       
        <a
          href="#"
          className="theme-btn transparent-btn wow fadeInUp"
          data-wow-delay=".5s"
          style={{ padding: "6px" }}
          onClick={handleFileUploadClick}  // Attach click event to trigger file input
        >
          <TbFileUpload className="fs-2" />
        </a>
       
        <input
          ref={fileInputRef}
          type="file"
          className="d-none"  // Hide the file input
          onChange={(e) => console.log("File uploaded:", e.target.files[0])}  // Handle file change
        />
      </div> */}
      {loading !== 'loading' ?(<>
      
      {loading !== 'failed' && orders.length !== 0 ?(<>
      
      <div className="row">
      {orders?.map((data) => 
  Array.isArray(data?.cartItems) && data.cartItems.map((data, idx) => {
    if (!data?.product) return null;

    return (
      <div key={idx} className="col-lg-3 col-md-6 col-sm-12 shop-box-items style-2">
        <div className="shop-box-items style-2">
          <div className="book-thumb center">
            <a href="shop-details">
              <img src={data?.product?.coverImage} alt={data?.product?.title} />
            </a>
          <Wishlistcomponent bookid={data?.product?.id} wishlist={data?.product?.wishlist} />
          </div>
          <div className="shop-content">
            <h5>{data?.product?.category}</h5>
            <h3><a href={`/Single/${data?.product?.id}`}>{data?.product?.title}</a></h3>
            <ul className="price-list">
              <li>{t("global.currency.pdf")} {data?.product?.pricePdf}{t("global.currency.rs")}</li><br />
              <li>{t("global.currency.paper")} {data?.product?.pricePaper}{t("global.currency.rs")}</li>
            </ul>
            <ul className="author-post">
              <li className="authot-list">
                <span className="thumb">
                  <img src={data?.product?.author?.img} alt={data?.product?.author?.name} />
                </span>
                <span className="content fw-bold">{data?.product?.author?.name}</span>
              </li>
            </ul>
            <div className="star">
              {Array.from({ length: 5 }).map((_, starIndex) => (
                <i
                  key={starIndex}
                  className={starIndex < (data?.product?.rate || 0) ? "fa-solid fa-star" : "fa-regular fa-star"}
                ></i>
              ))}
            </div>
          </div>
          <div className="shop-button">
            <a href={data?.product?.pdfFile} target="_blank" className="theme-btn">
              <i className="fa-solid fa-book-open"></i> {t("global.my_library.read")}
            </a>
          </div>
        </div>
      </div>
    );
  })
)}

      </div>
      </>):(<>
        
        <Notfound/>
      </>)}
      
      
      </>):(<>
        <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="spinner-border text-secondary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
      </>)}
      
    
    </div>
  );
};

export default Mylibrary;
