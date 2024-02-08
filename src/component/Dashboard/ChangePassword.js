import React, { useState } from "react";

import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";
import { Container } from "react-bootstrap";

import { currentUser, isLoggedIn } from "../../auth";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { changePasswordService } from "../../Services/User_service";

function ChangePassword() {
  const userAuthenticated = isLoggedIn();
  const currentUserData = currentUser();
  // console.log(currentUserData);
  const [currentPassword, setcurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate =useNavigate();

  if (!userAuthenticated) {
    return <Navigate to="/loginForm" />;
  }

  const handleCurrentPasswordChange = (event) => {
    setcurrentPassword(event.target.value);
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleChangePassword = (event) => {
    event.preventDefault();

    changePasswordService(
      currentUserData.sub,
      currentPassword,
      newPassword
    )
      .then((response) => {
        // Assuming the server returns success
        toast.success("Password changed successfully!");
        
        navigate("/loginForm"); // Navigate to login page
        // doLogout(); // Logout the user
      })

       
      .catch((error) => {
        console.error("Error changing password:", error);

        if (error.response) {
          console.error("Server responded with:", error.response.data);
          console.error("Status Code:", error.response.status);
          console.error("Headers:", error.response.headers);
        } else if (error.request) {
          console.error("No response received:", error.request);
        } else {
          console.error("Error setting up the request:", error.message);
        }

        toast.error("Failed to change password. Please try again.");
      });
  };

  return (
    <div className="changePassword_container">
      <DashboardHeader />
      <div className="d-flex">
        <div>
          <DashboardSidebar />
        </div>
        <main className="changePasswordMain_container">
          <Container>
            <h5>Change Password</h5>
            <hr />

            <div className="changePassword">
              <form onSubmit={handleChangePassword}>
                <div>
                  <label className="col-3">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={currentUserData.sub}
                    disabled
                  />
                </div>
                <div>
                  <label className="col-3">Current password</label>
                  <input
                    type="password"
                    className="form-control"
                    value={currentPassword}
                    onChange={handleCurrentPasswordChange}
                  />
                </div>
                <div>
                  <label className="col-3">New password</label>
                  <input
                    type="password"
                    className="form-control"
                    value={newPassword}
                    onChange={handleNewPasswordChange}
                  />
                </div>
                <button className="btn btn-primary w-50" type="submit">
                  Change Password
                </button>
              </form>
            </div>
          </Container>
        </main>
      </div>
    </div>
  );
}

export default ChangePassword;