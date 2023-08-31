import { useContext } from "react";
import { UserContext } from "../Context/UserContextProvider";
import { useNavigate } from "react-router-dom";

function WithUser(IncomingComponent) {
  const OutgoingComponent = () => {
    const { logIn, googleSignIn, user, logOut, signUp, navigate } =
      useContext(UserContext);
    return (
      <IncomingComponent
        logIn={logIn}
        googleSignIn={googleSignIn}
        user={user}
        logOut={logOut}
        signUp={signUp}
        navigate={navigate}
      />
    );
  };

  return OutgoingComponent;
}
export default WithUser;
