import React,{useState,useEffect} from 'react'
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { GetsubscriptionApi } from '../../Api/Subscription/Subscriptions';
import Notfound from '../../components/Notfound/Notfound';
const Subcription = () => {
   const { t, i18n } = useTranslation();
   const dispatch = useDispatch();
   const [subcription,setSubcription]=useState([])

   useEffect(()=>{
     dispatch(GetsubscriptionApi()).then((res)=>{
      if(res.payload?.code === 200){
        setSubcription(res.payload?.data?.subscriptionPlans)
      }
     })
   },[])

   const formatDuration = (days) => {
    if (days >= 365) {
      const years = Math.floor(days / 365); // Convert to years
      return `${years} ${t('global.duration.year')}${years > 1 ? t('global.duration.plural') : ""}`;
    } else if (days >= 30) {
      const months = Math.floor(days / 30); // Convert to months
      return `${months} ${t('global.duration.month')}${months > 1 ? t('global.duration.plural') : ""}`;
    } else if (days >= 7) {
      const weeks = Math.floor(days / 7); // Convert to weeks
      return `${weeks} ${t('global.duration.week')}${weeks > 1 ? t('global.duration.plural') : ""}`;
    } else {
      return `${days} ${t('global.duration.day')}${days > 1 ? t('global.duration.plural') : ""}`; // Fewer than 7 days
    }
  };
  return (
    <>
    <div style={{minHeight:'100vh'}}>
  <div className="container my-5">
        {subcription.length !==0 ?(<>
        
         <h2 className="text-center mb-4"> {t('global.subcription_title.choosePlan')}  </h2>
        <div className="row mt-5">
          {/* Silver Card */}
          {subcription.map((data,index)=>{
             return(<>
               <div className="col-md-4 mb-4" key={index}>
            <div
              className="card shadow-sm border-0"
              style={{
                borderTop: "4px solid #7e57c2",
                height: "300px",
                minHeight: "300px",
                maxHeight: "300px",
              }}
            >
              <div
                className="card-header d-flex  align-items-center justify-content-between text-center"
                style={{  color: "#000",padding:"15px 30px" }}
              >
                <div>
                  <h5>{data?.name}</h5>
                </div>
                <div>
                  <h6>{data?.price}{t('global.currency.rs')}</h6>
                  <p>{formatDuration(data?.duration)}</p>
                </div>
              </div>
              <div className="card-body">
              <div dangerouslySetInnerHTML={{ __html: data?.description }} />
              </div>
            </div>
          </div>
             
             </>)

          })}
        

          {/* Gold Card */}
          {/* <div className="col-md-4 mb-4">
            <div
              className="card shadow-sm border-0"
              style={{
                borderTop: "4px solid #fdd835",
                height: "300px",
                minHeight: "300px",
                maxHeight: "300px",
              }}
            >
              <div
                className="card-header d-flex  align-items-center justify-content-between"
                style={{ backgroundColor: "#ffeb99", color: "#000",padding:"15px 30px" }}
              >
                <div>
                  <h5>الذهبي</h5>
                </div>

                <div>
                  <h6>11.00 ريال</h6>
                  <p>اشتراك ذهبي</p>
                </div>
              </div>
              <div className="card-body">
                <ul>
                  <li>قراءة و تحميل الكتب المجانية فقط</li>
                  <li>لا يلزم دفع رسوم سنوية على الاشتراك</li>
                  <li>شراء الكتب وتحميلها مع تخفيض قدره 15%</li>
                </ul>
              </div>
            </div>
          </div> */}

          {/* Diamond Card */}
          {/* <div className="col-md-4 mb-4">
            <div
              className="card shadow-sm border-0"
              style={{
                borderTop: "4px solid #00acc1",
                height: "300px",
                minHeight: "300px",
                maxHeight: "300px",
              }}
            >
              <div
                className="card-header  d-flex  align-items-center justify-content-between"
                style={{ backgroundColor: "#e0f7fa", color: "#000",padding:"15px 30px" }}
              >
                <div>
                  <h5>الماسي</h5>
                </div>

                <div>
                  <h6>11.00 ريال</h6>
                  <p>اشتراك الماسي</p>
                </div>
              </div>
              <div className="card-body">
                <ul>
                  <li>قراءة و تحميل الكتب المجانية فقط</li>
                  <li>لا يلزم دفع رسوم سنوية على الاشتراك</li>
                  <li>شراء الكتب وتحميلها مع تخفيض قدره 30%</li>
                  <li>الاستفادة من كل الكتب المسموعة</li>
                </ul>
              </div>
            </div>
          </div> */}
        </div>
        
        </>):(<>
    
          <Notfound/>
        </>)}
       
      </div>
    </div>
    
    </>
  );
};

export default Subcription;
