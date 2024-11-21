import React from 'react'
import { useTranslation } from "react-i18next";
const CTA = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
     <section className="cta-banner-section fix section-padding pt-0">
      <div className="container">
        <div
          className="cta-banner-wrapper section-padding bg-cover"
          style={{ backgroundImage: "url('assets/img/cta-banner.jpg')" }}
        >
          <div className="book-shape">
            <img src="assets/img/book-shape.png" alt="shape" />
          </div>
          <div className="girl-shape float-bob-x">
            <img src="assets/img/girl-shape-2.png" className='img-fluid' style={{width:'88%'}} alt="shape" />
          </div>
          <div className="cta-content text-center">
            <h2
              className="mb-40 wow fadeInUp"
              data-wow-delay=".3s"
              style={{
                visibility: 'visible',
                animationDelay: '0.3s',
                animationName: 'fadeInUp'
              }}
              dangerouslySetInnerHTML={{
                __html: t("global.cta.ctaTitle")
              }}
            >
              {/* Get 25% discount in all <br /> kind of super Selling */}
            </h2>
            <a
              href="Shop"
              className="theme-btn wow fadeInUp"
              data-wow-delay=".5s"
              style={{
                visibility: 'visible',
                animationDelay: '0.5s',
                animationName: 'fadeInUp'
              }}
            >
             {t("global.cta.ctaButton")}<i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default CTA