import React, { useEffect, useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { useTranslation } from "react-i18next";
import bookundefine from '../../../public/assets/img/bookundefine.jpg'

const BooksList = ({data}) => {
  const [filter, setFilter] = useState('الكتب المقروءة');
  const { t, i18n } = useTranslation();
 
  const [books,setBooks]=useState([])
  const filteredBooks = books.filter((book) => book.type === filter);
    useEffect(()=>{
      setBooks(data)
    },[data])
  return (

    <>
    {filteredBooks.length !== 0 && (<>
    
    <div className="container my-5 text-right">
      <div className='d-flex align-items-center justify-content-between mb-5'>
      <div className=''>
      <h2 className="text-center">{t("global.book_details.books")} </h2>
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
           {t("global.book_details.filter.read_books")}
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link filter_link ${filter === 'الكتب المسموعة' ? 'activefilter' : ''}`}
            onClick={() => setFilter('الكتب المسموعة')}
          >
            {t("global.book_details.filter.audiobooks")}
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
                    <h5 className="card-title text-truncate">{book?.title}</h5>
                   
                    <ul className="author-post">
                      <li className="author-list">
                        <span className="thumb"><img src={book?.author?.profileImg || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} alt={`${book.author} image`} /></span>
                        <span className="content mt-10 fw-bold">{book?.author?.name}</span>
                      </li>
                    </ul>
                    {/* <div className="d-flex align-items-center text-muted">
                      <FaEye className="me-2 " style={{color:'#FFC900'}} />
                      {book.views}
                    </div> */}
                  </div>
                </div>
                <div className='col-lg-2 col-md-6 col-sm-12 '>
                  <div className='d-flex  flex-column'>
                     <p className="card-text text-muted mb-1">
                     {t("global.book_details.category")}
                      
                    </p>
                    <span className="card-text text-muted fw-bold mb-1">
                    {book?.category}
                    </span> 
                  </div>
              
                </div>
                <div className="col-lg-2 col-md-6 col-sm-12">
                   <img src={book?.coverImage  ? book?.coverImage:bookundefine} alt={`${book?.title} image`} />
                </div>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>)}
    
    </>
  );
};

export default BooksList;