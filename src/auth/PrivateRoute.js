// PrivateRoute.js
import React from "react";
import { Route, Navigate } from "react-router-dom";
import { isLoggedIn } from ".";
// import { isLoggedIn } from "../../component/auth";

const PrivateRoute = ({ path, element }) => {
  return (
    <Route
      path={path}
      element={isLoggedIn() ? element : <Navigate to="/loginForm" />}
    />
  );
};
export default PrivateRoute;
