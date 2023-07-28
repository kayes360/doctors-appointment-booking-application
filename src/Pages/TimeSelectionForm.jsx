import React, { useEffect, useRef, useState } from "react";
import {  useNavigate } from "react-router-dom";
import TimeSelectionImg from "../assets/img/TimeSelection.png";
import {
  currentDate,
  formatDateToDDMMYYYY,
  convertToTwelveHourFormat,
  convertToTwentyFourHourFormat,
  formatDateToYYYYMMdd
} from "../helpers";

import { AppointmentContext } from "../appointmentContext/appointmentContext";
import { useContext } from "react";

export default function TimeSelectionForm() {
  const { appointmentFormData, setAppointmentFormData } =  useContext(AppointmentContext);
  const navigate = useNavigate();
  const dateInput = useRef(null);
  const timeInput = useRef(null); 

  const [appointmentScheduleFormError, setAppointmentScheduleFormError] =
    useState({});
  const [isDateSelected, setIsDateSelected] = useState(false);
  const [isAppointmentScheduleFormValid, setAppointmentScheduleFormValid] = useState(false);
  const [ isAppointmentScheduleFormSubmitted,   setAppointmentScheduleFormSubmitted] = useState(false);

  //showing the picker on clicking the input
  const handleFocus = (inputType) => {
    if (inputType === "date") {
      dateInput.current.showPicker(); 
    }
    if (inputType === "time") {
      timeInput.current.showPicker(); 
    }
  };

  // validating the form on next click
  const validateAppointmentScheduleFormData = () => {
    const newAppointmentScheduleFormError = {};

    //Appointment Date Validation
    if (appointmentFormData.appointmentDate === "") {
      newAppointmentScheduleFormError.appointmentDate =
        "Please Select Your Appointment Date";
    }

    //Appointment Time Validation
    if (appointmentFormData.appointmentTime === "") {
      newAppointmentScheduleFormError.appointmentTime =
        "Please Select Your Appointment Time";
    }
    setAppointmentScheduleFormError(newAppointmentScheduleFormError);
    setAppointmentScheduleFormValid(
      Object.keys(newAppointmentScheduleFormError).length === 0
    );
  };

  //formatting date to dd/mm/yyyy string and store it to state
  const handleDate = (selectedDate) => { 
    setIsDateSelected(true);
    const formattedDate = formatDateToDDMMYYYY(selectedDate); 
    setAppointmentFormData({
      ...appointmentFormData,
      appointmentDate: formattedDate,
    });
  };
  //formatting date to 12hr format string and store it to state
  const handleTime = (selectedTime) => { 
    const formattedTime = convertToTwelveHourFormat(selectedTime);
    setAppointmentFormData({
      ...appointmentFormData,
      appointmentTime: formattedTime,
    });
  };
  // handling the previous button
  const handlePreviousClick = () => {
    navigate("/departmentform");
  };
  // handling the next button
  const handleNextClick = () => {
    setAppointmentScheduleFormSubmitted(true);
    validateAppointmentScheduleFormData();
  };

  //on validation redirecting to next page
  useEffect(() => {
    if (isAppointmentScheduleFormSubmitted && isAppointmentScheduleFormValid) {
      navigate("/selectionsummary");
    }
  }, [
    isAppointmentScheduleFormSubmitted,
    isAppointmentScheduleFormValid 
  ]); 
  return (
    <>
      <div className="col-lg-7 col-md-7 col-sm-7 col-12">
        <img src={TimeSelectionImg} className="img-fluid" alt="" />
      </div>
      <div className="col-lg-5 col-md-5 col-sm-5 col-12">
        <form className="shadow p-5 rounded" action="">

        <div className="mb-3">
          <label htmlFor="patientName" className="form-label">
            Select Date For The Appointment
          </label>
          <input
            type="date"
            className="form-control"
            min={currentDate}
            value={appointmentFormData.appointmentDate? formatDateToYYYYMMdd(appointmentFormData.appointmentDate) : ""}
            ref={dateInput} 
            onFocus={() => handleFocus("date")}
            onChange={(e) => {
              handleDate(e.target.value);
            }}
          />

          {appointmentScheduleFormError.appointmentDate && (
            <p className="text-danger">
              {appointmentScheduleFormError.appointmentDate}
            </p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="patientName" className="form-label">
            Select Time For The Appointment
          </label>
          <input
            disabled={!isDateSelected}
            type="time"
            className="form-control"
            ref={timeInput}
            value={appointmentFormData.appointmentTime? convertToTwentyFourHourFormat(appointmentFormData.appointmentTime) : ""}
            
            onFocus={() => handleFocus("time")}
            onChange={(e) => {
              handleTime(e.target.value);
            }}
          />
          {appointmentScheduleFormError.appointmentTime && (
            <p className="text-danger">
              {appointmentScheduleFormError.appointmentTime}
            </p>
          )}
        </div>
        </form>
      </div>

      <div className="d-flex justify-content-between my-5">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handlePreviousClick}
        >
          Previous
        </button>
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
