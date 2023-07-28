import SelectionSummaryImg from "../assets/img/SelectionSummary.png";
import React, { useContext } from "react";
import { AppointmentContext } from "../appointmentContext/appointmentContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SelectionSummary() {
  const { appointmentFormData ,setAppointmentFormData} = useContext(AppointmentContext);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const navigate = useNavigate();
  // handling the previous button
  const handlePreviousClick = () => {
    navigate("/");
  }; 
  // handling the next button
  const handleSubmitClick = () => {
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false); 
      navigate("/");
      const emptyFormData = Object.fromEntries(
        Object.entries(appointmentFormData).map(([key, _]) => [key, ""])
      );
      setAppointmentFormData(emptyFormData);

    }, 2000);
  };
  const handleCancel = () => {
    setIsSubmitted(false);
  };

  return (
    <>
      <div
        className={`alert alert-primary my-4  fw-bold d-flex justify-content-center ${
          isSubmitted ? "d-flex fade-in" : "d-none "
        }`}
        role="alert"
      >
        <p className="mb-0">
          Your information has been recorded and your appointment has been
          confirmed
        </p>
      </div>
      <div className="col-lg-7 col-md-7 col-sm-7 col-12">
        <img src={SelectionSummaryImg} className="img-fluid" alt="" />
      </div>
      <div className="col-lg-5 col-md-5 col-sm-5 col-12">
        {appointmentFormData ? (
          <div className="shadow p-5 rounded">
            <p>
              <strong>Patient's Name</strong>{" "}
              <span>{appointmentFormData.patientName}</span>
            </p>
            <p>
              <strong>Patient's Email</strong>{" "}
              <span>{appointmentFormData.patientPhone}</span>
            </p>
            <p>
              <strong>Patient's Phone</strong>{" "}
              <span>{appointmentFormData.patientEmail}</span>
            </p>
            <p>
              <strong>Patient's Age</strong>{" "}
              <span>{appointmentFormData.patientAge}</span>
            </p>
            <p>
              <strong>Patient's Gender</strong>{" "}
              <span>{appointmentFormData.patientGender}</span>
            </p>
            <p>
              <strong>Doctor's Department</strong>{" "}
              <span>{appointmentFormData.departmentName}</span>
            </p>
            <p>
              <strong>Doctor's Name</strong>{" "}
              <span>{appointmentFormData.doctorName}</span>
            </p>
            <p>
              <strong>Appointment Date</strong>{" "}
              <span>{appointmentFormData.appointmentDate}</span>
            </p>
            <p>
              <strong>Appointment Time</strong>{" "}
              <span>{appointmentFormData.appointmentTime}</span>
            </p>
          </div>
        ) : (
          <p>Appointment Time</p>
        )}
      </div>
      <div className="d-flex justify-content-between my-5">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handlePreviousClick}
        >
          Fillup Again
        </button>
        <button className="btn btn-primary" onClick={handleSubmitClick}>
          Submit
        </button>
      </div>
    </>
  );
}
