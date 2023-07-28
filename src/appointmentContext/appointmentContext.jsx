import { useState } from "react";
import { createContext } from "react";

const initialState = {
  patientName: "",
  patientPhone: "",
  patientEmail: "",
  patientAge: "",
  patientGender: "",

  departmentName: "", 
  doctorName: "",

  appointmentDate: "",
  appointmentTime: "",
};

export const AppointmentContext = createContext();
export const AppointmentContextProvider = ({ children }) => {
 
  const [appointmentFormData, setAppointmentFormData] = useState(initialState)
  return (
    <AppointmentContext.Provider value={{appointmentFormData, setAppointmentFormData}}>
      {children}
    </AppointmentContext.Provider>
  );
};
