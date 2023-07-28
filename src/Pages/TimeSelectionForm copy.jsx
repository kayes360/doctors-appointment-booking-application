import React from "react";
import { NavLink } from "react-router-dom";
import TimeSelectionImg from "../assets/img/TimeSelection.png";
import DayTimePicker from "@mooncake-dev/react-day-time-picker";

export default function TimeSelectionForm() {
  const handleScheduled = (dateTime) => {
    console.log("scheduled: ", dateTime);
  };
  return (
    <>
      <div className="col-7">
        <img src={TimeSelectionImg} className="img-fluid" alt="" />
      </div>
      <div className="col-5">
        <DayTimePicker
          isLoading={false}
          timeSlotSizeMinutes={60}
          confirmText={""}
          onConfirm={handleScheduled}
        />
      </div>

      <div className="d-grid d-md-flex justify-content-md-between">
        <NavLink to="/departmentform" className="nav-btn  btn btn-primary ">
          Previous
        </NavLink>
        <button
          type="button"
          className="nav-btn btn btn-primary"
        >
          {/* <button to="/selectionsummary" className="nav-btn  btn btn-primary "> */}
          Next
        </button>
      </div>
    </>
  );
}
