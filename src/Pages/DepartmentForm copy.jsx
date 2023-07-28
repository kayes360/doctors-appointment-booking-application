import React from "react";
import { NavLink } from "react-router-dom";
import DepartmentFormImg from "../assets/img/DepartmentForm.png";
 
export default function DepartmentForm() {
  return (
    <>
      <div className="col-7">
        <img src={DepartmentFormImg} className="img-fluid" alt="" />
      </div>
      <div className="col-5">
        <form className="row g-3">
       
          <select defaultValue={'Default'} className="form-select" aria-label="Default select example">
            <option  value="Default" disabled>Select Departmment</option>
            Cardiology
            Neurology
            Urology
            Radiology
            Orthopedics
            Gynaecology
            Ophthalmology
            Nephrology
            Haematology
            Otorhinolaryngology
            Surgery
            Pathology
            Medicine
            Paediatrics
            Dermatology
            Rheumatology
            Anaesthetics
            Emergency medicine
            General surgery
            General medicine
            Intensive care medicine
            Outpatient department
            Obstetrics and gynaecology
            Oral and maxillofacial surgery
          </select> 
          <select  defaultValue={'Default'} className="form-select" aria-label="Default select example">
            <option  value="Default" disabled>Select Doctor</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </form>
      </div>

      <div className="d-grid d-md-flex justify-content-between">
        <NavLink to="/" className="nav-btn   btn btn-primary ">
          Previous
        </NavLink>
        <NavLink to="/timeselectionform" className="nav-btn   btn btn-primary ">
          Next
        </NavLink>
      </div>
    </>
  );
}
