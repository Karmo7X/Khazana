import React from 'react'

const RegisterBook = () => {
  return (
    <>
     <div className='container mt-5'>
     <div className='mt-4'>
        <h3 className="text-end">طلب كتاب</h3>
        <form>
          <div className="mb-3">
            <label className="form-label text-end w-100">عنوان الكتاب</label>
            <input type="text" className="form-control p-3" placeholder="عنوان الكتاب" />
          </div>
          <div className="mb-3">
            <label className="form-label text-end w-100">اسم المؤلف / المحقق</label>
            <input type="text" className="form-control p-3" placeholder="اسم المؤلف / المحقق" />
          </div>
          <div className="mb-3">
            <label className="form-label text-end w-100">دار النشر</label>
            <input type="text" className="form-control p-3" placeholder="دار النشر" />
          </div>
          <div className="mb-3">
            <label className="form-label text-end w-100">دار الكتب</label>
            <input type="text" className="form-control p-3" placeholder="دار الكتب" />
          </div>
          <div className="mb-3">
            <label className="form-label text-end w-100">تاريخ النشر</label>
            <input type="date" className="form-control p-3" />
          </div>
          <div className="mb-3">
            <label className="form-label text-end w-100">تحميل صوره</label>
            <input type="file" className="form-control p-3" />
          </div>
          <button type="submit" className="theme-btn w-100">ارسال الطلب</button>
        </form>
      </div>
    
    </div>
    </>
  )
}

export default RegisterBook