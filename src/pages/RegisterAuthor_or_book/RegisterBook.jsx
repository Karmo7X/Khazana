import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { AddProductApi } from "../../Api/Product/Product";

const RegisterBook = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.product.status);
  const [addbookdata, setAddbookdata] = useState({
    title: "",
    author: "",
    publisher: "",
    DateOfPublication: "",
    image: null,
  });
  console.log(addbookdata)
  const [errorvalid, setErrorvalid] = useState();
  const [errormessg, setErrormessg] = useState(null);
  const [successmessage, setSuccessmessage] = useState();

  // handle date from inputs
  const handleChange = (e) => {
    const { name, value ,files } = e.target;
    if (name === "image") {
      // Handle file input
      setAddbookdata({ ...addbookdata, [name]: files[0] });
    } 
    // else if (name === "DateOfPublication") {
    //   const formattedDate = new Date(value).toISOString().split('T')[0]
       
    //   setAddbookdata({ ...addbookdata, [name]: formattedDate });
    // } 
    else {
      // Handle other inputs
      setAddbookdata({ ...addbookdata, [name]: value });
    }
  };

  const validate = (data) => {
    const errors = {};

    // Title: At least 3 characters long
    if (!data.title.trim() || data.title.length < 3) {
      errors.title = t(
        "global.validation_message.register_book.title_required"
      );
    }

    // Author: Only alphabetic characters and spaces allowed
    if (!data.title.trim() || data.title.length < 3) {
      errors.author = t(
        "global.validation_message.register_book.author_invalid"
      );
    }

    // Publisher: Only alphabetic characters and spaces allowed
    if (!data.publisher.trim() || data.publisher.length < 5) {
      errors.publisher = t(
        "global.validation_message.register_book.publisher_invalid"
      );
    }

    // DateOfPublication: Matches YYYY-MM-DD format
    // if (!/^\d{4}-\d{2}-\d{2}$/.test(data.DateOfPublication)) {
    //   errors.DateOfPublication = t(
    //     "global.validation_message.register_book.date_invalid"
    //   );
    // }

    if (!data.DateOfPublication) {
      errors.DateOfPublication = t(
        "global.validation_message.register_book.date_invalid"
      );
    }
    // Image: Must have a valid image file extension
    if (
      data.image &&
      !/\.(jpg|jpeg|png|gif)$/i.test(data.image.name.toLowerCase())
    ) {
      errors.image = t("global.validation_message.register_book.image_invalid");
    }

    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    const errors = validate(addbookdata);
   
    if (Object.keys(errors).length === 0) {
      const formData = new FormData();
    Object.entries(addbookdata).forEach(([key, value]) => {
      formData.append(key, value);
    });
      dispatch(AddProductApi(formData)).then((res) => {
        if (res.payload?.code === 201) {
          setSuccessmessage(res.payload?.message);
          setErrormessg(null);
        } else {
          setSuccessmessage(null);
          setErrormessg(res.payload?.message);
        }
      });
      setErrorvalid(null);
    } else {
      setErrorvalid(errors);
    }
  };
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center vh-100">
  <div className=" p-4 shadow w-100" style={{ maxWidth: '700px' }}>
  <h2 className="text-center">
            {" "}
            {t("global.profile.register_book.form_title")}
          </h2>
          <form>
            <div className="mb-3 mt-4 ">
              <label className="form-label text-end w-100">
                {" "}
                {t("global.profile.register_book.fields.book_title")}
              </label>
              <input
                type="text"
                name="title"
                className="form-control p-3"
                placeholder={t(
                  "global.profile.register_book.fields.book_title"
                )}
                onChange={(e) => handleChange(e)}
              />
              {errorvalid?.title && (
                <>
                  <div class="text-danger">{errorvalid?.title}</div>
                </>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label text-end w-100">
                {" "}
                {t("global.profile.register_book.fields.author_name")}{" "}
              </label>
              <input
                type="text"
                name="author"
                className="form-control p-3"
                placeholder={t(
                  "global.profile.register_book.fields.author_name"
                )}
                onChange={(e) => handleChange(e)}
              />
              {errorvalid?.author && (
                <>
                  <div class="text-danger">{errorvalid?.author}</div>
                </>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label text-end w-100">
                {" "}
                {t("global.profile.register_book.fields.publisher")}{" "}
              </label>
              <input
                type="text"
                name="publisher"
                className="form-control p-3"
                placeholder={t("global.profile.register_book.fields.publisher")}
                onChange={(e) => handleChange(e)}
              />
              {errorvalid?.publisher && (
                <>
                  <div class="text-danger">{errorvalid?.publisher}</div>
                </>
              )}
            </div>
            {/* <div className="mb-3">
            <label className="form-label text-end w-100"> {t("global.profile.register_book.fields.library")}</label>
            <input type="text" name="publisher" className="form-control p-3" placeholder={t("global.profile.register_book.fields.library")} />
          </div> */}

            <div className="mb-3">
              <label className="form-label text-end w-100">
                {t("global.profile.register_book.fields.publication_date")}{" "}
              </label>
              <input
  type="number"
  name="DateOfPublication"
  className="form-control p-3"
  min="1900"  // Minimum year
  max={new Date().getFullYear()}  // Maximum year (current year)
  onChange={(e) => handleChange(e)}
  placeholder="Enter year only"
/>
              {errorvalid?.DateOfPublication && (
                <>
                  <div class="text-danger">{errorvalid?.DateOfPublication}</div>
                </>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label text-end w-100">
                {t("global.profile.register_book.fields.upload_image")}{" "}
              </label>
              <input
                type="file"
                name="image"
                className="form-control p-3"
                onChange={(e) => handleChange(e)}
              />
              {errorvalid?.image && (
                <>
                  <div class="text-danger">{errorvalid?.image}</div>
                </>
              )}
            </div>

            {successmessage && (
              <>
                <div class="alert alert-success" role="alert">
                  {successmessage}
                </div>
              </>
            )}

            {errormessg && (
              <>
                <div class="alert alert-danger" role="alert">
                  {errormessg}
                </div>
              </>
            )}
            <button
              onClick={(e) => handleSubmit(e)}
              type="button"
              className="theme-btn w-100"
            >
              {loading === "loading" ? (
                <>
                  <div class="spinner-border text-light" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </>
              ) : (
                t("global.profile.register_book.submit_button")
              )}{" "}
            </button>
          </form>
  </div>
</div>

      
    </>
  );
};

export default RegisterBook;
