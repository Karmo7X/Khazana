import React ,{ useState ,useEffect} from "react";
import { useTranslation } from "react-i18next";
import { TbFileUpload } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { GetUserLibraryApi, GetUserOrderApi } from "../../Api/User/UserSlice";
import Notfound from "../Notfound/Notfound";
const Myorder = () => {
    const { t, i18n } = useTranslation();
  
    const dispatch =useDispatch()
    const loading = useSelector((state) => state.user.status);
    const [orders,setorders]=useState([])
    useEffect(() => {
      dispatch(GetUserOrderApi()).then((res)=>{
        if(res?.payload?.code){
          setorders(res?.payload?.data?.orders)
        }
      })
    
    }, []);

    function formatDate(dateString) {
       if (!dateString) return ""
      const parts = dateString.split(":");
      const day = parseInt(parts[0]);
      const month = parseInt(parts[1]);
      const year = parseInt(parts[2]);
    
      const date = new Date(year, month - 1, day); 
    
      const formattedDate = date.toISOString().split('T')[0]; 
      return formattedDate;
    }
  
  return (
    <>
         {loading !== 'loading' ?(<>
      
      {loading !== 'failed' && orders.length !== 0  ?(<>
       <div className="container">
      <div className="row">
      {orders.map((data)=>{
        console.log(data)
        return(<>
        <div className="col-lg-4 col-sm-12 col-md-6" key={data?.id}>
   
   <div className="card" style={{ width: '100%', margin: '20px', borderRadius: '10px' ,border:'1px solid #FFC900' }}>
<div className="card-body">
<div className="d-flex justify-content-between align-items-center mb-3">

<p className="card-text">{formatDate(data?.orderDate)}</p> 
<h5 className="card-title" style={{color:"#FFC900"}}>{data?.totalPrice}{t("global.currency.rs")} </h5>
</div>
<div className="row">
  <div className="col-lg-8 col-md-6 col-sm-12 mb-3">
   <p className="card-text fs-5">{t("global.profile.order.orderId")} : {data?.id}</p> 
  </div>
  <div  className="col-lg-4 col-md-6 col-sm-12  mb-3 d-flex align-items-center justify-content-end">
  <div className={`p-2 rounded ${
        data?.orderState === 'confirmed' ? 'bg-primary text-white' : 
        data?.orderState === 'shipped' ? 'bg-warning text-dark' : 
        data?.orderState === 'completed' ? 'bg-success text-white' : 
        data?.orderState === 'canceled' ? 'bg-danger text-white' : 
        'bg-light text-secondary' 
      }`}
>
      {data?.orderState}
    </div>
  
  </div>

<div>

</div>
</div>

<hr />
<div>
  {Array.isArray(data?.cartItems) && data?.cartItems.map((data)=>{ 
    console.log(data)
     return(<>
     <div className="d-flex align-items-center gap-2">
 <p className="card-text fs-5">{data?.product?.title}</p>
 <span>X</span><p className="card-text fs-5">{data?.price}{t("global.currency.rs")} </p> 
     </div>
    
    
     </>)
  })}


<p className="card-text fs-5">{t("global.profile.order.delivery")}: {data?.shippingAddress?.street} -{data?.shippingAddress?.city}- {t("global.profile.address.buildingNumber")} {data?.shippingAddress?.buildNumber}</p>
</div>
<hr />
<p className="card-text fs-5">{t("global.profile.order.total")} :{data?.totalPrice}{t("global.currency.rs")}</p>
{/* <button className="btn btn-primary">المزيد</button> */}
</div>
</div>
   </div>
        
        </>)
      
      })}
 </div>
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
   
  </>
  )
}

export default Myorder