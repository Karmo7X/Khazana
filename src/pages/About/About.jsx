import React, { useEffect, useState } from 'react'
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from 'react-redux';
import { GetAboutApi } from '../../Api/App/App';
const About = () => {
    const { t, i18n } = useTranslation();
    const dispatch =useDispatch()
    const loading = useSelector((state)=>state.app.status)
    const [about,setAbout]=useState()
    useEffect(()=>{
       dispatch(GetAboutApi()).then((res)=>{
        if(res.payload?.code === 200 ){
            setAbout(res.payload?.data?.aboutUs)
        }
       })
    },[])


    console.log(about)
  return (
    <>
      {/* <!-- breadcumb Section Start --> */}
    <div class="breadcrumb-wrapper">
        <div class="book1">
            <img src="/assets/img/hero/book1.png" alt="book"/>
        </div>
        <div class="book2">
            <img src="/assets/img/hero/book2.png" alt="book"/>
        </div>
        <div class="container">
            <div class="page-heading">
                <h1> {t("global.nav.aboutUs")}</h1>
                <div class="page-header">
                    <ul class="breadcrumb-items wow fadeInUp" data-wow-delay=".3s">
                        <li>
                            <a href="/">
                            {t("global.nav.home")}
                            </a>
                        </li>
                        <li>
                            <i class="fa-solid fa-chevron-right"></i>
                        </li>
                        <li>
                        {t("global.nav.aboutUs")}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    {loading !=='loading' ?(<>
    
      {/* <!-- About Section Start --> */}
    <section class="about-section fix section-padding">
        <div class="container">
            <div class="about-wrapper">
                <div class="row g-4 align-items-center">
                    <div class="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                        <div class="about-image">
                            <img src="/assets/img/about.jpg" alt="img"/>
                            <div class="video-box">
                                <a href={about?.linkVideo}
                                    class="video-btn ripple video-popup">
                                    <i class="fa-solid fa-play"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="about-content">
                            <div class="section-title mb-3">
                                <h2 class="wow fadeInUp" data-wow-delay=".3s">{about?.title}</h2>
                            </div>
                            <p class="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                            {about?.description}
                            </p>
                            <p class="mt-3 wow fadeInUp" data-wow-delay=".7s">
                            {about?.footerDescription}
                            </p>
                            {/* <a href="about.html" class="link-btn wow fadeInUp" data-wow-delay=".8s">Overview <i
                                    class="fa-regular fa-arrow-right"></i></a> */}
                        </div>
                    </div>



                    
                </div>
                <div class="row g-5 mt-4 align-items-center">
                    <div class="col-lg-4 wow fadeInUp" data-wow-delay=".3s">
                    <div class="contact-wrapper ">
                    <div class="">
                        <div class="contact-left-items w-100 d-flex align-items-center">
                            <div class="contact-info-area-2" style={{borderRadius:'16px 16px 16px 16px'}}>
                                <div class="contact-info-items mb-4">
                                    <div class="icon">
                                        <i class="icon-icon-10"></i>
                                    </div>
                                    <div class="content">
                                        <p>{t("global.contact.callUs")}</p>
                                        <h3>
                                            <a href={`tel:${about?.phone}`}>{about?.phone}</a>
                                        </h3>
                                    </div>
                                </div>
                                <div class="contact-info-items mb-4">
                                    <div class="icon">
                                        <i class="icon-icon-11"></i>
                                    </div>
                                    <div class="content">
                                        <p>{t("global.contact.makeAQuote")}</p>
                                        <h3>
                                            <a href={`mailto:${about?.email}`}>{about?.email}</a>
                                        </h3>
                                    </div>
                                </div>
                                <div class="contact-info-items border-none">
                                    <div class="icon">
                                        <i class="icon-icon-12"></i>
                                    </div>
                                    <div class="content">
                                        <p>{t("global.contact.location")}</p>
                                        <h3>
                                        {about?.location?.address}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                         
                        </div>
                    </div>
                    </div>
                    </div>
                    <div class="col-lg-8 wow fadeInUp" data-wow-delay=".3s">
                        <div class="about-image" style={{maxWidth:'none'}}>
                        <img src="assets/img/contact.jpg" alt="img" style={{borderRadius:'16px 16px 16px 16px'}}/>
                            <div class="video-box">
                                <a href={about?.linkVideo}
                                    class="video-btn ripple video-popup">
                                    <i class="fa-solid fa-play"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                 

                    
                </div>

               
            </div>
        </div>
    </section>

 

   <div class="map-section">
        <div class="map-items">
            <div class="googpemap">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6678.7619084840835!2d144.9618311901502!3d-37.81450084255415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b4758afc1d%3A0x3119cc820fdfc62e!2sEnvato!5e0!3m2!1sen!2sbd!4v1641984054261!5m2!1sen!2sbd"
                    style={{border:'0'}} allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
    </div>
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

export default About