import React from 'react'
import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t } = useTranslation();  // Assuming you're using i18next

return (
  <footer className="footer-section footer-bg">
    <div className="container">
      <div className="contact-info-area">
        <div className="contact-info-items wow fadeInUp" data-wow-delay=".2s">
          <div className="icon">
            <i className="icon-icon-5"></i>
          </div>
          <div className="content">
            <p>{t('global.footer.footerCall')}</p>
            <h3>
              <a href="tel:+966506300345">{t('global.footer.footerPhone')}</a>
            </h3>
          </div>
        </div>
        <div className="contact-info-items wow fadeInUp" data-wow-delay=".4s">
          <div className="icon">
            <i className="icon-icon-6"></i>
          </div>
          <div className="content">
            <p>{t('global.footer.footerEmail')}</p>
            <h3>
              <a href="mailto:example@gmail.com">example@gmail.com</a>
            </h3>
          </div>
        </div>
        <div className="contact-info-items wow fadeInUp" data-wow-delay=".6s">
          <div className="icon">
            <i className="icon-icon-7"></i>
          </div>
          <div className="content">
            <p>{t('global.footer.footerHours')}</p>
            <h3>{t('global.footer.footerHours')}</h3>
          </div>
        </div>
        <div className="contact-info-items wow fadeInUp" data-wow-delay=".8s">
          <div className="icon">
            <i className="icon-icon-8"></i>
          </div>
          <div className="content">
            <p>{t('global.footer.footerLocation')}</p>
            <h3>{t('global.footer.footerLocation')}</h3>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-widgets-wrapper">
      <div className="plane-shape float-bob-y">
        <img src="/assets/img/plane-shape.png" alt="img" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
            <div className="single-footer-widget">
              <div className="widget-head">
                <a href="index.html">
                  <img src="/assets/img/favicon.png" className="w-25" alt="logo-img" />
                </a>
              </div>
              <div className="footer-content">
                <p>
                  Phasellus ultricies aliquam volutpat ullamcorper laoreet neque, a lacinia curabitur lacinia mollis
                </p>
                <div className="social-icon d-flex align-items-center">
                  <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
                  <a href="https://x.com/"><i className="fab fa-twitter"></i></a>
                  <a href="https://www.youtube.com/"><i className="fab fa-youtube"></i></a>
                  <a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".4s">
            <div className="single-footer-widget">
              <div className="widget-head">
                <h3>{t('global.footer.footerCustomerSupport')}</h3>
              </div>
              <ul className="list-area">
                <li><a href="Shop"><i className="fa-solid fa-chevron-right"></i> {t('global.footer.footerStoreList')}</a></li>
                <li><a href="ContactUs"><i className="fa-solid fa-chevron-right"></i> {t('global.footer.footerContactUs')}</a></li>
                <li><a href="ReturnPolicy"><i className="fa-solid fa-chevron-right"></i> {t('global.footer.footerReturnPolicy')}</a></li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
            <div className="single-footer-widget">
              <div className="widget-head">
                <h3>{t('global.footer.footerCategories')}</h3>
              </div>
              <ul className="list-area">
                <li><a href="NovelBooks"><i className="fa-solid fa-chevron-right"></i> {t('global.footer.footerNovelBooks')}</a></li>
                <li><a href="PoetryBooks"><i className="fa-solid fa-chevron-right"></i> {t('global.footer.footerPoetryBooks')}</a></li>
                <li><a href="PoliticalBooks"><i className="fa-solid fa-chevron-right"></i> {t('global.footer.footerPoliticalBooks')}</a></li>
                <li><a href="HistoryBooks"><i className="fa-solid fa-chevron-right"></i> {t('global.footer.footerHistoryBooks')}</a></li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
            <div className="single-footer-widget">
              <div className="widget-head">
                <h3>{t('global.footer.footerNewsletter')}</h3>
              </div>
              <div className="footer-newsletter">
                <p>{t('global.footer.footerNewsletterText')}</p>
                <form action="#">
                  <input type="email" placeholder={t('global.footer.footerEmailPlaceholder')} />
                  <button type="submit">Sign Up</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="container">
        <div className="footer-bottom-wrapper w-100 text-center d-flex justify-content-center align-items-center">
          <p className='text-center'>{t('global.footer.footerAllRights')} 
            {/* <a href="/">brand-name</a> */}
          </p>
          {/* <div className="footer-logo">
            <img src="/assets/img/footer-logo.png" alt="footer-logo" />
          </div> */}
        </div>
      </div>
    </div>
  </footer>
);

}

export default Footer