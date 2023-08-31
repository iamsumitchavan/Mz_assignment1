import LoginPage from "./pages/LoginPage";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import UserContextProvider from "./Context/UserContextProvider";
import AuthRoute from "./Routers/AuthRoute";
import UserRoute from "./Routers/UserRoute";
import SignUppage from "./pages/SignUppage";
import StateContextProvider from "./Context/StateContextProvider";

function App() {
  let navigate = useNavigate();
  return (
    <div>
      <UserContextProvider>
        <StateContextProvider>
          <Routes>
            <Route index element={<LoginPage />} />
            <Route path="/home" element={<Home />} />
            <Route
              path="/signup"
              element={<SignUppage navigate={navigate} />}
            />
          </Routes>
        </StateContextProvider>
      </UserContextProvider>
    </div>
  );
}
export default App;
