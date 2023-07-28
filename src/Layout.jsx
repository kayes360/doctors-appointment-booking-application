import React from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="container">
      <h1 className="text-center mt-5">
        Doctor's Appointment Booking Application 
      </h1>
      <div className="row align-items-center">
        <Outlet />
      </div>
    </div>
  );
}
