import LoginPage from "./pages/LoginPage";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "./Firebase";
import { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState({});

  function logIn(email, password) {
    console.log("email and password is", email, password);
    return signInWithEmailAndPassword(auth, email, password);
  }

  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("Auth", currentuser);
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <div>
      <div>
        <LoginPage logIn={logIn} googleSignIn={googleSignIn} />
      </div>
    </div>
  );
}
export default App;
