import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { GetProductApi } from "../../Api/Product/Product";

const Paginationcomponent = ({onFilterChange}) => {
  const [page, setPage] = useState(1);
  localStorage.setItem('pagenum',page)
  const dispatch =useDispatch()
  const numpages =useSelector((state)=>state.product?.data?.data?.pagination?.numbersOfPages)
  const handleChange = (event, value) => {
    setPage(value);
    if(localStorage.getItem('pagenum')){
      // console.log('ddffdfsd')
    }else{
      
     const data = {
      pagenum: value,
    };
    console.log(data)
    dispatch(GetProductApi(data)).then((res) => {
      if (res.payload?.code === 200) {
        onFilterChange(null, res.payload?.data?.products);
      }
    });

    }
   
  };
  
  
  const theme = createTheme({
    direction: document.documentElement.lang === "ar" ? "rtl" : "ltr",
  });
  return (
    <>
      <div className="page-nav-wrap text-center">
        <ThemeProvider theme={theme}>
          <Stack spacing={2}>
            <Pagination
              count={numpages}
              page={page}
              variant="outlined"
              onChange={handleChange}
            />
          </Stack>
        </ThemeProvider>
      </div>
    </>
  );
};

export default Paginationcomponent;
