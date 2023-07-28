import { BrowserRouter, Route, Routes } from "react-router-dom";
import DepartmentForm from "./Pages/DepartmentForm";
import PatientForm from "./Pages/PatientForm";
import SelectionSummary from "./Pages/SelectionSummary";
import TimeSelectionForm from "./Pages/TimeSelectionForm";
import Layout from "./Layout";
import "./assets/style.css";
import { AppointmentContextProvider } from "./appointmentContext/appointmentContext";

function App() {
  return (
    <>
    <AppointmentContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index  element={<PatientForm />}></Route> 
            <Route path="departmentform" element={<DepartmentForm />}></Route>
            <Route path="timeselectionform" element={<TimeSelectionForm />}></Route>
            <Route path="selectionsummary" element={<SelectionSummary />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
      </AppointmentContextProvider>
    </>
  );
}

export default App;
