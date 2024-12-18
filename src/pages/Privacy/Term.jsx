import React,{useState,useEffect} from 'react'
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { GetTermApi } from '../../Api/Term/Term';

const Term = () => {
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();
    const [Termsdata, setTermsdata] = useState(null);
          // get Terms
          useEffect(() => {
            dispatch(GetTermApi()).then((res) => {
              if (res.payload?.code === 200) {
                setTermsdata(res.payload?.data?.termsAndConditions);
              }
            });
          }, []);
  return (
    <>
     <div className="container mt-5">
      
        <div className="text-white mt-5 mb-5">
          <h1 className="mt-5 mb-5">{t('global.footer.terms_and_conditions')}</h1>
        </div>
        <div className="privacy_data fs-5 mt-5 mb-5">
         {Termsdata}
        </div>
      </div>
   
    </>
  )
}

export default Term