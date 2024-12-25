import React ,{ useState ,useEffect} from "react";
import { useTranslation } from "react-i18next";
import { TbFileUpload } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { GetUserLibraryApi, GetUserOrderApi } from "../../Api/User/UserSlice";
import Notfound from "../Notfound/Notfound";
const Myorder = () => {
    const { t, i18n } = useTranslation();
  
    const dispatch =useDispatch()
    const loading = useSelector((state) => state.product.status);
    const [orders,setorders]=useState([])
    useEffect(() => {
      dispatch(GetUserOrderApi()).then((res)=>{
        if(res?.payload?.code){
          setorders(res?.payload?.data?.orders)
        }
      })
    
    }, []);
  return (
    <>Myorder</>
  )
}

export default Myorder