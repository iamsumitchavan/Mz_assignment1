import { createContext } from "react";
import { auth } from "../Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { useState, useEffect } from "react";
import Loading from "../component/Loading";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

function UserContextProvider({ children }) {
  console.log("provider called");
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    return signOut(auth);
  }
  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <UserContext.Provider
        value={{ user, logIn, googleSignIn, logOut, signUp, navigate }}
      >
        {children}
      </UserContext.Provider>
    </div>
  );
}

export default UserContextProvider;
