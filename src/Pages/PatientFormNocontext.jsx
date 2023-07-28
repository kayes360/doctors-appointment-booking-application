import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import PatientFormImg from "../assets/img/PatientForm.png";
import { AppointmentContext } from "../appointmentContext/appointmentContext";
import { useContext } from "react";

export default function PatientForm() {
  const {appointmentFormData, setAppointmentFormData } = useContext(AppointmentContext)
  
  const navigate = useNavigate();
  const [patientFormData, setPatientFormData] = useState({
    patientName: "",
    patientPhone: "",
    patientEmail: "",
    patientAge: "",
    patientGender: "",
  });
  const [isPatientFormValid, setIsPatientFormValid] = useState(false);
  const [patientFormDataError, setPatientFormDataError] = useState({});

  const [isPatientFormSubmited, setIsPatientFormSubmited] = useState(false);
  console.log(patientFormDataError);

  useEffect(() => {
  
    if (isPatientFormValid && isPatientFormSubmited) {
      navigate("/departmentform");
    }
  }, [isPatientFormValid, isPatientFormSubmited]);

  const validatePatientForm = () => {
    console.log(patientFormData);

    const newPatientFormErrors = {};
    if (patientFormData.patientName.trim() === "") {
      newPatientFormErrors.patientName = "Please Enter Patient name";
    }
    if (!/^\d+$/.test(patientFormData.patientPhone.trim())) {
      newPatientFormErrors.patientPhone = "Please Enter Patient Valid Number";
    }
    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(patientFormData.patientEmail.trim())
    ) {
      newPatientFormErrors.patientEmail = "Please Enter Patient Valid Email";
    }
    if (patientFormData.patientAge.trim() <= 0) {
      newPatientFormErrors.patientAge = "Please Enter Patient Valid Age";
    }
    if (patientFormData.patientGender.trim() === "") {
      newPatientFormErrors.patientGender = "Please Enter Patient Gender";
    }

    setPatientFormDataError(newPatientFormErrors);
    setIsPatientFormValid(Object.keys(newPatientFormErrors).length === 0);
  };
  const handleNextClick = () => {
    setIsPatientFormSubmited(true);
    validatePatientForm();
   
  };
  return (
    <>
      <div className="col-7">
        <img src={PatientFormImg} className="img-fluid" alt="" />
      </div>
      <div className="col-5">
        <form action="">
          <div className="mb-3">
            <label htmlFor="patientName" className="form-label">
              Patient's Name
            </label>
            <input
              type="text"
              className="form-control"
              id="patientName"
              name="patientName"
              value={patientFormData.patientName}
              onChange={(e) =>
                setPatientFormData({
                  ...patientFormData,
                  patientName: e.target.value,
                })
              }
            />
            {patientFormDataError.patientName && (
              <p className="text-danger">{patientFormDataError.patientName}</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="patientPhone" className="form-label">
              Patient's Phone
            </label>
            <input
              type="tel"
              className="form-control"
              id="patientPhone"
              name="patientPhone"
              value={patientFormData.patientPhone}
              onChange={(e) =>
                setPatientFormData({
                  ...patientFormData,
                  patientPhone: e.target.value,
                })
              }
            />
            {patientFormDataError.patientPhone && (
              <p className="text-danger">{patientFormDataError.patientPhone}</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="patientEmail" className="form-label">
              Patient's Email
            </label>
            <input
              type="email"
              className="form-control"
              id="patientEmail"
              name="patientEmail"
              value={patientFormData.patientEmail}
              onChange={(e) =>
                setPatientFormData({
                  ...patientFormData,
                  patientEmail: e.target.value,
                })
              }
            />
            {patientFormDataError.patientEmail && (
              <p className="text-danger">{patientFormDataError.patientEmail}</p>
            )}
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="patientAge" className="form-label">
                Patient's Age
              </label>
              <input
                type="text"
                className="form-control"
                aria-label="age"
                name="patientAge"
                value={patientFormData.patientAge}
                onChange={(e) =>
                  setPatientFormData({
                    ...patientFormData,
                    patientAge: e.target.value,
                  })
                }
              />
              {patientFormDataError.patientAge && (
                <p className="text-danger">{patientFormDataError.patientAge}</p>
              )}
            </div>
            <div className="col">
              <label htmlFor="patientGender" className="form-label">
                Patient's Gender
              </label>
              <select
                defaultValue={"Default"}
                className="form-select"
                aria-label="Default select example"
                onChange={(e) =>
                  setPatientFormData({
                    ...patientFormData,
                    patientGender: e.target.value,
                  })
                }
              >
                <option value="Default" disabled>
                  Open this select menu
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {patientFormDataError.patientGender && (
                <p className="text-danger">
                  {patientFormDataError.patientGender}
                </p>
              )}
            </div>
          </div>
        </form>
      </div>
      <div className="d-grid d-md-flex justify-content-md-end">
        <button
          type="button"
          className="nav-btn  btn btn-primary"
          onClick={handleNextClick}
        >
          Next
        </button>
      </div>
    </>
  );
}
