import React from "react";
import { Navigate } from "react-router-dom";
import WithUser from "../component/WithUser";

const UserRoute = ({ children, user }) => {
  console.log("Check user in Private: ", user);
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};

export default WithUser(UserRoute);
