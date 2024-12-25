import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { GetCategoryApi } from "../../Api/Category/CategorySlice";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useDispatch, useSelector } from "react-redux";
import {
  GetUserApi,
  UpdateUserApi,
  UpdateUserimgeApi,
} from "../../Api/User/UserSlice";
import Notfound from "../Notfound/Notfound";
import Loader from "../loader/loader";
import { GetCityApi } from "../../Api/App/App";
const Profile_sec = () => {
  const animatedComponents = makeAnimated();
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const [userdata, setUserdata] = useState({});
  const [category, setCategory] = useState([]);
  const [cities, setCities] = useState([]);
  const [errormessg, setErrormessg] = useState(null);
  const [successmessage, setSuccessmessage] = useState();
  const [errorvalid, setErrorvalid] = useState();
  const [profileImg, setProfileImg] = useState(null);
  const loading = useSelector((state) => state.user.status);
  const loadingupdate = useSelector((state) => state.user.statusupdate);

  // handle data user from inputs
  const handleChange = (name, value) => {
    // If the field is "birthday", format the date
    if (name === "birthday") {
      const formattedDate = new Date(value)
        .toLocaleDateString("en-GB")
        .split("/")
        .join("-");
      setUserdata((prevData) => ({
        ...prevData,
        [name]: formattedDate,
      }));
    } else {
      setUserdata({ ...userdata, [name]: value });
    }
  };

  // Handle the file upload
  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setProfileImg(selectedFile);
      // handleImageUpload(selectedFile);
    }
  };

  const categoryoption = category.map((data) => ({
    value: data?.id,
    label: data?.title,
  }));

  // formate date to  yyyy-mm-dd
  const formatToYYYYMMDD = (dateString) => {
    if (!dateString) return ""; // Handle empty or undefined input
    const [day, month, year] = dateString.split("-"); // Split by "-"
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`; // Reformat to YYYY-MM-DD
  };
  // fetch data

  useEffect(() => {
    // get category
    dispatch(GetCategoryApi()).then((res) => {
      if (res.payload?.code === 200) {
        setCategory(res.payload?.data?.categories);
      }
    });

    // fetch data user profile
    dispatch(GetUserApi()).then((res) => {
      if (res.payload?.code === 200) {
        setUserdata(res.payload?.data?.user);
      }
    });
    // fetch data for cities
      dispatch(GetCityApi()).then((res) => {
          if (res.payload?.code === 200) {
            setCities(res.payload?.data?.cities);
          }
        });
  }, []);

  // validation data function
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

    // // Phone validation
    // if (!value.phone) {
    //   error.phone = t("global.validation_message.phone.required");
    // } else if (!/^\d+$/.test(value.phone)) {
    //   error.phone = t("global.validation_message.phone.pattern"); // Must be numeric
    // } else if (value.phone.length < 10) {
    //   error.phone = t("global.validation_message.phone.minLength"); // Minimum 10 digits
    // } else if (value.phone.length > 15) {
    //   error.phone = t("global.validation_message.phone.maxLength"); // Maximum 15 digits
    // }

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

    // Interested Category validation
    if (!value.interestedCategory) {
      error.interestedCategory = t(
        "global.validation_message.interestedCategory.required"
      );
    }
    // City validation
    // if (!value.city) {
    //   error.city = t("global.validation_message.city.required");
    // }
    return error;
  };

  // submit data for update user data

  const handleUpdate = () => {
    const errorupdate = validate(userdata);
    if (Object.keys(errorupdate).length === 0) {
      dispatch(UpdateUserApi(userdata)).then((res) => {
        if (res.payload?.code === 200) {
          setSuccessmessage(res.payload?.message);
          setErrormessg(null);
          window.location.reload();
        } else {
          setSuccessmessage(null);
          setErrormessg(res.payload?.message);
        }
      });
    } else {
      setErrorvalid(errorupdate);
    }
    
    if(profileImg){

       const formData = new FormData();
    formData.append('profileImg', profileImg);
  
    dispatch(UpdateUserimgeApi(formData)).then((res) => {
      if (res.payload?.code === 200) {
        setSuccessmessage(res.payload?.message);
        setErrormessg(null);
        window.location.reload();
      } else {
        setSuccessmessage(null);
        setErrormessg(res.payload?.message);
      }
    });
    }
   
  };

  return (
    <>
      {loading !== "loading" ? (
        <>
          <div className="container my-5">
            {Object.keys(userdata).length !== 0 ? (
              <>
                <h1 className="text-muted fs-3">
                  {t("global.profile.account_settings")}
                </h1>

                <div className="card border-0 mt-3 mx-auto p-4 shadow profile-card">
                  <h2 className="text-center mb-4">
                    {t("global.profile.my_account")}
                  </h2>

                  <div className="d-flex justify-content-center mb-3 position-relative">
                    {profileImg ? (
                      <>
                        <img
                          src={URL.createObjectURL(profileImg)}
                          alt="Profile"
                          className="rounded-circle profile-image"
                        />
                      </>
                    ) : (
                      <>
                        {" "}
                        <img
                          src={
                            userdata?.profileImg === null
                              ? "https://via.placeholder.com/150"
                              : userdata?.profileImg
                          }
                          alt="Profile"
                          className="rounded-circle profile-image"
                        />
                      </>
                    )}

                    {/* Hover Overlay */}
                    <div className="overlay text-center d-flex justify-content-center align-items-center">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="form-control-file"
                        id="file-upload"
                        style={{ display: "none" }}
                      />
                      <label
                        htmlFor="file-upload"
                        className="upload-btn rounded-circle d-flex align-items-center justify-content-center text-white"
                      >
                        Upload Image
                      </label>
                    </div>
                  </div>

                  <h3 className="text-center">{userdata?.name}</h3>

                  {Object.keys(userdata?.subscription).length !== 0 ? (
                    <>
                      <p className="text-center fs-6">
                        {t("global.profile.profile.on_subscription")}{" "}
                        {userdata?.subscription?.subscriptionName}
                      </p>
                    </>
                  ) : (
                    <>
                      <Link to="/Subscription" className="text-center fs-6">
                        {t("global.profile.profile.upgrade_account")}
                      </Link>
                    </>
                  )}

                  <div className="row mt-4 mb-5">
                    <div className="col-lg-12 col-md-6 col-sm-12">
                      <div className="mb-3">
                        <label className="form-label">
                          {t("global.profile.form.name")}
                        </label>
                        <input
                          type="text"
                          className={` form-control  ${
                            errorvalid?.name ? "is-invalid" : "is-valid"
                          }`}
                          name="name"
                          value={userdata?.name}
                          onChange={(e) => {
                            handleChange(e.target.name, e.target.value);
                          }}
                        />
                        {errorvalid?.name && (
                          <>
                            <div class="invalid-feedback">
                              {errorvalid?.name}
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-6 col-sm-12">
                      <div className="mb-3">
                        <label className="form-label">
                          {t("global.profile.form.phone_number")}
                        </label>
                        <div className="input-group">
                          {/* <span className="input-group-text">
                      <img
                        src="https://via.placeholder.com/24" // Replace with country flag icon URL
                        alt="Country Flag"
                        className="flag-icon"
                      />
                    </span> */}
                          <input
                            type="text"
                            name="phone"
                            className="form-control"
                            value={userdata?.phone}
                            onChange={(e) => {
                              handleChange(e.target.name, e.target.value);
                            }}
                            readOnly
                            disabled
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="mb-3">
                        <label className="form-label">
                          {t("global.profile.form.date_of_birth")}
                        </label>
                        <input
                          type="date"
                          name="birthday"
                          className={` form-control  ${
                            errorvalid?.birthday ? "is-invalid" : "is-valid"
                          }`}
                          value={
                            userdata?.birthday
                              ? formatToYYYYMMDD(userdata.birthday)
                              : ""
                          }
                          onChange={(e) => {
                            handleChange(e.target.name, e.target.value);
                          }}
                        />
                        {errorvalid?.birthday && (
                          <>
                            <div class="invalid-feedback">
                              {errorvalid?.name}
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="mb-3">
                        <label className="form-label">
                          {t("global.profile.form.city")}
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          // value={userdata?.city}
                          name="city"
                          value={"Jada"}
                          readOnly
                          onChange={(e) => {
                            handleChange(e.target.name, e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="mb-3">
                        <label className="form-label">
                          {t("global.profile.form.categories")}
                        </label>

                        <Select
                          closeMenuOnSelect={false}
                          components={animatedComponents}
                          isMulti
                          value={
                            Array.isArray(userdata?.interestedCategory)
                              ? categoryoption.filter(option =>
                                  userdata.interestedCategory.some(data =>
                                    typeof data === "object" && data?.id // Check if `data` is an object with an `id` property
                                      ? data.id === option.value // Match the `id` with `option.value`
                                      : data === option.value // If not an object, check directly for string match
                                  )
                                )
                              : []
                          }// Filter selected option based on userdata
                          name="interestedCategory"
                          options={categoryoption}
                          onChange={(selectedOptions) => {
                            const values = selectedOptions.map(
                              (option) => option.value
                            ); // Get array of selected option values
                            handleChange("interestedCategory", values);
                          }}
                          className={` inputField p-0  ${
                            errorvalid?.interestedCategory
                              ? "is-invalid"
                              : "is-valid"
                          }`}
                          placeholder="......"
                          styles={{
                            control: (styles) => ({
                              ...styles,
                              outline: "none",
                              boxShadow: "none",
                            }),
                          }}
                        />
                        {errorvalid?.interestedCategory && (
                          <>
                            <div class="invalid-feedback">
                              {errorvalid?.interestedCategory}
                            </div>
                          </>
                        )}
                      </div>
                    </div>
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
                    onClick={() => handleUpdate()}
                    className="btn theme-btn rounded-0 w-100 mt-4"
                  >
                    {loadingupdate === "loading" ? (
                      <>
                        <div class="spinner-border text-light" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </div>
                      </>
                    ) : (
                      t("global.profile.profile.edit_profile")
                    )}
                  </button>
                </div>
              </>
            ) : (
              <Notfound />
            )}
          </div>
        </>
      ) : (
        <>
          <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="spinner-border text-secondary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Profile_sec;
