import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import DepartmentFormImg from "../assets/img/DepartmentForm.png";

import { AppointmentContext } from "../appointmentContext/appointmentContext";
import { useContext } from "react";

const departments = [
  { dept_id: 1, dept_name: "Cardiology" },
  { dept_id: 2, dept_name: "Neurology" },
  { dept_id: 3, dept_name: "Urology" },
  { dept_id: 4, dept_name: "Radiology" },
  { dept_id: 5, dept_name: "Orthopedics" },
  { dept_id: 6, dept_name: "Gynaecology" },
  { dept_id: 7, dept_name: "Ophthalmology" },
  { dept_id: 8, dept_name: "Nephrology" },
  { dept_id: 9, dept_name: "Haematology" },
  { dept_id: 10, dept_name: "Otorhinolaryngology" },
  { dept_id: 12, dept_name: "Surgery" },
  { dept_id: 13, dept_name: "Pathology" },
  { dept_id: 14, dept_name: "Medicine" },
  { dept_id: 15, dept_name: "Paediatrics" },
  { dept_id: 16, dept_name: "Dermatology" },
  { dept_id: 17, dept_name: "Rheumatology" },
  { dept_id: 18, dept_name: "Anaesthetics" },
  { dept_id: 19, dept_name: "Emergency medicine" },
  { dept_id: 20, dept_name: "General surgery" },
  { dept_id: 21, dept_name: "General medicine" },
  { dept_id: 22, dept_name: "Intensive care medicine" },
  { dept_id: 23, dept_name: "Outpatient department" },
  { dept_id: 24, dept_name: "Obstetrics and gynaecology" },
  { dept_id: 25, dept_name: "Oral and maxillofacial surgery" },
];
const doctor_names = [
  { doc_id: 1, dept_id: 1, doctor_name: "Myron Carpenter" },
  { doc_id: 2, dept_id: 1, doctor_name: "Peggy French" },
  { doc_id: 3, dept_id: 2, doctor_name: "Jesus Perry" },
  { doc_id: 4, dept_id: 2, doctor_name: "Rolando Bowers" },
  { doc_id: 5, dept_id: 3, doctor_name: "Donna Torres" },
  { doc_id: 6, dept_id: 3, doctor_name: "Shelia Woods" },
  { doc_id: 7, dept_id: 4, doctor_name: "Willie Walton" },
  { doc_id: 8, dept_id: 4, doctor_name: "Diane Pope" },
  { doc_id: 9, dept_id: 5, doctor_name: "Ernestine Armstrong" },
  { doc_id: 10, dept_id: 5, doctor_name: "Lena Robertson" },
  { doc_id: 11, dept_id: 6, doctor_name: "Willie Williams" },
  { doc_id: 12, dept_id: 6, doctor_name: "Alyssa Dawson" },
  { doc_id: 13, dept_id: 7, doctor_name: "Jennie Harrington" },
  { doc_id: 14, dept_id: 7, doctor_name: "Jorge Nguyen" },
  { doc_id: 15, dept_id: 8, doctor_name: "Phil Peters" },
  { doc_id: 16, dept_id: 8, doctor_name: "Barry Steele" },
  { doc_id: 17, dept_id: 9, doctor_name: "Maggie Tucker" },
  { doc_id: 18, dept_id: 9, doctor_name: "Bethany Montgomery" },
  { doc_id: 19, dept_id: 10, doctor_name: "Connie Alvarez" },
  { doc_id: 20, dept_id: 10, doctor_name: "Rudolph Greer" },
  { doc_id: 21, dept_id: 11, doctor_name: "Victor Schwartz" },
  { doc_id: 22, dept_id: 11, doctor_name: "Lee Wright" },
  { doc_id: 23, dept_id: 12, doctor_name: "Vicki Diaz" },
  { doc_id: 24, dept_id: 12, doctor_name: "Leo Santos" },
  { doc_id: 25, dept_id: 13, doctor_name: "Jeremiah Chambers" },
  { doc_id: 26, dept_id: 13, doctor_name: "Alonzo Houston" },
  { doc_id: 27, dept_id: 14, doctor_name: "Heather Neal" },
  { doc_id: 28, dept_id: 14, doctor_name: "Yvette Bowman" },
  { doc_id: 29, dept_id: 15, doctor_name: "Franklin Patrick" },
  { doc_id: 30, dept_id: 15, doctor_name: "Pedro Nash" },
  { doc_id: 31, dept_id: 16, doctor_name: "Steven Sullivan" },
  { doc_id: 32, dept_id: 16, doctor_name: "Abel Carlson" },
  { doc_id: 33, dept_id: 17, doctor_name: "Kara Phillips" },
  { doc_id: 34, dept_id: 17, doctor_name: "Omar Schultz" },
  { doc_id: 35, dept_id: 18, doctor_name: "Neal Manning" },
  { doc_id: 36, dept_id: 18, doctor_name: "Perry Soto" },
  { doc_id: 37, dept_id: 19, doctor_name: "Bryan Munoz" },
  { doc_id: 38, dept_id: 19, doctor_name: "Elvira Fernandez" },
  { doc_id: 39, dept_id: 20, doctor_name: "Rudy Pierce" },
  { doc_id: 40, dept_id: 20, doctor_name: "Matt Elliott" },
  { doc_id: 41, dept_id: 21, doctor_name: "Wallace Stevenson" },
  { doc_id: 42, dept_id: 21, doctor_name: "Leticia Goodwin" },
  { doc_id: 43, dept_id: 22, doctor_name: "Hazel Stephens" },
  { doc_id: 44, dept_id: 22, doctor_name: "Muriel Fields" },
  { doc_id: 45, dept_id: 23, doctor_name: "Samantha Pittman" },
  { doc_id: 46, dept_id: 23, doctor_name: "Chad Becker" },
  { doc_id: 47, dept_id: 24, doctor_name: "Jeanette Newman" },
  { doc_id: 48, dept_id: 24, doctor_name: "Marvin Bell" },
  { doc_id: 49, dept_id: 25, doctor_name: "Oscar Floyd" },
  { doc_id: 50, dept_id: 25, doctor_name: "Shari Conner" },
];
export default function DepartmentForm() {
  const { appointmentFormData, setAppointmentFormData } = useContext(AppointmentContext);
  const [departmentNames, setDepartmentNames] = useState([]);
  const [doctorNames, setDoctorNames] = useState([]);
  const [isDepartmentFormValid, setIsDepartmentFormValid] = useState(false);
  const [departmentFormDataError, setDepartmentFormDataError] = useState({});
  const [isDepartmentFormSubmited, setIsDepartmentFormSubmited] = useState(false);
  const navigate = useNavigate(); 

 
  //find selected departments id
  const findDepartmentIdByName = (dept_name) => {
    const department = departments.find(
      (department) => department.dept_name === dept_name
    );
    return department ? department.dept_id : null;
  };

  //fltering doctors according to department name
  const findAvailableDoctors = (dept_name) => {
    const departmentId = findDepartmentIdByName(dept_name);
    return doctor_names.filter(
      (doctor_name) => doctor_name.dept_id === departmentId
    );
  };

  //on department name change update state and update doctor name
  const handleDepartment = (dept_name) => {
    const availableDoctors = findAvailableDoctors(dept_name);
    setDoctorNames(availableDoctors);
    setAppointmentFormData({
      ...appointmentFormData,
      departmentName: dept_name,
    });
  };

  // validating the form on next click
  const validateDepartmentForm = () => {
    const newDepartmentFormErrors = {};

    //Department Name Validation
    if (appointmentFormData.departmentName === "") {
      newDepartmentFormErrors.departmentName = "Please Choose Department name";
    }

    //Doctor Name Validation
    if (appointmentFormData.doctorName === "") {
      newDepartmentFormErrors.doctorName = "Please Choose Doctor name";
    }

    setDepartmentFormDataError(newDepartmentFormErrors);
    setIsDepartmentFormValid(Object.keys(newDepartmentFormErrors).length === 0);
  };

  // handling the previous button
  const handlePreviousClick = () => {
    navigate("/");
  };

  // handling the next button
  const handleNextClick = () => {
    setIsDepartmentFormSubmited(true);
    validateDepartmentForm();
  };

  useEffect(() => {
    setDepartmentNames(departments);
    if (appointmentFormData.departmentName !== "") {
      setDoctorNames(findAvailableDoctors(appointmentFormData.departmentName));
    }
    if (isDepartmentFormValid && isDepartmentFormSubmited) {
      navigate("/timeselectionform");
    }
  }, [isDepartmentFormValid, isDepartmentFormSubmited]);

  return (
    <>
      <div className="col-lg-7 col-md-7 col-sm-7 col-12">
        <img src={DepartmentFormImg} className="img-fluid" alt="" />
      </div>
      <div className="col-lg-5 col-md-5 col-sm-5 col-12">
        <form className="row g-3">
          <div>
            <label htmlFor="departmentName" className="form-label">
              Please Choose Department Name
            </label>
            <select
              id="departmentSelector"
              value={appointmentFormData.departmentName || "Default"}
              className="form-select"
              aria-label="Default select example"
              onChange={(e) => handleDepartment(e.target.value)}
            >
              <option value="Default" disabled>
                Select Departmment
              </option>
              {departmentNames && departmentNames !== undefined
                ? departmentNames.map((department) => {
                    return (
                      <option
                        key={department.dept_id}
                        value={department.dept_name}
                      >
                        {department.dept_name}
                      </option>
                    );
                  })
                : "No Department Available"}
            </select>
            {departmentFormDataError.departmentName && (
              <p className="text-danger">
                {departmentFormDataError.departmentName}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="doctorName" className="form-label">
              Please Choose Doctor Name
            </label>
            <select
              id="doctorSelector"
              value={appointmentFormData.doctorName || "Default"}
              className="form-select"
              aria-label="Default select example"
              onChange={(e) =>
                setAppointmentFormData({
                  ...appointmentFormData,
                  doctorName: e.target.value,
                })
              }
            >
              <option value="Default" disabled>
                Select Doctor
              </option>
              {doctorNames && doctorNames !== undefined
                ? doctorNames.map((doctorName) => {
                    return (
                      <option
                        key={doctorName.doc_id}
                        value={doctorName.doctor_name}
                      >
                        {doctorName.doctor_name}
                      </option>
                    );
                  })
                : "No Doctors Available"}
            </select>
            {departmentFormDataError.doctorName && (
              <p className="text-danger">
                {departmentFormDataError.doctorName}
              </p>
            )}
          </div>
        </form>
      </div>

      <div className="d-flex justify-content-between">
        <button
          type="button"
          className=" btn btn-primary"
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
