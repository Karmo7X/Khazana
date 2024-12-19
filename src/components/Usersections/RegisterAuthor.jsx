import React from 'react'

const RegisterAuthor = () => {
  return (
    <>
    <div className='container mt-5'>
    <div className="mb-5">
        <h3 className="text-end">تسجيل مؤلف جديد</h3>
        <form>
          <div className="mb-3 ">
            <label className="form-label text-end w-100">اسم المؤلف / المحقق</label>
            <input type="text" className="form-control p-3" placeholder="اسم المؤلف / المحقق" />
          </div>
          <div className="mb-3 ">
            <label className="form-label text-end w-100">الجنسيه</label>
            <input type="text" className="form-control p-3" placeholder="الجنسيه" />
          </div>
          <div className="mb-3 ">
            <label className="form-label text-end w-100">الميلاد</label>
            <input type="date" className="form-control p-3" />
          </div>
          <div className="mb-3 ">
            <label className="form-label text-end w-100">اعمال سابقه</label>
            <textarea className="form-control p-3" rows="3" placeholder="اعمال سابقه"></textarea>
          </div>
          <div className="mb-3 ">
            <label className="form-label text-end w-100">ملاحظات</label>
            <textarea className="form-control p-3" rows="3" placeholder="ملاحظات"></textarea>
          </div>
          <button type="submit" className="theme-btn w-100">ارسال الطلب</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default RegisterAuthor