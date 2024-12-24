import React,{useState,useEffect} from 'react'
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { GetpolicyApi } from '../../Api/App/App';

const Privacy = () => {
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();
    const [privacydata, setPrivacydata] = useState(null);
          // get category
          useEffect(() => {
            dispatch(GetpolicyApi()).then((res) => {
              if (res.payload?.code === 200) {
                setPrivacydata(res.payload?.data?.privacyPolicy);
              }
            });
          }, []);
  return (
    <>
     <div className="container mt-5">
      
        <div className="text-white mt-5 mb-5">
          <h1 className="mt-5 mb-5">{t("global.privacy_title.title")}</h1>
        </div>
        <div className="privacy_data fs-5 mt-5 mb-5">
         {privacydata}
        </div>
      </div>
   
    </>
  )
}

export default Privacy