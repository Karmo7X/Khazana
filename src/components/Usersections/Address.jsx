import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import { AddAddressApi, AddmainAddressApi, deleteAddressApi, GetUserApi } from "../../Api/User/UserSlice";
import { MdDelete } from "react-icons/md";
import { IoAlertCircle } from "react-icons/io5";
import Notfound from "../Notfound/Notfound";
const Address = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [addresses, setAddresses] = useState([]);
  const [addaddressdata, setAddaddressdata] = useState({
    street: "",
    city: "",
    buildNumber: "",
  });
  const [show, setShow] = useState(false);
  const [errorvalid, setErrorvalid] = useState();
  const [errormessg, setErrormessg] = useState(null);
  const [successmessage, setSuccessmessage] = useState();
  const loading = useSelector((state) => state.user.status);
  const addressUser = useSelector((state) => state.user.addresses);

  useEffect(() => {
    setAddresses(addressUser);
  //  const main =addresses.map((address) => address.main === true)?.main
   
  //  setmainAdress(main)
  }, [addressUser]);

  // handle date from inputs
  const handleChange = (name, value) => {
    setAddaddressdata({ ...addaddressdata, [name]: value });
  };
 
  const handleClose = () =>{setSuccessmessage(null);setShow(false);setErrormessg(null)};
  const handleShow = () => setShow(true);
  // Validate data
  const validate = (value) => {
    const error = {};

    // Street validation
    if (!value.street) {
      error.street = t("global.validation_message.street.required");
    } else if (value.street.length < 3) {
      error.street = t("global.validation_message.street.minLength");
    } else if (value.street.length > 100) {
      error.street = t("global.validation_message.street.maxLength");
    } 
    // else if (!/^[A-Za-z0-9\s,-]+$/.test(value.street)) {
    //   error.street = t("global.validation_message.street.pattern"); // Alphanumeric, spaces, commas, and hyphens allowed
    // }

    // City validation
    if (!value.city) {
      error.city = t("global.validation_message.city.required");
    } else if (value.city.length < 2) {
      error.city = t("global.validation_message.city.minLength");
    } else if (value.city.length > 50) {
      error.city = t("global.validation_message.city.maxLength");
    }
    //  else if (!/^[A-Za-z\s]+$/.test(value.city)) {
    //   error.city = t("global.validation_message.city.pattern"); // Only letters and spaces allowed
    // }

    // Build Number validation
    if (!value.buildNumber) {
      error.buildNumber = t("global.validation_message.buildNumber.required");
    } else if (!/^[0-9]+$/.test(value.buildNumber)) {
      error.buildNumber = t("global.validation_message.buildNumber.pattern"); // Only numbers allowed
    }

    return error;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(addaddressdata);
    if (Object.keys(errors).length === 0) {
         dispatch(AddAddressApi(addaddressdata)).then((res)=>{
          if(res.payload?.code === 200){
            setSuccessmessage(res.payload?.message)
            setAddaddressdata(null)
            handleClose()
             dispatch(GetUserApi());
          }else
          {
            setErrormessg(res.payload?.message)
          }
         })
         setErrorvalid(null)
    } else {
      setErrorvalid(errors); // Set errors for display
    }
  };

// handle date from main addressid 
const handleChangemain = (addressId) => {
  // Update the `main` state for the selected address and reset others
  setAddresses((prevState) => {
    return prevState.map((address) =>
      address.addressId === addressId
        ? { ...address, main: true } // Set 'main' to true for selected address
        : { ...address, main: false } // Set 'main' to false for other addresses
    );
  });

  dispatch(AddmainAddressApi(addressId)).then((res)=>{
    if(res.payload?.code === 200){
      dispatch(GetUserApi());
    }
   })

};
  const handleDelete=(addressID)=>{
     dispatch(deleteAddressApi(addressID)).then((res)=>{
      if(res.payload?.code === 200){
        dispatch(GetUserApi());
      }
     })
  }
  

  return (
    <>
     {loading ==='loading' ?(<>
      <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="spinner-border text-secondary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
     </>):(<>
      <Container>
        <h2 className="mb-4 text-center">
          {t("global.profile.address.title")}
        </h2>

        <div className="d-flex align-items-center justify-content-end mt-4 mb-4">
          <Button
            variant="outline-primary"
            onClick={handleShow}
            className="d-flex align-items-center "
          >
            <i className="bi bi-plus-circle me-2"></i>
            {t("global.profile.address.addNew")}
          </Button>
        </div>

        {addresses.length !== 0 ? (<>
        
         <Row className="gy-3" style={{maxHeight:"650px" ,overflowY:'auto'}}>
          {addresses.map((address, index) => (
            <Col xs={12} key={index}>
              <Card className="p-3 shadow-sm">
                <Card.Body>
                  <div className="d-flex align-items-center justify-content-end">
                     <button type="button"  data-bs-toggle="modal" data-bs-target="#deleteaddressModal"  className="text-danger">
                     <MdDelete className="fs-4" />
                     </button>
                     {/* modal for alert if you sure delete adresss */}
       
        <div class="modal fade" id="deleteaddressModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-sm modal-dialog-centered  center" style={{maxWidth:'50%'}}>
    <div class="modal-content">
     
      <div class="modal-body">
        <div className="mt-4 mb-4">
          <div>
            <span className="text-warning">
            <IoAlertCircle style={{fontSize:"100px"}} />
            </span>
          </div>
          <h2 className="text-center fw-bold">
          {t("global.profile.address.deleteAddress.title")}
          </h2>
          <p>
          {t("global.profile.address.deleteAddress.description")}
          </p>
        </div>
          
        <div className="d-flex align-items-center justify-content-center gap-4">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">{t("global.profile.address.deleteAddress.close")}</button>
      <button type="button" onClick={()=>handleDelete(address?.addressId)} data-bs-dismiss="modal" class="btn btn-danger" >{t("global.profile.address.deleteAddress.confirm")}</button>
        </div>
      
      </div>
    
    </div>
  </div>
</div>
                  </div>
               
                  <Card.Text className="mb-3">
                    <strong>
                      {" "}
                      {t("global.profile.address.primaryAddress")} :
                    </strong>{" "}
                    {t("global.profile.address.street")} {address?.street}-
                    {address?.city}-{t("global.profile.address.buildingNumber")}{" "}
                    {address?.buildNumber}
                  </Card.Text>
                  {/* <div className="d-flex align-items-center">
                  <label className="me-2">تحديد كعنوان أساسي</label>
                  <input type="checkbox" />
                </div> */}
                  <div class="form-check">
                  <input
        className="form-check-input"
        type="radio"
        value={address?.addressId}
       checked={address?.main} // Ensure it reflects the correct state
        name="flexRadioDefault"
        id={`flexRadioDefault${address.addressId}`}
        onClick={()=>handleChangemain(address?.addressId)} // Update state on change
      />
                    <label  class="form-check-label"  htmlFor={`flexRadioDefault${address.addressId}`}>
                      {t("global.profile.address.setDefault")}
                    </label>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        </>):(

          <Notfound/>
        )}
       

        {/* modal for add adress  */}
        <Modal size="sm" show={show} onHide={handleClose} centered>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <div class="row g-4">
              <div class="col-12">
                <label for="inputAddress" class="form-label">
                  {" "}
                  {t("global.profile.address.street")}
                </label>
                <input
                  type="text"
                  
                  className={` form-control  `}
                  id="inputAddress"
                  placeholder="1234 Main St"
                  name="street"
                  onChange={(e) => {
                    handleChange(e.target.name, e.target.value);
                  }}
                />
                 {errorvalid?.street && (
                      <>
                        <div class="text-danger">{errorvalid?.street}</div>
                      </>
                    )}
              </div>

              <div class="col-md-6">
                <label for="inputCity" class="form-label">
                  {t("global.profile.address.city")}
                </label>
                <input
                  type="text"
                  className={` form-control `}
                  id="inputCity"
                   name="city"
                  onChange={(e) => {
                    handleChange(e.target.name, e.target.value);
                  }}
                />
                 {errorvalid?.city && (
                      <>
                        <div class="text-danger">{errorvalid?.city}</div>
                      </>
                    )}
              </div>
              <div class="col-md-6">
                <label for="inputbuildingNumber" class="form-label">
                  {t("global.profile.address.buildingNumber")}
                </label>
                <input
                  type="text"
                  className={` form-control `}
                   name="buildNumber"
                  id="inputbuildingNumber"
                  onChange={(e) => {
                    handleChange(e.target.name, e.target.value);
                  }}
                />
                 {errorvalid?.buildNumber && (
                      <>
                        <div class="text-danger">{errorvalid?.buildNumber}</div>
                      </>
                    )}
              </div>

              {/* <div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div> */}
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
            <div className="d-flex align-items-center justify-content-end">
              <button
                type="button"
                className="loginBtn mt-5 theme-btn rounded-0 mt-3"
                onClick={(e) => handleSubmit(e)}
              >
                {loading === "loading" ? (
                  <>
                    <div class="spinner-border text-light" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </>
                ) : (
                  t("global.profile.address.addNew")
                )}
              </button>
            </div>
          </Modal.Body>
        </Modal>


        
      </Container>
     
     </>)}
     
    </>
  );
};

export default Address;
