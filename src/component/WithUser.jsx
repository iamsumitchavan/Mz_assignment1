import { useContext } from "react";
import { UserContext } from "../Context/UserContextProvider";

function WithUser(IncomingComponent) {
  const OutgoingComponent = () => {
    const { logIn, googleSignIn, user, logOut } = useContext(UserContext);
    return (
      <IncomingComponent
        logIn={logIn}
        googleSignIn={googleSignIn}
        user={user}
        logOut={logOut}
      />
    );
  };

  return OutgoingComponent;
}
export default WithUser;
