import React from 'react'
import { useTranslation } from "react-i18next";
const Contact = () => {
    const { t, i18n } = useTranslation();
  return (
    <>
      {/* <!-- Breadcumb Section Start --> */}
    <div class="breadcrumb-wrapper">
        <div class="book1">
            <img src="assets/img/hero/book1.png" alt="book"/>
        </div>
        <div class="book2">
            <img src="assets/img/hero/book2.png" alt="book"/>
        </div>
        <div class="container">
            <div class="page-heading">
                <h1>{t("global.contact.contactUs")}</h1>
                <div class="page-header">
                    <ul class="breadcrumb-items wow fadeInUp" data-wow-delay=".3s">
                        <li>
                            <a href="index.html">
                            {t("global.contact.home")}
                            </a>
                        </li>
                        <li>
                            <i class="fa-solid fa-chevron-right"></i>
                        </li>
                        <li>
                        {t("global.contact.contactUs")}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    {/* <!-- Contact Section Start --> */}
    <section class="contact-section fix section-padding">
        <div class="container">
            <div class="contact-wrapper">
                <div class="row g-4 align-items-center">
                    {/* <div class="col-lg-4">
                        <div class="contact-left-items">
                            <div class="contact-info-area-2">
                                <div class="contact-info-items mb-4">
                                    <div class="icon">
                                        <i class="icon-icon-10"></i>
                                    </div>
                                    <div class="content">
                                        <p>{t("global.contact.callUs")}</p>
                                        <h3>
                                            <a href="tel:+966506300345">+966506300345</a>
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
                                            <a href="mailto:example@gmail.com">example@gmail.com</a>
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
                                        {t("global.contact.address")}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div class="video-image">
                                <img src="assets/img/contact.jpg" alt="img"/>
                                <div class="video-box">
                                    <a href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                                        class="video-btn ripple video-popup">
                                        <i class="fa-solid fa-play"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div class="col-lg-12">
                        <div class="contact-content">
                            <h2>{t("global.contact.readyToStart")}</h2>
                            <p>
                            {t("global.contact.contactDescription")}
                            </p>
                            <form action="contact.php" id="contact-form" method="POST" class="contact-form-items">
                                <div class="row g-4">
                                    <div class="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                                        <div class="form-clt">
                                            <span>{t("global.contact.yourName")}*</span>
                                            <input type="text" name="name" id="name" placeholder={t("global.contact.yourNamePlaceholder")}/>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
                                        <div class="form-clt">
                                            <span>{t("global.contact.yourEmail")}*</span>
                                            <input type="text" name="email" id="email123" placeholder={t("global.contact.yourEmailPlaceholder")}/>
                                        </div>
                                    </div>
                                    <div class="col-lg-12 wow fadeInUp" data-wow-delay=".7s">
                                        <div class="form-clt">
                                            <span>{t("global.contact.writeMessage")}*</span>
                                            <textarea name="message" id="message"
                                                placeholder={t("global.contact.messagePlaceholder-")}></textarea>
                                        </div>
                                    </div>
                                    <div class="col-lg-7 wow fadeInUp" data-wow-delay=".9s">
                                        <button type="submit" class="theme-btn">
                                        {t("global.contact.sendMessage")}<i class="fa-solid fa-arrow-right-long"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* <!--<< Map Section Start >>--> */}
    {/* <div class="map-section">
        <div class="map-items">
            <div class="googpemap">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6678.7619084840835!2d144.9618311901502!3d-37.81450084255415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b4758afc1d%3A0x3119cc820fdfc62e!2sEnvato!5e0!3m2!1sen!2sbd!4v1641984054261!5m2!1sen!2sbd"
                    style={{border:'0'}} allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
    </div> */}
    </>
  )
}

export default Contact