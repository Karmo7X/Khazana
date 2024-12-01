import React, { useState, useEffect } from 'react'
import logo from '/assets/img/favicon.png'
import { Link } from 'react-router-dom'
import Login from './Modals/Login'
import Register from './Modals/Register'
import OTP from './Modals/OTP'
import Forgetpassword from './Modals/Forgetpasswor'
import Restpassword from './Modals/Restpassword'
import { useTranslation } from "react-i18next";
const Navbar = () => {
    const { t, i18n } = useTranslation();

    // State to manage selected language
  const [selectedLanguage, setSelectedLanguage] = useState("ar");
  const languageMap = {
    en:t("global.nav.languages.en"),
    ar: t("global.nav.languages.ar"),
    zh: t("global.nav.languages.zh"),
    id: t("global.nav.languages.id"),
  };
  // Effect to load language from localStorage on component mount
  useEffect(() => {
    const storedLanguage = localStorage.getItem("selectedLanguage");
    if (storedLanguage) {
        document.documentElement.lang=storedLanguage;
        i18n.changeLanguage(storedLanguage);
      setSelectedLanguage(storedLanguage);
    }

  }, [selectedLanguage]);

  // Function to handle language selection
  const handleLanguageChange = (language) => {
    setSelectedLanguage(language); // Update state
   
    localStorage.setItem("selectedLanguage", language); // Store in localStorage
    window.location.reload()
  };
  return (
    <>
    {/* <!-- Cursor follower --> */}
    {/* <div class="cursor-follower"></div> */}

   

    {/* <!-- Back To Top start --> */}
    <button id="back-top" class="back-to-top">
        <i class="fa-solid fa-chevron-up"></i>
    </button>

    {/* <!-- Offcanvas Area start  --> */}
    <div class="fix-area">
        <div class="offcanvas__info">
            <div class="offcanvas__wrapper">
                <div class="offcanvas__content">
                    <div class="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                        <div class="offcanvas__logo">
                            <a href="/">
                            <img  src={logo} className="w-50" alt="logo-img"/>
                            </a>
                        </div>
                        <div class="offcanvas__close">
                            <button>
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                    </div>
                    <p class="text d-none d-xl-block">
                    {t('global.footer.footercontent')}
                    </p>
                    <div class="mobile-menu fix mb-3"></div>
                    <div class="menu-cart d-flex align-items-center gap-2">
                                    <a href="/Wishlist" class="cart-icon profile-icon">
                                        <i class="fa-regular fa-heart"></i>
                                    </a>
                                    <a href="/Cart" class="cart-icon profile-icon">
                                        <i class="fa-regular fa-cart-shopping"></i>
                                    </a>
                                   
                                   
                                    
                                </div>
                    <div class="offcanvas__contact">
                        <h4>{t("global.nav.contactInfo")}</h4>
                        <ul>
                            {/* <li class="d-flex align-items-center">
                                <div class="offcanvas__contact-icon">
                                    <i class="fal fa-map-marker-alt"></i>
                                </div>
                                <div class="offcanvas__contact-text">
                                    <a  href="">{t("global.nav.address")}</a>
                                </div>
                            </li> */}
                            <li class="d-flex align-items-center">
                                <div class="offcanvas__contact-icon mr-15">
                                    <i class="fal fa-envelope"></i>
                                </div>
                                <div class="offcanvas__contact-text">
                                    <a href="mailto:fa.kh.rj@khezanatalkutub.com"><span
                                            >{t("global.nav.email")}</span></a>
                                </div>
                            </li>
                            <li class="d-flex align-items-center">
                                <div class="offcanvas__contact-icon mr-15">
                                    <i class="fal fa-clock"></i>
                                </div>
                                <div class="offcanvas__contact-text">
                                    <a  href="">{t("global.nav.workingHours")}</a>
                                </div>
                            </li>
                            <li class="d-flex align-items-center">
                                <div class="offcanvas__contact-icon mr-15">
                                    <i class="far fa-phone"></i>
                                </div>
                                <div class="offcanvas__contact-text">
                                    <a href="tel:+966506300345">{t("global.nav.phone")}</a>
                                </div>
                            </li>
                        </ul>
                        {/* <div class="header-button mt-4">
                            <a href="ContactUs" class="theme-btn text-center">
                            {t("global.nav.getAQuote")} <i class="fa-solid fa-arrow-right-long"></i>
                            </a>
                        </div> */}
                        <div class="social-icon d-flex align-items-center">
                        <a href="https://www.facebook.com/share/19MFqsjLG8/?mibextid=LQQJ4d"><i className="fab fa-facebook-f"></i></a>
                  <a href="https://x.com/khezanat/status/1863166513001209960?s=12"><i className="fab fa-twitter"></i></a>
                  <a href="https://www.instagram.com/khezanat.alkutub?igsh=anpsZG1sYnM1MWgy&utm_source=qr"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="offcanvas__overlay"></div>

    <div class="header-top-1">
        <div class="container">
            <div class="header-top-wrapper">
                <ul class="contact-list">
                   
                    <li style={{border:'none'}}>
                        <i class="far fa-envelope"></i>
                        <a href="mailto:fa.kh.rj@khezanatalkutub.com">{t("global.nav.email")}</a>
                    </li>
                    <li style={{border:'none'}}>
                        <i class="far fa-clock"></i>
                        <span>{t("global.nav.workingHours")}</span>
                    </li>
                     <li>
                        {/* <i class="fa-regular fa-phone"></i>
                        <a href="tel:+966506300345">{t("global.nav.phone")}</a> */}
                    </li>
                </ul>
                <ul class="list">
                    <li>
                        {/* <i class="fa-light fa-comments"></i><a href="ContactUs">Live Chat</a> */}
                      
                        </li>
                        <li
                  class="list-inline-item dropdown notification-list hide-phone"
                >
                  <a
                    class="nav-link dropdown-toggle arrow-none waves-effect text-white"
                     data-bs-toggle="dropdown"
                    href="#"
                    role="button"
                    aria-haspopup="false"
                    aria-expanded="false"
                  >
                     {languageMap[selectedLanguage]}
                    <img
                      src="assets/images/flags/us_flag.jpg"
                      class="ml-2"
                      height="16"
                      alt=""
                    />
                  </a>
                  <div
                    class="dropdown-menu dropdown-menu-right language-switch"
                  >
                     <a class="dropdown-item" href="#" onClick={() => handleLanguageChange("ar")}
                      ><img
                        src="assets/images/flags/italy_flag.jpg"
                        alt=""
                        height="16"
                      /><span style={{color:'#000'}} > {t("global.nav.languages.ar")} </span></a>
                    <a class="dropdown-item" href="#" onClick={() => handleLanguageChange("en")}
                      ><img
                        src="assets/images/flags/italy_flag.jpg"
                        alt=""
                        height="16"
                      /><span style={{color:'#000'}} > {t("global.nav.languages.en")} </span></a
                    >
                    <a class="dropdown-item" href="#"onClick={() => handleLanguageChange("zh")}
                      ><img
                        src="assets/images/flags/french_flag.jpg"
                        alt=""
                        height="16"
                      /><span style={{color:'#000'}} > {t("global.nav.languages.zh")}  </span></a
                    >
                    <a class="dropdown-item" href="#" onClick={() => handleLanguageChange("id")}
                      ><img
                        src="assets/images/flags/spain_flag.jpg"
                        alt=""
                        height="16"
                      /><span style={{color:'#000'}} > {t("global.nav.languages.id")} </span></a
                    >
                  
                  </div>
                </li>
                    <li><i class="fa-light fa-user"></i>
                        <button data-bs-toggle="modal" data-bs-target="#loginModal">
                        {t("global.nav.login")}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    {/* <!-- Sticky Header Section start  --> */}
    <header class="header-1 sticky-header">
        <div class="mega-menu-wrapper">
            <div class="header-main">
                <div class="container">
                    <div class="row">
                        <div class="col-6 col-md-6 col-lg-10 col-xl-8 col-xxl-10">
                            <div class="header-left">
                                <div class="logo mb-0">
                                    <Link to="/" class="header-logo d-flex align-items-center justify-content-center">
                                        <img  src={logo} style={{width:'70px'}} alt="logo-img"/>
                                    </Link>
                                </div>
                                <div class="mean__menu-wrapper">
                                    <div class="main-menu">
                                        <nav>
                                            <ul>
                                                <li>
                                                 <Link to={'/'}>
                                                   {t("global.nav.home")}
                                                 </Link>
                                                   
                                                </li>
                                                <li>
                                                <Link to="/Shop">
                                                {t("global.nav.shop")}
                                                    </Link>
                                                </li>
                                                <li>
                                                <Link to="/AboutUs">
                                                {t("global.nav.aboutUs")}
                                                    </Link>
                                                    
                                                </li>
                                                {/* <li>
                                                    <a href="news.html">
                                                        Blog
                                                        <i class="fas fa-angle-down"></i>
                                                    </a>
                                                    <ul class="submenu">
                                                        <li><a href="news-grid.html">Blog Grid</a></li>
                                                        <li><a href="news.html">Blog List</a></li>
                                                        <li><a href="news-details.html">Blog Details</a></li>
                                                    </ul>
                                                </li> */}
                                                <li>
                                                <Link to="/ContactUs">
                                                {t("global.nav.contact")}
                                                    </Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-6 col-md-6 col-lg-2 col-xl-4 col-xxl-2">
                            <div class="header-right">
                                <div class="category-oneadjust gap-6 d-flex align-items-center">
                                    {/* <div class="icon">
                                        <i class="fa-sharp fa-solid fa-grid-2"></i>
                                    </div>
                                    <select name="cate" class="category">
                                        <option value="1">
                                            Category
                                        </option>
                                        <option value="1">
                                            Web Design
                                        </option>
                                        <option value="1">
                                            Web Development
                                        </option>
                                        <option value="1">
                                            Graphic Design
                                        </option>
                                        <option value="1">
                                            Softwer Eng
                                        </option>
                                    </select> */}
                                    <form action="#" class="search-toggle-box d-md-block">
                                        <div class="input-area">
                                            <input type="text" placeholder="search"/>
                                            <button class="cmn-btn">
                                                <i class="far fa-search"></i>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <div class="menu-cart">
                                    <a href="/Wishlist" class="cart-icon">
                                        <i class="fa-regular fa-heart"></i>
                                    </a>
                                    <a href="/Cart" class="cart-icon">
                                        <i class="fa-regular fa-cart-shopping"></i>
                                    </a>
                                    <a href="/Profile" class="profile-icon ">
                                    <i class="fa-light fa-user"></i>
                                    </a>
                                   
                                    <div class="header-humbager ml-30">
                                        <a class="sidebar__toggle" href="javascript:void(0)">
                                            <div class="bar-icon-2">
                                                <img src="/assets/img/icon/icon-13.svg" alt="img"/>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </header>

    {/* <!-- Main Header Section start  --> */}
    <header class="header-1">
        <div class="mega-menu-wrapper">
            <div class="header-main">
                <div class="container">
                    <div class="row">
                        <div class="col-6 col-md-6 col-lg-10 col-xl-8 col-xxl-10">
                            <div class="header-left">
                                <div class="logo mb-0">
                                    <Link to="/" class="header-logo  d-flex align-items-center justify-content-center">
                                        <img  src={logo} style={{width:'70px'}} alt="logo-img"/>
                                    </Link>
                                </div>
                                <div class="mean__menu-wrapper">
                                    <div class="main-menu">
                                        <nav id="mobile-menu">
                                            <ul>
                                                <li>
                                                <Link to={'/'}>
                                                   {t("global.nav.home")}
                                                 </Link>
                                                   
                                                </li>
                                                <li>
                                                <Link to="/Shop">
                                                {t("global.nav.shop")}
                                                    </Link>
                                                   
                                                </li>
                                                <li>
                                                   
                                                    <Link to="/AboutUs">
                                                {t("global.nav.aboutUs")}
                                                    </Link>
                                                </li>
                                                {/* <li>
                                                    <a href="news.html">
                                                        Blog
                                                        <i class="fas fa-angle-down"></i>
                                                    </a>
                                                    <ul class="submenu">
                                                        <li><a href="news-grid.html">Blog Grid</a></li>
                                                        <li><a href="news.html">Blog List</a></li>
                                                        <li><a href="news-details.html">Blog Details</a></li>
                                                    </ul>
                                                </li> */}
                                                <li>
                                                    
                                                    <Link to="/ContactUs">
                                                {t("global.nav.contact")}
                                                    </Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-6 col-md-6 col-lg-2 col-xl-4 col-xxl-2">
                            <div class="header-right">
                                <div class="category-oneadjust gap-6 d-flex align-items-center">
                                    {/* <div class="icon">
                                        <i class="fa-sharp fa-solid fa-grid-2"></i>
                                    </div>
                                    <select name="cate" class="category">
                                        <option value="1">
                                            Category
                                        </option>
                                        <option value="1">
                                            Web Design
                                        </option>
                                        <option value="1">
                                            Web Development
                                        </option>
                                        <option value="1">
                                            Graphic Design
                                        </option>
                                        <option value="1">
                                            Softwer Eng
                                        </option>
                                    </select> */}
                                    <form action="#" class="search-toggle-box d-md-block">
                                        <div class="input-area">
                                            <input type="text" placeholder={t("global.nav.searchPlaceholder")}/>
                                            <button class="cmn-btn">
                                                <i class="far fa-search"></i>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <div class="menu-cart">
                                    <a href="/Wishlist" class="cart-icon">
                                        <i class="fa-regular fa-heart"></i>
                                    </a>
                                    <a href="/Cart" class="cart-icon">
                                        <i class="fa-regular fa-cart-shopping"></i>
                                    </a>
                                    <a href="/Profile" class="profile-icon ">
                                    <i class="fa-light fa-user"></i>
                                    </a>
                                    <div class="header-humbager ml-30">
                                        <a class="sidebar__toggle" href="javascript:void(0)">
                                            <div class="bar-icon-2">
                                                <img src="/assets/img/icon/icon-13.svg" alt="img"/>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </header>

    {/* <!-- Login Modal --> */}
      <Login/>
    {/* <!-- Registration Modal --> */}
      <Register/>

    {/* <!-- OTP Modal --> */}
         <OTP/>
     {/* <!-- forgetpassword Modal --> */}
       <Forgetpassword/>
       {/* <!-- resetpassword Modal --> */}
       <Restpassword/>
    </>
  )
}

export default Navbar