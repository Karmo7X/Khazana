import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import Notfound from "../Notfound/Notfound";
import { IoAlertCircle } from "react-icons/io5";
import { UnsubscriptionApi } from "../../Api/Subscription/Subscriptions";

const Usersubscriptions = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.user.status);
  const subscrptionUser = useSelector(
    (state) => state.user?.data?.data?.user?.subscription
  );
  const subscrptionstart = useSelector(
    (state) => state.user?.data?.data?.user?.subscriptionBegan
  );

  const subscrptionend = useSelector(
    (state) => state.user?.data?.data?.user?.subscriptionEnd
  );
  const [subcription, setSubcription] = useState({});
   const [errormessg, setErrormessg] = useState(null);
    const [successmessage, setSuccessmessage] = useState(null);
  useEffect(() => {
    setSubcription(subscrptionUser);
  }, [subscrptionUser]);
  function formatDate(dateString) {
    const parts = dateString.split(":");
    const day = parseInt(parts[0]);
    const month = parseInt(parts[1]);
    const year = parseInt(parts[2]);
  
    const date = new Date(year, month - 1, day); 
  
    const formattedDate = date.toISOString().split('T')[0]; 
    return formattedDate;
  }

  const formatDuration = (days) => {
    if (days >= 365) {
      const years = Math.floor(days / 365); // Convert to years
      return `${years} ${t("global.duration.year")}${
        years > 1 ? t("global.duration.plural") : ""
      }`;
    } else if (days >= 30) {
      const months = Math.floor(days / 30); // Convert to months
      return `${months} ${t("global.duration.month")}${
        months > 1 ? t("global.duration.plural") : ""
      }`;
    } else if (days >= 7) {
      const weeks = Math.floor(days / 7); // Convert to weeks
      return `${weeks} ${t("global.duration.week")}${
        weeks > 1 ? t("global.duration.plural") : ""
      }`;
    } else {
      return `${days} ${t("global.duration.day")}${
        days > 1 ? t("global.duration.plural") : ""
      }`; // Fewer than 7 days
    }
  };


  const handleDeletesubcription=(subID)=>{
     dispatch(UnsubscriptionApi(subID)).then((res)=>{
        if (res.payload?.code === 200) {
          setSuccessmessage(res.payload?.message);
          setErrormessg(null);
          setTimeout(() => {
            setSuccessmessage(null);
          }, 2000);
        } else {
          setSuccessmessage(null);
          setErrormessg(res.payload?.message);
          setTimeout(() => {
            setErrormessg(null);
          }, 2000);
        }
      })
  }
  return (
    <>
      <div style={{ minHeight: "100vh" }}>
        <div className="container my-5">
          {loading === "loading" ? (
            <>
              <div className="d-flex align-items-center justify-content-center vh-100">
                <div className="spinner-border text-secondary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            </>
          ) : (
            <>
              {subcription && Object.keys(subcription).length !== 0 ? (
                <>
                  <h2 className="text-center mb-4">
                    {" "}
                    {t("global.profile.subscription.creative_title")}{" "}
                  </h2>
                  <div className="row mt-5">
                    {/*  Card */}
                    <div
                      className="col-md-12 mb-4"
                      key={subcription?.subscriptionId}
                    >
                      <div
                        className="card shadow-sm "
                        style={{
                          borderTop: "4px solid #FFC900",
                          height: "300px",
                          minHeight: "300px",
                          maxHeight: "300px",
                          border: "2px solid #FFC900",
                        }}
                      >
                        <div
                          className="card-header d-flex  align-items-center justify-content-between text-center"
                          style={{
                            color: "#000",
                            padding: "15px 30px",
                            borderBottom: "1px solid #FFC900",
                          }}
                        >
                          <div>
                            <h5>{subcription?.subscriptionName}</h5>
                          </div>
                          <div>
                            <h6>
                              {subcription?.subscriptionPrice}
                              {t("global.currency.rs")}
                            </h6>
                            <div className="d-flex align-items-center gap-2">
                              <div>
                                <p>{formatDate(subscrptionstart)}</p>
                              </div>
                              <div>
                                <p>{formatDate(subscrptionend)}</p>
                              </div>
                              <div>
                                <p>
                                  {formatDuration(
                                    subcription?.subscriptionDuration
                                  )}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card-body">
                          <div
                            dangerouslySetInnerHTML={{
                              __html:
                                subcription?.subscriptionDescription.slice(
                                  0,
                                  250
                                ),
                            }}
                          />
                        </div>
                        <div className="d-flex align-items-center justify-content-end p-2">
                          <button
                            className="theme-btn bg-danger"
                            data-bs-toggle="modal"
                            data-bs-target="#deletesubModal"
                          >
                            {t(
                              "global.subcription_title.cancel_subscription.title"
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* modal for alert if you sure delete subscription */}
                  <div
                    class="modal fade"
                    id="deletesubModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div
                      class="modal-dialog modal-sm modal-dialog-centered  center"
                      style={{ maxWidth: "50%" }}
                    >
                      <div class="modal-content">
                        <div class="modal-body">
                          <div className="mt-4 mb-4">
                            <div>
                              <span className="text-warning">
                                <IoAlertCircle style={{ fontSize: "100px" }} />
                              </span>
                            </div>
                            <h2 className="text-center fw-bold">
                            {t(
                              "global.subcription_title.cancel_subscription.title"
                            )}
                            </h2>
                            <p>
                            {t(
                              "global.subcription_title.cancel_subscription.description"
                            )}
                            </p>
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

                          <div className="d-flex align-items-center justify-content-center gap-4">
                            <button
                              type="button"
                              class="btn btn-secondary"
                              data-bs-dismiss="modal"
                            >
                              {t(
                              "global.subcription_title.cancel_subscription.cancel_button"
                            )}
                            </button>
                            <button
                              type="button"
                              onClick={() => handleDeletesubcription(subcription?.subscriptionId)}
                              
                              {...(successmessage ? { "data-bs-dismiss": "modal" } : {})}
                              class="btn btn-danger"
                            >
                              {t(
                              "global.subcription_title.cancel_subscription.confirm_button"
                            )}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <Notfound />
                </>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Usersubscriptions;
