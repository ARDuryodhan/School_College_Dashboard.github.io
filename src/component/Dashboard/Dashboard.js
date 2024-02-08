// Dashboard.js

import React from "react";

import { Navigate } from "react-router-dom";
import { isLoggedIn } from "../../auth";
import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";

function Dashboard() {
  const userAuthenticated = isLoggedIn();

  if (!userAuthenticated) {
    return <Navigate to="/loginForm" />;
  }
  return (
    <div className="dashboard_container">
      <DashboardHeader />

      <div className="dashSection">
        <DashboardSidebar />
      </div>
    </div>
  );
}

export default Dashboard;
