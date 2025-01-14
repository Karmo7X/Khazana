import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { AddAuthorApi } from "../../Api/Authors/AuthorsSlice";
const RegisterAuthor = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authors.status);
  const [addauthordata, setAddauthordata] = useState({
    name: "",
    phone: "",
    birthday: "",
    gender: "",
    profileImg: null,
  });
  const [errorvalid, setErrorvalid] = useState();
  const [errormessg, setErrormessg] = useState(null);
  const [successmessage, setSuccessmessage] = useState();

  // handle date from inputs
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "profileImg") {
      // Handle file input
      setAddauthordata({ ...addauthordata, [name]: files[0] });
    } else if (name === "birthday") {
      const formattedDate = new Date(value).toISOString().split("T")[0];

      setAddauthordata({ ...addauthordata, [name]: formattedDate });
    } else {
      // Handle other inputs
      setAddauthordata({ ...addauthordata, [name]: value });
    }
  };

  const validate = (value) => {
    const error = {};
    // Name validation
    if (!value.name) {
      error.name = t("global.validation_message.name.required");
    } else if (value.name.length < 3) {
      error.name = t("global.validation_message.name.minLength");
    } else if (value.name.length > 50) {
      error.phone = t("global.validation_message.name.maxLength"); // Maximum 15 digits
    }

    // Phone validation
    if (!value.phone) {
      error.phone = t("global.validation_message.phone.required");
    } else if (!/^\d+$/.test(value.phone)) {
      error.phone = t("global.validation_message.phone.pattern"); // Must be numeric
    } else if (value.phone.length < 10) {
      error.phone = t("global.validation_message.phone.minLength"); // Minimum 10 digits
    } else if (value.phone.length > 15) {
      error.phone = t("global.validation_message.phone.maxLength"); // Maximum 15 digits
    }

    // Birthday validation
    if (!value.birthday) {
      error.birthday = t("global.validation_message.birthday.required");
    } else {
      const today = new Date();
      const birthdayDate = new Date(value.birthday);

      // Check if the date is in the future
      if (birthdayDate >= today) {
        error.birthday = t("global.validation_message.birthday.max");
      }

      // Check minimum age (12 years)
      const minAgeDate = new Date();
      minAgeDate.setFullYear(today.getFullYear() - 12); // Subtract 12 years
      if (birthdayDate > minAgeDate) {
        error.birthday = t("global.validation_message.birthday.minAge");
      }
    }

    // gender validation
    if (!value.gender) {
      error.gender = t("global.validation_message.genderRequired.required");
    }
    // Image: Must have a valid image file extension
    if (!value.profileImg) {
      error.profileImg = t(
        "global.validation_message.register_book.image_required"
      );
    } else if (
      value.profileImg &&
      !/\.(jpg|jpeg|png|gif)$/i.test(value.profileImg.name.toLowerCase())
    ) {
      error.profileImg = t(
        "global.validation_message.register_book.image_invalid"
      );
    }

    return error;
  };
  const handleSubmit = (event) => {
   
    event.preventDefault();
    const errors = validate(addauthordata);
    if (Object.keys(errors).length === 0) {
      const formData = new FormData();
      Object.entries(addauthordata).forEach(([key, value]) => {
        formData.append(key, value);
      });
      dispatch(AddAuthorApi(formData)).then((res) => {
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
    <h2 className="text-center mb-4">{t("global.profile.register_author.form_title")}</h2>
    <form>
      <div className="mb-3">
        <label className="form-label">
          {t("global.profile.register_author.fields.author_name")}
        </label>
        <input
          type="text"
          name="name"
          className="form-control p-3"
          placeholder={t("global.profile.register_author.fields.author_name")}
          onChange={(e) => handleChange(e)}
        />
        {errorvalid?.name && <div className="text-danger">{errorvalid?.name}</div>}
      </div>
      <div className="mb-3">
        <label className="form-label">
          {t("global.profile.form.phone_number")}
        </label>
        <input
          type="text"
          name="phone"
          className="form-control p-3"
          placeholder={t("global.profile.form.phone_number")}
          onChange={(e) => handleChange(e)}
        />
        {errorvalid?.phone && <div className="text-danger">{errorvalid?.phone}</div>}
      </div>
      <div className="mb-3">
        <label className="form-label">
          {t("global.profile.register_author.fields.gender")}
        </label>
        <select
          name="gender"
          className="form-control p-3"
          aria-label="Default select example"
          onChange={(e) => handleChange(e)}
        >
          <option selected>
            {t("global.profile.register_author.fields.gender")}
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        {errorvalid?.gender && <div className="text-danger">{errorvalid?.gender}</div>}
      </div>
      <div className="mb-3">
        <label className="form-label">
          {t("global.profile.register_author.fields.birth_date")}
        </label>
        <input
          name="birthday"
          type="date"
          className="form-control p-3"
          onChange={(e) => handleChange(e)}
        />
        {errorvalid?.birthday && <div className="text-danger">{errorvalid?.birthday}</div>}
      </div>
      <div className="mb-3">
        <label className="form-label">
          {t("global.profile.register_book.fields.upload_image")}
        </label>
        <input
          type="file"
          name="profileImg"
          className="form-control p-3"
          onChange={(e) => handleChange(e)}
        />
        {errorvalid?.profileImg && <div className="text-danger">{errorvalid?.profileImg}</div>}
      </div>
      {successmessage && <div className="alert alert-success">{successmessage}</div>}
      {errormessg && <div className="alert alert-danger">{errormessg}</div>}
      <button
        onClick={(e) => handleSubmit(e)}
        type="button"
        className="theme-btn w-100"
      >
        {loading === "loading" ? (
          <div className="spinner-border text-light" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          t("global.profile.register_author.submit_button")
        )}
      </button>
    </form>
  </div>
</div>

    </>
  );
};

export default RegisterAuthor;
