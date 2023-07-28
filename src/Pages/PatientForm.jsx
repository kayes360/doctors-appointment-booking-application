import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PatientFormImg from "../assets/img/PatientForm.png";
import { AppointmentContext } from "../appointmentContext/appointmentContext";
import { useContext } from "react";

export default function PatientForm() {
  const { appointmentFormData, setAppointmentFormData } = useContext(AppointmentContext); 
  const [isPatientFormValid, setIsPatientFormValid] = useState(false);
  const [patientFormDataError, setPatientFormDataError] = useState({}); 
  const [isPatientFormSubmited, setIsPatientFormSubmited] = useState(false); 
  const navigate = useNavigate(); 

 
  // validating the form on next click 
  const validatePatientForm = () => { 
    const newPatientFormErrors = {}; 

    //Patient Name Validation
    if (appointmentFormData.patientName.trim() === "") {
      newPatientFormErrors.patientName = "Please Enter Patient name";
    }

    //Patient Phone Validation
    if (
      !/^\d+$/.test(appointmentFormData.patientPhone.trim()) ||
      appointmentFormData.patientPhone.trim().length < 11
    ) {
      newPatientFormErrors.patientPhone = "Please Enter Patient Valid 11 Digit Phone Number";
    }
    
    //Patient Email Validation
    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        appointmentFormData.patientEmail.trim()
      )
    ) {
      newPatientFormErrors.patientEmail = "Please Enter Patient Valid Email";
    } 

    //Patient Age Validation
    if (
      appointmentFormData.patientAge.trim() === "" ||
      isNaN(appointmentFormData.patientAge) ||
      appointmentFormData.patientAge <= 0 ||
      appointmentFormData.patientAge > 120
    ) {
      newPatientFormErrors.patientAge = "Please Enter a Valid Age between";
    } 
    
    //Patient Gender Validation
    if (appointmentFormData.patientGender.trim() === "") {
      newPatientFormErrors.patientGender = "Please Enter Patient Gender";
    }

    setPatientFormDataError(newPatientFormErrors);
    setIsPatientFormValid(Object.keys(newPatientFormErrors).length === 0);
  };

  // handling the next button
  const handleNextClick = () => {
    setIsPatientFormSubmited(true);
    validatePatientForm();
  };
  
   //on validation redirecting to next page
   useEffect(() => {
    if (isPatientFormValid && isPatientFormSubmited) {
      navigate("/departmentform");
    }
  }, [isPatientFormValid, isPatientFormSubmited]);

  return (
    <>
      <div className="col-lg-7 col-md-7 col-sm-7 col-12">
        <img src={PatientFormImg} className="img-fluid" alt="" />
      </div>
      <div className="col-lg-5 col-md-5 col-sm-5 col-12">
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
              value={appointmentFormData.patientName}
              onChange={(e) =>
                setAppointmentFormData({
                  ...appointmentFormData,
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
              value={appointmentFormData.patientPhone}
              onChange={(e) =>
                setAppointmentFormData({
                  ...appointmentFormData,
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
              value={appointmentFormData.patientEmail}
              onChange={(e) =>
                setAppointmentFormData({
                  ...appointmentFormData,
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
                className="form-control custom-input-number"
                aria-label="age"
                name="patientAge"
                value={appointmentFormData.patientAge}
                onChange={(e) =>
                  setAppointmentFormData({
                    ...appointmentFormData,
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
                defaultValue={appointmentFormData.patientGender || "Default"}
                className="form-select"
                aria-label="Default select example"
                onChange={(e) =>
                  setAppointmentFormData({
                    ...appointmentFormData,
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
      <div className="d-flex justify-content-end my-5">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleNextClick}
        >
          Next
        </button>
      </div>
    </>
  );
}
