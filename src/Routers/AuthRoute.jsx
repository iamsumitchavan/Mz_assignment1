import { useContext } from "react";
import WithUser from "../component/WithUser";
import { Navigate } from "react-router-dom";
import { UserContext } from "../Context/UserContextProvider";

const AuthRoute = ({ children, user }) => {
  console.log("Authroute is called");
  if (user) {
    return <Navigate to="/home" />;
  }
  return children;
};

export default WithUser(AuthRoute);
