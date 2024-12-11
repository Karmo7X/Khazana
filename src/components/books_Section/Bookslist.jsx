import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { useTranslation } from "react-i18next";


const books = [
  {
    id: 1,
    title: 'قواعد بناء الشخصية القوية للطفل المسلم',
    category: 'تربية الأولاد',
    author: 'يزن الغنام',
    views: 93,
    image: 'https://fra1.digitaloceanspaces.com/media.midad.com/resources/ar/books/42323/books_20241204_050810_gS8bXluY3o.jpg?response-content-disposition=attachment&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=BKPUJK7ZZK5A2DAO7JVR%2F20241210%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241210T150124Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604800&X-Amz-Signature=ded121caca2cdb09ccab4b2ed4a3860fbc9f57b066f686a4744b59b60307c4fc',
    type: 'الكتب المقروءة',
    author_img:'/assets/img/testimonial/client-1.png'
  },
  {
    id: 2,
    title: 'العمرة والزيارة: فتاوى وأحكام',
    category: 'الحج والعمرة',
    author: 'أيمن إسماعيل',
    views: 80,
    image: 'https://fra1.digitaloceanspaces.com/media.midad.com/resources/ar/books/44664/books_20241204_050916_ydkLiT50ws.jpg?response-content-disposition=attachment&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=BKPUJK7ZZK5A2DAO7JVR%2F20241210%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241210T150124Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604800&X-Amz-Signature=25ef9e7ea145cfef8ab8ec2957da1602c4d810cecae61f3bbb1cee618fd67287',
    type: 'الكتب المقروءة',
    author_img:'/assets/img/testimonial/client-1.png'
  },
  {
    id: 3,
    title: 'ثمرات المطالعة',
    category: 'أدب وبلاغة',
    author: 'ضيف الله بن محمد الشمراني',
    views: 462,
    image: 'https://fra1.digitaloceanspaces.com/media.midad.com/resources/ar/books/48730/books_20241019_114010_OLyH7wdG4X.jpg?response-content-disposition=attachment&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=BKPUJK7ZZK5A2DAO7JVR%2F20241210%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241210T150124Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604800&X-Amz-Signature=b4340fa0b25acf2d6ed3c95012e26e1d9f5f0617b61f7c592a2e9eaf04156e94',
    type: 'الكتب المسموعة',
    author_img:'/assets/img/testimonial/client-1.png'
  },
  {
    id: 4,
    title: 'هكذا عرفته: شيخنا محمد العليب',
    category: 'تراجم وشخصيات',
    author: 'محمد الشبياني',
    views: 150,
    image: 'https://fra1.digitaloceanspaces.com/media.midad.com/resources/ar/books/47966/books_20241003_090238_ajIyNfVHLS.jpg?response-content-disposition=attachment&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=BKPUJK7ZZK5A2DAO7JVR%2F20241210%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241210T150124Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604800&X-Amz-Signature=f886f2bae2ccdc053d5fca498bc5ac348b8c172968a0e171f160f71688bdcfb6',
    type: 'الكتب المسموعة',
    author_img:'/assets/img/testimonial/client-1.png'
  },
];

const BooksList = () => {
  const [filter, setFilter] = useState('الكتب المقروءة');
  const { t, i18n } = useTranslation();
  const filteredBooks = books.filter((book) => book.type === filter);

  return (
    <div className="container my-5 text-right">
      <div className='d-flex align-items-center justify-content-between mb-5'>
      <div className=''>
      <h2 className="text-center">الكتب </h2>
        </div> 
        <a href="Shop" class="theme-btn transparent-btn wow fadeInUp" data-wow-delay=".5s">
                {t("global.home.exploreMore")} <i class="fa-solid fa-arrow-right-long"></i>
                </a>
      </div>
        
      {/* Filter Tabs */}
      
  <ul className="nav nav-tabs justify-content-end mb-4">
        <li className="nav-item">
          <button
            className={`nav-link filter_link ${filter === 'الكتب المقروءة' ? 'activefilter' : ''}`}
            onClick={() => setFilter('الكتب المقروءة')}
          >
            الكتب المقروءة
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link filter_link ${filter === 'الكتب المسموعة' ? 'activefilter' : ''}`}
            onClick={() => setFilter('الكتب المسموعة')}
          >
            الكتب المسموعة
          </button>
        </li>
      </ul>

      
    
 
     
      
      {/* Book Cards */}
      <div className="row w-100">
        {filteredBooks.map((book) => (
          <div key={book.id} className="col-12 mb-4">
            <div className="card p-3 shadow-sm h-100">
              <div className="row g-0">
                <div className="col-lg-8 col-md-6 col-sm-12">
                  <div className="card-body">
                    <h5 className="card-title text-truncate">{book.title}</h5>
                   
                    <ul className="author-post">
                      <li className="author-list">
                        <span className="thumb"><img src={book.author_img} alt={`${book.author} image`} /></span>
                        <span className="content mt-10 fw-bold">{book.author}</span>
                      </li>
                    </ul>
                    <div className="d-flex align-items-center text-muted">
                      <FaEye className="me-2 " style={{color:'#FFC900'}} />
                      {book.views}
                    </div>
                  </div>
                </div>
                <div className='col-lg-2 col-md-6 col-sm-12 '>
                  <div className='d-flex  flex-column'>
                     <p className="card-text text-muted mb-1">
                      التصنيف:
                      
                    </p>
                    <span className="card-text text-muted fw-bold mb-1">
                    {book.category}
                    </span> 
                  </div>
              
                </div>
                <div className="col-lg-2 col-md-6 col-sm-12">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="img-fluid rounded-start"
                    style={{ height: '100%' }}
                  />
                </div>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksList;