import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { RegisterApi } from "../../Api/Auth/AuthSlice";
import OTP from "./OTP";
import {
  Modal,
  Button,
  Form,
  Alert,
  InputGroup,
  Row,
  Col,
} from "react-bootstrap";

const Register = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    password: "",
    passwordConfirm: "",
    birthday: "",
    interestedCategory: "",
    city: "",
    address: "16.Elbostan Street, Shoubra El-Khema, Qalyubia",
  });
  const [error, setError] = useState(null);

  const handleChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    dispatch(RegisterApi(formData)).then((res) => {
      if (res.payload?.code === 201) {
        setShowModal(true);
      } else {
        setShowModal(false);
        setError(res.payload);
      }
    });
  };

  return (
    <>
      <Modal show onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{t("global.register.createAccount")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>{t("global.register.userName")}</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder={t("global.register.userName")}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>{t("global.register.dateOfBirth")}</Form.Label>
              <Form.Control
                type="date"
                name="birthday"
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>{t("global.register.categories")}</Form.Label>
              <Form.Select
                name="interestedCategory"
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              >
                <option value="">......</option>
                <option value="Category">Category</option>
                <option value="Web Design">Web Design</option>
                <option value="Web Development">Web Development</option>
                <option value="Graphic Design">Graphic Design</option>
                <option value="Software Eng">Software Eng</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>{t("global.register.city")}</Form.Label>
              <Form.Select
                name="city"
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              >
                <option value="">......</option>
                <option value="Gada">Gada</option>
                <option value="Riyadh">Riyadh</option>
                <option value="Jeddah">Jeddah</option>
                <option value="Dammam">Dammam</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>{t("global.register.password")}</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder={t("global.register.password")}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>{t("global.register.confirmPassword")}</Form.Label>
              <Form.Control
                type="password"
                name="passwordConfirm"
                placeholder={t("global.register.confirmPassword")}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              />
            </Form.Group>

            <Form.Check
              type="checkbox"
              label={t("global.register.rememberMe")}
              className="mb-3"
            />

            {error?.message && (
              <Alert variant="danger">
                {error.message}
              </Alert>
            )}

            <Button variant="primary" onClick={handleSubmit} className="w-100">
              {t("global.register.createAccountBtn")}
            </Button>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            {t("global.register.loginBtn")}
          </Button>
        </Modal.Footer>
      </Modal>

      {showModal && <OTP />}
    </>
  );
};

export default Register;
