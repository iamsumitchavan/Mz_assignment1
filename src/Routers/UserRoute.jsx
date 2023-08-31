import React from "react";
import { Navigate } from "react-router-dom";
import WithUser from "../component/WithUser";

const UserRoute = ({ children, user }) => {
  console.log("userroute si called");
  if (!user) {
    return <Navigate to="/" />;
  }
  return <div>{children}</div>;
};

export default WithUser(UserRoute);
