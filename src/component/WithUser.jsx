import { useContext } from "react";
import { UserContext } from "../Context/UserContextProvider";

function WithUser(IncomingComponent) {
  const OutgoingComponent = () => {
    const { logIn, googleSignIn, user } = useContext(UserContext);
    return (
      <IncomingComponent
        logIn={logIn}
        googleSignIn={googleSignIn}
        user={user}
      />
    );
  };

  return OutgoingComponent;
}
export default WithUser;
