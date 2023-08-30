import { useContext } from "react";
import WithUser from "../component/WithUser";
import { Navigate } from "react-router-dom";
import { UserContext } from "../Context/UserContextProvider";

const UserRoute = ({ children }) => {
  console.log("userroute children ", children);
  const { user } = useContext(UserContext);
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};

export default WithUser(UserRoute);
