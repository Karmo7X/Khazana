import React from 'react'

function Filter() {
    const bookCategories = [
        { id: 1, title: 'Literature', count: 50, imgSrc: '/assets/img/book-categori/01.png' },
        { id: 2, title: 'Scientific Books', count: 30, imgSrc: '/assets/img/book-categori/02.png' },
        { id: 3, title: 'Religious Books', count: 40, imgSrc: '/assets/img/book-categori/03.png'  },
        { id: 4, title: 'Novels', count: 100, imgSrc: '/assets/img/book-categori/04.png' },
        { id: 5, title: 'Adventure Books', count: 4, imgSrc: '/assets/img/book-categori/05.png' },
        { id: 6, title: 'Design Law Books', count: 6, imgSrc: '/assets/img/book-categori/02.png' },
        { id: 7, title: 'Safe Home', count: 5, imgSrc: '/assets/img/book-categori/03.png' },
        { id: 8, title: 'Grow Flowers', count: 7, imgSrc: '/assets/img/book-categori/04.png' },
    ];
  return (
    <>
     <div className="col-xl-3 col-lg-4 order-2 order-md-1 wow fadeInUp" data-wow-delay=".3s">
                        <div className="main-sidebar">
                            <div className="single-sidebar-widget">
                                <div className="wid-title">
                                    <h5>Search</h5>
                                </div>
                                <form action="#" className="search-toggle-box">
                                    <div className="input-area search-container">
                                        <input className="search-input" type="text" placeholder="Search here"/>
                                        <button className="cmn-btn search-icon">
                                            <i className="far fa-search"></i>
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="single-sidebar-widget">
                                <div className="wid-title">
                                    <h5>Categories</h5>
                                </div>
                                <div className="categories-list">
                                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                    {bookCategories.map((category) => (
      <li className="nav-item" role="presentation" key={category.id}>
        <button
          className="nav-link"
          id={`pills-${category.title.toLowerCase().replace(/\s+/g, '-')}-tab`}
          data-bs-toggle="pill"
          data-bs-target={`#pills-${category.title.toLowerCase().replace(/\s+/g, '-')}`}
          type="button"
          role="tab"
          aria-controls={`pills-${category.title.toLowerCase().replace(/\s+/g, '-')}`}
          aria-selected="true"
        >
          {category.title}
        </button>
      </li>
    ))}
                                       
                                        
                                    </ul>
                                </div>
                            </div>
                            <div className="single-sidebar-widget">
                                <div className="wid-title">
                                    <h5>Product Status</h5>
                                </div>
                                <div className="product-status">
                                    <div className="product-status_stock  gap-6 d-flex align-items-center">
                                        <div className="nice-select category" tabindex="0"><span className="current">
                                            ورقي  
                                            </span>
                                            <ul className="list">
                                                <li data-value="1" className="option selected">
                                                   ورقي
                                                </li>
                                                <li data-value="1" className="option">
                                                   مسموع 
                                                </li>
                                                <li data-value="1" className="option">
                                                   PDf
                                                </li>
                                               
                                            </ul>
                                        </div>
                                    </div>
                                    {/* <div className="product-status_sale gap-6 d-flex align-items-center">
                                        <div className="nice-select category" tabindex="0">
                                            <span className="current">
                                                On Sale
                                            </span>
                                            <ul className="list">
                                                <li data-value="1" className="option selected">
                                                    On Sale
                                                </li>
                                                <li data-value="1" className="option">
                                                    Flovely And Unicom Erna
                                                </li>
                                                <li data-value="1" className="option">
                                                    Castle In The Sky
                                                </li>
                                                <li data-value="1" className="option">
                                                    How Deal With Very Bad BOOK
                                                </li>
                                            </ul>
                                        </div>
                                    </div> */}
                                </div>

                            </div>
                            <div className="single-sidebar-widget mb-50">
                                <div className="wid-title">
                                    <h5>Filter By Price</h5>
                                </div>
                                <div className="range__barcustom">
                                    <div className="slider">
                                        <div className="progress" style={{ left: '15.29%', right: '58.9%' }}></div>
                                    </div>
                                    <div className="range-input">
                                        <input type="range" className="range-min" min="0" max="10000" value="2500"/>
                                        <input type="range" className="range-max" min="100" max="10000" value="7500"/>
                                    </div>
                                    <div className="range-items">
                                        <div className="price-input">
                                            <div className="d-flex align-items-center gap-3">
                                                <a href="shop-left-sidebar.html" className="filter-btn mt-2 me-3">Filter</a>
                                                <div className="field">
                                                    <span>Price:</span>
                                                </div>
                                                <div className="field">
                                                    <span>$</span>
                                                    <input type="number" className="input-min" value="100"/>
                                                </div>
                                                <div className="separators">-</div>
                                                <div className="field">
                                                    <span>$</span>
                                                    <input type="number" className="input-max" value="1000"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="single-sidebar-widget mb-0">
                                <div className="wid-title">
                                    <h5>By Review</h5>
                                </div>
                                <div className="categories-list">
                                    <label className="checkbox-single d-flex align-items-center">
                                        <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                            <span className="checkbox-area d-center">
                                                <input type="checkbox"/>
                                                <span className="checkmark d-center"></span>
                                            </span>
                                            <span className="text-color">
                                                <span className="star">
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                </span>
                                                35
                                            </span>
                                        </span>
                                    </label>
                                    <label className="checkbox-single d-flex align-items-center">
                                        <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                            <span className="checkbox-area d-center">
                                                <input type="checkbox"/>
                                                <span className="checkmark d-center"></span>
                                            </span>
                                            <span className="text-color">
                                                <span className="star">
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-sharp fa-light fa-star"></i>
                                                </span>
                                                24
                                            </span>
                                        </span>
                                    </label>
                                    <label className="checkbox-single d-flex align-items-center">
                                        <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                            <span className="checkbox-area d-center">
                                                <input type="checkbox"/>
                                                <span className="checkmark d-center"></span>
                                            </span>
                                            <span className="text-color">
                                                <span className="star">
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-sharp fa-light fa-star"></i>
                                                    <i className="fa-sharp fa-light fa-star"></i>
                                                </span>
                                                15
                                            </span>
                                        </span>
                                    </label>
                                    <label className="checkbox-single d-flex align-items-center">
                                        <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                            <span className="checkbox-area d-center">
                                                <input type="checkbox"/>
                                                <span className="checkmark d-center"></span>
                                            </span>
                                            <span className="text-color">
                                                <span className="star">
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-sharp fa-light fa-star"></i>
                                                    <i className="fa-sharp fa-light fa-star"></i>
                                                    <i className="fa-sharp fa-light fa-star"></i>
                                                </span>
                                                2
                                            </span>
                                        </span>
                                    </label>
                                    <label className="checkbox-single d-flex align-items-center">
                                        <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                            <span className="checkbox-area d-center">
                                                <input type="checkbox"/>
                                                <span className="checkmark d-center"></span>
                                            </span>
                                            <span className="text-color">
                                                <span className="star">
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-sharp fa-light fa-star"></i>
                                                    <i className="fa-sharp fa-light fa-star"></i>
                                                    <i className="fa-sharp fa-light fa-star"></i>
                                                    <i className="fa-sharp fa-light fa-star"></i>
                                                </span>
                                                1
                                            </span>
                                        </span>
                                    </label>
                                </div>
                            </div> */}
                        </div>
                    </div>
    </>
  )
}

export default Filter